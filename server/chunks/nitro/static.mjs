import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-23T10:10:36.160Z",
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-23T10:10:36.160Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-23T10:10:36.160Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"8450-kBmbAfDCzt1pi/E3Kk1PRwG+ecQ\"",
    "mtime": "2022-04-23T10:10:36.160Z",
    "path": "../public/sitemap.xml"
  },
  "/_nuxt/404-2d324d46.mjs": {
    "type": "application/javascript",
    "etag": "\"134-aNLdKZFYWZoyyym5X7A2aYaDx6I\"",
    "mtime": "2022-04-23T10:10:36.160Z",
    "path": "../public/_nuxt/404-2d324d46.mjs"
  },
  "/_nuxt/Footer-3d7a3439.mjs": {
    "type": "application/javascript",
    "etag": "\"3c8-mia7mg7GdX24mvGNPB7y2GtF5JQ\"",
    "mtime": "2022-04-23T10:10:36.160Z",
    "path": "../public/_nuxt/Footer-3d7a3439.mjs"
  },
  "/_nuxt/PostList-9b2b8ea3.mjs": {
    "type": "application/javascript",
    "etag": "\"94e-fU6aVFyervD0TnlLmVA5NznBjqA\"",
    "mtime": "2022-04-23T10:10:36.160Z",
    "path": "../public/_nuxt/PostList-9b2b8ea3.mjs"
  },
  "/_nuxt/TagApi-af957ea4.mjs": {
    "type": "application/javascript",
    "etag": "\"85-/zGBBgDKN8h+7ymmAjk3MJnZVpo\"",
    "mtime": "2022-04-23T10:10:36.160Z",
    "path": "../public/_nuxt/TagApi-af957ea4.mjs"
  },
  "/_nuxt/_cid_-94542104.mjs": {
    "type": "application/javascript",
    "etag": "\"5bb-f3JnO8zga7DxY3q7x+mqJE4gHjs\"",
    "mtime": "2022-04-23T10:10:36.160Z",
    "path": "../public/_nuxt/_cid_-94542104.mjs"
  },
  "/_nuxt/_pageIndex_-1dddaaf8.mjs": {
    "type": "application/javascript",
    "etag": "\"67f-bPUGCmFGMsQhMCQ5gbmF63MyYpE\"",
    "mtime": "2022-04-23T10:10:36.160Z",
    "path": "../public/_nuxt/_pageIndex_-1dddaaf8.mjs"
  },
  "/_nuxt/_pageIndex_-6833eeab.mjs": {
    "type": "application/javascript",
    "etag": "\"45a-dMjKs9yZHyIby/IIPwJOJ0x8SpY\"",
    "mtime": "2022-04-23T10:10:36.160Z",
    "path": "../public/_nuxt/_pageIndex_-6833eeab.mjs"
  },
  "/_nuxt/_pageIndex_-f8711bcd.mjs": {
    "type": "application/javascript",
    "etag": "\"609-NfSUyJBOksyhkO4NHN5/4jfGqTs\"",
    "mtime": "2022-04-23T10:10:36.160Z",
    "path": "../public/_nuxt/_pageIndex_-f8711bcd.mjs"
  },
  "/_nuxt/admin-9bf62f4f.mjs": {
    "type": "application/javascript",
    "etag": "\"128-yiFW785RenxD3IyOgDArR50VtXE\"",
    "mtime": "2022-04-23T10:10:36.160Z",
    "path": "../public/_nuxt/admin-9bf62f4f.mjs"
  },
  "/_nuxt/admin-a8d22cd9.mjs": {
    "type": "application/javascript",
    "etag": "\"646-gW57pK6TBVyvQLXBYJQJmmQM36I\"",
    "mtime": "2022-04-23T10:10:36.156Z",
    "path": "../public/_nuxt/admin-a8d22cd9.mjs"
  },
  "/_nuxt/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-23T10:10:36.156Z",
    "path": "../public/_nuxt/ads.txt"
  },
  "/_nuxt/asyncData-0e1ef12c.mjs": {
    "type": "application/javascript",
    "etag": "\"87f-L7qLMR9MzjBflUKV7MhjhuZHMGY\"",
    "mtime": "2022-04-23T10:10:36.156Z",
    "path": "../public/_nuxt/asyncData-0e1ef12c.mjs"
  },
  "/_nuxt/auth-fa3d762f.mjs": {
    "type": "application/javascript",
    "etag": "\"86-wRGxT7zWPTj+TP8ZAzHoEFx38C4\"",
    "mtime": "2022-04-23T10:10:36.156Z",
    "path": "../public/_nuxt/auth-fa3d762f.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-23T10:10:36.156Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-c01670a2.mjs": {
    "type": "application/javascript",
    "etag": "\"700-xsaTUx89ZZLtcVHAAcqUh5+dv5M\"",
    "mtime": "2022-04-23T10:10:36.156Z",
    "path": "../public/_nuxt/default-c01670a2.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-23T10:10:36.156Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-a1e95d00.mjs": {
    "type": "application/javascript",
    "etag": "\"a89-ycGlx/jhVZxNiiDw39BudiBdIi4\"",
    "mtime": "2022-04-23T10:10:36.156Z",
    "path": "../public/_nuxt/editor-a1e95d00.mjs"
  },
  "/_nuxt/entry-271802af.mjs": {
    "type": "application/javascript",
    "etag": "\"244190-5bKDqAYkvVf9Crn+t+i29h+AIu4\"",
    "mtime": "2022-04-23T10:10:36.156Z",
    "path": "../public/_nuxt/entry-271802af.mjs"
  },
  "/_nuxt/entry.a49ed1aa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a277-VbO177YoUgGkG3x+2iFRtT6RSf4\"",
    "mtime": "2022-04-23T10:10:36.152Z",
    "path": "../public/_nuxt/entry.a49ed1aa.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-23T10:10:36.152Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-0a2ddd13.mjs": {
    "type": "application/javascript",
    "etag": "\"3b5-YNFYKWP6wkcGi48Hrpl2Q3EiA74\"",
    "mtime": "2022-04-23T10:10:36.152Z",
    "path": "../public/_nuxt/index-0a2ddd13.mjs"
  },
  "/_nuxt/index-615fc30b.mjs": {
    "type": "application/javascript",
    "etag": "\"3b2-/Nl/jBlQSBSLBl59mqq/0KeLwIs\"",
    "mtime": "2022-04-23T10:10:36.152Z",
    "path": "../public/_nuxt/index-615fc30b.mjs"
  },
  "/_nuxt/index-6e4fafe9.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-UC5v7fx54T8c+WLdaO3EPzlqJps\"",
    "mtime": "2022-04-23T10:10:36.152Z",
    "path": "../public/_nuxt/index-6e4fafe9.mjs"
  },
  "/_nuxt/index-9a5e732a.mjs": {
    "type": "application/javascript",
    "etag": "\"349-p/JpSyBHxcxoCUjlWKB3sAOA3vI\"",
    "mtime": "2022-04-23T10:10:36.152Z",
    "path": "../public/_nuxt/index-9a5e732a.mjs"
  },
  "/_nuxt/login-ac88574f.mjs": {
    "type": "application/javascript",
    "etag": "\"5b7-uA7F2XGcrbID569nt6PvP7axIgk\"",
    "mtime": "2022-04-23T10:10:36.152Z",
    "path": "../public/_nuxt/login-ac88574f.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"13c3-DFBiA94co0CaZwXs9GHLdZiFKbg\"",
    "mtime": "2022-04-23T10:10:36.152Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-e5aa980a.mjs": {
    "type": "application/javascript",
    "etag": "\"a08-fH7QVJ1xQ5bHxxzGqng/lLS6XOY\"",
    "mtime": "2022-04-23T10:10:36.152Z",
    "path": "../public/_nuxt/post-list-e5aa980a.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-23T10:10:36.152Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"8450-kBmbAfDCzt1pi/E3Kk1PRwG+ecQ\"",
    "mtime": "2022-04-23T10:10:36.148Z",
    "path": "../public/_nuxt/sitemap.xml"
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
//# sourceMappingURL=static.mjs.map
