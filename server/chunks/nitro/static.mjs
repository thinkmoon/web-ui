import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-23T10:55:48.351Z",
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-23T10:55:48.351Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-23T10:55:48.351Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"8450-kBmbAfDCzt1pi/E3Kk1PRwG+ecQ\"",
    "mtime": "2022-04-23T10:55:48.351Z",
    "path": "../public/sitemap.xml"
  },
  "/_nuxt/404-c22c2899.mjs": {
    "type": "application/javascript",
    "etag": "\"134-xrS3nnKRb2D90c7u4a0bFWRptqk\"",
    "mtime": "2022-04-23T10:55:48.347Z",
    "path": "../public/_nuxt/404-c22c2899.mjs"
  },
  "/_nuxt/Footer-c63e2f3b.mjs": {
    "type": "application/javascript",
    "etag": "\"3da-8sdR6HrJxyi0vDooqPAnDzIFdYg\"",
    "mtime": "2022-04-23T10:55:48.347Z",
    "path": "../public/_nuxt/Footer-c63e2f3b.mjs"
  },
  "/_nuxt/PostList-d8cb186b.mjs": {
    "type": "application/javascript",
    "etag": "\"94e-6qUgsMPe9OGbneCpXkWtqSQKdAw\"",
    "mtime": "2022-04-23T10:55:48.347Z",
    "path": "../public/_nuxt/PostList-d8cb186b.mjs"
  },
  "/_nuxt/TagApi-2caf0d09.mjs": {
    "type": "application/javascript",
    "etag": "\"85-GXy3FB6cmoxIMcKFAdpjp4y1oHc\"",
    "mtime": "2022-04-23T10:55:48.347Z",
    "path": "../public/_nuxt/TagApi-2caf0d09.mjs"
  },
  "/_nuxt/_cid_-078df1ea.mjs": {
    "type": "application/javascript",
    "etag": "\"5bb-OrB6ZhDKOJjL6oXoOrTQhCYhtGY\"",
    "mtime": "2022-04-23T10:55:48.343Z",
    "path": "../public/_nuxt/_cid_-078df1ea.mjs"
  },
  "/_nuxt/_pageIndex_-541022ee.mjs": {
    "type": "application/javascript",
    "etag": "\"67f-PRJ3SeexKnSNf8M76z1g1mH13ZU\"",
    "mtime": "2022-04-23T10:55:48.343Z",
    "path": "../public/_nuxt/_pageIndex_-541022ee.mjs"
  },
  "/_nuxt/_pageIndex_-6d28c22f.mjs": {
    "type": "application/javascript",
    "etag": "\"45a-uzOMU+vMA7uRldzLarNMuHqUm+Q\"",
    "mtime": "2022-04-23T10:55:48.343Z",
    "path": "../public/_nuxt/_pageIndex_-6d28c22f.mjs"
  },
  "/_nuxt/_pageIndex_-e2abac41.mjs": {
    "type": "application/javascript",
    "etag": "\"609-0wYdbRl3W+xalgO7gc+Grylg4w4\"",
    "mtime": "2022-04-23T10:55:48.343Z",
    "path": "../public/_nuxt/_pageIndex_-e2abac41.mjs"
  },
  "/_nuxt/admin-8adeba05.mjs": {
    "type": "application/javascript",
    "etag": "\"646-MO8aH33KS+l9TNe12NauZWy0KXg\"",
    "mtime": "2022-04-23T10:55:48.343Z",
    "path": "../public/_nuxt/admin-8adeba05.mjs"
  },
  "/_nuxt/admin-fe831852.mjs": {
    "type": "application/javascript",
    "etag": "\"128-DPIBWWw5qhD9mN3Rf2HUYu5DdJ8\"",
    "mtime": "2022-04-23T10:55:48.343Z",
    "path": "../public/_nuxt/admin-fe831852.mjs"
  },
  "/_nuxt/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-23T10:55:48.343Z",
    "path": "../public/_nuxt/ads.txt"
  },
  "/_nuxt/asyncData-c159d78e.mjs": {
    "type": "application/javascript",
    "etag": "\"87f-aNWmJVsRj05ZApx140qjLxHeSvs\"",
    "mtime": "2022-04-23T10:55:48.343Z",
    "path": "../public/_nuxt/asyncData-c159d78e.mjs"
  },
  "/_nuxt/auth-32509b2b.mjs": {
    "type": "application/javascript",
    "etag": "\"86-uOseGGANbkXdIg0TzCXcxLy5YWc\"",
    "mtime": "2022-04-23T10:55:48.343Z",
    "path": "../public/_nuxt/auth-32509b2b.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-23T10:55:48.343Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-0187f58a.mjs": {
    "type": "application/javascript",
    "etag": "\"71b-1+FIIWeNNcU1vqcna0HoMkEmq6o\"",
    "mtime": "2022-04-23T10:55:48.343Z",
    "path": "../public/_nuxt/default-0187f58a.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-23T10:55:48.343Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-170d0ad6.mjs": {
    "type": "application/javascript",
    "etag": "\"a89-v6yn/ves3tXt/LNUUsKqShtMexI\"",
    "mtime": "2022-04-23T10:55:48.343Z",
    "path": "../public/_nuxt/editor-170d0ad6.mjs"
  },
  "/_nuxt/entry-9ef3f4aa.mjs": {
    "type": "application/javascript",
    "etag": "\"244190-k0R5WzjQvcws0oRdh6pWPbF+RXw\"",
    "mtime": "2022-04-23T10:55:48.343Z",
    "path": "../public/_nuxt/entry-9ef3f4aa.mjs"
  },
  "/_nuxt/entry.1087a270.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a278-0dDKN2S255IVCrKZDW4VNQyBmSM\"",
    "mtime": "2022-04-23T10:55:48.339Z",
    "path": "../public/_nuxt/entry.1087a270.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-23T10:55:48.339Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-3c43230d.mjs": {
    "type": "application/javascript",
    "etag": "\"3b2-RNNSoOosDEBpvgagw31nD3LnhhU\"",
    "mtime": "2022-04-23T10:55:48.339Z",
    "path": "../public/_nuxt/index-3c43230d.mjs"
  },
  "/_nuxt/index-8af747db.mjs": {
    "type": "application/javascript",
    "etag": "\"349-ggj1FmwYkiOTL8bUMl6YceQ4DZ0\"",
    "mtime": "2022-04-23T10:55:48.339Z",
    "path": "../public/_nuxt/index-8af747db.mjs"
  },
  "/_nuxt/index-a0bcdc0d.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-Fd/HezqNQrtxA/SrYQWPQ5iWCAI\"",
    "mtime": "2022-04-23T10:55:48.339Z",
    "path": "../public/_nuxt/index-a0bcdc0d.mjs"
  },
  "/_nuxt/index-c35b2ec1.mjs": {
    "type": "application/javascript",
    "etag": "\"3b5-388wHD8eIMzUgTk+AbTY/2LI/XA\"",
    "mtime": "2022-04-23T10:55:48.339Z",
    "path": "../public/_nuxt/index-c35b2ec1.mjs"
  },
  "/_nuxt/login-29a3979c.mjs": {
    "type": "application/javascript",
    "etag": "\"5b7-NKxF5A3Gfav5fMKvTFd7p/FM71w\"",
    "mtime": "2022-04-23T10:55:48.339Z",
    "path": "../public/_nuxt/login-29a3979c.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"13c3-rFBkf6cdMYQrnBZlFQewJJV8Rxw\"",
    "mtime": "2022-04-23T10:55:48.335Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-22a0022d.mjs": {
    "type": "application/javascript",
    "etag": "\"a08-rKa5J7b8gXT5TibjJWc4UjDoqlE\"",
    "mtime": "2022-04-23T10:55:48.335Z",
    "path": "../public/_nuxt/post-list-22a0022d.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-23T10:55:48.335Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"8450-kBmbAfDCzt1pi/E3Kk1PRwG+ecQ\"",
    "mtime": "2022-04-23T10:55:48.335Z",
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
