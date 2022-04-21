import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-21T14:14:12.994Z",
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-21T14:14:12.994Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-21T14:14:12.994Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"70c1-lxEtY72DfVCGznpY9ca+SNHI3dY\"",
    "mtime": "2022-04-21T14:14:12.994Z",
    "path": "../public/sitemap.xml"
  },
  "/_nuxt/404-6af65222.mjs": {
    "type": "application/javascript",
    "etag": "\"134-hvJ/LZVlGreSI4BJgwY8xhPw3Mc\"",
    "mtime": "2022-04-21T14:14:12.990Z",
    "path": "../public/_nuxt/404-6af65222.mjs"
  },
  "/_nuxt/Footer-7712a495.mjs": {
    "type": "application/javascript",
    "etag": "\"3cb-kmgEsTWx3g2u81ONq4UCNuLLyws\"",
    "mtime": "2022-04-21T14:14:12.990Z",
    "path": "../public/_nuxt/Footer-7712a495.mjs"
  },
  "/_nuxt/PostList-734585ee.mjs": {
    "type": "application/javascript",
    "etag": "\"94c-3IwzPSA8b+KKGPYYGlnBJ4rNRRA\"",
    "mtime": "2022-04-21T14:14:12.990Z",
    "path": "../public/_nuxt/PostList-734585ee.mjs"
  },
  "/_nuxt/_cid_-1069b10f.mjs": {
    "type": "application/javascript",
    "etag": "\"5bd-ez2USLSb1WCN9K8bCNpcZDPBZHc\"",
    "mtime": "2022-04-21T14:14:12.990Z",
    "path": "../public/_nuxt/_cid_-1069b10f.mjs"
  },
  "/_nuxt/_pageIndex_-17ed7a64.mjs": {
    "type": "application/javascript",
    "etag": "\"687-zwxkUFmdCmSOfjAG/CVBMEmO/qs\"",
    "mtime": "2022-04-21T14:14:12.990Z",
    "path": "../public/_nuxt/_pageIndex_-17ed7a64.mjs"
  },
  "/_nuxt/_pageIndex_-83bb32ce.mjs": {
    "type": "application/javascript",
    "etag": "\"42e-/g1hQr7bbPYEdBPc7Y2qu2wHgOU\"",
    "mtime": "2022-04-21T14:14:12.990Z",
    "path": "../public/_nuxt/_pageIndex_-83bb32ce.mjs"
  },
  "/_nuxt/_pageIndex_-8e95b173.mjs": {
    "type": "application/javascript",
    "etag": "\"1ca-1K2Ur4ZpHjjBVvPvw/skxRYvaKo\"",
    "mtime": "2022-04-21T14:14:12.990Z",
    "path": "../public/_nuxt/_pageIndex_-8e95b173.mjs"
  },
  "/_nuxt/admin-234f5e2b.mjs": {
    "type": "application/javascript",
    "etag": "\"640-FlbyFNbg6ycB0+tCvyicNtKPQvg\"",
    "mtime": "2022-04-21T14:14:12.990Z",
    "path": "../public/_nuxt/admin-234f5e2b.mjs"
  },
  "/_nuxt/admin-a736e4c9.mjs": {
    "type": "application/javascript",
    "etag": "\"128-HvNlTxD3DeFnJhtCI53mijKH+F0\"",
    "mtime": "2022-04-21T14:14:12.990Z",
    "path": "../public/_nuxt/admin-a736e4c9.mjs"
  },
  "/_nuxt/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-21T14:14:12.990Z",
    "path": "../public/_nuxt/ads.txt"
  },
  "/_nuxt/asyncData-47dc77c3.mjs": {
    "type": "application/javascript",
    "etag": "\"87f-xDf+x01Ul6z3+Cgm9Nc6MdZYvio\"",
    "mtime": "2022-04-21T14:14:12.990Z",
    "path": "../public/_nuxt/asyncData-47dc77c3.mjs"
  },
  "/_nuxt/auth-c4031cb3.mjs": {
    "type": "application/javascript",
    "etag": "\"86-Yxao0fJjFzvs+RZn10qKbDxGBY4\"",
    "mtime": "2022-04-21T14:14:12.990Z",
    "path": "../public/_nuxt/auth-c4031cb3.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-21T14:14:12.990Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-42334046.mjs": {
    "type": "application/javascript",
    "etag": "\"6fb-Y5vjCDWo8C75NnxBK3DWnOmDPEQ\"",
    "mtime": "2022-04-21T14:14:12.986Z",
    "path": "../public/_nuxt/default-42334046.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-21T14:14:12.986Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-1be4e674.mjs": {
    "type": "application/javascript",
    "etag": "\"a80-JCqY2ae+deVEMrjxJ/X5T1gV/Es\"",
    "mtime": "2022-04-21T14:14:12.986Z",
    "path": "../public/_nuxt/editor-1be4e674.mjs"
  },
  "/_nuxt/entry-477a579e.mjs": {
    "type": "application/javascript",
    "etag": "\"2440d0-umEpAzSW0xZP7CaFQMocUVxQzls\"",
    "mtime": "2022-04-21T14:14:12.986Z",
    "path": "../public/_nuxt/entry-477a579e.mjs"
  },
  "/_nuxt/entry.9df3d231.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a25b-CibcJiAioVSU6bca2J8trocMaVg\"",
    "mtime": "2022-04-21T14:14:12.986Z",
    "path": "../public/_nuxt/entry.9df3d231.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-21T14:14:12.986Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-3b472ca2.mjs": {
    "type": "application/javascript",
    "etag": "\"347-zH664JQon7gmSvqngJnswFfKb+0\"",
    "mtime": "2022-04-21T14:14:12.982Z",
    "path": "../public/_nuxt/index-3b472ca2.mjs"
  },
  "/_nuxt/index-602f98d8.mjs": {
    "type": "application/javascript",
    "etag": "\"3cd-lPEszFCY6UTGhNU0JNCya3wjXWI\"",
    "mtime": "2022-04-21T14:14:12.982Z",
    "path": "../public/_nuxt/index-602f98d8.mjs"
  },
  "/_nuxt/index-8913c914.mjs": {
    "type": "application/javascript",
    "etag": "\"39d-M5ebj99dhLTro52v8XmsK5B5sQ0\"",
    "mtime": "2022-04-21T14:14:12.982Z",
    "path": "../public/_nuxt/index-8913c914.mjs"
  },
  "/_nuxt/index-d98309c8.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-UWAT8xT2CdwUfqS5oGv+jwm/NpE\"",
    "mtime": "2022-04-21T14:14:12.982Z",
    "path": "../public/_nuxt/index-d98309c8.mjs"
  },
  "/_nuxt/login-9f34d3d0.mjs": {
    "type": "application/javascript",
    "etag": "\"5b5-Nm7IUyk4+CymUIx5ESzd1g/97FY\"",
    "mtime": "2022-04-21T14:14:12.982Z",
    "path": "../public/_nuxt/login-9f34d3d0.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"12cd-NlaNoUoOfv9J/Trq6BqhhYw/+mQ\"",
    "mtime": "2022-04-21T14:14:12.982Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-ac500f3b.mjs": {
    "type": "application/javascript",
    "etag": "\"a06-elggFfGfdS6E2Om+3X+42vrSKoM\"",
    "mtime": "2022-04-21T14:14:12.982Z",
    "path": "../public/_nuxt/post-list-ac500f3b.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-21T14:14:12.982Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"70c1-lxEtY72DfVCGznpY9ca+SNHI3dY\"",
    "mtime": "2022-04-21T14:14:12.982Z",
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
