import { defineComponent as $, ref as x, watch as E, nextTick as L, computed as g, onMounted as R, onUnmounted as Y, provide as Z, openBlock as i, createElementBlock as y, normalizeClass as c, createVNode as z, unref as d, withCtx as G, createBlock as S, createCommentVNode as w, renderSlot as P, createElementVNode as l, toDisplayString as _, createStaticVNode as U } from "vue";
import { useVueFlow as D, VueFlow as K, useNode as h, Position as N, Handle as C } from "@vue-flow/core";
import { Controls as j } from "@vue-flow/controls";
import { MiniMap as q } from "@vue-flow/minimap";
import { Background as Q } from "@vue-flow/background";
import { useNamespace as X } from "@xto/core";
const ge = /* @__PURE__ */ $({
  name: "XFlowEditor",
  __name: "index",
  props: {
    nodes: { default: () => [] },
    edges: { default: () => [] },
    showMinimap: { type: Boolean, default: !0 },
    showControls: { type: Boolean, default: !0 },
    showBackground: { type: Boolean, default: !0 },
    backgroundType: { default: "dots" },
    backgroundColor: { default: "#f5f5f5" },
    editable: { type: Boolean, default: !0 },
    selectable: { type: Boolean, default: !0 },
    connectable: { type: Boolean, default: !0 },
    draggable: { type: Boolean, default: !0 },
    zoomable: { type: Boolean, default: !0 },
    pannable: { type: Boolean, default: !0 },
    minZoom: { default: 0.1 },
    maxZoom: { default: 4 },
    nodeTypes: {},
    edgeType: { default: "default" },
    edgeAnimated: { type: Boolean, default: !1 }
  },
  emits: ["update:nodes", "update:edges", "node-click", "node-dblclick", "node-drag-stop", "edge-click", "connect", "pane-click", "pane-ready"],
  setup(a, { expose: k, emit: r }) {
    const t = a, e = r, u = X("flow-editor"), { onConnect: f, onNodeClick: s, onNodeDoubleClick: n, onNodeDragStop: p, onEdgeClick: J, onPaneClick: O, onPaneReady: m, fitView: T } = D(), V = x([]), B = x([]);
    let M = !1, v = !1;
    E(() => t.nodes, (o) => {
      v || !o || o.length === 0 || (V.value = JSON.parse(JSON.stringify(o)));
    }, { immediate: !0, deep: !0 }), E(() => t.edges, (o) => {
      v || !o || o.length === 0 || (B.value = JSON.parse(JSON.stringify(o)));
    }, { immediate: !0, deep: !0 }), m(() => {
      M = !0, L(() => {
        T(), e("pane-ready");
      });
    });
    const F = (o) => o.source === o.target ? !1 : !B.value.some((b) => b.source === o.source && b.target === o.target), A = g(() => [u.b(), u.is("editable", t.editable)]);
    f((o) => {
      e("connect", o);
    }), s((o) => e("node-click", o.node, o.event)), n((o) => e("node-dblclick", o.node, o.event)), p((o) => e("node-drag-stop", o.node, o.event)), J((o) => e("edge-click", o.edge, o.event)), O((o) => e("pane-click", o.event)), E(V, (o) => {
      !M || v || (v = !0, e("update:nodes", JSON.parse(JSON.stringify(o))), L(() => {
        v = !1;
      }));
    }, { deep: !0 }), E(B, (o) => {
      !M || v || (v = !0, e("update:edges", JSON.parse(JSON.stringify(o))), L(() => {
        v = !1;
      }));
    }, { deep: !0 });
    const I = (o) => {
    };
    return R(() => window.addEventListener("keydown", I)), Y(() => window.removeEventListener("keydown", I)), Z("flow-editor", { editable: t.editable, fitView: T }), k({ fitView: T, isValidConnection: F }), (o, b) => (i(), y("div", {
      class: c(A.value),
      style: { width: "100%", height: "100%" }
    }, [
      z(d(K), {
        nodes: V.value,
        "onUpdate:nodes": b[0] || (b[0] = (H) => V.value = H),
        edges: B.value,
        "onUpdate:edges": b[1] || (b[1] = (H) => B.value = H),
        "node-types": t.nodeTypes,
        "nodes-connectable": t.connectable && t.editable,
        "nodes-draggable": t.draggable && t.editable,
        "nodes-selectable": t.selectable,
        "zoom-on-scroll": t.zoomable,
        "pan-on-scroll": t.pannable,
        "min-zoom": t.minZoom,
        "max-zoom": t.maxZoom,
        "fit-view-on-init": !0,
        "is-valid-connection": F,
        "default-edge-type": t.edgeType,
        "elevate-edges-on-select": !0
      }, {
        default: G(() => [
          t.showControls ? (i(), S(d(j), { key: 0 })) : w("", !0),
          t.showMinimap ? (i(), S(d(q), { key: 1 })) : w("", !0),
          t.showBackground ? (i(), S(d(Q), {
            key: 2,
            variant: t.backgroundType,
            color: t.backgroundColor
          }, null, 8, ["variant", "color"])) : w("", !0),
          P(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["nodes", "edges", "node-types", "nodes-connectable", "nodes-draggable", "nodes-selectable", "zoom-on-scroll", "pan-on-scroll", "min-zoom", "max-zoom", "default-edge-type"])
    ], 2));
  }
}), ve = /* @__PURE__ */ $({
  name: "XFlowNode",
  __name: "index",
  props: {
    title: { default: "节点" },
    description: { default: "" },
    icon: { default: "" },
    color: { default: "default" },
    showInputHandle: { type: Boolean, default: !0 },
    showOutputHandle: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    data: { default: () => ({}) }
  },
  emits: ["click", "dblclick"],
  setup(a, { emit: k }) {
    const r = a, t = k, e = X("flow-node"), { id: u, selected: f } = h(), s = x(f), n = g(() => [
      e.b(),
      e.m(r.color),
      e.is("selected", s.value),
      e.is("disabled", r.disabled)
    ]), p = (m) => {
      r.disabled || t("click", m);
    }, J = (m) => {
      r.disabled || t("dblclick", m);
    }, O = {
      input: N.Left,
      output: N.Right
    };
    return (m, T) => (i(), y("div", {
      class: c(n.value),
      onClick: p,
      onDblclick: J
    }, [
      a.showInputHandle ? (i(), S(d(C), {
        key: 0,
        type: "target",
        position: O.input,
        class: "x-flow-node__handle-input"
      }, null, 8, ["position"])) : w("", !0),
      l("div", {
        class: c(d(e).e("header"))
      }, [
        a.icon ? (i(), y("span", {
          key: 0,
          class: c(d(e).e("icon"))
        }, _(a.icon), 3)) : w("", !0),
        l("span", {
          class: c(d(e).e("title"))
        }, _(a.title), 3)
      ], 2),
      l("div", {
        class: c(d(e).e("content"))
      }, [
        P(m.$slots, "default", {}, () => [
          a.description ? (i(), y("span", {
            key: 0,
            class: c(d(e).e("description"))
          }, _(a.description), 3)) : w("", !0)
        ])
      ], 2),
      m.$slots.footer ? (i(), y("div", {
        key: 1,
        class: c(d(e).e("footer"))
      }, [
        P(m.$slots, "footer")
      ], 2)) : w("", !0),
      a.showOutputHandle ? (i(), S(d(C), {
        key: 2,
        type: "source",
        position: O.output,
        class: "x-flow-node__handle-output"
      }, null, 8, ["position"])) : w("", !0)
    ], 34));
  }
}), W = { class: "flow-node__body" }, ee = { class: "flow-node__content" }, oe = { class: "flow-node__title" }, we = /* @__PURE__ */ $({
  name: "XStartNode",
  __name: "StartNode",
  setup(a) {
    const { id: k, selected: r } = h(), t = x(r), e = h().data, u = g(() => {
      const s = e == null ? void 0 : e.value;
      return (s == null ? void 0 : s.nodeName) || (s == null ? void 0 : s.label) || "开始";
    }), f = g(() => [
      "flow-node",
      "flow-node--start",
      t.value && "flow-node--selected"
    ]);
    return (s, n) => (i(), y("div", {
      class: c(f.value)
    }, [
      n[1] || (n[1] = l("div", { class: "flow-node__indicator" }, null, -1)),
      l("div", W, [
        n[0] || (n[0] = l("div", { class: "flow-node__icon" }, [
          l("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            l("circle", {
              cx: "12",
              cy: "12",
              r: "10"
            }),
            l("polyline", { points: "12 6 12 12 16 14" })
          ])
        ], -1)),
        l("div", ee, [
          l("span", oe, _(u.value), 1)
        ])
      ]),
      z(d(C), {
        type: "source",
        position: d(N).Right,
        style: { width: "12px", height: "12px", background: "#155eef", border: "2px solid #fff", "border-radius": "50%", right: "-6px", top: "50%", transform: "translateY(-50%)", "z-index": "10" }
      }, null, 8, ["position"])
    ], 2));
  }
}), te = { class: "flow-node__body" }, ne = { class: "flow-node__content" }, le = { class: "flow-node__title" }, se = { class: "flow-node__subtitle" }, ye = /* @__PURE__ */ $({
  name: "XAINode",
  __name: "AINode",
  setup(a) {
    const { id: k, selected: r } = h(), t = x(r), e = h().data, u = g(() => {
      const n = e == null ? void 0 : e.value;
      return (n == null ? void 0 : n.nodeName) || (n == null ? void 0 : n.label) || "LLM";
    }), f = g(() => {
      const n = e == null ? void 0 : e.value;
      if (n != null && n.nodeConfig)
        try {
          return JSON.parse(n.nodeConfig).model || "GPT-4";
        } catch {
          return "GPT-4";
        }
      return "GPT-4";
    }), s = g(() => [
      "flow-node",
      "flow-node--llm",
      t.value && "flow-node--selected"
    ]);
    return (n, p) => (i(), y("div", {
      class: c(s.value)
    }, [
      p[1] || (p[1] = l("div", { class: "flow-node__indicator" }, null, -1)),
      l("div", te, [
        p[0] || (p[0] = U('<div class="flow-node__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path><circle cx="7.5" cy="14.5" r="1.5"></circle><circle cx="16.5" cy="14.5" r="1.5"></circle></svg></div>', 1)),
        l("div", ne, [
          l("span", le, _(u.value), 1),
          l("span", se, _(f.value), 1)
        ])
      ]),
      z(d(C), {
        type: "target",
        position: d(N).Left,
        style: { width: "12px", height: "12px", background: "#155eef", border: "2px solid #fff", "border-radius": "50%", left: "-14px", top: "50%", transform: "translateY(-50%)", "z-index": "10" }
      }, null, 8, ["position"]),
      z(d(C), {
        type: "source",
        position: d(N).Right,
        style: { width: "12px", height: "12px", background: "#155eef", border: "2px solid #fff", "border-radius": "50%", right: "-6px", top: "50%", transform: "translateY(-50%)", "z-index": "10" }
      }, null, 8, ["position"])
    ], 2));
  }
}), de = { class: "flow-node__body" }, ae = { class: "flow-node__content" }, ie = { class: "flow-node__title" }, be = /* @__PURE__ */ $({
  name: "XEndNode",
  __name: "EndNode",
  setup(a) {
    const { id: k, selected: r } = h(), t = x(r), e = h().data, u = g(() => {
      const s = e == null ? void 0 : e.value;
      return (s == null ? void 0 : s.nodeName) || (s == null ? void 0 : s.label) || "结束";
    }), f = g(() => [
      "flow-node",
      "flow-node--end",
      t.value && "flow-node--selected"
    ]);
    return (s, n) => (i(), y("div", {
      class: c(f.value)
    }, [
      n[1] || (n[1] = l("div", { class: "flow-node__indicator" }, null, -1)),
      l("div", de, [
        n[0] || (n[0] = l("div", { class: "flow-node__icon" }, [
          l("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            l("path", { d: "M18.36 6.64a9 9 0 1 1-12.73 0" }),
            l("line", {
              x1: "12",
              y1: "2",
              x2: "12",
              y2: "12"
            })
          ])
        ], -1)),
        l("div", ae, [
          l("span", ie, _(u.value), 1)
        ])
      ]),
      z(d(C), {
        type: "target",
        position: d(N).Left,
        style: { width: "12px", height: "12px", background: "#155eef", border: "2px solid #fff", "border-radius": "50%", left: "-14px", top: "50%", transform: "translateY(-50%)", "z-index": "10" }
      }, null, 8, ["position"])
    ], 2));
  }
});
export {
  ye as AINode,
  be as EndNode,
  ge as FlowEditor,
  ve as FlowNode,
  we as StartNode
};
