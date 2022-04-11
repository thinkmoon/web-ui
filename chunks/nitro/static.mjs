import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-11T01:21:06.741Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"58-OyI6/ZGOy+QNZmGpvj57rwO0O/A\"",
    "mtime": "2022-04-11T01:21:06.741Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"149a-B+AUa7vzGzFzTlnKr8WQmfcAXHQ\"",
    "mtime": "2022-04-11T01:21:06.741Z",
    "path": "../public/sitemap.txt"
  },
  "/_nuxt/404-5a471dde.mjs": {
    "type": "application/javascript",
    "etag": "\"134-GptCMK0Z41X35TanHTGGS4QOlRM\"",
    "mtime": "2022-04-11T01:21:06.737Z",
    "path": "../public/_nuxt/404-5a471dde.mjs"
  },
  "/_nuxt/Footer-f935e979.mjs": {
    "type": "application/javascript",
    "etag": "\"3cb-wCQF6j8QJonVh9OwaaI1nMseEPA\"",
    "mtime": "2022-04-11T01:21:06.737Z",
    "path": "../public/_nuxt/Footer-f935e979.mjs"
  },
  "/_nuxt/_cid_-c5ddbb4e.mjs": {
    "type": "application/javascript",
    "etag": "\"545-Nx1xFIz981XSQWvN6WMLkfiT6MU\"",
    "mtime": "2022-04-11T01:21:06.737Z",
    "path": "../public/_nuxt/_cid_-c5ddbb4e.mjs"
  },
  "/_nuxt/_pageIndex_-2b3ee924.mjs": {
    "type": "application/javascript",
    "etag": "\"96-bhoKESBkIlhaxtB1lwFWWuHhF5w\"",
    "mtime": "2022-04-11T01:21:06.737Z",
    "path": "../public/_nuxt/_pageIndex_-2b3ee924.mjs"
  },
  "/_nuxt/_pageIndex_-31beb20d.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-04-11T01:21:06.737Z",
    "path": "../public/_nuxt/_pageIndex_-31beb20d.mjs"
  },
  "/_nuxt/_pageIndex_-b3e8f64e.mjs": {
    "type": "application/javascript",
    "etag": "\"e31-ANNaza+NSurwg0/rBZbWzumBkeQ\"",
    "mtime": "2022-04-11T01:21:06.737Z",
    "path": "../public/_nuxt/_pageIndex_-b3e8f64e.mjs"
  },
  "/_nuxt/admin-93655edb.mjs": {
    "type": "application/javascript",
    "etag": "\"640-E50r6bzJfXgg4sz2t2LPfhtoAHA\"",
    "mtime": "2022-04-11T01:21:06.737Z",
    "path": "../public/_nuxt/admin-93655edb.mjs"
  },
  "/_nuxt/admin-deed109c.mjs": {
    "type": "application/javascript",
    "etag": "\"128-xGxTcsbqRLxC4klUnVKnWsHQYR8\"",
    "mtime": "2022-04-11T01:21:06.737Z",
    "path": "../public/_nuxt/admin-deed109c.mjs"
  },
  "/_nuxt/asyncData-51376d1e.mjs": {
    "type": "application/javascript",
    "etag": "\"878-+yPI0dDNj2Di+YyP13bQ4rKx+0s\"",
    "mtime": "2022-04-11T01:21:06.737Z",
    "path": "../public/_nuxt/asyncData-51376d1e.mjs"
  },
  "/_nuxt/auth-9d851936.mjs": {
    "type": "application/javascript",
    "etag": "\"86-jo9Iu8n9F7bgzqGAqq+7wV3UwLo\"",
    "mtime": "2022-04-11T01:21:06.737Z",
    "path": "../public/_nuxt/auth-9d851936.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-11T01:21:06.733Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-d37a1013.mjs": {
    "type": "application/javascript",
    "etag": "\"700-xKnAlvvgIT152bUAaQJfwmY8kwk\"",
    "mtime": "2022-04-11T01:21:06.733Z",
    "path": "../public/_nuxt/default-d37a1013.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-11T01:21:06.733Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-735c2f21.mjs": {
    "type": "application/javascript",
    "etag": "\"a80-JOhR1JIM/meCeQBsQujaSS8CmEQ\"",
    "mtime": "2022-04-11T01:21:06.733Z",
    "path": "../public/_nuxt/editor-735c2f21.mjs"
  },
  "/_nuxt/entry-f3276c89.mjs": {
    "type": "application/javascript",
    "etag": "\"242298-NDbCS669x4SIAmZkbUohym8J6XM\"",
    "mtime": "2022-04-11T01:21:06.733Z",
    "path": "../public/_nuxt/entry-f3276c89.mjs"
  },
  "/_nuxt/entry.f5695660.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a9f5-G0Oyvxu2oD9djNs6RJyd7ZlT8Ao\"",
    "mtime": "2022-04-11T01:21:06.729Z",
    "path": "../public/_nuxt/entry.f5695660.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-11T01:21:06.729Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-0ddd3cd2.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-MTOgbEM31R+feuiT3jMJfzuEuu0\"",
    "mtime": "2022-04-11T01:21:06.729Z",
    "path": "../public/_nuxt/index-0ddd3cd2.mjs"
  },
  "/_nuxt/index-32e1cd4c.mjs": {
    "type": "application/javascript",
    "etag": "\"39d-vj2TgGVvppF/8PbigyETtLSwCK4\"",
    "mtime": "2022-04-11T01:21:06.729Z",
    "path": "../public/_nuxt/index-32e1cd4c.mjs"
  },
  "/_nuxt/index-5c6166f0.mjs": {
    "type": "application/javascript",
    "etag": "\"347-oESWUuMni3fgEU/fiKVCC7rYbek\"",
    "mtime": "2022-04-11T01:21:06.725Z",
    "path": "../public/_nuxt/index-5c6166f0.mjs"
  },
  "/_nuxt/index-97f4274c.mjs": {
    "type": "application/javascript",
    "etag": "\"3cd-xVKW3ZB9JKZsg4h0r0cxrrEEFjg\"",
    "mtime": "2022-04-11T01:21:06.725Z",
    "path": "../public/_nuxt/index-97f4274c.mjs"
  },
  "/_nuxt/login-f49cb66f.mjs": {
    "type": "application/javascript",
    "etag": "\"584-Wc7Vgonr5ZOsmSSrGLUyMEoPjxs\"",
    "mtime": "2022-04-11T01:21:06.725Z",
    "path": "../public/_nuxt/login-f49cb66f.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1199-CcmznB1uabFzUE1FR8PxN6/sogY\"",
    "mtime": "2022-04-11T01:21:06.725Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-6d21ecd4.mjs": {
    "type": "application/javascript",
    "etag": "\"a06-1t4x+fpSjuG6152cJOd6LY5dxhg\"",
    "mtime": "2022-04-11T01:21:06.725Z",
    "path": "../public/_nuxt/post-list-6d21ecd4.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"58-OyI6/ZGOy+QNZmGpvj57rwO0O/A\"",
    "mtime": "2022-04-11T01:21:06.725Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"149a-B+AUa7vzGzFzTlnKr8WQmfcAXHQ\"",
    "mtime": "2022-04-11T01:21:06.725Z",
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
