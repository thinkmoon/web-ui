import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-11T15:07:37.302Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"58-OyI6/ZGOy+QNZmGpvj57rwO0O/A\"",
    "mtime": "2022-04-11T15:07:37.302Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"149a-B+AUa7vzGzFzTlnKr8WQmfcAXHQ\"",
    "mtime": "2022-04-11T15:07:37.302Z",
    "path": "../public/sitemap.txt"
  },
  "/_nuxt/404-d6dd0cb0.mjs": {
    "type": "application/javascript",
    "etag": "\"134-T8PBF+UA7ns+NkPV4dIYIRfHFXk\"",
    "mtime": "2022-04-11T15:07:37.302Z",
    "path": "../public/_nuxt/404-d6dd0cb0.mjs"
  },
  "/_nuxt/Footer-a1ee5df9.mjs": {
    "type": "application/javascript",
    "etag": "\"3cb-vgJ07xVzqxMl/ceADFJJA2gsbXc\"",
    "mtime": "2022-04-11T15:07:37.302Z",
    "path": "../public/_nuxt/Footer-a1ee5df9.mjs"
  },
  "/_nuxt/_cid_-31e76ba7.mjs": {
    "type": "application/javascript",
    "etag": "\"545-zdgL1P93GjcHFh263uoP2ECZ9/o\"",
    "mtime": "2022-04-11T15:07:37.302Z",
    "path": "../public/_nuxt/_cid_-31e76ba7.mjs"
  },
  "/_nuxt/_pageIndex_-0f1187a8.mjs": {
    "type": "application/javascript",
    "etag": "\"e31-k6ZOUAnBMA9FJa8ftQQvKI6OD20\"",
    "mtime": "2022-04-11T15:07:37.302Z",
    "path": "../public/_nuxt/_pageIndex_-0f1187a8.mjs"
  },
  "/_nuxt/_pageIndex_-31beb20d.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-04-11T15:07:37.302Z",
    "path": "../public/_nuxt/_pageIndex_-31beb20d.mjs"
  },
  "/_nuxt/_pageIndex_-326f3efa.mjs": {
    "type": "application/javascript",
    "etag": "\"96-WJDH8HNRMJp7e+DLsBwDw4iZBLQ\"",
    "mtime": "2022-04-11T15:07:37.302Z",
    "path": "../public/_nuxt/_pageIndex_-326f3efa.mjs"
  },
  "/_nuxt/admin-4f674833.mjs": {
    "type": "application/javascript",
    "etag": "\"128-c8FzxupCviVPwziVGxNXDTNGjdQ\"",
    "mtime": "2022-04-11T15:07:37.302Z",
    "path": "../public/_nuxt/admin-4f674833.mjs"
  },
  "/_nuxt/admin-a18bb27a.mjs": {
    "type": "application/javascript",
    "etag": "\"640-TGgc4rDaQAexLI50o1tYW/tJsWY\"",
    "mtime": "2022-04-11T15:07:37.302Z",
    "path": "../public/_nuxt/admin-a18bb27a.mjs"
  },
  "/_nuxt/asyncData-7738f506.mjs": {
    "type": "application/javascript",
    "etag": "\"878-uOJ9BTvCHNXLEEzzfB76zUWHUhQ\"",
    "mtime": "2022-04-11T15:07:37.298Z",
    "path": "../public/_nuxt/asyncData-7738f506.mjs"
  },
  "/_nuxt/auth-d7e25e79.mjs": {
    "type": "application/javascript",
    "etag": "\"86-gPnFqa0Zc/FsloGol7TNOsG2XhY\"",
    "mtime": "2022-04-11T15:07:37.298Z",
    "path": "../public/_nuxt/auth-d7e25e79.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-11T15:07:37.298Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-d523c3ee.mjs": {
    "type": "application/javascript",
    "etag": "\"700-+NBK+wkR1fS3qCgxsHMx45pGXGc\"",
    "mtime": "2022-04-11T15:07:37.298Z",
    "path": "../public/_nuxt/default-d523c3ee.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-11T15:07:37.298Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-819d76c9.mjs": {
    "type": "application/javascript",
    "etag": "\"a80-liToiFYL15iVk2PAbPqMTjid6qE\"",
    "mtime": "2022-04-11T15:07:37.298Z",
    "path": "../public/_nuxt/editor-819d76c9.mjs"
  },
  "/_nuxt/entry-cbacf19f.mjs": {
    "type": "application/javascript",
    "etag": "\"242b6a-XJJ0KEOm3n5z8RI4FFsgicHd/oI\"",
    "mtime": "2022-04-11T15:07:37.298Z",
    "path": "../public/_nuxt/entry-cbacf19f.mjs"
  },
  "/_nuxt/entry.6cf39463.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5aaca-5sAKwCB9glF5LPzZezd97MW13s4\"",
    "mtime": "2022-04-11T15:07:37.294Z",
    "path": "../public/_nuxt/entry.6cf39463.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-11T15:07:37.294Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-4308fc38.mjs": {
    "type": "application/javascript",
    "etag": "\"39d-kWau8+wjh8bt0JX1gMt1Ktmb8gE\"",
    "mtime": "2022-04-11T15:07:37.294Z",
    "path": "../public/_nuxt/index-4308fc38.mjs"
  },
  "/_nuxt/index-684fcb8e.mjs": {
    "type": "application/javascript",
    "etag": "\"347-6F/ayGkDsF16Bf3ikfXmQITdaLc\"",
    "mtime": "2022-04-11T15:07:37.294Z",
    "path": "../public/_nuxt/index-684fcb8e.mjs"
  },
  "/_nuxt/index-d5f90466.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-4m+lA87Mm22d1w7e232YNrI6rVc\"",
    "mtime": "2022-04-11T15:07:37.294Z",
    "path": "../public/_nuxt/index-d5f90466.mjs"
  },
  "/_nuxt/index-f3a58a82.mjs": {
    "type": "application/javascript",
    "etag": "\"3cd-NWRFayMVtepXbDvkSNqTANTaEss\"",
    "mtime": "2022-04-11T15:07:37.294Z",
    "path": "../public/_nuxt/index-f3a58a82.mjs"
  },
  "/_nuxt/login-9860e80f.mjs": {
    "type": "application/javascript",
    "etag": "\"584-n2jxKHgXnv590zxhfAra81GI/Vc\"",
    "mtime": "2022-04-11T15:07:37.294Z",
    "path": "../public/_nuxt/login-9860e80f.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1199-VtLHkFUD4dF9smoEDW3s4i+ierc\"",
    "mtime": "2022-04-11T15:07:37.294Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-571b671f.mjs": {
    "type": "application/javascript",
    "etag": "\"a06-j/tvtu46UmZHbBzMlLcjigUZxKg\"",
    "mtime": "2022-04-11T15:07:37.294Z",
    "path": "../public/_nuxt/post-list-571b671f.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"58-OyI6/ZGOy+QNZmGpvj57rwO0O/A\"",
    "mtime": "2022-04-11T15:07:37.290Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"149a-B+AUa7vzGzFzTlnKr8WQmfcAXHQ\"",
    "mtime": "2022-04-11T15:07:37.290Z",
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
