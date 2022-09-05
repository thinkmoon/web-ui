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
import Ad from 'axios';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"TITLE":"指尖魔法屋-醉月思的博客","VERSION":"0.2.0 · build-20220905","KEYWORDS":["thinkmoon","指尖魔法屋","醉月思的博客"],"DESCRIPTION":"web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！","serviceUrl":"https://service.thinkmoon.cn/api","public":{"TITLE":"指尖魔法屋-醉月思的博客","VERSION":"0.2.0 · build-20220905","KEYWORDS":["thinkmoon","指尖魔法屋","醉月思的博客"],"DESCRIPTION":"web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！","serviceUrl":"https://service.thinkmoon.cn/api"}};
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
    "mtime": "2022-09-05T16:35:53.523Z",
    "size": 0,
    "path": "../public/.nojekyll"
  },
  "/CNAME": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"10-7Gf7kLxqUTPXP5ywLte1OYzrDjU\"",
    "mtime": "2022-09-05T16:35:53.523Z",
    "size": 16,
    "path": "../public/CNAME"
  },
  "/ads.js": {
    "type": "application/javascript",
    "etag": "\"2a6-QG3gIcUryNH3lTuW9EhtBAeMq38\"",
    "mtime": "2022-09-05T16:35:53.523Z",
    "size": 678,
    "path": "../public/ads.js"
  },
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-09-05T16:35:53.523Z",
    "size": 58,
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-09-05T16:35:53.523Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-rNrKs1nSkmU1PPE2uMSVSowftYg\"",
    "mtime": "2022-09-05T16:35:53.523Z",
    "size": 78,
    "path": "../public/robots.txt"
  },
  "/_nuxt/404.e70f188d.js": {
    "type": "application/javascript",
    "etag": "\"a3-oZtsNuPQb/qh34m0cNEfWx2tNTs\"",
    "mtime": "2022-09-05T16:35:53.519Z",
    "size": 163,
    "path": "../public/_nuxt/404.e70f188d.js"
  },
  "/_nuxt/BaiduSite.d8ca64a6.js": {
    "type": "application/javascript",
    "etag": "\"3a-xhqA4jD/jKQiFQWtI2DYRZ2zmDc\"",
    "mtime": "2022-09-05T16:35:53.519Z",
    "size": 58,
    "path": "../public/_nuxt/BaiduSite.d8ca64a6.js"
  },
  "/_nuxt/Footer.3f3646e7.js": {
    "type": "application/javascript",
    "etag": "\"38e-RidDJ6OZ85i5YUwFrLkZv3FuTuc\"",
    "mtime": "2022-09-05T16:35:53.519Z",
    "size": 910,
    "path": "../public/_nuxt/Footer.3f3646e7.js"
  },
  "/_nuxt/PostList.2db6f8eb.js": {
    "type": "application/javascript",
    "etag": "\"8dc-36m8Z9HaZ/P9dJamWqpZEBsSJ8k\"",
    "mtime": "2022-09-05T16:35:53.519Z",
    "size": 2268,
    "path": "../public/_nuxt/PostList.2db6f8eb.js"
  },
  "/_nuxt/PostList.2db6f8eb.js.gz": {
    "type": "application/gzip",
    "etag": "\"435-1uvD1OvcBQ0k3h5po0YrVz0ROmg\"",
    "mtime": "2022-09-05T16:35:53.519Z",
    "size": 1077,
    "path": "../public/_nuxt/PostList.2db6f8eb.js.gz"
  },
  "/_nuxt/TimeUtils.ff456ed1.js": {
    "type": "application/javascript",
    "etag": "\"63-MbdylIL6oMO8a7ElWn5+2SfwTiM\"",
    "mtime": "2022-09-05T16:35:53.519Z",
    "size": 99,
    "path": "../public/_nuxt/TimeUtils.ff456ed1.js"
  },
  "/_nuxt/_cid_.223c5156.js": {
    "type": "application/javascript",
    "etag": "\"683-ViyKJlAmWQVj4ed9QA1TcrKx+Jg\"",
    "mtime": "2022-09-05T16:35:53.519Z",
    "size": 1667,
    "path": "../public/_nuxt/_cid_.223c5156.js"
  },
  "/_nuxt/_cid_.223c5156.js.gz": {
    "type": "application/gzip",
    "etag": "\"3fc-G3VI0uFVS6RGaGTzU22x8KFbfOc\"",
    "mtime": "2022-09-05T16:35:53.519Z",
    "size": 1020,
    "path": "../public/_nuxt/_cid_.223c5156.js.gz"
  },
  "/_nuxt/_cid_.d85db5b7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"87-Akb3e/t7jZ2kQkwsDWY5mnzJ9UA\"",
    "mtime": "2022-09-05T16:35:53.519Z",
    "size": 135,
    "path": "../public/_nuxt/_cid_.d85db5b7.css"
  },
  "/_nuxt/_pageIndex_.234ed69a.js": {
    "type": "application/javascript",
    "etag": "\"3d6-NZ7Gy/uLda/vX2CirdHtRvoh6iI\"",
    "mtime": "2022-09-05T16:35:53.519Z",
    "size": 982,
    "path": "../public/_nuxt/_pageIndex_.234ed69a.js"
  },
  "/_nuxt/_pageIndex_.5f2a6f76.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"178-6Rc9BvTsPXvmVu5/iGhoZMmjCVE\"",
    "mtime": "2022-09-05T16:35:53.519Z",
    "size": 376,
    "path": "../public/_nuxt/_pageIndex_.5f2a6f76.css"
  },
  "/_nuxt/_pageIndex_.c1b3aa4b.js": {
    "type": "application/javascript",
    "etag": "\"5d6-ARna1PRFLEBT8bKQyomM0gNp7jc\"",
    "mtime": "2022-09-05T16:35:53.519Z",
    "size": 1494,
    "path": "../public/_nuxt/_pageIndex_.c1b3aa4b.js"
  },
  "/_nuxt/_pageIndex_.c1b3aa4b.js.gz": {
    "type": "application/gzip",
    "etag": "\"333-KO6sbCUxdcEE7JepDC8uWnqyvCg\"",
    "mtime": "2022-09-05T16:35:53.515Z",
    "size": 819,
    "path": "../public/_nuxt/_pageIndex_.c1b3aa4b.js.gz"
  },
  "/_nuxt/_pageIndex_.e858fe75.js": {
    "type": "application/javascript",
    "etag": "\"406-lgcc5T+b+CbQEQsAslQkQ3lrE8s\"",
    "mtime": "2022-09-05T16:35:53.515Z",
    "size": 1030,
    "path": "../public/_nuxt/_pageIndex_.e858fe75.js"
  },
  "/_nuxt/_pageIndex_.e858fe75.js.gz": {
    "type": "application/gzip",
    "etag": "\"28a-bT+muJKRxyh7QcXuxiZ4/jwAxcs\"",
    "mtime": "2022-09-05T16:35:53.515Z",
    "size": 650,
    "path": "../public/_nuxt/_pageIndex_.e858fe75.js.gz"
  },
  "/_nuxt/admin.020c7a48.js": {
    "type": "application/javascript",
    "etag": "\"146-xewnWYo6OcJs67ZQiG7lGHUp02Q\"",
    "mtime": "2022-09-05T16:35:53.515Z",
    "size": 326,
    "path": "../public/_nuxt/admin.020c7a48.js"
  },
  "/_nuxt/admin.3177f3c9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c5e-n9grVgWKasMgFCBQH+YfwJ0f+Lc\"",
    "mtime": "2022-09-05T16:35:53.515Z",
    "size": 3166,
    "path": "../public/_nuxt/admin.3177f3c9.css"
  },
  "/_nuxt/admin.3177f3c9.css.gz": {
    "type": "application/gzip",
    "etag": "\"396-eYaGexvBsUUCb2bMxTKvYHJ2osg\"",
    "mtime": "2022-09-05T16:35:53.515Z",
    "size": 918,
    "path": "../public/_nuxt/admin.3177f3c9.css.gz"
  },
  "/_nuxt/admin.c3805348.js": {
    "type": "application/javascript",
    "etag": "\"61a-qAbdLpZzrAP4ZtWvXtHy3GtgsK4\"",
    "mtime": "2022-09-05T16:35:53.515Z",
    "size": 1562,
    "path": "../public/_nuxt/admin.c3805348.js"
  },
  "/_nuxt/admin.c3805348.js.gz": {
    "type": "application/gzip",
    "etag": "\"2f1-JUCPQ70U//X2WIY4JwUk4Wtaqw4\"",
    "mtime": "2022-09-05T16:35:53.515Z",
    "size": 753,
    "path": "../public/_nuxt/admin.c3805348.js.gz"
  },
  "/_nuxt/asyncData.db7de630.js": {
    "type": "application/javascript",
    "etag": "\"8d8-8chkuKS14O9IXhqcWQu338TrG4g\"",
    "mtime": "2022-09-05T16:35:53.515Z",
    "size": 2264,
    "path": "../public/_nuxt/asyncData.db7de630.js"
  },
  "/_nuxt/asyncData.db7de630.js.gz": {
    "type": "application/gzip",
    "etag": "\"41b-T0BxLbAOh4KdanmnWAaIKGCkC9Q\"",
    "mtime": "2022-09-05T16:35:53.515Z",
    "size": 1051,
    "path": "../public/_nuxt/asyncData.db7de630.js.gz"
  },
  "/_nuxt/auth.2becf44a.js": {
    "type": "application/javascript",
    "etag": "\"8a-wEmIvRUjCaKbTfz3qbRZcMmdGj0\"",
    "mtime": "2022-09-05T16:35:53.515Z",
    "size": 138,
    "path": "../public/_nuxt/auth.2becf44a.js"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-09-05T16:35:53.511Z",
    "size": 755597,
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default.56c717f2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"58c-aXsaEnaVQ8B+pX6ZZupMJGWKiaU\"",
    "mtime": "2022-09-05T16:35:53.511Z",
    "size": 1420,
    "path": "../public/_nuxt/default.56c717f2.css"
  },
  "/_nuxt/default.56c717f2.css.gz": {
    "type": "application/gzip",
    "etag": "\"22d-Wf9+LMCv8BWgsBDRLybi2lNRisY\"",
    "mtime": "2022-09-05T16:35:53.511Z",
    "size": 557,
    "path": "../public/_nuxt/default.56c717f2.css.gz"
  },
  "/_nuxt/default.be04feaf.js": {
    "type": "application/javascript",
    "etag": "\"b11-xfFDeM0pXJSinV4yZMyTaznk3TY\"",
    "mtime": "2022-09-05T16:35:53.511Z",
    "size": 2833,
    "path": "../public/_nuxt/default.be04feaf.js"
  },
  "/_nuxt/default.be04feaf.js.gz": {
    "type": "application/gzip",
    "etag": "\"564-Jx4awneuvpXgUSePaVtue+z1d0M\"",
    "mtime": "2022-09-05T16:35:53.511Z",
    "size": 1380,
    "path": "../public/_nuxt/default.be04feaf.js.gz"
  },
  "/_nuxt/editor.6b8ad58f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2267-hc7fFE7DktZnvpgtztYwNQTfM5o\"",
    "mtime": "2022-09-05T16:35:53.511Z",
    "size": 8807,
    "path": "../public/_nuxt/editor.6b8ad58f.css"
  },
  "/_nuxt/editor.6b8ad58f.css.gz": {
    "type": "application/gzip",
    "etag": "\"728-dMVflU91XNduRUBtVji8+IZNWc8\"",
    "mtime": "2022-09-05T16:35:53.511Z",
    "size": 1832,
    "path": "../public/_nuxt/editor.6b8ad58f.css.gz"
  },
  "/_nuxt/editor.999beb88.js": {
    "type": "application/javascript",
    "etag": "\"da6-viE+eoW6IdkGdGUi+gvN80T0qAM\"",
    "mtime": "2022-09-05T16:35:53.507Z",
    "size": 3494,
    "path": "../public/_nuxt/editor.999beb88.js"
  },
  "/_nuxt/editor.999beb88.js.gz": {
    "type": "application/gzip",
    "etag": "\"5a5-NI4CEJi1SYaMOREjDF6u52elV8c\"",
    "mtime": "2022-09-05T16:35:53.507Z",
    "size": 1445,
    "path": "../public/_nuxt/editor.999beb88.js.gz"
  },
  "/_nuxt/el-button.2689f638.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3d33-RzIPFKzgWgJB1bVDsB1E+qI9A3Y\"",
    "mtime": "2022-09-05T16:35:53.507Z",
    "size": 15667,
    "path": "../public/_nuxt/el-button.2689f638.css"
  },
  "/_nuxt/el-button.2689f638.css.gz": {
    "type": "application/gzip",
    "etag": "\"792-9z0sUxzFgdvjKkABqYBGsWYuw4g\"",
    "mtime": "2022-09-05T16:35:53.507Z",
    "size": 1938,
    "path": "../public/_nuxt/el-button.2689f638.css.gz"
  },
  "/_nuxt/el-input.6ff3c6ed.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2f98-z1jCGFeotxae1NMDhqMVyKVABE8\"",
    "mtime": "2022-09-05T16:35:53.507Z",
    "size": 12184,
    "path": "../public/_nuxt/el-input.6ff3c6ed.css"
  },
  "/_nuxt/el-input.6ff3c6ed.css.gz": {
    "type": "application/gzip",
    "etag": "\"6fe-JS0QiaYA4JbmHc5bPEBmS/u2d10\"",
    "mtime": "2022-09-05T16:35:53.507Z",
    "size": 1790,
    "path": "../public/_nuxt/el-input.6ff3c6ed.css.gz"
  },
  "/_nuxt/el-menu-item.a9312310.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2860-AfNPlt0JNFhqms/cpV5TwX7Hguo\"",
    "mtime": "2022-09-05T16:35:53.503Z",
    "size": 10336,
    "path": "../public/_nuxt/el-menu-item.a9312310.css"
  },
  "/_nuxt/el-menu-item.a9312310.css.gz": {
    "type": "application/gzip",
    "etag": "\"726-Oj7FgM8gehxokQF4i+KsN4sCbZo\"",
    "mtime": "2022-09-05T16:35:53.503Z",
    "size": 1830,
    "path": "../public/_nuxt/el-menu-item.a9312310.css.gz"
  },
  "/_nuxt/entry.96d19e9b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"105e5-g+dmTrXXUK3yLGPsYWQXNETvCI4\"",
    "mtime": "2022-09-05T16:35:53.503Z",
    "size": 67045,
    "path": "../public/_nuxt/entry.96d19e9b.css"
  },
  "/_nuxt/entry.96d19e9b.css.gz": {
    "type": "application/gzip",
    "etag": "\"4af8-7Owg0QmxbN8ZHE+3QSNVHPsJNIE\"",
    "mtime": "2022-09-05T16:35:53.503Z",
    "size": 19192,
    "path": "../public/_nuxt/entry.96d19e9b.css.gz"
  },
  "/_nuxt/entry.f3822895.js": {
    "type": "application/javascript",
    "etag": "\"17710b-jIMMiW9uXTB6biR4x+7OnPYYl6s\"",
    "mtime": "2022-09-05T16:35:53.503Z",
    "size": 1536267,
    "path": "../public/_nuxt/entry.f3822895.js"
  },
  "/_nuxt/entry.f3822895.js.gz": {
    "type": "application/gzip",
    "etag": "\"7133c-Mxih//7xwnPcnL7P19vPTSXzcrY\"",
    "mtime": "2022-09-05T16:35:53.503Z",
    "size": 463676,
    "path": "../public/_nuxt/entry.f3822895.js.gz"
  },
  "/_nuxt/error-404.7729cee9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e34-qomFKLEnDzFbIPwCfuxqIb18mQU\"",
    "mtime": "2022-09-05T16:35:53.499Z",
    "size": 3636,
    "path": "../public/_nuxt/error-404.7729cee9.css"
  },
  "/_nuxt/error-404.7729cee9.css.gz": {
    "type": "application/gzip",
    "etag": "\"463-DdQYKAS+35MuEovnPfffuWps9ps\"",
    "mtime": "2022-09-05T16:35:53.499Z",
    "size": 1123,
    "path": "../public/_nuxt/error-404.7729cee9.css.gz"
  },
  "/_nuxt/error-404.9b9b74c5.js": {
    "type": "application/javascript",
    "etag": "\"8ad-ssPORISl/+iV/uXWpycsEiXZsPc\"",
    "mtime": "2022-09-05T16:35:53.499Z",
    "size": 2221,
    "path": "../public/_nuxt/error-404.9b9b74c5.js"
  },
  "/_nuxt/error-404.9b9b74c5.js.gz": {
    "type": "application/gzip",
    "etag": "\"480-O9RYzkWOktcLhTr5GvGged/yTck\"",
    "mtime": "2022-09-05T16:35:53.499Z",
    "size": 1152,
    "path": "../public/_nuxt/error-404.9b9b74c5.js.gz"
  },
  "/_nuxt/error-500.08851880.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7a4-PsPGHWWrltFH34P9Q5DnkUTUhRE\"",
    "mtime": "2022-09-05T16:35:53.499Z",
    "size": 1956,
    "path": "../public/_nuxt/error-500.08851880.css"
  },
  "/_nuxt/error-500.08851880.css.gz": {
    "type": "application/gzip",
    "etag": "\"2e7-fTkS1+lAlV7xOwq4CEl2jRm4Opc\"",
    "mtime": "2022-09-05T16:35:53.499Z",
    "size": 743,
    "path": "../public/_nuxt/error-500.08851880.css.gz"
  },
  "/_nuxt/error-500.e494da21.js": {
    "type": "application/javascript",
    "etag": "\"755-6dLyK7NlheCJh013RMSNGG97pLM\"",
    "mtime": "2022-09-05T16:35:53.499Z",
    "size": 1877,
    "path": "../public/_nuxt/error-500.e494da21.js"
  },
  "/_nuxt/error-500.e494da21.js.gz": {
    "type": "application/gzip",
    "etag": "\"3e0-wMaorqwtIGPQqFRyBtzl5wlGrUQ\"",
    "mtime": "2022-09-05T16:35:53.499Z",
    "size": 992,
    "path": "../public/_nuxt/error-500.e494da21.js.gz"
  },
  "/_nuxt/error-component.3e6c8110.js": {
    "type": "application/javascript",
    "etag": "\"439-iE5GBDJefpvcoMub40MImoz/Y1c\"",
    "mtime": "2022-09-05T16:35:53.499Z",
    "size": 1081,
    "path": "../public/_nuxt/error-component.3e6c8110.js"
  },
  "/_nuxt/error-component.3e6c8110.js.gz": {
    "type": "application/gzip",
    "etag": "\"262-e0HDVku5/0RGIUejytwAbN7gsMY\"",
    "mtime": "2022-09-05T16:35:53.499Z",
    "size": 610,
    "path": "../public/_nuxt/error-component.3e6c8110.js.gz"
  },
  "/_nuxt/index.09d2fd4b.js": {
    "type": "application/javascript",
    "etag": "\"19-BxBOlGLaa/dRAfqi4MtEunXToPk\"",
    "mtime": "2022-09-05T16:35:53.499Z",
    "size": 25,
    "path": "../public/_nuxt/index.09d2fd4b.js"
  },
  "/_nuxt/index.24e84141.js": {
    "type": "application/javascript",
    "etag": "\"8d-ohs1xvGhcuDJa5PinPI0Ob2WItE\"",
    "mtime": "2022-09-05T16:35:53.495Z",
    "size": 141,
    "path": "../public/_nuxt/index.24e84141.js"
  },
  "/_nuxt/index.3b1bacda.js": {
    "type": "application/javascript",
    "etag": "\"348-HMZzHKts5z7vj8yVhyYCmKsUlMA\"",
    "mtime": "2022-09-05T16:35:53.495Z",
    "size": 840,
    "path": "../public/_nuxt/index.3b1bacda.js"
  },
  "/_nuxt/index.506c05f8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"28-i0dEkVFnaOlIdXI8UtjCZ7PfsAg\"",
    "mtime": "2022-09-05T16:35:53.495Z",
    "size": 40,
    "path": "../public/_nuxt/index.506c05f8.css"
  },
  "/_nuxt/index.5fae6cf9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"25b-vZW1oTtaX9Rqw2mlHMV/iAH/Seg\"",
    "mtime": "2022-09-05T16:35:53.495Z",
    "size": 603,
    "path": "../public/_nuxt/index.5fae6cf9.css"
  },
  "/_nuxt/index.6b6697f4.js": {
    "type": "application/javascript",
    "etag": "\"363-rTjtD201u/EAc2gV1NZ22m5bTro\"",
    "mtime": "2022-09-05T16:35:53.495Z",
    "size": 867,
    "path": "../public/_nuxt/index.6b6697f4.js"
  },
  "/_nuxt/index.c18b30ff.js": {
    "type": "application/javascript",
    "etag": "\"33a-Pb3VG4NgmouWkSdoJ9mEBfcEDlQ\"",
    "mtime": "2022-09-05T16:35:53.495Z",
    "size": 826,
    "path": "../public/_nuxt/index.c18b30ff.js"
  },
  "/_nuxt/index.c7621f5e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d-erk17UAx45P85b1SU5JkQVTE0gg\"",
    "mtime": "2022-09-05T16:35:53.495Z",
    "size": 45,
    "path": "../public/_nuxt/index.c7621f5e.css"
  },
  "/_nuxt/index.dc12899f.js": {
    "type": "application/javascript",
    "etag": "\"14d17d-zjDN+cN26co13GPCia6nDkSO7f8\"",
    "mtime": "2022-09-05T16:35:53.495Z",
    "size": 1364349,
    "path": "../public/_nuxt/index.dc12899f.js"
  },
  "/_nuxt/index.dc12899f.js.gz": {
    "type": "application/gzip",
    "etag": "\"61ac3-5FRIOyqSlVuByu6XAZ32n/HY7RA\"",
    "mtime": "2022-09-05T16:35:53.491Z",
    "size": 400067,
    "path": "../public/_nuxt/index.dc12899f.js.gz"
  },
  "/_nuxt/login.88346c1b.js": {
    "type": "application/javascript",
    "etag": "\"2bca-O+WJU8MUQB+oWg1ScQCCi4CT2Ag\"",
    "mtime": "2022-09-05T16:35:53.491Z",
    "size": 11210,
    "path": "../public/_nuxt/login.88346c1b.js"
  },
  "/_nuxt/login.88346c1b.js.gz": {
    "type": "application/gzip",
    "etag": "\"133e-l0CWtn8oQVlyJt7EicDTv78uqMw\"",
    "mtime": "2022-09-05T16:35:53.491Z",
    "size": 4926,
    "path": "../public/_nuxt/login.88346c1b.js.gz"
  },
  "/_nuxt/login.c554d8ec.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"f24-TXp86+6RT+fAtrAsuOgrtwMbmKA\"",
    "mtime": "2022-09-05T16:35:53.491Z",
    "size": 3876,
    "path": "../public/_nuxt/login.c554d8ec.css"
  },
  "/_nuxt/login.c554d8ec.css.gz": {
    "type": "application/gzip",
    "etag": "\"36d-ovnzPI3lgCtFC47v9spDeDQFmSY\"",
    "mtime": "2022-09-05T16:35:53.491Z",
    "size": 877,
    "path": "../public/_nuxt/login.c554d8ec.css.gz"
  },
  "/_nuxt/post-list.026ee1d3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"691d-pN2Td42MF6KO9aR5/UftCqraZp0\"",
    "mtime": "2022-09-05T16:35:53.491Z",
    "size": 26909,
    "path": "../public/_nuxt/post-list.026ee1d3.css"
  },
  "/_nuxt/post-list.026ee1d3.css.gz": {
    "type": "application/gzip",
    "etag": "\"f6e-4AagsEF24ztkOEii/rHJaUkA7gI\"",
    "mtime": "2022-09-05T16:35:53.491Z",
    "size": 3950,
    "path": "../public/_nuxt/post-list.026ee1d3.css.gz"
  },
  "/_nuxt/post-list.58af5995.js": {
    "type": "application/javascript",
    "etag": "\"8a9-KdVZ6MsbgMBkeewvNsFpA+fzvCg\"",
    "mtime": "2022-09-05T16:35:53.487Z",
    "size": 2217,
    "path": "../public/_nuxt/post-list.58af5995.js"
  },
  "/_nuxt/post-list.58af5995.js.gz": {
    "type": "application/gzip",
    "etag": "\"447-9dE+Tj7vZCc4NHW3hvKf+Dihkkc\"",
    "mtime": "2022-09-05T16:35:53.487Z",
    "size": 1095,
    "path": "../public/_nuxt/post-list.58af5995.js.gz"
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
    const sitemap = await Ad.get("http://127.0.0.1:9447/api/sitemap.xml");
    res.end(sitemap.data);
  }
};

const _lazy_rj5fmJ = () => import('../handlers/renderer.mjs');

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
