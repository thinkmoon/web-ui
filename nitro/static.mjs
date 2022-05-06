import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-05-06T13:40:42.156Z",
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-05-06T13:40:42.156Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-05-06T13:40:42.156Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"8450-kBmbAfDCzt1pi/E3Kk1PRwG+ecQ\"",
    "mtime": "2022-05-06T13:40:42.156Z",
    "path": "../public/sitemap.xml"
  },
  "/_nuxt/404-0bc71700.mjs": {
    "type": "application/javascript",
    "etag": "\"134-pKrVqejPwJ27kaWSS8Y1gDsdrrI\"",
    "mtime": "2022-05-06T13:40:42.156Z",
    "path": "../public/_nuxt/404-0bc71700.mjs"
  },
  "/_nuxt/Footer-a3b1778c.mjs": {
    "type": "application/javascript",
    "etag": "\"3da-6kDr97EUqcns1zoVbBi0G8bssaE\"",
    "mtime": "2022-05-06T13:40:42.156Z",
    "path": "../public/_nuxt/Footer-a3b1778c.mjs"
  },
  "/_nuxt/PostList-918d607a.mjs": {
    "type": "application/javascript",
    "etag": "\"94c-57UyiS5vFwQiAqAllT5rUvwrF7o\"",
    "mtime": "2022-05-06T13:40:42.156Z",
    "path": "../public/_nuxt/PostList-918d607a.mjs"
  },
  "/_nuxt/TagApi-0ee6d6f6.mjs": {
    "type": "application/javascript",
    "etag": "\"85-9HEExFS8L14z/eN68q6+GcLwkZk\"",
    "mtime": "2022-05-06T13:40:42.156Z",
    "path": "../public/_nuxt/TagApi-0ee6d6f6.mjs"
  },
  "/_nuxt/_cid_-8c48dd8e.mjs": {
    "type": "application/javascript",
    "etag": "\"5bb-lHTtyCjRO0T/iJOotAlkAVGVd8c\"",
    "mtime": "2022-05-06T13:40:42.156Z",
    "path": "../public/_nuxt/_cid_-8c48dd8e.mjs"
  },
  "/_nuxt/_pageIndex_-0111ce15.mjs": {
    "type": "application/javascript",
    "etag": "\"609-Gyq5buJSAPrzzTPcB62/MdVfMGA\"",
    "mtime": "2022-05-06T13:40:42.152Z",
    "path": "../public/_nuxt/_pageIndex_-0111ce15.mjs"
  },
  "/_nuxt/_pageIndex_-1ba60fda.mjs": {
    "type": "application/javascript",
    "etag": "\"45a-CuTzaup01vrb/IkFwGFa5OwdUL4\"",
    "mtime": "2022-05-06T13:40:42.152Z",
    "path": "../public/_nuxt/_pageIndex_-1ba60fda.mjs"
  },
  "/_nuxt/_pageIndex_-48e8414e.mjs": {
    "type": "application/javascript",
    "etag": "\"841-XOYNhQgiQT96Noi2YMBRM8tTArM\"",
    "mtime": "2022-05-06T13:40:42.152Z",
    "path": "../public/_nuxt/_pageIndex_-48e8414e.mjs"
  },
  "/_nuxt/admin-cb082f80.mjs": {
    "type": "application/javascript",
    "etag": "\"646-Q7q+0XltS0Ram05sw+DPrFEQtwM\"",
    "mtime": "2022-05-06T13:40:42.152Z",
    "path": "../public/_nuxt/admin-cb082f80.mjs"
  },
  "/_nuxt/admin-ffda0788.mjs": {
    "type": "application/javascript",
    "etag": "\"128-aK7/lg53VAtNzEgNhYImPnB+ugo\"",
    "mtime": "2022-05-06T13:40:42.152Z",
    "path": "../public/_nuxt/admin-ffda0788.mjs"
  },
  "/_nuxt/asyncData-37a92302.mjs": {
    "type": "application/javascript",
    "etag": "\"89e-6VtSgcGEmGI7q/wZpZLRjnoHn5s\"",
    "mtime": "2022-05-06T13:40:42.152Z",
    "path": "../public/_nuxt/asyncData-37a92302.mjs"
  },
  "/_nuxt/auth-8e1e7284.mjs": {
    "type": "application/javascript",
    "etag": "\"86-qT7WuqfvhIjMnE+ny20bHxx7aHI\"",
    "mtime": "2022-05-06T13:40:42.152Z",
    "path": "../public/_nuxt/auth-8e1e7284.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-05-06T13:40:42.152Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-072fbd39.mjs": {
    "type": "application/javascript",
    "etag": "\"71d-Tg7Cr4IQplAQra7Tz73O//EF/z0\"",
    "mtime": "2022-05-06T13:40:42.152Z",
    "path": "../public/_nuxt/default-072fbd39.mjs"
  },
  "/_nuxt/default.8dc03fb7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7itp67EfnoBfWZaWOJHA4JvjbOk\"",
    "mtime": "2022-05-06T13:40:42.152Z",
    "path": "../public/_nuxt/default.8dc03fb7.css"
  },
  "/_nuxt/editor-a8d134c8.mjs": {
    "type": "application/javascript",
    "etag": "\"a89-vQcYgYIAjiSbjSvIcgSR/8HZqNI\"",
    "mtime": "2022-05-06T13:40:42.152Z",
    "path": "../public/_nuxt/editor-a8d134c8.mjs"
  },
  "/_nuxt/entry-1abc47bf.mjs": {
    "type": "application/javascript",
    "etag": "\"24414d-xGlwJ2Hw323E5xylwB4CZndfMLM\"",
    "mtime": "2022-05-06T13:40:42.152Z",
    "path": "../public/_nuxt/entry-1abc47bf.mjs"
  },
  "/_nuxt/entry.7e762317.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a44e-EkcMtPyXNVvVFR90tUfqKVS1I+Y\"",
    "mtime": "2022-05-06T13:40:42.148Z",
    "path": "../public/_nuxt/entry.7e762317.css"
  },
  "/_nuxt/index-2b450ddb.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-DmBykvfNhiWFSkkEKH19MFCIRSw\"",
    "mtime": "2022-05-06T13:40:42.148Z",
    "path": "../public/_nuxt/index-2b450ddb.mjs"
  },
  "/_nuxt/index-5a035f1b.mjs": {
    "type": "application/javascript",
    "etag": "\"3b2-xAGdD5bvhHQQ5xPXdahakGG/G9M\"",
    "mtime": "2022-05-06T13:40:42.148Z",
    "path": "../public/_nuxt/index-5a035f1b.mjs"
  },
  "/_nuxt/index-a497430d.mjs": {
    "type": "application/javascript",
    "etag": "\"3b0-sUeCx5Z1hXI0xHX+80KEJ5TpJgM\"",
    "mtime": "2022-05-06T13:40:42.144Z",
    "path": "../public/_nuxt/index-a497430d.mjs"
  },
  "/_nuxt/index-b8baf49f.mjs": {
    "type": "application/javascript",
    "etag": "\"349-7mAMKboHlXcM9n2ElJQWL7T/EXM\"",
    "mtime": "2022-05-06T13:40:42.144Z",
    "path": "../public/_nuxt/index-b8baf49f.mjs"
  },
  "/_nuxt/login-47adb9ee.mjs": {
    "type": "application/javascript",
    "etag": "\"5b7-X+ytQD/45OUplv69C0me7qHltDI\"",
    "mtime": "2022-05-06T13:40:42.144Z",
    "path": "../public/_nuxt/login-47adb9ee.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"13c3-gFX3iEPJxUUzM2+9T1SlA075yPs\"",
    "mtime": "2022-05-06T13:40:42.144Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-5d77f5b0.mjs": {
    "type": "application/javascript",
    "etag": "\"a08-zuWfNEWmww3h0adDdSv29XpIZtc\"",
    "mtime": "2022-05-06T13:40:42.144Z",
    "path": "../public/_nuxt/post-list-5d77f5b0.mjs"
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
