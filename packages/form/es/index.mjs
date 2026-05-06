import { defineComponent as J, ref as E, useSlots as He, computed as b, watch as ie, openBlock as r, createElementBlock as d, normalizeClass as u, unref as s, renderSlot as ae, createElementVNode as i, toDisplayString as z, createCommentVNode as U, withDirectives as ue, vModelDynamic as Ne, normalizeStyle as ne, vModelText as be, inject as De, withModifiers as oe, createTextVNode as me, provide as $e, toRef as Ue, onMounted as xe, onUnmounted as we, Fragment as j, renderList as Q, createBlock as ge, Teleport as Ie, createVNode as Ce, Transition as Le, withCtx as Pe, vModelSelect as ke, vShow as Ae, nextTick as Se } from "vue";
import { useNamespace as _, useZIndex as Ye } from "@xto/core";
const Xe = ["type", "placeholder", "disabled", "readonly", "maxlength", "minlength"], Sl = /* @__PURE__ */ J({
  name: "XInput",
  __name: "index",
  props: {
    modelValue: { default: void 0 },
    value: { default: void 0 },
    type: { default: "text" },
    placeholder: { default: "" },
    size: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    maxlength: {},
    minlength: {},
    showWordLimit: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    prefixIcon: {},
    suffixIcon: {}
  },
  emits: ["update:modelValue", "update:value", "input", "change", "focus", "blur", "clear"],
  setup(n, { expose: y, emit: t }) {
    const e = n, a = t, l = _("input"), m = E(), h = E(!1), w = E(!1), V = He(), F = b(
      () => e.type === "password" && e.showPassword && !e.disabled
    ), $ = b(() => F.value ? w.value ? "text" : "password" : e.type);
    b(() => e.modelValue !== void 0), b(() => e.value !== void 0);
    const k = E("");
    ie(
      [() => e.modelValue, () => e.value],
      ([O, N]) => {
        const q = O ?? N ?? "";
        q !== k.value && (k.value = q);
      },
      { immediate: !0 }
    );
    const D = (O) => {
      k.value = O, a("update:modelValue", O), a("update:value", O), a("input", O);
    }, A = b(() => String(k.value).length), f = b(() => [
      l.b(),
      e.size !== "default" ? l.m(e.size) : "",
      l.is("disabled", e.disabled),
      l.is("focus", h.value),
      l.is("has-prefix", e.prefixIcon || V.prefix),
      l.is("has-suffix", e.suffixIcon || V.suffix || e.clearable || F.value || e.showWordLimit)
    ]), C = (O) => {
      const N = O.target.value;
      a("change", N);
    }, R = (O) => {
      h.value = !0, a("focus", O);
    }, L = (O) => {
      h.value = !1, a("blur", O);
    }, M = () => {
      k.value = "", a("update:modelValue", ""), a("update:value", ""), a("clear");
    }, p = () => {
      w.value = !w.value;
    };
    return y({
      focus: () => {
        var O;
        (O = m.value) == null || O.focus();
      },
      blur: () => {
        var O;
        (O = m.value) == null || O.blur();
      },
      inputRef: m
    }), (O, N) => (r(), d("div", {
      class: u(f.value)
    }, [
      O.$slots.prefix || n.prefixIcon ? (r(), d("span", {
        key: 0,
        class: u(s(l).e("prefix"))
      }, [
        ae(O.$slots, "prefix", {}, () => [
          i("span", {
            class: u(s(l).e("icon"))
          }, z(n.prefixIcon), 3)
        ])
      ], 2)) : U("", !0),
      ue(i("input", {
        ref_key: "inputRef",
        ref: m,
        "onUpdate:modelValue": N[0] || (N[0] = (q) => k.value = q),
        type: $.value,
        placeholder: n.placeholder,
        disabled: n.disabled,
        readonly: n.readonly,
        maxlength: n.maxlength,
        minlength: n.minlength,
        class: u(s(l).e("inner")),
        onInput: N[1] || (N[1] = (q) => D(q.target.value)),
        onChange: C,
        onFocus: R,
        onBlur: L
      }, null, 42, Xe), [
        [Ne, k.value]
      ]),
      O.$slots.suffix || n.suffixIcon || n.clearable || F.value || n.showWordLimit ? (r(), d("span", {
        key: 1,
        class: u(s(l).e("suffix"))
      }, [
        ae(O.$slots, "suffix", {}, () => [
          n.clearable && n.value && !n.disabled ? (r(), d("span", {
            key: 0,
            class: u([s(l).e("icon"), s(l).e("clear")]),
            onClick: M
          }, " ✕ ", 2)) : U("", !0),
          F.value ? (r(), d("span", {
            key: 1,
            class: u([s(l).e("icon"), s(l).e("password")]),
            onClick: p
          }, z(w.value ? "🙈" : "👁️"), 3)) : U("", !0),
          n.showWordLimit && n.maxlength ? (r(), d("span", {
            key: 2,
            class: u(s(l).e("count"))
          }, z(A.value) + "/" + z(n.maxlength), 3)) : U("", !0)
        ])
      ], 2)) : U("", !0)
    ], 2));
  }
}), Ke = ["disabled"], We = ["value", "placeholder", "disabled"], qe = ["disabled"], Ml = /* @__PURE__ */ J({
  name: "XInputNumber",
  __name: "index",
  props: {
    modelValue: { default: void 0 },
    value: { default: void 0 },
    min: { default: -1 / 0 },
    max: { default: 1 / 0 },
    step: { default: 1 },
    stepStrictly: { type: Boolean, default: !1 },
    precision: { default: void 0 },
    size: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    controls: { type: Boolean, default: !0 },
    controlsPosition: { default: "" },
    placeholder: { default: "" },
    valueOnClear: { default: null }
  },
  emits: ["update:modelValue", "update:value", "change", "focus", "blur"],
  setup(n, { expose: y, emit: t }) {
    const e = n, a = t, l = _("input-number"), m = E(), h = E(!1), w = E(null), V = E(e.modelValue), F = b(() => {
      if (e.precision !== void 0)
        return e.precision;
      const o = $(e.step), c = e.modelValue !== void 0 && e.modelValue !== null ? $(e.modelValue) : 0;
      return Math.max(o, c);
    });
    function $(o) {
      if (o == null) return 0;
      const c = o.toString(), g = c.indexOf(".");
      return g === -1 ? 0 : c.length - g - 1;
    }
    function k(o, c = F.value) {
      if (c === 0) return Math.round(o);
      let g = o.toFixed(c);
      return Number(g);
    }
    function D(o) {
      return o > e.max ? e.max : o < e.min ? e.min : o;
    }
    const A = b(() => e.modelValue ?? e.value ?? void 0), f = b(() => w.value !== null ? w.value : A.value === void 0 || A.value === null ? "" : k(A.value)), C = b(() => e.disabled ? !0 : A.value === void 0 ? e.min !== -1 / 0 : A.value <= e.min), R = b(() => e.disabled ? !0 : A.value === void 0 ? e.max !== 1 / 0 : A.value >= e.max), L = b(() => [
      l.b(),
      e.size !== "default" ? l.m(e.size) : "",
      l.is("disabled", e.disabled),
      l.is("focus", h.value),
      e.controlsPosition ? l.m(e.controlsPosition) : ""
    ]);
    function M() {
      if (e.disabled || R.value) return;
      const o = A.value ?? (e.min === -1 / 0 ? 0 : e.min), c = k(o + e.step), g = D(c);
      v(g);
    }
    function p() {
      if (e.disabled || C.value) return;
      const o = A.value ?? (e.min === -1 / 0 ? 0 : e.min), c = k(o - e.step), g = D(c);
      v(g);
    }
    function v(o) {
      const c = V.value;
      if (o === void 0)
        e.modelValue !== void 0 && a("update:modelValue", void 0), e.value !== void 0 && a("update:value", void 0), e.modelValue === void 0 && e.value === void 0 && a("update:modelValue", void 0), a("change", void 0, c);
      else {
        const g = k(o), W = D(g);
        if (e.stepStrictly) {
          const le = Math.round((W - e.min) / e.step), H = k(e.min + le * e.step);
          e.modelValue !== void 0 && a("update:modelValue", H), e.value !== void 0 && a("update:value", H), e.modelValue === void 0 && e.value === void 0 && a("update:modelValue", H), a("change", H, c);
        } else
          e.modelValue !== void 0 && a("update:modelValue", W), e.value !== void 0 && a("update:value", W), e.modelValue === void 0 && e.value === void 0 && a("update:modelValue", W), a("change", W, c);
      }
      V.value = e.modelValue ?? e.value, w.value = null;
    }
    function S(o) {
      if (o === "" || o === "-")
        return;
      let c = o.replace(/[^\d.-]/g, "");
      const g = c.split(".");
      g.length > 2 && (c = g[0] + "." + g.slice(1).join("")), c.indexOf("-") > 0 && (c = c.replace(/-/g, "")), c.lastIndexOf("-") > 0 && (c = "-" + c.replace(/-/g, ""));
      const W = Number(c);
      if (!isNaN(W))
        return W;
    }
    function O(o) {
      const c = o.target.value;
      w.value = c;
    }
    function N(o) {
      if (h.value = !1, w.value !== null) {
        const c = S(w.value);
        c === void 0 ? e.valueOnClear !== null ? v(e.valueOnClear) : w.value = null : v(c);
      }
      a("blur", o);
    }
    function q(o) {
      h.value = !0, V.value = e.modelValue, a("focus", o);
    }
    function ee(o) {
      var c;
      if (!e.disabled)
        switch (o.key) {
          case "ArrowUp":
            o.preventDefault(), M();
            break;
          case "ArrowDown":
            o.preventDefault(), p();
            break;
          case "Enter":
            (c = m.value) == null || c.blur();
            break;
        }
    }
    function T() {
      w.value = null, e.valueOnClear !== null && e.valueOnClear !== void 0 ? v(e.valueOnClear) : (e.modelValue !== void 0 && a("update:modelValue", void 0), e.value !== void 0 && a("update:value", void 0), e.modelValue === void 0 && e.value === void 0 && a("update:modelValue", void 0), a("change", void 0, V.value), V.value = void 0);
    }
    function B() {
      var o;
      (o = m.value) == null || o.focus();
    }
    function x() {
      var o;
      (o = m.value) == null || o.blur();
    }
    return ie([() => e.modelValue, () => e.value], ([o, c]) => {
      V.value = o ?? c, w.value = null;
    }, { immediate: !0 }), y({
      focus: B,
      blur: x,
      clear: T,
      increase: M,
      decrease: p
    }), (o, c) => (r(), d("div", {
      class: u(L.value)
    }, [
      n.controls ? (r(), d("button", {
        key: 0,
        type: "button",
        class: u([s(l).e("decrease"), s(l).is("disabled", C.value)]),
        disabled: C.value,
        onClick: p
      }, " − ", 10, Ke)) : U("", !0),
      i("div", {
        class: u(s(l).e("wrapper"))
      }, [
        i("input", {
          ref_key: "inputRef",
          ref: m,
          value: f.value,
          placeholder: n.placeholder,
          disabled: n.disabled,
          class: u(s(l).e("inner")),
          type: "text",
          autocomplete: "off",
          onInput: O,
          onFocus: q,
          onBlur: N,
          onKeydown: ee
        }, null, 42, We)
      ], 2),
      n.controls ? (r(), d("button", {
        key: 1,
        type: "button",
        class: u([s(l).e("increase"), s(l).is("disabled", R.value)]),
        disabled: R.value,
        onClick: M
      }, " + ", 10, qe)) : U("", !0)
    ], 2));
  }
}), Ge = ["placeholder", "disabled", "readonly", "maxlength", "minlength", "rows"], Tl = /* @__PURE__ */ J({
  name: "XTextarea",
  __name: "index",
  props: {
    modelValue: { default: void 0 },
    value: { default: void 0 },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    maxlength: {},
    minlength: {},
    rows: { default: 2 },
    autosize: { type: [Boolean, Object], default: !1 },
    showWordLimit: { type: Boolean, default: !1 },
    resize: { default: "vertical" }
  },
  emits: ["update:modelValue", "update:value", "input", "change", "focus", "blur"],
  setup(n, { expose: y, emit: t }) {
    const e = n, a = t, l = _("textarea"), m = E(), h = E(!1), w = E("");
    ie(
      [() => e.modelValue, () => e.value],
      ([M, p]) => {
        const v = M ?? p ?? "";
        v !== w.value && (w.value = v);
      },
      { immediate: !0 }
    );
    const V = (M) => {
      w.value = M, a("update:modelValue", M), a("update:value", M), a("input", M);
    }, F = b(() => String(w.value).length), $ = b(() => {
      const M = {};
      if (e.resize && (M.resize = e.resize), e.autosize && (M.minHeight = "auto", typeof e.autosize == "object")) {
        const p = e.autosize.minRows || 1, v = e.autosize.maxRows;
        M.minHeight = `${p * 22 + 12}px`, v && (M.maxHeight = `${v * 22 + 12}px`);
      }
      return M;
    }), k = b(() => [
      l.b(),
      l.is("disabled", e.disabled),
      l.is("focus", h.value),
      l.is("exceed", e.maxlength && F.value > e.maxlength)
    ]), D = (M) => {
      const p = M.target.value;
      V(p), e.autosize && m.value && (m.value.style.height = "auto", m.value.style.height = `${m.value.scrollHeight}px`);
    }, A = (M) => {
      const p = M.target.value;
      a("change", p);
    }, f = (M) => {
      h.value = !0, a("focus", M);
    }, C = (M) => {
      h.value = !1, a("blur", M);
    };
    return y({
      focus: () => {
        var M;
        (M = m.value) == null || M.focus();
      },
      blur: () => {
        var M;
        (M = m.value) == null || M.blur();
      },
      textareaRef: m
    }), (M, p) => (r(), d("div", {
      class: u(k.value),
      style: ne(n.disabled ? void 0 : { cursor: "text" })
    }, [
      ue(i("textarea", {
        ref_key: "textareaRef",
        ref: m,
        "onUpdate:modelValue": p[0] || (p[0] = (v) => w.value = v),
        placeholder: n.placeholder,
        disabled: n.disabled,
        readonly: n.readonly,
        maxlength: n.maxlength,
        minlength: n.minlength,
        rows: n.rows,
        style: ne($.value),
        class: u(s(l).e("inner")),
        onInput: D,
        onChange: A,
        onFocus: f,
        onBlur: C
      }, null, 46, Ge), [
        [be, w.value]
      ]),
      n.showWordLimit && n.maxlength ? (r(), d("span", {
        key: 0,
        class: u(s(l).e("count"))
      }, z(F.value) + "/" + z(n.maxlength), 3)) : U("", !0)
    ], 6));
  }
}), Rl = /* @__PURE__ */ J({
  name: "XSwitch",
  __name: "index",
  props: {
    modelValue: { type: [Boolean, Number, String], default: void 0 },
    checked: { type: [Boolean, Number, String], default: void 0 },
    disabled: { type: Boolean, default: !1 },
    width: { default: 40 },
    activeColor: { default: "#409eff" },
    inactiveColor: { default: "#dcdfe6" },
    activeValue: { type: [Boolean, Number, String], default: !0 },
    inactiveValue: { type: [Boolean, Number, String], default: !1 }
  },
  emits: ["update:modelValue", "update:checked", "change"],
  setup(n, { emit: y }) {
    const t = n, e = y, a = _("switch"), l = b(() => t.modelValue !== void 0 ? t.modelValue : t.checked !== void 0 ? t.checked : !1), m = b(() => l.value === t.activeValue), h = b(() => [
      a.b(),
      a.is("disabled", t.disabled),
      a.is("checked", m.value)
    ]), w = b(() => ({
      width: typeof t.width == "number" ? `${t.width}px` : t.width,
      height: "20px",
      backgroundColor: m.value ? t.activeColor : t.inactiveColor
    })), V = () => {
      if (t.disabled) return;
      const F = m.value ? t.inactiveValue : t.activeValue;
      t.modelValue !== void 0 && e("update:modelValue", F), t.checked !== void 0 && e("update:checked", F), t.modelValue === void 0 && t.checked === void 0 && e("update:modelValue", F), e("change", F);
    };
    return (F, $) => (r(), d("span", {
      class: u(h.value),
      onClick: V
    }, [
      i("span", {
        class: u(s(a).e("core")),
        style: ne(w.value)
      }, null, 6),
      F.$slots.default ? (r(), d("span", {
        key: 0,
        class: u(s(a).e("text"))
      }, [
        ae(F.$slots, "default")
      ], 2)) : U("", !0)
    ], 2));
  }
}), je = ["checked", "disabled", "name", "value"], Bl = /* @__PURE__ */ J({
  name: "XRadio",
  __name: "index",
  props: {
    modelValue: { type: [String, Number, Boolean] },
    value: { type: [String, Number, Boolean] },
    label: {},
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: y }) {
    const t = n, e = y, a = _("radio"), l = De("radioGroup", null), m = b(() => !!l), h = b(() => m.value ? l.modelValue.value : t.modelValue), w = b(() => t.value ?? t.label), V = b(() => h.value === w.value), F = b(() => t.disabled || m.value && l.disabled), $ = b(() => t.name || (m.value ? l.name : void 0)), k = b(() => [
      a.b(),
      a.is("checked", V.value),
      a.is("disabled", F.value)
    ]), D = () => {
      F.value || (m.value ? l.changeValue(w.value) : (e("update:modelValue", w.value), e("change", w.value)));
    };
    return (A, f) => (r(), d("label", {
      class: u(k.value),
      onClick: oe(D, ["prevent"])
    }, [
      i("span", {
        class: u(s(a).e("input"))
      }, [
        i("input", {
          type: "radio",
          checked: V.value,
          disabled: F.value,
          name: $.value,
          value: w.value
        }, null, 8, je)
      ], 2),
      A.$slots.default || n.label ? (r(), d("span", {
        key: 0,
        class: u(s(a).e("label"))
      }, [
        ae(A.$slots, "default", {}, () => [
          me(z(n.label), 1)
        ])
      ], 2)) : U("", !0)
    ], 2));
  }
}), Fl = /* @__PURE__ */ J({
  name: "XRadioGroup",
  __name: "group",
  props: {
    modelValue: { type: [String, Number, Boolean], default: void 0 },
    value: { type: [String, Number, Boolean], default: void 0 },
    disabled: { type: Boolean, default: !1 },
    name: {}
  },
  emits: ["update:modelValue", "update:value", "change"],
  setup(n, { emit: y }) {
    const t = n, e = y, a = _("radio-group"), l = (m) => {
      t.modelValue !== void 0 && e("update:modelValue", m), t.value !== void 0 && e("update:value", m), t.modelValue === void 0 && t.value === void 0 && e("update:modelValue", m), e("change", m);
    };
    return $e("radioGroup", {
      modelValue: b(() => t.modelValue ?? t.value),
      name: t.name || `radio-group-${Date.now()}`,
      disabled: t.disabled,
      changeValue: l
    }), (m, h) => (r(), d("div", {
      class: u(s(a).b()),
      role: "radiogroup"
    }, [
      ae(m.$slots, "default")
    ], 2));
  }
}), Ze = ["checked", "disabled", "value"], Il = /* @__PURE__ */ J({
  name: "XRadioButton",
  __name: "button",
  props: {
    value: { type: [String, Number, Boolean] },
    label: {},
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: y }) {
    const t = n, e = _("radio-button"), a = De("radioGroup", null), l = b(() => !!a), m = b(() => l.value ? a.modelValue.value : null), h = b(() => t.value ?? t.label), w = b(() => m.value === h.value), V = b(() => t.disabled || l.value && a.disabled), F = b(() => [
      e.b(),
      e.is("active", w.value),
      e.is("disabled", V.value)
    ]), $ = () => {
      V.value || l.value && a.changeValue(h.value);
    };
    return (k, D) => (r(), d("label", {
      class: u(F.value),
      onClick: oe($, ["prevent"])
    }, [
      i("input", {
        type: "radio",
        checked: w.value,
        disabled: V.value,
        value: h.value,
        class: u(s(e).e("input"))
      }, null, 10, Ze),
      i("span", {
        class: u(s(e).e("inner"))
      }, [
        ae(k.$slots, "default", {}, () => [
          me(z(n.label), 1)
        ])
      ], 2)
    ], 2));
  }
}), Qe = ["checked", "disabled", "name", "value"], Ll = /* @__PURE__ */ J({
  name: "XCheckbox",
  __name: "index",
  props: {
    modelValue: { type: [Boolean, String, Number, Array] },
    value: { type: [String, Number, Boolean] },
    label: {},
    disabled: { type: Boolean },
    name: {},
    indeterminate: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: y }) {
    const t = n, e = y, a = _("checkbox"), l = De("checkboxGroup", null), m = b(() => !!l), h = b(() => t.value ?? t.label), w = b(() => m.value ? l.modelValue.value.includes(h.value) : Array.isArray(t.modelValue) ? t.modelValue.includes(h.value) : !!t.modelValue), V = b(() => {
      if (t.disabled) return !0;
      if (m.value) {
        const k = l.disabled, D = l.min > 0 && l.modelValue.value.length <= l.min, A = l.max > 0 && l.modelValue.value.length >= l.max;
        return w.value && D || !w.value && A ? !0 : k;
      }
      return !1;
    }), F = b(() => [
      a.b(),
      a.is("checked", w.value),
      a.is("disabled", V.value),
      a.is("indeterminate", t.indeterminate && !w.value)
    ]), $ = () => {
      if (!V.value)
        if (m.value)
          l.changeValue(h.value);
        else {
          let k;
          if (Array.isArray(t.modelValue)) {
            const D = t.modelValue.indexOf(h.value);
            D > -1 ? k = [...t.modelValue.slice(0, D), ...t.modelValue.slice(D + 1)] : k = [...t.modelValue, h.value];
          } else
            k = !t.modelValue;
          e("update:modelValue", k), e("change", k);
        }
    };
    return (k, D) => (r(), d("label", {
      class: u(F.value),
      onClick: oe($, ["prevent"])
    }, [
      i("span", {
        class: u(s(a).e("input"))
      }, [
        i("input", {
          type: "checkbox",
          checked: w.value,
          disabled: V.value,
          name: n.name,
          value: h.value
        }, null, 8, Qe)
      ], 2),
      k.$slots.default || n.label !== void 0 ? (r(), d("span", {
        key: 0,
        class: u(s(a).e("label"))
      }, [
        ae(k.$slots, "default", {}, () => [
          me(z(n.label), 1)
        ])
      ], 2)) : U("", !0)
    ], 2));
  }
}), Pl = /* @__PURE__ */ J({
  name: "XCheckboxGroup",
  __name: "group",
  props: {
    modelValue: { default: () => [] },
    disabled: { type: Boolean, default: !1 },
    min: { default: 0 },
    max: { default: 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: y }) {
    const t = n, e = y, a = _("checkbox-group"), l = (m) => {
      const h = [...t.modelValue], w = h.indexOf(m);
      w > -1 ? h.splice(w, 1) : h.push(m), e("update:modelValue", h), e("change", h);
    };
    return $e("checkboxGroup", {
      modelValue: b(() => t.modelValue),
      disabled: t.disabled,
      min: t.min,
      max: t.max,
      changeValue: l
    }), (m, h) => (r(), d("div", {
      class: u(s(a).b()),
      role: "group"
    }, [
      ae(m.$slots, "default")
    ], 2));
  }
}), Al = /* @__PURE__ */ J({
  name: "XForm",
  __name: "index",
  props: {
    model: { default: () => ({}) },
    rules: { default: () => ({}) },
    labelWidth: { default: "100px" },
    labelPosition: { default: "right" },
    layout: { default: "horizontal" },
    inline: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    size: { default: "default" }
  },
  emits: ["validate", "submit", "reset"],
  setup(n, { expose: y, emit: t }) {
    const e = n, a = t, l = _("form"), m = E([]), h = b(() => e.layout === "inline" || e.inline), w = b(() => e.layout === "vertical" || e.labelPosition === "top"), V = b(() => [
      l.b(),
      l.m(`label-${w.value ? "top" : e.labelPosition}`),
      l.is("inline", h.value),
      l.is("vertical", w.value)
    ]), F = b(() => ({ width: typeof e.labelWidth == "number" ? `${e.labelWidth}px` : e.labelWidth })), $ = (p) => {
      m.value.push(p);
    }, k = (p) => {
      const v = m.value.indexOf(p);
      v > -1 && m.value.splice(v, 1);
    }, D = async () => {
      let p = !0;
      for (const v of m.value)
        await v.validate() || (p = !1);
      return p;
    }, A = async (p) => {
      const v = Array.isArray(p) ? p : [p];
      let S = !0;
      for (const O of m.value)
        v.includes(O.prop) && (await O.validate() || (S = !1));
      return S;
    }, f = () => {
      m.value.forEach((p) => {
        p.resetField();
      });
    }, C = (p) => {
      if (p) {
        const v = Array.isArray(p) ? p : [p];
        m.value.forEach((S) => {
          v.includes(S.prop) && S.clearValidate();
        });
      } else
        m.value.forEach((v) => {
          v.clearValidate();
        });
    }, R = (p) => {
      console.log("[XForm] handleSubmit triggered", p), p.preventDefault(), a("submit");
    }, L = (p) => {
      console.log("[XForm] handleReset triggered", p), p.preventDefault(), f(), a("reset");
    }, M = Ue(e, "model");
    return $e("form", {
      model: M,
      rules: e.rules,
      labelWidth: e.labelWidth,
      labelPosition: w.value ? "top" : e.labelPosition,
      disabled: e.disabled,
      size: e.size,
      labelStyle: F,
      addField: $,
      removeField: k,
      emit: a
    }), y({
      validate: D,
      validateField: A,
      resetFields: f,
      clearValidate: C
    }), (p, v) => (r(), d("form", {
      class: u(V.value),
      onSubmit: R,
      onReset: L
    }, [
      ae(p.$slots, "default")
    ], 34));
  }
}), Yl = /* @__PURE__ */ J({
  name: "XFormItem",
  __name: "item",
  props: {
    prop: {},
    label: {},
    labelWidth: {},
    required: { type: Boolean },
    rules: {},
    showMessage: { type: Boolean }
  },
  setup(n, { expose: y }) {
    const t = n, e = _("form-item"), a = De("form", null), l = E(""), m = E(""), h = b(() => t.required ? !0 : w().some((R) => R.required)), w = () => {
      const C = [];
      return t.rules && C.push(...t.rules), a && t.prop && a.rules[t.prop] && C.push(...a.rules[t.prop]), C;
    }, V = () => {
      var C;
      if (!(!a || !t.prop))
        return (C = a.model.value) == null ? void 0 : C[t.prop];
    }, F = (C) => {
      !a || !t.prop || a.model.value && (a.model.value[t.prop] = C);
    }, $ = async (C) => {
      const R = w();
      if (R.length === 0)
        return l.value = "valid", !0;
      const L = V();
      let M = !0, p = "";
      for (const v of R)
        if (!(C && v.trigger && v.trigger !== C)) {
          if (v.required && (L == null || L === "" || Array.isArray(L) && L.length === 0)) {
            M = !1, p = v.message || "该字段为必填项";
            break;
          }
          if (v.min !== void 0 || v.max !== void 0) {
            const S = typeof L == "string" ? L.length : 0;
            if (v.min !== void 0 && S < v.min) {
              M = !1, p = v.message || `长度不能小于 ${v.min} 个字符`;
              break;
            }
            if (v.max !== void 0 && S > v.max) {
              M = !1, p = v.message || `长度不能大于 ${v.max} 个字符`;
              break;
            }
          }
          if (v.pattern && L && !v.pattern.test(L)) {
            M = !1, p = v.message || "格式不正确";
            break;
          }
          if (v.validator)
            try {
              await new Promise((S, O) => {
                v.validator(v, L, (N) => {
                  N ? O(N) : S();
                });
              });
            } catch (S) {
              M = !1, p = S.message || v.message || "验证失败";
              break;
            }
        }
      return l.value = M ? "valid" : "invalid", m.value = p, a && t.prop && a.emit("validate", t.prop, M, p), M;
    }, k = () => {
      F(void 0), D();
    }, D = () => {
      l.value = "", m.value = "";
    }, A = b(() => [
      e.b(),
      e.is("required", h.value),
      e.is("error", l.value === "invalid"),
      e.is("success", l.value === "valid")
    ]), f = b(() => {
      const C = t.labelWidth ?? (a == null ? void 0 : a.labelWidth) ?? "100px";
      return { width: typeof C == "number" ? `${C}px` : C };
    });
    return ie(() => V(), () => {
      l.value === "invalid" && $("change");
    }), xe(() => {
      a && t.prop && a.addField({
        prop: t.prop,
        validate: $,
        resetField: k,
        clearValidate: D
      });
    }), we(() => {
      a && t.prop && a.removeField({
        prop: t.prop,
        validate: $,
        resetField: k,
        clearValidate: D
      });
    }), y({
      validate: $,
      resetField: k,
      clearValidate: D
    }), (C, R) => (r(), d("div", {
      class: u(A.value)
    }, [
      n.label ? (r(), d("label", {
        key: 0,
        class: u(s(e).e("label")),
        style: ne(f.value)
      }, z(n.label), 7)) : U("", !0),
      i("div", {
        class: u(s(e).e("content"))
      }, [
        ae(C.$slots, "default"),
        n.showMessage !== !1 && l.value === "invalid" ? (r(), d("div", {
          key: 0,
          class: u(s(e).e("error"))
        }, z(m.value), 3)) : U("", !0)
      ], 2)
    ], 2));
  }
});
function Je(n, y) {
  return new Date(n, y + 1, 0).getDate();
}
function _e(n, y) {
  return new Date(n, y, 1).getDay();
}
function fe(n, y) {
  return !n || !y ? !1 : n.getFullYear() === y.getFullYear() && n.getMonth() === y.getMonth() && n.getDate() === y.getDate();
}
function et(n, y) {
  return !n || !y ? !1 : n.getFullYear() === y.getFullYear() && n.getMonth() === y.getMonth();
}
function Ee(n, y, t) {
  if (!y || !t) return !1;
  const e = n.getTime();
  return e >= y.getTime() && e <= t.getTime();
}
function tt(n, y, t = 0) {
  const e = [], a = Je(n, y), l = _e(n, y);
  let m = new Date(n, y, 1);
  const h = (l - t + 7) % 7;
  m.setDate(1 - h);
  let w = [], V = new Date(m);
  for (; (V.getMonth() <= y || V.getMonth() === y && V.getDate() <= a) && (w.push(new Date(V)), !(w.length === 7 && (e.push(w), w = [], V.getMonth() > y) || (V.setDate(V.getDate() + 1), e.length > 7))); )
    ;
  return w.length > 0 && e.push(w), e;
}
function de(n, y = "YYYY-MM-DD") {
  if (!n) return "";
  const t = n.getFullYear(), e = n.getMonth() + 1, a = n.getDate(), l = n.getHours(), m = n.getMinutes(), h = n.getSeconds();
  return y.replace(/YYYY/g, String(t)).replace(/YY/g, String(t).slice(-2)).replace(/MM/g, String(e).padStart(2, "0")).replace(/M/g, String(e)).replace(/DD/g, String(a).padStart(2, "0")).replace(/D/g, String(a)).replace(/HH/g, String(l).padStart(2, "0")).replace(/H/g, String(l)).replace(/mm/g, String(m).padStart(2, "0")).replace(/m/g, String(m)).replace(/ss/g, String(h).padStart(2, "0")).replace(/s/g, String(h));
}
function ce(n) {
  if (!n || Array.isArray(n)) return null;
  if (n instanceof Date)
    return isNaN(n.getTime()) ? null : n;
  if (typeof n == "number")
    return new Date(n);
  if (typeof n != "string") return null;
  const y = new Date(n);
  if (isNaN(y.getTime())) {
    const t = n.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
    return t ? new Date(parseInt(t[1]), parseInt(t[2]) - 1, parseInt(t[3])) : null;
  }
  return y;
}
function lt(n) {
  const y = new Date(n);
  return y.setMonth(y.getMonth() - 1), y;
}
function at(n) {
  const y = new Date(n);
  return y.setMonth(y.getMonth() + 1), y;
}
function nt(n) {
  const y = new Date(n);
  return y.setFullYear(y.getFullYear() - 1), y;
}
function st(n) {
  const y = new Date(n);
  return y.setFullYear(y.getFullYear() + 1), y;
}
function ze(n) {
  const y = Math.floor(n / 10) * 10;
  return [y, y + 9];
}
function Re(n) {
  const y = new Date(n);
  return y.setHours(0, 0, 0, 0), y;
}
function ut(n, y, t, e) {
  if (y && y(n))
    return !0;
  const a = Re(n).getTime();
  return !!(t && a < Re(t).getTime() || e && a > Re(e).getTime());
}
const ot = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月"
], it = ["日", "一", "二", "三", "四", "五", "六"], rt = ["onClick", "onMouseenter"], dt = /* @__PURE__ */ J({
  name: "XDateTable",
  __name: "DateTable",
  props: {
    modelValue: { default: null },
    viewedMonth: { default: () => /* @__PURE__ */ new Date() },
    minDate: { default: null },
    maxDate: { default: null },
    disabledDate: {},
    rangeState: { default: () => ({
      selecting: !1,
      startDate: null,
      endDate: null
    }) },
    selectionMode: { default: "single" }
  },
  emits: ["pick", "range-select", "range-move", "update:viewedMonth"],
  setup(n, { emit: y }) {
    const t = n, e = y, a = _("date-table"), l = E(null), m = b(() => t.viewedMonth.getFullYear()), h = b(() => t.viewedMonth.getMonth()), w = b(() => tt(m.value, h.value, 0)), V = (p) => t.modelValue ? fe(p, t.modelValue) : !1, F = (p) => fe(p, /* @__PURE__ */ new Date()), $ = (p) => et(p, t.viewedMonth), k = (p) => {
      if (t.selectionMode !== "range") return !1;
      const { startDate: v, endDate: S, selecting: O } = t.rangeState || {};
      if (O && v) {
        const N = l.value;
        if (N) {
          const q = v < N ? v : N, ee = v < N ? N : v;
          return Ee(p, q, ee);
        }
        return fe(p, v);
      }
      return v && S ? Ee(p, v, S) : !1;
    }, D = (p) => {
      if (t.selectionMode !== "range") return !1;
      const { startDate: v, selecting: S } = t.rangeState || {};
      return S && v && l.value ? fe(p, v < l.value ? v : l.value) : v ? fe(p, v) : !1;
    }, A = (p) => {
      if (t.selectionMode !== "range") return !1;
      const { endDate: v, selecting: S } = t.rangeState || {};
      if (S && l.value) {
        const { startDate: O } = t.rangeState || {};
        return fe(p, O < l.value ? l.value : O);
      }
      return v ? fe(p, v) : !1;
    }, f = (p) => ut(p, t.disabledDate, t.minDate, t.maxDate), C = (p) => [
      a.e("cell"),
      a.is("selected", V(p)),
      a.is("today", F(p)),
      a.is("disabled", f(p)),
      a.is("in-range", k(p)),
      a.is("range-start", D(p)),
      a.is("range-end", A(p)),
      a.is("prev-month", !$(p) && p.getMonth() < h.value),
      a.is("next-month", !$(p) && p.getMonth() > h.value)
    ], R = (p) => {
      f(p) || (t.selectionMode === "range" ? e("range-select", p) : e("pick", p));
    }, L = (p) => {
      l.value = p;
    }, M = () => {
      l.value = null;
    };
    return (p, v) => (r(), d("table", {
      class: u(s(a).b()),
      cellspacing: "0",
      cellpadding: "0"
    }, [
      i("thead", null, [
        i("tr", null, [
          (r(!0), d(j, null, Q(s(it), (S) => (r(), d("th", {
            key: S,
            class: u(s(a).e("header-cell"))
          }, z(S), 3))), 128))
        ])
      ]),
      i("tbody", null, [
        (r(!0), d(j, null, Q(w.value, (S, O) => (r(), d("tr", { key: O }, [
          (r(!0), d(j, null, Q(S, (N, q) => (r(), d("td", {
            key: q,
            class: u(C(N)),
            onClick: (ee) => R(N),
            onMouseenter: (ee) => L(N),
            onMouseleave: M
          }, [
            i("span", {
              class: u(s(a).e("cell-text"))
            }, z(N.getDate()), 3)
          ], 42, rt))), 128))
        ]))), 128))
      ])
    ], 2));
  }
}), ct = ["onClick"], vt = /* @__PURE__ */ J({
  name: "XMonthTable",
  __name: "MonthTable",
  props: {
    modelValue: { default: null },
    viewedYear: { default: () => (/* @__PURE__ */ new Date()).getFullYear() },
    disabledDate: {}
  },
  emits: ["pick"],
  setup(n, { emit: y }) {
    const t = n, e = y, a = _("month-table");
    b(() => t.modelValue ? t.modelValue.getMonth() : -1);
    const l = ($) => t.modelValue ? t.modelValue.getFullYear() === t.viewedYear && t.modelValue.getMonth() === $ : !1, m = ($) => {
      const k = /* @__PURE__ */ new Date();
      return k.getFullYear() === t.viewedYear && k.getMonth() === $;
    }, h = ($) => {
      if (!t.disabledDate) return !1;
      const k = new Date(t.viewedYear, $, 1), D = new Date(t.viewedYear, $ + 1, 0);
      return t.disabledDate(k) && t.disabledDate(D);
    }, w = ($) => [
      a.e("cell"),
      a.is("selected", l($)),
      a.is("current", m($)),
      a.is("disabled", h($))
    ], V = ($) => {
      h($) || e("pick", $);
    }, F = b(() => {
      const $ = [];
      for (let k = 0; k < 12; k += 3)
        $.push([k, k + 1, k + 2]);
      return $;
    });
    return ($, k) => (r(), d("table", {
      class: u(s(a).b()),
      cellspacing: "0",
      cellpadding: "0"
    }, [
      i("tbody", null, [
        (r(!0), d(j, null, Q(F.value, (D, A) => (r(), d("tr", { key: A }, [
          (r(!0), d(j, null, Q(D, (f) => (r(), d("td", {
            key: f,
            class: u(w(f)),
            onClick: (C) => V(f)
          }, [
            i("span", {
              class: u(s(a).e("cell-text"))
            }, z(s(ot)[f]), 3)
          ], 10, ct))), 128))
        ]))), 128))
      ])
    ], 2));
  }
}), ft = ["onClick"], mt = /* @__PURE__ */ J({
  name: "XYearTable",
  __name: "YearTable",
  props: {
    modelValue: { default: null },
    viewedYear: { default: () => (/* @__PURE__ */ new Date()).getFullYear() },
    disabledDate: {}
  },
  emits: ["pick"],
  setup(n, { emit: y }) {
    const t = n, e = y, a = _("year-table"), l = b(() => (/* @__PURE__ */ new Date()).getFullYear()), m = b(() => ze(t.viewedYear)), h = b(() => {
      const [f] = m.value, C = [];
      C.push(f - 1);
      for (let R = 0; R < 10; R++)
        C.push(f + R);
      return C.push(f + 10), C;
    }), w = b(() => {
      const f = [];
      for (let C = 0; C < h.value.length; C += 3)
        f.push(h.value.slice(C, C + 3));
      return f;
    }), V = (f) => t.modelValue ? t.modelValue.getFullYear() === f : !1, F = (f) => f === l.value, $ = (f) => {
      const [C, R] = m.value;
      return f >= C && f <= R;
    }, k = (f) => {
      if (!t.disabledDate) return !1;
      const C = new Date(f, 0, 1), R = new Date(f, 11, 31);
      return t.disabledDate(C) && t.disabledDate(R);
    }, D = (f) => [
      a.e("cell"),
      a.is("selected", V(f)),
      a.is("current", F(f)),
      a.is("disabled", k(f)),
      a.is("in-decade", $(f))
    ], A = (f) => {
      k(f) || e("pick", f);
    };
    return (f, C) => (r(), d("table", {
      class: u(s(a).b()),
      cellspacing: "0",
      cellpadding: "0"
    }, [
      i("tbody", null, [
        (r(!0), d(j, null, Q(w.value, (R, L) => (r(), d("tr", { key: L }, [
          (r(!0), d(j, null, Q(R, (M) => (r(), d("td", {
            key: M,
            class: u(D(M)),
            onClick: (p) => A(M)
          }, [
            i("span", {
              class: u(s(a).e("cell-text"))
            }, z(M), 3)
          ], 10, ft))), 128))
        ]))), 128))
      ])
    ], 2));
  }
}), pt = ["placeholder", "disabled", "value"], ht = ["placeholder", "disabled", "value"], gt = ["placeholder", "disabled", "value"], bt = ["value"], yt = ["value"], kt = ["value"], El = /* @__PURE__ */ J({
  name: "XDatePicker",
  __name: "index",
  props: {
    modelValue: { default: void 0 },
    value: { default: void 0 },
    type: { default: "date" },
    placeholder: { default: "请选择日期" },
    startPlaceholder: { default: "开始日期" },
    endPlaceholder: { default: "结束日期" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    size: { default: "default" },
    format: { default: "YYYY-MM-DD" },
    valueFormat: { default: "" },
    disabledDate: {},
    minDate: {},
    maxDate: {},
    showTime: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:value", "change", "focus", "blur", "clear"],
  setup(n, { expose: y, emit: t }) {
    const e = n, a = t, l = _("date-picker"), m = E(!1), h = E(2e3), w = E(), V = () => e.modelValue !== void 0 && e.modelValue !== null ? e.modelValue : e.value !== void 0 && e.value !== null ? e.value : null, F = (I) => {
      e.modelValue !== void 0 && a("update:modelValue", I), e.value !== void 0 && a("update:value", I), e.modelValue === void 0 && e.value === void 0 && a("update:modelValue", I), a("change", I);
    }, $ = E(), k = E(), D = E({
      top: "0px",
      left: "0px"
    }), A = () => Ye().next(), f = E("date"), C = E(/* @__PURE__ */ new Date()), R = E({
      hours: (/* @__PURE__ */ new Date()).getHours(),
      minutes: (/* @__PURE__ */ new Date()).getMinutes(),
      seconds: (/* @__PURE__ */ new Date()).getSeconds()
    }), L = E({
      selecting: !1,
      startDate: null,
      endDate: null
    }), M = b(() => {
      const I = V();
      if (!I) return null;
      if (e.type === "daterange") {
        if (!Array.isArray(I)) return null;
        const [P, K] = I;
        return [
          P instanceof Date ? P : ce(P),
          K instanceof Date ? K : ce(K)
        ];
      }
      return I instanceof Date ? I : ce(I);
    }), p = b(() => {
      if (e.type === "daterange") return "";
      const I = V();
      if (!I) return "";
      const P = I instanceof Date ? I : ce(I);
      if (!P) return "";
      const K = e.showTime ? "YYYY-MM-DD HH:mm:ss" : e.format;
      return de(P, K);
    }), v = b(() => {
      const I = V();
      if (!I || !Array.isArray(I)) return "";
      const [P] = I;
      if (!P) return "";
      const K = P instanceof Date ? P : ce(P);
      return K ? de(K, e.format) : "";
    }), S = b(() => {
      const I = V();
      if (!I || !Array.isArray(I)) return "";
      const [, P] = I;
      if (!P) return "";
      const K = P instanceof Date ? P : ce(P);
      return K ? de(K, e.format) : "";
    }), O = b(() => {
      const I = V();
      return !I || Array.isArray(I) ? null : I instanceof Date ? I : ce(I);
    }), N = b(() => C.value.getFullYear()), q = b(() => C.value.getMonth()), ee = b(() => ze(N.value)), T = b(() => f.value === "year" ? `${ee.value[0]} 年 - ${ee.value[1]} 年` : f.value === "month" ? `${N.value} 年` : `${N.value} 年 ${q.value + 1} 月`), B = b(() => [
      l.b(),
      l.m(e.size),
      l.is("disabled", e.disabled),
      l.is("range", e.type === "daterange")
    ]), x = b(() => [
      l.e("input"),
      l.is("focus", m.value),
      l.is("has-value", !!p.value || !!(v.value || S.value))
    ]), o = () => {
      e.disabled || e.readonly || (m.value ? g() : c());
    }, c = () => {
      m.value = !0, h.value = A(), Se(() => {
        if (w.value && $.value) {
          const I = w.value.getBoundingClientRect(), P = $.value.getBoundingClientRect();
          let K = I.bottom + 8, Te = I.left;
          Te + P.width > window.innerWidth && (Te = window.innerWidth - P.width - 8), K + P.height > window.innerHeight && (K = I.top - P.height - 8), D.value = {
            top: `${K}px`,
            left: `${Te}px`
          };
        }
      }), a("focus", {});
    }, g = () => {
      m.value = !1, f.value = "date", a("blur", {});
    }, W = (I) => {
      if (e.type === "date") {
        e.showTime && (I.setHours(R.value.hours), I.setMinutes(R.value.minutes), I.setSeconds(R.value.seconds));
        const P = e.showTime ? "YYYY-MM-DD HH:mm:ss" : e.valueFormat, K = P ? de(I, P) : I;
        F(K), e.showTime || g();
      }
    }, le = () => {
      const I = V();
      if (I) {
        const P = I instanceof Date ? I : ce(I);
        if (P) {
          P.setHours(R.value.hours), P.setMinutes(R.value.minutes), P.setSeconds(R.value.seconds);
          const K = e.valueFormat ? de(P, e.valueFormat) : P;
          F(K);
        }
      } else {
        const P = /* @__PURE__ */ new Date();
        P.setHours(R.value.hours), P.setMinutes(R.value.minutes), P.setSeconds(R.value.seconds);
        const K = e.valueFormat ? de(P, e.valueFormat) : P;
        F(K);
      }
      g();
    }, H = (I) => {
      if (!L.value.selecting)
        L.value.selecting = !0, L.value.startDate = I, L.value.endDate = null;
      else {
        L.value.selecting = !1, L.value.startDate && I < L.value.startDate ? [L.value.startDate, L.value.endDate] = [I, L.value.startDate] : L.value.endDate = I;
        const P = e.valueFormat ? de(L.value.startDate, e.valueFormat) : L.value.startDate, K = e.valueFormat ? de(L.value.endDate, e.valueFormat) : L.value.endDate;
        F([P, K]), g();
      }
    }, te = (I) => {
      if (C.value = new Date(N.value, I, 1), e.type === "month") {
        const P = new Date(N.value, I, 1), K = e.valueFormat ? de(P, e.valueFormat) : P;
        F(K), g();
      } else
        f.value = "date";
    }, X = (I) => {
      if (C.value = new Date(I, q.value, 1), e.type === "year") {
        const P = new Date(I, 0, 1), K = e.valueFormat ? de(P, e.valueFormat) : P;
        F(K), g();
      } else
        f.value = "month";
    }, ve = () => {
      C.value = lt(C.value);
    }, ye = () => {
      C.value = at(C.value);
    }, Y = () => {
      f.value === "year" ? C.value = new Date(N.value - 10, q.value, 1) : C.value = nt(C.value);
    }, G = () => {
      f.value === "year" ? C.value = new Date(N.value + 10, q.value, 1) : C.value = st(C.value);
    }, Z = () => {
      f.value = "month";
    }, se = () => {
      f.value = "year";
    }, re = () => {
      F(null), a("clear"), L.value = {
        selecting: !1,
        startDate: null,
        endDate: null
      };
    }, Ve = (I) => {
      if (!w.value) return;
      const P = I.target;
      w.value.contains(P) || $.value && $.value.contains(P) || g();
    };
    ie(
      V,
      (I) => {
        if (I)
          if (Array.isArray(M.value)) {
            const [P] = M.value;
            P && (C.value = new Date(P));
          } else M.value && (C.value = new Date(M.value));
      },
      { immediate: !0 }
    ), ie(m, (I) => {
      I && (f.value = "date", e.type === "daterange" && (L.value = {
        selecting: !1,
        startDate: Array.isArray(M.value) ? M.value[0] : null,
        endDate: Array.isArray(M.value) ? M.value[1] : null
      }));
    });
    const Me = (I) => {
      I.key === "Escape" && g();
    };
    return xe(() => {
      document.addEventListener("click", Ve), document.addEventListener("keydown", Me);
    }), we(() => {
      document.removeEventListener("click", Ve), document.removeEventListener("keydown", Me);
    }), y({
      focus: () => {
        var I;
        return (I = k.value) == null ? void 0 : I.focus();
      },
      blur: () => {
        var I;
        return (I = k.value) == null ? void 0 : I.blur();
      }
    }), (I, P) => (r(), d("div", {
      ref_key: "pickerRef",
      ref: w,
      class: u(B.value)
    }, [
      n.type !== "daterange" ? (r(), d("div", {
        key: 0,
        class: u(x.value),
        onClick: o
      }, [
        i("input", {
          ref_key: "inputRef",
          ref: k,
          type: "text",
          placeholder: n.placeholder,
          disabled: n.disabled,
          readonly: !0,
          value: p.value,
          class: u(s(l).e("input-inner"))
        }, null, 10, pt),
        i("span", {
          class: u(s(l).e("suffix"))
        }, [
          n.clearable && p.value && !n.disabled ? (r(), d("span", {
            key: 0,
            class: u(s(l).e("clear")),
            onClick: oe(re, ["stop"])
          }, " ✕ ", 2)) : (r(), d("span", {
            key: 1,
            class: u(s(l).e("icon"))
          }, "📅", 2))
        ], 2)
      ], 2)) : (r(), d("div", {
        key: 1,
        class: u(x.value),
        onClick: o
      }, [
        i("input", {
          type: "text",
          placeholder: n.startPlaceholder,
          disabled: n.disabled,
          readonly: !0,
          value: v.value,
          class: u(s(l).e("input-inner"))
        }, null, 10, ht),
        i("span", {
          class: u(s(l).e("separator"))
        }, "至", 2),
        i("input", {
          type: "text",
          placeholder: n.endPlaceholder,
          disabled: n.disabled,
          readonly: !0,
          value: S.value,
          class: u(s(l).e("input-inner"))
        }, null, 10, gt),
        i("span", {
          class: u(s(l).e("suffix"))
        }, [
          n.clearable && (v.value || S.value) && !n.disabled ? (r(), d("span", {
            key: 0,
            class: u(s(l).e("clear")),
            onClick: oe(re, ["stop"])
          }, " ✕ ", 2)) : (r(), d("span", {
            key: 1,
            class: u(s(l).e("icon"))
          }, "📅", 2))
        ], 2)
      ], 2)),
      (r(), ge(Ie, { to: "body" }, [
        Ce(Le, { name: "fade" }, {
          default: Pe(() => [
            ue(i("div", {
              ref_key: "popperRef",
              ref: $,
              class: u(s(l).e("popper")),
              style: ne({ zIndex: h.value, ...D.value })
            }, [
              i("div", {
                class: u(s(l).e("header"))
              }, [
                i("button", {
                  type: "button",
                  class: u(s(l).e("prev-btn")),
                  onClick: P[0] || (P[0] = (K) => f.value === "date" ? ve() : Y())
                }, " ‹ ", 2),
                i("div", {
                  class: u(s(l).e("header-title"))
                }, [
                  f.value === "year" ? (r(), d("span", {
                    key: 0,
                    onClick: P[1] || (P[1] = (K) => f.value = "month")
                  }, z(T.value), 1)) : (r(), d(j, { key: 1 }, [
                    i("span", { onClick: se }, z(N.value) + " 年", 1),
                    f.value === "date" ? (r(), d("span", {
                      key: 0,
                      onClick: Z
                    }, z(q.value + 1) + " 月", 1)) : U("", !0)
                  ], 64))
                ], 2),
                i("button", {
                  type: "button",
                  class: u(s(l).e("next-btn")),
                  onClick: P[2] || (P[2] = (K) => f.value === "date" ? ye() : G())
                }, " › ", 2)
              ], 2),
              i("div", {
                class: u(s(l).e("content"))
              }, [
                f.value === "date" ? (r(), ge(dt, {
                  key: 0,
                  "model-value": O.value,
                  "viewed-month": C.value,
                  "disabled-date": n.disabledDate,
                  "min-date": n.minDate ? s(ce)(n.minDate) : null,
                  "max-date": n.maxDate ? s(ce)(n.maxDate) : null,
                  "selection-mode": n.type === "daterange" ? "range" : "single",
                  "range-state": L.value,
                  onPick: W,
                  onRangeSelect: H
                }, null, 8, ["model-value", "viewed-month", "disabled-date", "min-date", "max-date", "selection-mode", "range-state"])) : f.value === "month" ? (r(), ge(vt, {
                  key: 1,
                  "model-value": O.value,
                  "viewed-year": N.value,
                  "disabled-date": n.disabledDate,
                  onPick: te
                }, null, 8, ["model-value", "viewed-year", "disabled-date"])) : f.value === "year" ? (r(), ge(mt, {
                  key: 2,
                  "model-value": O.value,
                  "viewed-year": N.value,
                  "disabled-date": n.disabledDate,
                  onPick: X
                }, null, 8, ["model-value", "viewed-year", "disabled-date"])) : U("", !0)
              ], 2),
              n.showTime && n.type !== "daterange" ? (r(), d("div", {
                key: 0,
                class: u(s(l).e("time"))
              }, [
                i("div", {
                  class: u(s(l).e("time-item"))
                }, [
                  ue(i("select", {
                    "onUpdate:modelValue": P[3] || (P[3] = (K) => R.value.hours = K),
                    class: u(s(l).e("time-select"))
                  }, [
                    (r(), d(j, null, Q(24, (K) => i("option", {
                      key: K,
                      value: K - 1
                    }, z(String(K - 1).padStart(2, "0")), 9, bt)), 64))
                  ], 2), [
                    [
                      ke,
                      R.value.hours,
                      void 0,
                      { number: !0 }
                    ]
                  ]),
                  P[6] || (P[6] = i("span", null, "时", -1))
                ], 2),
                i("div", {
                  class: u(s(l).e("time-item"))
                }, [
                  ue(i("select", {
                    "onUpdate:modelValue": P[4] || (P[4] = (K) => R.value.minutes = K),
                    class: u(s(l).e("time-select"))
                  }, [
                    (r(), d(j, null, Q(60, (K) => i("option", {
                      key: K,
                      value: K - 1
                    }, z(String(K - 1).padStart(2, "0")), 9, yt)), 64))
                  ], 2), [
                    [
                      ke,
                      R.value.minutes,
                      void 0,
                      { number: !0 }
                    ]
                  ]),
                  P[7] || (P[7] = i("span", null, "分", -1))
                ], 2),
                i("div", {
                  class: u(s(l).e("time-item"))
                }, [
                  ue(i("select", {
                    "onUpdate:modelValue": P[5] || (P[5] = (K) => R.value.seconds = K),
                    class: u(s(l).e("time-select"))
                  }, [
                    (r(), d(j, null, Q(60, (K) => i("option", {
                      key: K,
                      value: K - 1
                    }, z(String(K - 1).padStart(2, "0")), 9, kt)), 64))
                  ], 2), [
                    [
                      ke,
                      R.value.seconds,
                      void 0,
                      { number: !0 }
                    ]
                  ]),
                  P[8] || (P[8] = i("span", null, "秒", -1))
                ], 2)
              ], 2)) : U("", !0),
              n.showTime && n.type !== "daterange" ? (r(), d("div", {
                key: 1,
                class: u(s(l).e("footer"))
              }, [
                i("button", {
                  type: "button",
                  class: u(s(l).e("confirm-btn")),
                  onClick: le
                }, "确定", 2)
              ], 2)) : U("", !0)
            ], 6), [
              [Ae, m.value]
            ])
          ]),
          _: 1
        })
      ]))
    ], 2));
  }
});
function pe(n, y = "HH:mm:ss") {
  if (!n) return "";
  const t = n.getHours(), e = n.getMinutes(), a = n.getSeconds();
  return y.replace(/HH/g, String(t).padStart(2, "0")).replace(/H/g, String(t)).replace(/mm/g, String(e).padStart(2, "0")).replace(/m/g, String(e)).replace(/ss/g, String(a).padStart(2, "0")).replace(/s/g, String(a));
}
function Be(n) {
  if (!n) return null;
  if (n instanceof Date)
    return isNaN(n.getTime()) ? null : n;
  if (typeof n == "number") {
    const e = /* @__PURE__ */ new Date();
    return e.setTime(n), e;
  }
  const y = n.match(/^(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?/);
  if (y) {
    const e = /* @__PURE__ */ new Date();
    return e.setHours(parseInt(y[1]), parseInt(y[2]), y[3] ? parseInt(y[3]) : 0, 0), e;
  }
  const t = new Date(n);
  return isNaN(t.getTime()) ? null : t;
}
function he(n) {
  return String(n).padStart(2, "0");
}
const xt = ["onClick"], wt = ["onClick"], Vt = ["onClick"], Ct = /* @__PURE__ */ J({
  name: "XTimePanel",
  __name: "TimePanel",
  props: {
    modelValue: { default: null },
    format: { default: "HH:mm:ss" },
    disabledHours: {},
    disabledMinutes: {},
    disabledSeconds: {},
    hourStep: { default: 1 },
    minuteStep: { default: 1 },
    secondStep: { default: 1 }
  },
  emits: ["confirm", "cancel"],
  setup(n, { emit: y }) {
    const t = n, e = y, a = _("time-panel"), l = E(0), m = E(0), h = E(0), w = E(), V = E(), F = E(), $ = b(() => t.format.includes("ss") || t.format.includes("s")), k = b(() => {
      const H = [], te = Math.max(1, t.hourStep);
      for (let X = 0; X < 24; X += te)
        H.push(X);
      return H;
    }), D = b(() => {
      const H = [], te = Math.max(1, t.minuteStep);
      for (let X = 0; X < 60; X += te)
        H.push(X);
      return H;
    }), A = b(() => {
      const H = [], te = Math.max(1, t.secondStep);
      for (let X = 0; X < 60; X += te)
        H.push(X);
      return H;
    }), f = b(() => t.disabledHours ? new Set(t.disabledHours()) : /* @__PURE__ */ new Set()), C = b(() => t.disabledMinutes ? new Set(t.disabledMinutes(l.value)) : /* @__PURE__ */ new Set()), R = b(() => t.disabledSeconds ? new Set(t.disabledSeconds(l.value, m.value)) : /* @__PURE__ */ new Set()), L = b(() => `${he(l.value)}:${he(m.value)}${$.value ? ":" + he(h.value) : ""}`), M = (H) => f.value.has(H), p = (H) => C.value.has(H), v = (H) => R.value.has(H), S = (H) => {
      M(H) || (l.value = H, B(w.value, q(H)));
    }, O = (H) => {
      p(H) || (m.value = H, B(V.value, ee(H)));
    }, N = (H) => {
      v(H) || (h.value = H, B(F.value, T(H)));
    }, q = (H) => k.value.indexOf(H), ee = (H) => D.value.indexOf(H), T = (H) => A.value.indexOf(H), B = (H, te) => {
      if (!H) return;
      const X = 32, ye = te * X + 84 - 200 / 2 + X / 2;
      H.scrollTop = Math.max(0, ye);
    }, x = () => {
      if (!w.value) return;
      const H = w.value.scrollTop, te = Math.round((H - 84 + 100) / 32), X = k.value[Math.max(0, Math.min(te, k.value.length - 1))];
      X !== void 0 && !M(X) && (l.value = X);
    }, o = () => {
      if (!V.value) return;
      const H = V.value.scrollTop, te = Math.round((H - 84 + 100) / 32), X = D.value[Math.max(0, Math.min(te, D.value.length - 1))];
      X !== void 0 && !p(X) && (m.value = X);
    }, c = () => {
      if (!F.value) return;
      const H = F.value.scrollTop, te = Math.round((H - 84 + 100) / 32), X = A.value[Math.max(0, Math.min(te, A.value.length - 1))];
      X !== void 0 && !v(X) && (h.value = X);
    }, g = () => {
      const H = t.modelValue ? new Date(t.modelValue) : /* @__PURE__ */ new Date();
      H.setHours(l.value, m.value, h.value, 0), e("confirm", H);
    }, W = () => {
      e("cancel");
    }, le = () => {
      if (t.modelValue)
        l.value = t.modelValue.getHours(), m.value = t.modelValue.getMinutes(), h.value = t.modelValue.getSeconds();
      else {
        const H = /* @__PURE__ */ new Date();
        l.value = H.getHours(), m.value = H.getMinutes(), h.value = H.getSeconds();
      }
      Se(() => {
        B(w.value, q(l.value)), B(V.value, ee(m.value)), $.value && B(F.value, T(h.value));
      });
    };
    return ie(
      () => t.modelValue,
      () => {
        le();
      },
      { immediate: !0 }
    ), xe(() => {
      le();
    }), (H, te) => (r(), d("div", {
      class: u(s(a).b())
    }, [
      i("div", {
        class: u(s(a).e("content"))
      }, [
        i("div", {
          class: u(s(a).e("indicator"))
        }, null, 2),
        i("div", {
          ref_key: "hourListRef",
          ref: w,
          class: u(s(a).e("list")),
          onScroll: x
        }, [
          i("div", {
            class: u(s(a).e("padding"))
          }, null, 2),
          (r(!0), d(j, null, Q(k.value, (X) => (r(), d("div", {
            key: X,
            class: u([s(a).e("item"), s(a).is("selected", l.value === X), s(a).is("disabled", M(X))]),
            onClick: (ve) => S(X)
          }, z(s(he)(X)), 11, xt))), 128)),
          i("div", {
            class: u(s(a).e("padding"))
          }, null, 2)
        ], 34),
        i("div", {
          ref_key: "minuteListRef",
          ref: V,
          class: u(s(a).e("list")),
          onScroll: o
        }, [
          i("div", {
            class: u(s(a).e("padding"))
          }, null, 2),
          (r(!0), d(j, null, Q(D.value, (X) => (r(), d("div", {
            key: X,
            class: u([s(a).e("item"), s(a).is("selected", m.value === X), s(a).is("disabled", p(X))]),
            onClick: (ve) => O(X)
          }, z(s(he)(X)), 11, wt))), 128)),
          i("div", {
            class: u(s(a).e("padding"))
          }, null, 2)
        ], 34),
        $.value ? (r(), d("div", {
          key: 0,
          ref_key: "secondListRef",
          ref: F,
          class: u(s(a).e("list")),
          onScroll: c
        }, [
          i("div", {
            class: u(s(a).e("padding"))
          }, null, 2),
          (r(!0), d(j, null, Q(A.value, (X) => (r(), d("div", {
            key: X,
            class: u([s(a).e("item"), s(a).is("selected", h.value === X), s(a).is("disabled", v(X))]),
            onClick: (ve) => N(X)
          }, z(s(he)(X)), 11, Vt))), 128)),
          i("div", {
            class: u(s(a).e("padding"))
          }, null, 2)
        ], 34)) : U("", !0)
      ], 2),
      i("div", {
        class: u(s(a).e("footer"))
      }, [
        i("span", {
          class: u(s(a).e("current-time"))
        }, z(L.value), 3),
        i("div", {
          class: u(s(a).e("actions"))
        }, [
          i("button", {
            class: u(s(a).e("btn-cancel")),
            onClick: W
          }, "取消", 2),
          i("button", {
            class: u(s(a).e("btn-confirm")),
            onClick: g
          }, "确定", 2)
        ], 2)
      ], 2)
    ], 2));
  }
}), Dt = ["placeholder", "disabled", "value"], $t = ["placeholder", "disabled", "value"], St = ["placeholder", "disabled", "value"], Hl = /* @__PURE__ */ J({
  name: "XTimePicker",
  __name: "index",
  props: {
    modelValue: { default: null },
    type: { default: "time" },
    placeholder: { default: "请选择时间" },
    startPlaceholder: { default: "开始时间" },
    endPlaceholder: { default: "结束时间" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    size: { default: "default" },
    format: { default: "HH:mm:ss" },
    valueFormat: { default: "" },
    disabledHours: {},
    disabledMinutes: {},
    disabledSeconds: {},
    hourStep: { default: 1 },
    minuteStep: { default: 1 },
    secondStep: { default: 1 }
  },
  emits: ["update:modelValue", "change", "focus", "blur", "clear"],
  setup(n, { expose: y, emit: t }) {
    const e = n, a = t, l = _("time-picker"), m = () => Ye().next(), h = E(!1), w = E(2e3), V = E(), F = E(), $ = E(), k = E({
      top: "0px",
      left: "0px"
    }), D = E({
      startTime: null,
      endTime: null
    }), A = E("start"), f = b(() => {
      if (!e.modelValue) return null;
      if (e.type === "timerange") {
        const [c, g] = e.modelValue;
        return [Be(c), Be(g)];
      }
      return Be(e.modelValue);
    }), C = b(() => !f.value || Array.isArray(f.value) ? "" : pe(f.value, e.format)), R = b(() => {
      if (!Array.isArray(f.value)) return "";
      const [c] = f.value;
      return c ? pe(c, e.format) : "";
    }), L = b(() => {
      if (!Array.isArray(f.value)) return "";
      const [, c] = f.value;
      return c ? pe(c, e.format) : "";
    }), M = b(() => e.type === "timerange" ? A.value === "start" ? D.value.startTime : D.value.endTime || D.value.startTime : f.value), p = b(() => [
      l.b(),
      l.m(e.size),
      l.is("disabled", e.disabled),
      l.is("range", e.type === "timerange")
    ]), v = b(() => [
      l.e("input"),
      l.is("focus", h.value)
    ]), S = () => {
      e.disabled || e.readonly || (h.value ? q() : N());
    }, O = (c) => {
      e.disabled || e.readonly || (A.value = c, h.value || N());
    }, N = () => {
      h.value = !0, w.value = m(), Se(() => {
        if (V.value && F.value) {
          const c = V.value.getBoundingClientRect(), g = F.value.getBoundingClientRect();
          let W = c.bottom + 8, le = c.left;
          le + g.width > window.innerWidth && (le = window.innerWidth - g.width - 8), W + g.height > window.innerHeight && (W = c.top - g.height - 8), k.value = {
            top: `${W}px`,
            left: `${le}px`
          };
        }
      }), a("focus", {});
    }, q = () => {
      h.value = !1, a("blur", {});
    }, ee = (c) => {
      if (e.type === "timerange")
        if (A.value === "start")
          D.value.startTime = c, A.value = "end", D.value.endTime && D.value.endTime < c && (D.value.endTime = null);
        else {
          D.value.startTime && c < D.value.startTime ? (D.value.endTime = D.value.startTime, D.value.startTime = c) : D.value.endTime = c;
          const g = e.valueFormat ? pe(D.value.startTime, e.valueFormat) : D.value.startTime, W = e.valueFormat ? pe(D.value.endTime, e.valueFormat) : D.value.endTime;
          a("update:modelValue", [g, W]), a("change", [g, W]), q();
        }
      else {
        const g = e.valueFormat ? pe(c, e.valueFormat) : c;
        a("update:modelValue", g), a("change", g), q();
      }
    }, T = () => {
      q();
    }, B = () => {
      a("update:modelValue", null), a("change", null), a("clear"), D.value = {
        startTime: null,
        endTime: null
      };
    }, x = (c) => {
      if (!V.value) return;
      const g = c.target;
      V.value.contains(g) || F.value && F.value.contains(g) || q();
    };
    ie(
      () => e.modelValue,
      (c) => {
        if (c && e.type === "timerange") {
          const [g, W] = f.value;
          D.value = {
            startTime: g,
            endTime: W
          };
        }
      },
      { immediate: !0 }
    ), ie(h, (c) => {
      c && e.type === "timerange" && (D.value = {
        startTime: Array.isArray(f.value) ? f.value[0] : null,
        endTime: Array.isArray(f.value) ? f.value[1] : null
      }, A.value = "start");
    });
    const o = (c) => {
      c.key === "Escape" && q();
    };
    return xe(() => {
      document.addEventListener("click", x), document.addEventListener("keydown", o);
    }), we(() => {
      document.removeEventListener("click", x), document.removeEventListener("keydown", o);
    }), y({
      focus: () => {
        var c;
        return (c = $.value) == null ? void 0 : c.focus();
      },
      blur: () => {
        var c;
        return (c = $.value) == null ? void 0 : c.blur();
      }
    }), (c, g) => (r(), d("div", {
      ref_key: "pickerRef",
      ref: V,
      class: u(p.value)
    }, [
      n.type !== "timerange" ? (r(), d("div", {
        key: 0,
        class: u(v.value),
        onClick: S
      }, [
        i("input", {
          ref_key: "inputRef",
          ref: $,
          type: "text",
          placeholder: n.placeholder,
          disabled: n.disabled,
          readonly: !0,
          value: C.value,
          class: u(s(l).e("input-inner"))
        }, null, 10, Dt),
        i("span", {
          class: u(s(l).e("suffix"))
        }, [
          n.clearable && C.value && !n.disabled ? (r(), d("span", {
            key: 0,
            class: u(s(l).e("clear")),
            onClick: oe(B, ["stop"])
          }, " ✕ ", 2)) : (r(), d("span", {
            key: 1,
            class: u(s(l).e("icon"))
          }, "🕐", 2))
        ], 2)
      ], 2)) : (r(), d("div", {
        key: 1,
        class: u(v.value),
        onClick: S
      }, [
        i("input", {
          type: "text",
          placeholder: n.startPlaceholder,
          disabled: n.disabled,
          readonly: !0,
          value: R.value,
          class: u([s(l).e("input-inner"), s(l).is("active", A.value === "start")]),
          onClick: g[0] || (g[0] = oe((W) => O("start"), ["stop"]))
        }, null, 10, $t),
        i("span", {
          class: u(s(l).e("separator"))
        }, "至", 2),
        i("input", {
          type: "text",
          placeholder: n.endPlaceholder,
          disabled: n.disabled,
          readonly: !0,
          value: L.value,
          class: u([s(l).e("input-inner"), s(l).is("active", A.value === "end")]),
          onClick: g[1] || (g[1] = oe((W) => O("end"), ["stop"]))
        }, null, 10, St),
        i("span", {
          class: u(s(l).e("suffix"))
        }, [
          n.clearable && (R.value || L.value) && !n.disabled ? (r(), d("span", {
            key: 0,
            class: u(s(l).e("clear")),
            onClick: oe(B, ["stop"])
          }, " ✕ ", 2)) : (r(), d("span", {
            key: 1,
            class: u(s(l).e("icon"))
          }, "🕐", 2))
        ], 2)
      ], 2)),
      (r(), ge(Ie, { to: "body" }, [
        Ce(Le, { name: "fade" }, {
          default: Pe(() => [
            ue(i("div", {
              ref_key: "popperRef",
              ref: F,
              class: u(s(l).e("popper")),
              style: ne({ zIndex: w.value, ...k.value })
            }, [
              n.type === "timerange" ? (r(), d("div", {
                key: 0,
                class: u(s(l).e("popper-header"))
              }, z(A.value === "start" ? "请选择开始时间" : "请选择结束时间"), 3)) : U("", !0),
              Ce(Ct, {
                "model-value": M.value,
                format: n.format,
                "disabled-hours": n.disabledHours,
                "disabled-minutes": n.disabledMinutes,
                "disabled-seconds": n.disabledSeconds,
                "hour-step": n.hourStep,
                "minute-step": n.minuteStep,
                "second-step": n.secondStep,
                onConfirm: ee,
                onCancel: T
              }, null, 8, ["model-value", "format", "disabled-hours", "disabled-minutes", "disabled-seconds", "hour-step", "minute-step", "second-step"])
            ], 6), [
              [Ae, h.value]
            ])
          ]),
          _: 1
        })
      ]))
    ], 2));
  }
});
function Mt(n, y, t) {
  return t ? t(y, n) : n.toLowerCase().includes(y.toLowerCase());
}
function Oe(n, y, t = "value", e = "children") {
  for (const a of n) {
    if (a[t] === y)
      return a;
    if (a[e] && a[e].length > 0) {
      const l = Oe(a[e], y, t, e);
      if (l) return l;
    }
  }
  return null;
}
function Fe(n, y, t = "value", e = "children") {
  const a = [];
  function l(m) {
    for (const h of m) {
      if (h[t] === y)
        return a.push(h), !0;
      if (h[e] && h[e].length > 0) {
        if (a.push(h), l(h[e]))
          return !0;
        a.pop();
      }
    }
    return !1;
  }
  return l(n), a;
}
function Tt(n, y = "children") {
  const t = [];
  function e(a, l = 0, m = null) {
    for (const h of a)
      t.push({ ...h, level: l, parent: m }), h[y] && h[y].length > 0 && e(h[y], l + 1, h);
  }
  return e(n), t;
}
const Rt = ["onClick"], Bt = ["placeholder", "disabled", "readonly", "value"], Ft = ["onClick"], It = ["onClick"], zl = /* @__PURE__ */ J({
  name: "XSelect",
  __name: "index",
  props: {
    modelValue: { default: void 0 },
    value: { default: void 0 },
    options: { default: () => [] },
    type: { default: "single" },
    placeholder: { default: "请选择" },
    disabled: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    filterable: { type: Boolean, default: !1 },
    filterMethod: {},
    size: { default: "default" },
    multipleLimit: { default: 0 },
    collapseTags: { type: Boolean, default: !0 },
    maxCollapseTags: { default: 1 },
    separator: { default: " / " },
    valueKey: { default: "value" },
    labelKey: { default: "label" },
    childrenKey: { default: "children" },
    noDataText: { default: "暂无数据" },
    noMatchText: { default: "无匹配数据" }
  },
  emits: ["update:modelValue", "update:value", "change", "clear", "focus", "blur", "visible-change", "remove-tag"],
  setup(n, { emit: y }) {
    const t = n, e = y, a = _("select"), l = () => Ye().next(), m = E(), h = E(), w = E(), V = E(!1), F = E(2e3), $ = E(""), k = E(-1), D = E({ top: "0px", left: "0px" }), A = b(() => t.type === "multiple"), f = b(() => t.type === "cascader"), C = E([]), R = () => t.modelValue !== void 0 ? t.modelValue : t.value !== void 0 ? t.value : "", L = (Y) => {
      t.modelValue !== void 0 && e("update:modelValue", Y), t.value !== void 0 && e("update:value", Y), t.modelValue === void 0 && t.value === void 0 && e("update:modelValue", Y), e("change", Y);
    }, M = b(() => {
      const Y = R();
      return A.value ? Array.isArray(Y) ? Y : [] : f.value ? Array.isArray(Y) ? Y : Y ? [Y] : [] : Y !== "" && Y !== null && Y !== void 0 ? [Y] : [];
    }), p = b(() => f.value ? Tt(t.options, t.childrenKey) : t.options.map((Y) => ({ ...Y, level: 0 }))), v = b(() => !t.filterable || !$.value ? p.value : p.value.filter((Y) => {
      const G = Y[t.labelKey] || "";
      return Mt(G, $.value, t.filterMethod);
    })), S = b(() => {
      const Y = [];
      for (const G of M.value) {
        const Z = Oe(t.options, G, t.valueKey, t.childrenKey);
        Z && Y.push(Z);
      }
      return Y;
    }), O = b(() => {
      if (A.value)
        return "";
      if (f.value)
        return Fe(t.options, M.value[M.value.length - 1], t.valueKey, t.childrenKey).map((Z) => Z[t.labelKey]).join(t.separator);
      const Y = S.value[0];
      return Y ? Y[t.labelKey] : "";
    }), N = b(() => A.value ? S.value : []), q = b(() => t.collapseTags ? N.value.slice(0, t.maxCollapseTags) : N.value), ee = b(() => t.collapseTags ? Math.max(0, N.value.length - t.maxCollapseTags) : 0), T = b(() => [
      a.b(),
      a.m(t.size),
      a.is("disabled", t.disabled),
      a.is("multiple", A.value),
      a.is("cascader", f.value),
      a.is("filterable", t.filterable),
      a.is("focus", V.value)
    ]), B = () => {
      if (!m.value || !w.value || !V.value) return;
      const Y = m.value.getBoundingClientRect(), G = w.value.getBoundingClientRect();
      let Z = Y.bottom + 4, se = Y.left;
      se + G.width > window.innerWidth && (se = window.innerWidth - G.width - 8), Z + G.height > window.innerHeight && (Z = Y.top - G.height - 4), D.value = {
        top: `${Z}px`,
        left: `${se}px`
      };
    }, x = () => {
      t.disabled || (V.value = !0, F.value = l(), $.value = "", Se(() => {
        B();
      }), e("visible-change", !0), e("focus", {}));
    }, o = () => {
      V.value = !1, $.value = "", C.value = [], e("visible-change", !1), e("blur", {});
    }, c = (Y) => {
      if (!Y.disabled)
        if (A.value) {
          const G = [...M.value], Z = Y[t.valueKey], se = G.indexOf(Z);
          if (se > -1)
            G.splice(se, 1), e("remove-tag", Z);
          else {
            if (t.multipleLimit > 0 && G.length >= t.multipleLimit)
              return;
            G.push(Z);
          }
          L(G);
        } else if (f.value)
          if (Y.children && Y.children.length > 0) {
            const G = Fe(t.options, Y[t.valueKey], t.valueKey, t.childrenKey);
            C.value = G;
          } else {
            const Z = Fe(t.options, Y[t.valueKey], t.valueKey, t.childrenKey).map((se) => se[t.valueKey]);
            L(Z), o();
          }
        else
          L(Y[t.valueKey]), o();
    }, g = (Y) => {
      const G = M.value.filter((Z) => Z !== Y[t.valueKey]);
      L(G), e("remove-tag", Y[t.valueKey]);
    }, W = () => {
      const Y = A.value ? [] : "";
      L(Y), e("clear");
    }, le = (Y) => {
      $.value = Y.target.value;
    }, H = (Y) => {
      if (!m.value) return;
      const G = Y.target;
      m.value.contains(G) || w.value && w.value.contains(G) || o();
    }, te = (Y) => {
      if (Y.key === "Escape")
        o();
      else if (Y.key === "Enter" && V.value) {
        const G = v.value[k.value];
        G && c(G);
      } else Y.key === "ArrowDown" && V.value ? (Y.preventDefault(), k.value = Math.min(k.value + 1, v.value.length - 1)) : Y.key === "ArrowUp" && V.value && (Y.preventDefault(), k.value = Math.max(k.value - 1, 0));
    }, X = (Y) => M.value.includes(Y[t.valueKey]), ve = (Y, G) => [
      a.e("option"),
      a.is("selected", X(Y)),
      a.is("disabled", Y.disabled === !0),
      a.is("hover", k.value === G),
      a.is("group", !!(Y.children && Y.children.length > 0))
    ], ye = b(() => {
      if (!f.value) return [];
      const Y = [t.options];
      for (const G of C.value)
        G.children && G.children.length > 0 && Y.push(G.children);
      return Y;
    });
    return xe(() => {
      document.addEventListener("click", H), document.addEventListener("keydown", te);
    }), we(() => {
      document.removeEventListener("click", H), document.removeEventListener("keydown", te), document.removeEventListener("scroll", B, !0);
    }), ie(V, (Y) => {
      Y ? document.addEventListener("scroll", B, !0) : document.removeEventListener("scroll", B, !0);
    }), $e("select", {
      selectedValues: M,
      handleSelect: c,
      isSelected: X
    }), (Y, G) => (r(), d("div", {
      ref_key: "selectRef",
      ref: m,
      class: u(T.value)
    }, [
      i("div", {
        class: u(s(a).e("wrapper")),
        onClick: G[0] || (G[0] = (Z) => V.value ? o() : x())
      }, [
        A.value && N.value.length > 0 ? (r(), d("div", {
          key: 0,
          class: u(s(a).e("tags"))
        }, [
          (r(!0), d(j, null, Q(q.value, (Z) => (r(), d("span", {
            key: Z[n.valueKey],
            class: u(s(a).e("tag"))
          }, [
            i("span", {
              class: u(s(a).e("tag-text"))
            }, z(Z[n.labelKey]), 3),
            i("span", {
              class: u(s(a).e("tag-close")),
              onClick: oe((se) => g(Z), ["stop"])
            }, "×", 10, Rt)
          ], 2))), 128)),
          ee.value > 0 ? (r(), d("span", {
            key: 0,
            class: u(s(a).e("tag-count"))
          }, " +" + z(ee.value), 3)) : U("", !0)
        ], 2)) : U("", !0),
        i("input", {
          ref_key: "inputRef",
          ref: h,
          class: u(s(a).e("input")),
          placeholder: A.value && N.value.length > 0 ? "" : n.placeholder,
          disabled: n.disabled,
          readonly: !n.filterable || !V.value,
          value: n.filterable && V.value ? $.value : O.value,
          onInput: le
        }, null, 42, Bt),
        i("span", {
          class: u(s(a).e("suffix"))
        }, [
          n.clearable && M.value.length > 0 && !n.disabled ? (r(), d("span", {
            key: 0,
            class: u(s(a).e("clear")),
            onClick: oe(W, ["stop"])
          }, "×", 2)) : (r(), d("span", {
            key: 1,
            class: u([s(a).e("arrow"), s(a).is("reverse", V.value)])
          }, "▼", 2))
        ], 2)
      ], 2),
      (r(), ge(Ie, { to: "body" }, [
        Ce(Le, { name: "fade" }, {
          default: Pe(() => [
            ue(i("div", {
              ref_key: "popperRef",
              ref: w,
              class: u([s(a).e("popper"), s(a).is("cascader", f.value)]),
              style: ne({ zIndex: F.value, ...D.value })
            }, [
              f.value ? (r(), d("div", {
                key: 0,
                class: u(s(a).e("cascader-panels"))
              }, [
                (r(!0), d(j, null, Q(ye.value, (Z, se) => (r(), d("div", {
                  key: se,
                  class: u(s(a).e("cascader-panel"))
                }, [
                  (r(!0), d(j, null, Q(Z, (re, Ve) => (r(), d("div", {
                    key: re[n.valueKey],
                    class: u(ve(re, Ve)),
                    onClick: (Me) => c(re)
                  }, [
                    i("span", {
                      class: u(s(a).e("option-label"))
                    }, z(re[n.labelKey]), 3),
                    re.children && re.children.length > 0 ? (r(), d("span", {
                      key: 0,
                      class: u(s(a).e("option-arrow"))
                    }, "›", 2)) : U("", !0)
                  ], 10, Ft))), 128))
                ], 2))), 128))
              ], 2)) : (r(), d(j, { key: 1 }, [
                v.value.length === 0 ? (r(), d("div", {
                  key: 0,
                  class: u(s(a).e("empty"))
                }, z($.value ? n.noMatchText : n.noDataText), 3)) : (r(), d("div", {
                  key: 1,
                  class: u(s(a).e("options"))
                }, [
                  (r(!0), d(j, null, Q(v.value, (Z, se) => (r(), d("div", {
                    key: Z[n.valueKey],
                    class: u(ve(Z, se)),
                    onClick: (re) => c(Z)
                  }, [
                    i("span", {
                      class: u(s(a).e("option-label"))
                    }, z(Z[n.labelKey]), 3),
                    X(Z) ? (r(), d("span", {
                      key: 0,
                      class: u(s(a).e("option-check"))
                    }, "✓", 2)) : U("", !0)
                  ], 10, It))), 128))
                ], 2))
              ], 64))
            ], 6), [
              [Ae, V.value]
            ])
          ]),
          _: 1
        })
      ]))
    ], 2));
  }
}), Lt = ["checked", "indeterminate"], Pt = ["placeholder"], At = ["onClick"], Yt = ["checked", "disabled", "onChange"], Et = ["disabled"], Ht = ["disabled"], zt = ["checked", "indeterminate"], Ot = ["placeholder"], Nt = ["onClick"], Ut = ["checked", "disabled", "onChange"], Ol = /* @__PURE__ */ J({
  name: "XTransfer",
  __name: "index",
  props: {
    modelValue: { default: () => [] },
    data: { default: () => [] },
    titles: { default: () => ["列表1", "列表2"] },
    buttonTexts: { default: () => ["", ""] },
    filterable: { type: Boolean, default: !1 },
    filterPlaceholder: { default: "请输入搜索内容" },
    filterMethod: {},
    targetOrder: { default: "original" },
    props: {},
    leftDefaultChecked: { default: () => [] },
    rightDefaultChecked: { default: () => [] }
  },
  emits: ["update:modelValue", "change", "left-check-change", "right-check-change"],
  setup(n, { expose: y, emit: t }) {
    const e = n, a = t, l = _("transfer"), m = b(() => {
      var o;
      return ((o = e.props) == null ? void 0 : o.key) || "key";
    }), h = b(() => {
      var o;
      return ((o = e.props) == null ? void 0 : o.label) || "label";
    }), w = b(() => {
      var o;
      return ((o = e.props) == null ? void 0 : o.disabled) || "disabled";
    }), V = E(""), F = E(""), $ = E([]), k = E([]), D = (o) => o[m.value], A = (o) => o[h.value], f = (o) => o[w.value] || !1, C = b(() => e.data.filter((o) => {
      const c = D(o);
      return e.modelValue.includes(c) ? !1 : e.filterable && V.value ? e.filterMethod ? e.filterMethod(V.value, o) : A(o).toLowerCase().includes(V.value.toLowerCase()) : !0;
    })), R = b(() => {
      const o = e.modelValue;
      let c = e.data.filter((g) => {
        const W = D(g);
        return o.includes(W);
      });
      return e.filterable && F.value && (c = c.filter((g) => e.filterMethod ? e.filterMethod(F.value, g) : A(g).toLowerCase().includes(F.value.toLowerCase()))), e.targetOrder === "push" ? c.sort((g, W) => o.indexOf(D(g)) - o.indexOf(D(W))) : e.targetOrder === "unshift" ? c.sort((g, W) => o.indexOf(D(W)) - o.indexOf(D(g))) : c;
    }), L = b(() => C.value.filter((o) => $.value.includes(D(o))).every((o) => f(o))), M = b(() => R.value.filter((o) => k.value.includes(D(o))).every((o) => f(o))), p = b(() => $.value.length === 0 || L.value), v = b(() => k.value.length === 0 || M.value), S = () => {
      const o = $.value.filter((g) => {
        const W = e.data.find((le) => D(le) === g);
        return W && !f(W);
      });
      let c;
      e.targetOrder === "unshift" ? c = [...o, ...e.modelValue] : c = [...e.modelValue, ...o], a("update:modelValue", c), a("change", c, "right", o), $.value = [];
    }, O = () => {
      const o = k.value.filter((g) => {
        const W = e.data.find((le) => D(le) === g);
        return W && !f(W);
      }), c = e.modelValue.filter((g) => !o.includes(g));
      a("update:modelValue", c), a("change", c, "left", o), k.value = [];
    }, N = (o) => {
      const c = $.value.indexOf(o);
      c > -1 ? $.value.splice(c, 1) : $.value.push(o), a("left-check-change", [...$.value]);
    }, q = (o) => {
      const c = k.value.indexOf(o);
      c > -1 ? k.value.splice(c, 1) : k.value.push(o), a("right-check-change", [...k.value]);
    }, ee = () => {
      $.value.length === C.value.filter((o) => !f(o)).length ? $.value = [] : $.value = C.value.filter((o) => !f(o)).map((o) => D(o)), a("left-check-change", [...$.value]);
    }, T = () => {
      k.value.length === R.value.filter((o) => !f(o)).length ? k.value = [] : k.value = R.value.filter((o) => !f(o)).map((o) => D(o)), a("right-check-change", [...k.value]);
    }, B = (o) => {
      o === "left" ? V.value = "" : F.value = "";
    }, x = b(() => [l.b()]);
    return y({
      clearQuery: B
    }), (o, c) => (r(), d("div", {
      class: u(x.value)
    }, [
      i("div", {
        class: u(s(l).e("panel"))
      }, [
        i("div", {
          class: u(s(l).e("header"))
        }, [
          i("label", {
            class: u(s(l).e("checkbox"))
          }, [
            i("input", {
              type: "checkbox",
              checked: $.value.length > 0 && $.value.length === C.value.filter((g) => !f(g)).length,
              indeterminate: $.value.length > 0 && $.value.length < C.value.filter((g) => !f(g)).length,
              onChange: ee
            }, null, 40, Lt),
            i("span", null, z(n.titles[0]), 1)
          ], 2),
          i("span", {
            class: u(s(l).e("count"))
          }, z($.value.length) + " / " + z(C.value.length), 3)
        ], 2),
        n.filterable ? (r(), d("div", {
          key: 0,
          class: u(s(l).e("filter"))
        }, [
          ue(i("input", {
            "onUpdate:modelValue": c[0] || (c[0] = (g) => V.value = g),
            placeholder: n.filterPlaceholder,
            class: u(s(l).e("filter-input"))
          }, null, 10, Pt), [
            [be, V.value]
          ]),
          V.value ? (r(), d("span", {
            key: 0,
            class: u(s(l).e("filter-clear")),
            onClick: c[1] || (c[1] = (g) => B("left"))
          }, "×", 2)) : U("", !0)
        ], 2)) : U("", !0),
        i("div", {
          class: u(s(l).e("body"))
        }, [
          (r(!0), d(j, null, Q(C.value, (g) => (r(), d("div", {
            key: D(g),
            class: u([
              s(l).e("item"),
              s(l).is("disabled", f(g)),
              s(l).is("checked", $.value.includes(D(g)))
            ]),
            onClick: (W) => !f(g) && N(D(g))
          }, [
            i("label", {
              class: u(s(l).e("checkbox"))
            }, [
              i("input", {
                type: "checkbox",
                checked: $.value.includes(D(g)),
                disabled: f(g),
                onClick: c[2] || (c[2] = oe(() => {
                }, ["stop"])),
                onChange: (W) => N(D(g))
              }, null, 40, Yt),
              i("span", null, z(A(g)), 1)
            ], 2)
          ], 10, At))), 128)),
          C.value.length === 0 ? (r(), d("div", {
            key: 0,
            class: u(s(l).e("empty"))
          }, [
            ae(o.$slots, "left-empty", {}, () => [
              c[6] || (c[6] = me("暂无数据", -1))
            ])
          ], 2)) : U("", !0)
        ], 2)
      ], 2),
      i("div", {
        class: u(s(l).e("buttons"))
      }, [
        i("button", {
          class: u([s(l).e("button"), s(l).is("disabled", p.value)]),
          disabled: p.value,
          onClick: S
        }, z(n.buttonTexts[0] || ">"), 11, Et),
        i("button", {
          class: u([s(l).e("button"), s(l).is("disabled", v.value)]),
          disabled: v.value,
          onClick: O
        }, z(n.buttonTexts[1] || "<"), 11, Ht)
      ], 2),
      i("div", {
        class: u(s(l).e("panel"))
      }, [
        i("div", {
          class: u(s(l).e("header"))
        }, [
          i("label", {
            class: u(s(l).e("checkbox"))
          }, [
            i("input", {
              type: "checkbox",
              checked: k.value.length > 0 && k.value.length === R.value.filter((g) => !f(g)).length,
              indeterminate: k.value.length > 0 && k.value.length < R.value.filter((g) => !f(g)).length,
              onChange: T
            }, null, 40, zt),
            i("span", null, z(n.titles[1]), 1)
          ], 2),
          i("span", {
            class: u(s(l).e("count"))
          }, z(k.value.length) + " / " + z(R.value.length), 3)
        ], 2),
        n.filterable ? (r(), d("div", {
          key: 0,
          class: u(s(l).e("filter"))
        }, [
          ue(i("input", {
            "onUpdate:modelValue": c[3] || (c[3] = (g) => F.value = g),
            placeholder: n.filterPlaceholder,
            class: u(s(l).e("filter-input"))
          }, null, 10, Ot), [
            [be, F.value]
          ]),
          F.value ? (r(), d("span", {
            key: 0,
            class: u(s(l).e("filter-clear")),
            onClick: c[4] || (c[4] = (g) => B("right"))
          }, "×", 2)) : U("", !0)
        ], 2)) : U("", !0),
        i("div", {
          class: u(s(l).e("body"))
        }, [
          (r(!0), d(j, null, Q(R.value, (g) => (r(), d("div", {
            key: D(g),
            class: u([
              s(l).e("item"),
              s(l).is("disabled", f(g)),
              s(l).is("checked", k.value.includes(D(g)))
            ]),
            onClick: (W) => !f(g) && q(D(g))
          }, [
            i("label", {
              class: u(s(l).e("checkbox"))
            }, [
              i("input", {
                type: "checkbox",
                checked: k.value.includes(D(g)),
                disabled: f(g),
                onClick: c[5] || (c[5] = oe(() => {
                }, ["stop"])),
                onChange: (W) => q(D(g))
              }, null, 40, Ut),
              i("span", null, z(A(g)), 1)
            ], 2)
          ], 10, Nt))), 128)),
          R.value.length === 0 ? (r(), d("div", {
            key: 0,
            class: u(s(l).e("empty"))
          }, [
            ae(o.$slots, "right-empty", {}, () => [
              c[7] || (c[7] = me("暂无数据", -1))
            ])
          ], 2)) : U("", !0)
        ], 2)
      ], 2)
    ], 2));
  }
}), Xt = { key: 0 }, Kt = { key: 1 }, Nl = /* @__PURE__ */ J({
  name: "XSlider",
  __name: "index",
  props: {
    modelValue: { default: 0 },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    disabled: { type: Boolean, default: !1 },
    showTooltip: { type: Boolean, default: !0 },
    formatTooltip: {},
    showStops: { type: Boolean, default: !1 },
    vertical: { type: Boolean, default: !1 },
    height: { default: "200px" },
    marks: {}
  },
  emits: ["update:modelValue", "change", "input"],
  setup(n, { emit: y }) {
    const t = n, e = y, a = _("slider"), l = E(), m = E(), h = E(!1), w = E(!1), V = b(() => {
      const B = t.max - t.min;
      return (t.modelValue - t.min) / B * 100;
    }), F = b(() => t.formatTooltip ? t.formatTooltip(t.modelValue) : t.modelValue), $ = b(() => {
      if (!t.showStops || t.min >= t.max) return [];
      const B = [], x = (t.max - t.min) / t.step;
      for (let o = 0; o <= x; o++) {
        const c = t.min + o * t.step;
        c > t.min && c < t.max && B.push((c - t.min) / (t.max - t.min) * 100);
      }
      return B;
    }), k = b(() => t.marks ? Object.keys(t.marks).map((B) => {
      const x = Number(B), o = t.marks[x], c = (x - t.min) / (t.max - t.min) * 100;
      let g, W = {};
      return typeof o == "string" ? g = o : (g = o.label || String(x), W = o.style || {}), { value: x, pos: c, label: g, style: W };
    }) : []), D = () => l.value ? t.vertical ? l.value.offsetHeight : l.value.offsetWidth : 0, A = (B, x) => {
      if (!l.value) return t.modelValue;
      const o = l.value.getBoundingClientRect(), c = D();
      let g;
      t.vertical ? g = (o.bottom - x) / c * 100 : g = (B - o.left) / c * 100, g = Math.max(0, Math.min(100, g));
      const W = t.min + g / 100 * (t.max - t.min), le = Math.round(W / t.step) * t.step;
      return Math.max(t.min, Math.min(t.max, le));
    }, f = (B) => {
      if (t.disabled) return;
      const x = Math.max(t.min, Math.min(t.max, B));
      x !== t.modelValue && (e("update:modelValue", x), e("input", x));
    }, C = (B) => {
      if (t.disabled) return;
      B.preventDefault(), w.value = !0, h.value = !0;
      const x = A(B.clientX, B.clientY);
      f(x), document.addEventListener("mousemove", R), document.addEventListener("mouseup", L);
    }, R = (B) => {
      if (!w.value) return;
      const x = A(B.clientX, B.clientY);
      f(x);
    }, L = () => {
      w.value = !1, e("change", t.modelValue), document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", L);
    }, M = (B) => {
      if (t.disabled) return;
      B.preventDefault(), w.value = !0, h.value = !0;
      const x = B.touches[0], o = A(x.clientX, x.clientY);
      f(o);
    }, p = (B) => {
      if (!w.value) return;
      const x = B.touches[0], o = A(x.clientX, x.clientY);
      f(o);
    }, v = () => {
      w.value = !1, e("change", t.modelValue);
    }, S = () => {
      t.showTooltip && (h.value = !0);
    }, O = () => {
      w.value || (h.value = !1);
    };
    we(() => {
      document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", L);
    });
    const N = b(() => [
      a.b(),
      a.is("disabled", t.disabled),
      a.is("vertical", t.vertical)
    ]), q = b(() => t.vertical && t.height ? { height: typeof t.height == "number" ? `${t.height}px` : t.height } : {}), ee = b(() => t.vertical ? { height: `${V.value}%` } : { width: `${V.value}%` }), T = b(() => t.vertical ? { bottom: `${V.value}%` } : { left: `${V.value}%` });
    return (B, x) => (r(), d("div", {
      class: u(N.value),
      style: ne(q.value)
    }, [
      i("div", {
        ref_key: "sliderRef",
        ref: l,
        class: u(s(a).e("runway")),
        onMousedown: C,
        onTouchstart: M
      }, [
        i("div", {
          class: u(s(a).e("bar")),
          style: ne(ee.value)
        }, null, 6),
        n.showStops ? (r(), d("div", Xt, [
          (r(!0), d(j, null, Q($.value, (o, c) => (r(), d("div", {
            key: c,
            class: u(s(a).e("stop")),
            style: ne(n.vertical ? { bottom: `${o}%` } : { left: `${o}%` })
          }, null, 6))), 128))
        ])) : U("", !0),
        k.value.length > 0 ? (r(), d("div", Kt, [
          (r(!0), d(j, null, Q(k.value, (o) => (r(), d("div", {
            key: o.value,
            class: u(s(a).e("mark")),
            style: ne(n.vertical ? { bottom: `${o.pos}%` } : { left: `${o.pos}%`, ...o.style })
          }, [
            i("span", {
              class: u(s(a).e("mark-text"))
            }, z(o.label), 3)
          ], 6))), 128))
        ])) : U("", !0),
        i("div", {
          ref_key: "buttonRef",
          ref: m,
          class: u(s(a).e("button-wrapper")),
          style: ne(T.value),
          onMouseenter: S,
          onMouseleave: O,
          onTouchmove: p,
          onTouchend: v
        }, [
          n.showTooltip && h.value ? (r(), d("div", {
            key: 0,
            class: u(s(a).e("tooltip"))
          }, z(F.value), 3)) : U("", !0),
          i("div", {
            class: u(s(a).e("button"))
          }, null, 2)
        ], 38)
      ], 34)
    ], 6));
  }
}), Wt = ["src"], qt = {
  key: 0,
  class: "status-uploading"
}, Gt = { class: "progress-circle" }, jt = { class: "progress-text" }, Zt = {
  key: 1,
  class: "status-error"
}, Qt = {
  key: 2,
  class: "status-success"
}, Jt = {
  key: 0,
  class: "action-preview"
}, _t = ["onClick"], el = ["disabled"], tl = { class: "progress-text" }, ll = ["onClick"], al = ["src"], nl = {
  key: 0,
  class: "action-success"
}, sl = ["onClick"], ul = ["multiple", "accept", "disabled"], Ul = /* @__PURE__ */ J({
  name: "XUpload",
  __name: "index",
  props: {
    action: { default: "#" },
    headers: {},
    data: {},
    multiple: { type: Boolean, default: !1 },
    accept: {},
    limit: {},
    disabled: { type: Boolean, default: !1 },
    drag: { type: Boolean, default: !1 },
    listType: { default: "text" },
    autoUpload: { type: Boolean, default: !0 },
    fileList: { default: () => [] },
    showFileList: { type: Boolean, default: !0 },
    withCredentials: { type: Boolean, default: !1 },
    name: { default: "file" },
    httpRequest: {},
    beforeUpload: {},
    beforeRemove: {},
    onSuccess: {},
    onError: {},
    onProgress: {},
    onChange: {},
    onRemove: {},
    onExceed: {}
  },
  emits: ["update:fileList", "success", "error", "progress", "change", "remove", "exceed"],
  setup(n, { expose: y, emit: t }) {
    const e = n, a = t, l = _("upload");
    He();
    const m = E(), h = E([...e.fileList]), w = E(!1);
    let V = 1;
    const F = () => Date.now() + V++, $ = (T) => {
      var o;
      const B = (o = T.name.split(".").pop()) == null ? void 0 : o.toLowerCase(), x = {
        pdf: "📄",
        doc: "📝",
        docx: "📝",
        xls: "📊",
        xlsx: "📊",
        ppt: "📽️",
        pptx: "📽️",
        zip: "📦",
        rar: "📦",
        mp3: "🎵",
        mp4: "🎬",
        default: "📁"
      };
      return x[B || ""] || x.default;
    }, k = b(() => e.limit ? h.value.length < e.limit : !0), D = b(() => [
      l.b(),
      l.is("disabled", e.disabled),
      l.is("drag", e.drag),
      l.m(e.listType)
    ]), A = (T) => {
      const B = T.target.files;
      !B || B.length === 0 || (f(Array.from(B)), m.value && (m.value.value = ""));
    }, f = async (T) => {
      var B, x;
      if (e.limit && h.value.length + T.length > e.limit) {
        a("exceed", T, h.value), (B = e.onExceed) == null || B.call(e, T, h.value);
        return;
      }
      for (const o of T) {
        if (e.beforeUpload && await e.beforeUpload(o, T) === !1)
          continue;
        const c = {
          name: o.name,
          size: o.size,
          status: "ready",
          percentage: 0,
          uid: F(),
          raw: o
        };
        o.type.startsWith("image/") && (c.thumbUrl = await C(o), c.url = c.thumbUrl), h.value.push(c), a("update:fileList", h.value), a("change", c, h.value), (x = e.onChange) == null || x.call(e, c, h.value), e.autoUpload && R(c);
      }
    }, C = (T) => new Promise((B) => {
      const x = new FileReader();
      x.onload = (o) => {
        var c;
        B((c = o.target) == null ? void 0 : c.result);
      }, x.readAsDataURL(T);
    }), R = (T) => {
      if (!T.raw) return;
      T.status = "uploading", (e.httpRequest || L)({
        action: e.action,
        headers: e.headers,
        data: e.data,
        file: T.raw,
        name: e.name,
        withCredentials: e.withCredentials,
        onProgress: (x) => {
          var o;
          T.percentage = x.percent, a("progress", x, T, h.value), (o = e.onProgress) == null || o.call(e, x, T, h.value);
        },
        onSuccess: (x) => {
          var o;
          T.status = "success", T.response = x, a("success", x, T, h.value), (o = e.onSuccess) == null || o.call(e, x, T, h.value);
        },
        onError: (x) => {
          var o;
          T.status = "error", a("error", x, T, h.value), (o = e.onError) == null || o.call(e, x, T, h.value);
        }
      });
    }, L = (T) => new Promise((B, x) => {
      const o = new XMLHttpRequest();
      o.upload.addEventListener("progress", (g) => {
        g.lengthComputable && T.onProgress({ percent: g.loaded / g.total * 100 });
      }), o.addEventListener("load", () => {
        if (o.status < 200 || o.status >= 300) {
          T.onError(new Error("Upload failed")), x(new Error("Upload failed"));
          return;
        }
        try {
          const g = JSON.parse(o.responseText);
          T.onSuccess(g), B(g);
        } catch {
          T.onSuccess(o.responseText), B(o.responseText);
        }
      }), o.addEventListener("error", () => {
        T.onError(new Error("Upload error")), x(new Error("Upload error"));
      });
      const c = new FormData();
      c.append(T.name, T.file), T.data && Object.keys(T.data).forEach((g) => {
        c.append(g, T.data[g]);
      }), o.open("POST", T.action, !0), T.withCredentials && (o.withCredentials = !0), T.headers && Object.keys(T.headers).forEach((g) => {
        o.setRequestHeader(g, T.headers[g]);
      }), o.send(c);
    }), M = async (T) => {
      var x;
      if (e.beforeRemove && await e.beforeRemove(T, h.value) === !1)
        return;
      const B = h.value.findIndex((o) => o.uid === T.uid);
      B > -1 && (h.value.splice(B, 1), a("update:fileList", h.value), a("remove", T, h.value), (x = e.onRemove) == null || x.call(e, T, h.value));
    }, p = () => {
      h.value.filter((T) => T.status === "ready" && T.raw).forEach((T) => R(T));
    }, v = () => {
      h.value = [], a("update:fileList", h.value);
    }, S = () => {
      var T;
      e.disabled || (T = m.value) == null || T.click();
    }, O = (T) => {
      T.preventDefault(), !e.disabled && e.drag && (w.value = !0);
    }, N = () => {
      w.value = !1;
    }, q = (T) => {
      var x;
      if (T.preventDefault(), w.value = !1, e.disabled) return;
      const B = (x = T.dataTransfer) == null ? void 0 : x.files;
      B && B.length > 0 && f(Array.from(B));
    }, ee = (T) => {
      if (!T) return "0 B";
      const B = ["B", "KB", "MB", "GB"];
      let x = 0, o = T;
      for (; o >= 1024 && x < B.length - 1; )
        o /= 1024, x++;
      return `${o.toFixed(2)} ${B[x]}`;
    };
    return y({
      submit: p,
      clearFiles: v,
      uploadFiles: h
    }), (T, B) => (r(), d("div", {
      class: u(D.value)
    }, [
      n.drag ? (r(), d("div", {
        key: 0,
        class: u([s(l).e("drag"), s(l).is("dragover", w.value)]),
        onClick: S,
        onDragover: O,
        onDragleave: N,
        onDrop: q
      }, [
        ae(T.$slots, "drag", {}, () => [
          i("span", {
            class: u(s(l).e("drag-icon"))
          }, "📁", 2),
          i("div", {
            class: u(s(l).e("drag-text"))
          }, [...B[0] || (B[0] = [
            me(" 将文件拖到此处，或", -1),
            i("em", null, "点击上传", -1)
          ])], 2)
        ])
      ], 34)) : n.listType === "picture-card" ? (r(), d("ul", {
        key: 1,
        class: u([s(l).e("files"), s(l).e("upload-list")])
      }, [
        (r(!0), d(j, null, Q(h.value, (x) => (r(), d("li", {
          key: x.uid,
          class: u([s(l).e("file"), s(l).is(`status-${x.status}`)])
        }, [
          x.thumbUrl && x.status !== "uploading" ? (r(), d("img", {
            key: 0,
            src: x.thumbUrl,
            class: u(s(l).e("file-image"))
          }, null, 10, Wt)) : (r(), d("div", {
            key: 1,
            class: u(s(l).e("file-status"))
          }, [
            x.status === "uploading" ? (r(), d("span", qt, [
              i("span", Gt, [
                i("span", jt, z(Math.round(x.percentage || 0)) + "%", 1)
              ])
            ])) : x.status === "error" ? (r(), d("span", Zt, "✕")) : x.status === "success" ? (r(), d("span", Qt, "✓")) : U("", !0)
          ], 2)),
          i("span", {
            class: u(s(l).e("file-actions"))
          }, [
            x.url ? (r(), d("span", Jt, "👁️")) : U("", !0),
            i("span", {
              class: "action-remove",
              onClick: (o) => M(x)
            }, "🗑️", 8, _t)
          ], 2)
        ], 2))), 128)),
        k.value ? (r(), d("li", {
          key: 0,
          class: u(s(l).e("upload-card")),
          onClick: S
        }, [
          ae(T.$slots, "trigger", {}, () => [
            B[1] || (B[1] = i("span", { class: "upload-icon" }, "+", -1))
          ])
        ], 2)) : U("", !0)
      ], 2)) : (r(), d(j, { key: 2 }, [
        i("div", {
          class: u(s(l).e("trigger-wrapper")),
          onClick: S
        }, [
          ae(T.$slots, "trigger", {}, () => [
            k.value ? (r(), d("button", {
              key: 0,
              type: "button",
              class: u(s(l).e("trigger")),
              disabled: n.disabled
            }, [
              ae(T.$slots, "default", {}, () => [
                B[2] || (B[2] = me("点击上传", -1))
              ])
            ], 10, el)) : U("", !0)
          ])
        ], 2),
        n.showFileList && h.value.length > 0 ? (r(), d("ul", {
          key: 0,
          class: u(s(l).e("files"))
        }, [
          (r(!0), d(j, null, Q(h.value, (x) => (r(), d("li", {
            key: x.uid,
            class: u([s(l).e("file"), s(l).is(`status-${x.status}`)])
          }, [
            n.listType === "text" ? (r(), d(j, { key: 0 }, [
              i("span", {
                class: u(s(l).e("file-icon"))
              }, z($(x)), 3),
              i("span", {
                class: u(s(l).e("file-name"))
              }, z(x.name), 3),
              i("span", {
                class: u(s(l).e("file-size"))
              }, z(ee(x.size)), 3),
              x.status === "uploading" ? (r(), d("span", {
                key: 0,
                class: u(s(l).e("file-progress"))
              }, [
                i("span", {
                  class: "progress-bar",
                  style: ne({ width: x.percentage + "%" })
                }, null, 4),
                i("span", tl, z(Math.round(x.percentage || 0)) + "%", 1)
              ], 2)) : U("", !0),
              x.status === "success" ? (r(), d("span", {
                key: 1,
                class: u(s(l).e("file-success"))
              }, "✓", 2)) : U("", !0),
              x.status === "error" ? (r(), d("span", {
                key: 2,
                class: u(s(l).e("file-error"))
              }, "✕", 2)) : U("", !0),
              i("span", {
                class: u(s(l).e("file-actions"))
              }, [
                i("span", {
                  class: "action-remove",
                  onClick: (o) => M(x)
                }, "✕", 8, ll)
              ], 2)
            ], 64)) : n.listType === "picture" ? (r(), d(j, { key: 1 }, [
              x.thumbUrl ? (r(), d("img", {
                key: 0,
                src: x.thumbUrl,
                class: u(s(l).e("file-thumb"))
              }, null, 10, al)) : (r(), d("span", {
                key: 1,
                class: u(s(l).e("file-icon"))
              }, z($(x)), 3)),
              i("div", {
                class: u(s(l).e("file-info"))
              }, [
                i("span", {
                  class: u(s(l).e("file-name"))
                }, z(x.name), 3),
                x.status === "uploading" ? (r(), d("span", {
                  key: 0,
                  class: u(s(l).e("file-progress"))
                }, [
                  i("span", {
                    class: "progress-bar",
                    style: ne({ width: x.percentage + "%" })
                  }, null, 4)
                ], 2)) : U("", !0)
              ], 2),
              i("span", {
                class: u(s(l).e("file-actions"))
              }, [
                x.status === "success" ? (r(), d("span", nl, "✓")) : U("", !0),
                i("span", {
                  class: "action-remove",
                  onClick: (o) => M(x)
                }, "✕", 8, sl)
              ], 2)
            ], 64)) : U("", !0)
          ], 2))), 128))
        ], 2)) : U("", !0)
      ], 64)),
      i("input", {
        ref_key: "inputRef",
        ref: m,
        type: "file",
        class: u(s(l).e("input")),
        multiple: n.multiple,
        accept: n.accept,
        disabled: n.disabled,
        onChange: A
      }, null, 42, ul),
      T.$slots.tip ? (r(), d("div", {
        key: 3,
        class: u(s(l).e("tip"))
      }, [
        ae(T.$slots, "tip")
      ], 2)) : U("", !0)
    ], 2));
  }
}), ol = ["onMousemove", "onClick"], Xl = /* @__PURE__ */ J({
  name: "XRate",
  __name: "index",
  props: {
    modelValue: { default: 0 },
    max: { default: 5 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    allowHalf: { type: Boolean, default: !1 },
    lowThreshold: { default: 2 },
    highThreshold: { default: 4 },
    colors: { default: () => ["#F7BA2A", "#F7BA2A", "#F7BA2A"] },
    voidColor: { default: "#C6D1DE" },
    disabledVoidColor: { default: "#EFF2F7" },
    icon: { default: "★" },
    voidIcon: { default: "★" },
    disabledVoidIcon: { default: "★" },
    showText: { type: Boolean, default: !1 },
    showScore: { type: Boolean, default: !1 },
    textColor: { default: "#1F2D3D" },
    texts: { default: () => ["极差", "失望", "一般", "满意", "惊喜"] },
    scoreTemplate: { default: "{value}" },
    size: { default: "default" }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: y }) {
    const t = n, e = y, a = _("rate"), l = E(-1), m = b(() => l.value > -1 ? l.value : t.modelValue), h = b(() => [
      a.b(),
      a.m(t.size),
      a.is("disabled", t.disabled),
      a.is("readonly", t.readonly)
    ]), w = (f) => t.disabled ? t.disabledVoidColor : f <= t.lowThreshold ? t.colors[0] : f <= t.highThreshold ? t.colors[1] || t.colors[0] : t.colors[2] || t.colors[1] || t.colors[0], V = (f) => {
      const C = m.value;
      return C >= f ? 100 : t.allowHalf && C >= f - 0.5 ? 50 : 0;
    }, F = (f) => V(f) > 0 ? w(m.value) : t.disabled ? t.disabledVoidColor : t.voidColor, $ = b(() => {
      if (t.showScore)
        return t.scoreTemplate.replace("{value}", String(t.modelValue));
      if (t.showText) {
        const f = Math.min(Math.ceil(t.modelValue || 0), t.max) - 1;
        return t.texts[Math.max(0, f)] || "";
      }
      return "";
    }), k = (f, C) => {
      if (!(t.disabled || t.readonly))
        if (t.allowHalf) {
          const L = C.currentTarget.getBoundingClientRect(), M = C.clientX - L.left < L.width / 2;
          l.value = M ? f - 0.5 : f;
        } else
          l.value = f;
    }, D = () => {
      t.disabled || t.readonly || (l.value = -1);
    }, A = (f, C) => {
      if (t.disabled || t.readonly) return;
      let R;
      if (t.allowHalf) {
        const M = C.currentTarget.getBoundingClientRect();
        R = C.clientX - M.left < M.width / 2 ? f - 0.5 : f;
      } else
        R = f;
      e("update:modelValue", R), e("change", R);
    };
    return (f, C) => (r(), d("div", {
      class: u(h.value),
      onMouseleave: D
    }, [
      i("div", {
        class: u(s(a).e("items"))
      }, [
        (r(!0), d(j, null, Q(n.max, (R) => (r(), d("span", {
          key: R,
          class: u(s(a).e("item")),
          onMousemove: (L) => k(R, L),
          onClick: (L) => A(R, L)
        }, [
          i("span", {
            class: u(s(a).e("void")),
            style: ne({ color: n.disabled ? n.disabledVoidColor : n.voidColor })
          }, z(n.disabled ? n.disabledVoidIcon : n.voidIcon), 7),
          i("span", {
            class: u([s(a).e("fill"), V(R) > 0 ? "is-active" : ""]),
            style: ne({
              color: F(R),
              clipPath: `inset(0 ${100 - V(R)}% 0 0)`
            })
          }, z(n.icon), 7)
        ], 42, ol))), 128))
      ], 2),
      n.showText || n.showScore ? (r(), d("div", {
        key: 0,
        class: u(s(a).e("text")),
        style: ne({ color: n.textColor })
      }, z($.value), 7)) : U("", !0)
    ], 34));
  }
}), il = ["value"], rl = { class: "field-type" }, dl = { class: "field-name" }, cl = { class: "field-label" }, vl = {
  key: 0,
  class: "field-required"
}, fl = ["onClick"], ml = ["onClick"], pl = ["onClick"], hl = ["onClick"], gl = { class: "modal-content" }, bl = { class: "modal-body" }, yl = { class: "edit-field" }, kl = { class: "edit-field" }, xl = { class: "edit-field" }, wl = ["value"], Vl = { class: "edit-field" }, Cl = { class: "edit-field" }, Kl = /* @__PURE__ */ J({
  name: "XDynamicFields",
  __name: "index",
  props: {
    fields: { default: () => [] },
    editable: { type: Boolean, default: !0 },
    showSort: { type: Boolean, default: !0 },
    maxFields: { default: 20 },
    availableTypes: { default: () => [
      { label: "单行文本", value: "input" },
      { label: "文本域", value: "textarea" },
      { label: "数字", value: "number" },
      { label: "下拉选择", value: "select" },
      { label: "开关", value: "switch" },
      { label: "日期", value: "date" },
      { label: "文件", value: "file" }
    ] }
  },
  emits: ["update:fields", "add", "remove", "sort", "update"],
  setup(n, { emit: y }) {
    const t = n, e = y, a = _("dynamic-fields"), l = E([]), m = E(null), h = E("input"), w = b(() => [
      a.b(),
      a.is("editable", t.editable)
    ]), V = b(() => l.value.length < t.maxFields);
    ie(() => t.fields, (p) => {
      l.value = [...p].sort((v, S) => (v.order || 0) - (S.order || 0));
    }, { immediate: !0, deep: !0 });
    const F = () => `field_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`, $ = () => {
      if (!V.value) return;
      const p = {
        id: F(),
        name: `field_${l.value.length + 1}`,
        label: "新字段",
        type: h.value,
        required: !1,
        order: l.value.length
      };
      l.value.push(p), e("add", p), e("update:fields", l.value);
    }, k = (p) => {
      const v = l.value.findIndex((S) => S.id === p);
      v !== -1 && (l.value[v], l.value.splice(v, 1), e("remove", p), e("update:fields", l.value));
    }, D = (p) => {
      const v = l.value.findIndex((S) => S.id === p);
      if (v > 0) {
        const S = l.value[v];
        l.value[v] = l.value[v - 1], l.value[v - 1] = S, f(), e("sort", l.value), e("update:fields", l.value);
      }
    }, A = (p) => {
      const v = l.value.findIndex((S) => S.id === p);
      if (v < l.value.length - 1) {
        const S = l.value[v];
        l.value[v] = l.value[v + 1], l.value[v + 1] = S, f(), e("sort", l.value), e("update:fields", l.value);
      }
    }, f = () => {
      l.value.forEach((p, v) => {
        p.order = v;
      });
    }, C = (p) => {
      m.value = { ...p };
    }, R = () => {
      if (m.value) {
        const p = l.value.findIndex((v) => v.id === m.value.id);
        p !== -1 && (l.value[p] = m.value, e("update", m.value.id, m.value), e("update:fields", l.value)), m.value = null;
      }
    }, L = () => {
      m.value = null;
    }, M = (p) => {
      const v = t.availableTypes.find((S) => S.value === p);
      return (v == null ? void 0 : v.label) || p;
    };
    return (p, v) => (r(), d("div", {
      class: u(w.value)
    }, [
      n.editable && V.value ? (r(), d("div", {
        key: 0,
        class: u(s(a).e("add"))
      }, [
        ue(i("select", {
          "onUpdate:modelValue": v[0] || (v[0] = (S) => h.value = S),
          class: u(s(a).e("type-select"))
        }, [
          (r(!0), d(j, null, Q(n.availableTypes, (S) => (r(), d("option", {
            key: S.value,
            value: S.value
          }, z(S.label), 9, il))), 128))
        ], 2), [
          [ke, h.value]
        ]),
        i("button", {
          class: u(s(a).e("add-btn")),
          onClick: $
        }, " + 添加字段 ", 2)
      ], 2)) : U("", !0),
      i("div", {
        class: u(s(a).e("list"))
      }, [
        (r(!0), d(j, null, Q(l.value, (S) => (r(), d("div", {
          key: S.id,
          class: u(s(a).e("item"))
        }, [
          i("div", {
            class: u(s(a).e("info"))
          }, [
            i("span", rl, z(M(S.type)), 1),
            i("span", dl, z(S.name), 1),
            i("span", cl, z(S.label), 1),
            S.required ? (r(), d("span", vl, "必填")) : U("", !0)
          ], 2),
          n.editable ? (r(), d("div", {
            key: 0,
            class: u(s(a).e("actions"))
          }, [
            n.showSort ? (r(), d("button", {
              key: 0,
              class: "action-btn",
              title: "上移",
              onClick: (O) => D(S.id)
            }, " ↑ ", 8, fl)) : U("", !0),
            n.showSort ? (r(), d("button", {
              key: 1,
              class: "action-btn",
              title: "下移",
              onClick: (O) => A(S.id)
            }, " ↓ ", 8, ml)) : U("", !0),
            i("button", {
              class: "action-btn",
              title: "编辑",
              onClick: (O) => C(S)
            }, " ✏️ ", 8, pl),
            i("button", {
              class: "action-btn action-btn--danger",
              title: "删除",
              onClick: (O) => k(S.id)
            }, " ✕ ", 8, hl)
          ], 2)) : U("", !0)
        ], 2))), 128))
      ], 2),
      l.value.length === 0 ? (r(), d("div", {
        key: 1,
        class: u(s(a).e("empty"))
      }, [...v[6] || (v[6] = [
        i("span", null, "暂无字段配置", -1)
      ])], 2)) : U("", !0),
      m.value ? (r(), d("div", {
        key: 2,
        class: u(s(a).e("edit-modal"))
      }, [
        i("div", gl, [
          i("div", { class: "modal-header" }, [
            v[7] || (v[7] = i("span", null, "编辑字段", -1)),
            i("button", {
              class: "close-btn",
              onClick: L
            }, "✕")
          ]),
          i("div", bl, [
            i("div", yl, [
              v[8] || (v[8] = i("label", null, "字段名称", -1)),
              ue(i("input", {
                "onUpdate:modelValue": v[1] || (v[1] = (S) => m.value.name = S),
                type: "text",
                placeholder: "变量名称"
              }, null, 512), [
                [be, m.value.name]
              ])
            ]),
            i("div", kl, [
              v[9] || (v[9] = i("label", null, "字段标签", -1)),
              ue(i("input", {
                "onUpdate:modelValue": v[2] || (v[2] = (S) => m.value.label = S),
                type: "text",
                placeholder: "显示标签"
              }, null, 512), [
                [be, m.value.label]
              ])
            ]),
            i("div", xl, [
              v[10] || (v[10] = i("label", null, "字段类型", -1)),
              ue(i("select", {
                "onUpdate:modelValue": v[3] || (v[3] = (S) => m.value.type = S)
              }, [
                (r(!0), d(j, null, Q(n.availableTypes, (S) => (r(), d("option", {
                  key: S.value,
                  value: S.value
                }, z(S.label), 9, wl))), 128))
              ], 512), [
                [ke, m.value.type]
              ])
            ]),
            i("div", Vl, [
              v[11] || (v[11] = i("label", null, "是否必填", -1)),
              i("button", {
                class: u(["switch-btn", { "is-on": m.value.required }]),
                onClick: v[4] || (v[4] = (S) => m.value.required = !m.value.required)
              }, z(m.value.required ? "必填" : "可选"), 3)
            ]),
            i("div", Cl, [
              v[12] || (v[12] = i("label", null, "占位文本", -1)),
              ue(i("input", {
                "onUpdate:modelValue": v[5] || (v[5] = (S) => m.value.placeholder = S),
                type: "text",
                placeholder: "输入提示"
              }, null, 512), [
                [be, m.value.placeholder]
              ])
            ])
          ]),
          i("div", { class: "modal-footer" }, [
            i("button", {
              class: "cancel-btn",
              onClick: L
            }, "取消"),
            i("button", {
              class: "save-btn",
              onClick: R
            }, "保存")
          ])
        ])
      ], 2)) : U("", !0)
    ], 2));
  }
});
export {
  Ll as Checkbox,
  Pl as CheckboxGroup,
  El as DatePicker,
  Kl as DynamicFields,
  Al as Form,
  Yl as FormItem,
  Sl as Input,
  Ml as InputNumber,
  Bl as Radio,
  Il as RadioButton,
  Fl as RadioGroup,
  Xl as Rate,
  zl as Select,
  Nl as Slider,
  Rl as Switch,
  Tl as Textarea,
  Hl as TimePicker,
  Ol as Transfer,
  Ul as Upload
};
