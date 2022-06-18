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
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';
import axios from 'axios';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/nuxt-asset/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"TITLE":"指尖魔法屋-醉月思的博客","VERSION":"0.1.9 · build-20220618","KEYWORDS":["thinkmoon","指尖魔法屋","醉月思的博客"],"DESCRIPTION":"web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！","serviceUrl":"https://service.thinkmoon.cn/api","public":{"TITLE":"指尖魔法屋-醉月思的博客","VERSION":"0.1.9 · build-20220618","KEYWORDS":["thinkmoon","指尖魔法屋","醉月思的博客"],"DESCRIPTION":"web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！","serviceUrl":"https://service.thinkmoon.cn/api"}};
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
      return decodeURI(parseURL(event.req.originalUrl || event.req.url).pathname).replace(/\/$/, "/index");
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

const errorHandler = (async function errorhandler(_error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(_error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    description: "",
    data: _error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (errorObject.statusCode !== 404) {
    console.error("[nuxt] [request error]", errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const url = withQuery("/__nuxt_error", errorObject);
  const html = await $fetch(url).catch((error) => {
    console.error("[nitro] Error while generating error response", error);
    return errorObject.statusMessage;
  });
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/ads.js": {
    "type": "application/javascript",
    "etag": "\"2a6-QG3gIcUryNH3lTuW9EhtBAeMq38\"",
    "mtime": "2022-06-18T10:11:52.306Z",
    "path": "../public/ads.js"
  },
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-06-18T10:11:52.306Z",
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-06-18T10:11:52.306Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-rNrKs1nSkmU1PPE2uMSVSowftYg\"",
    "mtime": "2022-06-18T10:11:52.306Z",
    "path": "../public/robots.txt"
  },
  "/nuxt-asset/404-48bce17b.mjs": {
    "type": "application/javascript",
    "etag": "\"13c-KNwROYutMIsFRie1nBq3Y3GCBX8\"",
    "mtime": "2022-06-18T10:11:52.306Z",
    "path": "../public/nuxt-asset/404-48bce17b.mjs"
  },
  "/nuxt-asset/Footer-8787694d.mjs": {
    "type": "application/javascript",
    "etag": "\"3e5-QvkoNxp9n8SvxxCtSvN8eIzhpOg\"",
    "mtime": "2022-06-18T10:11:52.306Z",
    "path": "../public/nuxt-asset/Footer-8787694d.mjs"
  },
  "/nuxt-asset/PostList-23c11b95.mjs": {
    "type": "application/javascript",
    "etag": "\"9d6-N5jOlUZIlC9RIcof93CkSjcQxu4\"",
    "mtime": "2022-06-18T10:11:52.306Z",
    "path": "../public/nuxt-asset/PostList-23c11b95.mjs"
  },
  "/nuxt-asset/TagApi-1657b3d6.mjs": {
    "type": "application/javascript",
    "etag": "\"85-enmSrVRq4nXyoZl/9WjQr7vFk6A\"",
    "mtime": "2022-06-18T10:11:52.306Z",
    "path": "../public/nuxt-asset/TagApi-1657b3d6.mjs"
  },
  "/nuxt-asset/_cid_-b880b5d8.mjs": {
    "type": "application/javascript",
    "etag": "\"72c-ABHYL8mPLKcK0e3IHtVwy8OYA6A\"",
    "mtime": "2022-06-18T10:11:52.306Z",
    "path": "../public/nuxt-asset/_cid_-b880b5d8.mjs"
  },
  "/nuxt-asset/_pageIndex_-78737c32.mjs": {
    "type": "application/javascript",
    "etag": "\"67d-WCnQ55cJAQaNnhNWpcqnpu5xJfs\"",
    "mtime": "2022-06-18T10:11:52.306Z",
    "path": "../public/nuxt-asset/_pageIndex_-78737c32.mjs"
  },
  "/nuxt-asset/_pageIndex_-a0412d7f.mjs": {
    "type": "application/javascript",
    "etag": "\"46f-j4M/H15Qlm8rDAD4PjTIaOhBJiM\"",
    "mtime": "2022-06-18T10:11:52.306Z",
    "path": "../public/nuxt-asset/_pageIndex_-a0412d7f.mjs"
  },
  "/nuxt-asset/_pageIndex_-ccb129af.mjs": {
    "type": "application/javascript",
    "etag": "\"61e-2H+nVKn27fog+GpImle9L1i/1mA\"",
    "mtime": "2022-06-18T10:11:52.306Z",
    "path": "../public/nuxt-asset/_pageIndex_-ccb129af.mjs"
  },
  "/nuxt-asset/admin-6057fd85.mjs": {
    "type": "application/javascript",
    "etag": "\"128-/uuq4eNVazHzhaREcNJ4s9HTuVM\"",
    "mtime": "2022-06-18T10:11:52.306Z",
    "path": "../public/nuxt-asset/admin-6057fd85.mjs"
  },
  "/nuxt-asset/admin-ce62f30d.mjs": {
    "type": "application/javascript",
    "etag": "\"681-G7s9MGeJYmL28ZdDJ5C+D03MRdc\"",
    "mtime": "2022-06-18T10:11:52.306Z",
    "path": "../public/nuxt-asset/admin-ce62f30d.mjs"
  },
  "/nuxt-asset/asyncData-a97483c4.mjs": {
    "type": "application/javascript",
    "etag": "\"8b3-DOuzOjrtdVL3Nsx2DN7dOBOqPkY\"",
    "mtime": "2022-06-18T10:11:52.306Z",
    "path": "../public/nuxt-asset/asyncData-a97483c4.mjs"
  },
  "/nuxt-asset/auth-e862b4c3.mjs": {
    "type": "application/javascript",
    "etag": "\"86-WkZEQWIS1lrr88BLBpe5fZ1w4Y0\"",
    "mtime": "2022-06-18T10:11:52.302Z",
    "path": "../public/nuxt-asset/auth-e862b4c3.mjs"
  },
  "/nuxt-asset/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-06-18T10:11:52.302Z",
    "path": "../public/nuxt-asset/background.36a7be78.jpg"
  },
  "/nuxt-asset/baiduSite-9eda8ee7.mjs": {
    "type": "application/javascript",
    "etag": "\"3b-Iehes6qBUm60IFP4eu3bP1RwgdY\"",
    "mtime": "2022-06-18T10:11:52.302Z",
    "path": "../public/nuxt-asset/baiduSite-9eda8ee7.mjs"
  },
  "/nuxt-asset/default-05059b80.mjs": {
    "type": "application/javascript",
    "etag": "\"c8d-NhGNxv0NFGDId4GeLHbtnZVgPqk\"",
    "mtime": "2022-06-18T10:11:52.302Z",
    "path": "../public/nuxt-asset/default-05059b80.mjs"
  },
  "/nuxt-asset/default.a925aad7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"340-i5UXgmsebkhGpT33EjZa16BdNNQ\"",
    "mtime": "2022-06-18T10:11:52.302Z",
    "path": "../public/nuxt-asset/default.a925aad7.css"
  },
  "/nuxt-asset/editor-90d86ca6.mjs": {
    "type": "application/javascript",
    "etag": "\"c98-YmWouRVbbTClmcRbSipoTdGu1WI\"",
    "mtime": "2022-06-18T10:11:52.302Z",
    "path": "../public/nuxt-asset/editor-90d86ca6.mjs"
  },
  "/nuxt-asset/entry-a92dd86b.mjs": {
    "type": "application/javascript",
    "etag": "\"24cbd7-v5BYdH4xWo+6PV2hrvcZPJf+u8Y\"",
    "mtime": "2022-06-18T10:11:52.302Z",
    "path": "../public/nuxt-asset/entry-a92dd86b.mjs"
  },
  "/nuxt-asset/entry.b0fa195c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5e1f9-Tq84RjT6o/lYgooUJy708uLd3/Y\"",
    "mtime": "2022-06-18T10:11:52.298Z",
    "path": "../public/nuxt-asset/entry.b0fa195c.css"
  },
  "/nuxt-asset/index-614b919a.mjs": {
    "type": "application/javascript",
    "etag": "\"358-tftLIh1ZgnCU95ZzetM6yefPUF8\"",
    "mtime": "2022-06-18T10:11:52.298Z",
    "path": "../public/nuxt-asset/index-614b919a.mjs"
  },
  "/nuxt-asset/index-934d9d29.mjs": {
    "type": "application/javascript",
    "etag": "\"3c4-fTxtmi3iNRKhnUHVx/oMQSt47BE\"",
    "mtime": "2022-06-18T10:11:52.298Z",
    "path": "../public/nuxt-asset/index-934d9d29.mjs"
  },
  "/nuxt-asset/index-cd00c482.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-HPkWl0m4ZNXJ5DrSrZbFS/oP91c\"",
    "mtime": "2022-06-18T10:11:52.298Z",
    "path": "../public/nuxt-asset/index-cd00c482.mjs"
  },
  "/nuxt-asset/index-d43d2b54.mjs": {
    "type": "application/javascript",
    "etag": "\"3c1-nzWJW78QvEfcqPqoI9rR3CBs5jI\"",
    "mtime": "2022-06-18T10:11:52.298Z",
    "path": "../public/nuxt-asset/index-d43d2b54.mjs"
  },
  "/nuxt-asset/login-cf37bc20.mjs": {
    "type": "application/javascript",
    "etag": "\"5fc-MfCMLK1dX+5mnlrcnrsOTI+tBGE\"",
    "mtime": "2022-06-18T10:11:52.298Z",
    "path": "../public/nuxt-asset/login-cf37bc20.mjs"
  },
  "/nuxt-asset/manifest.json": {
    "type": "application/json",
    "etag": "\"1a0e-IqcqsVkfwDN2WFLkY/VLH2g2GM4\"",
    "mtime": "2022-06-18T10:11:52.298Z",
    "path": "../public/nuxt-asset/manifest.json"
  },
  "/nuxt-asset/post-list-00ff6208.mjs": {
    "type": "application/javascript",
    "etag": "\"b25-DUBC93Nnl0i5Sbt+8EVC3J2WIak\"",
    "mtime": "2022-06-18T10:11:52.298Z",
    "path": "../public/nuxt-asset/post-list-00ff6208.mjs"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = ["/nuxt-asset"];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return
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
const _152570 = eventHandler(async (event) => {
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

const _247760 = async (req, res) => {
  if (req.url === "/sitemap.xml") {
    const sitemap = await axios.get("http://127.0.0.1:9447/api/sitemap.xml");
    res.end(sitemap.data);
  }
};

const _lazy_197530 = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _152570, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _247760, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_197530, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_197530, lazy: true, middleware: false, method: undefined }
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
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();

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

export { nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map
