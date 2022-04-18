import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-18T13:40:30.712Z",
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-18T13:40:30.712Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"ab-e5kh0M7QXTEiEA6eCyb7TVLrY5c\"",
    "mtime": "2022-04-18T13:40:30.712Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"5e10-ydmp1MB3d2ajAJFfIKYUL/vAv2A\"",
    "mtime": "2022-04-18T13:40:30.712Z",
    "path": "../public/sitemap.html"
  },
  "/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1d70-kZCO0kIHh3lHgCK1ALa09lUnUXc\"",
    "mtime": "2022-04-18T13:40:30.712Z",
    "path": "../public/sitemap.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"717f-6Kk9J5HZnumxp9LceebZtQclIH4\"",
    "mtime": "2022-04-18T13:40:30.712Z",
    "path": "../public/sitemap.xml"
  },
  "/_nuxt/Footer-f575ec0e.mjs": {
    "type": "application/javascript",
    "etag": "\"3cb-aGJzF51/Mm2bWHLUqM1ePtT1mq8\"",
    "mtime": "2022-04-18T13:40:30.712Z",
    "path": "../public/_nuxt/Footer-f575ec0e.mjs"
  },
  "/_nuxt/PostList-1909bdd0.mjs": {
    "type": "application/javascript",
    "etag": "\"94c-UXnmDCmmfzQmFaMtm/FEs50UXrs\"",
    "mtime": "2022-04-18T13:40:30.712Z",
    "path": "../public/_nuxt/PostList-1909bdd0.mjs"
  },
  "/_nuxt/_cid_-677670b3.mjs": {
    "type": "application/javascript",
    "etag": "\"5bd-pFWvfJEpuQolUIEoX8ohhhQbDGQ\"",
    "mtime": "2022-04-18T13:40:30.712Z",
    "path": "../public/_nuxt/_cid_-677670b3.mjs"
  },
  "/_nuxt/_pageIndex_-229f8c91.mjs": {
    "type": "application/javascript",
    "etag": "\"42e-P+nroMiDrnq9hFqDypipjXdRPds\"",
    "mtime": "2022-04-18T13:40:30.712Z",
    "path": "../public/_nuxt/_pageIndex_-229f8c91.mjs"
  },
  "/_nuxt/_pageIndex_-31beb20d.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-04-18T13:40:30.712Z",
    "path": "../public/_nuxt/_pageIndex_-31beb20d.mjs"
  },
  "/_nuxt/_pageIndex_-e2826dba.mjs": {
    "type": "application/javascript",
    "etag": "\"687-4AKT590IIVcKU/GDI8jIZd12hA8\"",
    "mtime": "2022-04-18T13:40:30.712Z",
    "path": "../public/_nuxt/_pageIndex_-e2826dba.mjs"
  },
  "/_nuxt/admin-9aa9a041.mjs": {
    "type": "application/javascript",
    "etag": "\"640-ugal3zlBvbnBW3hwT5w+1SzuDuo\"",
    "mtime": "2022-04-18T13:40:30.712Z",
    "path": "../public/_nuxt/admin-9aa9a041.mjs"
  },
  "/_nuxt/admin-d3fd154a.mjs": {
    "type": "application/javascript",
    "etag": "\"128-zQdVMFgQraTkmNTtKI4UtasK3G4\"",
    "mtime": "2022-04-18T13:40:30.708Z",
    "path": "../public/_nuxt/admin-d3fd154a.mjs"
  },
  "/_nuxt/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-18T13:40:30.708Z",
    "path": "../public/_nuxt/ads.txt"
  },
  "/_nuxt/asyncData-b083efe0.mjs": {
    "type": "application/javascript",
    "etag": "\"87f-bMm3qfvuEei8O2fe1MI2s6WcAnc\"",
    "mtime": "2022-04-18T13:40:30.708Z",
    "path": "../public/_nuxt/asyncData-b083efe0.mjs"
  },
  "/_nuxt/auth-a00f90f0.mjs": {
    "type": "application/javascript",
    "etag": "\"86-IufxMT9CaIfqEa1bKFwH3gtt4Cg\"",
    "mtime": "2022-04-18T13:40:30.708Z",
    "path": "../public/_nuxt/auth-a00f90f0.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-18T13:40:30.708Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-f1076702.mjs": {
    "type": "application/javascript",
    "etag": "\"6fb-/hukq77f9CJ6OWtsHCDXkbMSpOk\"",
    "mtime": "2022-04-18T13:40:30.708Z",
    "path": "../public/_nuxt/default-f1076702.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-18T13:40:30.708Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-e20a519d.mjs": {
    "type": "application/javascript",
    "etag": "\"a80-8lLgw/BapePTIjbbBcOZXVa1gnk\"",
    "mtime": "2022-04-18T13:40:30.708Z",
    "path": "../public/_nuxt/editor-e20a519d.mjs"
  },
  "/_nuxt/entry-f4bf91a5.mjs": {
    "type": "application/javascript",
    "etag": "\"243316-sVDVBT7HmTG6b2ZgsavaV8PjNW0\"",
    "mtime": "2022-04-18T13:40:30.708Z",
    "path": "../public/_nuxt/entry-f4bf91a5.mjs"
  },
  "/_nuxt/entry.23b9d566.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"590ce-pmIiKipShHdoJEJCNLnwQMw28RY\"",
    "mtime": "2022-04-18T13:40:30.704Z",
    "path": "../public/_nuxt/entry.23b9d566.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-18T13:40:30.704Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-1256848d.mjs": {
    "type": "application/javascript",
    "etag": "\"347-dfPk3qNEQHIZ7fN+dfsDTEFkHF4\"",
    "mtime": "2022-04-18T13:40:30.704Z",
    "path": "../public/_nuxt/index-1256848d.mjs"
  },
  "/_nuxt/index-4f25c9fd.mjs": {
    "type": "application/javascript",
    "etag": "\"39d-u5FI+FSeN6+pwIYSO14rHr5BLn8\"",
    "mtime": "2022-04-18T13:40:30.704Z",
    "path": "../public/_nuxt/index-4f25c9fd.mjs"
  },
  "/_nuxt/index-9907a8fa.mjs": {
    "type": "application/javascript",
    "etag": "\"3cd-tj3AsFhSOW5EpHmKydUBRtWn0WI\"",
    "mtime": "2022-04-18T13:40:30.704Z",
    "path": "../public/_nuxt/index-9907a8fa.mjs"
  },
  "/_nuxt/index-f4e5e57f.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-Fb7GOpirDQMuiGbI0EhYAWRJ4Rg\"",
    "mtime": "2022-04-18T13:40:30.704Z",
    "path": "../public/_nuxt/index-f4e5e57f.mjs"
  },
  "/_nuxt/login-2ccb5a25.mjs": {
    "type": "application/javascript",
    "etag": "\"5b5-dK6R+W0uzs0hBCUkt+EdUhFd2PY\"",
    "mtime": "2022-04-18T13:40:30.704Z",
    "path": "../public/_nuxt/login-2ccb5a25.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"11b9-m63z5mtvyIPoSA5KIsuIMIboz2Y\"",
    "mtime": "2022-04-18T13:40:30.704Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-511141d3.mjs": {
    "type": "application/javascript",
    "etag": "\"a06-avCX9kdSfMFb1vGMpn6noxglhzA\"",
    "mtime": "2022-04-18T13:40:30.704Z",
    "path": "../public/_nuxt/post-list-511141d3.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"ab-e5kh0M7QXTEiEA6eCyb7TVLrY5c\"",
    "mtime": "2022-04-18T13:40:30.704Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"5e10-ydmp1MB3d2ajAJFfIKYUL/vAv2A\"",
    "mtime": "2022-04-18T13:40:30.704Z",
    "path": "../public/_nuxt/sitemap.html"
  },
  "/_nuxt/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1d70-kZCO0kIHh3lHgCK1ALa09lUnUXc\"",
    "mtime": "2022-04-18T13:40:30.704Z",
    "path": "../public/_nuxt/sitemap.txt"
  },
  "/_nuxt/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"717f-6Kk9J5HZnumxp9LceebZtQclIH4\"",
    "mtime": "2022-04-18T13:40:30.704Z",
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
