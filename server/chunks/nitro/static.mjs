import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-17T03:41:21.687Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-8GmqQky2yMtiVH+DZZPBXLpe/oA\"",
    "mtime": "2022-04-17T03:41:21.687Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"149a-B+AUa7vzGzFzTlnKr8WQmfcAXHQ\"",
    "mtime": "2022-04-17T03:41:21.683Z",
    "path": "../public/sitemap.txt"
  },
  "/_nuxt/404-6d6c9eaa.mjs": {
    "type": "application/javascript",
    "etag": "\"134-rzIyGbWePyEUzerpRAxdGNb4Mws\"",
    "mtime": "2022-04-17T03:41:21.683Z",
    "path": "../public/_nuxt/404-6d6c9eaa.mjs"
  },
  "/_nuxt/Footer-35a0cd22.mjs": {
    "type": "application/javascript",
    "etag": "\"3cb-lCx0JFnAV63xW525nz+aHFVBK48\"",
    "mtime": "2022-04-17T03:41:21.683Z",
    "path": "../public/_nuxt/Footer-35a0cd22.mjs"
  },
  "/_nuxt/PostList-1ba42237.mjs": {
    "type": "application/javascript",
    "etag": "\"94c-PJ1Al6nw+beVtt9HppQsUtQpZiQ\"",
    "mtime": "2022-04-17T03:41:21.683Z",
    "path": "../public/_nuxt/PostList-1ba42237.mjs"
  },
  "/_nuxt/_cid_-2df91deb.mjs": {
    "type": "application/javascript",
    "etag": "\"5bd-6UP7H00SBt+K98MFRrjP0qjR8Zc\"",
    "mtime": "2022-04-17T03:41:21.683Z",
    "path": "../public/_nuxt/_cid_-2df91deb.mjs"
  },
  "/_nuxt/_pageIndex_-2fb519a5.mjs": {
    "type": "application/javascript",
    "etag": "\"42e-JfE8L6UWYn4Fb5DY/DAFol/9R2g\"",
    "mtime": "2022-04-17T03:41:21.683Z",
    "path": "../public/_nuxt/_pageIndex_-2fb519a5.mjs"
  },
  "/_nuxt/_pageIndex_-31beb20d.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-04-17T03:41:21.683Z",
    "path": "../public/_nuxt/_pageIndex_-31beb20d.mjs"
  },
  "/_nuxt/_pageIndex_-84753182.mjs": {
    "type": "application/javascript",
    "etag": "\"687-BVW3BqjdiezNFyi9B2XPa14Ac5I\"",
    "mtime": "2022-04-17T03:41:21.683Z",
    "path": "../public/_nuxt/_pageIndex_-84753182.mjs"
  },
  "/_nuxt/admin-90e78721.mjs": {
    "type": "application/javascript",
    "etag": "\"640-lKeMRTkkAkVZ1GPhwfRbCxpG5z8\"",
    "mtime": "2022-04-17T03:41:21.683Z",
    "path": "../public/_nuxt/admin-90e78721.mjs"
  },
  "/_nuxt/admin-f9ac9f09.mjs": {
    "type": "application/javascript",
    "etag": "\"128-/MEU3TjkP+rh/D/QxVjU5ATPa4Q\"",
    "mtime": "2022-04-17T03:41:21.683Z",
    "path": "../public/_nuxt/admin-f9ac9f09.mjs"
  },
  "/_nuxt/asyncData-f37d73d3.mjs": {
    "type": "application/javascript",
    "etag": "\"87f-MBMDCL5RGpCRsnhBSIfGVbg63yM\"",
    "mtime": "2022-04-17T03:41:21.683Z",
    "path": "../public/_nuxt/asyncData-f37d73d3.mjs"
  },
  "/_nuxt/auth-d391a1ca.mjs": {
    "type": "application/javascript",
    "etag": "\"86-3AjFPUtg7eNWyTro7883exK1n0k\"",
    "mtime": "2022-04-17T03:41:21.683Z",
    "path": "../public/_nuxt/auth-d391a1ca.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-17T03:41:21.683Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-227bede3.mjs": {
    "type": "application/javascript",
    "etag": "\"6fb-PPhSqyXQIqsLzDov4ucyEvhxl4Q\"",
    "mtime": "2022-04-17T03:41:21.679Z",
    "path": "../public/_nuxt/default-227bede3.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-17T03:41:21.679Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-5b457e41.mjs": {
    "type": "application/javascript",
    "etag": "\"a80-in34my38qBPSNGljUnVCKYjZayA\"",
    "mtime": "2022-04-17T03:41:21.679Z",
    "path": "../public/_nuxt/editor-5b457e41.mjs"
  },
  "/_nuxt/entry-0297ab24.mjs": {
    "type": "application/javascript",
    "etag": "\"243408-XKl4eASjQAlZLly7o5Gw0An3CdU\"",
    "mtime": "2022-04-17T03:41:21.679Z",
    "path": "../public/_nuxt/entry-0297ab24.mjs"
  },
  "/_nuxt/entry.23b9d566.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"590ce-pmIiKipShHdoJEJCNLnwQMw28RY\"",
    "mtime": "2022-04-17T03:41:21.679Z",
    "path": "../public/_nuxt/entry.23b9d566.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-17T03:41:21.675Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-02394dae.mjs": {
    "type": "application/javascript",
    "etag": "\"3cd-Hqc93zzpbGcfnmk4M3chYdPVRu0\"",
    "mtime": "2022-04-17T03:41:21.675Z",
    "path": "../public/_nuxt/index-02394dae.mjs"
  },
  "/_nuxt/index-17f7b030.mjs": {
    "type": "application/javascript",
    "etag": "\"347-Id2oNbBgdWTAx5vFKB5pKb81seE\"",
    "mtime": "2022-04-17T03:41:21.675Z",
    "path": "../public/_nuxt/index-17f7b030.mjs"
  },
  "/_nuxt/index-f2aa89bf.mjs": {
    "type": "application/javascript",
    "etag": "\"39d-8oaoCkuefFZZoVYXPk/mAY20Ts0\"",
    "mtime": "2022-04-17T03:41:21.675Z",
    "path": "../public/_nuxt/index-f2aa89bf.mjs"
  },
  "/_nuxt/index-f6bc3474.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-016C81b17SwxDY6fkYQh99lkU1M\"",
    "mtime": "2022-04-17T03:41:21.675Z",
    "path": "../public/_nuxt/index-f6bc3474.mjs"
  },
  "/_nuxt/login-a9f36dc7.mjs": {
    "type": "application/javascript",
    "etag": "\"5b5-DJcEX2M5m/Bv/X8WzsnIoPHRnps\"",
    "mtime": "2022-04-17T03:41:21.675Z",
    "path": "../public/_nuxt/login-a9f36dc7.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1287-nuEih1GvOviKNQrDtrXbW8XgMRo\"",
    "mtime": "2022-04-17T03:41:21.675Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-735fcc4f.mjs": {
    "type": "application/javascript",
    "etag": "\"a06-9+ULadP714cclUO8JAxgJTKSVjE\"",
    "mtime": "2022-04-17T03:41:21.675Z",
    "path": "../public/_nuxt/post-list-735fcc4f.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-8GmqQky2yMtiVH+DZZPBXLpe/oA\"",
    "mtime": "2022-04-17T03:41:21.675Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"149a-B+AUa7vzGzFzTlnKr8WQmfcAXHQ\"",
    "mtime": "2022-04-17T03:41:21.675Z",
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
