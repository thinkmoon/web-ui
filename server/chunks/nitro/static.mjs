import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-19T13:41:50.643Z",
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-19T13:41:50.643Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-19T13:41:50.643Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"70c1-lxEtY72DfVCGznpY9ca+SNHI3dY\"",
    "mtime": "2022-04-19T13:41:50.639Z",
    "path": "../public/sitemap.xml"
  },
  "/_nuxt/Footer-9491f9ec.mjs": {
    "type": "application/javascript",
    "etag": "\"3cb-8dUaFSQdKamfT9Pr4NSQ6pRZb5Y\"",
    "mtime": "2022-04-19T13:41:50.639Z",
    "path": "../public/_nuxt/Footer-9491f9ec.mjs"
  },
  "/_nuxt/PostList-846108c6.mjs": {
    "type": "application/javascript",
    "etag": "\"94c-/vSmr1XTswF5KfCXWZsfW7LXzQE\"",
    "mtime": "2022-04-19T13:41:50.639Z",
    "path": "../public/_nuxt/PostList-846108c6.mjs"
  },
  "/_nuxt/_cid_-6ef9a6c3.mjs": {
    "type": "application/javascript",
    "etag": "\"5bd-EMaOuTSyqj3SK3R/VPrlHIET40A\"",
    "mtime": "2022-04-19T13:41:50.639Z",
    "path": "../public/_nuxt/_cid_-6ef9a6c3.mjs"
  },
  "/_nuxt/_pageIndex_-5696358a.mjs": {
    "type": "application/javascript",
    "etag": "\"42e-8QWJ81LT+HKKC3N9ax1kcvqsAAA\"",
    "mtime": "2022-04-19T13:41:50.639Z",
    "path": "../public/_nuxt/_pageIndex_-5696358a.mjs"
  },
  "/_nuxt/_pageIndex_-9ca3eec8.mjs": {
    "type": "application/javascript",
    "etag": "\"687-lNIXZJsJpW+zs62PUCzEOeJZkF0\"",
    "mtime": "2022-04-19T13:41:50.639Z",
    "path": "../public/_nuxt/_pageIndex_-9ca3eec8.mjs"
  },
  "/_nuxt/_pageIndex_-9d9409e2.mjs": {
    "type": "application/javascript",
    "etag": "\"1ca-ronNecVN7oXxr/ADmpfTS6pUPiw\"",
    "mtime": "2022-04-19T13:41:50.639Z",
    "path": "../public/_nuxt/_pageIndex_-9d9409e2.mjs"
  },
  "/_nuxt/admin-3b715398.mjs": {
    "type": "application/javascript",
    "etag": "\"128-n3sHr0PLuLBu42RLYYUU53IZWVU\"",
    "mtime": "2022-04-19T13:41:50.635Z",
    "path": "../public/_nuxt/admin-3b715398.mjs"
  },
  "/_nuxt/admin-6705f71a.mjs": {
    "type": "application/javascript",
    "etag": "\"640-l6Bhqstb/xj0aIXJKtDe0/NU2T0\"",
    "mtime": "2022-04-19T13:41:50.635Z",
    "path": "../public/_nuxt/admin-6705f71a.mjs"
  },
  "/_nuxt/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-19T13:41:50.635Z",
    "path": "../public/_nuxt/ads.txt"
  },
  "/_nuxt/asyncData-db53c1d4.mjs": {
    "type": "application/javascript",
    "etag": "\"87f-S48SVy5z1e6v6YqVT6LGhgwANLU\"",
    "mtime": "2022-04-19T13:41:50.635Z",
    "path": "../public/_nuxt/asyncData-db53c1d4.mjs"
  },
  "/_nuxt/auth-553f633f.mjs": {
    "type": "application/javascript",
    "etag": "\"86-W+c4sjf2u0V47XlcbRts2Zg/kDE\"",
    "mtime": "2022-04-19T13:41:50.635Z",
    "path": "../public/_nuxt/auth-553f633f.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-19T13:41:50.635Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-cf107cdf.mjs": {
    "type": "application/javascript",
    "etag": "\"6fb-oDd86AtnJUSe9uxEMT7j7wHjP3Y\"",
    "mtime": "2022-04-19T13:41:50.631Z",
    "path": "../public/_nuxt/default-cf107cdf.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-19T13:41:50.631Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-effdf4f2.mjs": {
    "type": "application/javascript",
    "etag": "\"a80-KWtDcWq/sxVucJAg6tff2INtBks\"",
    "mtime": "2022-04-19T13:41:50.631Z",
    "path": "../public/_nuxt/editor-effdf4f2.mjs"
  },
  "/_nuxt/entry-ed2cbb6c.mjs": {
    "type": "application/javascript",
    "etag": "\"243fde-Rk17b1iHs9D5HLi2f2K+NU7kxUQ\"",
    "mtime": "2022-04-19T13:41:50.631Z",
    "path": "../public/_nuxt/entry-ed2cbb6c.mjs"
  },
  "/_nuxt/entry.e9e8b5b4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a24b-U44jLQ7KAhNdKUMcGLxkAVVXQAc\"",
    "mtime": "2022-04-19T13:41:50.627Z",
    "path": "../public/_nuxt/entry.e9e8b5b4.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-19T13:41:50.627Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-466552c4.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-Gbh2bw1YiPlsYrhFBOcG9WQXqck\"",
    "mtime": "2022-04-19T13:41:50.623Z",
    "path": "../public/_nuxt/index-466552c4.mjs"
  },
  "/_nuxt/index-a96b8fd7.mjs": {
    "type": "application/javascript",
    "etag": "\"39d-Tiff5tsmheVTNKDeqePxPcQvowY\"",
    "mtime": "2022-04-19T13:41:50.623Z",
    "path": "../public/_nuxt/index-a96b8fd7.mjs"
  },
  "/_nuxt/index-baf526a1.mjs": {
    "type": "application/javascript",
    "etag": "\"3cd-YWCvFs3QaWLXc7WCtcWYGXLP1Bg\"",
    "mtime": "2022-04-19T13:41:50.623Z",
    "path": "../public/_nuxt/index-baf526a1.mjs"
  },
  "/_nuxt/index-be4b37e6.mjs": {
    "type": "application/javascript",
    "etag": "\"347-VPXcJbunCIvSb61bx2X2pIResPQ\"",
    "mtime": "2022-04-19T13:41:50.623Z",
    "path": "../public/_nuxt/index-be4b37e6.mjs"
  },
  "/_nuxt/login-a842bb1f.mjs": {
    "type": "application/javascript",
    "etag": "\"5b5-1SYnIIa3ZV+URKqY/sj+9VStZWE\"",
    "mtime": "2022-04-19T13:41:50.623Z",
    "path": "../public/_nuxt/login-a842bb1f.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"11ff-tJjDrQ0qOOkImv8fsK1B2GUI8ws\"",
    "mtime": "2022-04-19T13:41:50.623Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-acc404f4.mjs": {
    "type": "application/javascript",
    "etag": "\"a06-jtc2dkqSRItqUuUaBCbc8O68XtQ\"",
    "mtime": "2022-04-19T13:41:50.623Z",
    "path": "../public/_nuxt/post-list-acc404f4.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-19T13:41:50.619Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"70c1-lxEtY72DfVCGznpY9ca+SNHI3dY\"",
    "mtime": "2022-04-19T13:41:50.619Z",
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
