import { defineComponent as A, ref as E, computed as I, watch as le, resolveComponent as be, openBlock as x, createBlock as j, Teleport as ie, createVNode as U, Transition as F, withCtx as O, createElementBlock as $, normalizeStyle as H, normalizeClass as v, unref as b, createElementVNode as z, withModifiers as pe, renderSlot as L, createTextVNode as N, toDisplayString as V, createCommentVNode as M, withDirectives as me, vShow as he, nextTick as ee, onUnmounted as ae, onMounted as ve, reactive as we, createApp as ge, h as C } from "vue";
import { useNamespace as Y, useZIndex as ke, useEscape as Ce, nextMessageZIndex as Be } from "@xto/core";
const Ke = /* @__PURE__ */ A({
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
  setup(e, { emit: i }) {
    const t = e, l = i, o = Y("modal"), { next: a } = ke(), f = E(a()), d = I({
      get: () => t.modelValue !== void 0 ? t.modelValue : t.open !== void 0 ? t.open : !1,
      set: (g) => {
        l("update:modelValue", g), l("update:open", g);
      }
    }), u = E(), n = () => {
      d.value = !1, l("cancel"), l("close");
    }, p = () => {
      l("ok");
    }, r = () => {
      t.closeOnClickModal && t.modal && n();
    };
    Ce(() => {
      t.closeOnPressEscape && d.value && n();
    }), le(() => [t.modelValue, t.open], ([g, h]) => {
      (g !== void 0 ? g : h) && (f.value = a(), l("open"));
    }, { immediate: !0 });
    const m = I(() => ({
      paddingTop: t.top
    })), w = I(() => ({
      width: typeof t.width == "number" ? `${t.width}px` : t.width,
      zIndex: f.value
    }));
    return (g, h) => {
      const y = be("x-button");
      return x(), j(ie, { to: "body" }, [
        U(F, { name: "x-modal-fade" }, {
          default: O(() => [
            d.value ? (x(), $("div", {
              key: 0,
              class: v(b(o).e("wrapper")),
              style: H(m.value),
              onClick: r
            }, [
              z("div", {
                ref_key: "modalRef",
                ref: u,
                class: v(b(o).b()),
                style: H(w.value),
                onClick: h[0] || (h[0] = pe(() => {
                }, ["stop"]))
              }, [
                z("div", {
                  class: v(b(o).e("header"))
                }, [
                  z("span", {
                    class: v(b(o).e("title"))
                  }, [
                    L(g.$slots, "title", {}, () => [
                      N(V(e.title), 1)
                    ])
                  ], 2),
                  e.showClose ? (x(), $("button", {
                    key: 0,
                    class: v(b(o).e("close")),
                    onClick: n
                  }, " ✕ ", 2)) : M("", !0)
                ], 2),
                z("div", {
                  class: v(b(o).e("body"))
                }, [
                  L(g.$slots, "default")
                ], 2),
                g.$slots.footer ? (x(), $("div", {
                  key: 0,
                  class: v(b(o).e("footer"))
                }, [
                  L(g.$slots, "footer", {
                    ok: p,
                    cancel: n
                  })
                ], 2)) : g.$slots.footer ? M("", !0) : (x(), $("div", {
                  key: 1,
                  class: v(b(o).e("footer"))
                }, [
                  U(y, { onClick: n }, {
                    default: O(() => [...h[1] || (h[1] = [
                      N("取消", -1)
                    ])]),
                    _: 1
                  }),
                  U(y, {
                    type: "primary",
                    style: { "margin-left": "8px" },
                    onClick: p
                  }, {
                    default: O(() => [...h[2] || (h[2] = [
                      N("确定", -1)
                    ])]),
                    _: 1
                  })
                ], 2))
              ], 6)
            ], 6)) : M("", !0)
          ]),
          _: 3
        })
      ]);
    };
  }
}), Ue = /* @__PURE__ */ A({
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
    destroyOnClose: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "close", "open"],
  setup(e, { emit: i }) {
    const t = e, l = i, o = Y("drawer"), a = E(2e3), f = () => {
      l("update:modelValue", !1), l("close");
    }, d = () => {
      t.closeOnClickModal && f();
    }, u = (r) => {
      r.key === "Escape" && t.modelValue && f();
    };
    le(() => t.modelValue, (r) => {
      r ? (a.value = 2e3 + Math.floor(Math.random() * 100), l("open"), document.addEventListener("keydown", u)) : document.removeEventListener("keydown", u);
    });
    const n = I(() => ({
      zIndex: a.value
    })), p = I(() => {
      const r = t.direction ?? t.placement ?? "rtl", m = t.size ?? t.width ?? "30%", w = typeof m == "number" ? `${m}px` : m;
      return {
        ltr: { width: w, height: "100%" },
        rtl: { width: w, height: "100%" },
        ttb: { width: "100%", height: w },
        btt: { width: "100%", height: w }
      }[r];
    });
    return (r, m) => (x(), j(ie, { to: "body" }, [
      U(F, { name: "x-drawer-fade" }, {
        default: O(() => [
          me(z("div", {
            class: v(b(o).e("overlay")),
            style: H(n.value),
            onClick: d
          }, [
            z("div", {
              class: v([b(o).b(), b(o).m(e.direction ?? e.placement)]),
              style: H(p.value),
              onClick: m[0] || (m[0] = pe(() => {
              }, ["stop"]))
            }, [
              e.withHeader ? (x(), $("div", {
                key: 0,
                class: v(b(o).e("header"))
              }, [
                z("span", {
                  class: v(b(o).e("title"))
                }, [
                  L(r.$slots, "title", {}, () => [
                    N(V(e.title), 1)
                  ])
                ], 2),
                e.showClose ? (x(), $("button", {
                  key: 0,
                  class: v(b(o).e("close")),
                  onClick: f
                }, " ✕ ", 2)) : M("", !0)
              ], 2)) : M("", !0),
              z("div", {
                class: v(b(o).e("body"))
              }, [
                L(r.$slots, "default")
              ], 2),
              r.$slots.footer ? (x(), $("div", {
                key: 1,
                class: v(b(o).e("footer"))
              }, [
                L(r.$slots, "footer")
              ], 2)) : M("", !0)
            ], 6)
          ], 6), [
            [he, e.modelValue]
          ])
        ]),
        _: 3
      })
    ]));
  }
}), Ye = /* @__PURE__ */ A({
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
  setup(e, { emit: i }) {
    const t = e, l = i, o = Y("alert"), a = E(!0), f = {
      success: "✓",
      warning: "⚠",
      error: "✕",
      info: "ℹ"
    }, d = I(() => [
      o.b(),
      o.m(t.type),
      o.is("center", t.center),
      o.is("with-description", t.description)
    ]), u = (n) => {
      a.value = !1, l("close", n);
    };
    return (n, p) => (x(), j(F, { name: "x-alert-fade" }, {
      default: O(() => [
        a.value ? (x(), $("div", {
          key: 0,
          class: v(d.value)
        }, [
          e.showIcon ? (x(), $("span", {
            key: 0,
            class: v(b(o).e("icon"))
          }, V(f[e.type]), 3)) : M("", !0),
          z("div", {
            class: v(b(o).e("content"))
          }, [
            e.title || n.$slots.title ? (x(), $("span", {
              key: 0,
              class: v(b(o).e("title"))
            }, [
              L(n.$slots, "title", {}, () => [
                N(V(e.title), 1)
              ])
            ], 2)) : M("", !0),
            e.description || n.$slots.default ? (x(), $("span", {
              key: 1,
              class: v(b(o).e("description"))
            }, [
              L(n.$slots, "default", {}, () => [
                N(V(e.description), 1)
              ])
            ], 2)) : M("", !0)
          ], 2),
          e.closable ? (x(), $("button", {
            key: 1,
            class: v(b(o).e("close")),
            onClick: u
          }, " ✕ ", 2)) : M("", !0)
        ], 2)) : M("", !0)
      ]),
      _: 3
    }));
  }
}), qe = /* @__PURE__ */ A({
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
  setup(e, { emit: i }) {
    const t = e, l = i, o = Y("tooltip"), a = E(!1), f = E(), d = E();
    let u, n;
    const p = E({}), r = () => {
      if (!f.value || !d.value) return;
      const B = f.value.getBoundingClientRect(), W = d.value;
      W.style.visibility = "hidden", W.style.display = "block";
      const _ = W.offsetWidth, X = W.offsetHeight, D = t.offset, ce = window.innerWidth, de = window.innerHeight;
      let P = 0, R = 0, q = t.placement;
      switch (t.placement) {
        case "top":
          P = B.top - X - D, R = B.left + (B.width - _) / 2;
          break;
        case "bottom":
          P = B.bottom + D, R = B.left + (B.width - _) / 2;
          break;
        case "left":
          P = B.top + (B.height - X) / 2, R = B.left - _ - D;
          break;
        case "right":
          P = B.top + (B.height - X) / 2, R = B.right + D;
          break;
      }
      t.placement === "top" && P < 0 ? (q = "bottom", P = B.bottom + D) : t.placement === "bottom" && P + X > de ? (q = "top", P = B.top - X - D) : t.placement === "left" && R < 0 ? (q = "right", R = B.right + D) : t.placement === "right" && R + _ > ce && (q = "left", R = B.left - _ - D), R < 8 && (R = 8), R + _ > ce - 8 && (R = ce - _ - 8), P < 8 && (P = 8), P + X > de - 8 && (P = de - X - 8), p.value = {
        position: "fixed",
        top: `${P}px`,
        left: `${R}px`,
        visibility: "visible",
        zIndex: "2000"
      }, m.value = q;
    }, m = E(t.placement), w = () => {
      t.disabled || (clearTimeout(n), u = setTimeout(() => {
        a.value = !0, l("update:visible", !0), l("show"), ee(() => {
          r();
        });
      }, t.openDelay));
    }, g = () => {
      clearTimeout(u), n = setTimeout(() => {
        a.value = !1, l("update:visible", !1), l("hide");
      }, t.closeDelay);
    }, h = () => {
      a.value ? g() : w();
    }, y = () => {
      t.trigger === "hover" && w();
    }, s = () => {
      t.trigger === "hover" && g();
    }, c = () => {
      t.trigger === "click" && h();
    }, Z = () => {
      t.trigger === "focus" && w();
    }, S = () => {
      t.trigger === "focus" && g();
    }, T = (B) => {
      var W, _;
      t.trigger === "click" && !((W = f.value) != null && W.contains(B.target)) && !((_ = d.value) != null && _.contains(B.target)) && g();
    }, k = () => {
      a.value && r();
    };
    le(a, (B) => {
      B ? ee(() => {
        r(), t.trigger === "click" && document.addEventListener("click", T), window.addEventListener("scroll", k, !0), window.addEventListener("resize", k);
      }) : (document.removeEventListener("click", T), window.removeEventListener("scroll", k, !0), window.removeEventListener("resize", k));
    }), ae(() => {
      clearTimeout(u), clearTimeout(n), document.removeEventListener("click", T), window.removeEventListener("scroll", k, !0), window.removeEventListener("resize", k);
    });
    const te = I(() => [
      o.b(),
      o.m(t.effect)
    ]), oe = I(() => [
      o.e("arrow"),
      o.e(`arrow-${m.value}`)
    ]);
    return (B, W) => (x(), $("div", {
      class: v(b(o).e("wrapper"))
    }, [
      z("div", {
        ref_key: "triggerRef",
        ref: f,
        class: v(b(o).e("trigger")),
        onMouseenter: y,
        onMouseleave: s,
        onClick: c,
        onFocus: Z,
        onBlur: S
      }, [
        L(B.$slots, "default")
      ], 34),
      (x(), j(ie, { to: "body" }, [
        U(F, {
          name: `x-tooltip-${e.transition}`
        }, {
          default: O(() => [
            me(z("div", {
              ref_key: "tooltipRef",
              ref: d,
              class: v(te.value),
              style: H(p.value),
              onMouseenter: y,
              onMouseleave: s
            }, [
              L(B.$slots, "content", {}, () => [
                N(V(e.content), 1)
              ]),
              e.visibleArrow ? (x(), $("div", {
                key: 0,
                class: v(oe.value)
              }, null, 2)) : M("", !0)
            ], 38), [
              [he, a.value]
            ])
          ]),
          _: 3
        }, 8, ["name"])
      ]))
    ], 2));
  }
}), Te = { class: "x-popconfirm-wrapper" }, $e = { class: "x-popconfirm__main" }, Ee = { class: "x-popconfirm__title" }, Me = { class: "x-popconfirm__action" }, Ge = /* @__PURE__ */ A({
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
  setup(e, { emit: i }) {
    const t = e, l = i, o = E(!1), a = E(null), f = E(null), d = E({}), u = () => {
      if (!a.value || !f.value) return;
      const s = a.value.getBoundingClientRect(), c = f.value.getBoundingClientRect(), Z = t.placement, S = t.offset;
      let T = 0, k = 0;
      switch (Z) {
        case "top":
          T = s.top - c.height - S, k = s.left + (s.width - c.width) / 2;
          break;
        case "top-start":
          T = s.top - c.height - S, k = s.left;
          break;
        case "top-end":
          T = s.top - c.height - S, k = s.right - c.width;
          break;
        case "bottom":
          T = s.bottom + S, k = s.left + (s.width - c.width) / 2;
          break;
        case "bottom-start":
          T = s.bottom + S, k = s.left;
          break;
        case "bottom-end":
          T = s.bottom + S, k = s.right - c.width;
          break;
        case "left":
          T = s.top + (s.height - c.height) / 2, k = s.left - c.width - S;
          break;
        case "left-start":
          T = s.top, k = s.left - c.width - S;
          break;
        case "left-end":
          T = s.bottom - c.height, k = s.left - c.width - S;
          break;
        case "right":
          T = s.top + (s.height - c.height) / 2, k = s.right + S;
          break;
        case "right-start":
          T = s.top, k = s.right + S;
          break;
        case "right-end":
          T = s.bottom - c.height, k = s.right + S;
          break;
        default:
          T = s.top - c.height - S, k = s.left + (s.width - c.width) / 2;
      }
      const te = window.innerWidth, oe = window.innerHeight;
      k < 0 && (k = 10), k + c.width > te && (k = te - c.width - 10), T < 0 && (T = 10), T + c.height > oe && (T = oe - c.height - 10), d.value = {
        position: "fixed",
        top: `${T}px`,
        left: `${k}px`,
        zIndex: "2000"
      };
    }, n = (s) => {
      var c, Z;
      o.value && ((c = a.value) != null && c.contains(s.target) || (Z = f.value) != null && Z.contains(s.target) || (o.value = !1));
    }, p = (s) => {
      t.disabled || (s.stopPropagation(), o.value = !o.value, o.value && setTimeout(u, 0));
    }, r = () => {
      o.value = !1, l("confirm");
    }, m = () => {
      o.value = !1, l("cancel");
    }, w = () => {
      o.value && u();
    }, g = () => {
      o.value && u();
    };
    le(o, (s) => {
      s ? (setTimeout(u, 0), document.addEventListener("click", n), window.addEventListener("scroll", w, !0), window.addEventListener("resize", g)) : (document.removeEventListener("click", n), window.removeEventListener("scroll", w, !0), window.removeEventListener("resize", g));
    }), ae(() => {
      document.removeEventListener("click", n), window.removeEventListener("scroll", w, !0), window.removeEventListener("resize", g);
    });
    const h = I(() => ({
      width: typeof t.width == "number" ? `${t.width}px` : t.width
    })), y = I(() => {
      const s = t.placement, c = {};
      switch (s) {
        case "top":
        case "top-start":
        case "top-end":
          c.bottom = "-6px", c.transform = "rotate(45deg)";
          break;
        case "bottom":
        case "bottom-start":
        case "bottom-end":
          c.top = "-6px", c.transform = "rotate(225deg)";
          break;
        case "left":
        case "left-start":
        case "left-end":
          c.right = "-6px", c.transform = "rotate(315deg)";
          break;
        case "right":
        case "right-start":
        case "right-end":
          c.left = "-6px", c.transform = "rotate(135deg)";
          break;
      }
      return c;
    });
    return (s, c) => (x(), $("span", Te, [
      z("span", {
        ref_key: "triggerRef",
        ref: a,
        class: "x-popconfirm-trigger",
        onClick: p
      }, [
        L(s.$slots, "default")
      ], 512),
      (x(), j(ie, { to: "body" }, [
        U(F, { name: "x-popconfirm-fade" }, {
          default: O(() => [
            o.value ? (x(), $("div", {
              key: 0,
              ref_key: "popperRef",
              ref: f,
              class: "x-popconfirm",
              style: H({ ...d.value, ...h.value }),
              onClick: c[0] || (c[0] = pe(() => {
              }, ["stop"]))
            }, [
              e.showArrow ? (x(), $("span", {
                key: 0,
                class: "x-popconfirm__arrow",
                style: H(y.value)
              }, null, 4)) : M("", !0),
              z("div", $e, [
                e.hideIcon ? M("", !0) : (x(), $("span", {
                  key: 0,
                  class: "x-popconfirm__icon",
                  style: H({ color: e.iconColor })
                }, [
                  L(s.$slots, "icon", {}, () => [
                    N(V(e.icon || "⚠"), 1)
                  ])
                ], 4)),
                z("div", Ee, [
                  L(s.$slots, "title", {}, () => [
                    N(V(e.title), 1)
                  ])
                ])
              ]),
              z("div", Me, [
                e.hideCancelButton ? M("", !0) : (x(), $("button", {
                  key: 0,
                  class: "x-button p-button--default p-button--small",
                  onClick: m
                }, V(e.cancelButtonText), 1)),
                e.hideConfirmButton ? M("", !0) : (x(), $("button", {
                  key: 1,
                  class: v(["x-button x-button--small", `x-button--${e.confirmButtonType}`]),
                  onClick: r
                }, V(e.confirmButtonText), 3))
              ])
            ], 4)) : M("", !0)
          ]),
          _: 3
        })
      ]))
    ]));
  }
}), Je = /* @__PURE__ */ A({
  name: "XBacktop",
  __name: "index",
  props: {
    visibilityHeight: { default: 200 },
    right: { default: 40 },
    bottom: { default: 40 }
  },
  emits: ["click"],
  setup(e, { emit: i }) {
    const t = e, l = i, o = Y("backtop"), a = E(!1), f = () => {
      const n = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      a.value = n >= t.visibilityHeight;
    }, d = (n) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      }), l("click", n);
    }, u = I(() => ({
      right: `${t.right}px`,
      bottom: `${t.bottom}px`
    }));
    return ve(() => {
      window.addEventListener("scroll", f, { passive: !0, capture: !0 }), setTimeout(f, 100);
    }), ae(() => {
      window.removeEventListener("scroll", f, !0);
    }), (n, p) => (x(), j(F, { name: "x-fade" }, {
      default: O(() => [
        me(z("div", {
          class: v(b(o).b()),
          style: H(u.value),
          onClick: d
        }, [
          L(n.$slots, "default", {}, () => [
            z("span", {
              class: v(b(o).e("icon"))
            }, "↑", 2)
          ])
        ], 6), [
          [he, a.value]
        ])
      ]),
      _: 3
    }));
  }
}), ze = /* @__PURE__ */ A({
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
  setup(e, { expose: i, emit: t }) {
    const l = e, o = t, a = Y("message"), f = E(!1), d = E(Be()), u = {
      success: "✓",
      warning: "⚠",
      error: "✕",
      info: "ℹ"
    }, n = I(() => [
      a.b(),
      a.m(l.type),
      a.is("center", l.center),
      a.is("closable", l.showClose),
      l.customClass
    ]), p = I(() => ({
      top: `${l.offset}px`,
      zIndex: d.value
    }));
    let r = null;
    const m = () => {
      l.duration > 0 && (r = setTimeout(() => {
        g();
      }, l.duration));
    }, w = () => {
      r && (clearTimeout(r), r = null);
    }, g = () => {
      var y;
      f.value = !1, (y = l.onClose) == null || y.call(l), o("close");
    }, h = () => {
      o("destroy");
    };
    return ve(() => {
      m(), f.value = !0;
    }), ae(() => {
      w();
    }), i({
      close: g
    }), (y, s) => (x(), j(F, {
      name: "x-message-fade",
      onAfterLeave: h
    }, {
      default: O(() => [
        f.value ? (x(), $("div", {
          key: 0,
          class: v(n.value),
          style: H(p.value),
          onMouseenter: w,
          onMouseleave: m
        }, [
          z("span", {
            class: v(b(a).e("icon"))
          }, V(u[e.type]), 3),
          z("span", {
            class: v(b(a).e("content"))
          }, [
            L(y.$slots, "default", {}, () => [
              N(V(e.message), 1)
            ])
          ], 2),
          e.showClose ? (x(), $("button", {
            key: 0,
            class: v(b(a).e("close")),
            onClick: g
          }, " ✕ ", 2)) : M("", !0)
        ], 38)) : M("", !0)
      ]),
      _: 3
    }));
  }
}), G = [];
let Se = 1;
const Ie = () => {
  G.slice().forEach((e) => e.close());
};
function xe(e) {
  const i = Se++, t = document.createElement("div");
  document.body.appendChild(t);
  const l = {
    success: { bg: "#f0f9eb", border: "#67c23a", icon: "✓" },
    warning: { bg: "#fdf6ec", border: "#e6a23c", icon: "⚠" },
    error: { bg: "#fef0f0", border: "#f56c6c", icon: "✕" },
    info: { bg: "#f4f4f5", border: "#909399", icon: "ℹ" }
  }, o = e.type || "info", a = l[o] || l.info, f = we({
    visible: !1,
    offset: e.offset ?? 20
  });
  let d = e.offset ?? 20;
  G.forEach((h) => {
    const y = h.container.firstElementChild;
    y && y.offsetHeight && (d += y.offsetHeight + 16);
  }), f.offset = d;
  let u = null, n = !1;
  const p = () => {
    n || (f.visible = !1, setTimeout(() => {
      if (n) return;
      n = !0;
      const h = G.findIndex((y) => y.id === i);
      h !== -1 && G.splice(h, 1);
      try {
        w.unmount();
      } catch {
      }
      t.parentNode && t.parentNode.removeChild(t);
    }, 300));
  }, r = () => {
    const h = e.duration ?? 3e3;
    h > 0 && (u = setTimeout(p, h));
  }, m = () => {
    u && (clearTimeout(u), u = null);
  }, w = ge({
    render() {
      if (!f.visible) return null;
      const h = [
        // Icon
        C("span", {
          style: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20px",
            height: "20px",
            marginRight: "10px",
            fontSize: "16px",
            color: a.border
          }
        }, a.icon),
        // Content
        C("span", {
          style: {
            flex: "1",
            fontSize: "14px",
            color: "#606266",
            lineHeight: "1.4"
          }
        }, e.message || "")
      ];
      return e.showClose && h.push(
        C("button", {
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
            y.stopPropagation(), p();
          }
        }, "✕")
      ), C("div", {
        class: ["x-message", `x-message--${o}`, e.center ? "is-center" : "", e.showClose ? "is-closable" : ""],
        style: {
          position: "fixed",
          left: "50%",
          top: `${f.offset}px`,
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          padding: e.showClose ? "12px 40px 12px 16px" : "12px 16px",
          borderRadius: "4px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
          minWidth: "280px",
          maxWidth: "480px",
          backgroundColor: a.bg,
          border: `1px solid ${a.border}`,
          zIndex: 2e3 + i,
          transition: "opacity 0.3s, transform 0.3s"
        },
        onMouseenter: m,
        onMouseleave: r
      }, h);
    }
  });
  w.mount(t), ee(() => {
    f.visible = !0, r();
  });
  const g = { id: i, app: w, container: t, close: p };
  return G.push(g), { close: p };
}
function Le(e) {
  return xe(typeof e == "string" ? { message: e } : e);
}
const ne = (e) => (i) => xe({ ...typeof i == "string" ? { message: i } : i, type: e }), ue = Object.assign(Le, {
  info: ne("info"),
  success: ne("success"),
  warning: ne("warning"),
  error: ne("error"),
  closeAll: Ie
}), Qe = ue, et = ze, tt = {
  install(e) {
    e.config.globalProperties.$message = ue, e.provide("message", ue);
  }
}, J = [], Pe = () => {
  J.slice().forEach((e) => e.close());
}, Re = {
  success: { icon: "✓", color: "#67c23a" },
  warning: { icon: "⚠", color: "#e6a23c" },
  error: { icon: "✕", color: "#f56c6c" },
  info: { icon: "ℹ", color: "#909399" }
};
function re(e) {
  return new Promise((i) => {
    const t = document.createElement("div");
    document.body.appendChild(t);
    let l = !1;
    const o = A({
      name: "TMessageBox",
      setup() {
        const d = E(!1), u = E(e.inputValue ?? ""), n = E(""), p = 2e3 + J.length + 1, r = (y) => {
          l || (l = !0, d.value = !1, setTimeout(() => {
            const s = J.findIndex((c) => c.container === t);
            s !== -1 && J.splice(s, 1);
            try {
              a.unmount();
            } catch {
            }
            t.parentNode && t.parentNode.removeChild(t), i({
              action: y,
              value: y === "confirm" ? u.value : void 0
            });
          }, 300));
        }, m = () => {
          if (e.showInput && e.inputPattern && !e.inputPattern.test(u.value)) {
            n.value = e.inputErrorMessage || "输入格式不正确";
            return;
          }
          n.value = "", r("confirm");
        }, w = () => {
          r("cancel");
        }, g = () => {
          r("close");
        }, h = () => {
          e.closeOnClickModal !== !1 && g();
        };
        return ee(() => {
          d.value = !0;
        }), {
          visible: d,
          inputValue: u,
          inputError: n,
          zIndex: p,
          handleConfirm: m,
          handleCancel: w,
          handleClose: g,
          handleMaskClick: h
        };
      },
      render() {
        if (!this.visible) return null;
        const d = e.type, u = d ? Re[d] : null, n = [];
        u && n.push(
          C("span", {
            class: "x-message-box__icon",
            style: { color: u.color, marginRight: "10px", fontSize: "20px" }
          }, u.icon)
        ), n.push(
          C("span", { class: "x-message-box__title" }, e.title || "提示")
        ), e.showClose !== !1 && n.push(
          C("button", {
            class: "x-message-box__close",
            onClick: this.handleClose
          }, "✕")
        );
        const p = [];
        p.push(
          C("div", { class: "x-message-box__content" }, e.message || "")
        ), e.showInput && p.push(
          C("div", { class: "x-message-box__input", style: { marginTop: "12px" } }, [
            C("input", {
              class: ["x-message-box__input-inner", this.inputError ? "is-error" : ""].filter(Boolean),
              type: e.inputType || "text",
              placeholder: e.inputPlaceholder || "请输入",
              value: this.inputValue,
              onInput: (m) => {
                this.inputValue = m.target.value, this.inputError = "";
              },
              onKeyup: (m) => {
                m.key === "Enter" && this.handleConfirm();
              }
            }),
            this.inputError ? C("div", { class: "x-message-box__error", style: { color: "#f56c6c", fontSize: "12px", marginTop: "4px" } }, this.inputError) : null
          ])
        );
        const r = [];
        return e.showCancelButton && r.push(
          C("button", {
            class: "x-button p-button--default",
            onClick: this.handleCancel
          }, e.cancelButtonText || "取消")
        ), e.showConfirmButton !== !1 && r.push(
          C("button", {
            class: "x-button p-button--primary",
            onClick: this.handleConfirm,
            style: { marginLeft: "10px" }
          }, e.confirmButtonText || "确定")
        ), C("div", {
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
          C("div", {
            class: ["x-message-box", e.customClass],
            style: {
              backgroundColor: "#fff",
              borderRadius: "4px",
              boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
              minWidth: "300px",
              maxWidth: "500px"
            },
            onClick: (m) => m.stopPropagation()
          }, [
            // Header
            C("div", {
              class: "x-message-box__header",
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderBottom: "1px solid #eee"
              }
            }, n),
            // Body
            C("div", {
              class: "x-message-box__body",
              style: {
                padding: "20px",
                fontSize: "14px",
                color: "#606266"
              }
            }, p),
            // Footer
            C("div", {
              class: "x-message-box__footer",
              style: {
                padding: "10px 20px 16px",
                textAlign: "right"
              }
            }, r)
          ])
        ]);
      }
    }), a = ge(o);
    a.mount(t);
    const f = {
      app: a,
      container: t,
      close: () => {
        var u;
        const d = (u = a._instance) == null ? void 0 : u.proxy;
        d != null && d.handleClose && d.handleClose();
      }
    };
    J.push(f);
  });
}
async function Ve(e, i, t) {
  return re({
    message: e,
    title: i,
    ...t,
    showConfirmButton: !0,
    showCancelButton: !1
  });
}
async function _e(e, i, t) {
  return re({
    message: e,
    title: i,
    ...t,
    showConfirmButton: !0,
    showCancelButton: !0
  });
}
async function He(e, i, t) {
  return re({
    message: e,
    title: i,
    ...t,
    showInput: !0,
    showConfirmButton: !0,
    showCancelButton: !0
  });
}
function Ne(e) {
  return re(e);
}
const K = Object.assign(Ne, {
  alert: Ve,
  confirm: _e,
  prompt: He,
  closeAll: Pe
}), ot = K, nt = {
  install(e) {
    e.config.globalProperties.$msgbox = K, e.config.globalProperties.$alert = K.alert, e.config.globalProperties.$confirm = K.confirm, e.config.globalProperties.$prompt = K.prompt, e.provide("messageBox", K);
  }
}, Q = [];
let Oe = 1;
const Ae = () => {
  Q.slice().forEach((e) => e.close());
}, We = {
  success: { icon: "✓", color: "#67c23a" },
  warning: { icon: "⚠", color: "#e6a23c" },
  error: { icon: "✕", color: "#f56c6c" },
  info: { icon: "ℹ", color: "#909399" }
}, De = (e, i) => {
  const t = Q.filter((o) => o.position === e);
  let l = 16;
  for (const o of t)
    if (o.id < i) {
      const a = o.container.firstElementChild;
      a && (l += a.offsetHeight + 16);
    }
  return l;
}, Xe = (e, i) => {
  const t = {
    position: "fixed",
    width: "330px",
    zIndex: "2010"
  };
  switch (e) {
    case "top-right":
      t.top = `${i}px`, t.right = "16px";
      break;
    case "top-left":
      t.top = `${i}px`, t.left = "16px";
      break;
    case "bottom-right":
      t.bottom = `${i}px`, t.right = "16px";
      break;
    case "bottom-left":
      t.bottom = `${i}px`, t.left = "16px";
      break;
    default:
      t.top = `${i}px`, t.right = "16px";
  }
  return t;
};
function ye(e) {
  const i = Oe++, t = e.position || "top-right", l = document.createElement("div");
  document.body.appendChild(l);
  let o = null, a = !1;
  const f = A({
    name: "TNotification",
    setup() {
      const n = E(!1), p = () => {
        a || (a = !0, n.value = !1, setTimeout(() => {
          var y;
          const h = Q.findIndex((s) => s.id === i);
          h !== -1 && Q.splice(h, 1), o && clearTimeout(o), (y = e.onClose) == null || y.call(e);
          try {
            d.unmount();
          } catch {
          }
          l.parentNode && l.parentNode.removeChild(l);
        }, 300));
      }, r = () => {
        const h = e.duration ?? 4500;
        h > 0 && (o = setTimeout(p, h));
      }, m = () => {
        o && (clearTimeout(o), o = null);
      }, w = I(() => (e.offset ?? 0) + De(t, i)), g = I(() => Xe(t, w.value));
      return ee(() => {
        n.value = !0, r();
      }), {
        visible: n,
        close: p,
        positionStyles: g,
        startTimer: r,
        clearTimer: m
      };
    },
    render() {
      if (!this.visible) return null;
      const n = e.type, p = n ? We[n] : null, r = [];
      e.title && r.push(
        C("div", {
          class: "x-notification__title",
          style: {
            fontWeight: "600",
            fontSize: "16px",
            color: "#303133",
            marginBottom: e.message ? "6px" : "0"
          }
        }, e.title)
      ), e.message && (e.dangerouslyUseHTMLString ? r.push(
        C("div", {
          class: "x-notification__content",
          style: {
            fontSize: "14px",
            color: "#606266",
            lineHeight: "1.5"
          },
          innerHTML: e.message
        })
      ) : r.push(
        C("div", {
          class: "x-notification__content",
          style: {
            fontSize: "14px",
            color: "#606266",
            lineHeight: "1.5"
          }
        }, e.message)
      ));
      const m = [];
      return p && m.push(
        C("div", {
          class: "x-notification__icon",
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            height: "24px",
            marginRight: "12px",
            fontSize: "18px",
            color: p.color
          }
        }, p.icon)
      ), m.push(
        C("div", {
          class: "x-notification__main",
          style: {
            flex: "1"
          }
        }, r)
      ), e.showClose !== !1 && m.push(
        C("button", {
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
          onClick: (w) => {
            w.stopPropagation(), this.close();
          }
        }, "✕")
      ), C("div", {
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
      }, m);
    }
  }), d = ge(f);
  d.mount(l);
  const u = {
    id: i,
    app: d,
    container: l,
    position: t,
    close: () => {
      var p;
      const n = (p = d._instance) == null ? void 0 : p.proxy;
      n != null && n.close && n.close();
    }
  };
  return Q.push(u), { close: u.close };
}
function je(e) {
  return ye(typeof e == "string" ? { message: e } : e);
}
const se = (e) => (i) => ye({ ...typeof i == "string" ? { message: i } : i, type: e }), fe = Object.assign(je, {
  info: se("info"),
  success: se("success"),
  warning: se("warning"),
  error: se("error"),
  closeAll: Ae
}), st = fe, lt = {
  install(e) {
    e.config.globalProperties.$notify = fe, e.provide("notification", fe);
  }
};
export {
  Ye as Alert,
  Je as Backtop,
  Ue as Drawer,
  Qe as Message,
  ot as MessageBox,
  et as MessageComponent,
  Ke as Modal,
  st as Notification,
  Ge as Popconfirm,
  tt as TMessage,
  nt as TMessageBox,
  lt as TNotification,
  qe as Tooltip
};
