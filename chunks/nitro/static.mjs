import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/ads.js": {
    "type": "application/javascript",
    "etag": "\"257-8FDNVwH9cijzn/eXCsaai6acw/M\"",
    "mtime": "2022-05-08T11:06:13.195Z",
    "path": "../public/ads.js"
  },
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-05-08T11:06:13.195Z",
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-05-08T11:06:13.195Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4e-rNrKs1nSkmU1PPE2uMSVSowftYg\"",
    "mtime": "2022-05-08T11:06:13.195Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"7e99-kyOMX0s2HpPcSVAmxcmZeh7RjIw\"",
    "mtime": "2022-05-08T11:06:13.195Z",
    "path": "../public/sitemap.xml"
  },
  "/_nuxt/404-0c215052.mjs": {
    "type": "application/javascript",
    "etag": "\"134-B1eJklTrQfYPhgQSKNbUUdFlnnY\"",
    "mtime": "2022-05-08T11:06:13.195Z",
    "path": "../public/_nuxt/404-0c215052.mjs"
  },
  "/_nuxt/Footer-39451558.mjs": {
    "type": "application/javascript",
    "etag": "\"3da-onoSl6hSRnykVZc37ySen0v6W+Q\"",
    "mtime": "2022-05-08T11:06:13.195Z",
    "path": "../public/_nuxt/Footer-39451558.mjs"
  },
  "/_nuxt/PostList-693c3f84.mjs": {
    "type": "application/javascript",
    "etag": "\"94c-1JTP1uC3R8xuL1MiiBcKo1ed9/w\"",
    "mtime": "2022-05-08T11:06:13.195Z",
    "path": "../public/_nuxt/PostList-693c3f84.mjs"
  },
  "/_nuxt/TagApi-b908df3a.mjs": {
    "type": "application/javascript",
    "etag": "\"85-a5R2wzhhmLSj6e0SGRJw1allOgU\"",
    "mtime": "2022-05-08T11:06:13.191Z",
    "path": "../public/_nuxt/TagApi-b908df3a.mjs"
  },
  "/_nuxt/_cid_-40efc3b3.mjs": {
    "type": "application/javascript",
    "etag": "\"5bb-QvWSIBQNT9hrqU9RQp01KDkkvfw\"",
    "mtime": "2022-05-08T11:06:13.191Z",
    "path": "../public/_nuxt/_cid_-40efc3b3.mjs"
  },
  "/_nuxt/_pageIndex_-08429fca.mjs": {
    "type": "application/javascript",
    "etag": "\"609-MiFnB1pR0M/QKwRDpN5wKgpk5Yk\"",
    "mtime": "2022-05-08T11:06:13.191Z",
    "path": "../public/_nuxt/_pageIndex_-08429fca.mjs"
  },
  "/_nuxt/_pageIndex_-38aaa266.mjs": {
    "type": "application/javascript",
    "etag": "\"45a-xsN7kN2xBUpFCrPteVRoOJ4WSF0\"",
    "mtime": "2022-05-08T11:06:13.191Z",
    "path": "../public/_nuxt/_pageIndex_-38aaa266.mjs"
  },
  "/_nuxt/_pageIndex_-4617af3f.mjs": {
    "type": "application/javascript",
    "etag": "\"7a0-aV2tKY6QOO8T8ufcFHOi7zAVzRs\"",
    "mtime": "2022-05-08T11:06:13.191Z",
    "path": "../public/_nuxt/_pageIndex_-4617af3f.mjs"
  },
  "/_nuxt/admin-1ee1b85d.mjs": {
    "type": "application/javascript",
    "etag": "\"128-u/zW/WoLfMIknsxEB7cvVmCh8/U\"",
    "mtime": "2022-05-08T11:06:13.191Z",
    "path": "../public/_nuxt/admin-1ee1b85d.mjs"
  },
  "/_nuxt/admin-f89c7533.mjs": {
    "type": "application/javascript",
    "etag": "\"646-Y+BVlbL0oh5q3bJeE8F/NOxdPog\"",
    "mtime": "2022-05-08T11:06:13.191Z",
    "path": "../public/_nuxt/admin-f89c7533.mjs"
  },
  "/_nuxt/asyncData-b0244fb3.mjs": {
    "type": "application/javascript",
    "etag": "\"89e-Td0dnhmi8k/lRJLDrsHOxSN1Y3c\"",
    "mtime": "2022-05-08T11:06:13.191Z",
    "path": "../public/_nuxt/asyncData-b0244fb3.mjs"
  },
  "/_nuxt/auth-f948a8cb.mjs": {
    "type": "application/javascript",
    "etag": "\"86-4r1A5WZJ8Atoj2NPtqXPFsGqteY\"",
    "mtime": "2022-05-08T11:06:13.191Z",
    "path": "../public/_nuxt/auth-f948a8cb.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-05-08T11:06:13.187Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-ab4b1d95.mjs": {
    "type": "application/javascript",
    "etag": "\"71d-s9yBzf5ZOPPvFuz4nzHEokeHi0w\"",
    "mtime": "2022-05-08T11:06:13.187Z",
    "path": "../public/_nuxt/default-ab4b1d95.mjs"
  },
  "/_nuxt/default.8dc03fb7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7itp67EfnoBfWZaWOJHA4JvjbOk\"",
    "mtime": "2022-05-08T11:06:13.187Z",
    "path": "../public/_nuxt/default.8dc03fb7.css"
  },
  "/_nuxt/editor-3321b87d.mjs": {
    "type": "application/javascript",
    "etag": "\"a89-Gnaranis+agHK2aW10059wsRpS0\"",
    "mtime": "2022-05-08T11:06:13.187Z",
    "path": "../public/_nuxt/editor-3321b87d.mjs"
  },
  "/_nuxt/entry-4033bfcf.mjs": {
    "type": "application/javascript",
    "etag": "\"2440f7-kC82DbCsRJ0X1WMIzAabhynuaLo\"",
    "mtime": "2022-05-08T11:06:13.187Z",
    "path": "../public/_nuxt/entry-4033bfcf.mjs"
  },
  "/_nuxt/entry.7e762317.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a44e-EkcMtPyXNVvVFR90tUfqKVS1I+Y\"",
    "mtime": "2022-05-08T11:06:13.183Z",
    "path": "../public/_nuxt/entry.7e762317.css"
  },
  "/_nuxt/index-12cec95d.mjs": {
    "type": "application/javascript",
    "etag": "\"3b0-p9TDXwcn9LofA9fbaf7n6yfiR3k\"",
    "mtime": "2022-05-08T11:06:13.183Z",
    "path": "../public/_nuxt/index-12cec95d.mjs"
  },
  "/_nuxt/index-b882dfe7.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-DYogs1m9TbDHHXuh11WdpwB7pPU\"",
    "mtime": "2022-05-08T11:06:13.183Z",
    "path": "../public/_nuxt/index-b882dfe7.mjs"
  },
  "/_nuxt/index-dbca3f00.mjs": {
    "type": "application/javascript",
    "etag": "\"3b2-895EtO1dU83a+h0h4YEXe8mHIS4\"",
    "mtime": "2022-05-08T11:06:13.183Z",
    "path": "../public/_nuxt/index-dbca3f00.mjs"
  },
  "/_nuxt/index-dc59a107.mjs": {
    "type": "application/javascript",
    "etag": "\"349-0ZO9S0ITGsWFWO/g717yHlYmSCQ\"",
    "mtime": "2022-05-08T11:06:13.179Z",
    "path": "../public/_nuxt/index-dc59a107.mjs"
  },
  "/_nuxt/login-d8f7e58b.mjs": {
    "type": "application/javascript",
    "etag": "\"5b7-AqRIJxsMWHUgRJNWTrDYdoDJKLk\"",
    "mtime": "2022-05-08T11:06:13.179Z",
    "path": "../public/_nuxt/login-d8f7e58b.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"13c3-P2BhRif5mt2TqADy6ipL0Jf7lRw\"",
    "mtime": "2022-05-08T11:06:13.179Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-93b150a9.mjs": {
    "type": "application/javascript",
    "etag": "\"a08-CYbfaLKA40P9oLP8frM35wtT7uY\"",
    "mtime": "2022-05-08T11:06:13.179Z",
    "path": "../public/_nuxt/post-list-93b150a9.mjs"
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
