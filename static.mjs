import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-18T14:02:27.247Z",
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-18T14:02:27.247Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"bc-xlL27z2NKSXWtzK4pWzGJ8jnGUU\"",
    "mtime": "2022-04-18T14:02:27.247Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"5e10-ydmp1MB3d2ajAJFfIKYUL/vAv2A\"",
    "mtime": "2022-04-18T14:02:27.247Z",
    "path": "../public/sitemap.html"
  },
  "/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1d70-kZCO0kIHh3lHgCK1ALa09lUnUXc\"",
    "mtime": "2022-04-18T14:02:27.247Z",
    "path": "../public/sitemap.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"717f-6Kk9J5HZnumxp9LceebZtQclIH4\"",
    "mtime": "2022-04-18T14:02:27.247Z",
    "path": "../public/sitemap.xml"
  },
  "/_nuxt/Footer-4057a388.mjs": {
    "type": "application/javascript",
    "etag": "\"3cb-fTbJd0Oh3jpxF98fwu+HChMtcQ8\"",
    "mtime": "2022-04-18T14:02:27.243Z",
    "path": "../public/_nuxt/Footer-4057a388.mjs"
  },
  "/_nuxt/PostList-1b049d24.mjs": {
    "type": "application/javascript",
    "etag": "\"94c-cjHo06RX46kpz2JpHQUG6HPDo/w\"",
    "mtime": "2022-04-18T14:02:27.243Z",
    "path": "../public/_nuxt/PostList-1b049d24.mjs"
  },
  "/_nuxt/_cid_-0124306e.mjs": {
    "type": "application/javascript",
    "etag": "\"5bd-tZRxKS4f42t3sV0vfOn3qnsrBJo\"",
    "mtime": "2022-04-18T14:02:27.243Z",
    "path": "../public/_nuxt/_cid_-0124306e.mjs"
  },
  "/_nuxt/_pageIndex_-77bf8e2f.mjs": {
    "type": "application/javascript",
    "etag": "\"687-HKHF/Jl+Uwpr2+d/eDyU4lcWWrI\"",
    "mtime": "2022-04-18T14:02:27.243Z",
    "path": "../public/_nuxt/_pageIndex_-77bf8e2f.mjs"
  },
  "/_nuxt/_pageIndex_-ddf37b54.mjs": {
    "type": "application/javascript",
    "etag": "\"1ca-xqRbCjF9iKa7N7xeWg+2YUofKlk\"",
    "mtime": "2022-04-18T14:02:27.243Z",
    "path": "../public/_nuxt/_pageIndex_-ddf37b54.mjs"
  },
  "/_nuxt/_pageIndex_-e26a55a7.mjs": {
    "type": "application/javascript",
    "etag": "\"42e-G1L6G0DelIEljn65vscd367BBEg\"",
    "mtime": "2022-04-18T14:02:27.243Z",
    "path": "../public/_nuxt/_pageIndex_-e26a55a7.mjs"
  },
  "/_nuxt/admin-3730325b.mjs": {
    "type": "application/javascript",
    "etag": "\"640-g20XzQWypRCJ80TyRGDIk732yzg\"",
    "mtime": "2022-04-18T14:02:27.243Z",
    "path": "../public/_nuxt/admin-3730325b.mjs"
  },
  "/_nuxt/admin-fabeade7.mjs": {
    "type": "application/javascript",
    "etag": "\"128-mlJik6f4EkC2YSiYDlM7j/NN/Pc\"",
    "mtime": "2022-04-18T14:02:27.243Z",
    "path": "../public/_nuxt/admin-fabeade7.mjs"
  },
  "/_nuxt/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-18T14:02:27.243Z",
    "path": "../public/_nuxt/ads.txt"
  },
  "/_nuxt/asyncData-cff901b8.mjs": {
    "type": "application/javascript",
    "etag": "\"87f-5vFMBGVcx+YIDvmDuOy6KhgpsWw\"",
    "mtime": "2022-04-18T14:02:27.243Z",
    "path": "../public/_nuxt/asyncData-cff901b8.mjs"
  },
  "/_nuxt/auth-8fdda501.mjs": {
    "type": "application/javascript",
    "etag": "\"86-sagpWNvYJCE4RJaqNmVR/POp3a8\"",
    "mtime": "2022-04-18T14:02:27.243Z",
    "path": "../public/_nuxt/auth-8fdda501.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-18T14:02:27.243Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-02196ad5.mjs": {
    "type": "application/javascript",
    "etag": "\"6fb-o7z3DoyVTNuYbQKtq46QlMcB4nc\"",
    "mtime": "2022-04-18T14:02:27.243Z",
    "path": "../public/_nuxt/default-02196ad5.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-18T14:02:27.243Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-a3717a05.mjs": {
    "type": "application/javascript",
    "etag": "\"a80-9A70ZGUvnoCRXlH5U+Rq8VvDCyo\"",
    "mtime": "2022-04-18T14:02:27.239Z",
    "path": "../public/_nuxt/editor-a3717a05.mjs"
  },
  "/_nuxt/entry-f727c6b5.mjs": {
    "type": "application/javascript",
    "etag": "\"243316-lgKyM+vFBARoLIfU2I9HIokHahA\"",
    "mtime": "2022-04-18T14:02:27.239Z",
    "path": "../public/_nuxt/entry-f727c6b5.mjs"
  },
  "/_nuxt/entry.23b9d566.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"590ce-pmIiKipShHdoJEJCNLnwQMw28RY\"",
    "mtime": "2022-04-18T14:02:27.239Z",
    "path": "../public/_nuxt/entry.23b9d566.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-18T14:02:27.239Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-75f60675.mjs": {
    "type": "application/javascript",
    "etag": "\"39d-yVna1z94SGqeH+dvpg0hfh6P6F4\"",
    "mtime": "2022-04-18T14:02:27.239Z",
    "path": "../public/_nuxt/index-75f60675.mjs"
  },
  "/_nuxt/index-ab6094a7.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-je8ontmg1TEvsbdX37Tnx6k65ZE\"",
    "mtime": "2022-04-18T14:02:27.239Z",
    "path": "../public/_nuxt/index-ab6094a7.mjs"
  },
  "/_nuxt/index-cd611df1.mjs": {
    "type": "application/javascript",
    "etag": "\"347-U91oxKu8bpePzk66lgDZYM3p5SU\"",
    "mtime": "2022-04-18T14:02:27.235Z",
    "path": "../public/_nuxt/index-cd611df1.mjs"
  },
  "/_nuxt/index-dc51bcec.mjs": {
    "type": "application/javascript",
    "etag": "\"3cd-HdyxOxHava3rjH7Rrnxu32zSkSg\"",
    "mtime": "2022-04-18T14:02:27.235Z",
    "path": "../public/_nuxt/index-dc51bcec.mjs"
  },
  "/_nuxt/login-b812f7d9.mjs": {
    "type": "application/javascript",
    "etag": "\"5b5-4WuIGw3omk3CGOjaX5y6L2PZjQU\"",
    "mtime": "2022-04-18T14:02:27.235Z",
    "path": "../public/_nuxt/login-b812f7d9.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"11ff-HhVo1AZ+XlqHgpCSJkx8Yw2BmeM\"",
    "mtime": "2022-04-18T14:02:27.235Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-cea2cc8d.mjs": {
    "type": "application/javascript",
    "etag": "\"a06-5Qc7N9FngapUvSr3ucfSvp08XbE\"",
    "mtime": "2022-04-18T14:02:27.235Z",
    "path": "../public/_nuxt/post-list-cea2cc8d.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"bc-xlL27z2NKSXWtzK4pWzGJ8jnGUU\"",
    "mtime": "2022-04-18T14:02:27.235Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"5e10-ydmp1MB3d2ajAJFfIKYUL/vAv2A\"",
    "mtime": "2022-04-18T14:02:27.235Z",
    "path": "../public/_nuxt/sitemap.html"
  },
  "/_nuxt/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1d70-kZCO0kIHh3lHgCK1ALa09lUnUXc\"",
    "mtime": "2022-04-18T14:02:27.235Z",
    "path": "../public/_nuxt/sitemap.txt"
  },
  "/_nuxt/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"717f-6Kk9J5HZnumxp9LceebZtQclIH4\"",
    "mtime": "2022-04-18T14:02:27.235Z",
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
