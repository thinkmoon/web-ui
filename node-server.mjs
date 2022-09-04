globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import { promises } from 'fs';
import { dirname, resolve } from 'pathe';
import { fileURLToPath } from 'url';
import axios from 'axios';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"TITLE":"指尖魔法屋-醉月思的博客","VERSION":"0.2.0 · build-20220904","KEYWORDS":["thinkmoon","指尖魔法屋","醉月思的博客"],"DESCRIPTION":"web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！","serviceUrl":"https://service.thinkmoon.cn/api","public":{"TITLE":"指尖魔法屋-醉月思的博客","VERSION":"0.2.0 · build-20220904","KEYWORDS":["thinkmoon","指尖魔法屋","醉月思的博客"],"DESCRIPTION":"web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！","serviceUrl":"https://service.thinkmoon.cn/api"}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.req.url?.startsWith("/__nuxt_error");
  let html = !isErrorPage ? await $fetch(withQuery("/__nuxt_error", errorObject)).catch(() => null) : null;
  if (!html) {
    const { template } = await import('../error-500.mjs');
    html = template(errorObject);
  }
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/.nojekyll": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2022-09-04T13:58:51.052Z",
    "size": 0,
    "path": "../public/.nojekyll"
  },
  "/CNAME": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"10-7Gf7kLxqUTPXP5ywLte1OYzrDjU\"",
    "mtime": "2022-09-04T13:58:51.052Z",
    "size": 16,
    "path": "../public/CNAME"
  },
  "/ads.js": {
    "type": "application/javascript",
    "etag": "\"2a6-QG3gIcUryNH3lTuW9EhtBAeMq38\"",
    "mtime": "2022-09-04T13:58:51.052Z",
    "size": 678,
    "path": "../public/ads.js"
  },
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-09-04T13:58:51.052Z",
    "size": 58,
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-09-04T13:58:51.052Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-rNrKs1nSkmU1PPE2uMSVSowftYg\"",
    "mtime": "2022-09-04T13:58:51.052Z",
    "size": 78,
    "path": "../public/robots.txt"
  },
  "/_nuxt/404.ac0116ad.js": {
    "type": "application/javascript",
    "etag": "\"a3-w3g1j9gvW3wk7H/JFSzPxKimz5o\"",
    "mtime": "2022-09-04T13:58:51.048Z",
    "size": 163,
    "path": "../public/_nuxt/404.ac0116ad.js"
  },
  "/_nuxt/BaiduSite.581fe5bd.js": {
    "type": "application/javascript",
    "etag": "\"3a-0neDKDzDjpm6hwpt5P+MziDeNpA\"",
    "mtime": "2022-09-04T13:58:51.048Z",
    "size": 58,
    "path": "../public/_nuxt/BaiduSite.581fe5bd.js"
  },
  "/_nuxt/Footer.62c5bfb5.js": {
    "type": "application/javascript",
    "etag": "\"368-1i+KiNDH8TyAJ70gzqZuwIvJtkE\"",
    "mtime": "2022-09-04T13:58:51.048Z",
    "size": 872,
    "path": "../public/_nuxt/Footer.62c5bfb5.js"
  },
  "/_nuxt/PostList.97d2ca78.js": {
    "type": "application/javascript",
    "etag": "\"97c-k3frB0ICFM8g1MojsPVQg5WViiI\"",
    "mtime": "2022-09-04T13:58:51.048Z",
    "size": 2428,
    "path": "../public/_nuxt/PostList.97d2ca78.js"
  },
  "/_nuxt/TimeUtils.e439e4c7.js": {
    "type": "application/javascript",
    "etag": "\"63-echP/0JAlK0X4P4CvvzaLtbcGbA\"",
    "mtime": "2022-09-04T13:58:51.048Z",
    "size": 99,
    "path": "../public/_nuxt/TimeUtils.e439e4c7.js"
  },
  "/_nuxt/_cid_.81d217d1.js": {
    "type": "application/javascript",
    "etag": "\"680-RFQbOORtMK6AOqBpnZcl44sdRwc\"",
    "mtime": "2022-09-04T13:58:51.048Z",
    "size": 1664,
    "path": "../public/_nuxt/_cid_.81d217d1.js"
  },
  "/_nuxt/_cid_.d85db5b7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"87-Akb3e/t7jZ2kQkwsDWY5mnzJ9UA\"",
    "mtime": "2022-09-04T13:58:51.048Z",
    "size": 135,
    "path": "../public/_nuxt/_cid_.d85db5b7.css"
  },
  "/_nuxt/_pageIndex_.313e9cd8.js": {
    "type": "application/javascript",
    "etag": "\"391-GPB0yuOt1eUm0aa/WVUEX+ZGPG0\"",
    "mtime": "2022-09-04T13:58:51.048Z",
    "size": 913,
    "path": "../public/_nuxt/_pageIndex_.313e9cd8.js"
  },
  "/_nuxt/_pageIndex_.5f2a6f76.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"178-6Rc9BvTsPXvmVu5/iGhoZMmjCVE\"",
    "mtime": "2022-09-04T13:58:51.048Z",
    "size": 376,
    "path": "../public/_nuxt/_pageIndex_.5f2a6f76.css"
  },
  "/_nuxt/_pageIndex_.c571f0ff.js": {
    "type": "application/javascript",
    "etag": "\"3cb-MtqhtUP3KX7BUUnybj1QrEqKst8\"",
    "mtime": "2022-09-04T13:58:51.048Z",
    "size": 971,
    "path": "../public/_nuxt/_pageIndex_.c571f0ff.js"
  },
  "/_nuxt/_pageIndex_.fb813d50.js": {
    "type": "application/javascript",
    "etag": "\"591-4GqaH5Td1WaLS5o0ih4qgcBWz+s\"",
    "mtime": "2022-09-04T13:58:51.048Z",
    "size": 1425,
    "path": "../public/_nuxt/_pageIndex_.fb813d50.js"
  },
  "/_nuxt/admin.6944d35d.js": {
    "type": "application/javascript",
    "etag": "\"5d1-2/AULF1bcEKuviDSo51u4N5M3GA\"",
    "mtime": "2022-09-04T13:58:51.048Z",
    "size": 1489,
    "path": "../public/_nuxt/admin.6944d35d.js"
  },
  "/_nuxt/admin.6e91f5a2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10c-2dGpJGJzkjr3CT1Lwq1tKTNWFqU\"",
    "mtime": "2022-09-04T13:58:51.048Z",
    "size": 268,
    "path": "../public/_nuxt/admin.6e91f5a2.css"
  },
  "/_nuxt/admin.7481d929.js": {
    "type": "application/javascript",
    "etag": "\"128-+Ctm978RJcj/SJmAq03K277pQWI\"",
    "mtime": "2022-09-04T13:58:51.044Z",
    "size": 296,
    "path": "../public/_nuxt/admin.7481d929.js"
  },
  "/_nuxt/asyncData.8b499d5a.js": {
    "type": "application/javascript",
    "etag": "\"8d3-G+VWZblNUaHkdeQM94AXvy8MccI\"",
    "mtime": "2022-09-04T13:58:51.044Z",
    "size": 2259,
    "path": "../public/_nuxt/asyncData.8b499d5a.js"
  },
  "/_nuxt/auth.4c904480.js": {
    "type": "application/javascript",
    "etag": "\"87-8DU6D9f15Fw+YczRZdcMxUtftPk\"",
    "mtime": "2022-09-04T13:58:51.044Z",
    "size": 135,
    "path": "../public/_nuxt/auth.4c904480.js"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-09-04T13:58:51.044Z",
    "size": 755597,
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default.7a84528c.js": {
    "type": "application/javascript",
    "etag": "\"8b7-lDvl87ZuYBy6qwcKUtQdh0HLm8o\"",
    "mtime": "2022-09-04T13:58:51.044Z",
    "size": 2231,
    "path": "../public/_nuxt/default.7a84528c.js"
  },
  "/_nuxt/default.e87c0fd5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"36d-Sard6/nX+6F68nC9DUTqil+F74E\"",
    "mtime": "2022-09-04T13:58:51.044Z",
    "size": 877,
    "path": "../public/_nuxt/default.e87c0fd5.css"
  },
  "/_nuxt/editor.46f3a4ca.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"20b-aWouG2QOf3xHxNLmOm4vMypzsVw\"",
    "mtime": "2022-09-04T13:58:51.044Z",
    "size": 523,
    "path": "../public/_nuxt/editor.46f3a4ca.css"
  },
  "/_nuxt/editor.fa80a2f8.js": {
    "type": "application/javascript",
    "etag": "\"d4a-rcUqQvWOrp4G+/V1Radheqk21Tc\"",
    "mtime": "2022-09-04T13:58:51.044Z",
    "size": 3402,
    "path": "../public/_nuxt/editor.fa80a2f8.js"
  },
  "/_nuxt/entry.5cfcb20e.js": {
    "type": "application/javascript",
    "etag": "\"255b90-1qFp6+2aI59M4QEJL9SNBnHJG2k\"",
    "mtime": "2022-09-04T13:58:51.044Z",
    "size": 2448272,
    "path": "../public/_nuxt/entry.5cfcb20e.js"
  },
  "/_nuxt/entry.61dcaeb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b293-HOv+CeDmlCqz6ZNlBcWycQbGPVQ\"",
    "mtime": "2022-09-04T13:58:51.040Z",
    "size": 373395,
    "path": "../public/_nuxt/entry.61dcaeb9.css"
  },
  "/_nuxt/error-404.4e6587a1.js": {
    "type": "application/javascript",
    "etag": "\"8a8-NcIOyVaP4W7Cygq0azG7pKXDJm0\"",
    "mtime": "2022-09-04T13:58:51.040Z",
    "size": 2216,
    "path": "../public/_nuxt/error-404.4e6587a1.js"
  },
  "/_nuxt/error-404.dbc0c239.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e34-HhqYljnhP9Vkrd7/I6g4pFB4nic\"",
    "mtime": "2022-09-04T13:58:51.040Z",
    "size": 3636,
    "path": "../public/_nuxt/error-404.dbc0c239.css"
  },
  "/_nuxt/error-500.423c5935.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7a4-hO/+uEsvpC6XAy8bY4Ur1aYzjHg\"",
    "mtime": "2022-09-04T13:58:51.040Z",
    "size": 1956,
    "path": "../public/_nuxt/error-500.423c5935.css"
  },
  "/_nuxt/error-500.91751c05.js": {
    "type": "application/javascript",
    "etag": "\"751-cyOYOQaa0z7G76iE4Ft/C/PkvCs\"",
    "mtime": "2022-09-04T13:58:51.040Z",
    "size": 1873,
    "path": "../public/_nuxt/error-500.91751c05.js"
  },
  "/_nuxt/error-component.3812edbc.js": {
    "type": "application/javascript",
    "etag": "\"439-CprgXgmMf6LOlp1iDfP1kgr6k3s\"",
    "mtime": "2022-09-04T13:58:51.040Z",
    "size": 1081,
    "path": "../public/_nuxt/error-component.3812edbc.js"
  },
  "/_nuxt/index.469c02fe.js": {
    "type": "application/javascript",
    "etag": "\"2dc-jIHtjpevl7hLzRZ7mvmeG+8uu8k\"",
    "mtime": "2022-09-04T13:58:51.040Z",
    "size": 732,
    "path": "../public/_nuxt/index.469c02fe.js"
  },
  "/_nuxt/index.506c05f8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"28-i0dEkVFnaOlIdXI8UtjCZ7PfsAg\"",
    "mtime": "2022-09-04T13:58:51.040Z",
    "size": 40,
    "path": "../public/_nuxt/index.506c05f8.css"
  },
  "/_nuxt/index.5fae6cf9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"25b-vZW1oTtaX9Rqw2mlHMV/iAH/Seg\"",
    "mtime": "2022-09-04T13:58:51.040Z",
    "size": 603,
    "path": "../public/_nuxt/index.5fae6cf9.css"
  },
  "/_nuxt/index.913d6178.js": {
    "type": "application/javascript",
    "etag": "\"8c-INFoLr2/ebGZBDHiHe36lOy6FVs\"",
    "mtime": "2022-09-04T13:58:51.040Z",
    "size": 140,
    "path": "../public/_nuxt/index.913d6178.js"
  },
  "/_nuxt/index.b25560d1.js": {
    "type": "application/javascript",
    "etag": "\"345-ROn6G28hT7j72KM6XdrUZqy0QFA\"",
    "mtime": "2022-09-04T13:58:51.040Z",
    "size": 837,
    "path": "../public/_nuxt/index.b25560d1.js"
  },
  "/_nuxt/index.ba9b152d.js": {
    "type": "application/javascript",
    "etag": "\"325-AiF9BSMYKfVDS1tBX8mAtA5UbKw\"",
    "mtime": "2022-09-04T13:58:51.040Z",
    "size": 805,
    "path": "../public/_nuxt/index.ba9b152d.js"
  },
  "/_nuxt/index.c7621f5e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d-erk17UAx45P85b1SU5JkQVTE0gg\"",
    "mtime": "2022-09-04T13:58:51.036Z",
    "size": 45,
    "path": "../public/_nuxt/index.c7621f5e.css"
  },
  "/_nuxt/login.223b5486.js": {
    "type": "application/javascript",
    "etag": "\"540-kLN7GD4bD3SdKWeNyiZspLa6xb0\"",
    "mtime": "2022-09-04T13:58:51.036Z",
    "size": 1344,
    "path": "../public/_nuxt/login.223b5486.js"
  },
  "/_nuxt/login.2248ea52.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8f-bqf6jobwqFYgiYeXy8Zgzhe19aQ\"",
    "mtime": "2022-09-04T13:58:51.036Z",
    "size": 143,
    "path": "../public/_nuxt/login.2248ea52.css"
  },
  "/_nuxt/post-list.ae277664.js": {
    "type": "application/javascript",
    "etag": "\"87a-LSbkS4xXJlnJp7a021ZRxDh9TqE\"",
    "mtime": "2022-09-04T13:58:51.036Z",
    "size": 2170,
    "path": "../public/_nuxt/post-list.ae277664.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, id + "/index.html" + encoding]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size) {
    event.res.setHeader("Content-Length", asset.size);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _TvVw0r = async (req, res) => {
  if (req.url === "/sitemap.xml") {
    const sitemap = await axios.get("http://127.0.0.1:9447/api/sitemap.xml");
    res.end(sitemap.data);
  }
};

const _lazy_ssNw48 = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _TvVw0r, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_ssNw48, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_ssNw48, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const hostname = process.env.NITRO_HOST || process.env.HOST || "0.0.0.0";
server.listen(port, hostname, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  console.log(`Listening on ${protocol}://${hostname}:${port}${useRuntimeConfig().app.baseURL}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
