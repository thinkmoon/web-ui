import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-16T14:27:33.827Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-8GmqQky2yMtiVH+DZZPBXLpe/oA\"",
    "mtime": "2022-04-16T14:27:33.827Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"149a-B+AUa7vzGzFzTlnKr8WQmfcAXHQ\"",
    "mtime": "2022-04-16T14:27:33.827Z",
    "path": "../public/sitemap.txt"
  },
  "/_nuxt/404-22fa013f.mjs": {
    "type": "application/javascript",
    "etag": "\"134-QqMPsZoUimZ5tlzuHSzpfJPWTds\"",
    "mtime": "2022-04-16T14:27:33.827Z",
    "path": "../public/_nuxt/404-22fa013f.mjs"
  },
  "/_nuxt/Footer-9820de20.mjs": {
    "type": "application/javascript",
    "etag": "\"3cb-kxtKED27kFh0h3AtREEWDkNp6jo\"",
    "mtime": "2022-04-16T14:27:33.823Z",
    "path": "../public/_nuxt/Footer-9820de20.mjs"
  },
  "/_nuxt/_cid_-b5d13a7a.mjs": {
    "type": "application/javascript",
    "etag": "\"5bd-pEhT5+27yf3bOegjjBR61xgBq0g\"",
    "mtime": "2022-04-16T14:27:33.823Z",
    "path": "../public/_nuxt/_cid_-b5d13a7a.mjs"
  },
  "/_nuxt/_pageIndex_-31beb20d.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-04-16T14:27:33.823Z",
    "path": "../public/_nuxt/_pageIndex_-31beb20d.mjs"
  },
  "/_nuxt/_pageIndex_-c65e25d9.mjs": {
    "type": "application/javascript",
    "etag": "\"e31-l30MJInt8kelWr9UjL+cpF/xuZo\"",
    "mtime": "2022-04-16T14:27:33.823Z",
    "path": "../public/_nuxt/_pageIndex_-c65e25d9.mjs"
  },
  "/_nuxt/_pageIndex_-fa8b88ee.mjs": {
    "type": "application/javascript",
    "etag": "\"96-i0FUK2uTV9GFaGPlprifM7kXCKo\"",
    "mtime": "2022-04-16T14:27:33.823Z",
    "path": "../public/_nuxt/_pageIndex_-fa8b88ee.mjs"
  },
  "/_nuxt/admin-11fcc6e9.mjs": {
    "type": "application/javascript",
    "etag": "\"640-cczoA1IsEQ/fN/GvDIFnfdvgqWI\"",
    "mtime": "2022-04-16T14:27:33.823Z",
    "path": "../public/_nuxt/admin-11fcc6e9.mjs"
  },
  "/_nuxt/admin-b2ec3c79.mjs": {
    "type": "application/javascript",
    "etag": "\"128-XUVKEAMtoH86zpy9F09pKFG4sLw\"",
    "mtime": "2022-04-16T14:27:33.823Z",
    "path": "../public/_nuxt/admin-b2ec3c79.mjs"
  },
  "/_nuxt/asyncData-16914e21.mjs": {
    "type": "application/javascript",
    "etag": "\"87f-KFT1ahZjpyfHLrIwOyzz1zdiJ4w\"",
    "mtime": "2022-04-16T14:27:33.823Z",
    "path": "../public/_nuxt/asyncData-16914e21.mjs"
  },
  "/_nuxt/auth-8c9274f3.mjs": {
    "type": "application/javascript",
    "etag": "\"86-xjiNSOXMo7chYV+VTpWqDKBRVaE\"",
    "mtime": "2022-04-16T14:27:33.823Z",
    "path": "../public/_nuxt/auth-8c9274f3.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-16T14:27:33.823Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-dd4cdae5.mjs": {
    "type": "application/javascript",
    "etag": "\"700-qSoKYHkvry9e/ZK6uDb06QlzS+w\"",
    "mtime": "2022-04-16T14:27:33.819Z",
    "path": "../public/_nuxt/default-dd4cdae5.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-16T14:27:33.819Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-b8e8741a.mjs": {
    "type": "application/javascript",
    "etag": "\"a80-vZ9tmORx5ojD8kJHmz52rl+j/0Y\"",
    "mtime": "2022-04-16T14:27:33.819Z",
    "path": "../public/_nuxt/editor-b8e8741a.mjs"
  },
  "/_nuxt/entry-fff55a18.mjs": {
    "type": "application/javascript",
    "etag": "\"243034-jHa/kHr2luGIqy++W250YWHz1ig\"",
    "mtime": "2022-04-16T14:27:33.819Z",
    "path": "../public/_nuxt/entry-fff55a18.mjs"
  },
  "/_nuxt/entry.01d07301.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5aae6-OF4U9Lo+iEB4f1wIn4DgXgAVZxI\"",
    "mtime": "2022-04-16T14:27:33.815Z",
    "path": "../public/_nuxt/entry.01d07301.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-16T14:27:33.815Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-32d205c8.mjs": {
    "type": "application/javascript",
    "etag": "\"347-CrG3MM+/tRiXUbEEmjwptw43aM8\"",
    "mtime": "2022-04-16T14:27:33.815Z",
    "path": "../public/_nuxt/index-32d205c8.mjs"
  },
  "/_nuxt/index-4a81a529.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-uI9Svl2s54eBRLpZHDHOX2LGmtI\"",
    "mtime": "2022-04-16T14:27:33.815Z",
    "path": "../public/_nuxt/index-4a81a529.mjs"
  },
  "/_nuxt/index-58b5bee3.mjs": {
    "type": "application/javascript",
    "etag": "\"39d-OKpg++xPnL5sosZcoJ0Mf4V9gSY\"",
    "mtime": "2022-04-16T14:27:33.811Z",
    "path": "../public/_nuxt/index-58b5bee3.mjs"
  },
  "/_nuxt/index-8f7be2c0.mjs": {
    "type": "application/javascript",
    "etag": "\"3cd-qJsbrG6tRsAOOzsMYb6L/5w0qo4\"",
    "mtime": "2022-04-16T14:27:33.811Z",
    "path": "../public/_nuxt/index-8f7be2c0.mjs"
  },
  "/_nuxt/login-c09e22bd.mjs": {
    "type": "application/javascript",
    "etag": "\"58c-LGWljF8Xgcr0RMHGnARviluLZeQ\"",
    "mtime": "2022-04-16T14:27:33.811Z",
    "path": "../public/_nuxt/login-c09e22bd.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1199-OpcXsNLxxLgYTCk0ZrTPQ0ealdQ\"",
    "mtime": "2022-04-16T14:27:33.811Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-d276d93e.mjs": {
    "type": "application/javascript",
    "etag": "\"a06-4aqHUYbG4y1AZaMW+RIAArChLCE\"",
    "mtime": "2022-04-16T14:27:33.811Z",
    "path": "../public/_nuxt/post-list-d276d93e.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-8GmqQky2yMtiVH+DZZPBXLpe/oA\"",
    "mtime": "2022-04-16T14:27:33.811Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"149a-B+AUa7vzGzFzTlnKr8WQmfcAXHQ\"",
    "mtime": "2022-04-16T14:27:33.811Z",
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
