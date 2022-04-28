import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-28T14:17:37.214Z",
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-28T14:17:37.214Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-28T14:17:37.214Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"8450-kBmbAfDCzt1pi/E3Kk1PRwG+ecQ\"",
    "mtime": "2022-04-28T14:17:37.214Z",
    "path": "../public/sitemap.xml"
  },
  "/_nuxt/404-7dbd7c5e.mjs": {
    "type": "application/javascript",
    "etag": "\"134-EXC+HerKPThqt4HYSV2FgfA9+wg\"",
    "mtime": "2022-04-28T14:17:37.210Z",
    "path": "../public/_nuxt/404-7dbd7c5e.mjs"
  },
  "/_nuxt/Footer-01e5f3e6.mjs": {
    "type": "application/javascript",
    "etag": "\"3da-9cOZ7bbk5Qs+vnp81xBs1iIEF8k\"",
    "mtime": "2022-04-28T14:17:37.210Z",
    "path": "../public/_nuxt/Footer-01e5f3e6.mjs"
  },
  "/_nuxt/PostList-2832ca13.mjs": {
    "type": "application/javascript",
    "etag": "\"94c-6KGrh469GGAZhPOy0iqwpgrWX6o\"",
    "mtime": "2022-04-28T14:17:37.210Z",
    "path": "../public/_nuxt/PostList-2832ca13.mjs"
  },
  "/_nuxt/TagApi-c1b3e122.mjs": {
    "type": "application/javascript",
    "etag": "\"85-lu1FsMZr6/ApzlFKof7BOn3JSvk\"",
    "mtime": "2022-04-28T14:17:37.210Z",
    "path": "../public/_nuxt/TagApi-c1b3e122.mjs"
  },
  "/_nuxt/_cid_-4d6d8080.mjs": {
    "type": "application/javascript",
    "etag": "\"5bb-QAckQh06envEZEW4YT/A9KkZhP0\"",
    "mtime": "2022-04-28T14:17:37.210Z",
    "path": "../public/_nuxt/_cid_-4d6d8080.mjs"
  },
  "/_nuxt/_pageIndex_-4a5e19f0.mjs": {
    "type": "application/javascript",
    "etag": "\"45a-xsCPzSYNQuwnQwpyZm1rYZiRtqo\"",
    "mtime": "2022-04-28T14:17:37.210Z",
    "path": "../public/_nuxt/_pageIndex_-4a5e19f0.mjs"
  },
  "/_nuxt/_pageIndex_-68615a89.mjs": {
    "type": "application/javascript",
    "etag": "\"67f-cRGvaAfRTDIrrZ6rDg+vc4flFxg\"",
    "mtime": "2022-04-28T14:17:37.210Z",
    "path": "../public/_nuxt/_pageIndex_-68615a89.mjs"
  },
  "/_nuxt/_pageIndex_-9767dc92.mjs": {
    "type": "application/javascript",
    "etag": "\"609-4wU3NcD+51dvpUtpL245VP3n7lc\"",
    "mtime": "2022-04-28T14:17:37.210Z",
    "path": "../public/_nuxt/_pageIndex_-9767dc92.mjs"
  },
  "/_nuxt/admin-4383f111.mjs": {
    "type": "application/javascript",
    "etag": "\"646-5Qt8QkRWA2pC24xVXTqaLrB0dIs\"",
    "mtime": "2022-04-28T14:17:37.210Z",
    "path": "../public/_nuxt/admin-4383f111.mjs"
  },
  "/_nuxt/admin-51448888.mjs": {
    "type": "application/javascript",
    "etag": "\"128-QEwTsHRk2oyViuMoNYGQ6QbvJCc\"",
    "mtime": "2022-04-28T14:17:37.210Z",
    "path": "../public/_nuxt/admin-51448888.mjs"
  },
  "/_nuxt/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-28T14:17:37.210Z",
    "path": "../public/_nuxt/ads.txt"
  },
  "/_nuxt/asyncData-b024b466.mjs": {
    "type": "application/javascript",
    "etag": "\"87f-egS7pRiil12KTVF7RwjDR2xKlms\"",
    "mtime": "2022-04-28T14:17:37.210Z",
    "path": "../public/_nuxt/asyncData-b024b466.mjs"
  },
  "/_nuxt/auth-cae232bc.mjs": {
    "type": "application/javascript",
    "etag": "\"86-pG7SZ7fMCppXQBwGmcOCrZQ/aJM\"",
    "mtime": "2022-04-28T14:17:37.210Z",
    "path": "../public/_nuxt/auth-cae232bc.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-28T14:17:37.210Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-e24bfa3c.mjs": {
    "type": "application/javascript",
    "etag": "\"71d-vq/HZZcgF0jsCuat68xlxbxNZwI\"",
    "mtime": "2022-04-28T14:17:37.206Z",
    "path": "../public/_nuxt/default-e24bfa3c.mjs"
  },
  "/_nuxt/default.8dc03fb7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7itp67EfnoBfWZaWOJHA4JvjbOk\"",
    "mtime": "2022-04-28T14:17:37.206Z",
    "path": "../public/_nuxt/default.8dc03fb7.css"
  },
  "/_nuxt/editor-4229bde7.mjs": {
    "type": "application/javascript",
    "etag": "\"a89-mA88wgxphS5QCIFRq3Hp5oRTJ8c\"",
    "mtime": "2022-04-28T14:17:37.206Z",
    "path": "../public/_nuxt/editor-4229bde7.mjs"
  },
  "/_nuxt/entry-ccea84cf.mjs": {
    "type": "application/javascript",
    "etag": "\"244400-MDj46mKGUviuiEh6DvEm/4iNPrE\"",
    "mtime": "2022-04-28T14:17:37.206Z",
    "path": "../public/_nuxt/entry-ccea84cf.mjs"
  },
  "/_nuxt/entry.5b8dbeb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a44e-LV8A1L3Q9aBfCyxdslx0rktcyOc\"",
    "mtime": "2022-04-28T14:17:37.206Z",
    "path": "../public/_nuxt/entry.5b8dbeb9.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-28T14:17:37.202Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-4078107f.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-xn7l6KdtYxbTwMhgvlywfKVbTQY\"",
    "mtime": "2022-04-28T14:17:37.202Z",
    "path": "../public/_nuxt/index-4078107f.mjs"
  },
  "/_nuxt/index-88e9db5f.mjs": {
    "type": "application/javascript",
    "etag": "\"3b0-RxUhdTxnAcbnI02rMRaZnnP2Fso\"",
    "mtime": "2022-04-28T14:17:37.202Z",
    "path": "../public/_nuxt/index-88e9db5f.mjs"
  },
  "/_nuxt/index-8df8667a.mjs": {
    "type": "application/javascript",
    "etag": "\"3b2-04SPI+sYAaU1VQt13cvMJI0mzGU\"",
    "mtime": "2022-04-28T14:17:37.202Z",
    "path": "../public/_nuxt/index-8df8667a.mjs"
  },
  "/_nuxt/index-9c544c25.mjs": {
    "type": "application/javascript",
    "etag": "\"349-GpXtb+aYsccqXQmV1g4OWCKlc+Q\"",
    "mtime": "2022-04-28T14:17:37.202Z",
    "path": "../public/_nuxt/index-9c544c25.mjs"
  },
  "/_nuxt/login-b1f39978.mjs": {
    "type": "application/javascript",
    "etag": "\"5b7-IST8j6bqA0XXVsEopYRPF8ATrNI\"",
    "mtime": "2022-04-28T14:17:37.202Z",
    "path": "../public/_nuxt/login-b1f39978.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"13c3-0iA1LeWoflcnKTdNSPNC/Su7NQE\"",
    "mtime": "2022-04-28T14:17:37.202Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-d1c894b9.mjs": {
    "type": "application/javascript",
    "etag": "\"a08-nozftrkAccUKno6VUCLTG8rxPY0\"",
    "mtime": "2022-04-28T14:17:37.202Z",
    "path": "../public/_nuxt/post-list-d1c894b9.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-28T14:17:37.202Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"8450-kBmbAfDCzt1pi/E3Kk1PRwG+ecQ\"",
    "mtime": "2022-04-28T14:17:37.202Z",
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
