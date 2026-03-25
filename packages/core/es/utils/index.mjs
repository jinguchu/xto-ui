import { computed as _, getCurrentInstance as A } from "vue";
const p = "x", I = "is-", $ = (e) => p + "-" + e, l = $, j = (e, t) => `${$(e)}__${t}`, R = j, w = (e, t, n) => `${$(e)}${t ? `__${t}` : ""}--${n}`, S = w, U = (e, t) => t ? `${I}${e}` : "", O = (e, t) => t === !1 ? "" : `${I}${e}`;
function q(e) {
  const t = e || p, n = (i = "") => t ? `${t}-${i}` : i;
  return {
    b: n,
    e: (i) => (x) => `${n(x)}__${i}`,
    m: (i) => (x) => `${n(x)}--${i}`,
    em: (i, x) => (h) => `${n(h)}__${i}--${x}`,
    is: O
  };
}
function G(e) {
  const t = p, n = `${t}-${e}`, s = (o = "") => o ? `${n}-${o}` : n, r = (o) => o ? `${n}__${o}` : "";
  return {
    namespace: t,
    prefix: n,
    b: s,
    e: r,
    m: (o) => o ? `${n}--${o}` : "",
    be: (o, c) => s(o) + (c ? `__${c}` : ""),
    bm: (o, c) => s(o) + (c ? `--${c}` : ""),
    em: (o, c) => r(o) + (c ? `--${c}` : ""),
    is: (o, c) => c === !1 ? "" : `${I}${o}`
  };
}
function H() {
  var n;
  const e = A(), t = ((n = e == null ? void 0 : e.type) == null ? void 0 : n.name) || "";
  return {
    prefix: p,
    name: t
  };
}
function J(e, t) {
  return {
    classList: _(() => {
      const s = [];
      return t && s.push(l(t)), e.size && s.push(l(t) + `--${e.size}`), e.type && s.push(l(t) + `--${e.type}`), e.disabled && s.push("is-disabled"), e.loading && s.push("is-loading"), s;
    })
  };
}
let d = 2e3;
const y = [], f = () => ({
  get current() {
    return d;
  },
  next: () => (d = d + 1, y.push(d), d),
  set: (t) => {
    d = t;
  }
}), T = 2e3, C = 1990, L = 1999, P = 2e3, M = 2e3, V = 2e3, K = () => f().next() + T, N = () => f().next() + C, Q = () => f().next() + L, W = () => f().next() + P, X = () => f().next() + M, Y = () => f().next() + V, k = {
  zIndex: 2e3,
  next() {
    return this.zIndex = this.zIndex + 1, this.zIndex;
  }
}, v = () => {
  d = 2e3, y.length = 0;
}, ee = () => [...y], g = (e) => e === void 0, Z = (e) => e === null, m = (e) => g(e) || Z(e), te = (e) => e === !0, ne = (e) => e === !1, se = (e) => Array.isArray(e) || typeof e == "string" ? e.length === 0 : typeof e == "object" && e !== null ? Object.keys(e).length === 0 : m(e), oe = (e) => !m(e), re = (e) => (t) => e(t), ce = (e) => () => e, ie = (e, t) => m(e) ? t : e, ue = (e) => Array.isArray(e) ? e : [e], D = (e) => Z(e) ? "null" : g(e) ? "undefined" : Object.prototype.toString.call(e).slice(8, -1).toLowerCase(), de = (e, t) => D(e) === t, a = (e) => {
  if (e === null || typeof e != "object") return !1;
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null;
}, z = (e, ...t) => {
  if (!t.length) return e;
  const n = t.shift();
  return a(e) && a(n) && Object.keys(n).forEach((s) => {
    const r = e[s], u = n[s];
    Array.isArray(r) && Array.isArray(u) ? e[s] = r.concat(u) : a(r) && a(u) ? e[s] = z(r, u) : e[s] = u;
  }), z(e, ...t);
}, b = (e) => Array.isArray(e) ? e.map(b) : a(e) ? Object.fromEntries(
  Object.entries(e).map(([t, n]) => [t, b(n)])
) : e, xe = (e, t = 300) => {
  let n = null;
  return (...s) => {
    n && clearTimeout(n), n = setTimeout(() => e(...s), t);
  };
}, fe = (e, t = 300) => {
  let n = 0;
  return (...s) => {
    const r = Date.now();
    r - n >= t && (n = r, e(...s));
  };
}, ae = (e) => {
  let t = !1, n;
  return (...s) => (t || (t = !0, n = e(...s)), n);
}, pe = () => {
}, le = (e) => e, Ie = (...e) => (t) => e.reduceRight((n, s) => s(n), t), $e = (...e) => (t) => e.reduce((n, s) => s(n), t), ye = (e, t) => {
  try {
    return e();
  } catch (n) {
    return typeof t == "function" ? t(n) : void 0;
  }
}, E = typeof window < "u", me = E && "ontouchstart" in window;
export {
  l as b,
  $ as block,
  ue as coerceToArray,
  Ie as compose,
  ce as constant,
  q as createNamespace,
  xe as debounce,
  b as deepClone,
  z as deepMerge,
  p as defaultNamespace,
  ie as defaultTo,
  M as drawerZIndex,
  R as e,
  j as element,
  D as getType,
  ee as getZIndexList,
  le as identity,
  O as is,
  E as isBrowser,
  oe as isDefined,
  se as isEmpty,
  ne as isFalse,
  m as isNil,
  Z as isNull,
  a as isPlainObject,
  me as isSupportTouch,
  te as isTrue,
  de as isType,
  g as isUndefined,
  L as loadingZIndex,
  S as m,
  C as messageZIndex,
  T as modalZIndex,
  w as modifier,
  X as nextDrawerZIndex,
  Q as nextLoadingZIndex,
  N as nextMessageZIndex,
  K as nextModalZIndex,
  W as nextPopoverZIndex,
  Y as nextTooltipZIndex,
  pe as noop,
  ae as once,
  $e as pipe,
  P as popoverZIndex,
  k as popupManage,
  v as resetZIndex,
  U as state,
  fe as throttle,
  V as tooltipZIndex,
  ye as tryCatch,
  re as unary,
  J as useClass,
  H as useComponentPrefix,
  G as useNamespace,
  f as useZIndex
};
