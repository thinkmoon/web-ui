import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-28T14:03:02.157Z",
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-28T14:03:02.153Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-28T14:03:02.153Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"8450-kBmbAfDCzt1pi/E3Kk1PRwG+ecQ\"",
    "mtime": "2022-04-28T14:03:02.153Z",
    "path": "../public/sitemap.xml"
  },
  "/_nuxt/404-34833078.mjs": {
    "type": "application/javascript",
    "etag": "\"134-8T7AqqYjaAQQecv/KJ9VYDhFgIs\"",
    "mtime": "2022-04-28T14:03:02.153Z",
    "path": "../public/_nuxt/404-34833078.mjs"
  },
  "/_nuxt/Footer-d7659a91.mjs": {
    "type": "application/javascript",
    "etag": "\"3da-TwYQXcidRw4xhiJqvXnPKkeYBf0\"",
    "mtime": "2022-04-28T14:03:02.153Z",
    "path": "../public/_nuxt/Footer-d7659a91.mjs"
  },
  "/_nuxt/PostList-d8b4eab2.mjs": {
    "type": "application/javascript",
    "etag": "\"94c-Q6lgbIz0Zexyw07B+DzPJSVtgN4\"",
    "mtime": "2022-04-28T14:03:02.153Z",
    "path": "../public/_nuxt/PostList-d8b4eab2.mjs"
  },
  "/_nuxt/TagApi-396b3c7c.mjs": {
    "type": "application/javascript",
    "etag": "\"85-D8AdZIFF7A3/bx8iVmeEMCfJ3b0\"",
    "mtime": "2022-04-28T14:03:02.153Z",
    "path": "../public/_nuxt/TagApi-396b3c7c.mjs"
  },
  "/_nuxt/_cid_-6113aaad.mjs": {
    "type": "application/javascript",
    "etag": "\"5bb-18hhjU8jAo+Yb3p12ys8tNvw2Og\"",
    "mtime": "2022-04-28T14:03:02.153Z",
    "path": "../public/_nuxt/_cid_-6113aaad.mjs"
  },
  "/_nuxt/_pageIndex_-0b4c40b5.mjs": {
    "type": "application/javascript",
    "etag": "\"45a-IF/zFcpup08jlMrsXLsQ4eXH9dc\"",
    "mtime": "2022-04-28T14:03:02.153Z",
    "path": "../public/_nuxt/_pageIndex_-0b4c40b5.mjs"
  },
  "/_nuxt/_pageIndex_-18d14540.mjs": {
    "type": "application/javascript",
    "etag": "\"67f-AqLN+qfBMvQzYpegtFw7vNPSfto\"",
    "mtime": "2022-04-28T14:03:02.153Z",
    "path": "../public/_nuxt/_pageIndex_-18d14540.mjs"
  },
  "/_nuxt/_pageIndex_-c3e5334e.mjs": {
    "type": "application/javascript",
    "etag": "\"609-oQTqkaht9jnwM+oKyz9UcaoRh3A\"",
    "mtime": "2022-04-28T14:03:02.153Z",
    "path": "../public/_nuxt/_pageIndex_-c3e5334e.mjs"
  },
  "/_nuxt/admin-34c81bf3.mjs": {
    "type": "application/javascript",
    "etag": "\"128-aoljGoocYG6tC3MO7B3jt5TYPP0\"",
    "mtime": "2022-04-28T14:03:02.153Z",
    "path": "../public/_nuxt/admin-34c81bf3.mjs"
  },
  "/_nuxt/admin-669c7d3c.mjs": {
    "type": "application/javascript",
    "etag": "\"646-qHZ2auedxb4/TMBErZKMSZ5YuIQ\"",
    "mtime": "2022-04-28T14:03:02.153Z",
    "path": "../public/_nuxt/admin-669c7d3c.mjs"
  },
  "/_nuxt/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-28T14:03:02.153Z",
    "path": "../public/_nuxt/ads.txt"
  },
  "/_nuxt/asyncData-0f666879.mjs": {
    "type": "application/javascript",
    "etag": "\"87f-ibrZ+feS6QbxRthTVFFcfLGXwF4\"",
    "mtime": "2022-04-28T14:03:02.153Z",
    "path": "../public/_nuxt/asyncData-0f666879.mjs"
  },
  "/_nuxt/auth-3f86f15d.mjs": {
    "type": "application/javascript",
    "etag": "\"86-PhQjjGjhLnFsBeFgeQoEBwhxUdI\"",
    "mtime": "2022-04-28T14:03:02.149Z",
    "path": "../public/_nuxt/auth-3f86f15d.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-28T14:03:02.149Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-eef156fc.mjs": {
    "type": "application/javascript",
    "etag": "\"71b-LcLEa/spCtUglTOChW6e8Khnjbc\"",
    "mtime": "2022-04-28T14:03:02.149Z",
    "path": "../public/_nuxt/default-eef156fc.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-28T14:03:02.149Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-f4229885.mjs": {
    "type": "application/javascript",
    "etag": "\"a89-ZKfihhK6z20eEcZMs+5rU+wzgT0\"",
    "mtime": "2022-04-28T14:03:02.149Z",
    "path": "../public/_nuxt/editor-f4229885.mjs"
  },
  "/_nuxt/entry-f8c439a3.mjs": {
    "type": "application/javascript",
    "etag": "\"244400-f+nt1cr6bxuazUl2+3c0NN8D0EM\"",
    "mtime": "2022-04-28T14:03:02.149Z",
    "path": "../public/_nuxt/entry-f8c439a3.mjs"
  },
  "/_nuxt/entry.aa402344.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a44e-vUr1PrQKFynu8Gc42QrxfR8VGXI\"",
    "mtime": "2022-04-28T14:03:02.145Z",
    "path": "../public/_nuxt/entry.aa402344.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-28T14:03:02.145Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-95e823d0.mjs": {
    "type": "application/javascript",
    "etag": "\"3b2-ioBeO6eDg+a80TbZ3ldd0OO8koo\"",
    "mtime": "2022-04-28T14:03:02.145Z",
    "path": "../public/_nuxt/index-95e823d0.mjs"
  },
  "/_nuxt/index-a881d4e3.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-DXxkvvoq4yqgZzXAkE1Ot1qMVio\"",
    "mtime": "2022-04-28T14:03:02.145Z",
    "path": "../public/_nuxt/index-a881d4e3.mjs"
  },
  "/_nuxt/index-cf68c7c0.mjs": {
    "type": "application/javascript",
    "etag": "\"3b5-Oa8qBBG/n89pTWNUHTciBjhvHw4\"",
    "mtime": "2022-04-28T14:03:02.145Z",
    "path": "../public/_nuxt/index-cf68c7c0.mjs"
  },
  "/_nuxt/index-f80e8135.mjs": {
    "type": "application/javascript",
    "etag": "\"349-rhZ3A5YJ9SMZOwQiciaGTxupMkk\"",
    "mtime": "2022-04-28T14:03:02.145Z",
    "path": "../public/_nuxt/index-f80e8135.mjs"
  },
  "/_nuxt/login-1d790248.mjs": {
    "type": "application/javascript",
    "etag": "\"5b7-lBBxr4VhG2Uo72OlPrJsVvEBMnk\"",
    "mtime": "2022-04-28T14:03:02.145Z",
    "path": "../public/_nuxt/login-1d790248.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"13c3-4VChdtnY0azEzcLydHm0YRyk3fA\"",
    "mtime": "2022-04-28T14:03:02.145Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-aa750f0d.mjs": {
    "type": "application/javascript",
    "etag": "\"a08-KCmk/hkzrSi/qv27T6i5YWEYNwc\"",
    "mtime": "2022-04-28T14:03:02.145Z",
    "path": "../public/_nuxt/post-list-aa750f0d.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-28T14:03:02.145Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"8450-kBmbAfDCzt1pi/E3Kk1PRwG+ecQ\"",
    "mtime": "2022-04-28T14:03:02.145Z",
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
