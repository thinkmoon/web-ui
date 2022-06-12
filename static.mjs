import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/ads.js": {
    "type": "application/javascript",
    "etag": "\"2a6-QG3gIcUryNH3lTuW9EhtBAeMq38\"",
    "mtime": "2022-06-12T03:29:21.966Z",
    "path": "../public/ads.js"
  },
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-06-12T03:29:21.966Z",
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-06-12T03:29:21.966Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-rNrKs1nSkmU1PPE2uMSVSowftYg\"",
    "mtime": "2022-06-12T03:29:21.966Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"7e99-kyOMX0s2HpPcSVAmxcmZeh7RjIw\"",
    "mtime": "2022-06-12T03:29:21.962Z",
    "path": "../public/sitemap.xml"
  },
  "/nuxt-asset/404-6271d218.mjs": {
    "type": "application/javascript",
    "etag": "\"13c-eaimxeHoheUpwVowuDSKcoa/yBY\"",
    "mtime": "2022-06-12T03:29:21.962Z",
    "path": "../public/nuxt-asset/404-6271d218.mjs"
  },
  "/nuxt-asset/Footer-3dd58ce4.mjs": {
    "type": "application/javascript",
    "etag": "\"3e5-UnxHL/kGDB9iGW/1JYt+LmG9Z4s\"",
    "mtime": "2022-06-12T03:29:21.962Z",
    "path": "../public/nuxt-asset/Footer-3dd58ce4.mjs"
  },
  "/nuxt-asset/PostList-cb4d7779.mjs": {
    "type": "application/javascript",
    "etag": "\"9c4-u02AOg2SiSLoy8iTZKlR4NmQSiw\"",
    "mtime": "2022-06-12T03:29:21.962Z",
    "path": "../public/nuxt-asset/PostList-cb4d7779.mjs"
  },
  "/nuxt-asset/TagApi-0ac04931.mjs": {
    "type": "application/javascript",
    "etag": "\"85-tOi3CnuTzU/LKClUKkMdE0+KPbw\"",
    "mtime": "2022-06-12T03:29:21.962Z",
    "path": "../public/nuxt-asset/TagApi-0ac04931.mjs"
  },
  "/nuxt-asset/_cid_-518e69bc.mjs": {
    "type": "application/javascript",
    "etag": "\"7b9-YTRFocwuRnIz4wjpS/3fNib5QbQ\"",
    "mtime": "2022-06-12T03:29:21.962Z",
    "path": "../public/nuxt-asset/_cid_-518e69bc.mjs"
  },
  "/nuxt-asset/_pageIndex_-27b7ab33.mjs": {
    "type": "application/javascript",
    "etag": "\"62f-IpLXnNhZdLqvxO3Xvq21ceJWe7w\"",
    "mtime": "2022-06-12T03:29:21.962Z",
    "path": "../public/nuxt-asset/_pageIndex_-27b7ab33.mjs"
  },
  "/nuxt-asset/_pageIndex_-4cfc3b71.mjs": {
    "type": "application/javascript",
    "etag": "\"46f-SWwTcoDMlsA6h4umLFdrExh7ujc\"",
    "mtime": "2022-06-12T03:29:21.958Z",
    "path": "../public/nuxt-asset/_pageIndex_-4cfc3b71.mjs"
  },
  "/nuxt-asset/_pageIndex_-8706ad22.mjs": {
    "type": "application/javascript",
    "etag": "\"61e-eJ+XJ5Eo7SNJqLhhmdwcl4yskBk\"",
    "mtime": "2022-06-12T03:29:21.958Z",
    "path": "../public/nuxt-asset/_pageIndex_-8706ad22.mjs"
  },
  "/nuxt-asset/admin-7dc5992b.mjs": {
    "type": "application/javascript",
    "etag": "\"128-25L1w2zflILDhUl8w0gv3bCh6YU\"",
    "mtime": "2022-06-12T03:29:21.958Z",
    "path": "../public/nuxt-asset/admin-7dc5992b.mjs"
  },
  "/nuxt-asset/admin-ee186c4f.mjs": {
    "type": "application/javascript",
    "etag": "\"681-c73KcMjdDNfohMZWxbuarqGI558\"",
    "mtime": "2022-06-12T03:29:21.958Z",
    "path": "../public/nuxt-asset/admin-ee186c4f.mjs"
  },
  "/nuxt-asset/ads.js": {
    "type": "application/javascript",
    "etag": "\"2a6-QG3gIcUryNH3lTuW9EhtBAeMq38\"",
    "mtime": "2022-06-12T03:29:21.958Z",
    "path": "../public/nuxt-asset/ads.js"
  },
  "/nuxt-asset/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-06-12T03:29:21.958Z",
    "path": "../public/nuxt-asset/ads.txt"
  },
  "/nuxt-asset/asyncData-38b92481.mjs": {
    "type": "application/javascript",
    "etag": "\"875-2CpikaA7jD8obObBJEzODXrjr1s\"",
    "mtime": "2022-06-12T03:29:21.958Z",
    "path": "../public/nuxt-asset/asyncData-38b92481.mjs"
  },
  "/nuxt-asset/auth-e1847cfe.mjs": {
    "type": "application/javascript",
    "etag": "\"86-N6XgOcxkYx9RvdO/hjKi+LJfvtg\"",
    "mtime": "2022-06-12T03:29:21.958Z",
    "path": "../public/nuxt-asset/auth-e1847cfe.mjs"
  },
  "/nuxt-asset/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-06-12T03:29:21.954Z",
    "path": "../public/nuxt-asset/background.36a7be78.jpg"
  },
  "/nuxt-asset/default-10e5eaa9.mjs": {
    "type": "application/javascript",
    "etag": "\"ca3-pkwKnt+4LJlnR7wGuVaWotnDCRY\"",
    "mtime": "2022-06-12T03:29:21.954Z",
    "path": "../public/nuxt-asset/default-10e5eaa9.mjs"
  },
  "/nuxt-asset/default.86255851.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"282-PAVLCFenZezyHfS8aRp2haDZZ/4\"",
    "mtime": "2022-06-12T03:29:21.954Z",
    "path": "../public/nuxt-asset/default.86255851.css"
  },
  "/nuxt-asset/editor-cb84eaae.mjs": {
    "type": "application/javascript",
    "etag": "\"c33-btyAB7kcBX+Rv7Ksqd4Wwgv3f5s\"",
    "mtime": "2022-06-12T03:29:21.954Z",
    "path": "../public/nuxt-asset/editor-cb84eaae.mjs"
  },
  "/nuxt-asset/entry-a0a9c288.mjs": {
    "type": "application/javascript",
    "etag": "\"25b3b3-ME5/pe7sHCK1vQqr70qd0l3kB8I\"",
    "mtime": "2022-06-12T03:29:21.950Z",
    "path": "../public/nuxt-asset/entry-a0a9c288.mjs"
  },
  "/nuxt-asset/entry.fedc1be4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5c326-JyRjQYC6GYRsDgz10Zo/pim0eUg\"",
    "mtime": "2022-06-12T03:29:21.946Z",
    "path": "../public/nuxt-asset/entry.fedc1be4.css"
  },
  "/nuxt-asset/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-06-12T03:29:21.946Z",
    "path": "../public/nuxt-asset/favicon.ico"
  },
  "/nuxt-asset/index-3ceff8c5.mjs": {
    "type": "application/javascript",
    "etag": "\"3c4-SH4LfkmQ8Sh1ewqyHUpWXfLyB6s\"",
    "mtime": "2022-06-12T03:29:21.946Z",
    "path": "../public/nuxt-asset/index-3ceff8c5.mjs"
  },
  "/nuxt-asset/index-6b7d0274.mjs": {
    "type": "application/javascript",
    "etag": "\"3c1-TCWm6sHWX7x4RfU6xyYcreytGzM\"",
    "mtime": "2022-06-12T03:29:21.946Z",
    "path": "../public/nuxt-asset/index-6b7d0274.mjs"
  },
  "/nuxt-asset/index-a5a21114.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-6bzXmQGTJoImxmuMSCAF5z42bR0\"",
    "mtime": "2022-06-12T03:29:21.942Z",
    "path": "../public/nuxt-asset/index-a5a21114.mjs"
  },
  "/nuxt-asset/index-a7781c56.mjs": {
    "type": "application/javascript",
    "etag": "\"358-iJbYD8VDpRuFl2dbEcKK5BWJ04I\"",
    "mtime": "2022-06-12T03:29:21.942Z",
    "path": "../public/nuxt-asset/index-a7781c56.mjs"
  },
  "/nuxt-asset/login-bf2de25e.mjs": {
    "type": "application/javascript",
    "etag": "\"5f4-5BC13ekyKLDlZoSwWHzuGLg1OEA\"",
    "mtime": "2022-06-12T03:29:21.942Z",
    "path": "../public/nuxt-asset/login-bf2de25e.mjs"
  },
  "/nuxt-asset/manifest.json": {
    "type": "application/json",
    "etag": "\"13c3-LBy+lWvC1Ygjp9KQD0v2ceOgkN8\"",
    "mtime": "2022-06-12T03:29:21.942Z",
    "path": "../public/nuxt-asset/manifest.json"
  },
  "/nuxt-asset/post-list-8ebd2004.mjs": {
    "type": "application/javascript",
    "etag": "\"a1b-ZJzT9mTKZCVJkTAE3jWMFRzjAWo\"",
    "mtime": "2022-06-12T03:29:21.942Z",
    "path": "../public/nuxt-asset/post-list-8ebd2004.mjs"
  },
  "/nuxt-asset/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-rNrKs1nSkmU1PPE2uMSVSowftYg\"",
    "mtime": "2022-06-12T03:29:21.942Z",
    "path": "../public/nuxt-asset/robots.txt"
  },
  "/nuxt-asset/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"7e99-kyOMX0s2HpPcSVAmxcmZeh7RjIw\"",
    "mtime": "2022-06-12T03:29:21.942Z",
    "path": "../public/nuxt-asset/sitemap.xml"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));
function readAsset (id) {
  return promises.readFile(resolve(mainDir, assets[id].path)).catch(() => {})
}

const publicAssetBases = ["/nuxt-asset"];

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
