import { defineComponent as I, ref as q, computed as B, openBlock as o, createElementBlock as c, normalizeClass as s, unref as a, createVNode as M, withCtx as U, Fragment as E, renderList as z, createBlock as X, withKeys as J, createCommentVNode as x, createTextVNode as j, createElementVNode as e, renderSlot as F, toDisplayString as h, normalizeStyle as H, reactive as ee, withDirectives as K, vModelSelect as te, watch as Q, vShow as G, nextTick as Z, withModifiers as _, vModelText as le } from "vue";
import { useNamespace as A } from "@xto/core";
import { Space as O, Button as W } from "@xto/base";
import { Input as D } from "@xto/form";
import { Pagination as ae } from "@xto/data";
const se = ["colspan"], ne = ["colspan"], oe = ["value"], dt = /* @__PURE__ */ I({
  name: "XProTable",
  __name: "index",
  props: {
    columns: {},
    data: { default: () => [] },
    loading: { type: Boolean, default: !1 },
    pagination: { type: Boolean, default: !0 },
    pageSize: { default: 10 },
    currentPage: { default: 1 },
    total: { default: 0 },
    selection: { type: Boolean, default: !1 },
    index: { type: Boolean, default: !1 },
    indexLabel: { default: "#" }
  },
  emits: ["update:data", "update:currentPage", "update:pageSize", "search", "refresh", "reset"],
  setup(t, { emit: v }) {
    const n = t, u = v, l = A("pro-table"), i = q({});
    q([]), B({
      get: () => n.data,
      set: (r) => u("update:data", r)
    });
    const $ = (r) => {
      u("update:currentPage", r), u("search", { ...i.value, page: r });
    }, b = (r) => {
      u("update:pageSize", r), u("search", { ...i.value, pageSize: r });
    }, T = () => {
      u("search", i.value);
    }, g = () => {
      i.value = {}, u("reset"), u("search", {});
    }, y = () => {
      u("refresh");
    }, d = B(
      () => n.columns.filter((r) => r.search)
    );
    return (r, m) => (o(), c("div", {
      class: s(a(l).b())
    }, [
      d.value.length > 0 ? (o(), c("div", {
        key: 0,
        class: s(a(l).e("search"))
      }, [
        M(a(O), null, {
          default: U(() => [
            (o(!0), c(E, null, z(d.value, (p) => (o(), c(E, {
              key: p.prop
            }, [
              p.searchType === "input" || !p.searchType ? (o(), X(a(D), {
                key: 0,
                modelValue: i.value[p.prop],
                "onUpdate:modelValue": (V) => i.value[p.prop] = V,
                placeholder: `请输入${p.label}`,
                clearable: "",
                onKeyup: J(T, ["enter"])
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : x("", !0)
            ], 64))), 128)),
            M(a(W), {
              type: "primary",
              onClick: T
            }, {
              default: U(() => [...m[0] || (m[0] = [
                j("搜索", -1)
              ])]),
              _: 1
            }),
            M(a(W), { onClick: g }, {
              default: U(() => [...m[1] || (m[1] = [
                j("重置", -1)
              ])]),
              _: 1
            }),
            M(a(W), { onClick: y }, {
              default: U(() => [...m[2] || (m[2] = [
                j("刷新", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 2)) : x("", !0),
      e("div", {
        class: s(a(l).e("toolbar"))
      }, [
        M(a(O), null, {
          default: U(() => [
            F(r.$slots, "toolbar")
          ]),
          _: 3
        })
      ], 2),
      e("div", {
        class: s(a(l).e("table-wrapper"))
      }, [
        e("table", {
          class: s(a(l).e("table"))
        }, [
          e("thead", null, [
            e("tr", null, [
              t.selection ? (o(), c("th", {
                key: 0,
                class: s(a(l).e("selection"))
              }, [...m[3] || (m[3] = [
                e("input", { type: "checkbox" }, null, -1)
              ])], 2)) : x("", !0),
              t.index ? (o(), c("th", {
                key: 1,
                class: s(a(l).e("index"))
              }, h(t.indexLabel), 3)) : x("", !0),
              (o(!0), c(E, null, z(t.columns, (p) => (o(), c("th", {
                key: p.prop,
                class: s(a(l).e("column")),
                style: H({
                  width: p.width,
                  minWidth: p.minWidth,
                  textAlign: p.align || "left"
                })
              }, h(p.label), 7))), 128))
            ])
          ]),
          e("tbody", null, [
            t.loading ? (o(), c("tr", {
              key: 0,
              class: s(a(l).e("loading-row"))
            }, [
              e("td", {
                colspan: t.columns.length + (t.selection ? 1 : 0) + (t.index ? 1 : 0)
              }, [
                e("div", {
                  class: s(a(l).e("loading"))
                }, " 加载中... ", 2)
              ], 8, se)
            ], 2)) : t.data.length === 0 ? (o(), c("tr", {
              key: 1,
              class: s(a(l).e("empty-row"))
            }, [
              e("td", {
                colspan: t.columns.length + (t.selection ? 1 : 0) + (t.index ? 1 : 0)
              }, [
                e("div", {
                  class: s(a(l).e("empty"))
                }, " 暂无数据 ", 2)
              ], 8, ne)
            ], 2)) : (o(!0), c(E, { key: 2 }, z(t.data, (p, V) => (o(), c("tr", {
              key: V,
              class: s(a(l).e("row"))
            }, [
              t.selection ? (o(), c("td", {
                key: 0,
                class: s(a(l).e("selection"))
              }, [
                e("input", {
                  type: "checkbox",
                  value: p
                }, null, 8, oe)
              ], 2)) : x("", !0),
              t.index ? (o(), c("td", {
                key: 1,
                class: s(a(l).e("index"))
              }, h((t.currentPage - 1) * t.pageSize + V + 1), 3)) : x("", !0),
              (o(!0), c(E, null, z(t.columns, (w) => {
                var C;
                return o(), c("td", {
                  key: w.prop,
                  class: s(a(l).e("cell")),
                  style: H({ textAlign: w.align || "left" })
                }, [
                  F(r.$slots, (C = w.slots) == null ? void 0 : C.default, {
                    row: p,
                    column: w
                  }, () => [
                    j(h(w.formatter ? w.formatter(p, w, p[w.prop]) : p[w.prop]), 1)
                  ])
                ], 6);
              }), 128))
            ], 2))), 128))
          ])
        ], 2)
      ], 2),
      t.pagination ? (o(), c("div", {
        key: 1,
        class: s(a(l).e("pagination"))
      }, [
        M(a(ae), {
          total: t.total,
          "page-size": t.pageSize,
          "current-page": t.currentPage,
          layout: "total, sizes, prev, pager, next, jumper",
          onCurrentChange: $,
          onSizeChange: b
        }, null, 8, ["total", "page-size", "current-page"])
      ], 2)) : x("", !0)
    ], 2));
  }
}), ie = ["onUpdate:modelValue"], ce = ["value"], rt = /* @__PURE__ */ I({
  name: "XSearchForm",
  __name: "index",
  props: {
    columns: { default: () => [] },
    model: { default: () => ({}) },
    labelWidth: { default: "100px" },
    labelPosition: { default: "right" }
  },
  emits: ["search", "reset"],
  setup(t, { emit: v }) {
    const n = t, u = v, l = A("search-form"), i = ee({});
    n.columns.forEach((g) => {
      g.defaultValue !== void 0 ? i[g.prop] = g.defaultValue : n.model[g.prop] !== void 0 && (i[g.prop] = n.model[g.prop]);
    });
    const $ = () => {
      u("search", { ...i });
    }, b = () => {
      n.columns.forEach((g) => {
        i[g.prop] = g.defaultValue;
      }), u("reset");
    }, T = B(() => ({
      width: typeof n.labelWidth == "number" ? `${n.labelWidth}px` : n.labelWidth
    }));
    return (g, y) => (o(), c("div", {
      class: s(a(l).b())
    }, [
      e("div", {
        class: s(a(l).e("items"))
      }, [
        (o(!0), c(E, null, z(t.columns, (d) => (o(), c("div", {
          key: d.prop,
          class: s(a(l).e("item"))
        }, [
          e("label", {
            class: s(a(l).e("label")),
            style: H(T.value)
          }, h(d.label), 7),
          e("div", {
            class: s(a(l).e("content"))
          }, [
            d.type === "input" || !d.type ? (o(), X(a(D), {
              key: 0,
              modelValue: i[d.prop],
              "onUpdate:modelValue": (r) => i[d.prop] = r,
              placeholder: d.placeholder || `请输入${d.label}`,
              clearable: ""
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : d.type === "select" ? K((o(), c("select", {
              key: 1,
              "onUpdate:modelValue": (r) => i[d.prop] = r,
              class: s(a(l).e("select"))
            }, [
              y[0] || (y[0] = e("option", { value: "" }, "请选择", -1)),
              (o(!0), c(E, null, z(d.options, (r) => (o(), c("option", {
                key: r.value,
                value: r.value
              }, h(r.label), 9, ce))), 128))
            ], 10, ie)), [
              [te, i[d.prop]]
            ]) : d.type === "date" ? (o(), X(a(D), {
              key: 2,
              modelValue: i[d.prop],
              "onUpdate:modelValue": (r) => i[d.prop] = r,
              type: "date",
              placeholder: d.placeholder || `请选择${d.label}`
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : (o(), X(a(D), {
              key: 3,
              modelValue: i[d.prop],
              "onUpdate:modelValue": (r) => i[d.prop] = r,
              placeholder: d.placeholder || `请输入${d.label}`
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
          ], 2)
        ], 2))), 128))
      ], 2),
      e("div", {
        class: s(a(l).e("actions"))
      }, [
        M(a(O), null, {
          default: U(() => [
            M(a(W), {
              type: "primary",
              onClick: $
            }, {
              default: U(() => [...y[1] || (y[1] = [
                j("搜索", -1)
              ])]),
              _: 1
            }),
            M(a(W), { onClick: b }, {
              default: U(() => [...y[2] || (y[2] = [
                j("重置", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 2)
    ], 2));
  }
}), ut = /* @__PURE__ */ I({
  name: "XStatistic",
  __name: "index",
  props: {
    title: { default: "" },
    value: { default: 0 },
    suffix: { default: "" },
    prefix: { default: "" },
    precision: { default: 0 },
    trend: { default: "" },
    trendValue: { default: 0 },
    color: {},
    titleColor: {},
    valueColor: {}
  },
  setup(t) {
    const v = t, n = A("statistic"), u = B(() => typeof v.value == "number" ? v.value.toFixed(v.precision) : v.value), l = B(() => [
      n.e("trend"),
      n.em("trend", v.trend)
    ]), i = B(() => v.trend === "up" ? "↑" : v.trend === "down" ? "↓" : "");
    return ($, b) => (o(), c("div", {
      class: s(a(n).b())
    }, [
      e("div", {
        class: s(a(n).e("title")),
        style: H({ color: t.titleColor })
      }, h(t.title), 7),
      e("div", {
        class: s(a(n).e("content"))
      }, [
        t.prefix ? (o(), c("span", {
          key: 0,
          class: s(a(n).e("prefix"))
        }, h(t.prefix), 3)) : x("", !0),
        e("span", {
          class: s(a(n).e("value")),
          style: H({ color: t.valueColor })
        }, h(u.value), 7),
        t.suffix ? (o(), c("span", {
          key: 1,
          class: s(a(n).e("suffix"))
        }, h(t.suffix), 3)) : x("", !0)
      ], 2),
      t.trend ? (o(), c("div", {
        key: 0,
        class: s(l.value)
      }, [
        e("span", {
          class: s(a(n).e("trend-icon"))
        }, h(i.value), 3),
        e("span", {
          class: s(a(n).e("trend-value"))
        }, h(t.trendValue), 3)
      ], 2)) : x("", !0)
    ], 2));
  }
}), pt = /* @__PURE__ */ I({
  name: "XExport",
  __name: "index",
  props: {
    data: { default: () => [] },
    filename: { default: "export" },
    sheetName: { default: "Sheet1" },
    columns: { default: () => [] }
  },
  setup(t) {
    const v = t, n = q(!1), u = () => {
      if (v.data.length !== 0) {
        n.value = !0;
        try {
          const l = v.columns.length > 0 ? v.columns.map((y) => y.title) : Object.keys(v.data[0]), i = v.columns.length > 0 ? v.columns.map((y) => y.key) : Object.keys(v.data[0]), $ = [
            l.join(","),
            ...v.data.map(
              (y) => i.map((d) => {
                const r = y[d];
                return typeof r == "string" && (r.includes(",") || r.includes('"')) ? `"${r.replace(/"/g, '""')}"` : r;
              }).join(",")
            )
          ].join(`
`), b = new Blob([$], { type: "text/csv;charset=utf-8;" }), T = URL.createObjectURL(b), g = document.createElement("a");
          g.href = T, g.download = `${v.filename}.csv`, document.body.appendChild(g), g.click(), document.body.removeChild(g), URL.revokeObjectURL(T);
        } catch (l) {
          console.error("Export failed:", l);
        } finally {
          n.value = !1;
        }
      }
    };
    return (l, i) => (o(), X(a(W), {
      loading: n.value,
      onClick: u
    }, {
      default: U(() => [...i[0] || (i[0] = [
        j("导出", -1)
      ])]),
      icon: U(() => [...i[1] || (i[1] = [
        j("📥", -1)
      ])]),
      _: 1
    }, 8, ["loading"]));
  }
});
function Y(t) {
  const v = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };
  return t.replace(/[&<>"']/g, (n) => v[n]);
}
function R(t) {
  return t = t.replace(/`([^`]+)`/g, '<code class="md-code">$1</code>'), t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>"), t = t.replace(/__([^_]+)__/g, "<strong>$1</strong>"), t = t.replace(/\*([^*]+)\*/g, "<em>$1</em>"), t = t.replace(/_([^_]+)_/g, "<em>$1</em>"), t = t.replace(/~~([^~]+)~~/g, "<del>$1</del>"), t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" class="md-link">$1</a>'), t = t.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="md-image" />'), t;
}
function de(t, v = {}) {
  const n = t.split(`
`), u = [];
  let l = !1, i = "", $ = [], b = !1, T = "", g = !1, y = !1;
  const d = () => {
    b && (u.push(`</${T}>`), b = !1, T = "");
  }, r = () => {
    g && (u.push("</blockquote>"), g = !1);
  }, m = () => {
    y && (u.push("</table>"), y = !1);
  };
  for (let p = 0; p < n.length; p++) {
    let V = n[p];
    if (V.startsWith("```")) {
      l ? (u.push(`<pre class="md-code-block"><code class="language-${i}">${Y($.join(`
`))}</code></pre>`), l = !1, i = "", $ = []) : (d(), r(), m(), l = !0, i = V.slice(3).trim(), $ = []);
      continue;
    }
    if (l) {
      $.push(V);
      continue;
    }
    if (V.trim().startsWith("|") && V.trim().endsWith("|")) {
      y || (d(), r(), y = !0, u.push('<table class="md-table">'));
      const f = V.trim().slice(1, -1).split("|").map((P) => P.trim());
      if (f.every((P) => /^[-:]+$/.test(P)))
        continue;
      if ((p === 0 || p > 0 && !n[p - 1].trim().startsWith("|")) && p < n.length - 1) {
        const P = n[p + 1];
        if (P && P.trim().startsWith("|") && P.trim().endsWith("|") && P.trim().slice(1, -1).split("|").map((L) => L.trim()).every((L) => /^[-:]+$/.test(L))) {
          u.push("<thead><tr>"), f.forEach((L) => {
            u.push(`<th>${R(L)}</th>`);
          }), u.push("</tr></thead><tbody>");
          continue;
        }
      }
      u.push("<tr>"), f.forEach((P) => {
        u.push(`<td>${R(P)}</td>`);
      }), u.push("</tr>");
      continue;
    } else y && (u.push("</tbody>"), m());
    if (!V.trim()) {
      d(), r(), m();
      continue;
    }
    if (V.startsWith(">")) {
      d(), g || (u.push('<blockquote class="md-blockquote">'), g = !0);
      const f = V.replace(/^>\s?/, "");
      u.push(`<p>${R(f)}</p>`);
      continue;
    } else g && r();
    const w = V.match(/^(#{1,6})\s+(.+)$/);
    if (w) {
      d();
      const f = w[1].length, S = R(w[2]);
      u.push(`<h${f} class="md-heading md-h${f}">${S}</h${f}>`);
      continue;
    }
    if (/^[-*_]{3,}$/.test(V.trim())) {
      d(), u.push('<hr class="md-hr" />');
      continue;
    }
    const C = V.match(/^[-*+]\s+(.+)$/);
    if (C) {
      (!b || T !== "ul") && (d(), u.push('<ul class="md-list">'), b = !0, T = "ul"), u.push(`<li>${R(C[1])}</li>`);
      continue;
    }
    const k = V.match(/^(\d+)\.\s+(.+)$/);
    if (k) {
      (!b || T !== "ol") && (d(), u.push('<ol class="md-list">'), b = !0, T = "ol"), u.push(`<li>${R(k[2])}</li>`);
      continue;
    }
    d(), v.breaks !== !1 ? u.push(`<p class="md-paragraph">${R(V)}</p>`) : u.push(`<p class="md-paragraph">${R(V)}</p>`);
  }
  return d(), r(), m(), l && u.push(`<pre class="md-code-block"><code>${Y($.join(`
`))}</code></pre>`), u.join(`
`);
}
function re(t) {
  const v = [];
  return t.split(`
`).forEach((u, l) => {
    const i = u.match(/^(#{1,6})\s+(.+)$/);
    if (i) {
      const $ = i[1].length, b = i[2].trim(), T = `heading-${l}`;
      v.push({ level: $, text: b, id: T });
    }
  }), v;
}
const ue = ["title", "disabled", "onClick"], pe = { key: 0 }, he = ["value", "placeholder", "disabled"], me = ["innerHTML"], ht = /* @__PURE__ */ I({
  name: "XMarkdownEditor",
  __name: "index",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "请输入 Markdown 内容..." },
    height: { default: 400 },
    mode: { default: "split" },
    showToolbar: { type: Boolean, default: !0 },
    showToc: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: v }) {
    const n = t, u = v, l = A("markdown-editor"), i = q(n.modelValue), $ = q(), b = q(n.mode), T = B(() => de(i.value)), g = B(() => re(i.value)), y = B(() => ({
      height: typeof n.height == "number" ? `${n.height}px` : n.height
    }));
    Q(() => n.modelValue, (C) => {
      i.value = C;
    });
    const d = (C) => {
      const k = C.target.value;
      i.value = k, u("update:modelValue", k), u("change", k);
    }, r = (C) => {
      b.value = C;
    }, m = (C, k = "") => {
      if (!$.value || n.disabled) return;
      const f = $.value, S = f.selectionStart, P = f.selectionEnd, N = i.value.substring(S, P), L = i.value.substring(0, S) + C + N + k + i.value.substring(P);
      i.value = L, u("update:modelValue", L), u("change", L), Z(() => {
        f.focus(), f.setSelectionRange(S + C.length, S + C.length + N.length);
      });
    }, p = [
      { icon: "H1", title: "标题1", action: () => m("# ", "") },
      { icon: "H2", title: "标题2", action: () => m("## ", "") },
      { icon: "H3", title: "标题3", action: () => m("### ", "") },
      { type: "divider" },
      { icon: "B", title: "粗体", action: () => m("**", "**") },
      { icon: "I", title: "斜体", action: () => m("*", "*") },
      { icon: "S", title: "删除线", action: () => m("~~", "~~") },
      { type: "divider" },
      { icon: "•", title: "无序列表", action: () => m("- ", "") },
      { icon: "1.", title: "有序列表", action: () => m("1. ", "") },
      { type: "divider" },
      { icon: "🔗", title: "链接", action: () => m("[", "](url)") },
      { icon: "🖼", title: "图片", action: () => m("![alt](", ")") },
      { icon: "</>", title: "代码", action: () => m("`", "`") },
      { type: "divider" },
      { icon: "—", title: "分割线", action: () => m(`
---
`, "") },
      { icon: "□", title: "引用", action: () => m("> ", "") },
      { icon: "```", title: "代码块", action: () => m("\n```\n", "\n```\n") }
    ], V = B(() => [
      l.b(),
      l.is("disabled", n.disabled),
      l.is(`mode-${b.value}`)
    ]), w = (C) => {
      if (b.value !== "split") return;
      const k = document.querySelector(".x-markdown-editor__preview");
      if (!k) return;
      const f = C.target, S = f.scrollTop / (f.scrollHeight - f.clientHeight);
      k.scrollTop = S * (k.scrollHeight - k.clientHeight);
    };
    return (C, k) => (o(), c("div", {
      class: s(V.value),
      style: H(y.value)
    }, [
      t.showToolbar ? (o(), c("div", {
        key: 0,
        class: s(a(l).e("toolbar"))
      }, [
        e("div", {
          class: s(a(l).e("toolbar-left"))
        }, [
          (o(), c(E, null, z(p, (f, S) => e("button", {
            key: S,
            class: s([a(l).e("toolbar-btn"), { "is-divider": f.type === "divider" }]),
            title: f.title,
            disabled: t.disabled,
            onClick: f.action
          }, [
            f.type ? x("", !0) : (o(), c("span", pe, h(f.icon), 1))
          ], 10, ue)), 64))
        ], 2),
        e("div", {
          class: s(a(l).e("toolbar-right"))
        }, [
          e("button", {
            class: s([a(l).e("mode-btn"), { "is-active": b.value === "edit" }]),
            onClick: k[0] || (k[0] = (f) => r("edit"))
          }, " 编辑 ", 2),
          e("button", {
            class: s([a(l).e("mode-btn"), { "is-active": b.value === "split" }]),
            onClick: k[1] || (k[1] = (f) => r("split"))
          }, " 分屏 ", 2),
          e("button", {
            class: s([a(l).e("mode-btn"), { "is-active": b.value === "preview" }]),
            onClick: k[2] || (k[2] = (f) => r("preview"))
          }, " 预览 ", 2)
        ], 2)
      ], 2)) : x("", !0),
      e("div", {
        class: s(a(l).e("body"))
      }, [
        t.showToc && g.value.length > 0 ? (o(), c("div", {
          key: 0,
          class: s(a(l).e("toc"))
        }, [
          e("div", {
            class: s(a(l).e("toc-title"))
          }, "目录", 2),
          e("ul", {
            class: s(a(l).e("toc-list"))
          }, [
            (o(!0), c(E, null, z(g.value, (f, S) => (o(), c("li", {
              key: S,
              class: s(a(l).e("toc-item")),
              style: H({ paddingLeft: (f.level - 1) * 12 + "px" })
            }, h(f.text), 7))), 128))
          ], 2)
        ], 2)) : x("", !0),
        e("div", {
          class: s(a(l).e("content"))
        }, [
          K(e("div", {
            class: s(a(l).e("editor-wrapper"))
          }, [
            e("textarea", {
              ref_key: "editorRef",
              ref: $,
              class: s(a(l).e("editor")),
              value: i.value,
              placeholder: t.placeholder,
              disabled: t.disabled,
              onInput: d,
              onScroll: w
            }, null, 42, he)
          ], 2), [
            [G, b.value !== "preview"]
          ]),
          K(e("div", {
            class: s(a(l).e("preview")),
            innerHTML: T.value
          }, null, 10, me), [
            [G, b.value !== "edit"]
          ])
        ], 2)
      ], 2)
    ], 6));
  }
}), fe = { class: "icon-text" }, ve = { class: "status-label" }, mt = /* @__PURE__ */ I({
  name: "XAppCard",
  __name: "index",
  props: {
    id: { default: "" },
    name: { default: "" },
    description: { default: "" },
    icon: { default: "📱" },
    iconBgColor: { default: "#409eff" },
    status: { default: "draft" },
    creator: { default: "" },
    createTime: { default: "" },
    category: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click", "edit", "delete", "publish"],
  setup(t, { emit: v }) {
    const n = t, u = v, l = A("app-card"), i = B(() => {
      const d = {
        published: { label: "已发布", color: "#67c23a", dotColor: "#67c23a" },
        draft: { label: "草稿", color: "#909399", dotColor: "#909399" },
        archived: { label: "已归档", color: "#f56c6c", dotColor: "#f56c6c" }
      };
      return d[n.status] || d.draft;
    }), $ = B(() => [
      l.b(),
      l.m(n.status),
      l.is("disabled", n.disabled)
    ]), b = () => {
      n.disabled || u("click", n.id);
    }, T = (d) => {
      d.stopPropagation(), n.disabled || u("edit", n.id);
    }, g = (d) => {
      d.stopPropagation(), n.disabled || u("delete", n.id);
    }, y = (d) => {
      d.stopPropagation(), n.disabled || u("publish", n.id);
    };
    return (d, r) => (o(), c("div", {
      class: s($.value),
      onClick: b
    }, [
      e("div", {
        class: s(a(l).e("icon")),
        style: H({ backgroundColor: t.iconBgColor })
      }, [
        e("span", fe, h(t.icon), 1)
      ], 6),
      e("div", {
        class: s(a(l).e("status"))
      }, [
        e("span", {
          class: "status-dot",
          style: H({ backgroundColor: i.value.dotColor })
        }, null, 4),
        e("span", ve, h(i.value.label), 1)
      ], 2),
      e("div", {
        class: s(a(l).e("info"))
      }, [
        e("div", {
          class: s(a(l).e("name"))
        }, h(t.name), 3),
        t.description ? (o(), c("div", {
          key: 0,
          class: s(a(l).e("description"))
        }, h(t.description), 3)) : x("", !0)
      ], 2),
      e("div", {
        class: s(a(l).e("meta"))
      }, [
        t.creator ? (o(), c("span", {
          key: 0,
          class: s(a(l).e("creator"))
        }, "创建者: " + h(t.creator), 3)) : x("", !0),
        t.createTime ? (o(), c("span", {
          key: 1,
          class: s(a(l).e("time"))
        }, h(t.createTime), 3)) : x("", !0)
      ], 2),
      e("div", {
        class: s(a(l).e("actions"))
      }, [
        e("button", {
          class: "action-btn",
          title: "编辑",
          onClick: T
        }, " ✏️ "),
        t.status === "draft" ? (o(), c("button", {
          key: 0,
          class: "action-btn",
          title: "发布",
          onClick: y
        }, " 🚀 ")) : x("", !0),
        e("button", {
          class: "action-btn action-btn--danger",
          title: "删除",
          onClick: g
        }, " 🗑️ ")
      ], 2)
    ], 2));
  }
}), ge = ["disabled"], ye = { class: "role-icon" }, be = { class: "role-label" }, ke = {
  key: 0,
  class: "timestamp"
}, $e = {
  key: 0,
  class: "loading-indicator"
}, Ce = {
  key: 0,
  class: "text-content"
}, xe = {
  key: 1,
  class: "code-block"
}, we = { class: "code-header" }, Te = { class: "language" }, Ve = ["onClick"], Se = { class: "code-content" }, Be = ["placeholder", "disabled", "onKeydown"], Ee = ["disabled"], ft = /* @__PURE__ */ I({
  name: "XChat",
  __name: "index",
  props: {
    messages: { default: () => [] },
    showInput: { type: Boolean, default: !0 },
    placeholder: { default: "输入消息..." },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    maxHeight: { default: 400 },
    showClear: { type: Boolean, default: !0 },
    showTimestamp: { type: Boolean, default: !0 }
  },
  emits: ["send", "clear", "copy"],
  setup(t, { emit: v }) {
    const n = t, u = v, l = A("chat"), i = q(""), $ = q(null), b = B(() => [
      l.b(),
      l.is("disabled", n.disabled)
    ]), T = B(() => ({ maxHeight: typeof n.maxHeight == "number" ? `${n.maxHeight}px` : n.maxHeight })), g = () => {
      i.value.trim() && !n.disabled && !n.loading && (u("send", i.value.trim()), i.value = "");
    }, y = () => {
      u("clear");
    }, d = async (w) => {
      try {
        await navigator.clipboard.writeText(w), u("copy", w);
      } catch (C) {
        console.error("复制失败:", C);
      }
    }, r = async () => {
      await Z(), $.value && ($.value.scrollTop = $.value.scrollHeight);
    };
    Q(() => n.messages, () => {
      r();
    }, { deep: !0 });
    const m = (w) => ({
      user: "👤",
      assistant: "🤖",
      system: "⚙️"
    })[w] || "💬", p = (w) => ({
      user: "用户",
      assistant: "AI助手",
      system: "系统"
    })[w] || "消息", V = (w) => {
      const C = /```(\w+)?\n([\s\S]*?)```/g, k = [];
      let f = 0, S;
      for (; (S = C.exec(w)) !== null; )
        S.index > f && k.push({
          type: "text",
          content: w.slice(f, S.index)
        }), k.push({
          type: "code",
          content: S[2],
          language: S[1] || "plaintext"
        }), f = S.index + S[0].length;
      return f < w.length && k.push({
        type: "text",
        content: w.slice(f)
      }), k.length > 0 ? k : [{ type: "text", content: w }];
    };
    return (w, C) => (o(), c("div", {
      class: s(b.value)
    }, [
      t.showClear ? (o(), c("div", {
        key: 0,
        class: s(a(l).e("toolbar"))
      }, [
        e("button", {
          class: "clear-btn",
          onClick: y,
          disabled: t.disabled || t.messages.length === 0
        }, " 🗑️ 清空对话 ", 8, ge)
      ], 2)) : x("", !0),
      e("div", {
        ref_key: "messagesContainer",
        ref: $,
        class: s(a(l).e("messages")),
        style: H(T.value)
      }, [
        t.messages.length === 0 ? (o(), c("div", {
          key: 0,
          class: s(a(l).e("empty"))
        }, [...C[1] || (C[1] = [
          e("span", { class: "empty-icon" }, "💬", -1),
          e("span", { class: "empty-text" }, "暂无对话消息", -1)
        ])], 2)) : x("", !0),
        (o(!0), c(E, null, z(t.messages, (k) => (o(), c("div", {
          key: k.id,
          class: s([a(l).e("message"), a(l).em("message", k.role)])
        }, [
          e("div", {
            class: s(a(l).e("message-header"))
          }, [
            e("span", ye, h(m(k.role)), 1),
            e("span", be, h(p(k.role)), 1),
            t.showTimestamp && k.timestamp ? (o(), c("span", ke, h(k.timestamp), 1)) : x("", !0)
          ], 2),
          e("div", {
            class: s(a(l).e("message-content"))
          }, [
            k.loading ? (o(), c("span", $e, [...C[2] || (C[2] = [
              e("span", { class: "dot" }, null, -1),
              e("span", { class: "dot" }, null, -1),
              e("span", { class: "dot" }, null, -1)
            ])])) : (o(!0), c(E, { key: 1 }, z(V(k.content), (f, S) => (o(), c(E, { key: S }, [
              f.type === "text" ? (o(), c("div", Ce, h(f.content), 1)) : (o(), c("div", xe, [
                e("div", we, [
                  e("span", Te, h(f.language), 1),
                  e("button", {
                    class: "copy-btn",
                    onClick: (P) => d(f.content)
                  }, " 📋 复制 ", 8, Ve)
                ]),
                e("pre", Se, [
                  e("code", null, h(f.content), 1)
                ])
              ]))
            ], 64))), 128))
          ], 2)
        ], 2))), 128))
      ], 6),
      t.showInput ? (o(), c("div", {
        key: 1,
        class: s(a(l).e("input"))
      }, [
        K(e("textarea", {
          "onUpdate:modelValue": C[0] || (C[0] = (k) => i.value = k),
          placeholder: t.placeholder,
          disabled: t.disabled || t.loading,
          class: "input-textarea",
          onKeydown: J(_(g, ["ctrl"]), ["enter"]),
          rows: "3"
        }, null, 40, Be), [
          [le, i.value]
        ]),
        e("button", {
          class: "send-btn",
          disabled: t.disabled || t.loading || !i.value.trim(),
          onClick: g
        }, h(t.loading ? "发送中..." : "发送"), 9, Ee)
      ], 2)) : x("", !0)
    ], 2));
  }
}), Pe = { key: 0 }, He = { key: 1 }, ze = { class: "col-session-id" }, Ue = { class: "session-id" }, Ie = { class: "col-title" }, Le = { class: "col-message-count" }, Me = { class: "col-status" }, je = { class: "col-time" }, qe = { class: "col-actions" }, Ae = ["onClick"], Re = ["onClick"], We = { class: "pagination-info" }, Xe = { class: "pagination-controls" }, De = ["disabled"], Ke = { class: "pagination-current" }, Ne = ["disabled"], Oe = ["value"], vt = /* @__PURE__ */ I({
  name: "XLogTable",
  __name: "index",
  props: {
    data: { default: () => [] },
    loading: { type: Boolean, default: !1 },
    pagination: { default: void 0 },
    showPagination: { type: Boolean, default: !0 }
  },
  emits: ["page-change", "size-change", "view-detail", "view-trace"],
  setup(t, { emit: v }) {
    const n = t, u = v, l = A("log-table"), i = (d) => ({
      success: { label: "成功", color: "#67c23a" },
      error: { label: "失败", color: "#f56c6c" },
      running: { label: "运行中", color: "#409eff" }
    })[d] || { label: "未知", color: "#909399" }, $ = B(() => [
      l.b(),
      l.is("loading", n.loading)
    ]), b = (d) => {
      u("page-change", d);
    }, T = (d) => {
      u("size-change", d);
    }, g = (d) => {
      u("view-detail", d);
    }, y = (d) => {
      u("view-trace", d);
    };
    return (d, r) => (o(), c("div", {
      class: s($.value)
    }, [
      e("div", {
        class: s(a(l).e("wrapper"))
      }, [
        e("table", null, [
          r[4] || (r[4] = e("thead", null, [
            e("tr", null, [
              e("th", { class: "col-session-id" }, "会话ID"),
              e("th", { class: "col-title" }, "会话标题"),
              e("th", { class: "col-message-count" }, "消息数"),
              e("th", { class: "col-status" }, "状态"),
              e("th", { class: "col-time" }, "最新消息时间"),
              e("th", { class: "col-actions" }, "操作")
            ])
          ], -1)),
          e("tbody", null, [
            t.loading ? (o(), c("tr", Pe, [
              e("td", {
                colspan: "6",
                class: s(a(l).e("loading-cell"))
              }, [...r[3] || (r[3] = [
                e("span", { class: "loading-spinner" }, null, -1),
                e("span", { class: "loading-text" }, "加载中...", -1)
              ])], 2)
            ])) : t.data.length === 0 ? (o(), c("tr", He, [
              e("td", {
                colspan: "6",
                class: s(a(l).e("empty"))
              }, " 暂无日志记录 ", 2)
            ])) : x("", !0),
            (o(!0), c(E, null, z(t.data, (m) => (o(), c("tr", {
              key: m.id
            }, [
              e("td", ze, [
                e("span", Ue, h(m.sessionId), 1)
              ]),
              e("td", Ie, h(m.title), 1),
              e("td", Le, h(m.messageCount), 1),
              e("td", Me, [
                e("span", {
                  class: "status-tag",
                  style: H({ backgroundColor: i(m.status).color })
                }, h(i(m.status).label), 5)
              ]),
              e("td", je, h(m.latestMessageTime), 1),
              e("td", qe, [
                e("button", {
                  class: "action-link",
                  onClick: (p) => g(m)
                }, " 查看详情 ", 8, Ae),
                e("button", {
                  class: "action-link",
                  onClick: (p) => y(m)
                }, " 链路追踪 ", 8, Re)
              ])
            ]))), 128))
          ])
        ])
      ], 2),
      t.showPagination && t.pagination ? (o(), c("div", {
        key: 0,
        class: s(a(l).e("pagination"))
      }, [
        e("span", We, " 共 " + h(t.pagination.total) + " 条 ", 1),
        e("div", Xe, [
          e("button", {
            class: "pagination-btn",
            disabled: t.pagination.current <= 1,
            onClick: r[0] || (r[0] = (m) => b(t.pagination.current - 1))
          }, " 上一页 ", 8, De),
          e("span", Ke, "第 " + h(t.pagination.current) + " 页", 1),
          e("button", {
            class: "pagination-btn",
            disabled: t.pagination.current >= Math.ceil(t.pagination.total / t.pagination.pageSize),
            onClick: r[1] || (r[1] = (m) => b(t.pagination.current + 1))
          }, " 下一页 ", 8, Ne)
        ]),
        e("select", {
          class: "pagination-size-select",
          value: t.pagination.pageSize,
          onChange: r[2] || (r[2] = (m) => T(Number(m.target.value)))
        }, [...r[5] || (r[5] = [
          e("option", { value: "10" }, "10条/页", -1),
          e("option", { value: "20" }, "20条/页", -1),
          e("option", { value: "50" }, "50条/页", -1),
          e("option", { value: "100" }, "100条/页", -1)
        ])], 40, Oe)
      ], 2)) : x("", !0)
    ], 2));
  }
}), Fe = ["onClick"], Ge = { class: "endpoint-path" }, Ye = { class: "endpoint-url" }, Je = { class: "endpoint-desc" }, Qe = { class: "param-name" }, Ze = { class: "param-type" }, _e = { class: "param-required" }, et = {
  key: 0,
  class: "required-tag"
}, tt = {
  key: 1,
  class: "optional-tag"
}, lt = { class: "param-default" }, at = { class: "param-desc" }, gt = /* @__PURE__ */ I({
  name: "XApiDoc",
  __name: "index",
  props: {
    baseUrl: { default: "https://api.example.com" },
    endpoints: { default: () => [] },
    showCurlExample: { type: Boolean, default: !0 },
    authType: { default: "apikey" },
    apiKeyPlaceholder: { default: "YOUR_API_KEY" }
  },
  emits: ["copy-curl"],
  setup(t, { emit: v }) {
    const n = t, u = v, l = A("api-doc"), i = q(n.endpoints[0] || null), $ = B(() => [
      l.b()
    ]), b = {
      GET: "#67c23a",
      POST: "#409eff",
      PUT: "#e6a23c",
      DELETE: "#f56c6c",
      PATCH: "#909399"
    }, T = (d) => {
      const r = d.method, m = `${n.baseUrl}${d.path}`;
      let p = `curl -X ${r} '${m}'`;
      return n.authType === "apikey" ? p += ` -H 'Authorization: ApiKey ${n.apiKeyPlaceholder}'` : n.authType === "bearer" ? p += ` -H 'Authorization: Bearer ${n.apiKeyPlaceholder}'` : n.authType === "basic" && (p += " -u 'username:password'"), r !== "GET" && (p += " -H 'Content-Type: application/json'"), d.requestBody && r !== "GET" && (p += ` -d '${d.requestBody}'`), p;
    }, g = async (d) => {
      try {
        await navigator.clipboard.writeText(d), u("copy-curl", d);
      } catch (r) {
        console.error("复制失败:", r);
      }
    }, y = (d) => {
      i.value = d;
    };
    return (d, r) => {
      var m;
      return o(), c("div", {
        class: s($.value)
      }, [
        e("div", {
          class: s(a(l).e("sidebar"))
        }, [
          e("div", {
            class: s(a(l).e("sidebar-header"))
          }, "API 端点", 2),
          e("div", {
            class: s(a(l).e("endpoint-list"))
          }, [
            (o(!0), c(E, null, z(t.endpoints, (p) => (o(), c("div", {
              key: `${p.method}-${p.path}`,
              class: s([a(l).e("endpoint-item"), { "is-active": i.value === p }]),
              onClick: (V) => y(p)
            }, [
              e("span", {
                class: "method-tag",
                style: H({ backgroundColor: b[p.method] })
              }, h(p.method), 5),
              e("span", Ge, h(p.path), 1)
            ], 10, Fe))), 128))
          ], 2)
        ], 2),
        e("div", {
          class: s(a(l).e("content"))
        }, [
          i.value ? (o(), c(E, { key: 0 }, [
            e("div", {
              class: s(a(l).e("header"))
            }, [
              e("span", {
                class: "method-badge",
                style: H({ backgroundColor: b[i.value.method] })
              }, h(i.value.method), 5),
              e("span", Ye, h(t.baseUrl) + h(i.value.path), 1),
              e("span", Je, h(i.value.description), 1)
            ], 2),
            (m = i.value.parameters) != null && m.length ? (o(), c("div", {
              key: 0,
              class: s(a(l).e("section"))
            }, [
              e("div", {
                class: s(a(l).e("section-title"))
              }, "请求参数", 2),
              e("table", {
                class: s(a(l).e("params-table"))
              }, [
                r[1] || (r[1] = e("thead", null, [
                  e("tr", null, [
                    e("th", null, "参数名"),
                    e("th", null, "类型"),
                    e("th", null, "必填"),
                    e("th", null, "默认值"),
                    e("th", null, "说明")
                  ])
                ], -1)),
                e("tbody", null, [
                  (o(!0), c(E, null, z(i.value.parameters, (p) => (o(), c("tr", {
                    key: p.name
                  }, [
                    e("td", Qe, h(p.name), 1),
                    e("td", Ze, h(p.type), 1),
                    e("td", _e, [
                      p.required ? (o(), c("span", et, "必填")) : (o(), c("span", tt, "可选"))
                    ]),
                    e("td", lt, h(p.defaultValue || "-"), 1),
                    e("td", at, h(p.description), 1)
                  ]))), 128))
                ])
              ], 2)
            ], 2)) : x("", !0),
            t.showCurlExample ? (o(), c("div", {
              key: 1,
              class: s(a(l).e("section"))
            }, [
              e("div", {
                class: s(a(l).e("section-title"))
              }, [
                r[2] || (r[2] = j(" curl 示例 ", -1)),
                e("button", {
                  class: "copy-btn",
                  onClick: r[0] || (r[0] = (p) => g(T(i.value)))
                }, " 📋 复制 ")
              ], 2),
              e("div", {
                class: s(a(l).e("code-block"))
              }, [
                e("pre", null, [
                  e("code", null, h(T(i.value)), 1)
                ])
              ], 2)
            ], 2)) : x("", !0),
            i.value.requestBody ? (o(), c("div", {
              key: 2,
              class: s(a(l).e("section"))
            }, [
              e("div", {
                class: s(a(l).e("section-title"))
              }, "请求体示例", 2),
              e("div", {
                class: s(a(l).e("code-block"))
              }, [
                e("pre", null, [
                  e("code", null, h(i.value.requestBody), 1)
                ])
              ], 2)
            ], 2)) : x("", !0),
            i.value.responseExample ? (o(), c("div", {
              key: 3,
              class: s(a(l).e("section"))
            }, [
              e("div", {
                class: s(a(l).e("section-title"))
              }, "响应示例", 2),
              e("div", {
                class: s(a(l).e("code-block"))
              }, [
                e("pre", null, [
                  e("code", null, h(i.value.responseExample), 1)
                ])
              ], 2)
            ], 2)) : x("", !0)
          ], 64)) : (o(), c("div", {
            key: 1,
            class: s(a(l).e("empty"))
          }, " 请选择一个 API 端点查看详情 ", 2))
        ], 2)
      ], 2);
    };
  }
}), yt = /* @__PURE__ */ I({
  name: "XVarTag",
  __name: "index",
  props: {
    name: { default: "" },
    type: { default: "string" },
    value: { default: void 0 },
    showValue: { type: Boolean, default: !1 },
    copyable: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    size: { default: "default" },
    showTypeIcon: { type: Boolean, default: !0 }
  },
  emits: ["click", "copy"],
  setup(t, { emit: v }) {
    const n = t, u = v, l = A("var-tag"), i = B(() => {
      const y = {
        string: { icon: "📝", color: "#409eff", label: "文本" },
        number: { icon: "🔢", color: "#67c23a", label: "数字" },
        boolean: { icon: "✓", color: "#e6a23c", label: "布尔" },
        object: { icon: "📦", color: "#909399", label: "对象" },
        array: { icon: "📚", color: "#909399", label: "数组" },
        file: { icon: "📁", color: "#f56c6c", label: "文件" }
      };
      return y[n.type] || y.string;
    }), $ = B(() => [
      l.b(),
      l.m(n.size),
      l.m(n.type),
      l.is("disabled", n.disabled),
      l.is("copyable", n.copyable)
    ]), b = B(() => n.value === void 0 || n.value === null ? "-" : n.type === "object" || n.type === "array" ? JSON.stringify(n.value) : String(n.value)), T = () => {
      n.disabled || u("click", n.name);
    }, g = async () => {
      if (!n.disabled && n.copyable)
        try {
          const y = n.showValue ? `${n.name}: ${b.value}` : n.name;
          await navigator.clipboard.writeText(y), u("copy", n.name, n.value);
        } catch (y) {
          console.error("复制失败:", y);
        }
    };
    return (y, d) => (o(), c("span", {
      class: s($.value),
      onClick: T
    }, [
      t.showTypeIcon ? (o(), c("span", {
        key: 0,
        class: s(a(l).e("icon"))
      }, h(i.value.icon), 3)) : x("", !0),
      e("span", {
        class: s(a(l).e("name"))
      }, h(t.name), 3),
      t.showValue ? (o(), c("span", {
        key: 1,
        class: s(a(l).e("value"))
      }, h(b.value), 3)) : x("", !0),
      t.showValue ? x("", !0) : (o(), c("span", {
        key: 2,
        class: s(a(l).e("type")),
        style: H({ color: i.value.color })
      }, h(i.value.label), 7)),
      t.copyable ? (o(), c("button", {
        key: 3,
        class: s(a(l).e("copy-btn")),
        onClick: _(g, ["stop"])
      }, " 📋 ", 2)) : x("", !0)
    ], 2));
  }
});
export {
  gt as ApiDoc,
  mt as AppCard,
  ft as Chat,
  pt as Export,
  vt as LogTable,
  ht as MarkdownEditor,
  dt as ProTable,
  rt as SearchForm,
  ut as Statistic,
  yt as VarTag
};
