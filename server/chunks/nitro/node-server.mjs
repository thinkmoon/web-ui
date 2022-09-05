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
import Mp from 'axios';

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
    "mtime": "2022-09-05T16:01:00.593Z",
    "size": 0,
    "path": "../public/.nojekyll"
  },
  "/CNAME": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"10-7Gf7kLxqUTPXP5ywLte1OYzrDjU\"",
    "mtime": "2022-09-05T16:01:00.585Z",
    "size": 16,
    "path": "../public/CNAME"
  },
  "/ads.js": {
    "type": "application/javascript",
    "etag": "\"2a6-QG3gIcUryNH3lTuW9EhtBAeMq38\"",
    "mtime": "2022-09-05T16:01:00.585Z",
    "size": 678,
    "path": "../public/ads.js"
  },
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-09-05T16:01:00.585Z",
    "size": 58,
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-09-05T16:01:00.585Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-rNrKs1nSkmU1PPE2uMSVSowftYg\"",
    "mtime": "2022-09-05T16:01:00.581Z",
    "size": 78,
    "path": "../public/robots.txt"
  },
  "/_nuxt/404.fb27ea70.js": {
    "type": "application/javascript",
    "etag": "\"a3-fDUeWWG794/52roI7LZvt4sMnj4\"",
    "mtime": "2022-09-05T16:01:00.553Z",
    "size": 163,
    "path": "../public/_nuxt/404.fb27ea70.js"
  },
  "/_nuxt/BaiduSite.8e2e119e.js": {
    "type": "application/javascript",
    "etag": "\"3a-dNyqCSKgDTDvTz71uFADczKI71s\"",
    "mtime": "2022-09-05T16:01:00.553Z",
    "size": 58,
    "path": "../public/_nuxt/BaiduSite.8e2e119e.js"
  },
  "/_nuxt/Footer.e6a80ae8.js": {
    "type": "application/javascript",
    "etag": "\"38e-tWEchPu8mGTJnO3M2nWJmEz4Pbk\"",
    "mtime": "2022-09-05T16:01:00.553Z",
    "size": 910,
    "path": "../public/_nuxt/Footer.e6a80ae8.js"
  },
  "/_nuxt/PostList.bb3c466b.js": {
    "type": "application/javascript",
    "etag": "\"8dc-hg+sr6qHUdAuEPz1Zn8RfjmB94g\"",
    "mtime": "2022-09-05T16:01:00.549Z",
    "size": 2268,
    "path": "../public/_nuxt/PostList.bb3c466b.js"
  },
  "/_nuxt/PostList.bb3c466b.js.gz": {
    "type": "application/gzip",
    "etag": "\"437-RkJLnfw8UyyutfyIPkVEzTteJFE\"",
    "mtime": "2022-09-05T16:01:00.549Z",
    "size": 1079,
    "path": "../public/_nuxt/PostList.bb3c466b.js.gz"
  },
  "/_nuxt/TimeUtils.221956b4.js": {
    "type": "application/javascript",
    "etag": "\"63-M3m4HG35j81UOquCTAxLBEpRieo\"",
    "mtime": "2022-09-05T16:01:00.549Z",
    "size": 99,
    "path": "../public/_nuxt/TimeUtils.221956b4.js"
  },
  "/_nuxt/_cid_.6093a334.js": {
    "type": "application/javascript",
    "etag": "\"683-eXbdSAJBd7EoT32ELRZ16BJfLNU\"",
    "mtime": "2022-09-05T16:01:00.549Z",
    "size": 1667,
    "path": "../public/_nuxt/_cid_.6093a334.js"
  },
  "/_nuxt/_cid_.6093a334.js.gz": {
    "type": "application/gzip",
    "etag": "\"3fc-3uoVP2uDFRivxp9Saf+53CV2mS0\"",
    "mtime": "2022-09-05T16:01:00.549Z",
    "size": 1020,
    "path": "../public/_nuxt/_cid_.6093a334.js.gz"
  },
  "/_nuxt/_cid_.d85db5b7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"87-Akb3e/t7jZ2kQkwsDWY5mnzJ9UA\"",
    "mtime": "2022-09-05T16:01:00.549Z",
    "size": 135,
    "path": "../public/_nuxt/_cid_.d85db5b7.css"
  },
  "/_nuxt/_pageIndex_.33a1104f.js": {
    "type": "application/javascript",
    "etag": "\"406-YVxeBdnfp5lVgU9ldzGmtT7Wsro\"",
    "mtime": "2022-09-05T16:01:00.549Z",
    "size": 1030,
    "path": "../public/_nuxt/_pageIndex_.33a1104f.js"
  },
  "/_nuxt/_pageIndex_.33a1104f.js.gz": {
    "type": "application/gzip",
    "etag": "\"28a-blao3Uwwa0jydUF5HZke2TV4IHI\"",
    "mtime": "2022-09-05T16:01:00.549Z",
    "size": 650,
    "path": "../public/_nuxt/_pageIndex_.33a1104f.js.gz"
  },
  "/_nuxt/_pageIndex_.4352a0e1.js": {
    "type": "application/javascript",
    "etag": "\"3d6-EsCLAtJZPMMuMuqNcqWf9Z6w/3M\"",
    "mtime": "2022-09-05T16:01:00.541Z",
    "size": 982,
    "path": "../public/_nuxt/_pageIndex_.4352a0e1.js"
  },
  "/_nuxt/_pageIndex_.5f2a6f76.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"178-6Rc9BvTsPXvmVu5/iGhoZMmjCVE\"",
    "mtime": "2022-09-05T16:01:00.541Z",
    "size": 376,
    "path": "../public/_nuxt/_pageIndex_.5f2a6f76.css"
  },
  "/_nuxt/_pageIndex_.d83bc588.js": {
    "type": "application/javascript",
    "etag": "\"5d6-LvGwCHjN550hjXslOW+VOFf+sLc\"",
    "mtime": "2022-09-05T16:01:00.541Z",
    "size": 1494,
    "path": "../public/_nuxt/_pageIndex_.d83bc588.js"
  },
  "/_nuxt/_pageIndex_.d83bc588.js.gz": {
    "type": "application/gzip",
    "etag": "\"335-hSyp0AXmWQ6jL3bfZGCMW67LNGQ\"",
    "mtime": "2022-09-05T16:01:00.541Z",
    "size": 821,
    "path": "../public/_nuxt/_pageIndex_.d83bc588.js.gz"
  },
  "/_nuxt/admin.3177f3c9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c5e-n9grVgWKasMgFCBQH+YfwJ0f+Lc\"",
    "mtime": "2022-09-05T16:01:00.541Z",
    "size": 3166,
    "path": "../public/_nuxt/admin.3177f3c9.css"
  },
  "/_nuxt/admin.3177f3c9.css.gz": {
    "type": "application/gzip",
    "etag": "\"396-eYaGexvBsUUCb2bMxTKvYHJ2osg\"",
    "mtime": "2022-09-05T16:01:00.541Z",
    "size": 918,
    "path": "../public/_nuxt/admin.3177f3c9.css.gz"
  },
  "/_nuxt/admin.5af6f0ca.js": {
    "type": "application/javascript",
    "etag": "\"61a-MaSXHQUcfBoQb7jri+rgjPv0Wz8\"",
    "mtime": "2022-09-05T16:01:00.541Z",
    "size": 1562,
    "path": "../public/_nuxt/admin.5af6f0ca.js"
  },
  "/_nuxt/admin.5af6f0ca.js.gz": {
    "type": "application/gzip",
    "etag": "\"2f2-kyA2YP9WSzPZx9JPJ7dht9ei1Vw\"",
    "mtime": "2022-09-05T16:01:00.537Z",
    "size": 754,
    "path": "../public/_nuxt/admin.5af6f0ca.js.gz"
  },
  "/_nuxt/admin.5eac3091.js": {
    "type": "application/javascript",
    "etag": "\"146-xreNF9mCC9dQj1pwmNwmP89QNL4\"",
    "mtime": "2022-09-05T16:01:00.537Z",
    "size": 326,
    "path": "../public/_nuxt/admin.5eac3091.js"
  },
  "/_nuxt/asyncData.d1ca910b.js": {
    "type": "application/javascript",
    "etag": "\"8d8-fAzm2ON9BBzZnZr71i16DxG1M/I\"",
    "mtime": "2022-09-05T16:01:00.533Z",
    "size": 2264,
    "path": "../public/_nuxt/asyncData.d1ca910b.js"
  },
  "/_nuxt/asyncData.d1ca910b.js.gz": {
    "type": "application/gzip",
    "etag": "\"41b-2PD3XR1jIunH8RO5eQUon/m60cA\"",
    "mtime": "2022-09-05T16:01:00.533Z",
    "size": 1051,
    "path": "../public/_nuxt/asyncData.d1ca910b.js.gz"
  },
  "/_nuxt/auth.ee37c6f4.js": {
    "type": "application/javascript",
    "etag": "\"8a-wRcFgFKpipJogT7AQ4yLJIycUCw\"",
    "mtime": "2022-09-05T16:01:00.533Z",
    "size": 138,
    "path": "../public/_nuxt/auth.ee37c6f4.js"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-09-05T16:01:00.533Z",
    "size": 755597,
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default.56c717f2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"58c-aXsaEnaVQ8B+pX6ZZupMJGWKiaU\"",
    "mtime": "2022-09-05T16:01:00.533Z",
    "size": 1420,
    "path": "../public/_nuxt/default.56c717f2.css"
  },
  "/_nuxt/default.56c717f2.css.gz": {
    "type": "application/gzip",
    "etag": "\"22d-Wf9+LMCv8BWgsBDRLybi2lNRisY\"",
    "mtime": "2022-09-05T16:01:00.529Z",
    "size": 557,
    "path": "../public/_nuxt/default.56c717f2.css.gz"
  },
  "/_nuxt/default.64e586af.js": {
    "type": "application/javascript",
    "etag": "\"b11-omLrawAUgQSOsB/PjKPLLplMe6A\"",
    "mtime": "2022-09-05T16:01:00.529Z",
    "size": 2833,
    "path": "../public/_nuxt/default.64e586af.js"
  },
  "/_nuxt/default.64e586af.js.gz": {
    "type": "application/gzip",
    "etag": "\"563-0TLVCwhUOCH6wM+AK31fqGze1Ck\"",
    "mtime": "2022-09-05T16:01:00.529Z",
    "size": 1379,
    "path": "../public/_nuxt/default.64e586af.js.gz"
  },
  "/_nuxt/editor.6b8ad58f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2267-hc7fFE7DktZnvpgtztYwNQTfM5o\"",
    "mtime": "2022-09-05T16:01:00.529Z",
    "size": 8807,
    "path": "../public/_nuxt/editor.6b8ad58f.css"
  },
  "/_nuxt/editor.6b8ad58f.css.gz": {
    "type": "application/gzip",
    "etag": "\"728-dMVflU91XNduRUBtVji8+IZNWc8\"",
    "mtime": "2022-09-05T16:01:00.529Z",
    "size": 1832,
    "path": "../public/_nuxt/editor.6b8ad58f.css.gz"
  },
  "/_nuxt/editor.a5c62e77.js": {
    "type": "application/javascript",
    "etag": "\"da6-jQ3muUmtBdUvh+FMl0dsgpqc6cc\"",
    "mtime": "2022-09-05T16:01:00.529Z",
    "size": 3494,
    "path": "../public/_nuxt/editor.a5c62e77.js"
  },
  "/_nuxt/editor.a5c62e77.js.gz": {
    "type": "application/gzip",
    "etag": "\"5a6-PMxiBNf4kS4blGRrW7tHnU0uBDQ\"",
    "mtime": "2022-09-05T16:01:00.529Z",
    "size": 1446,
    "path": "../public/_nuxt/editor.a5c62e77.js.gz"
  },
  "/_nuxt/el-button.2689f638.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3d33-RzIPFKzgWgJB1bVDsB1E+qI9A3Y\"",
    "mtime": "2022-09-05T16:01:00.529Z",
    "size": 15667,
    "path": "../public/_nuxt/el-button.2689f638.css"
  },
  "/_nuxt/el-button.2689f638.css.gz": {
    "type": "application/gzip",
    "etag": "\"792-9z0sUxzFgdvjKkABqYBGsWYuw4g\"",
    "mtime": "2022-09-05T16:01:00.525Z",
    "size": 1938,
    "path": "../public/_nuxt/el-button.2689f638.css.gz"
  },
  "/_nuxt/el-input.6ff3c6ed.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2f98-z1jCGFeotxae1NMDhqMVyKVABE8\"",
    "mtime": "2022-09-05T16:01:00.525Z",
    "size": 12184,
    "path": "../public/_nuxt/el-input.6ff3c6ed.css"
  },
  "/_nuxt/el-input.6ff3c6ed.css.gz": {
    "type": "application/gzip",
    "etag": "\"6fe-JS0QiaYA4JbmHc5bPEBmS/u2d10\"",
    "mtime": "2022-09-05T16:01:00.525Z",
    "size": 1790,
    "path": "../public/_nuxt/el-input.6ff3c6ed.css.gz"
  },
  "/_nuxt/el-menu-item.a9312310.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2860-AfNPlt0JNFhqms/cpV5TwX7Hguo\"",
    "mtime": "2022-09-05T16:01:00.525Z",
    "size": 10336,
    "path": "../public/_nuxt/el-menu-item.a9312310.css"
  },
  "/_nuxt/el-menu-item.a9312310.css.gz": {
    "type": "application/gzip",
    "etag": "\"726-Oj7FgM8gehxokQF4i+KsN4sCbZo\"",
    "mtime": "2022-09-05T16:01:00.525Z",
    "size": 1830,
    "path": "../public/_nuxt/el-menu-item.a9312310.css.gz"
  },
  "/_nuxt/entry.96d19e9b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"105e5-g+dmTrXXUK3yLGPsYWQXNETvCI4\"",
    "mtime": "2022-09-05T16:01:00.525Z",
    "size": 67045,
    "path": "../public/_nuxt/entry.96d19e9b.css"
  },
  "/_nuxt/entry.96d19e9b.css.gz": {
    "type": "application/gzip",
    "etag": "\"4af8-7Owg0QmxbN8ZHE+3QSNVHPsJNIE\"",
    "mtime": "2022-09-05T16:01:00.521Z",
    "size": 19192,
    "path": "../public/_nuxt/entry.96d19e9b.css.gz"
  },
  "/_nuxt/entry.e3538746.js": {
    "type": "application/javascript",
    "etag": "\"17710b-UJCtE7E9x/5nlJJA9rEgHBZMDKw\"",
    "mtime": "2022-09-05T16:01:00.521Z",
    "size": 1536267,
    "path": "../public/_nuxt/entry.e3538746.js"
  },
  "/_nuxt/entry.e3538746.js.gz": {
    "type": "application/gzip",
    "etag": "\"7133b-mHnS8znMmqiAeTnPlw+JCEHynRU\"",
    "mtime": "2022-09-05T16:01:00.517Z",
    "size": 463675,
    "path": "../public/_nuxt/entry.e3538746.js.gz"
  },
  "/_nuxt/error-404.dbc0c239.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e34-HhqYljnhP9Vkrd7/I6g4pFB4nic\"",
    "mtime": "2022-09-05T16:01:00.517Z",
    "size": 3636,
    "path": "../public/_nuxt/error-404.dbc0c239.css"
  },
  "/_nuxt/error-404.dbc0c239.css.gz": {
    "type": "application/gzip",
    "etag": "\"465-7i5f2+++J9XPDhUUMoq1xXBkRyQ\"",
    "mtime": "2022-09-05T16:01:00.517Z",
    "size": 1125,
    "path": "../public/_nuxt/error-404.dbc0c239.css.gz"
  },
  "/_nuxt/error-404.ee3254be.js": {
    "type": "application/javascript",
    "etag": "\"8ad-qTQJbnUrncFoy9ZuEWofzcX4y2s\"",
    "mtime": "2022-09-05T16:01:00.517Z",
    "size": 2221,
    "path": "../public/_nuxt/error-404.ee3254be.js"
  },
  "/_nuxt/error-404.ee3254be.js.gz": {
    "type": "application/gzip",
    "etag": "\"480-1+JKS5f+dhNanQuld+om7ZRiGk4\"",
    "mtime": "2022-09-05T16:01:00.517Z",
    "size": 1152,
    "path": "../public/_nuxt/error-404.ee3254be.js.gz"
  },
  "/_nuxt/error-500.423c5935.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7a4-hO/+uEsvpC6XAy8bY4Ur1aYzjHg\"",
    "mtime": "2022-09-05T16:01:00.505Z",
    "size": 1956,
    "path": "../public/_nuxt/error-500.423c5935.css"
  },
  "/_nuxt/error-500.423c5935.css.gz": {
    "type": "application/gzip",
    "etag": "\"2e6-nhOPzkZwBlRPRywSfnziVKNLI7s\"",
    "mtime": "2022-09-05T16:01:00.505Z",
    "size": 742,
    "path": "../public/_nuxt/error-500.423c5935.css.gz"
  },
  "/_nuxt/error-500.616e66b1.js": {
    "type": "application/javascript",
    "etag": "\"755-tQVuO33rhXbX46BtMqUvve3bHsU\"",
    "mtime": "2022-09-05T16:01:00.505Z",
    "size": 1877,
    "path": "../public/_nuxt/error-500.616e66b1.js"
  },
  "/_nuxt/error-500.616e66b1.js.gz": {
    "type": "application/gzip",
    "etag": "\"3de-ZdzpBiDxi4nb0jkqsIUGWEFQGHs\"",
    "mtime": "2022-09-05T16:01:00.505Z",
    "size": 990,
    "path": "../public/_nuxt/error-500.616e66b1.js.gz"
  },
  "/_nuxt/error-component.6d4c9dbd.js": {
    "type": "application/javascript",
    "etag": "\"439-opAUhrDdUGrQpMHBSnSR4gtCivk\"",
    "mtime": "2022-09-05T16:01:00.505Z",
    "size": 1081,
    "path": "../public/_nuxt/error-component.6d4c9dbd.js"
  },
  "/_nuxt/error-component.6d4c9dbd.js.gz": {
    "type": "application/gzip",
    "etag": "\"261-nvqOQ8flYrTUlQu/HomdkcNlLJ4\"",
    "mtime": "2022-09-05T16:01:00.505Z",
    "size": 609,
    "path": "../public/_nuxt/error-component.6d4c9dbd.js.gz"
  },
  "/_nuxt/index.1b59fe6a.js": {
    "type": "application/javascript",
    "etag": "\"14cb2e-gXIHdstlhdy2lOfW144n/2p4ZQc\"",
    "mtime": "2022-09-05T16:01:00.505Z",
    "size": 1362734,
    "path": "../public/_nuxt/index.1b59fe6a.js"
  },
  "/_nuxt/index.1b59fe6a.js.gz": {
    "type": "application/gzip",
    "etag": "\"6191d-E3768O8cT7D6oZWojPZhWAy7BBk\"",
    "mtime": "2022-09-05T16:01:00.501Z",
    "size": 399645,
    "path": "../public/_nuxt/index.1b59fe6a.js.gz"
  },
  "/_nuxt/index.506c05f8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"28-i0dEkVFnaOlIdXI8UtjCZ7PfsAg\"",
    "mtime": "2022-09-05T16:01:00.501Z",
    "size": 40,
    "path": "../public/_nuxt/index.506c05f8.css"
  },
  "/_nuxt/index.5fae6cf9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"25b-vZW1oTtaX9Rqw2mlHMV/iAH/Seg\"",
    "mtime": "2022-09-05T16:01:00.501Z",
    "size": 603,
    "path": "../public/_nuxt/index.5fae6cf9.css"
  },
  "/_nuxt/index.8843c3b7.js": {
    "type": "application/javascript",
    "etag": "\"8d-All93zIviSrIz+AU3RqeuEb7Fu8\"",
    "mtime": "2022-09-05T16:01:00.501Z",
    "size": 141,
    "path": "../public/_nuxt/index.8843c3b7.js"
  },
  "/_nuxt/index.97ab3f63.js": {
    "type": "application/javascript",
    "etag": "\"19-BxBOlGLaa/dRAfqi4MtEunXToPk\"",
    "mtime": "2022-09-05T16:01:00.501Z",
    "size": 25,
    "path": "../public/_nuxt/index.97ab3f63.js"
  },
  "/_nuxt/index.c7621f5e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d-erk17UAx45P85b1SU5JkQVTE0gg\"",
    "mtime": "2022-09-05T16:01:00.497Z",
    "size": 45,
    "path": "../public/_nuxt/index.c7621f5e.css"
  },
  "/_nuxt/index.c7c47e6e.js": {
    "type": "application/javascript",
    "etag": "\"348-jkBsqncl8qYDZNcb7Br4PHBUbVg\"",
    "mtime": "2022-09-05T16:01:00.497Z",
    "size": 840,
    "path": "../public/_nuxt/index.c7c47e6e.js"
  },
  "/_nuxt/index.d4b6d0ec.js": {
    "type": "application/javascript",
    "etag": "\"363-dfRDuJqkRWIYgPlUWZRiph0YNDM\"",
    "mtime": "2022-09-05T16:01:00.497Z",
    "size": 867,
    "path": "../public/_nuxt/index.d4b6d0ec.js"
  },
  "/_nuxt/index.d9f665a7.js": {
    "type": "application/javascript",
    "etag": "\"33a-DbiNMeWThDKKJn3A0IHPHYceDJc\"",
    "mtime": "2022-09-05T16:01:00.497Z",
    "size": 826,
    "path": "../public/_nuxt/index.d9f665a7.js"
  },
  "/_nuxt/login.8acd1f21.js": {
    "type": "application/javascript",
    "etag": "\"2bca-q3jgq+XA4fk4F0bDF9MovATTdG4\"",
    "mtime": "2022-09-05T16:01:00.497Z",
    "size": 11210,
    "path": "../public/_nuxt/login.8acd1f21.js"
  },
  "/_nuxt/login.8acd1f21.js.gz": {
    "type": "application/gzip",
    "etag": "\"133f-+lRgl03N7TQQjPIcwnQeW2+iIY4\"",
    "mtime": "2022-09-05T16:01:00.497Z",
    "size": 4927,
    "path": "../public/_nuxt/login.8acd1f21.js.gz"
  },
  "/_nuxt/login.c554d8ec.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"f24-TXp86+6RT+fAtrAsuOgrtwMbmKA\"",
    "mtime": "2022-09-05T16:01:00.493Z",
    "size": 3876,
    "path": "../public/_nuxt/login.c554d8ec.css"
  },
  "/_nuxt/login.c554d8ec.css.gz": {
    "type": "application/gzip",
    "etag": "\"36d-ovnzPI3lgCtFC47v9spDeDQFmSY\"",
    "mtime": "2022-09-05T16:01:00.493Z",
    "size": 877,
    "path": "../public/_nuxt/login.c554d8ec.css.gz"
  },
  "/_nuxt/post-list.026ee1d3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"691d-pN2Td42MF6KO9aR5/UftCqraZp0\"",
    "mtime": "2022-09-05T16:01:00.493Z",
    "size": 26909,
    "path": "../public/_nuxt/post-list.026ee1d3.css"
  },
  "/_nuxt/post-list.026ee1d3.css.gz": {
    "type": "application/gzip",
    "etag": "\"f6e-4AagsEF24ztkOEii/rHJaUkA7gI\"",
    "mtime": "2022-09-05T16:01:00.493Z",
    "size": 3950,
    "path": "../public/_nuxt/post-list.026ee1d3.css.gz"
  },
  "/_nuxt/post-list.ae01d0c8.js": {
    "type": "application/javascript",
    "etag": "\"8a9-3ygZiOXbnv2+APCYaAR4Whoc/o0\"",
    "mtime": "2022-09-05T16:01:00.493Z",
    "size": 2217,
    "path": "../public/_nuxt/post-list.ae01d0c8.js"
  },
  "/_nuxt/post-list.ae01d0c8.js.gz": {
    "type": "application/gzip",
    "etag": "\"448-80Tftgma+96m6gfCdEi4XD9ycMw\"",
    "mtime": "2022-09-05T16:01:00.493Z",
    "size": 1096,
    "path": "../public/_nuxt/post-list.ae01d0c8.js.gz"
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
    const sitemap = await Mp.get("http://127.0.0.1:9447/api/sitemap.xml");
    res.end(sitemap.data);
  }
};

const _lazy_4PAX7e = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _TvVw0r, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_4PAX7e, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_4PAX7e, lazy: true, middleware: false, method: undefined }
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
