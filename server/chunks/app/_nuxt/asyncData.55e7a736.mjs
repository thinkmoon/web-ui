import { ref, onServerPrefetch, unref } from 'vue';
import { d as yn } from '../server.mjs';

const C = () => null;
function R(...i) {
  var p, m, h, v, D, _, P, w;
  const c = typeof i[i.length - 1] == "string" ? i.pop() : void 0;
  typeof i[0] != "string" && i.unshift(c);
  let [a, o, e = {}] = i;
  if (typeof a != "string")
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if (typeof o != "function")
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  e.server = (p = e.server) != null ? p : true, e.default = (m = e.default) != null ? m : C, e.defer && console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."), e.lazy = (v = (h = e.lazy) != null ? h : e.defer) != null ? v : false, e.initialCache = (D = e.initialCache) != null ? D : true;
  const r = yn(), f = () => (r.isHydrating || e.initialCache) && r.payload.data[a] !== void 0;
  r._asyncData[a] || (r._asyncData[a] = { data: ref(f() ? r.payload.data[a] : (P = (_ = e.default) == null ? void 0 : _.call(e)) != null ? P : null), pending: ref(!f()), error: ref((w = r.payload._errors[a]) != null ? w : null) });
  const t = { ...r._asyncData[a] };
  t.refresh = (u = {}) => r._asyncDataPromises[a] ? r._asyncDataPromises[a] : u._initial && f() ? r.payload.data[a] : (t.pending.value = true, r._asyncDataPromises[a] = new Promise((n, s) => {
    try {
      n(o(r));
    } catch (l) {
      s(l);
    }
  }).then((n) => {
    e.transform && (n = e.transform(n)), e.pick && (n = O(n, e.pick)), t.data.value = n, t.error.value = null;
  }).catch((n) => {
    var s, l;
    t.error.value = n, t.data.value = unref((l = (s = e.default) == null ? void 0 : s.call(e)) != null ? l : null);
  }).finally(() => {
    t.pending.value = false, r.payload.data[a] = t.data.value, t.error.value && (r.payload._errors[a] = true), delete r._asyncDataPromises[a];
  }), r._asyncDataPromises[a]);
  const b = () => t.refresh({ _initial: true });
  if (e.server !== false && r.payload.serverRendered) {
    const u = b();
    onServerPrefetch(() => u);
  }
  const d = Promise.resolve(r._asyncDataPromises[a]).then(() => t);
  return Object.assign(d, t), d;
}
function O(i, c) {
  const a = {};
  for (const o of c)
    a[o] = i[o];
  return a;
}

export { R };
//# sourceMappingURL=asyncData.55e7a736.mjs.map
