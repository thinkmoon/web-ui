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

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"TITLE":"指尖魔法屋-醉月思的博客","VERSION":"1.0.0 · build-20220827","KEYWORDS":["thinkmoon","指尖魔法屋","醉月思的博客"],"DESCRIPTION":"web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！","serviceUrl":"https://service.thinkmoon.cn/api","public":{"TITLE":"指尖魔法屋-醉月思的博客","VERSION":"1.0.0 · build-20220827","KEYWORDS":["thinkmoon","指尖魔法屋","醉月思的博客"],"DESCRIPTION":"web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！","serviceUrl":"https://service.thinkmoon.cn/api"}};
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
    description: "",
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
  const url = withQuery("/__nuxt_error", errorObject);
  const html = await $fetch(url).catch((error2) => {
    console.error("[nitro] Error while generating error response", error2);
    return errorObject.statusMessage;
  });
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/manifest.json": {
    "type": "application/json",
    "etag": "\"2fd8-umeWVc/qFXnM1ZWLVz3mTWyvjl0\"",
    "mtime": "2022-08-27T15:01:27.114Z",
    "path": "../public/manifest.json"
  },
  "/_nuxt/404.7e29283e.mjs": {
    "type": "application/javascript",
    "etag": "\"a4-IR56MPgu6N565E/ym3+AosALKUk\"",
    "mtime": "2022-08-27T15:01:27.126Z",
    "path": "../public/_nuxt/404.7e29283e.mjs"
  },
  "/_nuxt/BaiduSite.48858e0f.mjs": {
    "type": "application/javascript",
    "etag": "\"3b-ubGGxQsxbakiMJ1fFLAJPEuIuho\"",
    "mtime": "2022-08-27T15:01:27.126Z",
    "path": "../public/_nuxt/BaiduSite.48858e0f.mjs"
  },
  "/_nuxt/Footer.ffc6d768.mjs": {
    "type": "application/javascript",
    "etag": "\"369-ZcuU5YE7ob7KRohv5oFph2AN6Ug\"",
    "mtime": "2022-08-27T15:01:27.126Z",
    "path": "../public/_nuxt/Footer.ffc6d768.mjs"
  },
  "/_nuxt/PostList.bc68f43e.mjs": {
    "type": "application/javascript",
    "etag": "\"97e-/i/60bWkpCMx50G+AsxLQAAGGjA\"",
    "mtime": "2022-08-27T15:01:27.126Z",
    "path": "../public/_nuxt/PostList.bc68f43e.mjs"
  },
  "/_nuxt/TimeUtils.ee3524c7.mjs": {
    "type": "application/javascript",
    "etag": "\"64-+rKNBl/9tOc36ignH0ng2y/NoFQ\"",
    "mtime": "2022-08-27T15:01:27.126Z",
    "path": "../public/_nuxt/TimeUtils.ee3524c7.mjs"
  },
  "/_nuxt/[cid].d85db5b7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"87-Akb3e/t7jZ2kQkwsDWY5mnzJ9UA\"",
    "mtime": "2022-08-27T15:01:27.126Z",
    "path": "../public/_nuxt/[cid].d85db5b7.css"
  },
  "/_nuxt/[pageIndex].5f2a6f76.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"178-6Rc9BvTsPXvmVu5/iGhoZMmjCVE\"",
    "mtime": "2022-08-27T15:01:27.126Z",
    "path": "../public/_nuxt/[pageIndex].5f2a6f76.css"
  },
  "/_nuxt/_cid_.0efb84d5.mjs": {
    "type": "application/javascript",
    "etag": "\"684-HwXPLMZFm6vc5797qffZd5+59+k\"",
    "mtime": "2022-08-27T15:01:27.126Z",
    "path": "../public/_nuxt/_cid_.0efb84d5.mjs"
  },
  "/_nuxt/_pageIndex_.2b1327d3.mjs": {
    "type": "application/javascript",
    "etag": "\"3cf-YjFR+T0HC+53LYabXoGgLlX/2CU\"",
    "mtime": "2022-08-27T15:01:27.126Z",
    "path": "../public/_nuxt/_pageIndex_.2b1327d3.mjs"
  },
  "/_nuxt/_pageIndex_.ee9a4c4c.mjs": {
    "type": "application/javascript",
    "etag": "\"596-fqt/+vPNezEANfpMl4sMHg6mp6w\"",
    "mtime": "2022-08-27T15:01:27.126Z",
    "path": "../public/_nuxt/_pageIndex_.ee9a4c4c.mjs"
  },
  "/_nuxt/_pageIndex_.f16d38d5.mjs": {
    "type": "application/javascript",
    "etag": "\"395-manpriJdVtPVP1NePw4TEef3CcA\"",
    "mtime": "2022-08-27T15:01:27.126Z",
    "path": "../public/_nuxt/_pageIndex_.f16d38d5.mjs"
  },
  "/_nuxt/admin.5c3f08fc.mjs": {
    "type": "application/javascript",
    "etag": "\"5d2-4Wl0U8iLFM/wc4jFTaQc2qXdg5I\"",
    "mtime": "2022-08-27T15:01:27.126Z",
    "path": "../public/_nuxt/admin.5c3f08fc.mjs"
  },
  "/_nuxt/admin.6e91f5a2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10c-2dGpJGJzkjr3CT1Lwq1tKTNWFqU\"",
    "mtime": "2022-08-27T15:01:27.126Z",
    "path": "../public/_nuxt/admin.6e91f5a2.css"
  },
  "/_nuxt/admin.82f49feb.mjs": {
    "type": "application/javascript",
    "etag": "\"12a-PkLPlWZXYbbAYdZyGOaOdN0gkCo\"",
    "mtime": "2022-08-27T15:01:27.126Z",
    "path": "../public/_nuxt/admin.82f49feb.mjs"
  },
  "/_nuxt/asyncData.edb04806.mjs": {
    "type": "application/javascript",
    "etag": "\"81e-DruJDsH4k4QJ1BqPSfBPcXcF5pg\"",
    "mtime": "2022-08-27T15:01:27.126Z",
    "path": "../public/_nuxt/asyncData.edb04806.mjs"
  },
  "/_nuxt/auth.d7383787.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-wrdAkcaACsawBaYRbUpYMRWOPTQ\"",
    "mtime": "2022-08-27T15:01:27.122Z",
    "path": "../public/_nuxt/auth.d7383787.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-08-27T15:01:27.122Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default.800e0374.mjs": {
    "type": "application/javascript",
    "etag": "\"8bb-TuO5ZhAMkHEcOXkh1Tijat9NZm8\"",
    "mtime": "2022-08-27T15:01:27.122Z",
    "path": "../public/_nuxt/default.800e0374.mjs"
  },
  "/_nuxt/default.e87c0fd5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"36d-Sard6/nX+6F68nC9DUTqil+F74E\"",
    "mtime": "2022-08-27T15:01:27.122Z",
    "path": "../public/_nuxt/default.e87c0fd5.css"
  },
  "/_nuxt/editor.46f3a4ca.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"20b-aWouG2QOf3xHxNLmOm4vMypzsVw\"",
    "mtime": "2022-08-27T15:01:27.122Z",
    "path": "../public/_nuxt/editor.46f3a4ca.css"
  },
  "/_nuxt/editor.8de595d7.mjs": {
    "type": "application/javascript",
    "etag": "\"d4b-5RoQWUalZKU2Z1sTDnwhj5N4OCI\"",
    "mtime": "2022-08-27T15:01:27.122Z",
    "path": "../public/_nuxt/editor.8de595d7.mjs"
  },
  "/_nuxt/entry.1c22a833.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b1de-Ct5hm61wNd9mKZedEueZb8Vg5sw\"",
    "mtime": "2022-08-27T15:01:27.122Z",
    "path": "../public/_nuxt/entry.1c22a833.css"
  },
  "/_nuxt/entry.58534079.mjs": {
    "type": "application/javascript",
    "etag": "\"1e8da9-0E6ojiTTxVpJZWFLSaxPJPavOE4\"",
    "mtime": "2022-08-27T15:01:27.122Z",
    "path": "../public/_nuxt/entry.58534079.mjs"
  },
  "/_nuxt/error-404.1ce942ff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e34-uZzi9bKryT44i4ooRJQLHhJ6Odk\"",
    "mtime": "2022-08-27T15:01:27.118Z",
    "path": "../public/_nuxt/error-404.1ce942ff.css"
  },
  "/_nuxt/error-404.6428d45a.mjs": {
    "type": "application/javascript",
    "etag": "\"8ab-qfSpzkYY8zmcXhZt7LBz5smk4TU\"",
    "mtime": "2022-08-27T15:01:27.118Z",
    "path": "../public/_nuxt/error-404.6428d45a.mjs"
  },
  "/_nuxt/error-500.196d3af8.mjs": {
    "type": "application/javascript",
    "etag": "\"753-4Gi/ZeT2zsW1IhX8meFbHvMNBB0\"",
    "mtime": "2022-08-27T15:01:27.118Z",
    "path": "../public/_nuxt/error-500.196d3af8.mjs"
  },
  "/_nuxt/error-500.f90942db.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7a4-UUR9s84MrmQPuye8qH/esLZy5zE\"",
    "mtime": "2022-08-27T15:01:27.118Z",
    "path": "../public/_nuxt/error-500.f90942db.css"
  },
  "/_nuxt/error-component.15902f1a.mjs": {
    "type": "application/javascript",
    "etag": "\"44f-3m8QgVn45SS9up1efBNMwZWh8bg\"",
    "mtime": "2022-08-27T15:01:27.118Z",
    "path": "../public/_nuxt/error-component.15902f1a.mjs"
  },
  "/_nuxt/index.1688bfe7.mjs": {
    "type": "application/javascript",
    "etag": "\"347-ALy+34QHYfrcw+uEhrsVbg04Sy0\"",
    "mtime": "2022-08-27T15:01:27.118Z",
    "path": "../public/_nuxt/index.1688bfe7.mjs"
  },
  "/_nuxt/index.506c05f8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"28-i0dEkVFnaOlIdXI8UtjCZ7PfsAg\"",
    "mtime": "2022-08-27T15:01:27.118Z",
    "path": "../public/_nuxt/index.506c05f8.css"
  },
  "/_nuxt/index.5cddc25a.mjs": {
    "type": "application/javascript",
    "etag": "\"2de-1wvUNP5RDvm/fwfomUKA+VvT7N4\"",
    "mtime": "2022-08-27T15:01:27.118Z",
    "path": "../public/_nuxt/index.5cddc25a.mjs"
  },
  "/_nuxt/index.5fae6cf9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"25b-vZW1oTtaX9Rqw2mlHMV/iAH/Seg\"",
    "mtime": "2022-08-27T15:01:27.118Z",
    "path": "../public/_nuxt/index.5fae6cf9.css"
  },
  "/_nuxt/index.c7621f5e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d-erk17UAx45P85b1SU5JkQVTE0gg\"",
    "mtime": "2022-08-27T15:01:27.118Z",
    "path": "../public/_nuxt/index.c7621f5e.css"
  },
  "/_nuxt/index.e5c562a2.mjs": {
    "type": "application/javascript",
    "etag": "\"327-QsLbm9Oh/sbj6YFe3J8//BKW4Vs\"",
    "mtime": "2022-08-27T15:01:27.118Z",
    "path": "../public/_nuxt/index.e5c562a2.mjs"
  },
  "/_nuxt/index.e89fb028.mjs": {
    "type": "application/javascript",
    "etag": "\"8d-e0qOFj5Zl/TKZUrCiqSTti71ScI\"",
    "mtime": "2022-08-27T15:01:27.118Z",
    "path": "../public/_nuxt/index.e89fb028.mjs"
  },
  "/_nuxt/login.2248ea52.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8f-bqf6jobwqFYgiYeXy8Zgzhe19aQ\"",
    "mtime": "2022-08-27T15:01:27.118Z",
    "path": "../public/_nuxt/login.2248ea52.css"
  },
  "/_nuxt/login.7dd77f70.mjs": {
    "type": "application/javascript",
    "etag": "\"1d48-ysspP5GBh9qjmvno2ZLUloVa/zw\"",
    "mtime": "2022-08-27T15:01:27.118Z",
    "path": "../public/_nuxt/login.7dd77f70.mjs"
  },
  "/_nuxt/post-list.cb4e669c.mjs": {
    "type": "application/javascript",
    "etag": "\"87c-nSGNMYoIvVxBiAoz/VdtoQc9UD8\"",
    "mtime": "2022-08-27T15:01:27.118Z",
    "path": "../public/_nuxt/post-list.cb4e669c.mjs"
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
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
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
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _Abd1UL = async (req, res) => {
  if (req.url === "/sitemap.xml") {
    const sitemap = await axios.get("http://127.0.0.1:9447/api/sitemap.xml");
    res.end(sitemap.data);
  }
};

const _lazy_0YAliI = () => import('../handlers/renderer.mjs').then(function (n) { return n.a; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _Abd1UL, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_0YAliI, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_0YAliI, lazy: true, middleware: false, method: undefined }
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
