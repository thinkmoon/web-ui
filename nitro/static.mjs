import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-11T15:33:39.912Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-8GmqQky2yMtiVH+DZZPBXLpe/oA\"",
    "mtime": "2022-04-11T15:33:39.912Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"149a-B+AUa7vzGzFzTlnKr8WQmfcAXHQ\"",
    "mtime": "2022-04-11T15:33:39.908Z",
    "path": "../public/sitemap.txt"
  },
  "/_nuxt/404-b1fae6d6.mjs": {
    "type": "application/javascript",
    "etag": "\"134-R6dVWLL3xDhpP0Kig+SojpxJjVM\"",
    "mtime": "2022-04-11T15:33:39.908Z",
    "path": "../public/_nuxt/404-b1fae6d6.mjs"
  },
  "/_nuxt/Footer-e42b1375.mjs": {
    "type": "application/javascript",
    "etag": "\"3cb-8vlXcFOxFAGIhfUkrG9H1TtCQY0\"",
    "mtime": "2022-04-11T15:33:39.908Z",
    "path": "../public/_nuxt/Footer-e42b1375.mjs"
  },
  "/_nuxt/_cid_-7f90531c.mjs": {
    "type": "application/javascript",
    "etag": "\"545-3R2WlKVpxOYkcuvI/6T8CfdjTv4\"",
    "mtime": "2022-04-11T15:33:39.908Z",
    "path": "../public/_nuxt/_cid_-7f90531c.mjs"
  },
  "/_nuxt/_pageIndex_-31beb20d.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-04-11T15:33:39.908Z",
    "path": "../public/_nuxt/_pageIndex_-31beb20d.mjs"
  },
  "/_nuxt/_pageIndex_-b3ebe7cc.mjs": {
    "type": "application/javascript",
    "etag": "\"96-jcSDFuElfQdLl5yD/fxOghRxa+s\"",
    "mtime": "2022-04-11T15:33:39.908Z",
    "path": "../public/_nuxt/_pageIndex_-b3ebe7cc.mjs"
  },
  "/_nuxt/_pageIndex_-eb10c687.mjs": {
    "type": "application/javascript",
    "etag": "\"e31-SOvEX46WvSOuo5oQhYLMYPhOnA0\"",
    "mtime": "2022-04-11T15:33:39.908Z",
    "path": "../public/_nuxt/_pageIndex_-eb10c687.mjs"
  },
  "/_nuxt/admin-8bd16e2d.mjs": {
    "type": "application/javascript",
    "etag": "\"640-4sRVSX0iRinP5coH0lFWYnrmtZk\"",
    "mtime": "2022-04-11T15:33:39.908Z",
    "path": "../public/_nuxt/admin-8bd16e2d.mjs"
  },
  "/_nuxt/admin-acf5bac2.mjs": {
    "type": "application/javascript",
    "etag": "\"128-BfZDVr1uAdz0/3o8d+kXZYMdTBQ\"",
    "mtime": "2022-04-11T15:33:39.908Z",
    "path": "../public/_nuxt/admin-acf5bac2.mjs"
  },
  "/_nuxt/asyncData-4f9208b5.mjs": {
    "type": "application/javascript",
    "etag": "\"878-UwO+agEWt8MF+D9HCgOP+1S5Hh0\"",
    "mtime": "2022-04-11T15:33:39.908Z",
    "path": "../public/_nuxt/asyncData-4f9208b5.mjs"
  },
  "/_nuxt/auth-83a335ec.mjs": {
    "type": "application/javascript",
    "etag": "\"86-z2dl3gPzbiXmlPVwisLrts2xZGQ\"",
    "mtime": "2022-04-11T15:33:39.908Z",
    "path": "../public/_nuxt/auth-83a335ec.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-11T15:33:39.908Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-7dbacb25.mjs": {
    "type": "application/javascript",
    "etag": "\"700-YLk5UoxQqdUW6CsMQ0/x8NxdE9A\"",
    "mtime": "2022-04-11T15:33:39.904Z",
    "path": "../public/_nuxt/default-7dbacb25.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-11T15:33:39.904Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-650383ba.mjs": {
    "type": "application/javascript",
    "etag": "\"a80-zHOQmVQ/3uUfeOcSSZsfywuY6+g\"",
    "mtime": "2022-04-11T15:33:39.904Z",
    "path": "../public/_nuxt/editor-650383ba.mjs"
  },
  "/_nuxt/entry-7bff15f0.mjs": {
    "type": "application/javascript",
    "etag": "\"242bbe-tvh7ozLsPLoVBZyoNo0XzkJy/lA\"",
    "mtime": "2022-04-11T15:33:39.904Z",
    "path": "../public/_nuxt/entry-7bff15f0.mjs"
  },
  "/_nuxt/entry.86bee825.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5aaca-5ZpZl5PrHRVMt9WaO9SgADanzJ8\"",
    "mtime": "2022-04-11T15:33:39.904Z",
    "path": "../public/_nuxt/entry.86bee825.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-11T15:33:39.900Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-08c8c9cc.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-/A5JZNoFQX5P5khRV9BwRoHuFLU\"",
    "mtime": "2022-04-11T15:33:39.900Z",
    "path": "../public/_nuxt/index-08c8c9cc.mjs"
  },
  "/_nuxt/index-1344b72d.mjs": {
    "type": "application/javascript",
    "etag": "\"347-pXLa6XNcbaXazT6o6N76RpJuMJk\"",
    "mtime": "2022-04-11T15:33:39.900Z",
    "path": "../public/_nuxt/index-1344b72d.mjs"
  },
  "/_nuxt/index-70f59b3c.mjs": {
    "type": "application/javascript",
    "etag": "\"39d-bhq/h0i6asYUvRNYTDndtbU5C+c\"",
    "mtime": "2022-04-11T15:33:39.900Z",
    "path": "../public/_nuxt/index-70f59b3c.mjs"
  },
  "/_nuxt/index-fc5232e4.mjs": {
    "type": "application/javascript",
    "etag": "\"3cd-1QxSytyLgvatRdaF8OsZwHo905o\"",
    "mtime": "2022-04-11T15:33:39.900Z",
    "path": "../public/_nuxt/index-fc5232e4.mjs"
  },
  "/_nuxt/login-49b2d4da.mjs": {
    "type": "application/javascript",
    "etag": "\"587-LhHkVJ8piIU3xxCjMvmo6j3Te4k\"",
    "mtime": "2022-04-11T15:33:39.900Z",
    "path": "../public/_nuxt/login-49b2d4da.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1199-a49xPY4/HcSnUAgsgokUxqr6bik\"",
    "mtime": "2022-04-11T15:33:39.900Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-fb74faf7.mjs": {
    "type": "application/javascript",
    "etag": "\"a06-sqrK689WEYsKCPePxDBuyO7FQPk\"",
    "mtime": "2022-04-11T15:33:39.900Z",
    "path": "../public/_nuxt/post-list-fb74faf7.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-8GmqQky2yMtiVH+DZZPBXLpe/oA\"",
    "mtime": "2022-04-11T15:33:39.900Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"149a-B+AUa7vzGzFzTlnKr8WQmfcAXHQ\"",
    "mtime": "2022-04-11T15:33:39.900Z",
    "path": "../public/_nuxt/sitemap.txt"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));
function readAsset (id) {
  return promises.readFile(resolve(mainDir, assets[id].path)).catch(() => {})
}

const publicAssetBases = ["/_nuxt"];

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
const _static = eventHandler(async (event) => {
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

export { _static as default };
