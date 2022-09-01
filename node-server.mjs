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

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"TITLE":"指尖魔法屋-醉月思的博客","VERSION":"0.2.0 · build-20220901","KEYWORDS":["thinkmoon","指尖魔法屋","醉月思的博客"],"DESCRIPTION":"web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！","serviceUrl":"https://service.thinkmoon.cn/api","public":{"TITLE":"指尖魔法屋-醉月思的博客","VERSION":"0.2.0 · build-20220901","KEYWORDS":["thinkmoon","指尖魔法屋","醉月思的博客"],"DESCRIPTION":"web前端开发工程师、面向高保真编程、总结与记录是两个极其优秀的学习习惯、对知识和技术保持敬畏之心！","serviceUrl":"https://service.thinkmoon.cn/api"}};
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
    "etag": "\"18d6-ROwId6X3H5MySG48VIRh5tscMrA\"",
    "mtime": "2022-09-01T16:04:34.503Z",
    "path": "../public/manifest.json"
  },
  "/_nuxt/404.10bf8556.mjs": {
    "type": "application/javascript",
    "etag": "\"a4-kE3thbE/upQPxl19vUiQo1Cmj6A\"",
    "mtime": "2022-09-01T16:04:34.703Z",
    "path": "../public/_nuxt/404.10bf8556.mjs"
  },
  "/_nuxt/[cid].d85db5b7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"87-Akb3e/t7jZ2kQkwsDWY5mnzJ9UA\"",
    "mtime": "2022-09-01T16:04:34.703Z",
    "path": "../public/_nuxt/[cid].d85db5b7.css"
  },
  "/_nuxt/[pageIndex].5f2a6f76.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"178-6Rc9BvTsPXvmVu5/iGhoZMmjCVE\"",
    "mtime": "2022-09-01T16:04:34.703Z",
    "path": "../public/_nuxt/[pageIndex].5f2a6f76.css"
  },
  "/_nuxt/_cid_.329a2bb5.mjs": {
    "type": "application/javascript",
    "etag": "\"637-fcd0LxncOlbpYXis9kZz3J5FNb0\"",
    "mtime": "2022-09-01T16:04:34.703Z",
    "path": "../public/_nuxt/_cid_.329a2bb5.mjs"
  },
  "/_nuxt/_pageIndex_.37ecbea7.mjs": {
    "type": "application/javascript",
    "etag": "\"32e-3BysrFIJXlGRq0shbzCwPvRoA+k\"",
    "mtime": "2022-09-01T16:04:34.703Z",
    "path": "../public/_nuxt/_pageIndex_.37ecbea7.mjs"
  },
  "/_nuxt/_pageIndex_.7a4d500f.mjs": {
    "type": "application/javascript",
    "etag": "\"35e-D5fGSx+atZ47RgiFeQvadBv06DA\"",
    "mtime": "2022-09-01T16:04:34.703Z",
    "path": "../public/_nuxt/_pageIndex_.7a4d500f.mjs"
  },
  "/_nuxt/_pageIndex_.832f1286.mjs": {
    "type": "application/javascript",
    "etag": "\"509-l1/QWgAN/wUWHoleGKzBzN+8fVE\"",
    "mtime": "2022-09-01T16:04:34.703Z",
    "path": "../public/_nuxt/_pageIndex_.832f1286.mjs"
  },
  "/_nuxt/admin.052404d2.mjs": {
    "type": "application/javascript",
    "etag": "\"107-hgNIRu0aK2FGyuKzYQ7+tBUSTZA\"",
    "mtime": "2022-09-01T16:04:34.703Z",
    "path": "../public/_nuxt/admin.052404d2.mjs"
  },
  "/_nuxt/admin.6e91f5a2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10c-2dGpJGJzkjr3CT1Lwq1tKTNWFqU\"",
    "mtime": "2022-09-01T16:04:34.703Z",
    "path": "../public/_nuxt/admin.6e91f5a2.css"
  },
  "/_nuxt/admin.f460b920.mjs": {
    "type": "application/javascript",
    "etag": "\"5d7-CkU8trGXsD4jcq+NrDXpIz6SlsI\"",
    "mtime": "2022-09-01T16:04:34.703Z",
    "path": "../public/_nuxt/admin.f460b920.mjs"
  },
  "/_nuxt/auth.be05c284.mjs": {
    "type": "application/javascript",
    "etag": "\"88-PQxEXPniOAEdm8a2s0/dbbqHx6U\"",
    "mtime": "2022-09-01T16:04:34.667Z",
    "path": "../public/_nuxt/auth.be05c284.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-09-01T16:04:34.663Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default.e87c0fd5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"36d-Sard6/nX+6F68nC9DUTqil+F74E\"",
    "mtime": "2022-09-01T16:04:34.659Z",
    "path": "../public/_nuxt/default.e87c0fd5.css"
  },
  "/_nuxt/default.f9171480.mjs": {
    "type": "application/javascript",
    "etag": "\"896-IdObkY4Sbg1djwtXcZWpUnb4+s4\"",
    "mtime": "2022-09-01T16:04:34.659Z",
    "path": "../public/_nuxt/default.f9171480.mjs"
  },
  "/_nuxt/editor.46f3a4ca.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"20b-aWouG2QOf3xHxNLmOm4vMypzsVw\"",
    "mtime": "2022-09-01T16:04:34.659Z",
    "path": "../public/_nuxt/editor.46f3a4ca.css"
  },
  "/_nuxt/editor.ed973868.mjs": {
    "type": "application/javascript",
    "etag": "\"d50-9c7jgPmuWR34e5ZiA67LFfZsDxQ\"",
    "mtime": "2022-09-01T16:04:34.659Z",
    "path": "../public/_nuxt/editor.ed973868.mjs"
  },
  "/_nuxt/entry.0f78e046.mjs": {
    "type": "application/javascript",
    "etag": "\"25706c-xDWubk7d2d5KzSkTrbnu1WwcN5o\"",
    "mtime": "2022-09-01T16:04:34.659Z",
    "path": "../public/_nuxt/entry.0f78e046.mjs"
  },
  "/_nuxt/entry.ee50ef41.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5d079-DZbG1xmLT8Y2xWdyx4KDs3UTJBc\"",
    "mtime": "2022-09-01T16:04:34.659Z",
    "path": "../public/_nuxt/entry.ee50ef41.css"
  },
  "/_nuxt/error-component.fc1ecc74.mjs": {
    "type": "application/javascript",
    "etag": "\"3f-XsbXlc/ChhkfWlvhmN82cfvULUk\"",
    "mtime": "2022-09-01T16:04:34.611Z",
    "path": "../public/_nuxt/error-component.fc1ecc74.mjs"
  },
  "/_nuxt/index.1811b9a1.mjs": {
    "type": "application/javascript",
    "etag": "\"2bb-96QMMXELaPaG4gsPTmz7DXhfcok\"",
    "mtime": "2022-09-01T16:04:34.611Z",
    "path": "../public/_nuxt/index.1811b9a1.mjs"
  },
  "/_nuxt/index.506c05f8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"28-i0dEkVFnaOlIdXI8UtjCZ7PfsAg\"",
    "mtime": "2022-09-01T16:04:34.611Z",
    "path": "../public/_nuxt/index.506c05f8.css"
  },
  "/_nuxt/index.5fae6cf9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"25b-vZW1oTtaX9Rqw2mlHMV/iAH/Seg\"",
    "mtime": "2022-09-01T16:04:34.611Z",
    "path": "../public/_nuxt/index.5fae6cf9.css"
  },
  "/_nuxt/index.bf39f6fe.mjs": {
    "type": "application/javascript",
    "etag": "\"8d-ENbmRPK8vkDPWSlFxBGIVLRyd1c\"",
    "mtime": "2022-09-01T16:04:34.611Z",
    "path": "../public/_nuxt/index.bf39f6fe.mjs"
  },
  "/_nuxt/index.c7621f5e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d-erk17UAx45P85b1SU5JkQVTE0gg\"",
    "mtime": "2022-09-01T16:04:34.611Z",
    "path": "../public/_nuxt/index.c7621f5e.css"
  },
  "/_nuxt/index.f2f5bb06.mjs": {
    "type": "application/javascript",
    "etag": "\"321-M0nX6TAPMHJlwdoOnoWsK5UowfQ\"",
    "mtime": "2022-09-01T16:04:34.611Z",
    "path": "../public/_nuxt/index.f2f5bb06.mjs"
  },
  "/_nuxt/index.fd8c9de1.mjs": {
    "type": "application/javascript",
    "etag": "\"301-uZOV88PumrovB4tsMyOr7MYUarQ\"",
    "mtime": "2022-09-01T16:04:34.567Z",
    "path": "../public/_nuxt/index.fd8c9de1.mjs"
  },
  "/_nuxt/login.2248ea52.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8f-bqf6jobwqFYgiYeXy8Zgzhe19aQ\"",
    "mtime": "2022-09-01T16:04:34.567Z",
    "path": "../public/_nuxt/login.2248ea52.css"
  },
  "/_nuxt/login.251ac6e5.mjs": {
    "type": "application/javascript",
    "etag": "\"4f5-/kdFkjKFt4ea2H92eUp0NbzSi5I\"",
    "mtime": "2022-09-01T16:04:34.563Z",
    "path": "../public/_nuxt/login.251ac6e5.mjs"
  },
  "/_nuxt/post-list.027c1aea.mjs": {
    "type": "application/javascript",
    "etag": "\"856-HXa8R9ie+iqFSFrOoNf4kO9cMKg\"",
    "mtime": "2022-09-01T16:04:34.563Z",
    "path": "../public/_nuxt/post-list.027c1aea.mjs"
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

const _lazy_ucd6A0 = () => import('../handlers/renderer.mjs').then(function (n) { return n.a; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _Abd1UL, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_ucd6A0, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_ucd6A0, lazy: true, middleware: false, method: undefined }
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
