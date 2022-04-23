import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-23T12:58:29.014Z",
    "path": "../public/ads.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-23T12:58:29.014Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-23T12:58:29.014Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"8450-kBmbAfDCzt1pi/E3Kk1PRwG+ecQ\"",
    "mtime": "2022-04-23T12:58:29.014Z",
    "path": "../public/sitemap.xml"
  },
  "/_nuxt/404-b111592d.mjs": {
    "type": "application/javascript",
    "etag": "\"134-U/XU8WW3bZPRYTUxny0sra8w6ew\"",
    "mtime": "2022-04-23T12:58:29.010Z",
    "path": "../public/_nuxt/404-b111592d.mjs"
  },
  "/_nuxt/Footer-9d19da77.mjs": {
    "type": "application/javascript",
    "etag": "\"3da-T+sdPrWO7glhts9kXLd/u+fL1Cw\"",
    "mtime": "2022-04-23T12:58:29.010Z",
    "path": "../public/_nuxt/Footer-9d19da77.mjs"
  },
  "/_nuxt/PostList-8d0fedd2.mjs": {
    "type": "application/javascript",
    "etag": "\"94c-6SPx/RMetRaoCFj7o9cAc1OjSng\"",
    "mtime": "2022-04-23T12:58:29.010Z",
    "path": "../public/_nuxt/PostList-8d0fedd2.mjs"
  },
  "/_nuxt/TagApi-3d81159d.mjs": {
    "type": "application/javascript",
    "etag": "\"85-ksAOBEL6cI4UQhfDIgz26MrcYTk\"",
    "mtime": "2022-04-23T12:58:29.010Z",
    "path": "../public/_nuxt/TagApi-3d81159d.mjs"
  },
  "/_nuxt/_cid_-ab9fd815.mjs": {
    "type": "application/javascript",
    "etag": "\"5bb-gZl4vH5oLgLYcxI594YY1/0mkmU\"",
    "mtime": "2022-04-23T12:58:29.010Z",
    "path": "../public/_nuxt/_cid_-ab9fd815.mjs"
  },
  "/_nuxt/_pageIndex_-4d22affa.mjs": {
    "type": "application/javascript",
    "etag": "\"67f-i8ikkr0yzy3cC7jnOhrCzCh6qyM\"",
    "mtime": "2022-04-23T12:58:29.010Z",
    "path": "../public/_nuxt/_pageIndex_-4d22affa.mjs"
  },
  "/_nuxt/_pageIndex_-567b2572.mjs": {
    "type": "application/javascript",
    "etag": "\"45a-fEChTjASppLRjKoS1rm4meM4lKU\"",
    "mtime": "2022-04-23T12:58:29.010Z",
    "path": "../public/_nuxt/_pageIndex_-567b2572.mjs"
  },
  "/_nuxt/_pageIndex_-c7faf438.mjs": {
    "type": "application/javascript",
    "etag": "\"609-APCTITLUlesMY8xRt+87WD47Lh0\"",
    "mtime": "2022-04-23T12:58:29.010Z",
    "path": "../public/_nuxt/_pageIndex_-c7faf438.mjs"
  },
  "/_nuxt/admin-03118a6e.mjs": {
    "type": "application/javascript",
    "etag": "\"128-xMUrjjmu9bXFv0UdhVdqFrTVMUM\"",
    "mtime": "2022-04-23T12:58:29.010Z",
    "path": "../public/_nuxt/admin-03118a6e.mjs"
  },
  "/_nuxt/admin-85ccf427.mjs": {
    "type": "application/javascript",
    "etag": "\"646-YXanDA7HHC4Exqp1PDs24ZFN1uQ\"",
    "mtime": "2022-04-23T12:58:29.006Z",
    "path": "../public/_nuxt/admin-85ccf427.mjs"
  },
  "/_nuxt/ads.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-S2QoHSLwjt3ITMCHGGdeZhacB8k\"",
    "mtime": "2022-04-23T12:58:29.006Z",
    "path": "../public/_nuxt/ads.txt"
  },
  "/_nuxt/asyncData-9a4f5136.mjs": {
    "type": "application/javascript",
    "etag": "\"87f-hEF1PEmcJn7Hy8MK5IhvaRoo5JE\"",
    "mtime": "2022-04-23T12:58:29.006Z",
    "path": "../public/_nuxt/asyncData-9a4f5136.mjs"
  },
  "/_nuxt/auth-56535e43.mjs": {
    "type": "application/javascript",
    "etag": "\"86-3i4vf/QoAtfQbU9rGLH1Ojjq7Rk\"",
    "mtime": "2022-04-23T12:58:29.006Z",
    "path": "../public/_nuxt/auth-56535e43.mjs"
  },
  "/_nuxt/background.36a7be78.jpg": {
    "type": "image/jpeg",
    "etag": "\"b878d-1RGi4hRSqtRLcB3201BXKyn3WRg\"",
    "mtime": "2022-04-23T12:58:29.006Z",
    "path": "../public/_nuxt/background.36a7be78.jpg"
  },
  "/_nuxt/default-471004fc.mjs": {
    "type": "application/javascript",
    "etag": "\"71b-hiFAOD9NKG8sbmAB9Lr/Rsp7NY0\"",
    "mtime": "2022-04-23T12:58:29.006Z",
    "path": "../public/_nuxt/default-471004fc.mjs"
  },
  "/_nuxt/default.1c2cafb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d-7KPr49a6gB0YLIoT516cS/stomM\"",
    "mtime": "2022-04-23T12:58:29.006Z",
    "path": "../public/_nuxt/default.1c2cafb9.css"
  },
  "/_nuxt/editor-ab0b85f7.mjs": {
    "type": "application/javascript",
    "etag": "\"a89-fzwcvS6Zg+bbiuS5fnlMxemnVF0\"",
    "mtime": "2022-04-23T12:58:29.002Z",
    "path": "../public/_nuxt/editor-ab0b85f7.mjs"
  },
  "/_nuxt/entry-5f331abc.mjs": {
    "type": "application/javascript",
    "etag": "\"244190-GD69Si2jqJRwVg08oUewV8L9SfY\"",
    "mtime": "2022-04-23T12:58:29.002Z",
    "path": "../public/_nuxt/entry-5f331abc.mjs"
  },
  "/_nuxt/entry.1087a270.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a278-0dDKN2S255IVCrKZDW4VNQyBmSM\"",
    "mtime": "2022-04-23T12:58:28.998Z",
    "path": "../public/_nuxt/entry.1087a270.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-04-23T12:58:28.998Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-39ad350b.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-LOSao4uyqyooNUK8aDJQ68NjzXY\"",
    "mtime": "2022-04-23T12:58:28.998Z",
    "path": "../public/_nuxt/index-39ad350b.mjs"
  },
  "/_nuxt/index-44bb9bcd.mjs": {
    "type": "application/javascript",
    "etag": "\"349-gHPPMhDP0cbjd1quWijKdtQ3sqI\"",
    "mtime": "2022-04-23T12:58:28.998Z",
    "path": "../public/_nuxt/index-44bb9bcd.mjs"
  },
  "/_nuxt/index-6d1b5b43.mjs": {
    "type": "application/javascript",
    "etag": "\"3b2-BRkqof5dj53JpgnTUXzoyuVnilA\"",
    "mtime": "2022-04-23T12:58:28.998Z",
    "path": "../public/_nuxt/index-6d1b5b43.mjs"
  },
  "/_nuxt/index-eae4d088.mjs": {
    "type": "application/javascript",
    "etag": "\"3b5-/FZCOyTnCUr68yq+Tk6IS9aalcU\"",
    "mtime": "2022-04-23T12:58:28.998Z",
    "path": "../public/_nuxt/index-eae4d088.mjs"
  },
  "/_nuxt/login-bbb23f68.mjs": {
    "type": "application/javascript",
    "etag": "\"5b7-rMt75xec8Dgr9jCibr5bXXE2yXk\"",
    "mtime": "2022-04-23T12:58:28.998Z",
    "path": "../public/_nuxt/login-bbb23f68.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"13c3-pCSNFxVgGRlO3ZGohYJ/kWuCcpM\"",
    "mtime": "2022-04-23T12:58:28.994Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-96d3007b.mjs": {
    "type": "application/javascript",
    "etag": "\"a08-6ASvdY2lEu/MyfLWGxKjbTazw5k\"",
    "mtime": "2022-04-23T12:58:28.994Z",
    "path": "../public/_nuxt/post-list-96d3007b.mjs"
  },
  "/_nuxt/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-85H3mu6q9EHfOOIr7+EEaEdNNlE\"",
    "mtime": "2022-04-23T12:58:28.994Z",
    "path": "../public/_nuxt/robots.txt"
  },
  "/_nuxt/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"8450-kBmbAfDCzt1pi/E3Kk1PRwG+ecQ\"",
    "mtime": "2022-04-23T12:58:28.994Z",
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
