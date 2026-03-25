import { defineComponent as i, computed as l, provide as w, openBlock as c, createElementBlock as d, normalizeClass as p, renderSlot as u, normalizeStyle as f, unref as g, inject as _, createBlock as y, resolveDynamicComponent as x, withCtx as v } from "vue";
import { useNamespace as h } from "@xto/core";
const X = /* @__PURE__ */ i({
  name: "XContainer",
  __name: "index",
  props: {
    direction: { default: "vertical" }
  },
  setup(a) {
    const t = a, e = h("container"), r = l(() => [
      e.b(),
      e.is("flex", t.direction === "vertical")
    ]);
    return w("container", {
      direction: t.direction
    }), (o, s) => (c(), d("div", {
      class: p(r.value)
    }, [
      u(o.$slots, "default")
    ], 2));
  }
}), A = /* @__PURE__ */ i({
  name: "XHeader",
  __name: "index",
  props: {
    height: { default: 60 }
  },
  setup(a) {
    const t = a, e = h("header"), r = l(() => ({
      height: typeof t.height == "number" ? `${t.height}px` : t.height
    }));
    return (o, s) => (c(), d("header", {
      class: p(g(e).b()),
      style: f(r.value)
    }, [
      u(o.$slots, "default")
    ], 6));
  }
}), R = /* @__PURE__ */ i({
  name: "XAside",
  __name: "index",
  props: {
    width: { default: 200 }
  },
  setup(a) {
    const t = a, e = h("aside"), r = l(() => ({
      width: typeof t.width == "number" ? `${t.width}px` : t.width
    }));
    return (o, s) => (c(), d("aside", {
      class: p(g(e).b()),
      style: f(r.value)
    }, [
      u(o.$slots, "default")
    ], 6));
  }
}), j = /* @__PURE__ */ i({
  name: "XMain",
  __name: "index",
  props: {
    padding: { default: 20 }
  },
  setup(a) {
    const t = a, e = _("container", { direction: "vertical" }), r = (e == null ? void 0 : e.direction) || "vertical", o = l(() => ({
      padding: typeof t.padding == "number" ? `${t.padding}px` : t.padding,
      flex: r === "vertical" ? 1 : "auto"
    }));
    return (s, n) => (c(), d("main", {
      class: "x-main",
      style: f(o.value)
    }, [
      u(s.$slots, "default")
    ], 4));
  }
}), L = /* @__PURE__ */ i({
  name: "XFooter",
  __name: "index",
  props: {
    height: { default: 60 }
  },
  setup(a) {
    const t = a, e = h("footer"), r = l(() => ({
      height: typeof t.height == "number" ? `${t.height}px` : t.height
    }));
    return (o, s) => (c(), d("footer", {
      class: p(g(e).b()),
      style: f(r.value)
    }, [
      u(o.$slots, "default")
    ], 6));
  }
}), k = /* @__PURE__ */ i({
  name: "XRow",
  __name: "Row",
  props: {
    gutter: { default: 0 },
    justify: { default: "start" },
    align: { default: "top" },
    tag: { default: "div" }
  },
  setup(a) {
    const t = a, e = h("row"), r = l(() => {
      const s = t.gutter;
      return Array.isArray(s) ? {
        marginLeft: `-${s[0] / 2}px`,
        marginRight: `-${s[0] / 2}px`,
        rowGap: `${s[1]}px`
      } : s > 0 ? {
        marginLeft: `-${s / 2}px`,
        marginRight: `-${s / 2}px`
      } : {};
    }), o = l(() => [
      e.b(),
      e.is(`justify-${t.justify}`),
      e.is(`align-${t.align}`)
    ]);
    return (s, n) => (c(), y(x(a.tag), {
      class: p(o.value),
      style: f(r.value)
    }, {
      default: v(() => [
        u(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), B = /* @__PURE__ */ i({
  name: "XCol",
  __name: "Col",
  props: {
    span: { default: 24 },
    offset: { default: 0 },
    push: { default: 0 },
    pull: { default: 0 },
    tag: { default: "div" }
  },
  setup(a) {
    const t = a, e = _("x-row", { gutter: 0 }), r = (e == null ? void 0 : e.gutter) || 0, o = l(() => {
      const n = {}, m = Array.isArray(r) ? r[0] : r;
      if (m > 0) {
        const $ = m / 2;
        n.paddingLeft = `${$}px`, n.paddingRight = `${$}px`;
      }
      return t.span && (n.flex = `0 0 ${t.span / 24 * 100}%`), t.offset && (n.marginLeft = `${t.offset / 24 * 100}%`), t.push && (n.left = `${t.push / 24 * 100}%`), t.pull && (n.right = `${t.pull / 24 * 100}%`), n;
    }), s = l(() => {
      const n = [];
      return t.span && n.push(`x-col-${t.span}`), t.offset && n.push(`x-col-offset-${t.offset}`), t.push && n.push(`x-col-push-${t.push}`), t.pull && n.push(`x-col-pull-${t.pull}`), n;
    });
    return (n, m) => (c(), y(x(a.tag), {
      class: p(s.value),
      style: f(o.value)
    }, {
      default: v(() => [
        u(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
export {
  R as Aside,
  B as Col,
  X as Container,
  L as Footer,
  A as Header,
  j as Main,
  k as Row
};
