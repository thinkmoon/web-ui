import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-16T14:15:53.719Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-8GmqQky2yMtiVH+DZZPBXLpe/oA\"",
    "mtime": "2022-04-16T14:15:53.719Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"149a-B+AUa7vzGzFzTlnKr8WQmfcAXHQ\"",
    "mtime": "2022-04-16T14:15:53.715Z",
    "path": "../public/sitemap.txt"
  },
  "/_nuxt/404-f6369e1a.mjs": {
    "type": "application/javascript",
    "etag": "\"134-8e6RQIJLpKtH8EKe11d3grrjBq0\"",
    "mtime": "2022-04-16T14:15:53.715Z",
    "path": "../public/_nuxt/404-f6369e1a.mjs"
  },
  "/_nuxt/Footer-855c346f.mjs": {
    "type": "application/javascript",
    "etag": "\"3cb-4D6O8AJ9EatV/5i1YOBWcDHaxaY\"",
    "mtime": "2022-04-16T14:15:53.715Z",
    "path": "../public/_nuxt/Footer-855c346f.mjs"
  },
  "/_nuxt/_cid_-37183321.mjs": {
    "type": "application/javascript",
    "etag": "\"545-cdVK0gGcTWBtk3xhMdIDq3o2Udk\"",
    "mtime": "2022-04-16T14:15:53.715Z",
    "path": "../public/_nuxt/_cid_-37183321.mjs"
  },
  "/_nuxt/_pageIndex_-1f4e885d.mjs": {
    "type": "application/javascript",
    "etag": "\"e31-2RJOPE3CuP2T8pelNJZNfu6Ln1I\"",
    "mtime": "2022-04-16T14:15:53.715Z",
    "path": "../public/_nuxt/_pageIndex_-1f4e885d.mjs"
  },
  "/_nuxt/_pageIndex_-28d2da49.mjs": {
    "type": "application/javascript",
    "etag": "\"96-6yBIlz0gRJehkUjzO7oi1Sd530Y\"",
    "mtime": "2022-04-16T14:15:53.715Z",
    "path": "../public/_nuxt/_pageIndex_-28d2da49.mjs"
  },
  "/_nuxt/_pageIndex_-31beb20d.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-04-16T14:15:53.715Z",
    "path": "../public/_nuxt/_pageIndex_-31beb20d.mjs"
  },
  "/_nuxt/admin-0aa355fe.mjs": {
    "type": "application/javascript",
    "etag": "\"640-jZjMcMXIhSIgms88Vomdlxhlo18\"",
    "mtime": "2022-04-16T14:15:53.715Z",
    "path": "../public/_nuxt/admin-0aa355fe.mjs"
  },
  "/_nuxt/admin-1d9042e5.mjs": {
    "type": "application/javascript",
    "etag": "\"128-menVb1UtRUPwUcfAuOvLTCnraic\"",
    "mtime": "2022-04-16T14:15:53.715Z",
    "path": "../public/_nuxt/admin-1d9042e5.mjs"
  },
  "/_nuxt/asyncData-750c6e6d.mjs": {
    "type": "application/javascript",
    "etag": "\"87f-co1/9EYdX7XqKSrbRQnY7i0r3N0\"",
    "mtime": "2022-04-16T14:15:53.715Z",
    "path": "../public/_nuxt/asyncData-750c6e6d.mjs"
  },
  "/_nuxt/auth-f2c8c612.mjs": {
    "type": "application/javascript",
    "etag": "\"86-Elfmpvth1XftCRQ1QueHa6eFNJY\"",
    "mtime": "2022-04-16T14:15:53.715Z",
    "path": "../public/_nuxt/auth-f2c8c612.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-16T14:15:53.715Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-236d4df0.mjs": {
    "type": "application/javascript",
    "etag": "\"700-nEX5R1vmQj8k7VodoAekp9JIx+s\"",
    "mtime": "2022-04-16T14:15:53.711Z",
    "path": "../public/_nuxt/default-236d4df0.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-16T14:15:53.711Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-13bd5bc2.mjs": {
    "type": "application/javascript",
    "etag": "\"a80-8ETJM2OVKxsuxAr7TSl0DUPN9tI\"",
    "mtime": "2022-04-16T14:15:53.711Z",
    "path": "../public/_nuxt/editor-13bd5bc2.mjs"
  },
  "/_nuxt/entry-dfd35313.mjs": {
    "type": "application/javascript",
    "etag": "\"243034-HM+s4xSaoQJtD0iKmojVR4sCJhw\"",
    "mtime": "2022-04-16T14:15:53.711Z",
    "path": "../public/_nuxt/entry-dfd35313.mjs"
  },
  "/_nuxt/entry.e1f68380.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5aae6-HrrcJ1lgawoKJPgGoWyzqYw/2ss\"",
    "mtime": "2022-04-16T14:15:53.711Z",
    "path": "../public/_nuxt/entry.e1f68380.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-16T14:15:53.707Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-6fba55fd.mjs": {
    "type": "application/javascript",
    "etag": "\"3cd-/juiIsm5GmQU0Iupwok/sd+FCL0\"",
    "mtime": "2022-04-16T14:15:53.707Z",
    "path": "../public/_nuxt/index-6fba55fd.mjs"
  },
  "/_nuxt/index-766903ee.mjs": {
    "type": "application/javascript",
    "etag": "\"347-0HT5aJmO1TGQNkcD7zFBSFpBRE8\"",
    "mtime": "2022-04-16T14:15:53.707Z",
    "path": "../public/_nuxt/index-766903ee.mjs"
  },
  "/_nuxt/index-76e123f3.mjs": {
    "type": "application/javascript",
    "etag": "\"39d-OPx5NlWoKMVwV2mJoTcERi1PglE\"",
    "mtime": "2022-04-16T14:15:53.707Z",
    "path": "../public/_nuxt/index-76e123f3.mjs"
  },
  "/_nuxt/index-e127d00c.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-lFxp9iBkI6wIYmjEOK/rXouLyz0\"",
    "mtime": "2022-04-16T14:15:53.707Z",
    "path": "../public/_nuxt/index-e127d00c.mjs"
  },
  "/_nuxt/login-86718149.mjs": {
    "type": "application/javascript",
    "etag": "\"58c-7/mcb2ek1pp9SLUVkuVYY/6sPqE\"",
    "mtime": "2022-04-16T14:15:53.707Z",
    "path": "../public/_nuxt/login-86718149.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1199-RoFeq9ecd7UnGQG1hoZavmiIDPw\"",
    "mtime": "2022-04-16T14:15:53.707Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-0d8121b1.mjs": {
    "type": "application/javascript",
    "etag": "\"a06-fLb8ldKK3noYuvIJDJfa2LSBioc\"",
    "mtime": "2022-04-16T14:15:53.707Z",
    "path": "../public/_nuxt/post-list-0d8121b1.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-8GmqQky2yMtiVH+DZZPBXLpe/oA\"",
    "mtime": "2022-04-16T14:15:53.707Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"149a-B+AUa7vzGzFzTlnKr8WQmfcAXHQ\"",
    "mtime": "2022-04-16T14:15:53.707Z",
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
