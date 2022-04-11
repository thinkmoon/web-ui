import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-11T15:32:10.491Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-8GmqQky2yMtiVH+DZZPBXLpe/oA\"",
    "mtime": "2022-04-11T15:32:10.491Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"149a-B+AUa7vzGzFzTlnKr8WQmfcAXHQ\"",
    "mtime": "2022-04-11T15:32:10.487Z",
    "path": "../public/sitemap.txt"
  },
  "/_nuxt/404-9d7d85c6.mjs": {
    "type": "application/javascript",
    "etag": "\"134-K9mfC4FEyPOJS24/A09/GqTrzxQ\"",
    "mtime": "2022-04-11T15:32:10.487Z",
    "path": "../public/_nuxt/404-9d7d85c6.mjs"
  },
  "/_nuxt/Footer-8be4951b.mjs": {
    "type": "application/javascript",
    "etag": "\"3cb-rUmqnOROXM7BQMmWWcNQX5rYErM\"",
    "mtime": "2022-04-11T15:32:10.487Z",
    "path": "../public/_nuxt/Footer-8be4951b.mjs"
  },
  "/_nuxt/_cid_-993b75ab.mjs": {
    "type": "application/javascript",
    "etag": "\"545-Mhep5ns2QADPkKu8BxWQJisRa2I\"",
    "mtime": "2022-04-11T15:32:10.487Z",
    "path": "../public/_nuxt/_cid_-993b75ab.mjs"
  },
  "/_nuxt/_pageIndex_-1f702dde.mjs": {
    "type": "application/javascript",
    "etag": "\"e31-JORQKDX6a8MhGn0RuC4zYna+0rM\"",
    "mtime": "2022-04-11T15:32:10.487Z",
    "path": "../public/_nuxt/_pageIndex_-1f702dde.mjs"
  },
  "/_nuxt/_pageIndex_-31beb20d.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-04-11T15:32:10.487Z",
    "path": "../public/_nuxt/_pageIndex_-31beb20d.mjs"
  },
  "/_nuxt/_pageIndex_-6be96245.mjs": {
    "type": "application/javascript",
    "etag": "\"96-V56kT5ScAsjk1hJuaSu41CbhjtU\"",
    "mtime": "2022-04-11T15:32:10.487Z",
    "path": "../public/_nuxt/_pageIndex_-6be96245.mjs"
  },
  "/_nuxt/admin-31a570b1.mjs": {
    "type": "application/javascript",
    "etag": "\"128-LRi6rqB9Rt36Ew4g66KdXQwuctI\"",
    "mtime": "2022-04-11T15:32:10.487Z",
    "path": "../public/_nuxt/admin-31a570b1.mjs"
  },
  "/_nuxt/admin-6396d77d.mjs": {
    "type": "application/javascript",
    "etag": "\"640-D/shxQnYDKlFiyDDEVYgphAGHeM\"",
    "mtime": "2022-04-11T15:32:10.487Z",
    "path": "../public/_nuxt/admin-6396d77d.mjs"
  },
  "/_nuxt/asyncData-40420aca.mjs": {
    "type": "application/javascript",
    "etag": "\"878-DL29sV1z8FM7xe0YCm5pwmw/H0A\"",
    "mtime": "2022-04-11T15:32:10.487Z",
    "path": "../public/_nuxt/asyncData-40420aca.mjs"
  },
  "/_nuxt/auth-05c7ecc0.mjs": {
    "type": "application/javascript",
    "etag": "\"86-YHk5AwFSW+4EouoxWomI+NymQrw\"",
    "mtime": "2022-04-11T15:32:10.487Z",
    "path": "../public/_nuxt/auth-05c7ecc0.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-11T15:32:10.487Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-09cdd819.mjs": {
    "type": "application/javascript",
    "etag": "\"700-vIHPykpGJCbyyrVe5B/ywtGzEQg\"",
    "mtime": "2022-04-11T15:32:10.483Z",
    "path": "../public/_nuxt/default-09cdd819.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-11T15:32:10.483Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-71a6ae1a.mjs": {
    "type": "application/javascript",
    "etag": "\"a80-QLRehSGXUFmgiEr0vr1Bgnh99zU\"",
    "mtime": "2022-04-11T15:32:10.483Z",
    "path": "../public/_nuxt/editor-71a6ae1a.mjs"
  },
  "/_nuxt/entry-4b2da9e2.mjs": {
    "type": "application/javascript",
    "etag": "\"242bb7-p7TXbMjpPrZuxG4vzfeJxWmkwOY\"",
    "mtime": "2022-04-11T15:32:10.483Z",
    "path": "../public/_nuxt/entry-4b2da9e2.mjs"
  },
  "/_nuxt/entry.86bee825.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5aaca-5ZpZl5PrHRVMt9WaO9SgADanzJ8\"",
    "mtime": "2022-04-11T15:32:10.479Z",
    "path": "../public/_nuxt/entry.86bee825.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-11T15:32:10.479Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-03d4835c.mjs": {
    "type": "application/javascript",
    "etag": "\"347-/xQnKvsuC6U6jIyIH2C5jyqA2DY\"",
    "mtime": "2022-04-11T15:32:10.479Z",
    "path": "../public/_nuxt/index-03d4835c.mjs"
  },
  "/_nuxt/index-90b774d6.mjs": {
    "type": "application/javascript",
    "etag": "\"3cd-h7FA1+y/PUTr2M4g3wf5CdV/DRw\"",
    "mtime": "2022-04-11T15:32:10.479Z",
    "path": "../public/_nuxt/index-90b774d6.mjs"
  },
  "/_nuxt/index-e8a603c1.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-EkgKbRZeibMwGxLw73Mw/jHb5ss\"",
    "mtime": "2022-04-11T15:32:10.479Z",
    "path": "../public/_nuxt/index-e8a603c1.mjs"
  },
  "/_nuxt/index-ee5113f3.mjs": {
    "type": "application/javascript",
    "etag": "\"39d-oY2ajcDT4vwMwYTbFYl9J2Qoh9s\"",
    "mtime": "2022-04-11T15:32:10.479Z",
    "path": "../public/_nuxt/index-ee5113f3.mjs"
  },
  "/_nuxt/login-328c3537.mjs": {
    "type": "application/javascript",
    "etag": "\"587-+liEMRiwcPOu+mdkCuaU1oynBqA\"",
    "mtime": "2022-04-11T15:32:10.479Z",
    "path": "../public/_nuxt/login-328c3537.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1199-oA9qHBvrmjYR6Ks42iO0qx3Z6G8\"",
    "mtime": "2022-04-11T15:32:10.479Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-a4d8668c.mjs": {
    "type": "application/javascript",
    "etag": "\"a06-lYvg/5kNIHInQN9DdnjBJN+qqTw\"",
    "mtime": "2022-04-11T15:32:10.479Z",
    "path": "../public/_nuxt/post-list-a4d8668c.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-8GmqQky2yMtiVH+DZZPBXLpe/oA\"",
    "mtime": "2022-04-11T15:32:10.479Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"149a-B+AUa7vzGzFzTlnKr8WQmfcAXHQ\"",
    "mtime": "2022-04-11T15:32:10.475Z",
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
