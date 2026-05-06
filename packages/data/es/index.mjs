import { defineComponent as G, computed as x, openBlock as c, createElementBlock as h, normalizeStyle as j, normalizeClass as g, renderSlot as B, unref as f, createCommentVNode as S, createTextVNode as J, toDisplayString as A, createElementVNode as y, ref as P, watch as q, Fragment as R, renderList as U, useSlots as ue, withModifiers as de, inject as oe, resolveComponent as ye, withDirectives as ve, createBlock as se, withCtx as he, vShow as me, reactive as fe, provide as le, toRef as ke, nextTick as pe, onMounted as ie, onUnmounted as re, resolveDynamicComponent as ce, createVNode as xe } from "vue";
import { useNamespace as Y } from "@xto/core";
const pt = /* @__PURE__ */ G({
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
  setup(l, { emit: o }) {
    const r = l, t = o, u = Y("tag"), i = x(() => [
      u.b(),
      u.m(r.type || "primary"),
      r.size !== "default" ? u.m(r.size) : "",
      u.m(r.effect),
      u.is("hit", r.hit)
    ]), s = x(() => r.color ? {
      backgroundColor: r.effect === "dark" ? r.color : "",
      borderColor: r.color,
      color: r.effect === "dark" ? "#fff" : r.color
    } : {}), k = (b) => {
      t("close", b);
    };
    return (b, M) => (c(), h("span", {
      class: g(i.value),
      style: j(s.value)
    }, [
      B(b.$slots, "default"),
      l.closable ? (c(), h("i", {
        key: 0,
        class: g(f(u).e("close")),
        onClick: k
      }, "✕", 2)) : S("", !0)
    ], 6));
  }
}), gt = /* @__PURE__ */ G({
  name: "XCard",
  __name: "index",
  props: {
    header: {},
    bodyStyle: { default: () => ({ padding: "20px" }) },
    shadow: { default: "always" }
  },
  setup(l) {
    const o = l, r = Y("card"), t = x(() => [
      r.b(),
      r.is(`shadow-${o.shadow}`)
    ]);
    return (u, i) => (c(), h("div", {
      class: g(t.value)
    }, [
      l.header || u.$slots.header ? (c(), h("div", {
        key: 0,
        class: g(f(r).e("header"))
      }, [
        B(u.$slots, "header", {}, () => [
          J(A(l.header), 1)
        ])
      ], 2)) : S("", !0),
      y("div", {
        class: g(f(r).e("body")),
        style: j(l.bodyStyle)
      }, [
        B(u.$slots, "default")
      ], 6)
    ], 2));
  }
}), be = ["viewBox"], Ce = ["cx", "cy", "r", "stroke-width"], we = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke"], yt = /* @__PURE__ */ G({
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
    const o = l, r = Y("progress"), t = x(() => Math.min(100, Math.max(0, o.percentage))), u = x(() => ({
      width: `${t.value}%`,
      backgroundColor: typeof o.color == "function" ? o.color(t.value) : o.color
    })), i = x(() => [
      r.b(),
      r.m(o.type),
      r.is("show-text", o.showText),
      r.is(`status-${o.status || ""}`, o.status)
    ]);
    return x(() => o.status === "success" ? "100%" : o.status === "warning" ? "Warning" : o.status === "exception" ? "Exception" : `${t.value}%`), (s, k) => (c(), h("div", {
      class: g(i.value)
    }, [
      l.type === "line" ? (c(), h("div", {
        key: 0,
        class: g(f(r).e("line"))
      }, [
        y("div", {
          class: g(f(r).e("outer"))
        }, [
          y("div", {
            class: g(f(r).e("inner"))
          }, [
            y("div", {
              class: g(f(r).e("bar")),
              style: j(u.value)
            }, null, 6)
          ], 2)
        ], 2),
        l.showText ? (c(), h("div", {
          key: 0,
          class: g(f(r).e("text"))
        }, A(t.value) + "% ", 3)) : S("", !0)
      ], 2)) : (c(), h("div", {
        key: 1,
        class: g(f(r).e("circle"))
      }, [
        (c(), h("svg", {
          viewBox: `0 0 ${l.width} ${l.width}`,
          style: j({ width: `${l.width}px`, height: `${l.width}px` })
        }, [
          y("circle", {
            cx: l.width / 2,
            cy: l.width / 2,
            r: (l.width - l.strokeWidth) / 2,
            fill: "none",
            "stroke-width": l.strokeWidth,
            stroke: "#ebeef5"
          }, null, 8, Ce),
          y("circle", {
            cx: l.width / 2,
            cy: l.width / 2,
            r: (l.width - l.strokeWidth) / 2,
            fill: "none",
            "stroke-width": l.strokeWidth,
            "stroke-dasharray": `${t.value / 100 * Math.PI * (l.width - l.strokeWidth)} ${Math.PI * (l.width - l.strokeWidth)}`,
            stroke: typeof l.color == "function" ? l.color(t.value) : l.color,
            "stroke-linecap": "round",
            style: { transform: "rotate(-90deg)", "transform-origin": "center" }
          }, null, 8, we)
        ], 12, be)),
        l.showText ? (c(), h("div", {
          key: 0,
          class: g(f(r).e("circle-text"))
        }, A(t.value) + "% ", 3)) : S("", !0)
      ], 2))
    ], 2));
  }
}), Ie = ["disabled"], $e = ["onClick"], Me = ["disabled"], Se = ["value"], Ke = ["value"], Ne = /* @__PURE__ */ G({
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
  setup(l, { emit: o }) {
    const r = l, t = o, u = Y("pagination"), i = P(r.currentPage), s = P(r.pageSize);
    q(() => r.currentPage, (w) => {
      i.value = w;
    }), q(() => r.pageSize, (w) => {
      s.value = w;
    });
    const k = x(() => i.value), b = x(() => s.value), M = x(() => Math.max(1, Math.ceil(r.total / b.value))), C = x(() => {
      const w = [], $ = M.value, K = k.value;
      if ($ <= 7)
        for (let N = 1; N <= $; N++) w.push(N);
      else if (K <= 4) {
        for (let N = 1; N <= 5; N++) w.push(N);
        w.push(-1), w.push($);
      } else if (K >= $ - 3) {
        w.push(1), w.push(-1);
        for (let N = $ - 4; N <= $; N++) w.push(N);
      } else {
        w.push(1), w.push(-1);
        for (let N = K - 1; N <= K + 1; N++) w.push(N);
        w.push(-1), w.push($);
      }
      return w;
    }), T = (w) => {
      w < 1 || w > M.value || w === k.value || (i.value = w, t("update:currentPage", w), t("current-change", w));
    }, L = (w) => {
      s.value = w, t("update:pageSize", w), t("size-change", w), i.value = 1, t("update:currentPage", 1), t("current-change", 1);
    };
    return (w, $) => (c(), h("div", {
      class: g(f(u).b())
    }, [
      y("span", {
        class: g(f(u).e("total"))
      }, "共 " + A(l.total) + " 条", 3),
      y("button", {
        class: g(f(u).e("btn")),
        disabled: k.value <= 1,
        onClick: $[0] || ($[0] = (K) => T(k.value - 1))
      }, " ‹ ", 10, Ie),
      (c(!0), h(R, null, U(C.value, (K) => (c(), h(R, { key: K }, [
        K === -1 ? (c(), h("span", {
          key: 0,
          class: g(f(u).e("ellipsis"))
        }, "...", 2)) : (c(), h("button", {
          key: 1,
          class: g([f(u).e("btn"), f(u).is("active", K === k.value)]),
          onClick: (N) => T(K)
        }, A(K), 11, $e))
      ], 64))), 128)),
      y("button", {
        class: g(f(u).e("btn")),
        disabled: k.value >= M.value,
        onClick: $[1] || ($[1] = (K) => T(k.value + 1))
      }, " › ", 10, Me),
      y("select", {
        class: g(f(u).e("sizes")),
        value: b.value,
        onChange: $[2] || ($[2] = (K) => L(Number(K.target.value)))
      }, [
        (c(!0), h(R, null, U(l.pageSizes, (K) => (c(), h("option", {
          key: K,
          value: K
        }, A(K) + " 条/页", 9, Ke))), 128))
      ], 42, Se)
    ], 2));
  }
}), ze = { key: 0 }, De = ["checked", "indeterminate"], Ae = ["onClick"], Te = ["onClick"], Ee = ["checked", "onChange"], Le = ["onClick"], je = ["onClick"], Be = { key: 1 }, He = ["colspan"], vt = /* @__PURE__ */ G({
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
  setup(l, { expose: o, emit: r }) {
    var I, n;
    const t = l, u = r, i = Y("dynamic-table");
    ue();
    const s = x({
      get: () => t.data,
      set: (e) => u("update:data", e)
    }), k = P({
      prop: ((I = t.defaultSort) == null ? void 0 : I.prop) || "",
      order: ((n = t.defaultSort) == null ? void 0 : n.order) || null
    }), b = P([]), M = P(!1), C = P(!1), T = x(() => {
      if (!k.value.prop || !k.value.order)
        return s.value;
      const { prop: e, order: a } = k.value;
      return [...s.value].sort((d, p) => {
        const m = d[e], D = p[e];
        if (m === D) return 0;
        const H = m > D ? 1 : -1;
        return a === "ascending" ? H : -H;
      });
    }), L = x(() => {
      const e = {};
      return t.height && (e.height = typeof t.height == "number" ? `${t.height}px` : t.height), t.maxHeight && (e.maxHeight = typeof t.maxHeight == "number" ? `${t.maxHeight}px` : t.maxHeight), e;
    }), w = x(() => {
      const e = typeof t.operationWidth == "number" ? `${t.operationWidth}px` : t.operationWidth;
      return { width: e, minWidth: e };
    }), $ = x(() => [
      i.b(),
      i.is("border", t.border),
      i.is("stripe", t.stripe),
      i.is("loading", t.loading)
    ]), K = (e) => {
      e.sortable && (k.value.prop === e.prop ? k.value.order === "ascending" ? k.value.order = "descending" : k.value.order === "descending" && (k.value.order = null, k.value.prop = "") : (k.value.prop = e.prop, k.value.order = "ascending"), u("sort-change", { ...k.value }));
    }, N = (e) => e.sortable ? k.value.prop !== e.prop ? i.is("sortable") : [
      i.is("sortable"),
      i.is(`sort-${k.value.order}`)
    ] : "", V = (e, a, d) => {
      const p = e[a.prop];
      return a.formatter ? a.formatter(e, a, p, d) : p ?? "";
    }, X = (e, a, d) => {
      u("row-click", e, a, d);
    }, E = (e, a, d) => {
      const p = d.target;
      u("cell-click", e, a, p, d);
    }, z = () => {
      M.value || C.value ? (b.value = [], M.value = !1, C.value = !1) : (b.value = [...s.value], M.value = !0, C.value = !1), u("select-all", b.value), u("selection-change", b.value);
    }, W = (e) => {
      const a = b.value.findIndex((d) => typeof t.rowKey == "function" ? t.rowKey(d) === t.rowKey(e) : t.rowKey ? d[t.rowKey] === e[t.rowKey] : d === e);
      a > -1 ? b.value.splice(a, 1) : b.value.push(e), M.value = b.value.length === s.value.length, C.value = b.value.length > 0 && b.value.length < s.value.length, u("selection-change", b.value);
    }, Z = (e) => b.value.some((a) => typeof t.rowKey == "function" ? t.rowKey(a) === t.rowKey(e) : t.rowKey ? a[t.rowKey] === e[t.rowKey] : a === e), O = (e) => {
      const a = {};
      return e.width && (a.width = typeof e.width == "number" ? `${e.width}px` : e.width), e.minWidth && (a.minWidth = typeof e.minWidth == "number" ? `${e.minWidth}px` : e.minWidth), e.align && (a.textAlign = e.align), a;
    }, Q = (e) => {
      const a = e || {};
      t.columns.forEach((d) => {
        a[d.prop] === void 0 && (a[d.prop] = "");
      }), s.value = [...s.value, a], u("add-row", a);
    }, F = (e) => {
      const a = s.value[e];
      s.value = s.value.filter((d, p) => p !== e), u("delete-row", a, e);
    };
    return o({
      clearSelection: () => {
        b.value = [], M.value = !1, C.value = !1;
      },
      getSelection: () => [...b.value],
      sortState: k,
      addRow: Q,
      deleteRow: F,
      getData: () => [...s.value]
    }), (e, a) => (c(), h("div", {
      class: g($.value)
    }, [
      l.showAddButton ? (c(), h("div", {
        key: 0,
        class: g(f(i).e("toolbar"))
      }, [
        B(e.$slots, "toolbar", {}, () => [
          y("button", {
            class: g(f(i).e("add-btn")),
            onClick: a[0] || (a[0] = (d) => Q())
          }, [...a[2] || (a[2] = [
            y("span", { class: "add-icon" }, "+", -1),
            J(" 新增一行 ", -1)
          ])], 2)
        ])
      ], 2)) : S("", !0),
      l.loading ? (c(), h("div", {
        key: 1,
        class: g(f(i).e("loading"))
      }, [...a[3] || (a[3] = [
        y("span", { class: "loading-spinner" }, null, -1),
        y("span", { class: "loading-text" }, "加载中...", -1)
      ])], 2)) : S("", !0),
      y("div", {
        class: g(f(i).e("wrapper")),
        style: j(L.value)
      }, [
        y("table", null, [
          l.showHeader ? (c(), h("thead", ze, [
            y("tr", null, [
              l.rowKey ? (c(), h("th", {
                key: 0,
                class: g([f(i).e("header-cell"), f(i).e("selection-cell")])
              }, [
                y("input", {
                  type: "checkbox",
                  checked: M.value,
                  indeterminate: C.value,
                  onChange: z
                }, null, 40, De)
              ], 2)) : S("", !0),
              l.showIndex ? (c(), h("th", {
                key: 1,
                class: g(f(i).e("header-cell")),
                style: { width: "60px" }
              }, " 序号 ", 2)) : S("", !0),
              (c(!0), h(R, null, U(l.columns, (d) => (c(), h("th", {
                key: d.prop,
                class: g([f(i).e("header-cell"), N(d)]),
                style: j(O(d)),
                onClick: (p) => K(d)
              }, [
                y("span", null, A(d.label), 1),
                d.sortable ? (c(), h("span", {
                  key: 0,
                  class: g(f(i).e("sort-icon"))
                }, [...a[4] || (a[4] = [
                  y("span", { class: "sort-arrow up" }, "▲", -1),
                  y("span", { class: "sort-arrow down" }, "▼", -1)
                ])], 2)) : S("", !0)
              ], 14, Ae))), 128)),
              l.showOperation ? (c(), h("th", {
                key: 2,
                class: g(f(i).e("header-cell")),
                style: j(w.value)
              }, A(l.operationLabel), 7)) : S("", !0)
            ])
          ])) : S("", !0),
          y("tbody", null, [
            (c(!0), h(R, null, U(T.value, (d, p) => (c(), h("tr", {
              key: l.rowKey ? typeof l.rowKey == "function" ? l.rowKey(d) : d[l.rowKey] : p,
              class: g([f(i).e("row"), f(i).is("selected", Z(d))]),
              onClick: (m) => X(d, l.columns[0], m)
            }, [
              l.rowKey ? (c(), h("td", {
                key: 0,
                class: g(f(i).e("cell"))
              }, [
                y("input", {
                  type: "checkbox",
                  checked: Z(d),
                  onClick: a[1] || (a[1] = de(() => {
                  }, ["stop"])),
                  onChange: (m) => W(d)
                }, null, 40, Ee)
              ], 2)) : S("", !0),
              l.showIndex ? (c(), h("td", {
                key: 1,
                class: g(f(i).e("cell"))
              }, A(p + 1), 3)) : S("", !0),
              (c(!0), h(R, null, U(l.columns, (m) => (c(), h("td", {
                key: m.prop,
                class: g(f(i).e("cell")),
                style: j(O(m)),
                onClick: (D) => E(d, m, D)
              }, [
                B(e.$slots, `column-${m.prop}`, {
                  row: d,
                  column: m,
                  $index: p
                }, () => [
                  J(A(V(d, m, p)), 1)
                ])
              ], 14, Le))), 128)),
              l.showOperation ? (c(), h("td", {
                key: 2,
                class: g([f(i).e("cell"), f(i).e("operation-cell")])
              }, [
                B(e.$slots, "operation", {
                  row: d,
                  $index: p,
                  deleteRow: () => F(p)
                }, () => [
                  y("button", {
                    class: g(f(i).e("operation-btn")),
                    onClick: de((m) => F(p), ["stop"])
                  }, " 删除 ", 10, je)
                ])
              ], 2)) : S("", !0)
            ], 10, Te))), 128))
          ]),
          T.value.length === 0 && !l.loading ? (c(), h("tbody", Be, [
            y("tr", null, [
              y("td", {
                colspan: l.columns.length + (l.rowKey ? 1 : 0) + (l.showIndex ? 1 : 0) + (l.showOperation ? 1 : 0),
                class: g(f(i).e("empty"))
              }, [
                B(e.$slots, "empty", {}, () => [
                  J(A(l.emptyText), 1)
                ])
              ], 10, He)
            ])
          ])) : S("", !0)
        ])
      ], 6)
    ], 2));
  }
}), Pe = ["draggable"], We = {
  key: 0,
  class: "x-tree-node__loading-icon"
}, Re = {
  key: 0,
  class: "x-tree-node__expand-arrow"
}, Oe = {
  key: 0,
  class: "x-tree-node__icon"
}, Ge = { class: "x-tree-node__label" }, Ye = /* @__PURE__ */ G({
  name: "XTreeNode",
  __name: "tree-node",
  props: {
    node: {}
  },
  setup(l) {
    const o = l, r = oe("tree"), { props: t, store: u, toggleExpand: i, toggleCheck: s, handleNodeClick: k, handleNodeContextmenu: b } = r, M = P(), C = P(null), T = x(() => o.node.expanded), L = x(() => o.node.checked), w = x(() => o.node.indeterminate), $ = x(() => o.node.disabled), K = x(() => o.node.loading), N = x(() => o.node.isLeaf), V = x(() => t.showCheckbox || t.checkable), X = x(() => o.node.selected), E = x(() => ({
      paddingLeft: `${o.node.level * (t.indent || 16)}px`
    })), z = (n) => {
      k(o.node, n);
    }, W = (n) => {
      b(o.node, n);
    }, Z = (n) => {
      n.stopPropagation(), $.value || i(o.node);
    }, O = (n) => {
      n.stopPropagation(), $.value || s(o.node);
    }, Q = (n) => {
      var e;
      if (!(!t.draggable || $.value)) {
        if (t.allowDrag && !t.allowDrag(o.node)) {
          n.preventDefault();
          return;
        }
        n.dataTransfer.effectAllowed = "move", n.dataTransfer.setData("nodeKey", String(o.node.key)), (e = r.emit) == null || e.call(r, "node-drag-start", o.node, n);
      }
    }, F = (n) => {
      var e;
      n.preventDefault(), t.draggable && (C.value = "inner", (e = r.emit) == null || e.call(r, "node-drag-enter", o.node, n));
    }, _ = (n) => {
      var e;
      C.value = null, (e = r.emit) == null || e.call(r, "node-drag-leave", o.node, n);
    }, ae = (n) => {
      var p, m;
      if (n.preventDefault(), !t.draggable || $.value) return;
      const e = (p = M.value) == null ? void 0 : p.getBoundingClientRect();
      if (!e) return;
      const a = n.clientY - e.top, d = e.height;
      a < d * 0.25 ? C.value = "prev" : a > d * 0.75 ? C.value = "next" : C.value = "inner", (m = r.emit) == null || m.call(r, "node-drag-over", o.node, n);
    }, v = (n) => {
      var a, d;
      if (n.preventDefault(), !t.draggable) return;
      const e = (a = n.dataTransfer) == null ? void 0 : a.getData("nodeKey");
      if (e) {
        const p = u.nodesMap.get(e);
        if (p && C.value) {
          if (t.allowDrop && !t.allowDrop(p, o.node, C.value)) {
            C.value = null;
            return;
          }
          (d = r.emit) == null || d.call(r, "node-drop", p, o.node, C.value, n);
        }
      }
      C.value = null;
    }, I = (n) => {
      var e;
      C.value = null, (e = r.emit) == null || e.call(r, "node-drag-end", o.node, n);
    };
    return (n, e) => {
      var d;
      const a = ye("TreeNode", !0);
      return ve((c(), h("div", {
        ref_key: "nodeRef",
        ref: M,
        class: g(["x-tree-node", {
          "is-expanded": T.value,
          "is-current": n.isCurrent,
          "is-selected": X.value,
          "is-disabled": $.value,
          "is-drop-inner": C.value === "inner",
          "is-drop-prev": C.value === "prev",
          "is-drop-next": C.value === "next"
        }]),
        draggable: f(t).draggable && !$.value,
        onDragstart: Q,
        onDragenter: F,
        onDragleave: _,
        onDragover: ae,
        onDrop: v,
        onDragend: I
      }, [
        y("div", {
          class: "x-tree-node__content",
          style: j(E.value),
          onClick: z,
          onContextmenu: W
        }, [
          y("span", {
            class: g(["x-tree-node__expand-icon", {
              "is-expanded": T.value,
              "is-leaf": N.value,
              "is-loading": K.value
            }]),
            onClick: Z
          }, [
            K.value ? (c(), h("span", We)) : (c(), h(R, { key: 1 }, [
              N.value ? S("", !0) : (c(), h("span", Re))
            ], 64))
          ], 2),
          l.node.icon || f(t).icon ? (c(), h("span", Oe, A(l.node.icon || f(t).icon), 1)) : S("", !0),
          V.value ? (c(), h("span", {
            key: 1,
            class: g(["x-tree-node__checkbox", {
              "is-checked": L.value,
              "is-indeterminate": w.value,
              "is-disabled": $.value
            }]),
            onClick: de(O, ["stop"])
          }, [...e[0] || (e[0] = [
            y("span", { class: "x-tree-node__checkbox-inner" }, null, -1)
          ])], 2)) : S("", !0),
          y("span", Ge, [
            B(n.$slots, "default", {
              node: l.node,
              data: l.node.data
            }, () => [
              J(A(l.node.label), 1)
            ])
          ])
        ], 36),
        !N.value && T.value ? (c(), h("div", {
          key: 0,
          class: g(["x-tree-node__children", { "x-tree-node__children--show-line": f(t).showLine }])
        }, [
          !f(t).renderAfterExpand || T.value ? (c(!0), h(R, { key: 0 }, U(l.node.children, (p) => (c(), se(a, {
            key: p.key,
            node: p
          }, {
            default: he((m) => [
              B(n.$slots, "default", {
                node: m.node,
                data: m.data
              })
            ]),
            _: 3
          }, 8, ["node"]))), 128)) : S("", !0)
        ], 2)) : S("", !0)
      ], 42, Pe)), [
        [me, l.node.visible && (((d = l.node.parent) == null ? void 0 : d.expanded) ?? !0)]
      ]);
    };
  }
});
class te {
  constructor(o, r, t = 0, u = null) {
    this.data = o, this.store = r, this.level = t, this.parent = u, this.children = [], this.expanded = !1, this.selected = !1, this.checked = !1, this.indeterminate = !1, this.loading = !1, this.visible = !0, this.loaded = !1;
    const i = r.props || {}, s = i.value || "value", k = i.label || "label", b = i.disabled || "disabled", M = i.isLeaf || "isLeaf";
    this.key = o[s] ?? o.value ?? o.id ?? Math.random().toString(), this.label = o[k] ?? o.label ?? "", this.disabled = o[b] ?? o.disabled ?? !1, this.isLeaf = o[M] ?? o.isLeaf ?? !1;
    const C = i.children || "children", T = o[C] ?? o.children ?? [];
    T.length > 0 ? this.children = T.map(
      (L) => new te(L, r, t + 1, this)
    ) : this.isLeaf = !0;
  }
  /** 设置展开状态 */
  setExpanded(o, r = !0) {
    this.expanded = o, o ? this.store.expandedKeys.add(this.key) : this.store.expandedKeys.delete(this.key);
  }
  /** 设置选中状态 */
  setSelected(o) {
    this.selected = o, o ? this.store.selectedKeys.add(this.key) : this.store.selectedKeys.delete(this.key);
  }
  /** 设置勾选状态 */
  setChecked(o, r = !0, t = !0) {
    this.checked = o, this.indeterminate = !1, o ? (this.store.checkedKeys.add(this.key), this.store.indeterminateKeys.delete(this.key)) : (this.store.checkedKeys.delete(this.key), this.store.indeterminateKeys.delete(this.key)), r && (this.updateChildrenChecked(o), this.updateParentChecked());
  }
  /** 更新子节点勾选状态 */
  updateChildrenChecked(o) {
    const r = (t) => {
      t.children.forEach((u) => {
        u.disabled || (u.checked = o, u.indeterminate = !1, o ? (this.store.checkedKeys.add(u.key), this.store.indeterminateKeys.delete(u.key)) : (this.store.checkedKeys.delete(u.key), this.store.indeterminateKeys.delete(u.key)), r(u));
      });
    };
    r(this);
  }
  /** 更新父节点勾选状态 */
  updateParentChecked() {
    let o = this.parent;
    for (; o; ) {
      const r = o.children.filter((i) => !i.disabled);
      if (r.length === 0) {
        o = o.parent;
        continue;
      }
      const t = r.every((i) => i.checked), u = r.some((i) => i.checked || i.indeterminate);
      t ? (o.checked = !0, o.indeterminate = !1, this.store.checkedKeys.add(o.key), this.store.indeterminateKeys.delete(o.key)) : u ? (o.checked = !1, o.indeterminate = !0, this.store.checkedKeys.delete(o.key), this.store.indeterminateKeys.add(o.key)) : (o.checked = !1, o.indeterminate = !1, this.store.checkedKeys.delete(o.key), this.store.indeterminateKeys.delete(o.key)), o = o.parent;
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
    const o = [];
    let r = this.parent;
    for (; r; )
      o.push(r.key), r = r.parent;
    return o;
  }
  /** 获取所有子节点的 key */
  getChildrenKeys() {
    const o = [], r = (t) => {
      t.forEach((u) => {
        o.push(u.key), u.children.length && r(u.children);
      });
    };
    return r(this.children), o;
  }
}
const mt = /* @__PURE__ */ G({
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
  setup(l, { expose: o, emit: r }) {
    const t = l, u = r, i = Y("tree"), s = fe({
      nodesMap: /* @__PURE__ */ new Map(),
      rootNodes: [],
      expandedKeys: /* @__PURE__ */ new Set(),
      checkedKeys: /* @__PURE__ */ new Set(),
      selectedKeys: /* @__PURE__ */ new Set(),
      indeterminateKeys: /* @__PURE__ */ new Set(),
      currentKey: null,
      filterValue: ""
    }), k = P(""), b = () => t.fieldNames ? {
      value: t.fieldNames.key || "value",
      label: t.fieldNames.title || t.fieldNames.key || "label",
      children: t.fieldNames.children || "children",
      disabled: t.fieldNames.disabled || "disabled",
      isLeaf: t.fieldNames.isLeaf || "isLeaf"
    } : t.props, M = () => t.treeData || t.data || [];
    s.props = b();
    const C = (n) => {
      if (s.nodesMap.clear(), s.rootNodes = [], s.checkedKeys.clear(), s.indeterminateKeys.clear(), !n || !n.length) return;
      const e = b(), a = (d, p, m) => {
        const D = new te(d, s, p, m);
        s.nodesMap.set(D.key, D);
        const H = (e == null ? void 0 : e.children) || "children", ee = d[H] ?? d.children ?? [];
        return ee.length > 0 && (D.children = ee.map(
          (ne) => a(ne, p + 1, D)
        ), D.isLeaf = !1), D;
      };
      s.rootNodes = n.map((d) => a(d, 0, null)), T();
    }, T = () => {
      var n, e, a;
      t.defaultExpandAll ? L() : (n = t.defaultExpandedKeys) != null && n.length && t.defaultExpandedKeys.forEach((d) => {
        const p = s.nodesMap.get(d);
        p && (p.expanded = !0, s.expandedKeys.add(d));
      }), (e = t.defaultCheckedKeys) != null && e.length && t.defaultCheckedKeys.forEach((d) => {
        const p = s.nodesMap.get(d);
        p && p.setChecked(!0, !t.checkStrictly);
      }), (a = t.checkedKeys) != null && a.length && t.checkedKeys.forEach((d) => {
        const p = s.nodesMap.get(d);
        p && p.setChecked(!0, !t.checkStrictly);
      });
    }, L = () => {
      s.nodesMap.forEach((n) => {
        n.children.length > 0 && (n.expanded = !0, s.expandedKeys.add(n.key));
      });
    }, w = () => {
      s.nodesMap.forEach((n) => {
        n.expanded = !1;
      }), s.expandedKeys.clear();
    }, $ = (n) => {
      if (n.disabled) return;
      !n.expanded ? (n.expanded = !0, s.expandedKeys.add(n.key), u("node-expand", n.data, n, null)) : (n.expanded = !1, s.expandedKeys.delete(n.key), u("node-collapse", n.data, n, null));
    }, K = (n, e) => {
      if (n.disabled) return;
      const a = e ?? !n.checked;
      n.setChecked(a, !t.checkStrictly), u("check-change", n.data, n.checked, n.indeterminate);
      const d = [], p = [], m = [], D = [];
      s.nodesMap.forEach((H) => {
        H.checked && (d.push(H.data), p.push(H.key)), H.indeterminate && (m.push(H.data), D.push(H.key));
      }), u("check", n.data, {
        checkedNodes: d,
        checkedKeys: p,
        halfCheckedNodes: m,
        halfCheckedKeys: D
      });
    }, N = (n, e) => {
      n.disabled || (u("node-click", n.data, n, null), t.expandOnClickNode && n.children.length > 0 && $(n), t.highlightCurrent && (s.currentKey = n.key, u("current-change", n.data, n)));
    }, V = (n) => {
      if (k.value = n, s.filterValue = n, !n) {
        s.nodesMap.forEach((e) => {
          e.visible = !0;
        });
        return;
      }
      s.nodesMap.forEach((e) => {
        const a = e.label || "";
        e.visible = String(a).toLowerCase().includes(n.toLowerCase());
      }), s.nodesMap.forEach((e) => {
        if (e.visible && e.parent) {
          let a = e.parent;
          for (; a; )
            a.visible = !0, a.expanded = !0, s.expandedKeys.add(a.key), a = a.parent;
        }
      });
    }, X = (n) => s.nodesMap.get(n), E = (n) => {
      s.currentKey = n;
    }, z = () => {
      if (s.currentKey)
        return s.nodesMap.get(s.currentKey);
    }, W = (n = !1) => {
      const e = [];
      return s.nodesMap.forEach((a) => {
        a.checked && (!n || a.isLeaf) && e.push(a.data);
      }), e;
    }, Z = (n = !1) => {
      const e = [];
      return s.nodesMap.forEach((a) => {
        a.checked && (!n || a.isLeaf) && e.push(a.key);
      }), e;
    }, O = (n) => {
      s.nodesMap.forEach((e) => {
        e.checked = !1, e.indeterminate = !1;
      }), s.checkedKeys.clear(), s.indeterminateKeys.clear(), n.forEach((e) => {
        const a = s.nodesMap.get(e);
        a && a.setChecked(!0, !t.checkStrictly);
      });
    }, Q = () => {
      const n = [];
      return s.nodesMap.forEach((e) => {
        e.indeterminate && n.push(e.data);
      }), n;
    }, F = () => {
      const n = [];
      return s.nodesMap.forEach((e) => {
        e.indeterminate && n.push(e.key);
      }), n;
    }, _ = (n, e, a = !0) => {
      const d = s.nodesMap.get(n);
      d && d.setChecked(e, a && !t.checkStrictly);
    }, ae = () => {
      const n = [];
      return s.nodesMap.forEach((e) => {
        e.selected && n.push(e.data);
      }), n;
    }, v = (n) => {
      s.nodesMap.forEach((e) => {
        e.selected = !1;
      }), s.selectedKeys.clear(), n.forEach((e) => {
        const a = s.nodesMap.get(e);
        a && (a.selected = !0, s.selectedKeys.add(e));
      });
    }, I = x(() => t.showCheckbox || t.checkable);
    return le("tree", {
      props: t,
      store: s,
      emit: u,
      toggleExpand: $,
      toggleCheck: K,
      handleNodeClick: N,
      filterValue: ke(k),
      showCheckboxComputed: I
    }), o({
      filter: V,
      getNode: X,
      setCurrentKey: E,
      getCurrentKey: () => s.currentKey,
      getCurrentNode: z,
      getCheckedNodes: W,
      getCheckedKeys: Z,
      setCheckedKeys: O,
      getHalfCheckedNodes: Q,
      getHalfCheckedKeys: F,
      setChecked: _,
      getSelectedNodes: ae,
      setSelectedKeys: v,
      expandAll: L,
      collapseAll: w,
      // 额外方法
      updateKeyChildren: (n, e) => {
        const a = s.nodesMap.get(n);
        a && (a.children.forEach((d) => {
          s.nodesMap.delete(d.key);
        }), a.children = e.map((d) => {
          const p = new te(d, s, a.level + 1, a);
          return s.nodesMap.set(p.key, p), p;
        }), a.isLeaf = a.children.length === 0);
      },
      remove: (n) => {
        const e = s.nodesMap.get(n);
        if (e) {
          const a = e.parent;
          if (a) {
            const p = a.children.indexOf(e);
            p > -1 && a.children.splice(p, 1), a.children.length === 0 && (a.isLeaf = !0);
          } else {
            const p = s.rootNodes.indexOf(e);
            p > -1 && s.rootNodes.splice(p, 1);
          }
          const d = (p) => {
            s.nodesMap.delete(p.key), p.children.forEach(d);
          };
          d(e);
        }
      },
      append: (n, e) => {
        if (e) {
          const a = s.nodesMap.get(e);
          if (a) {
            const d = new te(n, s, a.level + 1, a);
            s.nodesMap.set(d.key, d), a.children.push(d), a.isLeaf = !1;
          }
        } else {
          const a = new te(n, s, 0, null);
          s.nodesMap.set(a.key, a), s.rootNodes.push(a);
        }
      },
      insertBefore: (n, e) => {
        var d;
        const a = s.nodesMap.get(e);
        if (a) {
          const p = new te(n, s, a.level, a.parent);
          s.nodesMap.set(p.key, p);
          const m = ((d = a.parent) == null ? void 0 : d.children) || s.rootNodes, D = m.indexOf(a);
          m.splice(D, 0, p);
        }
      },
      insertAfter: (n, e) => {
        var d;
        const a = s.nodesMap.get(e);
        if (a) {
          const p = new te(n, s, a.level, a.parent);
          s.nodesMap.set(p.key, p);
          const m = ((d = a.parent) == null ? void 0 : d.children) || s.rootNodes, D = m.indexOf(a);
          m.splice(D + 1, 0, p);
        }
      }
    }), q(
      () => [t.treeData, t.data],
      () => {
        C(M());
      },
      { immediate: !0, deep: !0 }
    ), q(
      () => t.checkedKeys,
      (n) => {
        n && O(n);
      },
      { immediate: !0, deep: !0 }
    ), q(
      () => t.defaultCheckedKeys,
      (n) => {
        n && n.length > 0 && !t.checkedKeys && O(n);
      },
      { immediate: !0, deep: !0 }
    ), (n, e) => (c(), h("div", {
      class: g([f(i).b(), f(i).m(l.size)])
    }, [
      (c(!0), h(R, null, U(s.rootNodes, (a) => (c(), se(Ye, {
        key: a.key,
        node: a
      }, {
        default: he((d) => [
          B(n.$slots, "default", {
            node: d.node,
            data: d.data
          }, () => [
            J(A(d.node.label), 1)
          ])
        ]),
        _: 2
      }, 1032, ["node"]))), 128)),
      s.rootNodes.length ? S("", !0) : (c(), h("div", {
        key: 0,
        class: g(f(i).e("empty"))
      }, [
        B(n.$slots, "empty", {}, () => [
          J(A(l.emptyText), 1)
        ])
      ], 2))
    ], 2));
  }
}), Xe = ["src"], Qe = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg0IiBoZWlnaHQ9IjE1MiIgdmlld0JveD0iMCAwIDE4NCAxNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0IDMxLjY3KSI+CiAgICAgIDxlbGxpcHNlIGZpbGwtb3BhY2l0eT0iLjgiIGZpbGw9IiNGNUY1RjciIGN4PSI2Ny43OTciIGN5PSIxMDYuODkiIHJ4PSI2Ny43OTciIHJ5PSIxMi42NjgiLz4KICAgICAgPHBhdGggZD0iTTEyMi4wMzQgNjkuNjc0TDk5LjM5NCA0OC4xNjJsMCAyMS41MTYgMjIuNjQgMjIuNjQ0IDAtMjIuNjQ0em0tMjIuNjQgMjIuNjQ0TDc2Ljk5OCA3MC43OThsMCAyMS41MTYgMjIuMzk2IDIyLjM5NiAwLTIyLjM5NnoiIGZpbGw9IiNFRkVGRkYiLz4KICAgICAgPHBhdGggZD0iTTk5LjM5NCA0OC4xNjJsLTIyLjM5NiAyMi42MzYgMjIuMzk2IDIxLjUyIDAtNDQuMTU2eiIgZmlsbD0iI0YyRjZGQyIvPgogICAgICA8cGF0aCBkPSJNMTIxLjk3OCA2OS42NzRMOTkuMzk0IDkyLjI1OGwzLjE2OCAzLjE2OCAyMi41ODQtMjIuNTg0LTMuMTY4LTMuMTY4eiIgZmlsbD0iI0M3Q0NEQyIvPgogICAgICA8cGF0aCBkPSJNOTkuMzk0IDkyLjI1OEw3Ni44MSA2OS42NzRsMy4xNjgtMy4xNjggMjIuNTg0IDIyLjU4NC0zLjE2OCAzLjE2OHoiIGZpbGw9IiNDN0NEREMiLz4KICAgIDwvZz4KICAgIDxwYXRoIGQ9Ik0xNDcuODU3IDMxLjY3bC0zLjI5Mi0zLjI5MmEyLjUgMi41IDAgMCAwLTMuNTM2IDBsLTEzLjQ2IDEzLjQ2YTMuNSAzLjUgMCAwIDAgMCA0Ljk1bDMuMjkzIDMuMjkyYTMuNSAzLjUgMCAwIDAgNC45NSAwbDEzLjQ2LTEzLjQ2YTIuNSAyLjUgMCAwIDAgMC0zLjUzNnoiIGZpbGw9IiNENkRCRUMiLz4KICAgIDxwYXRoIGQ9Ik0zNi4xNDMgMzEuNjdsMy4yOTItMy4yOTJhMi41IDIuNSAwIDAgMSAzLjUzNiAwbDEzLjQ2IDEzLjQ2YTMuNSAzLjUgMCAwIDEgMCA0Ljk1bC0zLjI5MyAzLjI5MmEzLjUgMy41IDAgMCAxLTQuOTUgMEwzNi4xNDMgMzUuMmEyLjUgMi41IDAgMCAxIDAtMy41MzZ6IiBmaWxsPSIjRDZEQkVDIi8+CiAgICA8Y2lyY2xlIGZpbGw9IiNFQUVFRjQiIGN4PSI5MiIgY3k9IjgiIHI9IjgiLz4KICA8L2c+Cjwvc3ZnPg==", kt = /* @__PURE__ */ G({
  name: "XEmpty",
  __name: "index",
  props: {
    image: { default: "" },
    imageSize: { default: 0 },
    description: { default: "" },
    size: { default: "default" }
  },
  setup(l) {
    const o = l, r = Y("empty"), t = x(() => {
      const i = {};
      return o.imageSize && (i.height = `${o.imageSize}px`, i.width = `${o.imageSize}px`), i;
    }), u = x(() => o.description || "暂无数据");
    return (i, s) => (c(), h("div", {
      class: g([f(r).b(), f(r).m(l.size)])
    }, [
      y("div", {
        class: g(f(r).e("image")),
        style: j(t.value)
      }, [
        B(i.$slots, "image", {}, () => [
          l.image ? (c(), h("img", {
            key: 0,
            src: l.image,
            style: j(t.value),
            draggable: "false"
          }, null, 12, Xe)) : (c(), h("img", {
            key: 1,
            src: Qe,
            style: j(t.value),
            draggable: "false"
          }, null, 4))
        ])
      ], 6),
      y("div", {
        class: g(f(r).e("description"))
      }, [
        B(i.$slots, "description", {}, () => [
          y("p", null, A(u.value), 1)
        ])
      ], 2),
      i.$slots.default ? (c(), h("div", {
        key: 0,
        class: g(f(r).e("bottom"))
      }, [
        B(i.$slots, "default")
      ], 2)) : S("", !0)
    ], 2));
  }
}), xt = /* @__PURE__ */ G({
  name: "XTimeline",
  __name: "index",
  props: {
    direction: { default: "vertical" }
  },
  setup(l) {
    const o = l, r = Y("timeline");
    le("timeline", {
      props: o
    });
    const t = x(() => [
      r.b(),
      r.m(o.direction)
    ]);
    return (u, i) => (c(), h("ul", {
      class: g(t.value),
      role: "timeline"
    }, [
      B(u.$slots, "default")
    ], 2));
  }
}), bt = /* @__PURE__ */ G({
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
    const o = l, r = Y("timeline-item"), t = {
      primary: "#409eff",
      success: "#67c23a",
      warning: "#e6a23c",
      danger: "#f56c6c",
      info: "#909399"
    }, u = x(() => {
      const s = {};
      return o.color ? s.backgroundColor = o.color : o.type && t[o.type] && (s.backgroundColor = t[o.type]), s;
    }), i = x(() => [
      r.b(),
      r.m(o.size)
    ]);
    return (s, k) => (c(), h("li", {
      class: g(i.value)
    }, [
      y("div", {
        class: g(f(r).e("node")),
        style: j(u.value)
      }, [
        B(s.$slots, "dot")
      ], 6),
      y("div", {
        class: g(f(r).e("tail"))
      }, null, 2),
      y("div", {
        class: g(f(r).e("wrapper"))
      }, [
        !l.hideTimestamp && l.timestamp && l.placement === "top" ? (c(), h("div", {
          key: 0,
          class: g(f(r).e("timestamp"))
        }, A(l.timestamp), 3)) : S("", !0),
        y("div", {
          class: g(f(r).e("content"))
        }, [
          B(s.$slots, "default")
        ], 2),
        !l.hideTimestamp && l.timestamp && l.placement === "bottom" ? (c(), h("div", {
          key: 1,
          class: g(f(r).e("timestamp"))
        }, A(l.timestamp), 3)) : S("", !0)
      ], 2)
    ], 2));
  }
}), Ze = ["onMouseenter", "onClick"], Ct = /* @__PURE__ */ G({
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
  setup(l, { expose: o, emit: r }) {
    const t = l, u = r, i = Y("carousel"), s = P(t.activeIndex), k = P(0), b = P(null), M = P(!1);
    le("carousel", {
      currentIndex: s,
      itemCount: k
    });
    const C = (W) => {
      const Z = s.value;
      t.loop ? s.value = (W + k.value) % k.value : s.value = Math.max(0, Math.min(W, k.value - 1)), u("update:activeIndex", s.value), u("change", s.value, Z);
    }, T = () => {
      C(s.value - 1);
    }, L = () => {
      C(s.value + 1);
    }, w = () => {
      t.autoplay && k.value > 1 && ($(), b.value = setInterval(() => {
        M.value || L();
      }, t.interval));
    }, $ = () => {
      b.value && (clearInterval(b.value), b.value = null);
    }, K = () => {
      M.value = !0, t.arrow;
    }, N = () => {
      M.value = !1;
    }, V = (W) => {
      t.trigger === "hover" && C(W);
    }, X = (W) => {
      t.trigger === "click" && C(W);
    }, E = x(() => ({
      height: typeof t.height == "number" ? `${t.height}px` : t.height
    })), z = x(() => [
      i.b(),
      i.m(`arrow-${t.arrow}`),
      i.m(`indicator-${t.indicatorPosition}`)
    ]);
    return q(() => t.activeIndex, (W) => {
      s.value = W;
    }), q(() => t.autoplay, () => {
      w();
    }), q(k, () => {
      pe(() => {
        w();
      });
    }), ie(() => {
      w();
    }), re(() => {
      $();
    }), o({
      prev: T,
      next: L,
      setActiveItem: C
    }), (W, Z) => (c(), h("div", {
      class: g(z.value),
      style: j(E.value),
      onMouseenter: K,
      onMouseleave: N
    }, [
      y("div", {
        class: g(f(i).e("container"))
      }, [
        B(W.$slots, "default")
      ], 2),
      l.arrow !== "never" ? (c(), h("button", {
        key: 0,
        class: g([f(i).e("arrow"), f(i).e("arrow-left")]),
        onClick: T
      }, " ‹ ", 2)) : S("", !0),
      l.arrow !== "never" ? (c(), h("button", {
        key: 1,
        class: g([f(i).e("arrow"), f(i).e("arrow-right")]),
        onClick: L
      }, " › ", 2)) : S("", !0),
      l.indicatorPosition !== "none" ? (c(), h("ul", {
        key: 2,
        class: g(f(i).e("indicators"))
      }, [
        (c(!0), h(R, null, U(k.value, (O) => (c(), h("li", {
          key: O,
          class: g([f(i).e("indicator"), f(i).is("active", O - 1 === s.value)]),
          onMouseenter: (Q) => V(O - 1),
          onClick: (Q) => X(O - 1)
        }, [
          y("button", {
            class: g(f(i).e("indicator-btn"))
          }, null, 2)
        ], 42, Ze))), 128))
      ], 2)) : S("", !0)
    ], 38));
  }
}), wt = /* @__PURE__ */ G({
  name: "XCarouselItem",
  __name: "CarouselItem",
  setup(l) {
    const o = Y("carousel-item"), r = oe("carousel"), t = P(-1);
    ie(() => {
      r && (t.value = r.itemCount.value, r.itemCount.value++);
    }), re(() => {
      r && r.itemCount.value--;
    });
    const u = x(() => r && t.value === r.currentIndex.value), i = x(() => [
      o.b(),
      o.is("active", u.value)
    ]);
    return (s, k) => (c(), h("div", {
      class: g(i.value)
    }, [
      B(s.$slots, "default")
    ], 2));
  }
}), Ve = { key: 0 }, Ue = ["onClick"], Fe = ["onClick"], Je = ["onClick"], qe = { key: 1 }, _e = ["colspan"], et = { style: { display: "none" } }, It = /* @__PURE__ */ G({
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
  setup(l, { expose: o, emit: r }) {
    var I, n;
    const t = l, u = r, i = Y("table");
    ue();
    const s = fe([]);
    le("x-table", {
      registerColumn: (e, a) => {
        s.findIndex((p) => p.config.prop === e.prop) === -1 && s.push({ config: e, slot: a });
      },
      unregisterColumn: (e) => {
        const a = s.findIndex((d) => d.config.prop === e);
        a !== -1 && s.splice(a, 1);
      },
      updateColumnSlot: (e, a) => {
        const d = s.find((p) => p.config.prop === e);
        d && (d.slot = a);
      },
      props: t
    });
    const C = x(() => {
      const e = s.map((m) => m.config), a = e.filter((m) => m.fixed === "left" || m.fixed === !0), d = e.filter((m) => !m.fixed), p = e.filter((m) => m.fixed === "right");
      return [...a, ...d, ...p];
    }), T = x(() => C.value.filter((e) => e.fixed === "left" || e.fixed === !0)), L = x(() => C.value.filter((e) => e.fixed === "right"));
    x(() => C.value.filter((e) => !e.fixed)), x(() => T.value.reduce((e, a) => {
      const d = a.width ? typeof a.width == "number" ? a.width : parseInt(a.width) : 100;
      return e + d;
    }, 0)), x(() => L.value.reduce((e, a) => {
      const d = a.width ? typeof a.width == "number" ? a.width : parseInt(a.width) : 100;
      return e + d;
    }, 0));
    const w = x(() => {
      const e = {};
      return s.forEach((a) => {
        a.slot && (e[a.config.prop] = a.slot);
      }), e;
    }), $ = P({
      prop: ((I = t.defaultSort) == null ? void 0 : I.prop) || "",
      order: ((n = t.defaultSort) == null ? void 0 : n.order) || null
    }), K = x(() => {
      if (!$.value.prop || !$.value.order)
        return t.data;
      const { prop: e, order: a } = $.value;
      return [...t.data].sort((d, p) => {
        const m = d[e], D = p[e];
        if (m === D) return 0;
        const H = m > D ? 1 : -1;
        return a === "ascending" ? H : -H;
      });
    }), N = x(() => {
      const e = {};
      return t.height && (e.height = typeof t.height == "number" ? `${t.height}px` : t.height), t.maxHeight && (e.maxHeight = typeof t.maxHeight == "number" ? `${t.maxHeight}px` : t.maxHeight), e;
    }), V = x(() => [
      i.b(),
      i.is("border", t.border),
      i.is("stripe", t.stripe),
      i.is("loading", t.loading),
      i.is("has-fixed", T.value.length > 0 || L.value.length > 0)
    ]), X = (e) => {
      e.sortable && ($.value.prop === e.prop ? $.value.order === "ascending" ? $.value.order = "descending" : $.value.order === "descending" && ($.value.order = null, $.value.prop = "") : ($.value.prop = e.prop, $.value.order = "ascending"), u("sort-change", { ...$.value }));
    }, E = (e) => e.sortable ? $.value.prop !== e.prop ? i.is("sortable") : [
      i.is("sortable"),
      i.is(`sort-${$.value.order}`)
    ] : "", z = (e, a, d) => {
      const p = e[a.prop];
      return a.formatter ? a.formatter(e, a, p, d) : p ?? "";
    }, W = (e, a) => {
      u("row-click", e, C.value[0], a);
    }, Z = (e, a, d) => {
      const p = d.target;
      u("cell-click", e, a, p, d);
    }, O = (e) => {
      u("page-change", e);
    }, Q = (e) => {
      u("size-change", e);
    }, F = (e, a, d) => {
      const p = {};
      if (e.width && (p.width = typeof e.width == "number" ? `${e.width}px` : e.width), e.minWidth && (p.minWidth = typeof e.minWidth == "number" ? `${e.minWidth}px` : e.minWidth), e.align && (p.textAlign = e.align), (e.fixed === "left" || e.fixed === !0) && (p.position = "sticky", p.left = "0px", p.zIndex = "2", a !== void 0 && a > 0)) {
        let m = 0;
        for (let D = 0; D < a; D++) {
          const H = T.value[D], ee = H.width ? typeof H.width == "number" ? H.width : parseInt(H.width) : 100;
          m += ee;
        }
        p.left = `${m}px`;
      }
      if (e.fixed === "right" && (p.position = "sticky", p.right = "0px", p.zIndex = "2", a !== void 0)) {
        const m = L.value, D = m.length - 1 - a;
        if (D > 0) {
          let H = 0;
          for (let ee = 0; ee < D; ee++) {
            const ne = m[m.length - 1 - ee], ge = ne.width ? typeof ne.width == "number" ? ne.width : parseInt(ne.width) : 100;
            H += ge;
          }
          p.right = `${H}px`;
        }
      }
      return p;
    }, _ = (e) => {
      const a = [];
      return (e.fixed === "left" || e.fixed === !0) && a.push(i.is("fixed-left")), e.fixed === "right" && a.push(i.is("fixed-right")), a;
    };
    return o({
      clearSelection: () => {
      },
      getSelection: () => [],
      sortState: $,
      columns: C
    }), (e, a) => (c(), h("div", {
      class: g(V.value)
    }, [
      l.loading ? (c(), h("div", {
        key: 0,
        class: g(f(i).e("loading"))
      }, [...a[0] || (a[0] = [
        y("span", { class: "loading-spinner" }, null, -1),
        y("span", { class: "loading-text" }, "加载中...", -1)
      ])], 2)) : S("", !0),
      y("div", {
        class: g(f(i).e("wrapper")),
        style: j(N.value)
      }, [
        y("table", null, [
          l.showHeader ? (c(), h("thead", Ve, [
            y("tr", null, [
              (c(!0), h(R, null, U(C.value, (d, p) => (c(), h("th", {
                key: d.prop,
                class: g([f(i).e("header-cell"), E(d), ..._(d)]),
                style: j(F(d, d.fixed === "right" ? L.value.indexOf(d) : p)),
                onClick: (m) => X(d)
              }, [
                y("span", null, A(d.label), 1),
                d.sortable ? (c(), h("span", {
                  key: 0,
                  class: g(f(i).e("sort-icon"))
                }, [...a[1] || (a[1] = [
                  y("span", { class: "sort-arrow up" }, "▲", -1),
                  y("span", { class: "sort-arrow down" }, "▼", -1)
                ])], 2)) : S("", !0)
              ], 14, Ue))), 128))
            ])
          ])) : S("", !0),
          y("tbody", null, [
            (c(!0), h(R, null, U(K.value, (d, p) => (c(), h("tr", {
              key: l.rowKey ? typeof l.rowKey == "function" ? l.rowKey(d) : d[l.rowKey] : p,
              class: g([f(i).e("row")]),
              onClick: (m) => W(d, m)
            }, [
              (c(!0), h(R, null, U(C.value, (m, D) => (c(), h("td", {
                key: m.prop,
                class: g([f(i).e("cell"), ..._(m)]),
                style: j(F(m, m.fixed === "right" ? L.value.indexOf(m) : D)),
                onClick: (H) => Z(d, m, H)
              }, [
                w.value[m.prop] ? (c(), se(ce(() => w.value[m.prop]({ row: d, column: m, $index: p })), { key: 0 })) : (c(), h(R, { key: 1 }, [
                  J(A(z(d, m, p)), 1)
                ], 64))
              ], 14, Je))), 128))
            ], 10, Fe))), 128))
          ]),
          K.value.length === 0 && !l.loading ? (c(), h("tbody", qe, [
            y("tr", null, [
              y("td", {
                colspan: C.value.length || 1,
                class: g(f(i).e("empty"))
              }, [
                B(e.$slots, "empty", {}, () => [
                  J(A(l.emptyText), 1)
                ])
              ], 10, _e)
            ])
          ])) : S("", !0)
        ])
      ], 6),
      l.pagination ? (c(), h("div", {
        key: 1,
        class: g(f(i).e("pagination"))
      }, [
        xe(Ne, {
          total: l.pagination.total,
          "current-page": l.pagination.current,
          "page-size": l.pagination.pageSize,
          onCurrentChange: O,
          onSizeChange: Q
        }, null, 8, ["total", "current-page", "page-size"])
      ], 2)) : S("", !0),
      y("div", et, [
        B(e.$slots, "default")
      ])
    ], 2));
  }
}), $t = /* @__PURE__ */ G({
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
    const o = l;
    Y("table-column");
    const r = ue(), t = P(`column_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`), u = oe("x-table"), i = x(() => ({
      prop: o.prop || t.value,
      label: o.label,
      width: o.width,
      minWidth: o.minWidth,
      align: o.align,
      sortable: o.sortable,
      fixed: o.fixed,
      formatter: o.formatter
    }));
    return ie(() => {
      u != null && u.registerColumn && u.registerColumn(i.value, r.default);
    }), q(() => r.default, (s) => {
      u != null && u.updateColumnSlot && s && u.updateColumnSlot(o.prop || t.value, s);
    }, { immediate: !0 }), re(() => {
      u != null && u.unregisterColumn && u.unregisterColumn(o.prop || t.value);
    }), (s, k) => null;
  }
}), tt = { key: 0 }, at = ["onClick"], nt = ["onClick"], st = { key: 0 }, lt = { key: 1 }, ot = { key: 0 }, it = ["colspan"], rt = { style: { display: "none" } }, Mt = /* @__PURE__ */ G({
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
  setup(l, { expose: o, emit: r }) {
    const t = l, u = r, i = Y("tree-table"), s = P(/* @__PURE__ */ new Set()), k = P([]), b = P({});
    le("x-tree-table", {
      registerColumn: (v, I) => {
        const n = k.value.findIndex((e) => e.prop === v.prop);
        n === -1 ? k.value.push(v) : k.value[n] = v, I && (b.value[v.prop] = I);
      },
      unregisterColumn: (v) => {
        const I = k.value.findIndex((n) => n.prop === v);
        I > -1 && k.value.splice(I, 1), delete b.value[v];
      },
      updateColumnSlot: (v, I) => {
        b.value[v] = I;
      },
      props: t
    });
    const L = (v) => typeof t.rowKey == "function" ? t.rowKey(v) : v[t.rowKey || "id"], w = (v) => {
      var n;
      const I = ((n = t.treeProps) == null ? void 0 : n.children) || "children";
      return v[I] || [];
    }, $ = (v) => {
      var e;
      if (w(v).length > 0) return !0;
      const n = ((e = t.treeProps) == null ? void 0 : e.hasChildren) || "hasChildren";
      return v[n] === !0;
    }, K = (v) => {
      const I = L(v);
      return s.value.has(I);
    }, N = (v) => {
      const I = L(v), n = !s.value.has(I);
      n ? s.value.add(I) : s.value.delete(I), u("expand-change", v, n);
    }, V = () => {
      const v = (I) => {
        I.forEach((n) => {
          $(n) && (s.value.add(L(n)), v(w(n)));
        });
      };
      v(t.data);
    }, X = () => {
      s.value.clear();
    }, E = x(() => {
      const v = [], I = (n, e = 0, a = !0) => {
        n.forEach((d) => {
          const p = L(d), m = s.value.has(p), D = a;
          v.push({ row: d, level: e, visible: D });
          const H = w(d);
          H.length > 0 && m && I(H, e + 1, D);
        });
      };
      return I(t.data), v;
    }), z = P({
      prop: "",
      order: null
    }), W = x(() => {
      if (!z.value.prop || !z.value.order)
        return E.value;
      const { prop: v, order: I } = z.value;
      return [...E.value].sort((n, e) => {
        const a = n.row[v], d = e.row[v];
        if (a === d) return 0;
        const p = a > d ? 1 : -1;
        return I === "ascending" ? p : -p;
      });
    }), Z = (v) => {
      v.sortable && (z.value.prop === v.prop ? z.value.order === "ascending" ? z.value.order = "descending" : z.value.order === "descending" && (z.value.order = null, z.value.prop = "") : (z.value.prop = v.prop, z.value.order = "ascending"), u("sort-change", { ...z.value }));
    }, O = (v) => v.sortable ? z.value.prop !== v.prop ? i.is("sortable") : [
      i.is("sortable"),
      i.is(`sort-${z.value.order}`)
    ] : "", Q = (v, I, n) => {
      const e = v[I.prop];
      return I.formatter ? I.formatter(v, I, e, n) : e ?? "";
    }, F = (v) => {
      const I = {};
      return v.width && (I.width = typeof v.width == "number" ? `${v.width}px` : v.width), v.minWidth && (I.minWidth = typeof v.minWidth == "number" ? `${v.minWidth}px` : v.minWidth), v.align && (I.textAlign = v.align), I;
    }, _ = x(() => [
      i.b(),
      i.is("border", t.border),
      i.is("stripe", t.stripe),
      i.is("loading", t.loading)
    ]), ae = () => {
      var v;
      t.defaultExpandAll ? V() : (v = t.defaultExpandedKeys) != null && v.length && t.defaultExpandedKeys.forEach((I) => {
        s.value.add(I);
      });
    };
    return q(() => t.data, () => {
      ae();
    }, { immediate: !0 }), q(() => t.defaultExpandedKeys, (v) => {
      v != null && v.length && !t.defaultExpandAll && (s.value.clear(), v.forEach((I) => {
        s.value.add(I);
      }));
    }, { immediate: !0 }), o({
      expandAll: V,
      collapseAll: X,
      toggleExpand: N,
      expandedKeys: s,
      columns: k
    }), (v, I) => (c(), h("div", {
      class: g(_.value)
    }, [
      l.loading ? (c(), h("div", {
        key: 0,
        class: g(f(i).e("loading"))
      }, [...I[0] || (I[0] = [
        y("span", { class: "loading-spinner" }, null, -1),
        y("span", { class: "loading-text" }, "加载中...", -1)
      ])], 2)) : S("", !0),
      y("div", {
        class: g(f(i).e("wrapper"))
      }, [
        y("table", null, [
          l.showHeader ? (c(), h("thead", tt, [
            y("tr", null, [
              (c(!0), h(R, null, U(k.value, (n) => (c(), h("th", {
                key: n.prop,
                class: g([f(i).e("header-cell"), O(n)]),
                style: j(F(n)),
                onClick: (e) => Z(n)
              }, [
                y("span", null, A(n.label), 1),
                n.sortable ? (c(), h("span", {
                  key: 0,
                  class: g(f(i).e("sort-icon"))
                }, [...I[1] || (I[1] = [
                  y("span", { class: "sort-arrow up" }, "▲", -1),
                  y("span", { class: "sort-arrow down" }, "▼", -1)
                ])], 2)) : S("", !0)
              ], 14, at))), 128))
            ])
          ])) : S("", !0),
          y("tbody", null, [
            (c(!0), h(R, null, U(W.value, (n, e) => (c(), h(R, {
              key: L(n.row)
            }, [
              n.visible ? (c(), h("tr", {
                key: 0,
                class: g([f(i).e("row"), f(i).is("level-" + n.level)])
              }, [
                (c(!0), h(R, null, U(k.value, (a, d) => (c(), h("td", {
                  key: a.prop,
                  class: g(f(i).e("cell")),
                  style: j(F(a))
                }, [
                  d === 0 ? (c(), h("div", {
                    key: 0,
                    class: g(f(i).e("cell-content"))
                  }, [
                    y("span", {
                      class: g(f(i).e("indent")),
                      style: j({ width: `${n.level * l.indent}px` })
                    }, null, 6),
                    $(n.row) ? (c(), h("span", {
                      key: 0,
                      class: g([f(i).e("expand-icon"), f(i).is("expanded", K(n.row))]),
                      onClick: de((p) => N(n.row), ["stop"])
                    }, [
                      K(n.row) ? (c(), h("span", st, "▼")) : (c(), h("span", lt, "▶"))
                    ], 10, nt)) : (c(), h("span", {
                      key: 1,
                      class: g(f(i).e("expand-placeholder"))
                    }, null, 2)),
                    y("span", null, [
                      b.value[a.prop] ? (c(), se(ce(() => b.value[a.prop]({ row: n.row, column: a, $index: e })), { key: 0 })) : (c(), h(R, { key: 1 }, [
                        J(A(Q(n.row, a, e)), 1)
                      ], 64))
                    ])
                  ], 2)) : b.value[a.prop] ? (c(), se(ce(() => b.value[a.prop]({ row: n.row, column: a, $index: e })), { key: 1 })) : (c(), h(R, { key: 2 }, [
                    J(A(Q(n.row, a, e)), 1)
                  ], 64))
                ], 6))), 128))
              ], 2)) : S("", !0)
            ], 64))), 128)),
            W.value.length === 0 && !l.loading ? (c(), h("tr", ot, [
              y("td", {
                colspan: k.value.length || 1,
                class: g(f(i).e("empty"))
              }, [
                B(v.$slots, "empty", {}, () => [
                  J(A(l.emptyText), 1)
                ])
              ], 10, it)
            ])) : S("", !0)
          ])
        ])
      ], 2),
      y("div", rt, [
        B(v.$slots, "default")
      ])
    ], 2));
  }
}), St = /* @__PURE__ */ G({
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
    const o = l;
    Y("tree-table-column");
    const r = ue(), t = oe("x-tree-table"), u = x(() => ({
      prop: o.prop,
      label: o.label,
      width: o.width,
      minWidth: o.minWidth,
      align: o.align,
      sortable: o.sortable,
      fixed: o.fixed,
      formatter: o.formatter
    }));
    return ie(() => {
      t != null && t.registerColumn && t.registerColumn(u.value, r.default);
    }), q(() => r.default, (i) => {
      t != null && t.updateColumnSlot && i && t.updateColumnSlot(o.prop, i);
    }, { immediate: !0 }), re(() => {
      t != null && t.unregisterColumn && t.unregisterColumn(o.prop);
    }), (i, s) => null;
  }
}), dt = ["src", "alt"], Kt = /* @__PURE__ */ G({
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
  setup(l, { emit: o }) {
    const r = l, t = o, u = Y("avatar"), i = x(() => [
      u.b(),
      u.m(r.shape),
      typeof r.size == "string" ? u.m(r.size) : ""
    ]), s = x(() => {
      const b = {};
      return typeof r.size == "number" && (b.width = `${r.size}px`, b.height = `${r.size}px`, b.lineHeight = `${r.size}px`), b;
    }), k = (b) => {
      t("error", b);
    };
    return (b, M) => (c(), h("span", {
      class: g(i.value),
      style: j(s.value)
    }, [
      l.src ? (c(), h("img", {
        key: 0,
        src: l.src,
        alt: l.alt,
        style: j({ objectFit: l.fit }),
        onError: k
      }, null, 44, dt)) : l.icon ? (c(), h("span", {
        key: 1,
        class: g(f(u).e("icon"))
      }, A(l.icon), 3)) : (c(), h("span", {
        key: 2,
        class: g(f(u).e("default"))
      }, [
        B(b.$slots, "default")
      ], 2))
    ], 6));
  }
}), Nt = /* @__PURE__ */ G({
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
    const o = l, r = Y("descriptions");
    le("x-descriptions", {
      props: o,
      column: x(() => o.column)
    });
    const t = x(() => [
      r.b(),
      r.m(o.size),
      r.is("bordered", o.border)
    ]);
    return (u, i) => (c(), h("div", {
      class: g(t.value)
    }, [
      l.title ? (c(), h("div", {
        key: 0,
        class: g(f(r).e("title"))
      }, A(l.title), 3)) : S("", !0),
      y("div", {
        class: g(f(r).e("body"))
      }, [
        y("table", null, [
          y("tbody", null, [
            B(u.$slots, "default")
          ])
        ])
      ], 2)
    ], 2));
  }
}), ct = ["colspan"], ut = ["colspan"], zt = /* @__PURE__ */ G({
  name: "XDescriptionsItem",
  __name: "DescriptionsItem",
  props: {
    label: {},
    span: { default: 1 },
    labelAlign: {},
    contentAlign: {}
  },
  setup(l) {
    const o = l, r = Y("descriptions-item"), t = oe("x-descriptions"), u = x(() => {
      var T;
      const M = {}, C = (T = t == null ? void 0 : t.props) == null ? void 0 : T.labelWidth;
      return C && (M.width = typeof C == "number" ? `${C}px` : C), M;
    }), i = x(() => {
      var M;
      return o.labelAlign || ((M = t == null ? void 0 : t.props) == null ? void 0 : M.labelAlign) || "right";
    }), s = x(() => {
      var M;
      return o.contentAlign || ((M = t == null ? void 0 : t.props) == null ? void 0 : M.contentAlign) || "left";
    }), k = x(() => {
      var M;
      return ((M = t == null ? void 0 : t.props) == null ? void 0 : M.colon) ?? !0;
    }), b = x(() => {
      var M;
      return ((M = t == null ? void 0 : t.props) == null ? void 0 : M.border) ?? !1;
    });
    return (M, C) => b.value ? (c(), h(R, { key: 0 }, [
      y("th", {
        class: g([f(r).b(), f(r).e("label"), `is-${i.value}`]),
        style: j(u.value)
      }, A(l.label) + A(k.value ? ":" : ""), 7),
      y("td", {
        class: g([f(r).e("content"), `is-${s.value}`]),
        colspan: l.span * 2 - 1
      }, [
        B(M.$slots, "default")
      ], 10, ct)
    ], 64)) : (c(), h("tr", {
      key: 1,
      class: g(f(r).b())
    }, [
      y("th", {
        class: g([f(r).e("label"), `is-${i.value}`]),
        style: j(u.value)
      }, A(l.label) + A(k.value ? ":" : ""), 7),
      y("td", {
        class: g([f(r).e("content"), `is-${s.value}`]),
        colspan: l.span * 2 - 1
      }, [
        B(M.$slots, "default")
      ], 10, ut)
    ], 2));
  }
}), Dt = /* @__PURE__ */ G({
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
  setup(l, { expose: o, emit: r }) {
    const t = l, u = r, i = Y("scrollbar"), s = P(), k = P(), b = P("0"), M = P("0"), C = P(0), T = P(0), L = x(() => {
      const E = {};
      return t.height && (E.height = typeof t.height == "number" ? `${t.height}px` : t.height), t.maxHeight && (E.maxHeight = typeof t.maxHeight == "number" ? `${t.maxHeight}px` : t.maxHeight), E;
    }), w = () => {
      if (!s.value) return;
      const E = s.value.offsetHeight - 4, z = s.value.offsetWidth - 4, W = s.value.scrollHeight, Z = s.value.scrollWidth, O = E / W, Q = z / Z;
      M.value = O >= 1 ? "0" : `${E * O}px`, b.value = Q >= 1 ? "0" : `${z * Q}px`;
    }, $ = (E) => {
      if (!s.value) return;
      const z = s.value.offsetHeight, W = s.value.offsetWidth;
      T.value = s.value.scrollTop * 100 / z, C.value = s.value.scrollLeft * 100 / W, u("scroll", E);
    }, K = (E) => {
      var z;
      (z = s.value) == null || z.scrollTo(E);
    }, N = (E) => {
      s.value && (s.value.scrollTop = E);
    }, V = (E) => {
      s.value && (s.value.scrollLeft = E);
    };
    let X = null;
    return ie(() => {
      t.native || (pe(w), t.noresize || (X = new ResizeObserver(w), k.value && X.observe(k.value), window.addEventListener("resize", w)));
    }), re(() => {
      X && X.disconnect(), window.removeEventListener("resize", w);
    }), o({
      scrollTo: K,
      setScrollTop: N,
      setScrollLeft: V,
      update: w
    }), (E, z) => (c(), h("div", {
      class: g(f(i).b())
    }, [
      y("div", {
        ref_key: "wrapRef",
        ref: s,
        class: g([f(i).e("wrap"), l.wrapClass, { [f(i).em("wrap", "hidden-default")]: !l.native }]),
        style: j([L.value, { overflow: l.native ? "auto" : "hidden" }]),
        onScroll: $
      }, [
        (c(), se(ce(l.tag), {
          ref_key: "resizeRef",
          ref: k,
          class: g([f(i).e("view"), l.viewClass]),
          style: j(l.viewStyle)
        }, {
          default: he(() => [
            B(E.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      !l.native && M.value ? (c(), h("div", {
        key: 0,
        class: g([f(i).e("bar"), f(i).is("vertical")]),
        style: j({ height: M.value, top: `${T.value}%` })
      }, null, 6)) : S("", !0),
      !l.native && b.value ? (c(), h("div", {
        key: 1,
        class: g([f(i).e("bar"), f(i).is("horizontal")]),
        style: j({ width: b.value, left: `${C.value}%` })
      }, null, 6)) : S("", !0)
    ], 2));
  }
});
export {
  Kt as Avatar,
  gt as Card,
  Ct as Carousel,
  wt as CarouselItem,
  Nt as Descriptions,
  zt as DescriptionsItem,
  vt as DynamicTable,
  kt as Empty,
  Ne as Pagination,
  yt as Progress,
  Dt as Scrollbar,
  It as Table,
  $t as TableColumn,
  pt as Tag,
  xt as Timeline,
  bt as TimelineItem,
  mt as Tree,
  te as TreeNode,
  Mt as TreeTable,
  St as TreeTableColumn
};
