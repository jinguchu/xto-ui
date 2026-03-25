import { defineComponent as O, computed as x, openBlock as c, createElementBlock as u, normalizeStyle as L, normalizeClass as f, renderSlot as j, unref as h, createCommentVNode as M, createTextVNode as J, toDisplayString as A, createElementVNode as m, ref as H, watch as F, Fragment as R, renderList as U, useSlots as de, withModifiers as re, inject as le, resolveComponent as ye, withDirectives as ge, createBlock as ae, withCtx as ce, vShow as ve, reactive as he, provide as ne, toRef as me, nextTick as fe, onMounted as se, onUnmounted as oe, resolveDynamicComponent as ie, createVNode as ke } from "vue";
import { useNamespace as G } from "@xto/core";
const ft = /* @__PURE__ */ O({
  name: "XTag",
  __name: "index",
  props: {
    type: { default: "" },
    size: { default: "default" },
    effect: { default: "light" },
    closable: { type: Boolean, default: !1 },
    hit: { type: Boolean, default: !1 },
    color: {}
  },
  emits: ["close"],
  setup(l, { emit: s }) {
    const i = l, e = s, y = G("tag"), r = x(() => [
      y.b(),
      y.m(i.type || "primary"),
      i.size !== "default" ? y.m(i.size) : "",
      y.m(i.effect),
      y.is("hit", i.hit)
    ]), n = x(() => i.color ? {
      backgroundColor: i.effect === "dark" ? i.color : "",
      borderColor: i.color,
      color: i.effect === "dark" ? "#fff" : i.color
    } : {}), k = (b) => {
      e("close", b);
    };
    return (b, I) => (c(), u("span", {
      class: f(r.value),
      style: L(n.value)
    }, [
      j(b.$slots, "default"),
      l.closable ? (c(), u("i", {
        key: 0,
        class: f(h(y).e("close")),
        onClick: k
      }, "✕", 2)) : M("", !0)
    ], 6));
  }
}), pt = /* @__PURE__ */ O({
  name: "XCard",
  __name: "index",
  props: {
    header: {},
    bodyStyle: { default: () => ({ padding: "20px" }) },
    shadow: { default: "always" }
  },
  setup(l) {
    const s = l, i = G("card"), e = x(() => [
      i.b(),
      i.is(`shadow-${s.shadow}`)
    ]);
    return (y, r) => (c(), u("div", {
      class: f(e.value)
    }, [
      l.header || y.$slots.header ? (c(), u("div", {
        key: 0,
        class: f(h(i).e("header"))
      }, [
        j(y.$slots, "header", {}, () => [
          J(A(l.header), 1)
        ])
      ], 2)) : M("", !0),
      m("div", {
        class: f(h(i).e("body")),
        style: L(l.bodyStyle)
      }, [
        j(y.$slots, "default")
      ], 6)
    ], 2));
  }
}), be = ["viewBox"], xe = ["cx", "cy", "r", "stroke-width"], Ce = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke"], yt = /* @__PURE__ */ O({
  name: "XProgress",
  __name: "index",
  props: {
    percentage: { default: 0 },
    type: { default: "line" },
    status: { default: "" },
    strokeWidth: { default: 6 },
    color: { type: [String, Array, Function], default: "#409eff" },
    width: { default: 126 },
    showText: { type: Boolean, default: !0 }
  },
  setup(l) {
    const s = l, i = G("progress"), e = x(() => Math.min(100, Math.max(0, s.percentage))), y = x(() => ({
      width: `${e.value}%`,
      backgroundColor: typeof s.color == "function" ? s.color(e.value) : s.color
    })), r = x(() => [
      i.b(),
      i.m(s.type),
      i.is("show-text", s.showText),
      i.is(`status-${s.status || ""}`, s.status)
    ]);
    return x(() => s.status === "success" ? "100%" : s.status === "warning" ? "Warning" : s.status === "exception" ? "Exception" : `${e.value}%`), (n, k) => (c(), u("div", {
      class: f(r.value)
    }, [
      l.type === "line" ? (c(), u("div", {
        key: 0,
        class: f(h(i).e("line"))
      }, [
        m("div", {
          class: f(h(i).e("outer"))
        }, [
          m("div", {
            class: f(h(i).e("inner"))
          }, [
            m("div", {
              class: f(h(i).e("bar")),
              style: L(y.value)
            }, null, 6)
          ], 2)
        ], 2),
        l.showText ? (c(), u("div", {
          key: 0,
          class: f(h(i).e("text"))
        }, A(e.value) + "% ", 3)) : M("", !0)
      ], 2)) : (c(), u("div", {
        key: 1,
        class: f(h(i).e("circle"))
      }, [
        (c(), u("svg", {
          viewBox: `0 0 ${l.width} ${l.width}`,
          style: L({ width: `${l.width}px`, height: `${l.width}px` })
        }, [
          m("circle", {
            cx: l.width / 2,
            cy: l.width / 2,
            r: (l.width - l.strokeWidth) / 2,
            fill: "none",
            "stroke-width": l.strokeWidth,
            stroke: "#ebeef5"
          }, null, 8, xe),
          m("circle", {
            cx: l.width / 2,
            cy: l.width / 2,
            r: (l.width - l.strokeWidth) / 2,
            fill: "none",
            "stroke-width": l.strokeWidth,
            "stroke-dasharray": `${e.value / 100 * Math.PI * (l.width - l.strokeWidth)} ${Math.PI * (l.width - l.strokeWidth)}`,
            stroke: typeof l.color == "function" ? l.color(e.value) : l.color,
            "stroke-linecap": "round",
            style: { transform: "rotate(-90deg)", "transform-origin": "center" }
          }, null, 8, Ce)
        ], 12, be)),
        l.showText ? (c(), u("div", {
          key: 0,
          class: f(h(i).e("circle-text"))
        }, A(e.value) + "% ", 3)) : M("", !0)
      ], 2))
    ], 2));
  }
}), we = ["disabled"], Ie = ["onClick"], Me = ["disabled"], $e = ["value"], Se = ["value"], Ke = /* @__PURE__ */ O({
  name: "XPagination",
  __name: "index",
  props: {
    total: { default: 0 },
    pageSize: { default: 10 },
    currentPage: { default: 1 },
    pageSizes: { default: () => [10, 20, 50, 100] },
    layout: { default: "total, sizes, prev, pager, next, jumper" }
  },
  emits: ["update:currentPage", "update:pageSize", "current-change", "size-change"],
  setup(l, { emit: s }) {
    const i = l, e = s, y = G("pagination"), r = H(i.currentPage), n = H(i.pageSize);
    F(() => i.currentPage, (C) => {
      r.value = C;
    }), F(() => i.pageSize, (C) => {
      n.value = C;
    });
    const k = x(() => r.value), b = x(() => n.value), I = x(() => Math.max(1, Math.ceil(i.total / b.value))), w = x(() => {
      const C = [], S = I.value, K = k.value;
      if (S <= 7)
        for (let N = 1; N <= S; N++) C.push(N);
      else if (K <= 4) {
        for (let N = 1; N <= 5; N++) C.push(N);
        C.push(-1), C.push(S);
      } else if (K >= S - 3) {
        C.push(1), C.push(-1);
        for (let N = S - 4; N <= S; N++) C.push(N);
      } else {
        C.push(1), C.push(-1);
        for (let N = K - 1; N <= K + 1; N++) C.push(N);
        C.push(-1), C.push(S);
      }
      return C;
    }), T = (C) => {
      C < 1 || C > I.value || C === k.value || (r.value = C, e("update:currentPage", C), e("current-change", C));
    }, $ = (C) => {
      n.value = C, e("update:pageSize", C), e("size-change", C), r.value = 1, e("update:currentPage", 1), e("current-change", 1);
    };
    return (C, S) => (c(), u("div", {
      class: f(h(y).b())
    }, [
      m("span", {
        class: f(h(y).e("total"))
      }, "共 " + A(l.total) + " 条", 3),
      m("button", {
        class: f(h(y).e("btn")),
        disabled: k.value <= 1,
        onClick: S[0] || (S[0] = (K) => T(k.value - 1))
      }, " ‹ ", 10, we),
      (c(!0), u(R, null, U(w.value, (K) => (c(), u(R, { key: K }, [
        K === -1 ? (c(), u("span", {
          key: 0,
          class: f(h(y).e("ellipsis"))
        }, "...", 2)) : (c(), u("button", {
          key: 1,
          class: f([h(y).e("btn"), h(y).is("active", K === k.value)]),
          onClick: (N) => T(K)
        }, A(K), 11, Ie))
      ], 64))), 128)),
      m("button", {
        class: f(h(y).e("btn")),
        disabled: k.value >= I.value,
        onClick: S[1] || (S[1] = (K) => T(k.value + 1))
      }, " › ", 10, Me),
      m("select", {
        class: f(h(y).e("sizes")),
        value: b.value,
        onChange: S[2] || (S[2] = (K) => $(Number(K.target.value)))
      }, [
        (c(!0), u(R, null, U(l.pageSizes, (K) => (c(), u("option", {
          key: K,
          value: K
        }, A(K) + " 条/页", 9, Se))), 128))
      ], 42, $e)
    ], 2));
  }
}), Ne = { key: 0 }, De = ["checked", "indeterminate"], ze = ["onClick"], Ae = ["onClick"], Te = ["checked", "onChange"], Ee = ["onClick"], Le = ["onClick"], je = { key: 1 }, Be = ["colspan"], gt = /* @__PURE__ */ O({
  name: "XDynamicTable",
  __name: "index",
  props: {
    data: { default: () => [] },
    columns: { default: () => [] },
    height: {},
    maxHeight: {},
    rowKey: {},
    loading: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 },
    stripe: { type: Boolean, default: !1 },
    showHeader: { type: Boolean, default: !0 },
    showIndex: { type: Boolean, default: !1 },
    showOperation: { type: Boolean, default: !1 },
    showAddButton: { type: Boolean, default: !1 },
    operationWidth: { default: 120 },
    operationLabel: { default: "操作" },
    emptyText: { default: "暂无数据" },
    defaultSort: {}
  },
  emits: ["sort-change", "row-click", "row-dblclick", "selection-change", "select-all", "cell-click", "add-row", "delete-row", "update:data"],
  setup(l, { expose: s, emit: i }) {
    var g, t;
    const e = l, y = i, r = G("dynamic-table");
    de();
    const n = x({
      get: () => e.data,
      set: (a) => y("update:data", a)
    }), k = H({
      prop: ((g = e.defaultSort) == null ? void 0 : g.prop) || "",
      order: ((t = e.defaultSort) == null ? void 0 : t.order) || null
    }), b = H([]), I = H(!1), w = H(!1), T = x(() => {
      if (!k.value.prop || !k.value.order)
        return n.value;
      const { prop: a, order: o } = k.value;
      return [...n.value].sort((p, v) => {
        const z = p[a], W = v[a];
        if (z === W) return 0;
        const V = z > W ? 1 : -1;
        return o === "ascending" ? V : -V;
      });
    }), $ = x(() => {
      const a = {};
      return e.height && (a.height = typeof e.height == "number" ? `${e.height}px` : e.height), e.maxHeight && (a.maxHeight = typeof e.maxHeight == "number" ? `${e.maxHeight}px` : e.maxHeight), a;
    }), C = x(() => {
      const a = typeof e.operationWidth == "number" ? `${e.operationWidth}px` : e.operationWidth;
      return { width: a, minWidth: a };
    }), S = x(() => [
      r.b(),
      r.is("border", e.border),
      r.is("stripe", e.stripe),
      r.is("loading", e.loading)
    ]), K = (a) => {
      a.sortable && (k.value.prop === a.prop ? k.value.order === "ascending" ? k.value.order = "descending" : k.value.order === "descending" && (k.value.order = null, k.value.prop = "") : (k.value.prop = a.prop, k.value.order = "ascending"), y("sort-change", { ...k.value }));
    }, N = (a) => a.sortable ? k.value.prop !== a.prop ? r.is("sortable") : [
      r.is("sortable"),
      r.is(`sort-${k.value.order}`)
    ] : "", Z = (a, o, p) => {
      const v = a[o.prop];
      return o.formatter ? o.formatter(a, o, v, p) : v ?? "";
    }, Y = (a, o, p) => {
      y("row-click", a, o, p);
    }, E = (a, o, p) => {
      const v = p.target;
      y("cell-click", a, o, v, p);
    }, D = () => {
      I.value || w.value ? (b.value = [], I.value = !1, w.value = !1) : (b.value = [...n.value], I.value = !0, w.value = !1), y("select-all", b.value), y("selection-change", b.value);
    }, B = (a) => {
      const o = b.value.findIndex((p) => typeof e.rowKey == "function" ? e.rowKey(p) === e.rowKey(a) : e.rowKey ? p[e.rowKey] === a[e.rowKey] : p === a);
      o > -1 ? b.value.splice(o, 1) : b.value.push(a), I.value = b.value.length === n.value.length, w.value = b.value.length > 0 && b.value.length < n.value.length, y("selection-change", b.value);
    }, X = (a) => b.value.some((o) => typeof e.rowKey == "function" ? e.rowKey(o) === e.rowKey(a) : e.rowKey ? o[e.rowKey] === a[e.rowKey] : o === a), P = (a) => {
      const o = {};
      return a.width && (o.width = typeof a.width == "number" ? `${a.width}px` : a.width), a.minWidth && (o.minWidth = typeof a.minWidth == "number" ? `${a.minWidth}px` : a.minWidth), a.align && (o.textAlign = a.align), o;
    }, Q = (a) => {
      const o = a || {};
      e.columns.forEach((p) => {
        o[p.prop] === void 0 && (o[p.prop] = "");
      }), n.value = [...n.value, o], y("add-row", o);
    }, q = (a) => {
      const o = n.value[a];
      n.value = n.value.filter((p, v) => v !== a), y("delete-row", o, a);
    };
    return s({
      clearSelection: () => {
        b.value = [], I.value = !1, w.value = !1;
      },
      getSelection: () => [...b.value],
      sortState: k,
      addRow: Q,
      deleteRow: q,
      getData: () => [...n.value]
    }), (a, o) => (c(), u("div", {
      class: f(S.value)
    }, [
      l.showAddButton ? (c(), u("div", {
        key: 0,
        class: f(h(r).e("toolbar"))
      }, [
        j(a.$slots, "toolbar", {}, () => [
          m("button", {
            class: f(h(r).e("add-btn")),
            onClick: o[0] || (o[0] = (p) => Q())
          }, [...o[2] || (o[2] = [
            m("span", { class: "add-icon" }, "+", -1),
            J(" 新增一行 ", -1)
          ])], 2)
        ])
      ], 2)) : M("", !0),
      l.loading ? (c(), u("div", {
        key: 1,
        class: f(h(r).e("loading"))
      }, [...o[3] || (o[3] = [
        m("span", { class: "loading-spinner" }, null, -1),
        m("span", { class: "loading-text" }, "加载中...", -1)
      ])], 2)) : M("", !0),
      m("div", {
        class: f(h(r).e("wrapper")),
        style: L($.value)
      }, [
        m("table", null, [
          l.showHeader ? (c(), u("thead", Ne, [
            m("tr", null, [
              l.rowKey ? (c(), u("th", {
                key: 0,
                class: f([h(r).e("header-cell"), h(r).e("selection-cell")])
              }, [
                m("input", {
                  type: "checkbox",
                  checked: I.value,
                  indeterminate: w.value,
                  onChange: D
                }, null, 40, De)
              ], 2)) : M("", !0),
              l.showIndex ? (c(), u("th", {
                key: 1,
                class: f(h(r).e("header-cell")),
                style: { width: "60px" }
              }, " 序号 ", 2)) : M("", !0),
              (c(!0), u(R, null, U(l.columns, (p) => (c(), u("th", {
                key: p.prop,
                class: f([h(r).e("header-cell"), N(p)]),
                style: L(P(p)),
                onClick: (v) => K(p)
              }, [
                m("span", null, A(p.label), 1),
                p.sortable ? (c(), u("span", {
                  key: 0,
                  class: f(h(r).e("sort-icon"))
                }, [...o[4] || (o[4] = [
                  m("span", { class: "sort-arrow up" }, "▲", -1),
                  m("span", { class: "sort-arrow down" }, "▼", -1)
                ])], 2)) : M("", !0)
              ], 14, ze))), 128)),
              l.showOperation ? (c(), u("th", {
                key: 2,
                class: f(h(r).e("header-cell")),
                style: L(C.value)
              }, A(l.operationLabel), 7)) : M("", !0)
            ])
          ])) : M("", !0),
          m("tbody", null, [
            (c(!0), u(R, null, U(T.value, (p, v) => (c(), u("tr", {
              key: l.rowKey ? typeof l.rowKey == "function" ? l.rowKey(p) : p[l.rowKey] : v,
              class: f([h(r).e("row"), h(r).is("selected", X(p))]),
              onClick: (z) => Y(p, l.columns[0], z)
            }, [
              l.rowKey ? (c(), u("td", {
                key: 0,
                class: f(h(r).e("cell"))
              }, [
                m("input", {
                  type: "checkbox",
                  checked: X(p),
                  onClick: o[1] || (o[1] = re(() => {
                  }, ["stop"])),
                  onChange: (z) => B(p)
                }, null, 40, Te)
              ], 2)) : M("", !0),
              l.showIndex ? (c(), u("td", {
                key: 1,
                class: f(h(r).e("cell"))
              }, A(v + 1), 3)) : M("", !0),
              (c(!0), u(R, null, U(l.columns, (z) => (c(), u("td", {
                key: z.prop,
                class: f(h(r).e("cell")),
                style: L(P(z)),
                onClick: (W) => E(p, z, W)
              }, [
                j(a.$slots, `column-${z.prop}`, {
                  row: p,
                  column: z,
                  $index: v
                }, () => [
                  J(A(Z(p, z, v)), 1)
                ])
              ], 14, Ee))), 128)),
              l.showOperation ? (c(), u("td", {
                key: 2,
                class: f([h(r).e("cell"), h(r).e("operation-cell")])
              }, [
                j(a.$slots, "operation", {
                  row: p,
                  $index: v,
                  deleteRow: () => q(v)
                }, () => [
                  m("button", {
                    class: f(h(r).e("operation-btn")),
                    onClick: re((z) => q(v), ["stop"])
                  }, " 删除 ", 10, Le)
                ])
              ], 2)) : M("", !0)
            ], 10, Ae))), 128))
          ]),
          T.value.length === 0 && !l.loading ? (c(), u("tbody", je, [
            m("tr", null, [
              m("td", {
                colspan: l.columns.length + (l.rowKey ? 1 : 0) + (l.showIndex ? 1 : 0) + (l.showOperation ? 1 : 0),
                class: f(h(r).e("empty"))
              }, [
                j(a.$slots, "empty", {}, () => [
                  J(A(l.emptyText), 1)
                ])
              ], 10, Be)
            ])
          ])) : M("", !0)
        ])
      ], 6)
    ], 2));
  }
}), He = ["draggable"], Pe = {
  key: 0,
  class: "x-tree-node__loading-icon"
}, We = {
  key: 0,
  class: "x-tree-node__expand-arrow"
}, Re = {
  key: 0,
  class: "x-tree-node__icon"
}, Oe = { class: "x-tree-node__label" }, Ge = /* @__PURE__ */ O({
  name: "XTreeNode",
  __name: "tree-node",
  props: {
    node: {}
  },
  setup(l) {
    const s = l, i = le("tree"), { props: e, store: y, toggleExpand: r, toggleCheck: n, handleNodeClick: k, handleNodeContextmenu: b } = i, I = H(), w = H(null), T = x(() => s.node.expanded), $ = x(() => s.node.checked), C = x(() => s.node.indeterminate), S = x(() => s.node.disabled), K = x(() => s.node.loading), N = x(() => s.node.isLeaf), Z = x(() => e.showCheckbox || e.checkable), Y = x(() => s.node.selected), E = x(() => ({
      paddingLeft: `${s.node.level * (e.indent || 16)}px`
    })), D = (t) => {
      k(s.node, t);
    }, B = (t) => {
      b(s.node, t);
    }, X = (t) => {
      t.stopPropagation(), S.value || r(s.node);
    }, P = (t) => {
      t.stopPropagation(), S.value || n(s.node);
    }, Q = (t) => {
      var a;
      if (!(!e.draggable || S.value)) {
        if (e.allowDrag && !e.allowDrag(s.node)) {
          t.preventDefault();
          return;
        }
        t.dataTransfer.effectAllowed = "move", t.dataTransfer.setData("nodeKey", String(s.node.key)), (a = i.emit) == null || a.call(i, "node-drag-start", s.node, t);
      }
    }, q = (t) => {
      var a;
      t.preventDefault(), e.draggable && (w.value = "inner", (a = i.emit) == null || a.call(i, "node-drag-enter", s.node, t));
    }, _ = (t) => {
      var a;
      w.value = null, (a = i.emit) == null || a.call(i, "node-drag-leave", s.node, t);
    }, ee = (t) => {
      var v, z;
      if (t.preventDefault(), !e.draggable || S.value) return;
      const a = (v = I.value) == null ? void 0 : v.getBoundingClientRect();
      if (!a) return;
      const o = t.clientY - a.top, p = a.height;
      o < p * 0.25 ? w.value = "prev" : o > p * 0.75 ? w.value = "next" : w.value = "inner", (z = i.emit) == null || z.call(i, "node-drag-over", s.node, t);
    }, d = (t) => {
      var o, p;
      if (t.preventDefault(), !e.draggable) return;
      const a = (o = t.dataTransfer) == null ? void 0 : o.getData("nodeKey");
      if (a) {
        const v = y.nodesMap.get(a);
        if (v && w.value) {
          if (e.allowDrop && !e.allowDrop(v, s.node, w.value)) {
            w.value = null;
            return;
          }
          (p = i.emit) == null || p.call(i, "node-drop", v, s.node, w.value, t);
        }
      }
      w.value = null;
    }, g = (t) => {
      var a;
      w.value = null, (a = i.emit) == null || a.call(i, "node-drag-end", s.node, t);
    };
    return (t, a) => {
      var p;
      const o = ye("TreeNode", !0);
      return ge((c(), u("div", {
        ref_key: "nodeRef",
        ref: I,
        class: f(["x-tree-node", {
          "is-expanded": T.value,
          "is-current": t.isCurrent,
          "is-selected": Y.value,
          "is-disabled": S.value,
          "is-drop-inner": w.value === "inner",
          "is-drop-prev": w.value === "prev",
          "is-drop-next": w.value === "next"
        }]),
        draggable: h(e).draggable && !S.value,
        onDragstart: Q,
        onDragenter: q,
        onDragleave: _,
        onDragover: ee,
        onDrop: d,
        onDragend: g
      }, [
        m("div", {
          class: "x-tree-node__content",
          style: L(E.value),
          onClick: D,
          onContextmenu: B
        }, [
          m("span", {
            class: f(["x-tree-node__expand-icon", {
              "is-expanded": T.value,
              "is-leaf": N.value,
              "is-loading": K.value
            }]),
            onClick: X
          }, [
            K.value ? (c(), u("span", Pe)) : (c(), u(R, { key: 1 }, [
              N.value ? M("", !0) : (c(), u("span", We))
            ], 64))
          ], 2),
          l.node.icon || h(e).icon ? (c(), u("span", Re, A(l.node.icon || h(e).icon), 1)) : M("", !0),
          Z.value ? (c(), u("span", {
            key: 1,
            class: f(["x-tree-node__checkbox", {
              "is-checked": $.value,
              "is-indeterminate": C.value,
              "is-disabled": S.value
            }]),
            onClick: re(P, ["stop"])
          }, [...a[0] || (a[0] = [
            m("span", { class: "x-tree-node__checkbox-inner" }, null, -1)
          ])], 2)) : M("", !0),
          m("span", Oe, [
            j(t.$slots, "default", {
              node: l.node,
              data: l.node.data
            }, () => [
              J(A(l.node.label), 1)
            ])
          ])
        ], 36),
        !N.value && T.value ? (c(), u("div", {
          key: 0,
          class: f(["x-tree-node__children", { "x-tree-node__children--show-line": h(e).showLine }])
        }, [
          !h(e).renderAfterExpand || T.value ? (c(!0), u(R, { key: 0 }, U(l.node.children, (v) => (c(), ae(o, {
            key: v.key,
            node: v
          }, {
            default: ce((z) => [
              j(t.$slots, "default", {
                node: z.node,
                data: z.data
              })
            ]),
            _: 3
          }, 8, ["node"]))), 128)) : M("", !0)
        ], 2)) : M("", !0)
      ], 42, He)), [
        [ve, l.node.visible && (((p = l.node.parent) == null ? void 0 : p.expanded) ?? !0)]
      ]);
    };
  }
});
class te {
  constructor(s, i, e = 0, y = null) {
    this.data = s, this.store = i, this.level = e, this.parent = y, this.children = [], this.expanded = !1, this.selected = !1, this.checked = !1, this.indeterminate = !1, this.loading = !1, this.visible = !0, this.loaded = !1;
    const r = i.props || {}, n = r.value || "value", k = r.label || "label", b = r.disabled || "disabled", I = r.isLeaf || "isLeaf";
    this.key = s[n] ?? s.value ?? s.id ?? Math.random().toString(), this.label = s[k] ?? s.label ?? "", this.disabled = s[b] ?? s.disabled ?? !1, this.isLeaf = s[I] ?? s.isLeaf ?? !1;
    const w = r.children || "children", T = s[w] ?? s.children ?? [];
    T.length > 0 ? this.children = T.map(
      ($) => new te($, i, e + 1, this)
    ) : this.isLeaf = !0;
  }
  /** 设置展开状态 */
  setExpanded(s, i = !0) {
    this.expanded = s, s ? this.store.expandedKeys.add(this.key) : this.store.expandedKeys.delete(this.key);
  }
  /** 设置选中状态 */
  setSelected(s) {
    this.selected = s, s ? this.store.selectedKeys.add(this.key) : this.store.selectedKeys.delete(this.key);
  }
  /** 设置勾选状态 */
  setChecked(s, i = !0, e = !0) {
    this.checked = s, this.indeterminate = !1, s ? (this.store.checkedKeys.add(this.key), this.store.indeterminateKeys.delete(this.key)) : (this.store.checkedKeys.delete(this.key), this.store.indeterminateKeys.delete(this.key)), i && (this.updateChildrenChecked(s), this.updateParentChecked());
  }
  /** 更新子节点勾选状态 */
  updateChildrenChecked(s) {
    const i = (e) => {
      e.children.forEach((y) => {
        y.disabled || (y.checked = s, y.indeterminate = !1, s ? (this.store.checkedKeys.add(y.key), this.store.indeterminateKeys.delete(y.key)) : (this.store.checkedKeys.delete(y.key), this.store.indeterminateKeys.delete(y.key)), i(y));
      });
    };
    i(this);
  }
  /** 更新父节点勾选状态 */
  updateParentChecked() {
    let s = this.parent;
    for (; s; ) {
      const i = s.children.filter((r) => !r.disabled);
      if (i.length === 0) {
        s = s.parent;
        continue;
      }
      const e = i.every((r) => r.checked), y = i.some((r) => r.checked || r.indeterminate);
      e ? (s.checked = !0, s.indeterminate = !1, this.store.checkedKeys.add(s.key), this.store.indeterminateKeys.delete(s.key)) : y ? (s.checked = !1, s.indeterminate = !0, this.store.checkedKeys.delete(s.key), this.store.indeterminateKeys.add(s.key)) : (s.checked = !1, s.indeterminate = !1, this.store.checkedKeys.delete(s.key), this.store.indeterminateKeys.delete(s.key)), s = s.parent;
    }
  }
  /** 展开/收起 */
  toggleExpand() {
    this.setExpanded(!this.expanded);
  }
  /** 勾选/取消勾选 */
  toggleCheck() {
    this.setChecked(!this.checked);
  }
  /** 判断是否应该显示 */
  get shouldShow() {
    return !(!this.visible || this.parent && !this.parent.expanded);
  }
  /** 获取所有父节点的 key */
  getParentKeys() {
    const s = [];
    let i = this.parent;
    for (; i; )
      s.push(i.key), i = i.parent;
    return s;
  }
  /** 获取所有子节点的 key */
  getChildrenKeys() {
    const s = [], i = (e) => {
      e.forEach((y) => {
        s.push(y.key), y.children.length && i(y.children);
      });
    };
    return i(this.children), s;
  }
}
const vt = /* @__PURE__ */ O({
  name: "XTree",
  __name: "index",
  props: {
    data: { default: () => [] },
    treeData: {},
    emptyText: { default: "暂无数据" },
    nodeKey: { default: "value" },
    props: { default: () => ({}) },
    fieldNames: {},
    renderAfterExpand: { type: Boolean, default: !0 },
    load: {},
    renderContent: {},
    highlightCurrent: { type: Boolean, default: !1 },
    checkOnClickNode: { type: Boolean, default: !1 },
    autoExpandParent: { type: Boolean, default: !0 },
    defaultExpandedKeys: { default: () => [] },
    defaultCheckedKeys: { default: () => [] },
    defaultSelectedKeys: { default: () => [] },
    expandedKeys: {},
    checkedKeys: {},
    selectedKeys: {},
    checkStrictly: { type: Boolean, default: !1 },
    lazy: { type: Boolean, default: !1 },
    draggable: { type: Boolean, default: !1 },
    allowDrag: {},
    allowDrop: {},
    accordion: { type: Boolean, default: !1 },
    indent: { default: 16 },
    icon: {},
    expandOnClickNode: { type: Boolean, default: !0 },
    checkDescendants: { type: Boolean, default: !1 },
    currentKey: {},
    showLine: { type: Boolean, default: !1 },
    showCheckbox: { type: Boolean, default: !1 },
    selectable: { type: Boolean, default: !1 },
    size: { default: "default" },
    defaultExpandAll: { type: Boolean, default: !1 },
    checkable: { type: Boolean }
  },
  emits: ["node-click", "node-contextmenu", "check-change", "check", "current-change", "node-expand", "node-collapse", "node-drag-start", "node-drag-enter", "node-drag-leave", "node-drag-over", "node-drag-end", "node-drop"],
  setup(l, { expose: s, emit: i }) {
    const e = l, y = i, r = G("tree"), n = he({
      nodesMap: /* @__PURE__ */ new Map(),
      rootNodes: [],
      expandedKeys: /* @__PURE__ */ new Set(),
      checkedKeys: /* @__PURE__ */ new Set(),
      selectedKeys: /* @__PURE__ */ new Set(),
      indeterminateKeys: /* @__PURE__ */ new Set(),
      currentKey: null,
      filterValue: ""
    }), k = H(""), b = () => e.fieldNames ? {
      value: e.fieldNames.key || "value",
      label: e.fieldNames.title || e.fieldNames.key || "label",
      children: e.fieldNames.children || "children",
      disabled: e.fieldNames.disabled || "disabled",
      isLeaf: e.fieldNames.isLeaf || "isLeaf"
    } : e.props, I = () => e.treeData || e.data || [];
    n.props = b();
    const w = (t) => {
      if (n.nodesMap.clear(), n.rootNodes = [], n.checkedKeys.clear(), n.indeterminateKeys.clear(), !t || !t.length) return;
      const a = b(), o = (p, v, z) => {
        const W = new te(p, n, v, z);
        n.nodesMap.set(W.key, W);
        const V = (a == null ? void 0 : a.children) || "children", ue = p[V] ?? p.children ?? [];
        return ue.length > 0 && (W.children = ue.map(
          (pe) => o(pe, v + 1, W)
        ), W.isLeaf = !1), W;
      };
      n.rootNodes = t.map((p) => o(p, 0, null)), T();
    }, T = () => {
      var t, a, o;
      e.defaultExpandAll ? $() : (t = e.defaultExpandedKeys) != null && t.length && e.defaultExpandedKeys.forEach((p) => {
        const v = n.nodesMap.get(p);
        v && (v.expanded = !0, n.expandedKeys.add(p));
      }), (a = e.defaultCheckedKeys) != null && a.length && e.defaultCheckedKeys.forEach((p) => {
        const v = n.nodesMap.get(p);
        v && v.setChecked(!0, !e.checkStrictly);
      }), (o = e.checkedKeys) != null && o.length && e.checkedKeys.forEach((p) => {
        const v = n.nodesMap.get(p);
        v && v.setChecked(!0, !e.checkStrictly);
      });
    }, $ = () => {
      n.nodesMap.forEach((t) => {
        t.children.length > 0 && (t.expanded = !0, n.expandedKeys.add(t.key));
      });
    }, C = () => {
      n.nodesMap.forEach((t) => {
        t.expanded = !1;
      }), n.expandedKeys.clear();
    }, S = (t) => {
      if (t.disabled) return;
      !t.expanded ? (t.expanded = !0, n.expandedKeys.add(t.key), y("node-expand", t.data, t, null)) : (t.expanded = !1, n.expandedKeys.delete(t.key), y("node-collapse", t.data, t, null));
    }, K = (t, a) => {
      if (t.disabled) return;
      const o = a ?? !t.checked;
      t.setChecked(o, !e.checkStrictly), y("check-change", t.data, t.checked, t.indeterminate);
      const p = [], v = [], z = [], W = [];
      n.nodesMap.forEach((V) => {
        V.checked && (p.push(V.data), v.push(V.key)), V.indeterminate && (z.push(V.data), W.push(V.key));
      }), y("check", t.data, {
        checkedNodes: p,
        checkedKeys: v,
        halfCheckedNodes: z,
        halfCheckedKeys: W
      });
    }, N = (t, a) => {
      t.disabled || (y("node-click", t.data, t, null), e.expandOnClickNode && t.children.length > 0 && S(t), e.highlightCurrent && (n.currentKey = t.key, y("current-change", t.data, t)));
    }, Z = (t) => {
      if (k.value = t, n.filterValue = t, !t) {
        n.nodesMap.forEach((a) => {
          a.visible = !0;
        });
        return;
      }
      n.nodesMap.forEach((a) => {
        const o = a.label || "";
        a.visible = String(o).toLowerCase().includes(t.toLowerCase());
      }), n.nodesMap.forEach((a) => {
        if (a.visible && a.parent) {
          let o = a.parent;
          for (; o; )
            o.visible = !0, o.expanded = !0, n.expandedKeys.add(o.key), o = o.parent;
        }
      });
    }, Y = (t) => n.nodesMap.get(t), E = (t) => {
      n.currentKey = t;
    }, D = () => {
      if (n.currentKey)
        return n.nodesMap.get(n.currentKey);
    }, B = (t = !1) => {
      const a = [];
      return n.nodesMap.forEach((o) => {
        o.checked && (!t || o.isLeaf) && a.push(o.data);
      }), a;
    }, X = (t = !1) => {
      const a = [];
      return n.nodesMap.forEach((o) => {
        o.checked && (!t || o.isLeaf) && a.push(o.key);
      }), a;
    }, P = (t) => {
      n.nodesMap.forEach((a) => {
        a.checked = !1, a.indeterminate = !1;
      }), n.checkedKeys.clear(), n.indeterminateKeys.clear(), t.forEach((a) => {
        const o = n.nodesMap.get(a);
        o && o.setChecked(!0, !e.checkStrictly);
      });
    }, Q = () => {
      const t = [];
      return n.nodesMap.forEach((a) => {
        a.indeterminate && t.push(a.data);
      }), t;
    }, q = () => {
      const t = [];
      return n.nodesMap.forEach((a) => {
        a.indeterminate && t.push(a.key);
      }), t;
    }, _ = (t, a, o = !0) => {
      const p = n.nodesMap.get(t);
      p && p.setChecked(a, o && !e.checkStrictly);
    }, ee = () => {
      const t = [];
      return n.nodesMap.forEach((a) => {
        a.selected && t.push(a.data);
      }), t;
    }, d = (t) => {
      n.nodesMap.forEach((a) => {
        a.selected = !1;
      }), n.selectedKeys.clear(), t.forEach((a) => {
        const o = n.nodesMap.get(a);
        o && (o.selected = !0, n.selectedKeys.add(a));
      });
    }, g = x(() => e.showCheckbox || e.checkable);
    return ne("tree", {
      props: e,
      store: n,
      emit: y,
      toggleExpand: S,
      toggleCheck: K,
      handleNodeClick: N,
      filterValue: me(k),
      showCheckboxComputed: g
    }), s({
      filter: Z,
      getNode: Y,
      setCurrentKey: E,
      getCurrentKey: () => n.currentKey,
      getCurrentNode: D,
      getCheckedNodes: B,
      getCheckedKeys: X,
      setCheckedKeys: P,
      getHalfCheckedNodes: Q,
      getHalfCheckedKeys: q,
      setChecked: _,
      getSelectedNodes: ee,
      setSelectedKeys: d,
      expandAll: $,
      collapseAll: C,
      // 额外方法
      updateKeyChildren: (t, a) => {
        const o = n.nodesMap.get(t);
        o && (o.children.forEach((p) => {
          n.nodesMap.delete(p.key);
        }), o.children = a.map((p) => {
          const v = new te(p, n, o.level + 1, o);
          return n.nodesMap.set(v.key, v), v;
        }), o.isLeaf = o.children.length === 0);
      },
      remove: (t) => {
        const a = n.nodesMap.get(t);
        if (a) {
          const o = a.parent;
          if (o) {
            const v = o.children.indexOf(a);
            v > -1 && o.children.splice(v, 1), o.children.length === 0 && (o.isLeaf = !0);
          } else {
            const v = n.rootNodes.indexOf(a);
            v > -1 && n.rootNodes.splice(v, 1);
          }
          const p = (v) => {
            n.nodesMap.delete(v.key), v.children.forEach(p);
          };
          p(a);
        }
      },
      append: (t, a) => {
        if (a) {
          const o = n.nodesMap.get(a);
          if (o) {
            const p = new te(t, n, o.level + 1, o);
            n.nodesMap.set(p.key, p), o.children.push(p), o.isLeaf = !1;
          }
        } else {
          const o = new te(t, n, 0, null);
          n.nodesMap.set(o.key, o), n.rootNodes.push(o);
        }
      },
      insertBefore: (t, a) => {
        var p;
        const o = n.nodesMap.get(a);
        if (o) {
          const v = new te(t, n, o.level, o.parent);
          n.nodesMap.set(v.key, v);
          const z = ((p = o.parent) == null ? void 0 : p.children) || n.rootNodes, W = z.indexOf(o);
          z.splice(W, 0, v);
        }
      },
      insertAfter: (t, a) => {
        var p;
        const o = n.nodesMap.get(a);
        if (o) {
          const v = new te(t, n, o.level, o.parent);
          n.nodesMap.set(v.key, v);
          const z = ((p = o.parent) == null ? void 0 : p.children) || n.rootNodes, W = z.indexOf(o);
          z.splice(W + 1, 0, v);
        }
      }
    }), F(
      () => [e.treeData, e.data],
      () => {
        w(I());
      },
      { immediate: !0, deep: !0 }
    ), F(
      () => e.checkedKeys,
      (t) => {
        t && P(t);
      },
      { immediate: !0, deep: !0 }
    ), F(
      () => e.defaultCheckedKeys,
      (t) => {
        t && t.length > 0 && !e.checkedKeys && P(t);
      },
      { immediate: !0, deep: !0 }
    ), (t, a) => (c(), u("div", {
      class: f([h(r).b(), h(r).m(l.size)])
    }, [
      (c(!0), u(R, null, U(n.rootNodes, (o) => (c(), ae(Ge, {
        key: o.key,
        node: o
      }, {
        default: ce((p) => [
          j(t.$slots, "default", {
            node: p.node,
            data: p.data
          }, () => [
            J(A(p.node.label), 1)
          ])
        ]),
        _: 2
      }, 1032, ["node"]))), 128)),
      n.rootNodes.length ? M("", !0) : (c(), u("div", {
        key: 0,
        class: f(h(r).e("empty"))
      }, [
        j(t.$slots, "empty", {}, () => [
          J(A(l.emptyText), 1)
        ])
      ], 2))
    ], 2));
  }
}), Ye = ["src"], Xe = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg0IiBoZWlnaHQ9IjE1MiIgdmlld0JveD0iMCAwIDE4NCAxNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0IDMxLjY3KSI+CiAgICAgIDxlbGxpcHNlIGZpbGwtb3BhY2l0eT0iLjgiIGZpbGw9IiNGNUY1RjciIGN4PSI2Ny43OTciIGN5PSIxMDYuODkiIHJ4PSI2Ny43OTciIHJ5PSIxMi42NjgiLz4KICAgICAgPHBhdGggZD0iTTEyMi4wMzQgNjkuNjc0TDk5LjM5NCA0OC4xNjJsMCAyMS41MTYgMjIuNjQgMjIuNjQ0IDAtMjIuNjQ0em0tMjIuNjQgMjIuNjQ0TDc2Ljk5OCA3MC43OThsMCAyMS41MTYgMjIuMzk2IDIyLjM5NiAwLTIyLjM5NnoiIGZpbGw9IiNFRkVGRkYiLz4KICAgICAgPHBhdGggZD0iTTk5LjM5NCA0OC4xNjJsLTIyLjM5NiAyMi42MzYgMjIuMzk2IDIxLjUyIDAtNDQuMTU2eiIgZmlsbD0iI0YyRjZGQyIvPgogICAgICA8cGF0aCBkPSJNMTIxLjk3OCA2OS42NzRMOTkuMzk0IDkyLjI1OGwzLjE2OCAzLjE2OCAyMi41ODQtMjIuNTg0LTMuMTY4LTMuMTY4eiIgZmlsbD0iI0M3Q0NEQyIvPgogICAgICA8cGF0aCBkPSJNOTkuMzk0IDkyLjI1OEw3Ni44MSA2OS42NzRsMy4xNjgtMy4xNjggMjIuNTg0IDIyLjU4NC0zLjE2OCAzLjE2OHoiIGZpbGw9IiNDN0NEREMiLz4KICAgIDwvZz4KICAgIDxwYXRoIGQ9Ik0xNDcuODU3IDMxLjY3bC0zLjI5Mi0zLjI5MmEyLjUgMi41IDAgMCAwLTMuNTM2IDBsLTEzLjQ2IDEzLjQ2YTMuNSAzLjUgMCAwIDAgMCA0Ljk1bDMuMjkzIDMuMjkyYTMuNSAzLjUgMCAwIDAgNC45NSAwbDEzLjQ2LTEzLjQ2YTIuNSAyLjUgMCAwIDAgMC0zLjUzNnoiIGZpbGw9IiNENkRCRUMiLz4KICAgIDxwYXRoIGQ9Ik0zNi4xNDMgMzEuNjdsMy4yOTItMy4yOTJhMi41IDIuNSAwIDAgMSAzLjUzNiAwbDEzLjQ2IDEzLjQ2YTMuNSAzLjUgMCAwIDEgMCA0Ljk1bC0zLjI5MyAzLjI5MmEzLjUgMy41IDAgMCAxLTQuOTUgMEwzNi4xNDMgMzUuMmEyLjUgMi41IDAgMCAxIDAtMy41MzZ6IiBmaWxsPSIjRDZEQkVDIi8+CiAgICA8Y2lyY2xlIGZpbGw9IiNFQUVFRjQiIGN4PSI5MiIgY3k9IjgiIHI9IjgiLz4KICA8L2c+Cjwvc3ZnPg==", mt = /* @__PURE__ */ O({
  name: "XEmpty",
  __name: "index",
  props: {
    image: { default: "" },
    imageSize: { default: 0 },
    description: { default: "" },
    size: { default: "default" }
  },
  setup(l) {
    const s = l, i = G("empty"), e = x(() => {
      const r = {};
      return s.imageSize && (r.height = `${s.imageSize}px`, r.width = `${s.imageSize}px`), r;
    }), y = x(() => s.description || "暂无数据");
    return (r, n) => (c(), u("div", {
      class: f([h(i).b(), h(i).m(l.size)])
    }, [
      m("div", {
        class: f(h(i).e("image")),
        style: L(e.value)
      }, [
        j(r.$slots, "image", {}, () => [
          l.image ? (c(), u("img", {
            key: 0,
            src: l.image,
            style: L(e.value),
            draggable: "false"
          }, null, 12, Ye)) : (c(), u("img", {
            key: 1,
            src: Xe,
            style: L(e.value),
            draggable: "false"
          }, null, 4))
        ])
      ], 6),
      m("div", {
        class: f(h(i).e("description"))
      }, [
        j(r.$slots, "description", {}, () => [
          m("p", null, A(y.value), 1)
        ])
      ], 2),
      r.$slots.default ? (c(), u("div", {
        key: 0,
        class: f(h(i).e("bottom"))
      }, [
        j(r.$slots, "default")
      ], 2)) : M("", !0)
    ], 2));
  }
}), kt = /* @__PURE__ */ O({
  name: "XTimeline",
  __name: "index",
  props: {
    direction: { default: "vertical" }
  },
  setup(l) {
    const s = l, i = G("timeline");
    ne("timeline", {
      props: s
    });
    const e = x(() => [
      i.b(),
      i.m(s.direction)
    ]);
    return (y, r) => (c(), u("ul", {
      class: f(e.value),
      role: "timeline"
    }, [
      j(y.$slots, "default")
    ], 2));
  }
}), bt = /* @__PURE__ */ O({
  name: "XTimelineItem",
  __name: "TimelineItem",
  props: {
    timestamp: { default: "" },
    type: { default: "primary" },
    color: {},
    size: { default: "normal" },
    hideTimestamp: { type: Boolean, default: !1 },
    placement: { default: "bottom" }
  },
  setup(l) {
    const s = l, i = G("timeline-item"), e = {
      primary: "#409eff",
      success: "#67c23a",
      warning: "#e6a23c",
      danger: "#f56c6c",
      info: "#909399"
    }, y = x(() => {
      const n = {};
      return s.color ? n.backgroundColor = s.color : s.type && e[s.type] && (n.backgroundColor = e[s.type]), n;
    }), r = x(() => [
      i.b(),
      i.m(s.size)
    ]);
    return (n, k) => (c(), u("li", {
      class: f(r.value)
    }, [
      m("div", {
        class: f(h(i).e("node")),
        style: L(y.value)
      }, [
        j(n.$slots, "dot")
      ], 6),
      m("div", {
        class: f(h(i).e("tail"))
      }, null, 2),
      m("div", {
        class: f(h(i).e("wrapper"))
      }, [
        !l.hideTimestamp && l.timestamp && l.placement === "top" ? (c(), u("div", {
          key: 0,
          class: f(h(i).e("timestamp"))
        }, A(l.timestamp), 3)) : M("", !0),
        m("div", {
          class: f(h(i).e("content"))
        }, [
          j(n.$slots, "default")
        ], 2),
        !l.hideTimestamp && l.timestamp && l.placement === "bottom" ? (c(), u("div", {
          key: 1,
          class: f(h(i).e("timestamp"))
        }, A(l.timestamp), 3)) : M("", !0)
      ], 2)
    ], 2));
  }
}), Qe = ["onMouseenter", "onClick"], xt = /* @__PURE__ */ O({
  name: "XCarousel",
  __name: "index",
  props: {
    activeIndex: { default: 0 },
    autoplay: { type: Boolean, default: !0 },
    interval: { default: 3e3 },
    indicatorPosition: { default: "inside" },
    trigger: { default: "hover" },
    arrow: { default: "hover" },
    loop: { type: Boolean, default: !0 },
    height: { default: 300 }
  },
  emits: ["update:activeIndex", "change"],
  setup(l, { expose: s, emit: i }) {
    const e = l, y = i, r = G("carousel"), n = H(e.activeIndex), k = H(0), b = H(null), I = H(!1);
    ne("carousel", {
      currentIndex: n,
      itemCount: k
    });
    const w = (B) => {
      const X = n.value;
      e.loop ? n.value = (B + k.value) % k.value : n.value = Math.max(0, Math.min(B, k.value - 1)), y("update:activeIndex", n.value), y("change", n.value, X);
    }, T = () => {
      w(n.value - 1);
    }, $ = () => {
      w(n.value + 1);
    }, C = () => {
      e.autoplay && k.value > 1 && (S(), b.value = setInterval(() => {
        I.value || $();
      }, e.interval));
    }, S = () => {
      b.value && (clearInterval(b.value), b.value = null);
    }, K = () => {
      I.value = !0, e.arrow;
    }, N = () => {
      I.value = !1;
    }, Z = (B) => {
      e.trigger === "hover" && w(B);
    }, Y = (B) => {
      e.trigger === "click" && w(B);
    }, E = x(() => ({
      height: typeof e.height == "number" ? `${e.height}px` : e.height
    })), D = x(() => [
      r.b(),
      r.m(`arrow-${e.arrow}`),
      r.m(`indicator-${e.indicatorPosition}`)
    ]);
    return F(() => e.activeIndex, (B) => {
      n.value = B;
    }), F(() => e.autoplay, () => {
      C();
    }), F(k, () => {
      fe(() => {
        C();
      });
    }), se(() => {
      C();
    }), oe(() => {
      S();
    }), s({
      prev: T,
      next: $,
      setActiveItem: w
    }), (B, X) => (c(), u("div", {
      class: f(D.value),
      style: L(E.value),
      onMouseenter: K,
      onMouseleave: N
    }, [
      m("div", {
        class: f(h(r).e("container"))
      }, [
        j(B.$slots, "default")
      ], 2),
      l.arrow !== "never" ? (c(), u("button", {
        key: 0,
        class: f([h(r).e("arrow"), h(r).e("arrow-left")]),
        onClick: T
      }, " ‹ ", 2)) : M("", !0),
      l.arrow !== "never" ? (c(), u("button", {
        key: 1,
        class: f([h(r).e("arrow"), h(r).e("arrow-right")]),
        onClick: $
      }, " › ", 2)) : M("", !0),
      l.indicatorPosition !== "none" ? (c(), u("ul", {
        key: 2,
        class: f(h(r).e("indicators"))
      }, [
        (c(!0), u(R, null, U(k.value, (P) => (c(), u("li", {
          key: P,
          class: f([h(r).e("indicator"), h(r).is("active", P - 1 === n.value)]),
          onMouseenter: (Q) => Z(P - 1),
          onClick: (Q) => Y(P - 1)
        }, [
          m("button", {
            class: f(h(r).e("indicator-btn"))
          }, null, 2)
        ], 42, Qe))), 128))
      ], 2)) : M("", !0)
    ], 38));
  }
}), Ct = /* @__PURE__ */ O({
  name: "XCarouselItem",
  __name: "CarouselItem",
  setup(l) {
    const s = G("carousel-item"), i = le("carousel"), e = H(-1);
    se(() => {
      i && (e.value = i.itemCount.value, i.itemCount.value++);
    }), oe(() => {
      i && i.itemCount.value--;
    });
    const y = x(() => i && e.value === i.currentIndex.value), r = x(() => [
      s.b(),
      s.is("active", y.value)
    ]);
    return (n, k) => (c(), u("div", {
      class: f(r.value)
    }, [
      j(n.$slots, "default")
    ], 2));
  }
}), Ze = { key: 0 }, Ve = ["onClick"], Ue = ["onClick"], Je = ["onClick"], Fe = { key: 1 }, qe = ["colspan"], _e = { style: { display: "none" } }, wt = /* @__PURE__ */ O({
  name: "XTable",
  __name: "index",
  props: {
    data: { default: () => [] },
    height: {},
    maxHeight: {},
    rowKey: {},
    loading: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 },
    stripe: { type: Boolean, default: !1 },
    showHeader: { type: Boolean, default: !0 },
    emptyText: { default: "暂无数据" },
    defaultSort: {},
    pagination: {}
  },
  emits: ["sort-change", "row-click", "row-dblclick", "cell-click", "selection-change", "select-all", "page-change", "size-change"],
  setup(l, { expose: s, emit: i }) {
    var _, ee;
    const e = l, y = i, r = G("table");
    de();
    const n = he(/* @__PURE__ */ new Map());
    ne("x-table", {
      registerColumn: (d, g) => {
        n.set(d.prop, { config: d, slot: g });
      },
      unregisterColumn: (d) => {
        n.delete(d);
      },
      updateColumnSlot: (d, g) => {
        const t = n.get(d);
        t && (t.slot = g);
      },
      props: e
    });
    const w = x(() => Array.from(n.values()).map((d) => d.config)), T = x(() => {
      const d = {};
      return n.forEach((g, t) => {
        g.slot && (d[t] = g.slot);
      }), d;
    }), $ = H({
      prop: ((_ = e.defaultSort) == null ? void 0 : _.prop) || "",
      order: ((ee = e.defaultSort) == null ? void 0 : ee.order) || null
    }), C = x(() => {
      if (!$.value.prop || !$.value.order)
        return e.data;
      const { prop: d, order: g } = $.value;
      return [...e.data].sort((t, a) => {
        const o = t[d], p = a[d];
        if (o === p) return 0;
        const v = o > p ? 1 : -1;
        return g === "ascending" ? v : -v;
      });
    }), S = x(() => {
      const d = {};
      return e.height && (d.height = typeof e.height == "number" ? `${e.height}px` : e.height), e.maxHeight && (d.maxHeight = typeof e.maxHeight == "number" ? `${e.maxHeight}px` : e.maxHeight), d;
    }), K = x(() => [
      r.b(),
      r.is("border", e.border),
      r.is("stripe", e.stripe),
      r.is("loading", e.loading)
    ]), N = (d) => {
      d.sortable && ($.value.prop === d.prop ? $.value.order === "ascending" ? $.value.order = "descending" : $.value.order === "descending" && ($.value.order = null, $.value.prop = "") : ($.value.prop = d.prop, $.value.order = "ascending"), y("sort-change", { ...$.value }));
    }, Z = (d) => d.sortable ? $.value.prop !== d.prop ? r.is("sortable") : [
      r.is("sortable"),
      r.is(`sort-${$.value.order}`)
    ] : "", Y = (d, g, t) => {
      const a = d[g.prop];
      return g.formatter ? g.formatter(d, g, a, t) : a ?? "";
    }, E = (d, g) => {
      y("row-click", d, w.value[0], g);
    }, D = (d, g, t) => {
      const a = t.target;
      y("cell-click", d, g, a, t);
    }, B = (d) => {
      y("page-change", d);
    }, X = (d) => {
      y("size-change", d);
    }, P = (d) => {
      const g = {};
      return d.width && (g.width = typeof d.width == "number" ? `${d.width}px` : d.width), d.minWidth && (g.minWidth = typeof d.minWidth == "number" ? `${d.minWidth}px` : d.minWidth), d.align && (g.textAlign = d.align), g;
    };
    return s({
      clearSelection: () => {
      },
      getSelection: () => [],
      sortState: $,
      columns: w
    }), (d, g) => (c(), u("div", {
      class: f(K.value)
    }, [
      l.loading ? (c(), u("div", {
        key: 0,
        class: f(h(r).e("loading"))
      }, [...g[0] || (g[0] = [
        m("span", { class: "loading-spinner" }, null, -1),
        m("span", { class: "loading-text" }, "加载中...", -1)
      ])], 2)) : M("", !0),
      m("div", {
        class: f(h(r).e("wrapper")),
        style: L(S.value)
      }, [
        m("table", null, [
          l.showHeader ? (c(), u("thead", Ze, [
            m("tr", null, [
              (c(!0), u(R, null, U(w.value, (t) => (c(), u("th", {
                key: t.prop,
                class: f([h(r).e("header-cell"), Z(t)]),
                style: L(P(t)),
                onClick: (a) => N(t)
              }, [
                m("span", null, A(t.label), 1),
                t.sortable ? (c(), u("span", {
                  key: 0,
                  class: f(h(r).e("sort-icon"))
                }, [...g[1] || (g[1] = [
                  m("span", { class: "sort-arrow up" }, "▲", -1),
                  m("span", { class: "sort-arrow down" }, "▼", -1)
                ])], 2)) : M("", !0)
              ], 14, Ve))), 128))
            ])
          ])) : M("", !0),
          m("tbody", null, [
            (c(!0), u(R, null, U(C.value, (t, a) => (c(), u("tr", {
              key: l.rowKey ? typeof l.rowKey == "function" ? l.rowKey(t) : t[l.rowKey] : a,
              class: f([h(r).e("row")]),
              onClick: (o) => E(t, o)
            }, [
              (c(!0), u(R, null, U(w.value, (o) => (c(), u("td", {
                key: o.prop,
                class: f(h(r).e("cell")),
                style: L(P(o)),
                onClick: (p) => D(t, o, p)
              }, [
                T.value[o.prop] ? (c(), ae(ie(() => T.value[o.prop]({ row: t, column: o, $index: a })), { key: 0 })) : (c(), u(R, { key: 1 }, [
                  J(A(Y(t, o, a)), 1)
                ], 64))
              ], 14, Je))), 128))
            ], 10, Ue))), 128))
          ]),
          C.value.length === 0 && !l.loading ? (c(), u("tbody", Fe, [
            m("tr", null, [
              m("td", {
                colspan: w.value.length || 1,
                class: f(h(r).e("empty"))
              }, [
                j(d.$slots, "empty", {}, () => [
                  J(A(l.emptyText), 1)
                ])
              ], 10, qe)
            ])
          ])) : M("", !0)
        ])
      ], 6),
      l.pagination ? (c(), u("div", {
        key: 1,
        class: f(h(r).e("pagination"))
      }, [
        ke(Ke, {
          total: l.pagination.total,
          "current-page": l.pagination.current,
          "page-size": l.pagination.pageSize,
          onCurrentChange: B,
          onSizeChange: X
        }, null, 8, ["total", "current-page", "page-size"])
      ], 2)) : M("", !0),
      m("div", _e, [
        j(d.$slots, "default")
      ])
    ], 2));
  }
}), It = /* @__PURE__ */ O({
  name: "XTableColumn",
  __name: "TableColumn",
  props: {
    prop: {},
    label: {},
    width: {},
    minWidth: {},
    align: { default: "left" },
    sortable: { type: [Boolean, String] },
    fixed: { type: [String, Boolean] },
    formatter: {}
  },
  setup(l) {
    const s = l;
    G("table-column");
    const i = de(), e = le("x-table"), y = x(() => ({
      prop: s.prop,
      label: s.label,
      width: s.width,
      minWidth: s.minWidth,
      align: s.align,
      sortable: s.sortable,
      fixed: s.fixed,
      formatter: s.formatter
    }));
    return se(() => {
      e != null && e.registerColumn && e.registerColumn(y.value, i.default);
    }), F(() => i.default, (r) => {
      e != null && e.updateColumnSlot && r && e.updateColumnSlot(s.prop, r);
    }, { immediate: !0 }), oe(() => {
      e != null && e.unregisterColumn && e.unregisterColumn(s.prop);
    }), (r, n) => null;
  }
}), et = { key: 0 }, tt = ["onClick"], at = ["onClick"], nt = { key: 0 }, lt = { key: 1 }, st = { key: 0 }, ot = ["colspan"], rt = { style: { display: "none" } }, Mt = /* @__PURE__ */ O({
  name: "XTreeTable",
  __name: "index",
  props: {
    data: { default: () => [] },
    rowKey: {},
    loading: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 },
    stripe: { type: Boolean, default: !1 },
    showHeader: { type: Boolean, default: !0 },
    emptyText: { default: "暂无数据" },
    defaultExpandAll: { type: Boolean, default: !1 },
    defaultExpandedKeys: {},
    indent: { default: 20 },
    treeProps: { default: () => ({ children: "children", hasChildren: "hasChildren" }) },
    expandIcon: {},
    collapseIcon: {}
  },
  emits: ["row-click", "cell-click", "expand-change", "sort-change"],
  setup(l, { expose: s, emit: i }) {
    const e = l, y = i, r = G("tree-table"), n = H(/* @__PURE__ */ new Set()), k = H([]), b = H({});
    ne("x-tree-table", {
      registerColumn: (d, g) => {
        const t = k.value.findIndex((a) => a.prop === d.prop);
        t === -1 ? k.value.push(d) : k.value[t] = d, g && (b.value[d.prop] = g);
      },
      unregisterColumn: (d) => {
        const g = k.value.findIndex((t) => t.prop === d);
        g > -1 && k.value.splice(g, 1), delete b.value[d];
      },
      updateColumnSlot: (d, g) => {
        b.value[d] = g;
      },
      props: e
    });
    const $ = (d) => typeof e.rowKey == "function" ? e.rowKey(d) : d[e.rowKey || "id"], C = (d) => {
      var t;
      const g = ((t = e.treeProps) == null ? void 0 : t.children) || "children";
      return d[g] || [];
    }, S = (d) => {
      var a;
      if (C(d).length > 0) return !0;
      const t = ((a = e.treeProps) == null ? void 0 : a.hasChildren) || "hasChildren";
      return d[t] === !0;
    }, K = (d) => {
      const g = $(d);
      return n.value.has(g);
    }, N = (d) => {
      const g = $(d), t = !n.value.has(g);
      t ? n.value.add(g) : n.value.delete(g), y("expand-change", d, t);
    }, Z = () => {
      const d = (g) => {
        g.forEach((t) => {
          S(t) && (n.value.add($(t)), d(C(t)));
        });
      };
      d(e.data);
    }, Y = () => {
      n.value.clear();
    }, E = x(() => {
      const d = [], g = (t, a = 0, o = !0) => {
        t.forEach((p) => {
          const v = $(p), z = n.value.has(v), W = o;
          d.push({ row: p, level: a, visible: W });
          const V = C(p);
          V.length > 0 && z && g(V, a + 1, W);
        });
      };
      return g(e.data), d;
    }), D = H({
      prop: "",
      order: null
    }), B = x(() => {
      if (!D.value.prop || !D.value.order)
        return E.value;
      const { prop: d, order: g } = D.value;
      return [...E.value].sort((t, a) => {
        const o = t.row[d], p = a.row[d];
        if (o === p) return 0;
        const v = o > p ? 1 : -1;
        return g === "ascending" ? v : -v;
      });
    }), X = (d) => {
      d.sortable && (D.value.prop === d.prop ? D.value.order === "ascending" ? D.value.order = "descending" : D.value.order === "descending" && (D.value.order = null, D.value.prop = "") : (D.value.prop = d.prop, D.value.order = "ascending"), y("sort-change", { ...D.value }));
    }, P = (d) => d.sortable ? D.value.prop !== d.prop ? r.is("sortable") : [
      r.is("sortable"),
      r.is(`sort-${D.value.order}`)
    ] : "", Q = (d, g, t) => {
      const a = d[g.prop];
      return g.formatter ? g.formatter(d, g, a, t) : a ?? "";
    }, q = (d) => {
      const g = {};
      return d.width && (g.width = typeof d.width == "number" ? `${d.width}px` : d.width), d.minWidth && (g.minWidth = typeof d.minWidth == "number" ? `${d.minWidth}px` : d.minWidth), d.align && (g.textAlign = d.align), g;
    }, _ = x(() => [
      r.b(),
      r.is("border", e.border),
      r.is("stripe", e.stripe),
      r.is("loading", e.loading)
    ]), ee = () => {
      var d;
      e.defaultExpandAll ? Z() : (d = e.defaultExpandedKeys) != null && d.length && e.defaultExpandedKeys.forEach((g) => {
        n.value.add(g);
      });
    };
    return F(() => e.data, () => {
      ee();
    }, { immediate: !0 }), F(() => e.defaultExpandedKeys, (d) => {
      d != null && d.length && !e.defaultExpandAll && (n.value.clear(), d.forEach((g) => {
        n.value.add(g);
      }));
    }, { immediate: !0 }), s({
      expandAll: Z,
      collapseAll: Y,
      toggleExpand: N,
      expandedKeys: n,
      columns: k
    }), (d, g) => (c(), u("div", {
      class: f(_.value)
    }, [
      l.loading ? (c(), u("div", {
        key: 0,
        class: f(h(r).e("loading"))
      }, [...g[0] || (g[0] = [
        m("span", { class: "loading-spinner" }, null, -1),
        m("span", { class: "loading-text" }, "加载中...", -1)
      ])], 2)) : M("", !0),
      m("div", {
        class: f(h(r).e("wrapper"))
      }, [
        m("table", null, [
          l.showHeader ? (c(), u("thead", et, [
            m("tr", null, [
              (c(!0), u(R, null, U(k.value, (t) => (c(), u("th", {
                key: t.prop,
                class: f([h(r).e("header-cell"), P(t)]),
                style: L(q(t)),
                onClick: (a) => X(t)
              }, [
                m("span", null, A(t.label), 1),
                t.sortable ? (c(), u("span", {
                  key: 0,
                  class: f(h(r).e("sort-icon"))
                }, [...g[1] || (g[1] = [
                  m("span", { class: "sort-arrow up" }, "▲", -1),
                  m("span", { class: "sort-arrow down" }, "▼", -1)
                ])], 2)) : M("", !0)
              ], 14, tt))), 128))
            ])
          ])) : M("", !0),
          m("tbody", null, [
            (c(!0), u(R, null, U(B.value, (t, a) => (c(), u(R, {
              key: $(t.row)
            }, [
              t.visible ? (c(), u("tr", {
                key: 0,
                class: f([h(r).e("row"), h(r).is("level-" + t.level)])
              }, [
                (c(!0), u(R, null, U(k.value, (o, p) => (c(), u("td", {
                  key: o.prop,
                  class: f(h(r).e("cell")),
                  style: L(q(o))
                }, [
                  p === 0 ? (c(), u("div", {
                    key: 0,
                    class: f(h(r).e("cell-content"))
                  }, [
                    m("span", {
                      class: f(h(r).e("indent")),
                      style: L({ width: `${t.level * l.indent}px` })
                    }, null, 6),
                    S(t.row) ? (c(), u("span", {
                      key: 0,
                      class: f([h(r).e("expand-icon"), h(r).is("expanded", K(t.row))]),
                      onClick: re((v) => N(t.row), ["stop"])
                    }, [
                      K(t.row) ? (c(), u("span", nt, "▼")) : (c(), u("span", lt, "▶"))
                    ], 10, at)) : (c(), u("span", {
                      key: 1,
                      class: f(h(r).e("expand-placeholder"))
                    }, null, 2)),
                    m("span", null, [
                      b.value[o.prop] ? (c(), ae(ie(() => b.value[o.prop]({ row: t.row, column: o, $index: a })), { key: 0 })) : (c(), u(R, { key: 1 }, [
                        J(A(Q(t.row, o, a)), 1)
                      ], 64))
                    ])
                  ], 2)) : b.value[o.prop] ? (c(), ae(ie(() => b.value[o.prop]({ row: t.row, column: o, $index: a })), { key: 1 })) : (c(), u(R, { key: 2 }, [
                    J(A(Q(t.row, o, a)), 1)
                  ], 64))
                ], 6))), 128))
              ], 2)) : M("", !0)
            ], 64))), 128)),
            B.value.length === 0 && !l.loading ? (c(), u("tr", st, [
              m("td", {
                colspan: k.value.length || 1,
                class: f(h(r).e("empty"))
              }, [
                j(d.$slots, "empty", {}, () => [
                  J(A(l.emptyText), 1)
                ])
              ], 10, ot)
            ])) : M("", !0)
          ])
        ])
      ], 2),
      m("div", rt, [
        j(d.$slots, "default")
      ])
    ], 2));
  }
}), $t = /* @__PURE__ */ O({
  name: "XTreeTableColumn",
  __name: "TreeTableColumn",
  props: {
    prop: {},
    label: {},
    width: {},
    minWidth: {},
    align: { default: "left" },
    sortable: { type: [Boolean, String] },
    fixed: { type: [String, Boolean] },
    formatter: {}
  },
  setup(l) {
    const s = l;
    G("tree-table-column");
    const i = de(), e = le("x-tree-table"), y = x(() => ({
      prop: s.prop,
      label: s.label,
      width: s.width,
      minWidth: s.minWidth,
      align: s.align,
      sortable: s.sortable,
      fixed: s.fixed,
      formatter: s.formatter
    }));
    return se(() => {
      e != null && e.registerColumn && e.registerColumn(y.value, i.default);
    }), F(() => i.default, (r) => {
      e != null && e.updateColumnSlot && r && e.updateColumnSlot(s.prop, r);
    }, { immediate: !0 }), oe(() => {
      e != null && e.unregisterColumn && e.unregisterColumn(s.prop);
    }), (r, n) => null;
  }
}), it = ["src", "alt"], St = /* @__PURE__ */ O({
  name: "XAvatar",
  __name: "index",
  props: {
    src: {},
    icon: {},
    size: { default: "default" },
    shape: { default: "circle" },
    fit: { default: "cover" },
    alt: {}
  },
  emits: ["error"],
  setup(l, { emit: s }) {
    const i = l, e = s, y = G("avatar"), r = x(() => [
      y.b(),
      y.m(i.shape),
      typeof i.size == "string" ? y.m(i.size) : ""
    ]), n = x(() => {
      const b = {};
      return typeof i.size == "number" && (b.width = `${i.size}px`, b.height = `${i.size}px`, b.lineHeight = `${i.size}px`), b;
    }), k = (b) => {
      e("error", b);
    };
    return (b, I) => (c(), u("span", {
      class: f(r.value),
      style: L(n.value)
    }, [
      l.src ? (c(), u("img", {
        key: 0,
        src: l.src,
        alt: l.alt,
        style: L({ objectFit: l.fit }),
        onError: k
      }, null, 44, it)) : l.icon ? (c(), u("span", {
        key: 1,
        class: f(h(y).e("icon"))
      }, A(l.icon), 3)) : (c(), u("span", {
        key: 2,
        class: f(h(y).e("default"))
      }, [
        j(b.$slots, "default")
      ], 2))
    ], 6));
  }
}), Kt = /* @__PURE__ */ O({
  name: "XDescriptions",
  __name: "index",
  props: {
    title: {},
    column: { default: 3 },
    border: { type: Boolean, default: !1 },
    size: { default: "default" },
    labelWidth: {},
    labelAlign: { default: "right" },
    contentAlign: { default: "left" },
    colon: { type: Boolean, default: !0 }
  },
  setup(l) {
    const s = l, i = G("descriptions");
    ne("x-descriptions", {
      props: s,
      column: x(() => s.column)
    });
    const e = x(() => [
      i.b(),
      i.m(s.size),
      i.is("bordered", s.border)
    ]);
    return (y, r) => (c(), u("div", {
      class: f(e.value)
    }, [
      l.title ? (c(), u("div", {
        key: 0,
        class: f(h(i).e("title"))
      }, A(l.title), 3)) : M("", !0),
      m("div", {
        class: f(h(i).e("body"))
      }, [
        m("table", null, [
          m("tbody", null, [
            j(y.$slots, "default")
          ])
        ])
      ], 2)
    ], 2));
  }
}), dt = ["colspan"], ct = ["colspan"], Nt = /* @__PURE__ */ O({
  name: "XDescriptionsItem",
  __name: "DescriptionsItem",
  props: {
    label: {},
    span: { default: 1 },
    labelAlign: {},
    contentAlign: {}
  },
  setup(l) {
    const s = l, i = G("descriptions-item"), e = le("x-descriptions"), y = x(() => {
      var T;
      const I = {}, w = (T = e == null ? void 0 : e.props) == null ? void 0 : T.labelWidth;
      return w && (I.width = typeof w == "number" ? `${w}px` : w), I;
    }), r = x(() => {
      var I;
      return s.labelAlign || ((I = e == null ? void 0 : e.props) == null ? void 0 : I.labelAlign) || "right";
    }), n = x(() => {
      var I;
      return s.contentAlign || ((I = e == null ? void 0 : e.props) == null ? void 0 : I.contentAlign) || "left";
    }), k = x(() => {
      var I;
      return ((I = e == null ? void 0 : e.props) == null ? void 0 : I.colon) ?? !0;
    }), b = x(() => {
      var I;
      return ((I = e == null ? void 0 : e.props) == null ? void 0 : I.border) ?? !1;
    });
    return (I, w) => b.value ? (c(), u(R, { key: 0 }, [
      m("th", {
        class: f([h(i).b(), h(i).e("label"), `is-${r.value}`]),
        style: L(y.value)
      }, A(l.label) + A(k.value ? ":" : ""), 7),
      m("td", {
        class: f([h(i).e("content"), `is-${n.value}`]),
        colspan: l.span * 2 - 1
      }, [
        j(I.$slots, "default")
      ], 10, dt)
    ], 64)) : (c(), u("tr", {
      key: 1,
      class: f(h(i).b())
    }, [
      m("th", {
        class: f([h(i).e("label"), `is-${r.value}`]),
        style: L(y.value)
      }, A(l.label) + A(k.value ? ":" : ""), 7),
      m("td", {
        class: f([h(i).e("content"), `is-${n.value}`]),
        colspan: l.span * 2 - 1
      }, [
        j(I.$slots, "default")
      ], 10, ct)
    ], 2));
  }
}), Dt = /* @__PURE__ */ O({
  name: "XScrollbar",
  __name: "index",
  props: {
    height: {},
    maxHeight: {},
    native: { type: Boolean, default: !1 },
    wrapStyle: {},
    wrapClass: {},
    viewStyle: {},
    viewClass: {},
    noresize: { type: Boolean },
    tag: { default: "div" },
    always: { type: Boolean, default: !1 },
    minSize: { default: 20 }
  },
  emits: ["scroll"],
  setup(l, { expose: s, emit: i }) {
    const e = l, y = i, r = G("scrollbar"), n = H(), k = H(), b = H("0"), I = H("0"), w = H(0), T = H(0), $ = x(() => {
      const E = {};
      return e.height && (E.height = typeof e.height == "number" ? `${e.height}px` : e.height), e.maxHeight && (E.maxHeight = typeof e.maxHeight == "number" ? `${e.maxHeight}px` : e.maxHeight), E;
    }), C = () => {
      if (!n.value) return;
      const E = n.value.offsetHeight - 4, D = n.value.offsetWidth - 4, B = n.value.scrollHeight, X = n.value.scrollWidth, P = E / B, Q = D / X;
      I.value = P >= 1 ? "0" : `${E * P}px`, b.value = Q >= 1 ? "0" : `${D * Q}px`;
    }, S = (E) => {
      if (!n.value) return;
      const D = n.value.offsetHeight, B = n.value.offsetWidth;
      T.value = n.value.scrollTop * 100 / D, w.value = n.value.scrollLeft * 100 / B, y("scroll", E);
    }, K = (E) => {
      var D;
      (D = n.value) == null || D.scrollTo(E);
    }, N = (E) => {
      n.value && (n.value.scrollTop = E);
    }, Z = (E) => {
      n.value && (n.value.scrollLeft = E);
    };
    let Y = null;
    return se(() => {
      e.native || (fe(C), e.noresize || (Y = new ResizeObserver(C), k.value && Y.observe(k.value), window.addEventListener("resize", C)));
    }), oe(() => {
      Y && Y.disconnect(), window.removeEventListener("resize", C);
    }), s({
      scrollTo: K,
      setScrollTop: N,
      setScrollLeft: Z,
      update: C
    }), (E, D) => (c(), u("div", {
      class: f(h(r).b())
    }, [
      m("div", {
        ref_key: "wrapRef",
        ref: n,
        class: f([h(r).e("wrap"), l.wrapClass, { [h(r).em("wrap", "hidden-default")]: !l.native }]),
        style: L([$.value, { overflow: l.native ? "auto" : "hidden" }]),
        onScroll: S
      }, [
        (c(), ae(ie(l.tag), {
          ref_key: "resizeRef",
          ref: k,
          class: f([h(r).e("view"), l.viewClass]),
          style: L(l.viewStyle)
        }, {
          default: ce(() => [
            j(E.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      !l.native && I.value ? (c(), u("div", {
        key: 0,
        class: f([h(r).e("bar"), h(r).is("vertical")]),
        style: L({ height: I.value, top: `${T.value}%` })
      }, null, 6)) : M("", !0),
      !l.native && b.value ? (c(), u("div", {
        key: 1,
        class: f([h(r).e("bar"), h(r).is("horizontal")]),
        style: L({ width: b.value, left: `${w.value}%` })
      }, null, 6)) : M("", !0)
    ], 2));
  }
});
export {
  St as Avatar,
  pt as Card,
  xt as Carousel,
  Ct as CarouselItem,
  Kt as Descriptions,
  Nt as DescriptionsItem,
  gt as DynamicTable,
  mt as Empty,
  Ke as Pagination,
  yt as Progress,
  Dt as Scrollbar,
  wt as Table,
  It as TableColumn,
  ft as Tag,
  kt as Timeline,
  bt as TimelineItem,
  vt as Tree,
  te as TreeNode,
  Mt as TreeTable,
  $t as TreeTableColumn
};
