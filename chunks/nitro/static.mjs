import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-23T10:24:01.306Z",
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-23T10:24:01.306Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-23T10:24:01.306Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"8450-kBmbAfDCzt1pi/E3Kk1PRwG+ecQ\"",
    "mtime": "2022-04-23T10:24:01.306Z",
    "path": "../public/sitemap.xml"
  },
  "/_nuxt/404-29dda00f.mjs": {
    "type": "application/javascript",
    "etag": "\"134-FzaxjHMw6Ujx8TxxPksCjlvvZVY\"",
    "mtime": "2022-04-23T10:24:01.302Z",
    "path": "../public/_nuxt/404-29dda00f.mjs"
  },
  "/_nuxt/Footer-92e032ba.mjs": {
    "type": "application/javascript",
    "etag": "\"3d5-Zm35mKnrs8QDgCLWEf37N8jebds\"",
    "mtime": "2022-04-23T10:24:01.302Z",
    "path": "../public/_nuxt/Footer-92e032ba.mjs"
  },
  "/_nuxt/PostList-2420664f.mjs": {
    "type": "application/javascript",
    "etag": "\"94e-y47k4pnmXyl0WM0kRu1gYu0DPzE\"",
    "mtime": "2022-04-23T10:24:01.302Z",
    "path": "../public/_nuxt/PostList-2420664f.mjs"
  },
  "/_nuxt/TagApi-5c0c7ddf.mjs": {
    "type": "application/javascript",
    "etag": "\"85-g9Si+y5EZQ0mTG99RlPRGnTB8lU\"",
    "mtime": "2022-04-23T10:24:01.302Z",
    "path": "../public/_nuxt/TagApi-5c0c7ddf.mjs"
  },
  "/_nuxt/_cid_-7daa3089.mjs": {
    "type": "application/javascript",
    "etag": "\"5bb-lsVUzW0+UEISbDf8sWU3g9BeXoQ\"",
    "mtime": "2022-04-23T10:24:01.302Z",
    "path": "../public/_nuxt/_cid_-7daa3089.mjs"
  },
  "/_nuxt/_pageIndex_-3e97da8c.mjs": {
    "type": "application/javascript",
    "etag": "\"67f-cOZXeqAchTsE38B3rCNcXt+TMk4\"",
    "mtime": "2022-04-23T10:24:01.302Z",
    "path": "../public/_nuxt/_pageIndex_-3e97da8c.mjs"
  },
  "/_nuxt/_pageIndex_-a3c8af2a.mjs": {
    "type": "application/javascript",
    "etag": "\"45a-LnCqhMHgRyGemNOgRdjb1bQEdvo\"",
    "mtime": "2022-04-23T10:24:01.302Z",
    "path": "../public/_nuxt/_pageIndex_-a3c8af2a.mjs"
  },
  "/_nuxt/_pageIndex_-f0de54db.mjs": {
    "type": "application/javascript",
    "etag": "\"609-nwVIh+g8Pwv2fXEYwbvP+MHEuv8\"",
    "mtime": "2022-04-23T10:24:01.302Z",
    "path": "../public/_nuxt/_pageIndex_-f0de54db.mjs"
  },
  "/_nuxt/admin-ab79848d.mjs": {
    "type": "application/javascript",
    "etag": "\"128-6+hevs7L3fa8bBjb9FVuEXyy0Lo\"",
    "mtime": "2022-04-23T10:24:01.302Z",
    "path": "../public/_nuxt/admin-ab79848d.mjs"
  },
  "/_nuxt/admin-ff3c8105.mjs": {
    "type": "application/javascript",
    "etag": "\"646-f03rJ0Iz5/IBQshe4EXjEq0FRKE\"",
    "mtime": "2022-04-23T10:24:01.302Z",
    "path": "../public/_nuxt/admin-ff3c8105.mjs"
  },
  "/_nuxt/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-23T10:24:01.302Z",
    "path": "../public/_nuxt/ads.txt"
  },
  "/_nuxt/asyncData-464e9f15.mjs": {
    "type": "application/javascript",
    "etag": "\"87f-f5SIeIOozeOKA92W1bTwjzMilhY\"",
    "mtime": "2022-04-23T10:24:01.302Z",
    "path": "../public/_nuxt/asyncData-464e9f15.mjs"
  },
  "/_nuxt/auth-fbfffebb.mjs": {
    "type": "application/javascript",
    "etag": "\"86-uljKLm6VEr3+SdBujXpw95Mf2dg\"",
    "mtime": "2022-04-23T10:24:01.302Z",
    "path": "../public/_nuxt/auth-fbfffebb.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-23T10:24:01.302Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-a2c0e51b.mjs": {
    "type": "application/javascript",
    "etag": "\"700-K0bUWXMKgOnzgiUyUo5FsgOrA8k\"",
    "mtime": "2022-04-23T10:24:01.298Z",
    "path": "../public/_nuxt/default-a2c0e51b.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-23T10:24:01.298Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-7d97ccb7.mjs": {
    "type": "application/javascript",
    "etag": "\"a89-THlCAg+XwuoRwS9JgT+nBqTNuZw\"",
    "mtime": "2022-04-23T10:24:01.298Z",
    "path": "../public/_nuxt/editor-7d97ccb7.mjs"
  },
  "/_nuxt/entry-16993b9f.mjs": {
    "type": "application/javascript",
    "etag": "\"244190-aXmFs8tEOVC81IxWMqnqsY7KZSU\"",
    "mtime": "2022-04-23T10:24:01.298Z",
    "path": "../public/_nuxt/entry-16993b9f.mjs"
  },
  "/_nuxt/entry.72bfc9fd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a278-CblU8Mdtpw98oq15+Y+LBTyZ4qc\"",
    "mtime": "2022-04-23T10:24:01.298Z",
    "path": "../public/_nuxt/entry.72bfc9fd.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-23T10:24:01.298Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-3d46c55a.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-pHOq641SCAydgxaizLDEg/iLOYI\"",
    "mtime": "2022-04-23T10:24:01.294Z",
    "path": "../public/_nuxt/index-3d46c55a.mjs"
  },
  "/_nuxt/index-4764a8d6.mjs": {
    "type": "application/javascript",
    "etag": "\"349-wDgGXlHiR9k6EqBTNePYPqXBX4E\"",
    "mtime": "2022-04-23T10:24:01.294Z",
    "path": "../public/_nuxt/index-4764a8d6.mjs"
  },
  "/_nuxt/index-8f67fc9e.mjs": {
    "type": "application/javascript",
    "etag": "\"3b2-M3bPP0OoSTKuieMXIgNuba99G6Y\"",
    "mtime": "2022-04-23T10:24:01.294Z",
    "path": "../public/_nuxt/index-8f67fc9e.mjs"
  },
  "/_nuxt/index-c0e7f2e3.mjs": {
    "type": "application/javascript",
    "etag": "\"3b5-lloR4Z4raH6VG7GjxTJ+nhTs3ik\"",
    "mtime": "2022-04-23T10:24:01.294Z",
    "path": "../public/_nuxt/index-c0e7f2e3.mjs"
  },
  "/_nuxt/login-add937b4.mjs": {
    "type": "application/javascript",
    "etag": "\"5b7-pFffYxmcS/ykiNdkYmlGJc/g75U\"",
    "mtime": "2022-04-23T10:24:01.294Z",
    "path": "../public/_nuxt/login-add937b4.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"13c3-4EAc9lh2ctEv15cw7Vq0tUA2h74\"",
    "mtime": "2022-04-23T10:24:01.290Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-fe692329.mjs": {
    "type": "application/javascript",
    "etag": "\"a08-mXfMW6DIPMsaFROkuFeqrXIi35o\"",
    "mtime": "2022-04-23T10:24:01.290Z",
    "path": "../public/_nuxt/post-list-fe692329.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-23T10:24:01.290Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"8450-kBmbAfDCzt1pi/E3Kk1PRwG+ecQ\"",
    "mtime": "2022-04-23T10:24:01.290Z",
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
