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

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/nuxt-asset/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"TITLE":"指尖魔法屋-醉月思的博客","VERSION":"0.2.0 · build-20220619","KEYWORDS":["thinkmoon","指尖魔法屋","醉月思的博客"],"DESCRIPTION":"web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！","serviceUrl":"https://service.thinkmoon.cn/api","public":{"TITLE":"指尖魔法屋-醉月思的博客","VERSION":"0.2.0 · build-20220619","KEYWORDS":["thinkmoon","指尖魔法屋","醉月思的博客"],"DESCRIPTION":"web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！","serviceUrl":"https://service.thinkmoon.cn/api"}};
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
    "mtime": "2022-06-19T13:15:54.590Z",
    "path": "../public/ads.js"
  },
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-06-19T13:15:54.590Z",
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-06-19T13:15:54.590Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-rNrKs1nSkmU1PPE2uMSVSowftYg\"",
    "mtime": "2022-06-19T13:15:54.590Z",
    "path": "../public/robots.txt"
  },
  "/nuxt-asset/404-a52ee2fe.mjs": {
    "type": "application/javascript",
    "etag": "\"13c-UlPn3R1SPwiIMNPpWyvRaXsWNdM\"",
    "mtime": "2022-06-19T13:15:54.590Z",
    "path": "../public/nuxt-asset/404-a52ee2fe.mjs"
  },
  "/nuxt-asset/Footer-3e69dcfd.mjs": {
    "type": "application/javascript",
    "etag": "\"3e5-zfAGtSwjt7LGeWAdbB7ZhxT8QRA\"",
    "mtime": "2022-06-19T13:15:54.590Z",
    "path": "../public/nuxt-asset/Footer-3e69dcfd.mjs"
  },
  "/nuxt-asset/PostList-dba5ae72.mjs": {
    "type": "application/javascript",
    "etag": "\"9ec-KDNlt1R4i+u1uygbUaYhpRpRKJg\"",
    "mtime": "2022-06-19T13:15:54.590Z",
    "path": "../public/nuxt-asset/PostList-dba5ae72.mjs"
  },
  "/nuxt-asset/_cid_-bb5b95da.mjs": {
    "type": "application/javascript",
    "etag": "\"72c-FfFZhJ8YtstQEaGe3NGrXWGu5kI\"",
    "mtime": "2022-06-19T13:15:54.590Z",
    "path": "../public/nuxt-asset/_cid_-bb5b95da.mjs"
  },
  "/nuxt-asset/_pageIndex_-3cdc9bfb.mjs": {
    "type": "application/javascript",
    "etag": "\"67d-YGZcHxLCcAzWu46Ms1mt+XTdb14\"",
    "mtime": "2022-06-19T13:15:54.590Z",
    "path": "../public/nuxt-asset/_pageIndex_-3cdc9bfb.mjs"
  },
  "/nuxt-asset/_pageIndex_-6fb97cfd.mjs": {
    "type": "application/javascript",
    "etag": "\"61e-MrK71RNu0LASTO7Cg2mXgXmCwjE\"",
    "mtime": "2022-06-19T13:15:54.590Z",
    "path": "../public/nuxt-asset/_pageIndex_-6fb97cfd.mjs"
  },
  "/nuxt-asset/_pageIndex_-afbbfd5f.mjs": {
    "type": "application/javascript",
    "etag": "\"44c-R9gMjx1DVaJAC7rm0yiREGevL3I\"",
    "mtime": "2022-06-19T13:15:54.586Z",
    "path": "../public/nuxt-asset/_pageIndex_-afbbfd5f.mjs"
  },
  "/nuxt-asset/admin-b04321e3.mjs": {
    "type": "application/javascript",
    "etag": "\"681-Zk44RLpk7wBU8cDi3kxXX7Dxrs4\"",
    "mtime": "2022-06-19T13:15:54.586Z",
    "path": "../public/nuxt-asset/admin-b04321e3.mjs"
  },
  "/nuxt-asset/admin-da4c1e28.mjs": {
    "type": "application/javascript",
    "etag": "\"128-jHfcxKd7JgYHkndZCgzX6l+At5E\"",
    "mtime": "2022-06-19T13:15:54.586Z",
    "path": "../public/nuxt-asset/admin-da4c1e28.mjs"
  },
  "/nuxt-asset/asyncData-98d56fe3.mjs": {
    "type": "application/javascript",
    "etag": "\"8b3-JGtD7klMmiHT4WSf8YnIj30ctKc\"",
    "mtime": "2022-06-19T13:15:54.586Z",
    "path": "../public/nuxt-asset/asyncData-98d56fe3.mjs"
  },
  "/nuxt-asset/auth-fdb1b80f.mjs": {
    "type": "application/javascript",
    "etag": "\"86-cSztlyQ+PyWPiRy/F16XycyZ+J8\"",
    "mtime": "2022-06-19T13:15:54.586Z",
    "path": "../public/nuxt-asset/auth-fdb1b80f.mjs"
  },
  "/nuxt-asset/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-06-19T13:15:54.586Z",
    "path": "../public/nuxt-asset/background.36a7be78.jpg"
  },
  "/nuxt-asset/baiduSite-902d3cdd.mjs": {
    "type": "application/javascript",
    "etag": "\"3b-AWLPdCO5BoE4T1k7X7ajWrnWoz0\"",
    "mtime": "2022-06-19T13:15:54.586Z",
    "path": "../public/nuxt-asset/baiduSite-902d3cdd.mjs"
  },
  "/nuxt-asset/default-13df5fef.mjs": {
    "type": "application/javascript",
    "etag": "\"c8d-PVchsYVOPkZLh4cFchxIMCEHu1A\"",
    "mtime": "2022-06-19T13:15:54.586Z",
    "path": "../public/nuxt-asset/default-13df5fef.mjs"
  },
  "/nuxt-asset/default.e9b4605f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"37a-L91bkI1mOEdclVAYcJVMBSPrJmI\"",
    "mtime": "2022-06-19T13:15:54.586Z",
    "path": "../public/nuxt-asset/default.e9b4605f.css"
  },
  "/nuxt-asset/editor-497adb7a.mjs": {
    "type": "application/javascript",
    "etag": "\"f3a-hmClTM1rVbkJwnmv1aNgTfGCoM4\"",
    "mtime": "2022-06-19T13:15:54.586Z",
    "path": "../public/nuxt-asset/editor-497adb7a.mjs"
  },
  "/nuxt-asset/entry-9fb604ad.mjs": {
    "type": "application/javascript",
    "etag": "\"24ccff-wUh5bokr744WTHyzYb8L5xtVgqw\"",
    "mtime": "2022-06-19T13:15:54.586Z",
    "path": "../public/nuxt-asset/entry-9fb604ad.mjs"
  },
  "/nuxt-asset/entry.c15189cd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5e1f9-g4jkgraowkOg0IlLaGUklmLp+ck\"",
    "mtime": "2022-06-19T13:15:54.582Z",
    "path": "../public/nuxt-asset/entry.c15189cd.css"
  },
  "/nuxt-asset/index-0469fbce.mjs": {
    "type": "application/javascript",
    "etag": "\"358-0U3XmkhSa/aIl1Al/qxP4m2Au+w\"",
    "mtime": "2022-06-19T13:15:54.582Z",
    "path": "../public/nuxt-asset/index-0469fbce.mjs"
  },
  "/nuxt-asset/index-5a2da1ca.mjs": {
    "type": "application/javascript",
    "etag": "\"3a1-4HEzh0IWm9UzX9uAupBJ3SZbtlA\"",
    "mtime": "2022-06-19T13:15:54.582Z",
    "path": "../public/nuxt-asset/index-5a2da1ca.mjs"
  },
  "/nuxt-asset/index-84974a77.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-VvkC9uovRTqL/f2Y7LMasaZJZ7Q\"",
    "mtime": "2022-06-19T13:15:54.582Z",
    "path": "../public/nuxt-asset/index-84974a77.mjs"
  },
  "/nuxt-asset/index-c5efeb39.mjs": {
    "type": "application/javascript",
    "etag": "\"3c1-t6d+s+vVgmk01pVO3qbuvQTyLlY\"",
    "mtime": "2022-06-19T13:15:54.582Z",
    "path": "../public/nuxt-asset/index-c5efeb39.mjs"
  },
  "/nuxt-asset/login-9e53ae33.mjs": {
    "type": "application/javascript",
    "etag": "\"5fc-DegjAIEDiy2Jk7V1mueTdQ4HxfI\"",
    "mtime": "2022-06-19T13:15:54.582Z",
    "path": "../public/nuxt-asset/login-9e53ae33.mjs"
  },
  "/nuxt-asset/manifest.json": {
    "type": "application/json",
    "etag": "\"190d-OnCa6vbonMH29V4rgAf6p2ZQlZA\"",
    "mtime": "2022-06-19T13:15:54.582Z",
    "path": "../public/nuxt-asset/manifest.json"
  },
  "/nuxt-asset/post-list-923c313f.mjs": {
    "type": "application/javascript",
    "etag": "\"b25-ar1bnd2TehYl0lHcTYQ1hVLRVMg\"",
    "mtime": "2022-06-19T13:15:54.578Z",
    "path": "../public/nuxt-asset/post-list-923c313f.mjs"
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
