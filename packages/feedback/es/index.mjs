import { defineComponent as N, ref as I, computed as L, watch as te, resolveComponent as ke, openBlock as f, createBlock as j, Teleport as oe, createVNode as K, Transition as q, withCtx as D, createElementBlock as x, normalizeStyle as O, normalizeClass as a, unref as i, createElementVNode as C, withModifiers as ie, renderSlot as S, createTextVNode as H, toDisplayString as z, createCommentVNode as $, withDirectives as re, vShow as ce, Fragment as ge, renderList as ye, nextTick as ee, onUnmounted as ue, onMounted as be, reactive as Ce, createApp as ve, h as T } from "vue";
import { useNamespace as F, useZIndex as $e, useEscape as Be, nextMessageZIndex as Te } from "@xto/core";
const ot = /* @__PURE__ */ N({
  name: "XModal",
  inheritAttrs: !1,
  __name: "index",
  props: {
    modelValue: { type: Boolean, default: void 0 },
    open: { type: Boolean, default: void 0 },
    title: { default: "" },
    width: { default: "50%" },
    top: { default: "15vh" },
    modal: { type: Boolean, default: !0 },
    closeOnClickModal: { type: Boolean, default: !0 },
    closeOnPressEscape: { type: Boolean, default: !0 },
    showClose: { type: Boolean, default: !0 },
    center: { type: Boolean, default: !1 },
    destroyOnClose: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:open", "close", "open", "ok", "cancel"],
  setup(e, { emit: s }) {
    const t = e, r = s, o = F("modal"), { next: l } = $e(), m = I(l()), g = L({
      get: () => t.modelValue !== void 0 ? t.modelValue : t.open !== void 0 ? t.open : !1,
      set: (d) => {
        t.modelValue !== void 0 && r("update:modelValue", d), t.open !== void 0 && r("update:open", d), t.modelValue === void 0 && t.open === void 0 && r("update:modelValue", d);
      }
    }), v = I(), c = () => {
      g.value = !1, r("cancel"), r("close");
    }, k = () => {
      r("ok");
    }, p = () => {
      t.closeOnClickModal && t.modal && c();
    };
    Be(() => {
      t.closeOnPressEscape && g.value && c();
    }), te(() => [t.modelValue, t.open], ([d, n]) => {
      (d !== void 0 ? d : n) && (m.value = l(), r("open"));
    }, { immediate: !0 });
    const w = L(() => ({
      paddingTop: t.top
    })), h = L(() => ({
      width: typeof t.width == "number" ? `${t.width}px` : t.width,
      zIndex: m.value
    }));
    return (d, n) => {
      const y = ke("x-button");
      return f(), j(oe, { to: "body" }, [
        K(q, { name: "x-modal-fade" }, {
          default: D(() => [
            g.value ? (f(), x("div", {
              key: 0,
              class: a(i(o).e("wrapper")),
              style: O(w.value),
              onClick: p
            }, [
              C("div", {
                ref_key: "modalRef",
                ref: v,
                class: a(i(o).b()),
                style: O(h.value),
                onClick: n[0] || (n[0] = ie(() => {
                }, ["stop"]))
              }, [
                C("div", {
                  class: a(i(o).e("header"))
                }, [
                  C("span", {
                    class: a(i(o).e("title"))
                  }, [
                    S(d.$slots, "title", {}, () => [
                      H(z(e.title), 1)
                    ])
                  ], 2),
                  e.showClose ? (f(), x("button", {
                    key: 0,
                    class: a(i(o).e("close")),
                    onClick: c
                  }, " ✕ ", 2)) : $("", !0)
                ], 2),
                C("div", {
                  class: a(i(o).e("body"))
                }, [
                  S(d.$slots, "default")
                ], 2),
                d.$slots.footer ? (f(), x("div", {
                  key: 0,
                  class: a(i(o).e("footer"))
                }, [
                  S(d.$slots, "footer", {
                    ok: k,
                    cancel: c
                  })
                ], 2)) : d.$slots.footer ? $("", !0) : (f(), x("div", {
                  key: 1,
                  class: a(i(o).e("footer"))
                }, [
                  K(y, { onClick: c }, {
                    default: D(() => [...n[1] || (n[1] = [
                      H("取消", -1)
                    ])]),
                    _: 1
                  }),
                  K(y, {
                    type: "primary",
                    style: { "margin-left": "8px" },
                    onClick: k
                  }, {
                    default: D(() => [...n[2] || (n[2] = [
                      H("确定", -1)
                    ])]),
                    _: 1
                  })
                ], 2))
              ], 6)
            ], 6)) : $("", !0)
          ]),
          _: 3
        })
      ]);
    };
  }
}), nt = /* @__PURE__ */ N({
  name: "XDrawer",
  inheritAttrs: !1,
  __name: "index",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { default: "" },
    placement: { default: void 0 },
    direction: { default: "rtl" },
    width: { default: void 0 },
    size: { default: "30%" },
    withHeader: { type: Boolean, default: !0 },
    showClose: { type: Boolean, default: !0 },
    closeOnClickModal: { type: Boolean, default: !0 },
    destroyOnClose: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "close", "open"],
  setup(e, { emit: s }) {
    const t = e, r = s, o = F("drawer"), l = I(2e3), m = () => {
      r("update:modelValue", !1), r("close");
    }, g = () => {
      t.closeOnClickModal && m();
    }, v = (p) => {
      p.key === "Escape" && t.modelValue && m();
    };
    te(() => t.modelValue, (p) => {
      p ? (l.value = 2e3 + Math.floor(Math.random() * 100), r("open"), document.addEventListener("keydown", v)) : document.removeEventListener("keydown", v);
    });
    const c = L(() => ({
      zIndex: l.value
    })), k = L(() => {
      const p = t.direction ?? t.placement ?? "rtl", w = t.size ?? t.width ?? "30%", h = typeof w == "number" ? `${w}px` : w;
      return {
        ltr: { width: h, height: "100%" },
        rtl: { width: h, height: "100%" },
        ttb: { width: "100%", height: h },
        btt: { width: "100%", height: h }
      }[p];
    });
    return (p, w) => (f(), j(oe, { to: "body" }, [
      K(q, { name: "x-drawer-fade" }, {
        default: D(() => [
          re(C("div", {
            class: a([i(o).e("overlay"), { [i(o).em("overlay", "no-modal")]: !e.modal }]),
            style: O(c.value),
            onClick: g
          }, [
            C("div", {
              class: a([i(o).b(), i(o).m(e.direction ?? e.placement ?? "rtl")]),
              style: O(k.value),
              onClick: w[0] || (w[0] = ie(() => {
              }, ["stop"]))
            }, [
              e.withHeader ? (f(), x("div", {
                key: 0,
                class: a(i(o).e("header"))
              }, [
                C("span", {
                  class: a(i(o).e("title"))
                }, [
                  S(p.$slots, "title", {}, () => [
                    H(z(e.title), 1)
                  ])
                ], 2),
                e.showClose ? (f(), x("button", {
                  key: 0,
                  class: a(i(o).e("close")),
                  onClick: m
                }, " ✕ ", 2)) : $("", !0)
              ], 2)) : $("", !0),
              C("div", {
                class: a([i(o).e("body"), p.$slots.footer && i(o).em("body", "has-footer")])
              }, [
                S(p.$slots, "default")
              ], 2),
              p.$slots.footer ? (f(), x("div", {
                key: 1,
                class: a(i(o).e("footer"))
              }, [
                S(p.$slots, "footer")
              ], 2)) : $("", !0)
            ], 6)
          ], 6), [
            [ce, e.modelValue]
          ])
        ]),
        _: 3
      })
    ]));
  }
}), Ee = {
  key: 0,
  class: "required-mark"
}, Me = ["value", "placeholder", "disabled", "onInput"], ze = ["value", "placeholder", "disabled", "onInput"], Ie = ["value", "placeholder", "disabled", "onInput"], Se = ["value", "disabled", "onChange"], Le = ["value"], Ve = ["disabled", "onClick"], st = /* @__PURE__ */ N({
  name: "XDrawerForm",
  __name: "index",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { default: "配置" },
    size: { default: "400px" },
    fields: { default: () => [] },
    formData: { default: () => ({}) },
    showConfirm: { type: Boolean, default: !0 },
    showCancel: { type: Boolean, default: !0 },
    confirmText: { default: "确认" },
    cancelText: { default: "取消" },
    disabled: { type: Boolean, default: !1 },
    destroyOnClose: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "confirm", "cancel", "close", "field-change"],
  setup(e, { emit: s }) {
    const t = e, r = s, o = F("drawer-form"), l = I({}), m = I({});
    L(() => [
      o.b()
    ]), te(() => t.formData, (h) => {
      l.value = { ...h };
    }, { immediate: !0, deep: !0 });
    const g = L(() => typeof t.size == "number" ? `${t.size}px` : t.size), v = () => {
      r("update:modelValue", !1), r("close");
    }, c = () => {
      r("cancel"), v();
    }, k = () => {
      p() && (r("confirm", l.value), v());
    }, p = () => {
      m.value = {};
      for (const h of t.fields) {
        if (h.required) {
          const d = l.value[h.name];
          if (d == null || d === "") {
            m.value[h.name] = `${h.label}为必填项`;
            continue;
          }
        }
        if (h.rules)
          for (const d of h.rules) {
            const n = l.value[h.name];
            d.type === "email" && n && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n) && (m.value[h.name] = d.message), d.type === "minLength" && n && n.length < d.min && (m.value[h.name] = d.message);
          }
      }
      return Object.keys(m.value).length === 0;
    }, w = (h, d) => {
      l.value[h] = d, r("field-change", h, d);
    };
    return (h, d) => (f(), j(oe, { to: "body" }, [
      K(q, { name: "drawer-form-fade" }, {
        default: D(() => [
          re(C("div", {
            class: a(i(o).e("overlay")),
            onClick: v
          }, [
            C("div", {
              class: a(i(o).b()),
              style: O({ width: g.value }),
              onClick: d[0] || (d[0] = ie(() => {
              }, ["stop"]))
            }, [
              C("div", {
                class: a(i(o).e("header"))
              }, [
                C("span", {
                  class: a(i(o).e("title"))
                }, z(e.title), 3),
                C("button", {
                  class: a(i(o).e("close")),
                  onClick: v
                }, "✕", 2)
              ], 2),
              C("div", {
                class: a(i(o).e("body"))
              }, [
                !e.destroyOnClose || e.modelValue ? (f(), x("div", {
                  key: 0,
                  class: a(i(o).e("form"))
                }, [
                  (f(!0), x(ge, null, ye(e.fields, (n) => (f(), x("div", {
                    key: n.name,
                    class: a(i(o).e("field"))
                  }, [
                    C("label", {
                      class: a(i(o).e("label"))
                    }, [
                      H(z(n.label) + " ", 1),
                      n.required ? (f(), x("span", Ee, "*")) : $("", !0)
                    ], 2),
                    n.type === "input" ? (f(), x("input", {
                      key: 0,
                      class: a([i(o).e("input"), { "has-error": m.value[n.name] }]),
                      value: l.value[n.name],
                      placeholder: n.placeholder,
                      disabled: e.disabled || n.disabled,
                      onInput: (y) => w(n.name, y.target.value)
                    }, null, 42, Me)) : n.type === "textarea" ? (f(), x("textarea", {
                      key: 1,
                      class: a([i(o).e("textarea"), { "has-error": m.value[n.name] }]),
                      value: l.value[n.name],
                      placeholder: n.placeholder,
                      disabled: e.disabled || n.disabled,
                      rows: "4",
                      onInput: (y) => w(n.name, y.target.value)
                    }, null, 42, ze)) : n.type === "number" ? (f(), x("input", {
                      key: 2,
                      type: "number",
                      class: a([i(o).e("input"), { "has-error": m.value[n.name] }]),
                      value: l.value[n.name],
                      placeholder: n.placeholder,
                      disabled: e.disabled || n.disabled,
                      onInput: (y) => w(n.name, Number(y.target.value))
                    }, null, 42, Ie)) : n.type === "select" ? (f(), x("select", {
                      key: 3,
                      class: a([i(o).e("select"), { "has-error": m.value[n.name] }]),
                      value: l.value[n.name],
                      disabled: e.disabled || n.disabled,
                      onChange: (y) => w(n.name, y.target.value)
                    }, [
                      (f(!0), x(ge, null, ye(n.options, (y) => (f(), x("option", {
                        key: y.value,
                        value: y.value
                      }, z(y.label), 9, Le))), 128))
                    ], 42, Se)) : n.type === "switch" ? (f(), x("div", {
                      key: 4,
                      class: a(i(o).e("switch"))
                    }, [
                      C("button", {
                        class: a(["switch-btn", { "is-on": l.value[n.name] }]),
                        disabled: e.disabled || n.disabled,
                        onClick: (y) => w(n.name, !l.value[n.name])
                      }, z(l.value[n.name] ? "开启" : "关闭"), 11, Ve)
                    ], 2)) : $("", !0),
                    m.value[n.name] ? (f(), x("span", {
                      key: 5,
                      class: a(i(o).e("error"))
                    }, z(m.value[n.name]), 3)) : $("", !0)
                  ], 2))), 128))
                ], 2)) : $("", !0)
              ], 2),
              C("div", {
                class: a(i(o).e("footer"))
              }, [
                e.showCancel ? (f(), x("button", {
                  key: 0,
                  class: a(i(o).e("cancel")),
                  onClick: c
                }, z(e.cancelText), 3)) : $("", !0),
                e.showConfirm ? (f(), x("button", {
                  key: 1,
                  class: a(i(o).e("confirm")),
                  onClick: k
                }, z(e.confirmText), 3)) : $("", !0)
              ], 2)
            ], 6)
          ], 2), [
            [ce, e.modelValue]
          ])
        ]),
        _: 1
      })
    ]));
  }
}), lt = /* @__PURE__ */ N({
  name: "XAlert",
  __name: "index",
  props: {
    type: { default: "info" },
    title: { default: "" },
    description: {},
    closable: { type: Boolean, default: !0 },
    showIcon: { type: Boolean, default: !1 },
    center: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const t = e, r = s, o = F("alert"), l = I(!0), m = {
      success: "✓",
      warning: "⚠",
      error: "✕",
      info: "ℹ"
    }, g = L(() => [
      o.b(),
      o.m(t.type),
      o.is("center", t.center),
      o.is("with-description", t.description)
    ]), v = (c) => {
      l.value = !1, r("close", c);
    };
    return (c, k) => (f(), j(q, { name: "x-alert-fade" }, {
      default: D(() => [
        l.value ? (f(), x("div", {
          key: 0,
          class: a(g.value)
        }, [
          e.showIcon ? (f(), x("span", {
            key: 0,
            class: a(i(o).e("icon"))
          }, z(m[e.type]), 3)) : $("", !0),
          C("div", {
            class: a(i(o).e("content"))
          }, [
            e.title || c.$slots.title ? (f(), x("span", {
              key: 0,
              class: a(i(o).e("title"))
            }, [
              S(c.$slots, "title", {}, () => [
                H(z(e.title), 1)
              ])
            ], 2)) : $("", !0),
            e.description || c.$slots.default ? (f(), x("span", {
              key: 1,
              class: a(i(o).e("description"))
            }, [
              S(c.$slots, "default", {}, () => [
                H(z(e.description), 1)
              ])
            ], 2)) : $("", !0)
          ], 2),
          e.closable ? (f(), x("button", {
            key: 1,
            class: a(i(o).e("close")),
            onClick: v
          }, " ✕ ", 2)) : $("", !0)
        ], 2)) : $("", !0)
      ]),
      _: 3
    }));
  }
}), at = /* @__PURE__ */ N({
  name: "XTooltip",
  __name: "index",
  props: {
    content: { default: "" },
    placement: { default: "top" },
    effect: { default: "dark" },
    disabled: { type: Boolean, default: !1 },
    offset: { default: 8 },
    transition: { default: "fade" },
    visibleArrow: { type: Boolean, default: !0 },
    trigger: { default: "hover" },
    openDelay: { default: 0 },
    closeDelay: { default: 0 }
  },
  emits: ["update:visible", "show", "hide"],
  setup(e, { emit: s }) {
    const t = e, r = s, o = F("tooltip"), l = I(!1), m = I(), g = I();
    let v, c;
    const k = I({}), p = () => {
      if (!m.value || !g.value) return;
      const E = m.value.getBoundingClientRect(), W = g.value;
      W.style.visibility = "hidden", W.style.display = "block";
      const A = W.offsetWidth, Z = W.offsetHeight, X = t.offset, fe = window.innerWidth, me = window.innerHeight;
      let P = 0, R = 0, G = t.placement;
      switch (t.placement) {
        case "top":
          P = E.top - Z - X, R = E.left + (E.width - A) / 2;
          break;
        case "bottom":
          P = E.bottom + X, R = E.left + (E.width - A) / 2;
          break;
        case "left":
          P = E.top + (E.height - Z) / 2, R = E.left - A - X;
          break;
        case "right":
          P = E.top + (E.height - Z) / 2, R = E.right + X;
          break;
      }
      t.placement === "top" && P < 0 ? (G = "bottom", P = E.bottom + X) : t.placement === "bottom" && P + Z > me ? (G = "top", P = E.top - Z - X) : t.placement === "left" && R < 0 ? (G = "right", R = E.right + X) : t.placement === "right" && R + A > fe && (G = "left", R = E.left - A - X), R < 8 && (R = 8), R + A > fe - 8 && (R = fe - A - 8), P < 8 && (P = 8), P + Z > me - 8 && (P = me - Z - 8), k.value = {
        position: "fixed",
        top: `${P}px`,
        left: `${R}px`,
        visibility: "visible",
        zIndex: "2000"
      }, w.value = G;
    }, w = I(t.placement), h = () => {
      t.disabled || (clearTimeout(c), v = setTimeout(() => {
        l.value = !0, r("update:visible", !0), r("show"), ee(() => {
          p();
        });
      }, t.openDelay));
    }, d = () => {
      clearTimeout(v), c = setTimeout(() => {
        l.value = !1, r("update:visible", !1), r("hide");
      }, t.closeDelay);
    }, n = () => {
      l.value ? d() : h();
    }, y = () => {
      t.trigger === "hover" && h();
    }, u = () => {
      t.trigger === "hover" && d();
    }, b = () => {
      t.trigger === "click" && n();
    }, U = () => {
      t.trigger === "focus" && h();
    }, V = () => {
      t.trigger === "focus" && d();
    }, M = (E) => {
      var W, A;
      t.trigger === "click" && !((W = m.value) != null && W.contains(E.target)) && !((A = g.value) != null && A.contains(E.target)) && d();
    }, B = () => {
      l.value && p();
    };
    te(l, (E) => {
      E ? ee(() => {
        p(), t.trigger === "click" && document.addEventListener("click", M), window.addEventListener("scroll", B, !0), window.addEventListener("resize", B);
      }) : (document.removeEventListener("click", M), window.removeEventListener("scroll", B, !0), window.removeEventListener("resize", B));
    }), ue(() => {
      clearTimeout(v), clearTimeout(c), document.removeEventListener("click", M), window.removeEventListener("scroll", B, !0), window.removeEventListener("resize", B);
    });
    const ne = L(() => [
      o.b(),
      o.m(t.effect)
    ]), se = L(() => [
      o.e("arrow"),
      o.e(`arrow-${w.value}`)
    ]);
    return (E, W) => (f(), x("div", {
      class: a(i(o).e("wrapper"))
    }, [
      C("div", {
        ref_key: "triggerRef",
        ref: m,
        class: a(i(o).e("trigger")),
        onMouseenter: y,
        onMouseleave: u,
        onClick: b,
        onFocus: U,
        onBlur: V
      }, [
        S(E.$slots, "default")
      ], 34),
      (f(), j(oe, { to: "body" }, [
        K(q, {
          name: `x-tooltip-${e.transition}`
        }, {
          default: D(() => [
            re(C("div", {
              ref_key: "tooltipRef",
              ref: g,
              class: a(ne.value),
              style: O(k.value),
              onMouseenter: y,
              onMouseleave: u
            }, [
              S(E.$slots, "content", {}, () => [
                H(z(e.content), 1)
              ]),
              e.visibleArrow ? (f(), x("div", {
                key: 0,
                class: a(se.value)
              }, null, 2)) : $("", !0)
            ], 38), [
              [ce, l.value]
            ])
          ]),
          _: 3
        }, 8, ["name"])
      ]))
    ], 2));
  }
}), Pe = { class: "x-popconfirm-wrapper" }, Re = { class: "x-popconfirm__main" }, Oe = { class: "x-popconfirm__title" }, Ne = { class: "x-popconfirm__action" }, it = /* @__PURE__ */ N({
  name: "XPopconfirm",
  __name: "index",
  props: {
    title: { default: "" },
    confirmButtonText: { default: "确定" },
    cancelButtonText: { default: "取消" },
    confirmButtonType: { default: "primary" },
    cancelButtonType: { default: "default" },
    icon: { default: "" },
    iconColor: { default: "#faad14" },
    hideIcon: { type: Boolean, default: !1 },
    hideCancelButton: { type: Boolean, default: !1 },
    hideConfirmButton: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    width: { default: 200 },
    placement: { default: "top" },
    offset: { default: 12 },
    showArrow: { type: Boolean, default: !0 }
  },
  emits: ["confirm", "cancel"],
  setup(e, { emit: s }) {
    const t = e, r = s, o = I(!1), l = I(null), m = I(null), g = I({}), v = () => {
      if (!l.value || !m.value) return;
      const u = l.value.getBoundingClientRect(), b = m.value.getBoundingClientRect(), U = t.placement, V = t.offset;
      let M = 0, B = 0;
      switch (U) {
        case "top":
          M = u.top - b.height - V, B = u.left + (u.width - b.width) / 2;
          break;
        case "top-start":
          M = u.top - b.height - V, B = u.left;
          break;
        case "top-end":
          M = u.top - b.height - V, B = u.right - b.width;
          break;
        case "bottom":
          M = u.bottom + V, B = u.left + (u.width - b.width) / 2;
          break;
        case "bottom-start":
          M = u.bottom + V, B = u.left;
          break;
        case "bottom-end":
          M = u.bottom + V, B = u.right - b.width;
          break;
        case "left":
          M = u.top + (u.height - b.height) / 2, B = u.left - b.width - V;
          break;
        case "left-start":
          M = u.top, B = u.left - b.width - V;
          break;
        case "left-end":
          M = u.bottom - b.height, B = u.left - b.width - V;
          break;
        case "right":
          M = u.top + (u.height - b.height) / 2, B = u.right + V;
          break;
        case "right-start":
          M = u.top, B = u.right + V;
          break;
        case "right-end":
          M = u.bottom - b.height, B = u.right + V;
          break;
        default:
          M = u.top - b.height - V, B = u.left + (u.width - b.width) / 2;
      }
      const ne = window.innerWidth, se = window.innerHeight;
      B < 0 && (B = 10), B + b.width > ne && (B = ne - b.width - 10), M < 0 && (M = 10), M + b.height > se && (M = se - b.height - 10), g.value = {
        position: "fixed",
        top: `${M}px`,
        left: `${B}px`,
        zIndex: "2000"
      };
    }, c = (u) => {
      var b, U;
      o.value && ((b = l.value) != null && b.contains(u.target) || (U = m.value) != null && U.contains(u.target) || (o.value = !1));
    }, k = (u) => {
      t.disabled || (u.stopPropagation(), o.value = !o.value, o.value && setTimeout(v, 0));
    }, p = () => {
      o.value = !1, r("confirm");
    }, w = () => {
      o.value = !1, r("cancel");
    }, h = () => {
      o.value && v();
    }, d = () => {
      o.value && v();
    };
    te(o, (u) => {
      u ? (setTimeout(v, 0), document.addEventListener("click", c), window.addEventListener("scroll", h, !0), window.addEventListener("resize", d)) : (document.removeEventListener("click", c), window.removeEventListener("scroll", h, !0), window.removeEventListener("resize", d));
    }), ue(() => {
      document.removeEventListener("click", c), window.removeEventListener("scroll", h, !0), window.removeEventListener("resize", d);
    });
    const n = L(() => ({
      width: typeof t.width == "number" ? `${t.width}px` : t.width
    })), y = L(() => {
      const u = t.placement, b = {};
      switch (u) {
        case "top":
        case "top-start":
        case "top-end":
          b.bottom = "-6px", b.transform = "rotate(45deg)";
          break;
        case "bottom":
        case "bottom-start":
        case "bottom-end":
          b.top = "-6px", b.transform = "rotate(225deg)";
          break;
        case "left":
        case "left-start":
        case "left-end":
          b.right = "-6px", b.transform = "rotate(315deg)";
          break;
        case "right":
        case "right-start":
        case "right-end":
          b.left = "-6px", b.transform = "rotate(135deg)";
          break;
      }
      return b;
    });
    return (u, b) => (f(), x("span", Pe, [
      C("span", {
        ref_key: "triggerRef",
        ref: l,
        class: "x-popconfirm-trigger",
        onClick: k
      }, [
        S(u.$slots, "default")
      ], 512),
      (f(), j(oe, { to: "body" }, [
        K(q, { name: "x-popconfirm-fade" }, {
          default: D(() => [
            o.value ? (f(), x("div", {
              key: 0,
              ref_key: "popperRef",
              ref: m,
              class: "x-popconfirm",
              style: O({ ...g.value, ...n.value }),
              onClick: b[0] || (b[0] = ie(() => {
              }, ["stop"]))
            }, [
              e.showArrow ? (f(), x("span", {
                key: 0,
                class: "x-popconfirm__arrow",
                style: O(y.value)
              }, null, 4)) : $("", !0),
              C("div", Re, [
                e.hideIcon ? $("", !0) : (f(), x("span", {
                  key: 0,
                  class: "x-popconfirm__icon",
                  style: O({ color: e.iconColor })
                }, [
                  S(u.$slots, "icon", {}, () => [
                    H(z(e.icon || "⚠"), 1)
                  ])
                ], 4)),
                C("div", Oe, [
                  S(u.$slots, "title", {}, () => [
                    H(z(e.title), 1)
                  ])
                ])
              ]),
              C("div", Ne, [
                e.hideCancelButton ? $("", !0) : (f(), x("button", {
                  key: 0,
                  class: "x-button p-button--default p-button--small",
                  onClick: w
                }, z(e.cancelButtonText), 1)),
                e.hideConfirmButton ? $("", !0) : (f(), x("button", {
                  key: 1,
                  class: a(["x-button x-button--small", `x-button--${e.confirmButtonType}`]),
                  onClick: p
                }, z(e.confirmButtonText), 3))
              ])
            ], 4)) : $("", !0)
          ]),
          _: 3
        })
      ]))
    ]));
  }
}), rt = /* @__PURE__ */ N({
  name: "XBacktop",
  __name: "index",
  props: {
    visibilityHeight: { default: 200 },
    right: { default: 40 },
    bottom: { default: 40 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const t = e, r = s, o = F("backtop"), l = I(!1), m = () => {
      const c = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      l.value = c >= t.visibilityHeight;
    }, g = (c) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      }), r("click", c);
    }, v = L(() => ({
      right: `${t.right}px`,
      bottom: `${t.bottom}px`
    }));
    return be(() => {
      window.addEventListener("scroll", m, { passive: !0, capture: !0 }), setTimeout(m, 100);
    }), ue(() => {
      window.removeEventListener("scroll", m, !0);
    }), (c, k) => (f(), j(q, { name: "x-fade" }, {
      default: D(() => [
        re(C("div", {
          class: a(i(o).b()),
          style: O(v.value),
          onClick: g
        }, [
          S(c.$slots, "default", {}, () => [
            C("span", {
              class: a(i(o).e("icon"))
            }, "↑", 2)
          ])
        ], 6), [
          [ce, l.value]
        ])
      ]),
      _: 3
    }));
  }
}), ct = /* @__PURE__ */ N({
  name: "XTimeline",
  __name: "index",
  setup(e) {
    const s = F("timeline");
    return (t, r) => (f(), x("ul", {
      class: a(i(s).b())
    }, [
      S(t.$slots, "default")
    ], 2));
  }
}), ut = /* @__PURE__ */ N({
  name: "XTimelineItem",
  __name: "TimelineItem",
  props: {
    timestamp: {},
    placement: { default: "bottom" },
    type: { default: "primary" },
    color: {},
    size: { default: "normal" },
    icon: {},
    hollow: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = F("timeline-item");
    return (t, r) => (f(), x("li", {
      class: a([i(s).b(), i(s).m(e.placement)])
    }, [
      C("div", {
        class: a(i(s).e("tail"))
      }, null, 2),
      C("div", {
        class: a([i(s).e("node"), i(s).m(e.type), i(s).is("hollow", e.hollow)]),
        style: O(e.color ? { backgroundColor: e.color, borderColor: e.color } : void 0)
      }, [
        S(t.$slots, "icon", {}, () => [
          e.icon ? (f(), x("span", {
            key: 0,
            class: a(i(s).e("icon"))
          }, z(e.icon), 3)) : $("", !0)
        ])
      ], 6),
      C("div", {
        class: a(i(s).e("wrapper"))
      }, [
        e.timestamp && e.placement === "top" ? (f(), x("div", {
          key: 0,
          class: a(i(s).e("timestamp"))
        }, z(e.timestamp), 3)) : $("", !0),
        C("div", {
          class: a(i(s).e("content"))
        }, [
          S(t.$slots, "default")
        ], 2),
        e.timestamp && e.placement === "bottom" ? (f(), x("div", {
          key: 1,
          class: a(i(s).e("timestamp"))
        }, z(e.timestamp), 3)) : $("", !0)
      ], 2)
    ], 2));
  }
}), He = /* @__PURE__ */ N({
  name: "XMessage",
  __name: "index",
  props: {
    message: { default: "" },
    type: { default: "info" },
    duration: { default: 3e3 },
    showClose: { type: Boolean, default: !1 },
    center: { type: Boolean, default: !1 },
    offset: { default: 20 },
    customClass: {},
    onClose: {}
  },
  emits: ["close", "destroy"],
  setup(e, { expose: s, emit: t }) {
    const r = e, o = t, l = F("message"), m = I(!1), g = I(Te()), v = {
      success: "✓",
      warning: "⚠",
      error: "✕",
      info: "ℹ"
    }, c = L(() => [
      l.b(),
      l.m(r.type),
      l.is("center", r.center),
      l.is("closable", r.showClose),
      r.customClass
    ]), k = L(() => ({
      top: `${r.offset}px`,
      zIndex: g.value
    }));
    let p = null;
    const w = () => {
      r.duration > 0 && (p = setTimeout(() => {
        d();
      }, r.duration));
    }, h = () => {
      p && (clearTimeout(p), p = null);
    }, d = () => {
      var y;
      m.value = !1, (y = r.onClose) == null || y.call(r), o("close");
    }, n = () => {
      o("destroy");
    };
    return be(() => {
      w(), m.value = !0;
    }), ue(() => {
      h();
    }), s({
      close: d
    }), (y, u) => (f(), j(q, {
      name: "x-message-fade",
      onAfterLeave: n
    }, {
      default: D(() => [
        m.value ? (f(), x("div", {
          key: 0,
          class: a(c.value),
          style: O(k.value),
          onMouseenter: h,
          onMouseleave: w
        }, [
          C("span", {
            class: a(i(l).e("icon"))
          }, z(v[e.type]), 3),
          C("span", {
            class: a(i(l).e("content"))
          }, [
            S(y.$slots, "default", {}, () => [
              H(z(e.message), 1)
            ])
          ], 2),
          e.showClose ? (f(), x("button", {
            key: 0,
            class: a(i(l).e("close")),
            onClick: d
          }, " ✕ ", 2)) : $("", !0)
        ], 38)) : $("", !0)
      ]),
      _: 3
    }));
  }
}), J = [];
let Ae = 1;
const De = () => {
  J.slice().forEach((e) => e.close());
};
function xe(e) {
  const s = Ae++, t = document.createElement("div");
  document.body.appendChild(t);
  const r = {
    success: { bg: "#f0f9eb", border: "#67c23a", icon: "✓" },
    warning: { bg: "#fdf6ec", border: "#e6a23c", icon: "⚠" },
    error: { bg: "#fef0f0", border: "#f56c6c", icon: "✕" },
    info: { bg: "#f4f4f5", border: "#909399", icon: "ℹ" }
  }, o = e.type || "info", l = r[o] || r.info, m = Ce({
    visible: !1,
    offset: e.offset ?? 20
  });
  let g = e.offset ?? 20;
  J.forEach((n) => {
    const y = n.container.firstElementChild;
    y && y.offsetHeight && (g += y.offsetHeight + 16);
  }), m.offset = g;
  let v = null, c = !1;
  const k = () => {
    c || (m.visible = !1, setTimeout(() => {
      if (c) return;
      c = !0;
      const n = J.findIndex((y) => y.id === s);
      n !== -1 && J.splice(n, 1);
      try {
        h.unmount();
      } catch {
      }
      t.parentNode && t.parentNode.removeChild(t);
    }, 300));
  }, p = () => {
    const n = e.duration ?? 3e3;
    n > 0 && (v = setTimeout(k, n));
  }, w = () => {
    v && (clearTimeout(v), v = null);
  }, h = ve({
    render() {
      if (!m.visible) return null;
      const n = [
        // Icon
        T("span", {
          style: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20px",
            height: "20px",
            marginRight: "10px",
            fontSize: "16px",
            color: l.border
          }
        }, l.icon),
        // Content
        T("span", {
          style: {
            flex: "1",
            fontSize: "14px",
            color: "#606266",
            lineHeight: "1.4"
          }
        }, e.message || "")
      ];
      return e.showClose && n.push(
        T("button", {
          style: {
            position: "absolute",
            top: "50%",
            right: "12px",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            color: "#909399",
            padding: "0"
          },
          onClick: (y) => {
            y.stopPropagation(), k();
          }
        }, "✕")
      ), T("div", {
        class: ["x-message", `x-message--${o}`, e.center ? "is-center" : "", e.showClose ? "is-closable" : ""],
        style: {
          position: "fixed",
          left: "50%",
          top: `${m.offset}px`,
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          padding: e.showClose ? "12px 40px 12px 16px" : "12px 16px",
          borderRadius: "4px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
          minWidth: "280px",
          maxWidth: "480px",
          backgroundColor: l.bg,
          border: `1px solid ${l.border}`,
          zIndex: 2e3 + s,
          transition: "opacity 0.3s, transform 0.3s"
        },
        onMouseenter: w,
        onMouseleave: p
      }, n);
    }
  });
  h.mount(t), ee(() => {
    m.visible = !0, p();
  });
  const d = { id: s, app: h, container: t, close: k };
  return J.push(d), { close: k };
}
function Fe(e) {
  return xe(typeof e == "string" ? { message: e } : e);
}
const le = (e) => (s) => xe({ ...typeof s == "string" ? { message: s } : s, type: e }), pe = Object.assign(Fe, {
  info: le("info"),
  success: le("success"),
  warning: le("warning"),
  error: le("error"),
  closeAll: De
}), dt = pe, ft = He, mt = {
  install(e) {
    e.config.globalProperties.$message = pe, e.provide("message", pe);
  }
}, Q = [], We = () => {
  Q.slice().forEach((e) => e.close());
}, Xe = {
  success: { icon: "✓", color: "#67c23a" },
  warning: { icon: "⚠", color: "#e6a23c" },
  error: { icon: "✕", color: "#f56c6c" },
  info: { icon: "ℹ", color: "#909399" }
};
function de(e) {
  return new Promise((s) => {
    const t = document.createElement("div");
    document.body.appendChild(t);
    let r = !1;
    const o = N({
      name: "TMessageBox",
      setup() {
        const g = I(!1), v = I(e.inputValue ?? ""), c = I(""), k = 2e3 + Q.length + 1, p = (y) => {
          r || (r = !0, g.value = !1, setTimeout(() => {
            const u = Q.findIndex((b) => b.container === t);
            u !== -1 && Q.splice(u, 1);
            try {
              l.unmount();
            } catch {
            }
            t.parentNode && t.parentNode.removeChild(t), s({
              action: y,
              value: y === "confirm" ? v.value : void 0
            });
          }, 300));
        }, w = () => {
          if (e.showInput && e.inputPattern && !e.inputPattern.test(v.value)) {
            c.value = e.inputErrorMessage || "输入格式不正确";
            return;
          }
          c.value = "", p("confirm");
        }, h = () => {
          p("cancel");
        }, d = () => {
          p("close");
        }, n = () => {
          e.closeOnClickModal !== !1 && d();
        };
        return ee(() => {
          g.value = !0;
        }), {
          visible: g,
          inputValue: v,
          inputError: c,
          zIndex: k,
          handleConfirm: w,
          handleCancel: h,
          handleClose: d,
          handleMaskClick: n
        };
      },
      render() {
        if (!this.visible) return null;
        const g = e.type, v = g ? Xe[g] : null, c = [];
        v && c.push(
          T("span", {
            class: "x-message-box__icon",
            style: { color: v.color, marginRight: "10px", fontSize: "20px" }
          }, v.icon)
        ), c.push(
          T("span", { class: "x-message-box__title" }, e.title || "提示")
        ), e.showClose !== !1 && c.push(
          T("button", {
            class: "x-message-box__close",
            onClick: this.handleClose
          }, "✕")
        );
        const k = [];
        k.push(
          T("div", { class: "x-message-box__content" }, e.message || "")
        ), e.showInput && k.push(
          T("div", { class: "x-message-box__input", style: { marginTop: "12px" } }, [
            T("input", {
              class: ["x-message-box__input-inner", this.inputError ? "is-error" : ""].filter(Boolean),
              type: e.inputType || "text",
              placeholder: e.inputPlaceholder || "请输入",
              value: this.inputValue,
              onInput: (w) => {
                this.inputValue = w.target.value, this.inputError = "";
              },
              onKeyup: (w) => {
                w.key === "Enter" && this.handleConfirm();
              }
            }),
            this.inputError ? T("div", { class: "x-message-box__error", style: { color: "#f56c6c", fontSize: "12px", marginTop: "4px" } }, this.inputError) : null
          ])
        );
        const p = [];
        return e.showCancelButton && p.push(
          T("button", {
            class: "x-button p-button--default",
            onClick: this.handleCancel
          }, e.cancelButtonText || "取消")
        ), e.showConfirmButton !== !1 && p.push(
          T("button", {
            class: "x-button p-button--primary",
            onClick: this.handleConfirm,
            style: { marginLeft: "10px" }
          }, e.confirmButtonText || "确定")
        ), T("div", {
          class: ["x-message-box-wrapper", e.center ? "is-center" : ""],
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: this.zIndex
          },
          onClick: this.handleMaskClick
        }, [
          T("div", {
            class: ["x-message-box", e.customClass],
            style: {
              backgroundColor: "#fff",
              borderRadius: "4px",
              boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
              minWidth: "300px",
              maxWidth: "500px"
            },
            onClick: (w) => w.stopPropagation()
          }, [
            // Header
            T("div", {
              class: "x-message-box__header",
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderBottom: "1px solid #eee"
              }
            }, c),
            // Body
            T("div", {
              class: "x-message-box__body",
              style: {
                padding: "20px",
                fontSize: "14px",
                color: "#606266"
              }
            }, k),
            // Footer
            T("div", {
              class: "x-message-box__footer",
              style: {
                padding: "10px 20px 16px",
                textAlign: "right"
              }
            }, p)
          ])
        ]);
      }
    }), l = ve(o);
    l.mount(t);
    const m = {
      app: l,
      container: t,
      close: () => {
        var v;
        const g = (v = l._instance) == null ? void 0 : v.proxy;
        g != null && g.handleClose && g.handleClose();
      }
    };
    Q.push(m);
  });
}
async function je(e, s, t) {
  return de({
    message: e,
    title: s,
    ...t,
    showConfirmButton: !0,
    showCancelButton: !1
  });
}
async function qe(e, s, t) {
  return de({
    message: e,
    title: s,
    ...t,
    showConfirmButton: !0,
    showCancelButton: !0
  });
}
async function Ze(e, s, t) {
  return de({
    message: e,
    title: s,
    ...t,
    showInput: !0,
    showConfirmButton: !0,
    showCancelButton: !0
  });
}
function Ke(e) {
  return de(e);
}
const Y = Object.assign(Ke, {
  alert: je,
  confirm: qe,
  prompt: Ze,
  closeAll: We
}), pt = Y, ht = {
  install(e) {
    e.config.globalProperties.$msgbox = Y, e.config.globalProperties.$alert = Y.alert, e.config.globalProperties.$confirm = Y.confirm, e.config.globalProperties.$prompt = Y.prompt, e.provide("messageBox", Y);
  }
}, _ = [];
let Ue = 1;
const Ye = () => {
  _.slice().forEach((e) => e.close());
}, Ge = {
  success: { icon: "✓", color: "#67c23a" },
  warning: { icon: "⚠", color: "#e6a23c" },
  error: { icon: "✕", color: "#f56c6c" },
  info: { icon: "ℹ", color: "#909399" }
}, Je = (e, s) => {
  const t = _.filter((o) => o.position === e);
  let r = 16;
  for (const o of t)
    if (o.id < s) {
      const l = o.container.firstElementChild;
      l && (r += l.offsetHeight + 16);
    }
  return r;
}, Qe = (e, s) => {
  const t = {
    position: "fixed",
    width: "330px",
    zIndex: "2010"
  };
  switch (e) {
    case "top-right":
      t.top = `${s}px`, t.right = "16px";
      break;
    case "top-left":
      t.top = `${s}px`, t.left = "16px";
      break;
    case "bottom-right":
      t.bottom = `${s}px`, t.right = "16px";
      break;
    case "bottom-left":
      t.bottom = `${s}px`, t.left = "16px";
      break;
    default:
      t.top = `${s}px`, t.right = "16px";
  }
  return t;
};
function we(e) {
  const s = Ue++, t = e.position || "top-right", r = document.createElement("div");
  document.body.appendChild(r);
  let o = null, l = !1;
  const m = N({
    name: "TNotification",
    setup() {
      const c = I(!1), k = () => {
        l || (l = !0, c.value = !1, setTimeout(() => {
          var y;
          const n = _.findIndex((u) => u.id === s);
          n !== -1 && _.splice(n, 1), o && clearTimeout(o), (y = e.onClose) == null || y.call(e);
          try {
            g.unmount();
          } catch {
          }
          r.parentNode && r.parentNode.removeChild(r);
        }, 300));
      }, p = () => {
        const n = e.duration ?? 4500;
        n > 0 && (o = setTimeout(k, n));
      }, w = () => {
        o && (clearTimeout(o), o = null);
      }, h = L(() => (e.offset ?? 0) + Je(t, s)), d = L(() => Qe(t, h.value));
      return ee(() => {
        c.value = !0, p();
      }), {
        visible: c,
        close: k,
        positionStyles: d,
        startTimer: p,
        clearTimer: w
      };
    },
    render() {
      if (!this.visible) return null;
      const c = e.type, k = c ? Ge[c] : null, p = [];
      e.title && p.push(
        T("div", {
          class: "x-notification__title",
          style: {
            fontWeight: "600",
            fontSize: "16px",
            color: "#303133",
            marginBottom: e.message ? "6px" : "0"
          }
        }, e.title)
      ), e.message && (e.dangerouslyUseHTMLString ? p.push(
        T("div", {
          class: "x-notification__content",
          style: {
            fontSize: "14px",
            color: "#606266",
            lineHeight: "1.5"
          },
          innerHTML: e.message
        })
      ) : p.push(
        T("div", {
          class: "x-notification__content",
          style: {
            fontSize: "14px",
            color: "#606266",
            lineHeight: "1.5"
          }
        }, e.message)
      ));
      const w = [];
      return k && w.push(
        T("div", {
          class: "x-notification__icon",
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            height: "24px",
            marginRight: "12px",
            fontSize: "18px",
            color: k.color
          }
        }, k.icon)
      ), w.push(
        T("div", {
          class: "x-notification__main",
          style: {
            flex: "1"
          }
        }, p)
      ), e.showClose !== !1 && w.push(
        T("button", {
          class: "x-notification__close",
          style: {
            position: "absolute",
            top: "18px",
            right: "15px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            color: "#909399",
            padding: "0"
          },
          onClick: (h) => {
            h.stopPropagation(), this.close();
          }
        }, "✕")
      ), T("div", {
        class: ["x-notification", e.customClass],
        style: {
          ...this.positionStyles,
          display: "flex",
          alignItems: "flex-start",
          padding: "14px 26px 14px 13px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          transition: "opacity 0.3s, transform 0.3s",
          boxSizing: "border-box"
        },
        onMouseenter: this.clearTimer,
        onMouseleave: this.startTimer
      }, w);
    }
  }), g = ve(m);
  g.mount(r);
  const v = {
    id: s,
    app: g,
    container: r,
    position: t,
    close: () => {
      var k;
      const c = (k = g._instance) == null ? void 0 : k.proxy;
      c != null && c.close && c.close();
    }
  };
  return _.push(v), { close: v.close };
}
function _e(e) {
  return we(typeof e == "string" ? { message: e } : e);
}
const ae = (e) => (s) => we({ ...typeof s == "string" ? { message: s } : s, type: e }), he = Object.assign(_e, {
  info: ae("info"),
  success: ae("success"),
  warning: ae("warning"),
  error: ae("error"),
  closeAll: Ye
}), vt = he, gt = {
  install(e) {
    e.config.globalProperties.$notify = he, e.provide("notification", he);
  }
};
export {
  lt as Alert,
  rt as Backtop,
  nt as Drawer,
  st as DrawerForm,
  dt as Message,
  pt as MessageBox,
  ft as MessageComponent,
  ot as Modal,
  vt as Notification,
  it as Popconfirm,
  mt as TMessage,
  ht as TMessageBox,
  gt as TNotification,
  ct as Timeline,
  ut as TimelineItem,
  at as Tooltip
};
