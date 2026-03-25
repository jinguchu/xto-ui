import { defineComponent as N, ref as R, computed as L, openBlock as c, createElementBlock as d, normalizeClass as a, unref as t, createVNode as H, withCtx as E, Fragment as W, renderList as M, createBlock as I, withKeys as Q, createCommentVNode as B, createTextVNode as P, createElementVNode as u, renderSlot as K, toDisplayString as S, normalizeStyle as j, reactive as Y, withDirectives as D, vModelSelect as Z, watch as _, vShow as G, nextTick as ee } from "vue";
import { useNamespace as F } from "@xto/core";
import { Space as A, Button as q } from "@xto/base";
import { Input as X } from "@xto/form";
import { Pagination as te } from "@xto/data";
const le = ["colspan"], ae = ["colspan"], ne = ["value"], ye = /* @__PURE__ */ N({
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
  setup(e, { emit: p }) {
    const o = e, n = p, l = F("pro-table"), s = R({});
    R([]), L({
      get: () => o.data,
      set: (i) => n("update:data", i)
    });
    const $ = (i) => {
      n("update:currentPage", i), n("search", { ...s.value, page: i });
    }, g = (i) => {
      n("update:pageSize", i), n("search", { ...s.value, pageSize: i });
    }, x = () => {
      n("search", s.value);
    }, v = () => {
      s.value = {}, n("reset"), n("search", {});
    }, y = () => {
      n("refresh");
    }, r = L(
      () => o.columns.filter((i) => i.search)
    );
    return (i, f) => (c(), d("div", {
      class: a(t(l).b())
    }, [
      r.value.length > 0 ? (c(), d("div", {
        key: 0,
        class: a(t(l).e("search"))
      }, [
        H(t(A), null, {
          default: E(() => [
            (c(!0), d(W, null, M(r.value, (h) => (c(), d(W, {
              key: h.prop
            }, [
              h.searchType === "input" || !h.searchType ? (c(), I(t(X), {
                key: 0,
                modelValue: s.value[h.prop],
                "onUpdate:modelValue": (b) => s.value[h.prop] = b,
                placeholder: `请输入${h.label}`,
                clearable: "",
                onKeyup: Q(x, ["enter"])
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : B("", !0)
            ], 64))), 128)),
            H(t(q), {
              type: "primary",
              onClick: x
            }, {
              default: E(() => [...f[0] || (f[0] = [
                P("搜索", -1)
              ])]),
              _: 1
            }),
            H(t(q), { onClick: v }, {
              default: E(() => [...f[1] || (f[1] = [
                P("重置", -1)
              ])]),
              _: 1
            }),
            H(t(q), { onClick: y }, {
              default: E(() => [...f[2] || (f[2] = [
                P("刷新", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 2)) : B("", !0),
      u("div", {
        class: a(t(l).e("toolbar"))
      }, [
        H(t(A), null, {
          default: E(() => [
            K(i.$slots, "toolbar")
          ]),
          _: 3
        })
      ], 2),
      u("div", {
        class: a(t(l).e("table-wrapper"))
      }, [
        u("table", {
          class: a(t(l).e("table"))
        }, [
          u("thead", null, [
            u("tr", null, [
              e.selection ? (c(), d("th", {
                key: 0,
                class: a(t(l).e("selection"))
              }, [...f[3] || (f[3] = [
                u("input", { type: "checkbox" }, null, -1)
              ])], 2)) : B("", !0),
              e.index ? (c(), d("th", {
                key: 1,
                class: a(t(l).e("index"))
              }, S(e.indexLabel), 3)) : B("", !0),
              (c(!0), d(W, null, M(e.columns, (h) => (c(), d("th", {
                key: h.prop,
                class: a(t(l).e("column")),
                style: j({
                  width: h.width,
                  minWidth: h.minWidth,
                  textAlign: h.align || "left"
                })
              }, S(h.label), 7))), 128))
            ])
          ]),
          u("tbody", null, [
            e.loading ? (c(), d("tr", {
              key: 0,
              class: a(t(l).e("loading-row"))
            }, [
              u("td", {
                colspan: e.columns.length + (e.selection ? 1 : 0) + (e.index ? 1 : 0)
              }, [
                u("div", {
                  class: a(t(l).e("loading"))
                }, " 加载中... ", 2)
              ], 8, le)
            ], 2)) : e.data.length === 0 ? (c(), d("tr", {
              key: 1,
              class: a(t(l).e("empty-row"))
            }, [
              u("td", {
                colspan: e.columns.length + (e.selection ? 1 : 0) + (e.index ? 1 : 0)
              }, [
                u("div", {
                  class: a(t(l).e("empty"))
                }, " 暂无数据 ", 2)
              ], 8, ae)
            ], 2)) : (c(!0), d(W, { key: 2 }, M(e.data, (h, b) => (c(), d("tr", {
              key: b,
              class: a(t(l).e("row"))
            }, [
              e.selection ? (c(), d("td", {
                key: 0,
                class: a(t(l).e("selection"))
              }, [
                u("input", {
                  type: "checkbox",
                  value: h
                }, null, 8, ne)
              ], 2)) : B("", !0),
              e.index ? (c(), d("td", {
                key: 1,
                class: a(t(l).e("index"))
              }, S((e.currentPage - 1) * e.pageSize + b + 1), 3)) : B("", !0),
              (c(!0), d(W, null, M(e.columns, (C) => {
                var V;
                return c(), d("td", {
                  key: C.prop,
                  class: a(t(l).e("cell")),
                  style: j({ textAlign: C.align || "left" })
                }, [
                  K(i.$slots, (V = C.slots) == null ? void 0 : V.default, {
                    row: h,
                    column: C
                  }, () => [
                    P(S(C.formatter ? C.formatter(h, C, h[C.prop]) : h[C.prop]), 1)
                  ])
                ], 6);
              }), 128))
            ], 2))), 128))
          ])
        ], 2)
      ], 2),
      e.pagination ? (c(), d("div", {
        key: 1,
        class: a(t(l).e("pagination"))
      }, [
        H(t(te), {
          total: e.total,
          "page-size": e.pageSize,
          "current-page": e.currentPage,
          layout: "total, sizes, prev, pager, next, jumper",
          onCurrentChange: $,
          onSizeChange: g
        }, null, 8, ["total", "page-size", "current-page"])
      ], 2)) : B("", !0)
    ], 2));
  }
}), se = ["onUpdate:modelValue"], oe = ["value"], be = /* @__PURE__ */ N({
  name: "XSearchForm",
  __name: "index",
  props: {
    columns: { default: () => [] },
    model: { default: () => ({}) },
    labelWidth: { default: "100px" },
    labelPosition: { default: "right" }
  },
  emits: ["search", "reset"],
  setup(e, { emit: p }) {
    const o = e, n = p, l = F("search-form"), s = Y({});
    o.columns.forEach((v) => {
      v.defaultValue !== void 0 ? s[v.prop] = v.defaultValue : o.model[v.prop] !== void 0 && (s[v.prop] = o.model[v.prop]);
    });
    const $ = () => {
      n("search", { ...s });
    }, g = () => {
      o.columns.forEach((v) => {
        s[v.prop] = v.defaultValue;
      }), n("reset");
    }, x = L(() => ({
      width: typeof o.labelWidth == "number" ? `${o.labelWidth}px` : o.labelWidth
    }));
    return (v, y) => (c(), d("div", {
      class: a(t(l).b())
    }, [
      u("div", {
        class: a(t(l).e("items"))
      }, [
        (c(!0), d(W, null, M(e.columns, (r) => (c(), d("div", {
          key: r.prop,
          class: a(t(l).e("item"))
        }, [
          u("label", {
            class: a(t(l).e("label")),
            style: j(x.value)
          }, S(r.label), 7),
          u("div", {
            class: a(t(l).e("content"))
          }, [
            r.type === "input" || !r.type ? (c(), I(t(X), {
              key: 0,
              modelValue: s[r.prop],
              "onUpdate:modelValue": (i) => s[r.prop] = i,
              placeholder: r.placeholder || `请输入${r.label}`,
              clearable: ""
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : r.type === "select" ? D((c(), d("select", {
              key: 1,
              "onUpdate:modelValue": (i) => s[r.prop] = i,
              class: a(t(l).e("select"))
            }, [
              y[0] || (y[0] = u("option", { value: "" }, "请选择", -1)),
              (c(!0), d(W, null, M(r.options, (i) => (c(), d("option", {
                key: i.value,
                value: i.value
              }, S(i.label), 9, oe))), 128))
            ], 10, se)), [
              [Z, s[r.prop]]
            ]) : r.type === "date" ? (c(), I(t(X), {
              key: 2,
              modelValue: s[r.prop],
              "onUpdate:modelValue": (i) => s[r.prop] = i,
              type: "date",
              placeholder: r.placeholder || `请选择${r.label}`
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : (c(), I(t(X), {
              key: 3,
              modelValue: s[r.prop],
              "onUpdate:modelValue": (i) => s[r.prop] = i,
              placeholder: r.placeholder || `请输入${r.label}`
            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
          ], 2)
        ], 2))), 128))
      ], 2),
      u("div", {
        class: a(t(l).e("actions"))
      }, [
        H(t(A), null, {
          default: E(() => [
            H(t(q), {
              type: "primary",
              onClick: $
            }, {
              default: E(() => [...y[1] || (y[1] = [
                P("搜索", -1)
              ])]),
              _: 1
            }),
            H(t(q), { onClick: g }, {
              default: E(() => [...y[2] || (y[2] = [
                P("重置", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 2)
    ], 2));
  }
}), ke = /* @__PURE__ */ N({
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
  setup(e) {
    const p = e, o = F("statistic"), n = L(() => typeof p.value == "number" ? p.value.toFixed(p.precision) : p.value), l = L(() => [
      o.e("trend"),
      o.em("trend", p.trend)
    ]), s = L(() => p.trend === "up" ? "↑" : p.trend === "down" ? "↓" : "");
    return ($, g) => (c(), d("div", {
      class: a(t(o).b())
    }, [
      u("div", {
        class: a(t(o).e("title")),
        style: j({ color: e.titleColor })
      }, S(e.title), 7),
      u("div", {
        class: a(t(o).e("content"))
      }, [
        e.prefix ? (c(), d("span", {
          key: 0,
          class: a(t(o).e("prefix"))
        }, S(e.prefix), 3)) : B("", !0),
        u("span", {
          class: a(t(o).e("value")),
          style: j({ color: e.valueColor })
        }, S(n.value), 7),
        e.suffix ? (c(), d("span", {
          key: 1,
          class: a(t(o).e("suffix"))
        }, S(e.suffix), 3)) : B("", !0)
      ], 2),
      e.trend ? (c(), d("div", {
        key: 0,
        class: a(l.value)
      }, [
        u("span", {
          class: a(t(o).e("trend-icon"))
        }, S(s.value), 3),
        u("span", {
          class: a(t(o).e("trend-value"))
        }, S(e.trendValue), 3)
      ], 2)) : B("", !0)
    ], 2));
  }
}), $e = /* @__PURE__ */ N({
  name: "XExport",
  __name: "index",
  props: {
    data: { default: () => [] },
    filename: { default: "export" },
    sheetName: { default: "Sheet1" },
    columns: { default: () => [] }
  },
  setup(e) {
    const p = e, o = R(!1), n = () => {
      if (p.data.length !== 0) {
        o.value = !0;
        try {
          const l = p.columns.length > 0 ? p.columns.map((y) => y.title) : Object.keys(p.data[0]), s = p.columns.length > 0 ? p.columns.map((y) => y.key) : Object.keys(p.data[0]), $ = [
            l.join(","),
            ...p.data.map(
              (y) => s.map((r) => {
                const i = y[r];
                return typeof i == "string" && (i.includes(",") || i.includes('"')) ? `"${i.replace(/"/g, '""')}"` : i;
              }).join(",")
            )
          ].join(`
`), g = new Blob([$], { type: "text/csv;charset=utf-8;" }), x = URL.createObjectURL(g), v = document.createElement("a");
          v.href = x, v.download = `${p.filename}.csv`, document.body.appendChild(v), v.click(), document.body.removeChild(v), URL.revokeObjectURL(x);
        } catch (l) {
          console.error("Export failed:", l);
        } finally {
          o.value = !1;
        }
      }
    };
    return (l, s) => (c(), I(t(q), {
      loading: o.value,
      onClick: n
    }, {
      default: E(() => [...s[0] || (s[0] = [
        P("导出", -1)
      ])]),
      icon: E(() => [...s[1] || (s[1] = [
        P("📥", -1)
      ])]),
      _: 1
    }, 8, ["loading"]));
  }
});
function J(e) {
  const p = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };
  return e.replace(/[&<>"']/g, (o) => p[o]);
}
function z(e) {
  return e = e.replace(/`([^`]+)`/g, '<code class="md-code">$1</code>'), e = e.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>"), e = e.replace(/__([^_]+)__/g, "<strong>$1</strong>"), e = e.replace(/\*([^*]+)\*/g, "<em>$1</em>"), e = e.replace(/_([^_]+)_/g, "<em>$1</em>"), e = e.replace(/~~([^~]+)~~/g, "<del>$1</del>"), e = e.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" class="md-link">$1</a>'), e = e.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="md-image" />'), e;
}
function ie(e, p = {}) {
  const o = e.split(`
`), n = [];
  let l = !1, s = "", $ = [], g = !1, x = "", v = !1, y = !1;
  const r = () => {
    g && (n.push(`</${x}>`), g = !1, x = "");
  }, i = () => {
    v && (n.push("</blockquote>"), v = !1);
  }, f = () => {
    y && (n.push("</table>"), y = !1);
  };
  for (let h = 0; h < o.length; h++) {
    let b = o[h];
    if (b.startsWith("```")) {
      l ? (n.push(`<pre class="md-code-block"><code class="language-${s}">${J($.join(`
`))}</code></pre>`), l = !1, s = "", $ = []) : (r(), i(), f(), l = !0, s = b.slice(3).trim(), $ = []);
      continue;
    }
    if (l) {
      $.push(b);
      continue;
    }
    if (b.trim().startsWith("|") && b.trim().endsWith("|")) {
      y || (r(), i(), y = !0, n.push('<table class="md-table">'));
      const m = b.trim().slice(1, -1).split("|").map((T) => T.trim());
      if (m.every((T) => /^[-:]+$/.test(T)))
        continue;
      if ((h === 0 || h > 0 && !o[h - 1].trim().startsWith("|")) && h < o.length - 1) {
        const T = o[h + 1];
        if (T && T.trim().startsWith("|") && T.trim().endsWith("|") && T.trim().slice(1, -1).split("|").map((U) => U.trim()).every((U) => /^[-:]+$/.test(U))) {
          n.push("<thead><tr>"), m.forEach((U) => {
            n.push(`<th>${z(U)}</th>`);
          }), n.push("</tr></thead><tbody>");
          continue;
        }
      }
      n.push("<tr>"), m.forEach((T) => {
        n.push(`<td>${z(T)}</td>`);
      }), n.push("</tr>");
      continue;
    } else y && (n.push("</tbody>"), f());
    if (!b.trim()) {
      r(), i(), f();
      continue;
    }
    if (b.startsWith(">")) {
      r(), v || (n.push('<blockquote class="md-blockquote">'), v = !0);
      const m = b.replace(/^>\s?/, "");
      n.push(`<p>${z(m)}</p>`);
      continue;
    } else v && i();
    const C = b.match(/^(#{1,6})\s+(.+)$/);
    if (C) {
      r();
      const m = C[1].length, w = z(C[2]);
      n.push(`<h${m} class="md-heading md-h${m}">${w}</h${m}>`);
      continue;
    }
    if (/^[-*_]{3,}$/.test(b.trim())) {
      r(), n.push('<hr class="md-hr" />');
      continue;
    }
    const V = b.match(/^[-*+]\s+(.+)$/);
    if (V) {
      (!g || x !== "ul") && (r(), n.push('<ul class="md-list">'), g = !0, x = "ul"), n.push(`<li>${z(V[1])}</li>`);
      continue;
    }
    const k = b.match(/^(\d+)\.\s+(.+)$/);
    if (k) {
      (!g || x !== "ol") && (r(), n.push('<ol class="md-list">'), g = !0, x = "ol"), n.push(`<li>${z(k[2])}</li>`);
      continue;
    }
    r(), p.breaks !== !1 ? n.push(`<p class="md-paragraph">${z(b)}</p>`) : n.push(`<p class="md-paragraph">${z(b)}</p>`);
  }
  return r(), i(), f(), l && n.push(`<pre class="md-code-block"><code>${J($.join(`
`))}</code></pre>`), n.join(`
`);
}
function re(e) {
  const p = [];
  return e.split(`
`).forEach((n, l) => {
    const s = n.match(/^(#{1,6})\s+(.+)$/);
    if (s) {
      const $ = s[1].length, g = s[2].trim(), x = `heading-${l}`;
      p.push({ level: $, text: g, id: x });
    }
  }), p;
}
const ce = ["title", "disabled", "onClick"], ue = { key: 0 }, de = ["value", "placeholder", "disabled"], pe = ["innerHTML"], xe = /* @__PURE__ */ N({
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
  setup(e, { emit: p }) {
    const o = e, n = p, l = F("markdown-editor"), s = R(o.modelValue), $ = R(), g = R(o.mode), x = L(() => ie(s.value)), v = L(() => re(s.value)), y = L(() => ({
      height: typeof o.height == "number" ? `${o.height}px` : o.height
    }));
    _(() => o.modelValue, (V) => {
      s.value = V;
    });
    const r = (V) => {
      const k = V.target.value;
      s.value = k, n("update:modelValue", k), n("change", k);
    }, i = (V) => {
      g.value = V;
    }, f = (V, k = "") => {
      if (!$.value || o.disabled) return;
      const m = $.value, w = m.selectionStart, T = m.selectionEnd, O = s.value.substring(w, T), U = s.value.substring(0, w) + V + O + k + s.value.substring(T);
      s.value = U, n("update:modelValue", U), n("change", U), ee(() => {
        m.focus(), m.setSelectionRange(w + V.length, w + V.length + O.length);
      });
    }, h = [
      { icon: "H1", title: "标题1", action: () => f("# ", "") },
      { icon: "H2", title: "标题2", action: () => f("## ", "") },
      { icon: "H3", title: "标题3", action: () => f("### ", "") },
      { type: "divider" },
      { icon: "B", title: "粗体", action: () => f("**", "**") },
      { icon: "I", title: "斜体", action: () => f("*", "*") },
      { icon: "S", title: "删除线", action: () => f("~~", "~~") },
      { type: "divider" },
      { icon: "•", title: "无序列表", action: () => f("- ", "") },
      { icon: "1.", title: "有序列表", action: () => f("1. ", "") },
      { type: "divider" },
      { icon: "🔗", title: "链接", action: () => f("[", "](url)") },
      { icon: "🖼", title: "图片", action: () => f("![alt](", ")") },
      { icon: "</>", title: "代码", action: () => f("`", "`") },
      { type: "divider" },
      { icon: "—", title: "分割线", action: () => f(`
---
`, "") },
      { icon: "□", title: "引用", action: () => f("> ", "") },
      { icon: "```", title: "代码块", action: () => f("\n```\n", "\n```\n") }
    ], b = L(() => [
      l.b(),
      l.is("disabled", o.disabled),
      l.is(`mode-${g.value}`)
    ]), C = (V) => {
      if (g.value !== "split") return;
      const k = document.querySelector(".x-markdown-editor__preview");
      if (!k) return;
      const m = V.target, w = m.scrollTop / (m.scrollHeight - m.clientHeight);
      k.scrollTop = w * (k.scrollHeight - k.clientHeight);
    };
    return (V, k) => (c(), d("div", {
      class: a(b.value),
      style: j(y.value)
    }, [
      e.showToolbar ? (c(), d("div", {
        key: 0,
        class: a(t(l).e("toolbar"))
      }, [
        u("div", {
          class: a(t(l).e("toolbar-left"))
        }, [
          (c(), d(W, null, M(h, (m, w) => u("button", {
            key: w,
            class: a([t(l).e("toolbar-btn"), { "is-divider": m.type === "divider" }]),
            title: m.title,
            disabled: e.disabled,
            onClick: m.action
          }, [
            m.type ? B("", !0) : (c(), d("span", ue, S(m.icon), 1))
          ], 10, ce)), 64))
        ], 2),
        u("div", {
          class: a(t(l).e("toolbar-right"))
        }, [
          u("button", {
            class: a([t(l).e("mode-btn"), { "is-active": g.value === "edit" }]),
            onClick: k[0] || (k[0] = (m) => i("edit"))
          }, " 编辑 ", 2),
          u("button", {
            class: a([t(l).e("mode-btn"), { "is-active": g.value === "split" }]),
            onClick: k[1] || (k[1] = (m) => i("split"))
          }, " 分屏 ", 2),
          u("button", {
            class: a([t(l).e("mode-btn"), { "is-active": g.value === "preview" }]),
            onClick: k[2] || (k[2] = (m) => i("preview"))
          }, " 预览 ", 2)
        ], 2)
      ], 2)) : B("", !0),
      u("div", {
        class: a(t(l).e("body"))
      }, [
        e.showToc && v.value.length > 0 ? (c(), d("div", {
          key: 0,
          class: a(t(l).e("toc"))
        }, [
          u("div", {
            class: a(t(l).e("toc-title"))
          }, "目录", 2),
          u("ul", {
            class: a(t(l).e("toc-list"))
          }, [
            (c(!0), d(W, null, M(v.value, (m, w) => (c(), d("li", {
              key: w,
              class: a(t(l).e("toc-item")),
              style: j({ paddingLeft: (m.level - 1) * 12 + "px" })
            }, S(m.text), 7))), 128))
          ], 2)
        ], 2)) : B("", !0),
        u("div", {
          class: a(t(l).e("content"))
        }, [
          D(u("div", {
            class: a(t(l).e("editor-wrapper"))
          }, [
            u("textarea", {
              ref_key: "editorRef",
              ref: $,
              class: a(t(l).e("editor")),
              value: s.value,
              placeholder: e.placeholder,
              disabled: e.disabled,
              onInput: r,
              onScroll: C
            }, null, 42, de)
          ], 2), [
            [G, g.value !== "preview"]
          ]),
          D(u("div", {
            class: a(t(l).e("preview")),
            innerHTML: x.value
          }, null, 10, pe), [
            [G, g.value !== "edit"]
          ])
        ], 2)
      ], 2)
    ], 6));
  }
});
export {
  $e as Export,
  xe as MarkdownEditor,
  ye as ProTable,
  be as SearchForm,
  ke as Statistic
};
