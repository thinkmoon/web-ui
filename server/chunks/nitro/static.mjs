import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-23T07:51:38.030Z",
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-23T07:51:38.030Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-23T07:51:38.030Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"70c1-lxEtY72DfVCGznpY9ca+SNHI3dY\"",
    "mtime": "2022-04-23T07:51:38.030Z",
    "path": "../public/sitemap.xml"
  },
  "/_nuxt/404-813d9d6c.mjs": {
    "type": "application/javascript",
    "etag": "\"134-pvGeV9miC80iwWtPJvFuLMSBCiE\"",
    "mtime": "2022-04-23T07:51:38.030Z",
    "path": "../public/_nuxt/404-813d9d6c.mjs"
  },
  "/_nuxt/Footer-b7cf44f9.mjs": {
    "type": "application/javascript",
    "etag": "\"3c8-NM1HtQ8arJvLPBBZlCvCJ3xBOtQ\"",
    "mtime": "2022-04-23T07:51:38.030Z",
    "path": "../public/_nuxt/Footer-b7cf44f9.mjs"
  },
  "/_nuxt/PostList-536f32c2.mjs": {
    "type": "application/javascript",
    "etag": "\"94c-CiZBJtXgsyqUjsNTz1hi3L1lHjI\"",
    "mtime": "2022-04-23T07:51:38.030Z",
    "path": "../public/_nuxt/PostList-536f32c2.mjs"
  },
  "/_nuxt/TagApi-4ffe9388.mjs": {
    "type": "application/javascript",
    "etag": "\"85-L147xCVVCc4HKI+cJJIOvL+Tacg\"",
    "mtime": "2022-04-23T07:51:38.030Z",
    "path": "../public/_nuxt/TagApi-4ffe9388.mjs"
  },
  "/_nuxt/_cid_-e746516d.mjs": {
    "type": "application/javascript",
    "etag": "\"5bb-gYm4nvqSxe3c66cS6YbMRAj7rrE\"",
    "mtime": "2022-04-23T07:51:38.030Z",
    "path": "../public/_nuxt/_cid_-e746516d.mjs"
  },
  "/_nuxt/_pageIndex_-2cb51df9.mjs": {
    "type": "application/javascript",
    "etag": "\"67f-QOhV2U+c8ooYGrS/1wTRsfLaw08\"",
    "mtime": "2022-04-23T07:51:38.030Z",
    "path": "../public/_nuxt/_pageIndex_-2cb51df9.mjs"
  },
  "/_nuxt/_pageIndex_-b2d0db61.mjs": {
    "type": "application/javascript",
    "etag": "\"609-dooHxAqaedfO1WogtqDNbuzjgeQ\"",
    "mtime": "2022-04-23T07:51:38.026Z",
    "path": "../public/_nuxt/_pageIndex_-b2d0db61.mjs"
  },
  "/_nuxt/_pageIndex_-d4012568.mjs": {
    "type": "application/javascript",
    "etag": "\"5c0-rDf0HFTM1Uxdwl6SRdIE4PHRJA4\"",
    "mtime": "2022-04-23T07:51:38.026Z",
    "path": "../public/_nuxt/_pageIndex_-d4012568.mjs"
  },
  "/_nuxt/admin-629ba4ce.mjs": {
    "type": "application/javascript",
    "etag": "\"128-WWTN2EjSsYMY9T26k8IMnKQ1xB8\"",
    "mtime": "2022-04-23T07:51:38.026Z",
    "path": "../public/_nuxt/admin-629ba4ce.mjs"
  },
  "/_nuxt/admin-bb8095ec.mjs": {
    "type": "application/javascript",
    "etag": "\"646-7xULO8SDxS6i13Kkn0vO29pwL1Y\"",
    "mtime": "2022-04-23T07:51:38.026Z",
    "path": "../public/_nuxt/admin-bb8095ec.mjs"
  },
  "/_nuxt/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-23T07:51:38.026Z",
    "path": "../public/_nuxt/ads.txt"
  },
  "/_nuxt/asyncData-9aa61cb9.mjs": {
    "type": "application/javascript",
    "etag": "\"87f-/wnW8pQndpDPZmxlpL5fbITpvjw\"",
    "mtime": "2022-04-23T07:51:38.026Z",
    "path": "../public/_nuxt/asyncData-9aa61cb9.mjs"
  },
  "/_nuxt/auth-b9a7dbbe.mjs": {
    "type": "application/javascript",
    "etag": "\"86-87SYm33pliTQsv69UYYRQ2DCIx4\"",
    "mtime": "2022-04-23T07:51:38.026Z",
    "path": "../public/_nuxt/auth-b9a7dbbe.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-23T07:51:38.026Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-2f1e9069.mjs": {
    "type": "application/javascript",
    "etag": "\"700-NLbzrUcT9OxjNrAWoo0GLbUaOuY\"",
    "mtime": "2022-04-23T07:51:38.026Z",
    "path": "../public/_nuxt/default-2f1e9069.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-23T07:51:38.026Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-55d5bac0.mjs": {
    "type": "application/javascript",
    "etag": "\"a89-lDJih71qwo/ibegLb7T+uFqvP2U\"",
    "mtime": "2022-04-23T07:51:38.026Z",
    "path": "../public/_nuxt/editor-55d5bac0.mjs"
  },
  "/_nuxt/entry-354d5b8b.mjs": {
    "type": "application/javascript",
    "etag": "\"244178-DvWkx4gAPlqQO4SfWMgVTD+7fM0\"",
    "mtime": "2022-04-23T07:51:38.026Z",
    "path": "../public/_nuxt/entry-354d5b8b.mjs"
  },
  "/_nuxt/entry.8cf3f2f6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a25b-Q+guYpGyTGdvNTuaIpEfSQvsoj0\"",
    "mtime": "2022-04-23T07:51:38.022Z",
    "path": "../public/_nuxt/entry.8cf3f2f6.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-23T07:51:38.022Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-0af72d0b.mjs": {
    "type": "application/javascript",
    "etag": "\"349-/FgiM9IN+7Krn9eBvKFyYWHiaLg\"",
    "mtime": "2022-04-23T07:51:38.022Z",
    "path": "../public/_nuxt/index-0af72d0b.mjs"
  },
  "/_nuxt/index-2778fe20.mjs": {
    "type": "application/javascript",
    "etag": "\"3b2-qPB38o+wJ3KbHNNOX82nIdd129U\"",
    "mtime": "2022-04-23T07:51:38.022Z",
    "path": "../public/_nuxt/index-2778fe20.mjs"
  },
  "/_nuxt/index-8e4b0b1b.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-U5ynYqyCyT3NgeHAfYudQ2QWDaw\"",
    "mtime": "2022-04-23T07:51:38.022Z",
    "path": "../public/_nuxt/index-8e4b0b1b.mjs"
  },
  "/_nuxt/index-ea12f6fe.mjs": {
    "type": "application/javascript",
    "etag": "\"3b5-vLvrpUDhqsOc63jj+ZvB4GrYMlg\"",
    "mtime": "2022-04-23T07:51:38.022Z",
    "path": "../public/_nuxt/index-ea12f6fe.mjs"
  },
  "/_nuxt/login-77f2b26a.mjs": {
    "type": "application/javascript",
    "etag": "\"5b7-xVYlJ/j1V2egSRDtGqHuycs+5J4\"",
    "mtime": "2022-04-23T07:51:38.022Z",
    "path": "../public/_nuxt/login-77f2b26a.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"13a3-GBXh12GgfN4PEx907//6pYO1UGg\"",
    "mtime": "2022-04-23T07:51:38.022Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-da391943.mjs": {
    "type": "application/javascript",
    "etag": "\"a08-QKQPOK01Hd061b/Hm1luWgkFRdw\"",
    "mtime": "2022-04-23T07:51:38.022Z",
    "path": "../public/_nuxt/post-list-da391943.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-23T07:51:38.018Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"70c1-lxEtY72DfVCGznpY9ca+SNHI3dY\"",
    "mtime": "2022-04-23T07:51:38.018Z",
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
