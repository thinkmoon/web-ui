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

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"TITLE":"指尖魔法屋-醉月思的博客","VERSION":"0.2.0 · build-20220906","KEYWORDS":["thinkmoon","指尖魔法屋","醉月思的博客"],"DESCRIPTION":"web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！","serviceUrl":"https://service.thinkmoon.cn/api","public":{"TITLE":"指尖魔法屋-醉月思的博客","VERSION":"0.2.0 · build-20220906","KEYWORDS":["thinkmoon","指尖魔法屋","醉月思的博客"],"DESCRIPTION":"web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！","serviceUrl":"https://service.thinkmoon.cn/api"}};
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
    "mtime": "2022-09-06T15:36:15.560Z",
    "size": 0,
    "path": "../public/.nojekyll"
  },
  "/CNAME": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"10-7Gf7kLxqUTPXP5ywLte1OYzrDjU\"",
    "mtime": "2022-09-06T15:36:15.560Z",
    "size": 16,
    "path": "../public/CNAME"
  },
  "/ads.js": {
    "type": "application/javascript",
    "etag": "\"2a6-QG3gIcUryNH3lTuW9EhtBAeMq38\"",
    "mtime": "2022-09-06T15:36:15.560Z",
    "size": 678,
    "path": "../public/ads.js"
  },
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-09-06T15:36:15.560Z",
    "size": 58,
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-09-06T15:36:15.560Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-rNrKs1nSkmU1PPE2uMSVSowftYg\"",
    "mtime": "2022-09-06T15:36:15.560Z",
    "size": 78,
    "path": "../public/robots.txt"
  },
  "/_nuxt/404.dc47f0e1.js": {
    "type": "application/javascript",
    "etag": "\"a3-Rikn5xCyBRQVwjsr261CI9EW8so\"",
    "mtime": "2022-09-06T15:36:15.560Z",
    "size": 163,
    "path": "../public/_nuxt/404.dc47f0e1.js"
  },
  "/_nuxt/BaiduSite.8818081d.js": {
    "type": "application/javascript",
    "etag": "\"3a-9Tf5FyO0ZFLqWvGzzzBqPigY0tw\"",
    "mtime": "2022-09-06T15:36:15.560Z",
    "size": 58,
    "path": "../public/_nuxt/BaiduSite.8818081d.js"
  },
  "/_nuxt/Footer.ddf55cea.js": {
    "type": "application/javascript",
    "etag": "\"368-LqMoYe5sI2YJq6Fk7rtY+uwgKio\"",
    "mtime": "2022-09-06T15:36:15.560Z",
    "size": 872,
    "path": "../public/_nuxt/Footer.ddf55cea.js"
  },
  "/_nuxt/PostList.5861a6a4.js": {
    "type": "application/javascript",
    "etag": "\"97c-ttMONyw0TTsohTEEAo+UyztN6gQ\"",
    "mtime": "2022-09-06T15:36:15.560Z",
    "size": 2428,
    "path": "../public/_nuxt/PostList.5861a6a4.js"
  },
  "/_nuxt/PostList.5861a6a4.js.gz": {
    "type": "application/gzip",
    "etag": "\"45b-BIlZd7qD/BB5Eah3k/EOTlBtvNo\"",
    "mtime": "2022-09-06T15:36:15.560Z",
    "size": 1115,
    "path": "../public/_nuxt/PostList.5861a6a4.js.gz"
  },
  "/_nuxt/TimeUtils.7f86d495.js": {
    "type": "application/javascript",
    "etag": "\"63-GXxl3ADGG1uAl77zGcdjsJO6UP8\"",
    "mtime": "2022-09-06T15:36:15.560Z",
    "size": 99,
    "path": "../public/_nuxt/TimeUtils.7f86d495.js"
  },
  "/_nuxt/_cid_.d85db5b7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"87-Akb3e/t7jZ2kQkwsDWY5mnzJ9UA\"",
    "mtime": "2022-09-06T15:36:15.560Z",
    "size": 135,
    "path": "../public/_nuxt/_cid_.d85db5b7.css"
  },
  "/_nuxt/_cid_.edd8ed27.js": {
    "type": "application/javascript",
    "etag": "\"680-S1ISN87uFOqqR8GD3Mn7kvvAyQ4\"",
    "mtime": "2022-09-06T15:36:15.556Z",
    "size": 1664,
    "path": "../public/_nuxt/_cid_.edd8ed27.js"
  },
  "/_nuxt/_cid_.edd8ed27.js.gz": {
    "type": "application/gzip",
    "etag": "\"3f7-TBCXOxozrSRELfLifOYKA6I9sHQ\"",
    "mtime": "2022-09-06T15:36:15.556Z",
    "size": 1015,
    "path": "../public/_nuxt/_cid_.edd8ed27.js.gz"
  },
  "/_nuxt/_pageIndex_.5ca9b0bf.js": {
    "type": "application/javascript",
    "etag": "\"391-94FgP3iGRelOO0M2EREyRa5GtS0\"",
    "mtime": "2022-09-06T15:36:15.556Z",
    "size": 913,
    "path": "../public/_nuxt/_pageIndex_.5ca9b0bf.js"
  },
  "/_nuxt/_pageIndex_.5f2a6f76.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"178-6Rc9BvTsPXvmVu5/iGhoZMmjCVE\"",
    "mtime": "2022-09-06T15:36:15.556Z",
    "size": 376,
    "path": "../public/_nuxt/_pageIndex_.5f2a6f76.css"
  },
  "/_nuxt/_pageIndex_.e32a00e1.js": {
    "type": "application/javascript",
    "etag": "\"591-MoeQpgloqAY/6iPV82BADaVyn/I\"",
    "mtime": "2022-09-06T15:36:15.556Z",
    "size": 1425,
    "path": "../public/_nuxt/_pageIndex_.e32a00e1.js"
  },
  "/_nuxt/_pageIndex_.e32a00e1.js.gz": {
    "type": "application/gzip",
    "etag": "\"315-uU4rNx8S5Z+mgJg25HQlxaBOjLU\"",
    "mtime": "2022-09-06T15:36:15.556Z",
    "size": 789,
    "path": "../public/_nuxt/_pageIndex_.e32a00e1.js.gz"
  },
  "/_nuxt/_pageIndex_.ee58a4e8.js": {
    "type": "application/javascript",
    "etag": "\"3cb-RUyYthQAhHtfQtCO5r7XFkocm3w\"",
    "mtime": "2022-09-06T15:36:15.556Z",
    "size": 971,
    "path": "../public/_nuxt/_pageIndex_.ee58a4e8.js"
  },
  "/_nuxt/admin.242ea0e7.js": {
    "type": "application/javascript",
    "etag": "\"128-DIxCQAO1XNIbHLQdonXSmGeJMds\"",
    "mtime": "2022-09-06T15:36:15.556Z",
    "size": 296,
    "path": "../public/_nuxt/admin.242ea0e7.js"
  },
  "/_nuxt/admin.6e91f5a2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10c-2dGpJGJzkjr3CT1Lwq1tKTNWFqU\"",
    "mtime": "2022-09-06T15:36:15.556Z",
    "size": 268,
    "path": "../public/_nuxt/admin.6e91f5a2.css"
  },
  "/_nuxt/admin.d2153e05.js": {
    "type": "application/javascript",
    "etag": "\"5d1-nm9D12PCFzElBTGL84wD8ngpUwM\"",
    "mtime": "2022-09-06T15:36:15.556Z",
    "size": 1489,
    "path": "../public/_nuxt/admin.d2153e05.js"
  },
  "/_nuxt/admin.d2153e05.js.gz": {
    "type": "application/gzip",
    "etag": "\"2be-iT+cqkdxkd00VFxfLGOA23MhCts\"",
    "mtime": "2022-09-06T15:36:15.556Z",
    "size": 702,
    "path": "../public/_nuxt/admin.d2153e05.js.gz"
  },
  "/_nuxt/asyncData.6925a505.js": {
    "type": "application/javascript",
    "etag": "\"8d3-AX29AIVN4FxOCH+keChXUg+7q+U\"",
    "mtime": "2022-09-06T15:36:15.556Z",
    "size": 2259,
    "path": "../public/_nuxt/asyncData.6925a505.js"
  },
  "/_nuxt/asyncData.6925a505.js.gz": {
    "type": "application/gzip",
    "etag": "\"416-DFljUgX9KduW1LxdejdWAcoxNHQ\"",
    "mtime": "2022-09-06T15:36:15.556Z",
    "size": 1046,
    "path": "../public/_nuxt/asyncData.6925a505.js.gz"
  },
  "/_nuxt/auth.82643f14.js": {
    "type": "application/javascript",
    "etag": "\"87-73NGqDVqCbJa3tUmQb+WAjBSc90\"",
    "mtime": "2022-09-06T15:36:15.556Z",
    "size": 135,
    "path": "../public/_nuxt/auth.82643f14.js"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-09-06T15:36:15.556Z",
    "size": 755597,
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default.9c495bda.js": {
    "type": "application/javascript",
    "etag": "\"8b7-C+LY6NCnULumO4BVrccmX2KD9hg\"",
    "mtime": "2022-09-06T15:36:15.552Z",
    "size": 2231,
    "path": "../public/_nuxt/default.9c495bda.js"
  },
  "/_nuxt/default.9c495bda.js.gz": {
    "type": "application/gzip",
    "etag": "\"451-tNh5VYzXVvb00lzzRyKrpQN92/U\"",
    "mtime": "2022-09-06T15:36:15.552Z",
    "size": 1105,
    "path": "../public/_nuxt/default.9c495bda.js.gz"
  },
  "/_nuxt/default.e87c0fd5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"36d-Sard6/nX+6F68nC9DUTqil+F74E\"",
    "mtime": "2022-09-06T15:36:15.552Z",
    "size": 877,
    "path": "../public/_nuxt/default.e87c0fd5.css"
  },
  "/_nuxt/editor.46f3a4ca.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"20b-aWouG2QOf3xHxNLmOm4vMypzsVw\"",
    "mtime": "2022-09-06T15:36:15.552Z",
    "size": 523,
    "path": "../public/_nuxt/editor.46f3a4ca.css"
  },
  "/_nuxt/editor.54e3915f.js": {
    "type": "application/javascript",
    "etag": "\"d4a-cCohKn82j1fQt9oS8tKktnt7Fxg\"",
    "mtime": "2022-09-06T15:36:15.552Z",
    "size": 3402,
    "path": "../public/_nuxt/editor.54e3915f.js"
  },
  "/_nuxt/editor.54e3915f.js.gz": {
    "type": "application/gzip",
    "etag": "\"56d-GfUVr3XDGpEATBCKY143/M7gwkk\"",
    "mtime": "2022-09-06T15:36:15.552Z",
    "size": 1389,
    "path": "../public/_nuxt/editor.54e3915f.js.gz"
  },
  "/_nuxt/entry.61dcaeb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b293-HOv+CeDmlCqz6ZNlBcWycQbGPVQ\"",
    "mtime": "2022-09-06T15:36:15.552Z",
    "size": 373395,
    "path": "../public/_nuxt/entry.61dcaeb9.css"
  },
  "/_nuxt/entry.61dcaeb9.css.gz": {
    "type": "application/gzip",
    "etag": "\"eb93-LsqpmZv7/sV0QIM78qnrYJNBvVo\"",
    "mtime": "2022-09-06T15:36:15.552Z",
    "size": 60307,
    "path": "../public/_nuxt/entry.61dcaeb9.css.gz"
  },
  "/_nuxt/entry.7d0c8b51.js": {
    "type": "application/javascript",
    "etag": "\"255996-JOS3IzkaBgfFRYoW881N5Vh9Y48\"",
    "mtime": "2022-09-06T15:36:15.552Z",
    "size": 2447766,
    "path": "../public/_nuxt/entry.7d0c8b51.js"
  },
  "/_nuxt/entry.7d0c8b51.js.gz": {
    "type": "application/gzip",
    "etag": "\"b4fec-qHwu8P9ytn/P5XpMzMSURocQgxA\"",
    "mtime": "2022-09-06T15:36:15.548Z",
    "size": 741356,
    "path": "../public/_nuxt/entry.7d0c8b51.js.gz"
  },
  "/_nuxt/error-404.7729cee9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e34-qomFKLEnDzFbIPwCfuxqIb18mQU\"",
    "mtime": "2022-09-06T15:36:15.548Z",
    "size": 3636,
    "path": "../public/_nuxt/error-404.7729cee9.css"
  },
  "/_nuxt/error-404.7729cee9.css.gz": {
    "type": "application/gzip",
    "etag": "\"463-DdQYKAS+35MuEovnPfffuWps9ps\"",
    "mtime": "2022-09-06T15:36:15.548Z",
    "size": 1123,
    "path": "../public/_nuxt/error-404.7729cee9.css.gz"
  },
  "/_nuxt/error-404.df3b4c4c.js": {
    "type": "application/javascript",
    "etag": "\"8a8-Yug3nsucHWwwYzQgclVFjUvy4gk\"",
    "mtime": "2022-09-06T15:36:15.548Z",
    "size": 2216,
    "path": "../public/_nuxt/error-404.df3b4c4c.js"
  },
  "/_nuxt/error-404.df3b4c4c.js.gz": {
    "type": "application/gzip",
    "etag": "\"479-r5vqRKEgcDI8YO2v0YBlQqcisrg\"",
    "mtime": "2022-09-06T15:36:15.548Z",
    "size": 1145,
    "path": "../public/_nuxt/error-404.df3b4c4c.js.gz"
  },
  "/_nuxt/error-500.08851880.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7a4-PsPGHWWrltFH34P9Q5DnkUTUhRE\"",
    "mtime": "2022-09-06T15:36:15.548Z",
    "size": 1956,
    "path": "../public/_nuxt/error-500.08851880.css"
  },
  "/_nuxt/error-500.08851880.css.gz": {
    "type": "application/gzip",
    "etag": "\"2e7-fTkS1+lAlV7xOwq4CEl2jRm4Opc\"",
    "mtime": "2022-09-06T15:36:15.548Z",
    "size": 743,
    "path": "../public/_nuxt/error-500.08851880.css.gz"
  },
  "/_nuxt/error-500.db1c714f.js": {
    "type": "application/javascript",
    "etag": "\"751-ecF6nh8ww/oqP7+P/KnWkONPgGE\"",
    "mtime": "2022-09-06T15:36:15.548Z",
    "size": 1873,
    "path": "../public/_nuxt/error-500.db1c714f.js"
  },
  "/_nuxt/error-500.db1c714f.js.gz": {
    "type": "application/gzip",
    "etag": "\"3db-3InXbNEWa5Sgl97SoZA3queLSr8\"",
    "mtime": "2022-09-06T15:36:15.548Z",
    "size": 987,
    "path": "../public/_nuxt/error-500.db1c714f.js.gz"
  },
  "/_nuxt/error-component.f37b661d.js": {
    "type": "application/javascript",
    "etag": "\"439-jIBVvbZuKgjV5a0xtqQ0K8WnhYE\"",
    "mtime": "2022-09-06T15:36:15.548Z",
    "size": 1081,
    "path": "../public/_nuxt/error-component.f37b661d.js"
  },
  "/_nuxt/error-component.f37b661d.js.gz": {
    "type": "application/gzip",
    "etag": "\"260-+c/IuLPloacVt44mjSEt2x8nJ04\"",
    "mtime": "2022-09-06T15:36:15.548Z",
    "size": 608,
    "path": "../public/_nuxt/error-component.f37b661d.js.gz"
  },
  "/_nuxt/index.506c05f8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"28-i0dEkVFnaOlIdXI8UtjCZ7PfsAg\"",
    "mtime": "2022-09-06T15:36:15.548Z",
    "size": 40,
    "path": "../public/_nuxt/index.506c05f8.css"
  },
  "/_nuxt/index.5fae6cf9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"25b-vZW1oTtaX9Rqw2mlHMV/iAH/Seg\"",
    "mtime": "2022-09-06T15:36:15.548Z",
    "size": 603,
    "path": "../public/_nuxt/index.5fae6cf9.css"
  },
  "/_nuxt/index.6715e288.js": {
    "type": "application/javascript",
    "etag": "\"2dc-10mrGoKpydfSAmWt721rsVkkZAk\"",
    "mtime": "2022-09-06T15:36:15.548Z",
    "size": 732,
    "path": "../public/_nuxt/index.6715e288.js"
  },
  "/_nuxt/index.a5e12691.js": {
    "type": "application/javascript",
    "etag": "\"345-L7W1HO3NYqx0wwT4C+tNNQNjqeI\"",
    "mtime": "2022-09-06T15:36:15.544Z",
    "size": 837,
    "path": "../public/_nuxt/index.a5e12691.js"
  },
  "/_nuxt/index.a6bad4f7.js": {
    "type": "application/javascript",
    "etag": "\"325-jo1+KJxPazQQPSjbihOWhh/uTNM\"",
    "mtime": "2022-09-06T15:36:15.544Z",
    "size": 805,
    "path": "../public/_nuxt/index.a6bad4f7.js"
  },
  "/_nuxt/index.c7621f5e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d-erk17UAx45P85b1SU5JkQVTE0gg\"",
    "mtime": "2022-09-06T15:36:15.544Z",
    "size": 45,
    "path": "../public/_nuxt/index.c7621f5e.css"
  },
  "/_nuxt/index.eda5fcd6.js": {
    "type": "application/javascript",
    "etag": "\"8c-IHvZL1SvNpf1N4GQSmSbEuqsY4o\"",
    "mtime": "2022-09-06T15:36:15.544Z",
    "size": 140,
    "path": "../public/_nuxt/index.eda5fcd6.js"
  },
  "/_nuxt/login.18bec959.js": {
    "type": "application/javascript",
    "etag": "\"540-6EZkjU5VfFCLOZxjEz7St9R90kw\"",
    "mtime": "2022-09-06T15:36:15.544Z",
    "size": 1344,
    "path": "../public/_nuxt/login.18bec959.js"
  },
  "/_nuxt/login.18bec959.js.gz": {
    "type": "application/gzip",
    "etag": "\"2de-3VNGGbeTMw38satNl6GaECyLi/A\"",
    "mtime": "2022-09-06T15:36:15.544Z",
    "size": 734,
    "path": "../public/_nuxt/login.18bec959.js.gz"
  },
  "/_nuxt/login.2248ea52.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8f-bqf6jobwqFYgiYeXy8Zgzhe19aQ\"",
    "mtime": "2022-09-06T15:36:15.544Z",
    "size": 143,
    "path": "../public/_nuxt/login.2248ea52.css"
  },
  "/_nuxt/post-list.45431393.js": {
    "type": "application/javascript",
    "etag": "\"87a-wjVotWy4Tb1/pdda5yHYA+3mnu4\"",
    "mtime": "2022-09-06T15:36:15.544Z",
    "size": 2170,
    "path": "../public/_nuxt/post-list.45431393.js"
  },
  "/_nuxt/post-list.45431393.js.gz": {
    "type": "application/gzip",
    "etag": "\"431-5qbH9AZ3wH1zm+CnVrD0gcW81uE\"",
    "mtime": "2022-09-06T15:36:15.544Z",
    "size": 1073,
    "path": "../public/_nuxt/post-list.45431393.js.gz"
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

const _lazy_rj5fmJ = () => import('../handlers/renderer.mjs').then(function (n) { return n.a; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _TvVw0r, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_rj5fmJ, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_rj5fmJ, lazy: true, middleware: false, method: undefined }
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
