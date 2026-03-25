import { defineComponent as Z, ref as E, useSlots as Ae, computed as h, openBlock as i, createElementBlock as c, normalizeClass as u, unref as s, renderSlot as le, createElementVNode as f, toDisplayString as z, createCommentVNode as N, withDirectives as ve, vModelDynamic as ze, watch as ce, normalizeStyle as ae, vModelText as Te, inject as we, withModifiers as ue, createTextVNode as fe, provide as Ve, toRef as He, onMounted as ye, onUnmounted as ke, Fragment as j, renderList as _, createBlock as he, Teleport as Re, createVNode as xe, Transition as Be, withCtx as Fe, vShow as Ie, nextTick as Ce } from "vue";
import { useNamespace as Q, useZIndex as Le } from "@xto/core";
const Oe = ["type", "placeholder", "disabled", "readonly", "maxlength", "minlength"], nl = /* @__PURE__ */ Z({
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
  setup(n, { expose: p, emit: e }) {
    const t = n, l = e, a = Q("input"), g = E(), v = E(!1), w = E(!1), k = Ae(), L = h(
      () => t.type === "password" && t.showPassword && !t.disabled
    ), D = h(() => L.value ? w.value ? "text" : "password" : t.type), x = h({
      get: () => t.modelValue !== void 0 ? t.modelValue : t.value !== void 0 ? t.value : "",
      set: (B) => {
        l("update:modelValue", B), l("update:value", B), l("input", B);
      }
    }), C = h(() => String(x.value).length), I = h(() => [
      a.b(),
      t.size !== "default" ? a.m(t.size) : "",
      a.is("disabled", t.disabled),
      a.is("focus", v.value),
      a.is("has-prefix", t.prefixIcon || k.prefix),
      a.is("has-suffix", t.suffixIcon || k.suffix || t.clearable || L.value || t.showWordLimit)
    ]), d = (B) => {
      const K = B.target.value;
      l("change", K);
    }, V = (B) => {
      v.value = !0, l("focus", B);
    }, M = (B) => {
      v.value = !1, l("blur", B);
    }, S = () => {
      l("update:modelValue", ""), l("update:value", ""), l("clear");
    }, P = () => {
      w.value = !w.value;
    };
    return p({
      focus: () => {
        var B;
        (B = g.value) == null || B.focus();
      },
      blur: () => {
        var B;
        (B = g.value) == null || B.blur();
      },
      inputRef: g
    }), (B, K) => (i(), c("div", {
      class: u(I.value)
    }, [
      B.$slots.prefix || n.prefixIcon ? (i(), c("span", {
        key: 0,
        class: u(s(a).e("prefix"))
      }, [
        le(B.$slots, "prefix", {}, () => [
          f("span", {
            class: u(s(a).e("icon"))
          }, z(n.prefixIcon), 3)
        ])
      ], 2)) : N("", !0),
      ve(f("input", {
        ref_key: "inputRef",
        ref: g,
        "onUpdate:modelValue": K[0] || (K[0] = (X) => x.value = X),
        type: D.value,
        placeholder: n.placeholder,
        disabled: n.disabled,
        readonly: n.readonly,
        maxlength: n.maxlength,
        minlength: n.minlength,
        class: u(s(a).e("inner")),
        onChange: d,
        onFocus: V,
        onBlur: M
      }, null, 42, Oe), [
        [ze, x.value]
      ]),
      B.$slots.suffix || n.suffixIcon || n.clearable || L.value || n.showWordLimit ? (i(), c("span", {
        key: 1,
        class: u(s(a).e("suffix"))
      }, [
        le(B.$slots, "suffix", {}, () => [
          n.clearable && x.value && !n.disabled ? (i(), c("span", {
            key: 0,
            class: u([s(a).e("icon"), s(a).e("clear")]),
            onClick: S
          }, " ✕ ", 2)) : N("", !0),
          L.value ? (i(), c("span", {
            key: 1,
            class: u([s(a).e("icon"), s(a).e("password")]),
            onClick: P
          }, z(w.value ? "🙈" : "👁️"), 3)) : N("", !0),
          n.showWordLimit && n.maxlength ? (i(), c("span", {
            key: 2,
            class: u(s(a).e("count"))
          }, z(C.value) + "/" + z(n.maxlength), 3)) : N("", !0)
        ])
      ], 2)) : N("", !0)
    ], 2));
  }
}), Ne = ["disabled"], Ke = ["value", "placeholder", "disabled"], Xe = ["disabled"], sl = /* @__PURE__ */ Z({
  name: "XInputNumber",
  __name: "index",
  props: {
    modelValue: { default: void 0 },
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
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(n, { expose: p, emit: e }) {
    const t = n, l = e, a = Q("input-number"), g = E(), v = E(!1), w = E(null), k = E(t.modelValue), L = h(() => {
      if (t.precision !== void 0)
        return t.precision;
      const o = D(t.step), r = t.modelValue !== void 0 ? D(t.modelValue) : 0;
      return Math.max(o, r);
    });
    function D(o) {
      const r = o.toString(), m = r.indexOf(".");
      return m === -1 ? 0 : r.length - m - 1;
    }
    function x(o, r = L.value) {
      if (r === 0) return Math.round(o);
      let m = o.toFixed(r);
      return Number(m);
    }
    function C(o) {
      return o > t.max ? t.max : o < t.min ? t.min : o;
    }
    const I = h(() => t.modelValue), d = h(() => w.value !== null ? w.value : I.value === void 0 ? "" : x(I.value)), V = h(() => t.disabled ? !0 : I.value === void 0 ? t.min !== -1 / 0 : I.value <= t.min), M = h(() => t.disabled ? !0 : I.value === void 0 ? t.max !== 1 / 0 : I.value >= t.max), S = h(() => [
      a.b(),
      t.size !== "default" ? a.m(t.size) : "",
      a.is("disabled", t.disabled),
      a.is("focus", v.value),
      t.controlsPosition ? a.m(t.controlsPosition) : ""
    ]);
    function P() {
      if (t.disabled || M.value) return;
      const o = I.value ?? (t.min === -1 / 0 ? 0 : t.min), r = x(o + t.step), m = C(r);
      T(m);
    }
    function b() {
      if (t.disabled || V.value) return;
      const o = I.value ?? (t.min === -1 / 0 ? 0 : t.min), r = x(o - t.step), m = C(r);
      T(m);
    }
    function T(o) {
      const r = k.value;
      if (o === void 0)
        l("update:modelValue", void 0), l("change", void 0, r);
      else {
        const m = x(o), O = C(m);
        if (t.stepStrictly) {
          const te = Math.round((O - t.min) / t.step), A = x(t.min + te * t.step);
          l("update:modelValue", A), l("change", A, r);
        } else
          l("update:modelValue", O), l("change", O, r);
      }
      k.value = t.modelValue, w.value = null;
    }
    function B(o) {
      if (o === "" || o === "-")
        return;
      let r = o.replace(/[^\d.-]/g, "");
      const m = r.split(".");
      m.length > 2 && (r = m[0] + "." + m.slice(1).join("")), r.indexOf("-") > 0 && (r = r.replace(/-/g, "")), r.lastIndexOf("-") > 0 && (r = "-" + r.replace(/-/g, ""));
      const O = Number(r);
      if (!isNaN(O))
        return O;
    }
    function K(o) {
      const r = o.target.value;
      w.value = r;
    }
    function X(o) {
      if (v.value = !1, w.value !== null) {
        const r = B(w.value);
        r === void 0 ? t.valueOnClear !== null ? T(t.valueOnClear) : w.value = null : T(r);
      }
      l("blur", o);
    }
    function q(o) {
      v.value = !0, k.value = t.modelValue, l("focus", o);
    }
    function J(o) {
      var r;
      if (!t.disabled)
        switch (o.key) {
          case "ArrowUp":
            o.preventDefault(), P();
            break;
          case "ArrowDown":
            o.preventDefault(), b();
            break;
          case "Enter":
            (r = g.value) == null || r.blur();
            break;
        }
    }
    function $() {
      w.value = null, t.valueOnClear !== null && t.valueOnClear !== void 0 ? T(t.valueOnClear) : (l("update:modelValue", void 0), l("change", void 0, k.value), k.value = void 0);
    }
    function R() {
      var o;
      (o = g.value) == null || o.focus();
    }
    function y() {
      var o;
      (o = g.value) == null || o.blur();
    }
    return ce(() => t.modelValue, (o) => {
      k.value = o, w.value = null;
    }, { immediate: !0 }), p({
      focus: R,
      blur: y,
      clear: $,
      increase: P,
      decrease: b
    }), (o, r) => (i(), c("div", {
      class: u(S.value)
    }, [
      n.controls ? (i(), c("button", {
        key: 0,
        type: "button",
        class: u([s(a).e("decrease"), s(a).is("disabled", V.value)]),
        disabled: V.value,
        onClick: b
      }, " − ", 10, Ne)) : N("", !0),
      f("div", {
        class: u(s(a).e("wrapper"))
      }, [
        f("input", {
          ref_key: "inputRef",
          ref: g,
          value: d.value,
          placeholder: n.placeholder,
          disabled: n.disabled,
          class: u(s(a).e("inner")),
          type: "text",
          autocomplete: "off",
          onInput: K,
          onFocus: q,
          onBlur: X,
          onKeydown: J
        }, null, 42, Ke)
      ], 2),
      n.controls ? (i(), c("button", {
        key: 1,
        type: "button",
        class: u([s(a).e("increase"), s(a).is("disabled", M.value)]),
        disabled: M.value,
        onClick: P
      }, " + ", 10, Xe)) : N("", !0)
    ], 2));
  }
}), Ue = ["placeholder", "disabled", "readonly", "maxlength", "minlength", "rows"], ul = /* @__PURE__ */ Z({
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
  setup(n, { expose: p, emit: e }) {
    const t = n, l = e, a = Q("textarea"), g = E(), v = E(!1), w = h({
      get: () => t.modelValue !== void 0 ? t.modelValue : t.value !== void 0 ? t.value : "",
      set: (S) => {
        l("update:modelValue", S), l("update:value", S), l("input", S);
      }
    }), k = h(() => String(w.value).length), L = h(() => {
      const S = {};
      if (t.resize && (S.resize = t.resize), t.autosize && (S.minHeight = "auto", typeof t.autosize == "object")) {
        const P = t.autosize.minRows || 1, b = t.autosize.maxRows;
        S.minHeight = `${P * 22 + 12}px`, b && (S.maxHeight = `${b * 22 + 12}px`);
      }
      return S;
    }), D = h(() => [
      a.b(),
      a.is("disabled", t.disabled),
      a.is("focus", v.value),
      a.is("exceed", t.maxlength && k.value > t.maxlength)
    ]), x = () => {
      t.autosize && g.value && (g.value.style.height = "auto", g.value.style.height = `${g.value.scrollHeight}px`);
    }, C = (S) => {
      const P = S.target.value;
      l("change", P);
    }, I = (S) => {
      v.value = !0, l("focus", S);
    }, d = (S) => {
      v.value = !1, l("blur", S);
    };
    return p({
      focus: () => {
        var S;
        (S = g.value) == null || S.focus();
      },
      blur: () => {
        var S;
        (S = g.value) == null || S.blur();
      },
      textareaRef: g
    }), (S, P) => (i(), c("div", {
      class: u(D.value),
      style: ae(n.disabled ? void 0 : { cursor: "text" })
    }, [
      ve(f("textarea", {
        ref_key: "textareaRef",
        ref: g,
        "onUpdate:modelValue": P[0] || (P[0] = (b) => w.value = b),
        placeholder: n.placeholder,
        disabled: n.disabled,
        readonly: n.readonly,
        maxlength: n.maxlength,
        minlength: n.minlength,
        rows: n.rows,
        style: ae(L.value),
        class: u(s(a).e("inner")),
        onInput: x,
        onChange: C,
        onFocus: I,
        onBlur: d
      }, null, 46, Ue), [
        [Te, w.value]
      ]),
      n.showWordLimit && n.maxlength ? (i(), c("span", {
        key: 0,
        class: u(s(a).e("count"))
      }, z(k.value) + "/" + z(n.maxlength), 3)) : N("", !0)
    ], 6));
  }
}), ol = /* @__PURE__ */ Z({
  name: "XSwitch",
  __name: "index",
  props: {
    modelValue: { type: [Boolean, Number, String], default: !1 },
    disabled: { type: Boolean, default: !1 },
    width: { default: 40 },
    activeColor: { default: "#409eff" },
    inactiveColor: { default: "#dcdfe6" },
    activeValue: { type: [Boolean, Number, String], default: !0 },
    inactiveValue: { type: [Boolean, Number, String], default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: p }) {
    const e = n, t = p, l = Q("switch"), a = h(() => e.modelValue === e.activeValue), g = h(() => [
      l.b(),
      l.is("disabled", e.disabled),
      l.is("checked", a.value)
    ]), v = h(() => ({
      width: typeof e.width == "number" ? `${e.width}px` : e.width,
      height: "20px",
      backgroundColor: a.value ? e.activeColor : e.inactiveColor
    })), w = () => {
      if (e.disabled) return;
      const k = a.value ? e.inactiveValue : e.activeValue;
      t("update:modelValue", k), t("change", k);
    };
    return (k, L) => (i(), c("span", {
      class: u(g.value),
      onClick: w
    }, [
      f("span", {
        class: u(s(l).e("core")),
        style: ae(v.value)
      }, null, 6),
      k.$slots.default ? (i(), c("span", {
        key: 0,
        class: u(s(l).e("text"))
      }, [
        le(k.$slots, "default")
      ], 2)) : N("", !0)
    ], 2));
  }
}), We = ["checked", "disabled", "name", "value"], rl = /* @__PURE__ */ Z({
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
  setup(n, { emit: p }) {
    const e = n, t = p, l = Q("radio"), a = we("radioGroup", null), g = h(() => !!a), v = h(() => g.value ? a.modelValue.value : e.modelValue), w = h(() => e.value ?? e.label), k = h(() => v.value === w.value), L = h(() => e.disabled || g.value && a.disabled), D = h(() => e.name || (g.value ? a.name : void 0)), x = h(() => [
      l.b(),
      l.is("checked", k.value),
      l.is("disabled", L.value)
    ]), C = () => {
      L.value || (g.value ? a.changeValue(w.value) : (t("update:modelValue", w.value), t("change", w.value)));
    };
    return (I, d) => (i(), c("label", {
      class: u(x.value),
      onClick: ue(C, ["prevent"])
    }, [
      f("span", {
        class: u(s(l).e("input"))
      }, [
        f("input", {
          type: "radio",
          checked: k.value,
          disabled: L.value,
          name: D.value,
          value: w.value
        }, null, 8, We)
      ], 2),
      I.$slots.default || n.label ? (i(), c("span", {
        key: 0,
        class: u(s(l).e("label"))
      }, [
        le(I.$slots, "default", {}, () => [
          fe(z(n.label), 1)
        ])
      ], 2)) : N("", !0)
    ], 2));
  }
}), il = /* @__PURE__ */ Z({
  name: "XRadioGroup",
  __name: "group",
  props: {
    modelValue: { type: [String, Number, Boolean], default: "" },
    disabled: { type: Boolean, default: !1 },
    name: {}
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: p }) {
    const e = n, t = p, l = Q("radio-group"), a = (g) => {
      t("update:modelValue", g), t("change", g);
    };
    return Ve("radioGroup", {
      modelValue: h(() => e.modelValue),
      name: e.name || `radio-group-${Date.now()}`,
      disabled: e.disabled,
      changeValue: a
    }), (g, v) => (i(), c("div", {
      class: u(s(l).b()),
      role: "radiogroup"
    }, [
      le(g.$slots, "default")
    ], 2));
  }
}), Ge = ["checked", "disabled", "value"], cl = /* @__PURE__ */ Z({
  name: "XRadioButton",
  __name: "button",
  props: {
    value: { type: [String, Number, Boolean] },
    label: {},
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: p }) {
    const e = n, t = Q("radio-button"), l = we("radioGroup", null), a = h(() => !!l), g = h(() => a.value ? l.modelValue.value : null), v = h(() => e.value ?? e.label), w = h(() => g.value === v.value), k = h(() => e.disabled || a.value && l.disabled), L = h(() => [
      t.b(),
      t.is("active", w.value),
      t.is("disabled", k.value)
    ]), D = () => {
      k.value || a.value && l.changeValue(v.value);
    };
    return (x, C) => (i(), c("label", {
      class: u(L.value),
      onClick: ue(D, ["prevent"])
    }, [
      f("input", {
        type: "radio",
        checked: w.value,
        disabled: k.value,
        value: v.value,
        class: u(s(t).e("input"))
      }, null, 10, Ge),
      f("span", {
        class: u(s(t).e("inner"))
      }, [
        le(x.$slots, "default", {}, () => [
          fe(z(n.label), 1)
        ])
      ], 2)
    ], 2));
  }
}), qe = ["checked", "disabled", "name", "value"], dl = /* @__PURE__ */ Z({
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
  setup(n, { emit: p }) {
    const e = n, t = p, l = Q("checkbox"), a = we("checkboxGroup", null), g = h(() => !!a), v = h(() => e.value ?? e.label), w = h(() => g.value ? a.modelValue.value.includes(v.value) : Array.isArray(e.modelValue) ? e.modelValue.includes(v.value) : !!e.modelValue), k = h(() => {
      if (e.disabled) return !0;
      if (g.value) {
        const x = a.disabled, C = a.min > 0 && a.modelValue.value.length <= a.min, I = a.max > 0 && a.modelValue.value.length >= a.max;
        return w.value && C || !w.value && I ? !0 : x;
      }
      return !1;
    }), L = h(() => [
      l.b(),
      l.is("checked", w.value),
      l.is("disabled", k.value),
      l.is("indeterminate", e.indeterminate && !w.value)
    ]), D = () => {
      if (!k.value)
        if (g.value)
          a.changeValue(v.value);
        else {
          let x;
          if (Array.isArray(e.modelValue)) {
            const C = e.modelValue.indexOf(v.value);
            C > -1 ? x = [...e.modelValue.slice(0, C), ...e.modelValue.slice(C + 1)] : x = [...e.modelValue, v.value];
          } else
            x = !e.modelValue;
          t("update:modelValue", x), t("change", x);
        }
    };
    return (x, C) => (i(), c("label", {
      class: u(L.value),
      onClick: ue(D, ["prevent"])
    }, [
      f("span", {
        class: u(s(l).e("input"))
      }, [
        f("input", {
          type: "checkbox",
          checked: w.value,
          disabled: k.value,
          name: n.name,
          value: v.value
        }, null, 8, qe)
      ], 2),
      x.$slots.default || n.label !== void 0 ? (i(), c("span", {
        key: 0,
        class: u(s(l).e("label"))
      }, [
        le(x.$slots, "default", {}, () => [
          fe(z(n.label), 1)
        ])
      ], 2)) : N("", !0)
    ], 2));
  }
}), vl = /* @__PURE__ */ Z({
  name: "XCheckboxGroup",
  __name: "group",
  props: {
    modelValue: { default: () => [] },
    disabled: { type: Boolean, default: !1 },
    min: { default: 0 },
    max: { default: 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: p }) {
    const e = n, t = p, l = Q("checkbox-group"), a = (g) => {
      const v = [...e.modelValue], w = v.indexOf(g);
      w > -1 ? v.splice(w, 1) : v.push(g), t("update:modelValue", v), t("change", v);
    };
    return Ve("checkboxGroup", {
      modelValue: h(() => e.modelValue),
      disabled: e.disabled,
      min: e.min,
      max: e.max,
      changeValue: a
    }), (g, v) => (i(), c("div", {
      class: u(s(l).b()),
      role: "group"
    }, [
      le(g.$slots, "default")
    ], 2));
  }
}), fl = /* @__PURE__ */ Z({
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
  setup(n, { expose: p, emit: e }) {
    const t = n, l = e, a = Q("form"), g = E([]), v = h(() => t.layout === "inline" || t.inline), w = h(() => t.layout === "vertical" || t.labelPosition === "top"), k = h(() => [
      a.b(),
      a.m(`label-${w.value ? "top" : t.labelPosition}`),
      a.is("inline", v.value),
      a.is("vertical", w.value)
    ]), L = h(() => ({ width: typeof t.labelWidth == "number" ? `${t.labelWidth}px` : t.labelWidth })), D = (b) => {
      g.value.push(b);
    }, x = (b) => {
      const T = g.value.indexOf(b);
      T > -1 && g.value.splice(T, 1);
    }, C = async () => {
      let b = !0;
      for (const T of g.value)
        await T.validate() || (b = !1);
      return b;
    }, I = async (b) => {
      const T = Array.isArray(b) ? b : [b];
      let B = !0;
      for (const K of g.value)
        T.includes(K.prop) && (await K.validate() || (B = !1));
      return B;
    }, d = () => {
      g.value.forEach((b) => {
        b.resetField();
      });
    }, V = (b) => {
      if (b) {
        const T = Array.isArray(b) ? b : [b];
        g.value.forEach((B) => {
          T.includes(B.prop) && B.clearValidate();
        });
      } else
        g.value.forEach((T) => {
          T.clearValidate();
        });
    }, M = (b) => {
      console.log("[XForm] handleSubmit triggered", b), b.preventDefault(), l("submit");
    }, S = (b) => {
      console.log("[XForm] handleReset triggered", b), b.preventDefault(), d(), l("reset");
    }, P = He(t, "model");
    return Ve("form", {
      model: P,
      rules: t.rules,
      labelWidth: t.labelWidth,
      labelPosition: w.value ? "top" : t.labelPosition,
      disabled: t.disabled,
      size: t.size,
      labelStyle: L,
      addField: D,
      removeField: x,
      emit: l
    }), p({
      validate: C,
      validateField: I,
      resetFields: d,
      clearValidate: V
    }), (b, T) => (i(), c("form", {
      class: u(k.value),
      onSubmit: M,
      onReset: S
    }, [
      le(b.$slots, "default")
    ], 34));
  }
}), ml = /* @__PURE__ */ Z({
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
  setup(n, { expose: p }) {
    const e = n, t = Q("form-item"), l = we("form", null), a = E(""), g = E(""), v = h(() => e.required ? !0 : w().some((M) => M.required)), w = () => {
      const V = [];
      return e.rules && V.push(...e.rules), l && e.prop && l.rules[e.prop] && V.push(...l.rules[e.prop]), V;
    }, k = () => {
      var V;
      if (!(!l || !e.prop))
        return (V = l.model.value) == null ? void 0 : V[e.prop];
    }, L = (V) => {
      !l || !e.prop || l.model.value && (l.model.value[e.prop] = V);
    }, D = async (V) => {
      const M = w();
      if (M.length === 0)
        return a.value = "valid", !0;
      const S = k();
      let P = !0, b = "";
      for (const T of M)
        if (!(V && T.trigger && T.trigger !== V)) {
          if (T.required && (S == null || S === "" || Array.isArray(S) && S.length === 0)) {
            P = !1, b = T.message || "该字段为必填项";
            break;
          }
          if (T.min !== void 0 || T.max !== void 0) {
            const B = typeof S == "string" ? S.length : 0;
            if (T.min !== void 0 && B < T.min) {
              P = !1, b = T.message || `长度不能小于 ${T.min} 个字符`;
              break;
            }
            if (T.max !== void 0 && B > T.max) {
              P = !1, b = T.message || `长度不能大于 ${T.max} 个字符`;
              break;
            }
          }
          if (T.pattern && S && !T.pattern.test(S)) {
            P = !1, b = T.message || "格式不正确";
            break;
          }
          if (T.validator)
            try {
              await new Promise((B, K) => {
                T.validator(T, S, (X) => {
                  X ? K(X) : B();
                });
              });
            } catch (B) {
              P = !1, b = B.message || T.message || "验证失败";
              break;
            }
        }
      return a.value = P ? "valid" : "invalid", g.value = b, l && e.prop && l.emit("validate", e.prop, P, b), P;
    }, x = () => {
      L(void 0), C();
    }, C = () => {
      a.value = "", g.value = "";
    }, I = h(() => [
      t.b(),
      t.is("required", v.value),
      t.is("error", a.value === "invalid"),
      t.is("success", a.value === "valid")
    ]), d = h(() => {
      const V = e.labelWidth ?? (l == null ? void 0 : l.labelWidth) ?? "100px";
      return { width: typeof V == "number" ? `${V}px` : V };
    });
    return ce(() => k(), () => {
      a.value === "invalid" && D("change");
    }), ye(() => {
      l && e.prop && l.addField({
        prop: e.prop,
        validate: D,
        resetField: x,
        clearValidate: C
      });
    }), ke(() => {
      l && e.prop && l.removeField({
        prop: e.prop,
        validate: D,
        resetField: x,
        clearValidate: C
      });
    }), p({
      validate: D,
      resetField: x,
      clearValidate: C
    }), (V, M) => (i(), c("div", {
      class: u(I.value)
    }, [
      n.label ? (i(), c("label", {
        key: 0,
        class: u(s(t).e("label")),
        style: ae(d.value)
      }, z(n.label), 7)) : N("", !0),
      f("div", {
        class: u(s(t).e("content"))
      }, [
        le(V.$slots, "default"),
        n.showMessage !== !1 && a.value === "invalid" ? (i(), c("div", {
          key: 0,
          class: u(s(t).e("error"))
        }, z(g.value), 3)) : N("", !0)
      ], 2)
    ], 2));
  }
});
function je(n, p) {
  return new Date(n, p + 1, 0).getDate();
}
function Ze(n, p) {
  return new Date(n, p, 1).getDay();
}
function de(n, p) {
  return !n || !p ? !1 : n.getFullYear() === p.getFullYear() && n.getMonth() === p.getMonth() && n.getDate() === p.getDate();
}
function Qe(n, p) {
  return !n || !p ? !1 : n.getFullYear() === p.getFullYear() && n.getMonth() === p.getMonth();
}
function Pe(n, p, e) {
  if (!p || !e) return !1;
  const t = n.getTime();
  return t >= p.getTime() && t <= e.getTime();
}
function Je(n, p, e = 0) {
  const t = [], l = je(n, p), a = Ze(n, p);
  let g = new Date(n, p, 1);
  const v = (a - e + 7) % 7;
  g.setDate(1 - v);
  let w = [], k = new Date(g);
  for (; (k.getMonth() <= p || k.getMonth() === p && k.getDate() <= l) && (w.push(new Date(k)), !(w.length === 7 && (t.push(w), w = [], k.getMonth() > p) || (k.setDate(k.getDate() + 1), t.length > 7))); )
    ;
  return w.length > 0 && t.push(w), t;
}
function ie(n, p = "YYYY-MM-DD") {
  if (!n) return "";
  const e = n.getFullYear(), t = n.getMonth() + 1, l = n.getDate(), a = n.getHours(), g = n.getMinutes(), v = n.getSeconds();
  return p.replace(/YYYY/g, String(e)).replace(/YY/g, String(e).slice(-2)).replace(/MM/g, String(t).padStart(2, "0")).replace(/M/g, String(t)).replace(/DD/g, String(l).padStart(2, "0")).replace(/D/g, String(l)).replace(/HH/g, String(a).padStart(2, "0")).replace(/H/g, String(a)).replace(/mm/g, String(g).padStart(2, "0")).replace(/m/g, String(g)).replace(/ss/g, String(v).padStart(2, "0")).replace(/s/g, String(v));
}
function be(n) {
  if (!n) return null;
  if (n instanceof Date)
    return isNaN(n.getTime()) ? null : n;
  if (typeof n == "number")
    return new Date(n);
  const p = new Date(n);
  if (isNaN(p.getTime())) {
    const e = n.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
    return e ? new Date(parseInt(e[1]), parseInt(e[2]) - 1, parseInt(e[3])) : null;
  }
  return p;
}
function _e(n) {
  const p = new Date(n);
  return p.setMonth(p.getMonth() - 1), p;
}
function et(n) {
  const p = new Date(n);
  return p.setMonth(p.getMonth() + 1), p;
}
function tt(n) {
  const p = new Date(n);
  return p.setFullYear(p.getFullYear() - 1), p;
}
function lt(n) {
  const p = new Date(n);
  return p.setFullYear(p.getFullYear() + 1), p;
}
function Ee(n) {
  const p = Math.floor(n / 10) * 10;
  return [p, p + 9];
}
function Se(n) {
  const p = new Date(n);
  return p.setHours(0, 0, 0, 0), p;
}
function at(n, p, e, t) {
  if (p && p(n))
    return !0;
  const l = Se(n).getTime();
  return !!(e && l < Se(e).getTime() || t && l > Se(t).getTime());
}
const nt = [
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
], st = ["日", "一", "二", "三", "四", "五", "六"], ut = ["onClick", "onMouseenter"], ot = /* @__PURE__ */ Z({
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
  setup(n, { emit: p }) {
    const e = n, t = p, l = Q("date-table"), a = E(null), g = h(() => e.viewedMonth.getFullYear()), v = h(() => e.viewedMonth.getMonth()), w = h(() => Je(g.value, v.value, 0)), k = (b) => e.modelValue ? de(b, e.modelValue) : !1, L = (b) => de(b, /* @__PURE__ */ new Date()), D = (b) => Qe(b, e.viewedMonth), x = (b) => {
      if (e.selectionMode !== "range") return !1;
      const { startDate: T, endDate: B, selecting: K } = e.rangeState || {};
      if (K && T) {
        const X = a.value;
        if (X) {
          const q = T < X ? T : X, J = T < X ? X : T;
          return Pe(b, q, J);
        }
        return de(b, T);
      }
      return T && B ? Pe(b, T, B) : !1;
    }, C = (b) => {
      if (e.selectionMode !== "range") return !1;
      const { startDate: T, selecting: B } = e.rangeState || {};
      return B && T && a.value ? de(b, T < a.value ? T : a.value) : T ? de(b, T) : !1;
    }, I = (b) => {
      if (e.selectionMode !== "range") return !1;
      const { endDate: T, selecting: B } = e.rangeState || {};
      if (B && a.value) {
        const { startDate: K } = e.rangeState || {};
        return de(b, K < a.value ? a.value : K);
      }
      return T ? de(b, T) : !1;
    }, d = (b) => at(b, e.disabledDate, e.minDate, e.maxDate), V = (b) => [
      l.e("cell"),
      l.is("selected", k(b)),
      l.is("today", L(b)),
      l.is("disabled", d(b)),
      l.is("in-range", x(b)),
      l.is("range-start", C(b)),
      l.is("range-end", I(b)),
      l.is("prev-month", !D(b) && b.getMonth() < v.value),
      l.is("next-month", !D(b) && b.getMonth() > v.value)
    ], M = (b) => {
      d(b) || (e.selectionMode === "range" ? t("range-select", b) : t("pick", b));
    }, S = (b) => {
      a.value = b;
    }, P = () => {
      a.value = null;
    };
    return (b, T) => (i(), c("table", {
      class: u(s(l).b()),
      cellspacing: "0",
      cellpadding: "0"
    }, [
      f("thead", null, [
        f("tr", null, [
          (i(!0), c(j, null, _(s(st), (B) => (i(), c("th", {
            key: B,
            class: u(s(l).e("header-cell"))
          }, z(B), 3))), 128))
        ])
      ]),
      f("tbody", null, [
        (i(!0), c(j, null, _(w.value, (B, K) => (i(), c("tr", { key: K }, [
          (i(!0), c(j, null, _(B, (X, q) => (i(), c("td", {
            key: q,
            class: u(V(X)),
            onClick: (J) => M(X),
            onMouseenter: (J) => S(X),
            onMouseleave: P
          }, [
            f("span", {
              class: u(s(l).e("cell-text"))
            }, z(X.getDate()), 3)
          ], 42, ut))), 128))
        ]))), 128))
      ])
    ], 2));
  }
}), rt = ["onClick"], it = /* @__PURE__ */ Z({
  name: "XMonthTable",
  __name: "MonthTable",
  props: {
    modelValue: { default: null },
    viewedYear: { default: () => (/* @__PURE__ */ new Date()).getFullYear() },
    disabledDate: {}
  },
  emits: ["pick"],
  setup(n, { emit: p }) {
    const e = n, t = p, l = Q("month-table");
    h(() => e.modelValue ? e.modelValue.getMonth() : -1);
    const a = (D) => e.modelValue ? e.modelValue.getFullYear() === e.viewedYear && e.modelValue.getMonth() === D : !1, g = (D) => {
      const x = /* @__PURE__ */ new Date();
      return x.getFullYear() === e.viewedYear && x.getMonth() === D;
    }, v = (D) => {
      if (!e.disabledDate) return !1;
      const x = new Date(e.viewedYear, D, 1), C = new Date(e.viewedYear, D + 1, 0);
      return e.disabledDate(x) && e.disabledDate(C);
    }, w = (D) => [
      l.e("cell"),
      l.is("selected", a(D)),
      l.is("current", g(D)),
      l.is("disabled", v(D))
    ], k = (D) => {
      v(D) || t("pick", D);
    }, L = h(() => {
      const D = [];
      for (let x = 0; x < 12; x += 3)
        D.push([x, x + 1, x + 2]);
      return D;
    });
    return (D, x) => (i(), c("table", {
      class: u(s(l).b()),
      cellspacing: "0",
      cellpadding: "0"
    }, [
      f("tbody", null, [
        (i(!0), c(j, null, _(L.value, (C, I) => (i(), c("tr", { key: I }, [
          (i(!0), c(j, null, _(C, (d) => (i(), c("td", {
            key: d,
            class: u(w(d)),
            onClick: (V) => k(d)
          }, [
            f("span", {
              class: u(s(l).e("cell-text"))
            }, z(s(nt)[d]), 3)
          ], 10, rt))), 128))
        ]))), 128))
      ])
    ], 2));
  }
}), ct = ["onClick"], dt = /* @__PURE__ */ Z({
  name: "XYearTable",
  __name: "YearTable",
  props: {
    modelValue: { default: null },
    viewedYear: { default: () => (/* @__PURE__ */ new Date()).getFullYear() },
    disabledDate: {}
  },
  emits: ["pick"],
  setup(n, { emit: p }) {
    const e = n, t = p, l = Q("year-table"), a = h(() => (/* @__PURE__ */ new Date()).getFullYear()), g = h(() => Ee(e.viewedYear)), v = h(() => {
      const [d] = g.value, V = [];
      V.push(d - 1);
      for (let M = 0; M < 10; M++)
        V.push(d + M);
      return V.push(d + 10), V;
    }), w = h(() => {
      const d = [];
      for (let V = 0; V < v.value.length; V += 3)
        d.push(v.value.slice(V, V + 3));
      return d;
    }), k = (d) => e.modelValue ? e.modelValue.getFullYear() === d : !1, L = (d) => d === a.value, D = (d) => {
      const [V, M] = g.value;
      return d >= V && d <= M;
    }, x = (d) => {
      if (!e.disabledDate) return !1;
      const V = new Date(d, 0, 1), M = new Date(d, 11, 31);
      return e.disabledDate(V) && e.disabledDate(M);
    }, C = (d) => [
      l.e("cell"),
      l.is("selected", k(d)),
      l.is("current", L(d)),
      l.is("disabled", x(d)),
      l.is("in-decade", D(d))
    ], I = (d) => {
      x(d) || t("pick", d);
    };
    return (d, V) => (i(), c("table", {
      class: u(s(l).b()),
      cellspacing: "0",
      cellpadding: "0"
    }, [
      f("tbody", null, [
        (i(!0), c(j, null, _(w.value, (M, S) => (i(), c("tr", { key: S }, [
          (i(!0), c(j, null, _(M, (P) => (i(), c("td", {
            key: P,
            class: u(C(P)),
            onClick: (b) => I(P)
          }, [
            f("span", {
              class: u(s(l).e("cell-text"))
            }, z(P), 3)
          ], 10, ct))), 128))
        ]))), 128))
      ])
    ], 2));
  }
}), vt = ["placeholder", "disabled", "value"], ft = ["placeholder", "disabled", "value"], mt = ["placeholder", "disabled", "value"], pl = /* @__PURE__ */ Z({
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
    maxDate: {}
  },
  emits: ["update:modelValue", "update:value", "change", "focus", "blur", "clear"],
  setup(n, { expose: p, emit: e }) {
    const t = n, l = e, a = Q("date-picker"), g = E(!1), v = E(2e3), w = E(), k = () => t.modelValue !== void 0 ? t.modelValue : t.value !== void 0 ? t.value : null, L = (H) => {
      l("update:modelValue", H), l("update:value", H), l("change", H);
    }, D = E(), x = E(), C = E({
      top: "0px",
      left: "0px"
    }), I = () => Le().next(), d = E("date"), V = E(/* @__PURE__ */ new Date()), M = E({
      selecting: !1,
      startDate: null,
      endDate: null
    }), S = h(() => {
      const H = k();
      if (!H) return null;
      if (t.type === "daterange") {
        const [G, se] = H;
        return [be(G), be(se)];
      }
      return be(H);
    }), P = h(() => !S.value || Array.isArray(S.value) ? "" : ie(S.value, t.format)), b = h(() => {
      if (!Array.isArray(S.value)) return "";
      const [H] = S.value;
      return H ? ie(H, t.format) : "";
    }), T = h(() => {
      if (!Array.isArray(S.value)) return "";
      const [, H] = S.value;
      return H ? ie(H, t.format) : "";
    }), B = h(() => Array.isArray(S.value) ? null : S.value), K = h(() => V.value.getFullYear()), X = h(() => V.value.getMonth()), q = h(() => Ee(K.value)), J = h(() => d.value === "year" ? `${q.value[0]} 年 - ${q.value[1]} 年` : d.value === "month" ? `${K.value} 年` : `${K.value} 年 ${X.value + 1} 月`), $ = h(() => [
      a.b(),
      a.m(t.size),
      a.is("disabled", t.disabled),
      a.is("range", t.type === "daterange")
    ]), R = h(() => [
      a.e("input"),
      a.is("focus", g.value),
      a.is("has-value", !!P.value || !!(b.value || T.value))
    ]), y = () => {
      t.disabled || t.readonly || (g.value ? r() : o());
    }, o = () => {
      g.value = !0, v.value = I(), Ce(() => {
        if (w.value && D.value) {
          const H = w.value.getBoundingClientRect(), G = D.value.getBoundingClientRect();
          let se = H.bottom + 8, De = H.left;
          De + G.width > window.innerWidth && (De = window.innerWidth - G.width - 8), se + G.height > window.innerHeight && (se = H.top - G.height - 8), C.value = {
            top: `${se}px`,
            left: `${De}px`
          };
        }
      }), l("focus", {});
    }, r = () => {
      g.value = !1, d.value = "date", l("blur", {});
    }, m = (H) => {
      if (t.type === "date") {
        const G = t.valueFormat ? ie(H, t.valueFormat) : H;
        L(G), r();
      }
    }, O = (H) => {
      if (!M.value.selecting)
        M.value.selecting = !0, M.value.startDate = H, M.value.endDate = null;
      else {
        M.value.selecting = !1, M.value.startDate && H < M.value.startDate ? [M.value.startDate, M.value.endDate] = [H, M.value.startDate] : M.value.endDate = H;
        const G = t.valueFormat ? ie(M.value.startDate, t.valueFormat) : M.value.startDate, se = t.valueFormat ? ie(M.value.endDate, t.valueFormat) : M.value.endDate;
        L([G, se]), r();
      }
    }, te = (H) => {
      if (V.value = new Date(K.value, H, 1), t.type === "month") {
        const G = new Date(K.value, H, 1), se = t.valueFormat ? ie(G, t.valueFormat) : G;
        L(se), r();
      } else
        d.value = "date";
    }, A = (H) => {
      if (V.value = new Date(H, X.value, 1), t.type === "year") {
        const G = new Date(H, 0, 1), se = t.valueFormat ? ie(G, t.valueFormat) : G;
        L(se), r();
      } else
        d.value = "month";
    }, ee = () => {
      V.value = _e(V.value);
    }, Y = () => {
      V.value = et(V.value);
    }, re = () => {
      d.value === "year" ? V.value = new Date(K.value - 10, X.value, 1) : V.value = tt(V.value);
    }, ge = () => {
      d.value === "year" ? V.value = new Date(K.value + 10, X.value, 1) : V.value = lt(V.value);
    }, F = () => {
      d.value = "month";
    }, U = () => {
      d.value = "year";
    }, W = () => {
      L(null), l("clear"), M.value = {
        selecting: !1,
        startDate: null,
        endDate: null
      };
    }, ne = (H) => {
      if (!w.value) return;
      const G = H.target;
      w.value.contains(G) || D.value && D.value.contains(G) || r();
    };
    ce(
      k,
      (H) => {
        if (H)
          if (Array.isArray(S.value)) {
            const [G] = S.value;
            G && (V.value = new Date(G));
          } else S.value && (V.value = new Date(S.value));
      },
      { immediate: !0 }
    ), ce(g, (H) => {
      H && (d.value = "date", t.type === "daterange" && (M.value = {
        selecting: !1,
        startDate: Array.isArray(S.value) ? S.value[0] : null,
        endDate: Array.isArray(S.value) ? S.value[1] : null
      }));
    });
    const oe = (H) => {
      H.key === "Escape" && r();
    };
    return ye(() => {
      document.addEventListener("click", ne), document.addEventListener("keydown", oe);
    }), ke(() => {
      document.removeEventListener("click", ne), document.removeEventListener("keydown", oe);
    }), p({
      focus: () => {
        var H;
        return (H = x.value) == null ? void 0 : H.focus();
      },
      blur: () => {
        var H;
        return (H = x.value) == null ? void 0 : H.blur();
      }
    }), (H, G) => (i(), c("div", {
      ref_key: "pickerRef",
      ref: w,
      class: u($.value)
    }, [
      n.type !== "daterange" ? (i(), c("div", {
        key: 0,
        class: u(R.value),
        onClick: y
      }, [
        f("input", {
          ref_key: "inputRef",
          ref: x,
          type: "text",
          placeholder: n.placeholder,
          disabled: n.disabled,
          readonly: !0,
          value: P.value,
          class: u(s(a).e("input-inner"))
        }, null, 10, vt),
        f("span", {
          class: u(s(a).e("suffix"))
        }, [
          n.clearable && P.value && !n.disabled ? (i(), c("span", {
            key: 0,
            class: u(s(a).e("clear")),
            onClick: ue(W, ["stop"])
          }, " ✕ ", 2)) : (i(), c("span", {
            key: 1,
            class: u(s(a).e("icon"))
          }, "📅", 2))
        ], 2)
      ], 2)) : (i(), c("div", {
        key: 1,
        class: u(R.value),
        onClick: y
      }, [
        f("input", {
          type: "text",
          placeholder: n.startPlaceholder,
          disabled: n.disabled,
          readonly: !0,
          value: b.value,
          class: u(s(a).e("input-inner"))
        }, null, 10, ft),
        f("span", {
          class: u(s(a).e("separator"))
        }, "至", 2),
        f("input", {
          type: "text",
          placeholder: n.endPlaceholder,
          disabled: n.disabled,
          readonly: !0,
          value: T.value,
          class: u(s(a).e("input-inner"))
        }, null, 10, mt),
        f("span", {
          class: u(s(a).e("suffix"))
        }, [
          n.clearable && (b.value || T.value) && !n.disabled ? (i(), c("span", {
            key: 0,
            class: u(s(a).e("clear")),
            onClick: ue(W, ["stop"])
          }, " ✕ ", 2)) : (i(), c("span", {
            key: 1,
            class: u(s(a).e("icon"))
          }, "📅", 2))
        ], 2)
      ], 2)),
      (i(), he(Re, { to: "body" }, [
        xe(Be, { name: "fade" }, {
          default: Fe(() => [
            ve(f("div", {
              ref_key: "popperRef",
              ref: D,
              class: u(s(a).e("popper")),
              style: ae({ zIndex: v.value, ...C.value })
            }, [
              f("div", {
                class: u(s(a).e("header"))
              }, [
                f("button", {
                  type: "button",
                  class: u(s(a).e("prev-btn")),
                  onClick: G[0] || (G[0] = (se) => d.value === "date" ? ee() : re())
                }, " ‹ ", 2),
                f("div", {
                  class: u(s(a).e("header-title"))
                }, [
                  d.value === "year" ? (i(), c("span", {
                    key: 0,
                    onClick: G[1] || (G[1] = (se) => d.value = "month")
                  }, z(J.value), 1)) : (i(), c(j, { key: 1 }, [
                    f("span", { onClick: U }, z(K.value) + " 年", 1),
                    d.value === "date" ? (i(), c("span", {
                      key: 0,
                      onClick: F
                    }, z(X.value + 1) + " 月", 1)) : N("", !0)
                  ], 64))
                ], 2),
                f("button", {
                  type: "button",
                  class: u(s(a).e("next-btn")),
                  onClick: G[2] || (G[2] = (se) => d.value === "date" ? Y() : ge())
                }, " › ", 2)
              ], 2),
              f("div", {
                class: u(s(a).e("content"))
              }, [
                d.value === "date" ? (i(), he(ot, {
                  key: 0,
                  "model-value": B.value,
                  "viewed-month": V.value,
                  "disabled-date": n.disabledDate,
                  "min-date": n.minDate ? s(be)(n.minDate) : null,
                  "max-date": n.maxDate ? s(be)(n.maxDate) : null,
                  "selection-mode": n.type === "daterange" ? "range" : "single",
                  "range-state": M.value,
                  onPick: m,
                  onRangeSelect: O
                }, null, 8, ["model-value", "viewed-month", "disabled-date", "min-date", "max-date", "selection-mode", "range-state"])) : d.value === "month" ? (i(), he(it, {
                  key: 1,
                  "model-value": B.value,
                  "viewed-year": K.value,
                  "disabled-date": n.disabledDate,
                  onPick: te
                }, null, 8, ["model-value", "viewed-year", "disabled-date"])) : d.value === "year" ? (i(), he(dt, {
                  key: 2,
                  "model-value": B.value,
                  "viewed-year": K.value,
                  "disabled-date": n.disabledDate,
                  onPick: A
                }, null, 8, ["model-value", "viewed-year", "disabled-date"])) : N("", !0)
              ], 2)
            ], 6), [
              [Ie, g.value]
            ])
          ]),
          _: 1
        })
      ]))
    ], 2));
  }
});
function me(n, p = "HH:mm:ss") {
  if (!n) return "";
  const e = n.getHours(), t = n.getMinutes(), l = n.getSeconds();
  return p.replace(/HH/g, String(e).padStart(2, "0")).replace(/H/g, String(e)).replace(/mm/g, String(t).padStart(2, "0")).replace(/m/g, String(t)).replace(/ss/g, String(l).padStart(2, "0")).replace(/s/g, String(l));
}
function $e(n) {
  if (!n) return null;
  if (n instanceof Date)
    return isNaN(n.getTime()) ? null : n;
  if (typeof n == "number") {
    const t = /* @__PURE__ */ new Date();
    return t.setTime(n), t;
  }
  const p = n.match(/^(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?/);
  if (p) {
    const t = /* @__PURE__ */ new Date();
    return t.setHours(parseInt(p[1]), parseInt(p[2]), p[3] ? parseInt(p[3]) : 0, 0), t;
  }
  const e = new Date(n);
  return isNaN(e.getTime()) ? null : e;
}
function pe(n) {
  return String(n).padStart(2, "0");
}
const pt = ["onClick"], ht = ["onClick"], gt = ["onClick"], bt = /* @__PURE__ */ Z({
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
  setup(n, { emit: p }) {
    const e = n, t = p, l = Q("time-panel"), a = E(0), g = E(0), v = E(0), w = E(), k = E(), L = E(), D = h(() => e.format.includes("ss") || e.format.includes("s")), x = h(() => {
      const A = [], ee = Math.max(1, e.hourStep);
      for (let Y = 0; Y < 24; Y += ee)
        A.push(Y);
      return A;
    }), C = h(() => {
      const A = [], ee = Math.max(1, e.minuteStep);
      for (let Y = 0; Y < 60; Y += ee)
        A.push(Y);
      return A;
    }), I = h(() => {
      const A = [], ee = Math.max(1, e.secondStep);
      for (let Y = 0; Y < 60; Y += ee)
        A.push(Y);
      return A;
    }), d = h(() => e.disabledHours ? new Set(e.disabledHours()) : /* @__PURE__ */ new Set()), V = h(() => e.disabledMinutes ? new Set(e.disabledMinutes(a.value)) : /* @__PURE__ */ new Set()), M = h(() => e.disabledSeconds ? new Set(e.disabledSeconds(a.value, g.value)) : /* @__PURE__ */ new Set()), S = h(() => `${pe(a.value)}:${pe(g.value)}${D.value ? ":" + pe(v.value) : ""}`), P = (A) => d.value.has(A), b = (A) => V.value.has(A), T = (A) => M.value.has(A), B = (A) => {
      P(A) || (a.value = A, R(w.value, q(A)));
    }, K = (A) => {
      b(A) || (g.value = A, R(k.value, J(A)));
    }, X = (A) => {
      T(A) || (v.value = A, R(L.value, $(A)));
    }, q = (A) => x.value.indexOf(A), J = (A) => C.value.indexOf(A), $ = (A) => I.value.indexOf(A), R = (A, ee) => {
      if (!A) return;
      const Y = 32, ge = ee * Y + 84 - 200 / 2 + Y / 2;
      A.scrollTop = Math.max(0, ge);
    }, y = () => {
      if (!w.value) return;
      const A = w.value.scrollTop, ee = Math.round((A - 84 + 100) / 32), Y = x.value[Math.max(0, Math.min(ee, x.value.length - 1))];
      Y !== void 0 && !P(Y) && (a.value = Y);
    }, o = () => {
      if (!k.value) return;
      const A = k.value.scrollTop, ee = Math.round((A - 84 + 100) / 32), Y = C.value[Math.max(0, Math.min(ee, C.value.length - 1))];
      Y !== void 0 && !b(Y) && (g.value = Y);
    }, r = () => {
      if (!L.value) return;
      const A = L.value.scrollTop, ee = Math.round((A - 84 + 100) / 32), Y = I.value[Math.max(0, Math.min(ee, I.value.length - 1))];
      Y !== void 0 && !T(Y) && (v.value = Y);
    }, m = () => {
      const A = e.modelValue ? new Date(e.modelValue) : /* @__PURE__ */ new Date();
      A.setHours(a.value, g.value, v.value, 0), t("confirm", A);
    }, O = () => {
      t("cancel");
    }, te = () => {
      if (e.modelValue)
        a.value = e.modelValue.getHours(), g.value = e.modelValue.getMinutes(), v.value = e.modelValue.getSeconds();
      else {
        const A = /* @__PURE__ */ new Date();
        a.value = A.getHours(), g.value = A.getMinutes(), v.value = A.getSeconds();
      }
      Ce(() => {
        R(w.value, q(a.value)), R(k.value, J(g.value)), D.value && R(L.value, $(v.value));
      });
    };
    return ce(
      () => e.modelValue,
      () => {
        te();
      },
      { immediate: !0 }
    ), ye(() => {
      te();
    }), (A, ee) => (i(), c("div", {
      class: u(s(l).b())
    }, [
      f("div", {
        class: u(s(l).e("content"))
      }, [
        f("div", {
          class: u(s(l).e("indicator"))
        }, null, 2),
        f("div", {
          ref_key: "hourListRef",
          ref: w,
          class: u(s(l).e("list")),
          onScroll: y
        }, [
          f("div", {
            class: u(s(l).e("padding"))
          }, null, 2),
          (i(!0), c(j, null, _(x.value, (Y) => (i(), c("div", {
            key: Y,
            class: u([s(l).e("item"), s(l).is("selected", a.value === Y), s(l).is("disabled", P(Y))]),
            onClick: (re) => B(Y)
          }, z(s(pe)(Y)), 11, pt))), 128)),
          f("div", {
            class: u(s(l).e("padding"))
          }, null, 2)
        ], 34),
        f("div", {
          ref_key: "minuteListRef",
          ref: k,
          class: u(s(l).e("list")),
          onScroll: o
        }, [
          f("div", {
            class: u(s(l).e("padding"))
          }, null, 2),
          (i(!0), c(j, null, _(C.value, (Y) => (i(), c("div", {
            key: Y,
            class: u([s(l).e("item"), s(l).is("selected", g.value === Y), s(l).is("disabled", b(Y))]),
            onClick: (re) => K(Y)
          }, z(s(pe)(Y)), 11, ht))), 128)),
          f("div", {
            class: u(s(l).e("padding"))
          }, null, 2)
        ], 34),
        D.value ? (i(), c("div", {
          key: 0,
          ref_key: "secondListRef",
          ref: L,
          class: u(s(l).e("list")),
          onScroll: r
        }, [
          f("div", {
            class: u(s(l).e("padding"))
          }, null, 2),
          (i(!0), c(j, null, _(I.value, (Y) => (i(), c("div", {
            key: Y,
            class: u([s(l).e("item"), s(l).is("selected", v.value === Y), s(l).is("disabled", T(Y))]),
            onClick: (re) => X(Y)
          }, z(s(pe)(Y)), 11, gt))), 128)),
          f("div", {
            class: u(s(l).e("padding"))
          }, null, 2)
        ], 34)) : N("", !0)
      ], 2),
      f("div", {
        class: u(s(l).e("footer"))
      }, [
        f("span", {
          class: u(s(l).e("current-time"))
        }, z(S.value), 3),
        f("div", {
          class: u(s(l).e("actions"))
        }, [
          f("button", {
            class: u(s(l).e("btn-cancel")),
            onClick: O
          }, "取消", 2),
          f("button", {
            class: u(s(l).e("btn-confirm")),
            onClick: m
          }, "确定", 2)
        ], 2)
      ], 2)
    ], 2));
  }
}), yt = ["placeholder", "disabled", "value"], kt = ["placeholder", "disabled", "value"], xt = ["placeholder", "disabled", "value"], hl = /* @__PURE__ */ Z({
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
  setup(n, { expose: p, emit: e }) {
    const t = n, l = e, a = Q("time-picker"), g = () => Le().next(), v = E(!1), w = E(2e3), k = E(), L = E(), D = E(), x = E({
      top: "0px",
      left: "0px"
    }), C = E({
      startTime: null,
      endTime: null
    }), I = E("start"), d = h(() => {
      if (!t.modelValue) return null;
      if (t.type === "timerange") {
        const [r, m] = t.modelValue;
        return [$e(r), $e(m)];
      }
      return $e(t.modelValue);
    }), V = h(() => !d.value || Array.isArray(d.value) ? "" : me(d.value, t.format)), M = h(() => {
      if (!Array.isArray(d.value)) return "";
      const [r] = d.value;
      return r ? me(r, t.format) : "";
    }), S = h(() => {
      if (!Array.isArray(d.value)) return "";
      const [, r] = d.value;
      return r ? me(r, t.format) : "";
    }), P = h(() => t.type === "timerange" ? I.value === "start" ? C.value.startTime : C.value.endTime || C.value.startTime : d.value), b = h(() => [
      a.b(),
      a.m(t.size),
      a.is("disabled", t.disabled),
      a.is("range", t.type === "timerange")
    ]), T = h(() => [
      a.e("input"),
      a.is("focus", v.value)
    ]), B = () => {
      t.disabled || t.readonly || (v.value ? q() : X());
    }, K = (r) => {
      t.disabled || t.readonly || (I.value = r, v.value || X());
    }, X = () => {
      v.value = !0, w.value = g(), Ce(() => {
        if (k.value && L.value) {
          const r = k.value.getBoundingClientRect(), m = L.value.getBoundingClientRect();
          let O = r.bottom + 8, te = r.left;
          te + m.width > window.innerWidth && (te = window.innerWidth - m.width - 8), O + m.height > window.innerHeight && (O = r.top - m.height - 8), x.value = {
            top: `${O}px`,
            left: `${te}px`
          };
        }
      }), l("focus", {});
    }, q = () => {
      v.value = !1, l("blur", {});
    }, J = (r) => {
      if (t.type === "timerange")
        if (I.value === "start")
          C.value.startTime = r, I.value = "end", C.value.endTime && C.value.endTime < r && (C.value.endTime = null);
        else {
          C.value.startTime && r < C.value.startTime ? (C.value.endTime = C.value.startTime, C.value.startTime = r) : C.value.endTime = r;
          const m = t.valueFormat ? me(C.value.startTime, t.valueFormat) : C.value.startTime, O = t.valueFormat ? me(C.value.endTime, t.valueFormat) : C.value.endTime;
          l("update:modelValue", [m, O]), l("change", [m, O]), q();
        }
      else {
        const m = t.valueFormat ? me(r, t.valueFormat) : r;
        l("update:modelValue", m), l("change", m), q();
      }
    }, $ = () => {
      q();
    }, R = () => {
      l("update:modelValue", null), l("change", null), l("clear"), C.value = {
        startTime: null,
        endTime: null
      };
    }, y = (r) => {
      if (!k.value) return;
      const m = r.target;
      k.value.contains(m) || L.value && L.value.contains(m) || q();
    };
    ce(
      () => t.modelValue,
      (r) => {
        if (r && t.type === "timerange") {
          const [m, O] = d.value;
          C.value = {
            startTime: m,
            endTime: O
          };
        }
      },
      { immediate: !0 }
    ), ce(v, (r) => {
      r && t.type === "timerange" && (C.value = {
        startTime: Array.isArray(d.value) ? d.value[0] : null,
        endTime: Array.isArray(d.value) ? d.value[1] : null
      }, I.value = "start");
    });
    const o = (r) => {
      r.key === "Escape" && q();
    };
    return ye(() => {
      document.addEventListener("click", y), document.addEventListener("keydown", o);
    }), ke(() => {
      document.removeEventListener("click", y), document.removeEventListener("keydown", o);
    }), p({
      focus: () => {
        var r;
        return (r = D.value) == null ? void 0 : r.focus();
      },
      blur: () => {
        var r;
        return (r = D.value) == null ? void 0 : r.blur();
      }
    }), (r, m) => (i(), c("div", {
      ref_key: "pickerRef",
      ref: k,
      class: u(b.value)
    }, [
      n.type !== "timerange" ? (i(), c("div", {
        key: 0,
        class: u(T.value),
        onClick: B
      }, [
        f("input", {
          ref_key: "inputRef",
          ref: D,
          type: "text",
          placeholder: n.placeholder,
          disabled: n.disabled,
          readonly: !0,
          value: V.value,
          class: u(s(a).e("input-inner"))
        }, null, 10, yt),
        f("span", {
          class: u(s(a).e("suffix"))
        }, [
          n.clearable && V.value && !n.disabled ? (i(), c("span", {
            key: 0,
            class: u(s(a).e("clear")),
            onClick: ue(R, ["stop"])
          }, " ✕ ", 2)) : (i(), c("span", {
            key: 1,
            class: u(s(a).e("icon"))
          }, "🕐", 2))
        ], 2)
      ], 2)) : (i(), c("div", {
        key: 1,
        class: u(T.value),
        onClick: B
      }, [
        f("input", {
          type: "text",
          placeholder: n.startPlaceholder,
          disabled: n.disabled,
          readonly: !0,
          value: M.value,
          class: u([s(a).e("input-inner"), s(a).is("active", I.value === "start")]),
          onClick: m[0] || (m[0] = ue((O) => K("start"), ["stop"]))
        }, null, 10, kt),
        f("span", {
          class: u(s(a).e("separator"))
        }, "至", 2),
        f("input", {
          type: "text",
          placeholder: n.endPlaceholder,
          disabled: n.disabled,
          readonly: !0,
          value: S.value,
          class: u([s(a).e("input-inner"), s(a).is("active", I.value === "end")]),
          onClick: m[1] || (m[1] = ue((O) => K("end"), ["stop"]))
        }, null, 10, xt),
        f("span", {
          class: u(s(a).e("suffix"))
        }, [
          n.clearable && (M.value || S.value) && !n.disabled ? (i(), c("span", {
            key: 0,
            class: u(s(a).e("clear")),
            onClick: ue(R, ["stop"])
          }, " ✕ ", 2)) : (i(), c("span", {
            key: 1,
            class: u(s(a).e("icon"))
          }, "🕐", 2))
        ], 2)
      ], 2)),
      (i(), he(Re, { to: "body" }, [
        xe(Be, { name: "fade" }, {
          default: Fe(() => [
            ve(f("div", {
              ref_key: "popperRef",
              ref: L,
              class: u(s(a).e("popper")),
              style: ae({ zIndex: w.value, ...x.value })
            }, [
              n.type === "timerange" ? (i(), c("div", {
                key: 0,
                class: u(s(a).e("popper-header"))
              }, z(I.value === "start" ? "请选择开始时间" : "请选择结束时间"), 3)) : N("", !0),
              xe(bt, {
                "model-value": P.value,
                format: n.format,
                "disabled-hours": n.disabledHours,
                "disabled-minutes": n.disabledMinutes,
                "disabled-seconds": n.disabledSeconds,
                "hour-step": n.hourStep,
                "minute-step": n.minuteStep,
                "second-step": n.secondStep,
                onConfirm: J,
                onCancel: $
              }, null, 8, ["model-value", "format", "disabled-hours", "disabled-minutes", "disabled-seconds", "hour-step", "minute-step", "second-step"])
            ], 6), [
              [Ie, v.value]
            ])
          ]),
          _: 1
        })
      ]))
    ], 2));
  }
});
function wt(n, p, e) {
  return e ? e(p, n) : n.toLowerCase().includes(p.toLowerCase());
}
function Ye(n, p, e = "value", t = "children") {
  for (const l of n) {
    if (l[e] === p)
      return l;
    if (l[t] && l[t].length > 0) {
      const a = Ye(l[t], p, e, t);
      if (a) return a;
    }
  }
  return null;
}
function Me(n, p, e = "value", t = "children") {
  const l = [];
  function a(g) {
    for (const v of g) {
      if (v[e] === p)
        return l.push(v), !0;
      if (v[t] && v[t].length > 0) {
        if (l.push(v), a(v[t]))
          return !0;
        l.pop();
      }
    }
    return !1;
  }
  return a(n), l;
}
function Vt(n, p = "children") {
  const e = [];
  function t(l, a = 0, g = null) {
    for (const v of l)
      e.push({ ...v, level: a, parent: g }), v[p] && v[p].length > 0 && t(v[p], a + 1, v);
  }
  return t(n), e;
}
const Ct = ["onClick"], Dt = ["placeholder", "disabled", "readonly", "value"], St = ["onClick"], $t = ["onClick"], gl = /* @__PURE__ */ Z({
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
  setup(n, { emit: p }) {
    const e = n, t = p, l = Q("select"), a = () => Le().next(), g = E(), v = E(), w = E(), k = E(!1), L = E(2e3), D = E(""), x = E(-1), C = E({ top: "0px", left: "0px" }), I = h(() => e.type === "multiple"), d = h(() => e.type === "cascader"), V = E([]), M = () => e.modelValue !== void 0 ? e.modelValue : e.value !== void 0 ? e.value : "", S = (F) => {
      t("update:modelValue", F), t("update:value", F), t("change", F);
    }, P = h(() => {
      const F = M();
      return I.value ? Array.isArray(F) ? F : [] : d.value ? Array.isArray(F) ? F : F ? [F] : [] : F !== "" && F !== null && F !== void 0 ? [F] : [];
    }), b = h(() => d.value ? Vt(e.options, e.childrenKey) : e.options.map((F) => ({ ...F, level: 0 }))), T = h(() => !e.filterable || !D.value ? b.value : b.value.filter((F) => {
      const U = F[e.labelKey] || "";
      return wt(U, D.value, e.filterMethod);
    })), B = h(() => {
      const F = [];
      for (const U of P.value) {
        const W = Ye(e.options, U, e.valueKey, e.childrenKey);
        W && F.push(W);
      }
      return F;
    }), K = h(() => {
      if (I.value)
        return "";
      if (d.value)
        return Me(e.options, P.value[P.value.length - 1], e.valueKey, e.childrenKey).map((W) => W[e.labelKey]).join(e.separator);
      const F = B.value[0];
      return F ? F[e.labelKey] : "";
    }), X = h(() => I.value ? B.value : []), q = h(() => e.collapseTags ? X.value.slice(0, e.maxCollapseTags) : X.value), J = h(() => e.collapseTags ? Math.max(0, X.value.length - e.maxCollapseTags) : 0), $ = h(() => [
      l.b(),
      l.m(e.size),
      l.is("disabled", e.disabled),
      l.is("multiple", I.value),
      l.is("cascader", d.value),
      l.is("filterable", e.filterable),
      l.is("focus", k.value)
    ]), R = () => {
      if (!g.value || !w.value || !k.value) return;
      const F = g.value.getBoundingClientRect(), U = w.value.getBoundingClientRect();
      let W = F.bottom + 4, ne = F.left;
      ne + U.width > window.innerWidth && (ne = window.innerWidth - U.width - 8), W + U.height > window.innerHeight && (W = F.top - U.height - 4), C.value = {
        top: `${W}px`,
        left: `${ne}px`
      };
    }, y = () => {
      e.disabled || (k.value = !0, L.value = a(), D.value = "", Ce(() => {
        R();
      }), t("visible-change", !0), t("focus", {}));
    }, o = () => {
      k.value = !1, D.value = "", V.value = [], t("visible-change", !1), t("blur", {});
    }, r = (F) => {
      if (!F.disabled)
        if (I.value) {
          const U = [...P.value], W = F[e.valueKey], ne = U.indexOf(W);
          if (ne > -1)
            U.splice(ne, 1), t("remove-tag", W);
          else {
            if (e.multipleLimit > 0 && U.length >= e.multipleLimit)
              return;
            U.push(W);
          }
          S(U);
        } else if (d.value)
          if (F.children && F.children.length > 0) {
            const U = Me(e.options, F[e.valueKey], e.valueKey, e.childrenKey);
            V.value = U;
          } else {
            const W = Me(e.options, F[e.valueKey], e.valueKey, e.childrenKey).map((ne) => ne[e.valueKey]);
            S(W), o();
          }
        else
          S(F[e.valueKey]), o();
    }, m = (F) => {
      const U = P.value.filter((W) => W !== F[e.valueKey]);
      S(U), t("remove-tag", F[e.valueKey]);
    }, O = () => {
      const F = I.value ? [] : "";
      S(F), t("clear");
    }, te = (F) => {
      D.value = F.target.value;
    }, A = (F) => {
      if (!g.value) return;
      const U = F.target;
      g.value.contains(U) || w.value && w.value.contains(U) || o();
    }, ee = (F) => {
      if (F.key === "Escape")
        o();
      else if (F.key === "Enter" && k.value) {
        const U = T.value[x.value];
        U && r(U);
      } else F.key === "ArrowDown" && k.value ? (F.preventDefault(), x.value = Math.min(x.value + 1, T.value.length - 1)) : F.key === "ArrowUp" && k.value && (F.preventDefault(), x.value = Math.max(x.value - 1, 0));
    }, Y = (F) => P.value.includes(F[e.valueKey]), re = (F, U) => [
      l.e("option"),
      l.is("selected", Y(F)),
      l.is("disabled", F.disabled === !0),
      l.is("hover", x.value === U),
      l.is("group", !!(F.children && F.children.length > 0))
    ], ge = h(() => {
      if (!d.value) return [];
      const F = [e.options];
      for (const U of V.value)
        U.children && U.children.length > 0 && F.push(U.children);
      return F;
    });
    return ye(() => {
      document.addEventListener("click", A), document.addEventListener("keydown", ee);
    }), ke(() => {
      document.removeEventListener("click", A), document.removeEventListener("keydown", ee), document.removeEventListener("scroll", R, !0);
    }), ce(k, (F) => {
      F ? document.addEventListener("scroll", R, !0) : document.removeEventListener("scroll", R, !0);
    }), Ve("select", {
      selectedValues: P,
      handleSelect: r,
      isSelected: Y
    }), (F, U) => (i(), c("div", {
      ref_key: "selectRef",
      ref: g,
      class: u($.value)
    }, [
      f("div", {
        class: u(s(l).e("wrapper")),
        onClick: U[0] || (U[0] = (W) => k.value ? o() : y())
      }, [
        I.value && X.value.length > 0 ? (i(), c("div", {
          key: 0,
          class: u(s(l).e("tags"))
        }, [
          (i(!0), c(j, null, _(q.value, (W) => (i(), c("span", {
            key: W[n.valueKey],
            class: u(s(l).e("tag"))
          }, [
            f("span", {
              class: u(s(l).e("tag-text"))
            }, z(W[n.labelKey]), 3),
            f("span", {
              class: u(s(l).e("tag-close")),
              onClick: ue((ne) => m(W), ["stop"])
            }, "×", 10, Ct)
          ], 2))), 128)),
          J.value > 0 ? (i(), c("span", {
            key: 0,
            class: u(s(l).e("tag-count"))
          }, " +" + z(J.value), 3)) : N("", !0)
        ], 2)) : N("", !0),
        f("input", {
          ref_key: "inputRef",
          ref: v,
          class: u(s(l).e("input")),
          placeholder: I.value && X.value.length > 0 ? "" : n.placeholder,
          disabled: n.disabled,
          readonly: !n.filterable || !k.value,
          value: n.filterable && k.value ? D.value : K.value,
          onInput: te
        }, null, 42, Dt),
        f("span", {
          class: u(s(l).e("suffix"))
        }, [
          n.clearable && P.value.length > 0 && !n.disabled ? (i(), c("span", {
            key: 0,
            class: u(s(l).e("clear")),
            onClick: ue(O, ["stop"])
          }, "×", 2)) : (i(), c("span", {
            key: 1,
            class: u([s(l).e("arrow"), s(l).is("reverse", k.value)])
          }, "▼", 2))
        ], 2)
      ], 2),
      (i(), he(Re, { to: "body" }, [
        xe(Be, { name: "fade" }, {
          default: Fe(() => [
            ve(f("div", {
              ref_key: "popperRef",
              ref: w,
              class: u([s(l).e("popper"), s(l).is("cascader", d.value)]),
              style: ae({ zIndex: L.value, ...C.value })
            }, [
              d.value ? (i(), c("div", {
                key: 0,
                class: u(s(l).e("cascader-panels"))
              }, [
                (i(!0), c(j, null, _(ge.value, (W, ne) => (i(), c("div", {
                  key: ne,
                  class: u(s(l).e("cascader-panel"))
                }, [
                  (i(!0), c(j, null, _(W, (oe, H) => (i(), c("div", {
                    key: oe[n.valueKey],
                    class: u(re(oe, H)),
                    onClick: (G) => r(oe)
                  }, [
                    f("span", {
                      class: u(s(l).e("option-label"))
                    }, z(oe[n.labelKey]), 3),
                    oe.children && oe.children.length > 0 ? (i(), c("span", {
                      key: 0,
                      class: u(s(l).e("option-arrow"))
                    }, "›", 2)) : N("", !0)
                  ], 10, St))), 128))
                ], 2))), 128))
              ], 2)) : (i(), c(j, { key: 1 }, [
                T.value.length === 0 ? (i(), c("div", {
                  key: 0,
                  class: u(s(l).e("empty"))
                }, z(D.value ? n.noMatchText : n.noDataText), 3)) : (i(), c("div", {
                  key: 1,
                  class: u(s(l).e("options"))
                }, [
                  (i(!0), c(j, null, _(T.value, (W, ne) => (i(), c("div", {
                    key: W[n.valueKey],
                    class: u(re(W, ne)),
                    onClick: (oe) => r(W)
                  }, [
                    f("span", {
                      class: u(s(l).e("option-label"))
                    }, z(W[n.labelKey]), 3),
                    Y(W) ? (i(), c("span", {
                      key: 0,
                      class: u(s(l).e("option-check"))
                    }, "✓", 2)) : N("", !0)
                  ], 10, $t))), 128))
                ], 2))
              ], 64))
            ], 6), [
              [Ie, k.value]
            ])
          ]),
          _: 1
        })
      ]))
    ], 2));
  }
}), Mt = ["checked", "indeterminate"], Tt = ["placeholder"], Rt = ["onClick"], Bt = ["checked", "disabled", "onChange"], Ft = ["disabled"], It = ["disabled"], Lt = ["checked", "indeterminate"], Pt = ["placeholder"], At = ["onClick"], Et = ["checked", "disabled", "onChange"], bl = /* @__PURE__ */ Z({
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
  setup(n, { expose: p, emit: e }) {
    const t = n, l = e, a = Q("transfer"), g = h(() => {
      var o;
      return ((o = t.props) == null ? void 0 : o.key) || "key";
    }), v = h(() => {
      var o;
      return ((o = t.props) == null ? void 0 : o.label) || "label";
    }), w = h(() => {
      var o;
      return ((o = t.props) == null ? void 0 : o.disabled) || "disabled";
    }), k = E(""), L = E(""), D = E([]), x = E([]), C = (o) => o[g.value], I = (o) => o[v.value], d = (o) => o[w.value] || !1, V = h(() => t.data.filter((o) => {
      const r = C(o);
      return t.modelValue.includes(r) ? !1 : t.filterable && k.value ? t.filterMethod ? t.filterMethod(k.value, o) : I(o).toLowerCase().includes(k.value.toLowerCase()) : !0;
    })), M = h(() => {
      const o = t.modelValue;
      let r = t.data.filter((m) => {
        const O = C(m);
        return o.includes(O);
      });
      return t.filterable && L.value && (r = r.filter((m) => t.filterMethod ? t.filterMethod(L.value, m) : I(m).toLowerCase().includes(L.value.toLowerCase()))), t.targetOrder === "push" ? r.sort((m, O) => o.indexOf(C(m)) - o.indexOf(C(O))) : t.targetOrder === "unshift" ? r.sort((m, O) => o.indexOf(C(O)) - o.indexOf(C(m))) : r;
    }), S = h(() => V.value.filter((o) => D.value.includes(C(o))).every((o) => d(o))), P = h(() => M.value.filter((o) => x.value.includes(C(o))).every((o) => d(o))), b = h(() => D.value.length === 0 || S.value), T = h(() => x.value.length === 0 || P.value), B = () => {
      const o = D.value.filter((m) => {
        const O = t.data.find((te) => C(te) === m);
        return O && !d(O);
      });
      let r;
      t.targetOrder === "unshift" ? r = [...o, ...t.modelValue] : r = [...t.modelValue, ...o], l("update:modelValue", r), l("change", r, "right", o), D.value = [];
    }, K = () => {
      const o = x.value.filter((m) => {
        const O = t.data.find((te) => C(te) === m);
        return O && !d(O);
      }), r = t.modelValue.filter((m) => !o.includes(m));
      l("update:modelValue", r), l("change", r, "left", o), x.value = [];
    }, X = (o) => {
      const r = D.value.indexOf(o);
      r > -1 ? D.value.splice(r, 1) : D.value.push(o), l("left-check-change", [...D.value]);
    }, q = (o) => {
      const r = x.value.indexOf(o);
      r > -1 ? x.value.splice(r, 1) : x.value.push(o), l("right-check-change", [...x.value]);
    }, J = () => {
      D.value.length === V.value.filter((o) => !d(o)).length ? D.value = [] : D.value = V.value.filter((o) => !d(o)).map((o) => C(o)), l("left-check-change", [...D.value]);
    }, $ = () => {
      x.value.length === M.value.filter((o) => !d(o)).length ? x.value = [] : x.value = M.value.filter((o) => !d(o)).map((o) => C(o)), l("right-check-change", [...x.value]);
    }, R = (o) => {
      o === "left" ? k.value = "" : L.value = "";
    }, y = h(() => [a.b()]);
    return p({
      clearQuery: R
    }), (o, r) => (i(), c("div", {
      class: u(y.value)
    }, [
      f("div", {
        class: u(s(a).e("panel"))
      }, [
        f("div", {
          class: u(s(a).e("header"))
        }, [
          f("label", {
            class: u(s(a).e("checkbox"))
          }, [
            f("input", {
              type: "checkbox",
              checked: D.value.length > 0 && D.value.length === V.value.filter((m) => !d(m)).length,
              indeterminate: D.value.length > 0 && D.value.length < V.value.filter((m) => !d(m)).length,
              onChange: J
            }, null, 40, Mt),
            f("span", null, z(n.titles[0]), 1)
          ], 2),
          f("span", {
            class: u(s(a).e("count"))
          }, z(D.value.length) + " / " + z(V.value.length), 3)
        ], 2),
        n.filterable ? (i(), c("div", {
          key: 0,
          class: u(s(a).e("filter"))
        }, [
          ve(f("input", {
            "onUpdate:modelValue": r[0] || (r[0] = (m) => k.value = m),
            placeholder: n.filterPlaceholder,
            class: u(s(a).e("filter-input"))
          }, null, 10, Tt), [
            [Te, k.value]
          ]),
          k.value ? (i(), c("span", {
            key: 0,
            class: u(s(a).e("filter-clear")),
            onClick: r[1] || (r[1] = (m) => R("left"))
          }, "×", 2)) : N("", !0)
        ], 2)) : N("", !0),
        f("div", {
          class: u(s(a).e("body"))
        }, [
          (i(!0), c(j, null, _(V.value, (m) => (i(), c("div", {
            key: C(m),
            class: u([
              s(a).e("item"),
              s(a).is("disabled", d(m)),
              s(a).is("checked", D.value.includes(C(m)))
            ]),
            onClick: (O) => !d(m) && X(C(m))
          }, [
            f("label", {
              class: u(s(a).e("checkbox"))
            }, [
              f("input", {
                type: "checkbox",
                checked: D.value.includes(C(m)),
                disabled: d(m),
                onClick: r[2] || (r[2] = ue(() => {
                }, ["stop"])),
                onChange: (O) => X(C(m))
              }, null, 40, Bt),
              f("span", null, z(I(m)), 1)
            ], 2)
          ], 10, Rt))), 128)),
          V.value.length === 0 ? (i(), c("div", {
            key: 0,
            class: u(s(a).e("empty"))
          }, [
            le(o.$slots, "left-empty", {}, () => [
              r[6] || (r[6] = fe("暂无数据", -1))
            ])
          ], 2)) : N("", !0)
        ], 2)
      ], 2),
      f("div", {
        class: u(s(a).e("buttons"))
      }, [
        f("button", {
          class: u([s(a).e("button"), s(a).is("disabled", b.value)]),
          disabled: b.value,
          onClick: B
        }, z(n.buttonTexts[0] || ">"), 11, Ft),
        f("button", {
          class: u([s(a).e("button"), s(a).is("disabled", T.value)]),
          disabled: T.value,
          onClick: K
        }, z(n.buttonTexts[1] || "<"), 11, It)
      ], 2),
      f("div", {
        class: u(s(a).e("panel"))
      }, [
        f("div", {
          class: u(s(a).e("header"))
        }, [
          f("label", {
            class: u(s(a).e("checkbox"))
          }, [
            f("input", {
              type: "checkbox",
              checked: x.value.length > 0 && x.value.length === M.value.filter((m) => !d(m)).length,
              indeterminate: x.value.length > 0 && x.value.length < M.value.filter((m) => !d(m)).length,
              onChange: $
            }, null, 40, Lt),
            f("span", null, z(n.titles[1]), 1)
          ], 2),
          f("span", {
            class: u(s(a).e("count"))
          }, z(x.value.length) + " / " + z(M.value.length), 3)
        ], 2),
        n.filterable ? (i(), c("div", {
          key: 0,
          class: u(s(a).e("filter"))
        }, [
          ve(f("input", {
            "onUpdate:modelValue": r[3] || (r[3] = (m) => L.value = m),
            placeholder: n.filterPlaceholder,
            class: u(s(a).e("filter-input"))
          }, null, 10, Pt), [
            [Te, L.value]
          ]),
          L.value ? (i(), c("span", {
            key: 0,
            class: u(s(a).e("filter-clear")),
            onClick: r[4] || (r[4] = (m) => R("right"))
          }, "×", 2)) : N("", !0)
        ], 2)) : N("", !0),
        f("div", {
          class: u(s(a).e("body"))
        }, [
          (i(!0), c(j, null, _(M.value, (m) => (i(), c("div", {
            key: C(m),
            class: u([
              s(a).e("item"),
              s(a).is("disabled", d(m)),
              s(a).is("checked", x.value.includes(C(m)))
            ]),
            onClick: (O) => !d(m) && q(C(m))
          }, [
            f("label", {
              class: u(s(a).e("checkbox"))
            }, [
              f("input", {
                type: "checkbox",
                checked: x.value.includes(C(m)),
                disabled: d(m),
                onClick: r[5] || (r[5] = ue(() => {
                }, ["stop"])),
                onChange: (O) => q(C(m))
              }, null, 40, Et),
              f("span", null, z(I(m)), 1)
            ], 2)
          ], 10, At))), 128)),
          M.value.length === 0 ? (i(), c("div", {
            key: 0,
            class: u(s(a).e("empty"))
          }, [
            le(o.$slots, "right-empty", {}, () => [
              r[7] || (r[7] = fe("暂无数据", -1))
            ])
          ], 2)) : N("", !0)
        ], 2)
      ], 2)
    ], 2));
  }
}), Yt = { key: 0 }, zt = { key: 1 }, yl = /* @__PURE__ */ Z({
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
  setup(n, { emit: p }) {
    const e = n, t = p, l = Q("slider"), a = E(), g = E(), v = E(!1), w = E(!1), k = h(() => {
      const R = e.max - e.min;
      return (e.modelValue - e.min) / R * 100;
    }), L = h(() => e.formatTooltip ? e.formatTooltip(e.modelValue) : e.modelValue), D = h(() => {
      if (!e.showStops || e.min >= e.max) return [];
      const R = [], y = (e.max - e.min) / e.step;
      for (let o = 0; o <= y; o++) {
        const r = e.min + o * e.step;
        r > e.min && r < e.max && R.push((r - e.min) / (e.max - e.min) * 100);
      }
      return R;
    }), x = h(() => e.marks ? Object.keys(e.marks).map((R) => {
      const y = Number(R), o = e.marks[y], r = (y - e.min) / (e.max - e.min) * 100;
      let m, O = {};
      return typeof o == "string" ? m = o : (m = o.label || String(y), O = o.style || {}), { value: y, pos: r, label: m, style: O };
    }) : []), C = () => a.value ? e.vertical ? a.value.offsetHeight : a.value.offsetWidth : 0, I = (R, y) => {
      if (!a.value) return e.modelValue;
      const o = a.value.getBoundingClientRect(), r = C();
      let m;
      e.vertical ? m = (o.bottom - y) / r * 100 : m = (R - o.left) / r * 100, m = Math.max(0, Math.min(100, m));
      const O = e.min + m / 100 * (e.max - e.min), te = Math.round(O / e.step) * e.step;
      return Math.max(e.min, Math.min(e.max, te));
    }, d = (R) => {
      if (e.disabled) return;
      const y = Math.max(e.min, Math.min(e.max, R));
      y !== e.modelValue && (t("update:modelValue", y), t("input", y));
    }, V = (R) => {
      if (e.disabled) return;
      R.preventDefault(), w.value = !0, v.value = !0;
      const y = I(R.clientX, R.clientY);
      d(y), document.addEventListener("mousemove", M), document.addEventListener("mouseup", S);
    }, M = (R) => {
      if (!w.value) return;
      const y = I(R.clientX, R.clientY);
      d(y);
    }, S = () => {
      w.value = !1, t("change", e.modelValue), document.removeEventListener("mousemove", M), document.removeEventListener("mouseup", S);
    }, P = (R) => {
      if (e.disabled) return;
      R.preventDefault(), w.value = !0, v.value = !0;
      const y = R.touches[0], o = I(y.clientX, y.clientY);
      d(o);
    }, b = (R) => {
      if (!w.value) return;
      const y = R.touches[0], o = I(y.clientX, y.clientY);
      d(o);
    }, T = () => {
      w.value = !1, t("change", e.modelValue);
    }, B = () => {
      e.showTooltip && (v.value = !0);
    }, K = () => {
      w.value || (v.value = !1);
    };
    ke(() => {
      document.removeEventListener("mousemove", M), document.removeEventListener("mouseup", S);
    });
    const X = h(() => [
      l.b(),
      l.is("disabled", e.disabled),
      l.is("vertical", e.vertical)
    ]), q = h(() => e.vertical && e.height ? { height: typeof e.height == "number" ? `${e.height}px` : e.height } : {}), J = h(() => e.vertical ? { height: `${k.value}%` } : { width: `${k.value}%` }), $ = h(() => e.vertical ? { bottom: `${k.value}%` } : { left: `${k.value}%` });
    return (R, y) => (i(), c("div", {
      class: u(X.value),
      style: ae(q.value)
    }, [
      f("div", {
        ref_key: "sliderRef",
        ref: a,
        class: u(s(l).e("runway")),
        onMousedown: V,
        onTouchstart: P
      }, [
        f("div", {
          class: u(s(l).e("bar")),
          style: ae(J.value)
        }, null, 6),
        n.showStops ? (i(), c("div", Yt, [
          (i(!0), c(j, null, _(D.value, (o, r) => (i(), c("div", {
            key: r,
            class: u(s(l).e("stop")),
            style: ae(n.vertical ? { bottom: `${o}%` } : { left: `${o}%` })
          }, null, 6))), 128))
        ])) : N("", !0),
        x.value.length > 0 ? (i(), c("div", zt, [
          (i(!0), c(j, null, _(x.value, (o) => (i(), c("div", {
            key: o.value,
            class: u(s(l).e("mark")),
            style: ae(n.vertical ? { bottom: `${o.pos}%` } : { left: `${o.pos}%`, ...o.style })
          }, [
            f("span", {
              class: u(s(l).e("mark-text"))
            }, z(o.label), 3)
          ], 6))), 128))
        ])) : N("", !0),
        f("div", {
          ref_key: "buttonRef",
          ref: g,
          class: u(s(l).e("button-wrapper")),
          style: ae($.value),
          onMouseenter: B,
          onMouseleave: K,
          onTouchmove: b,
          onTouchend: T
        }, [
          n.showTooltip && v.value ? (i(), c("div", {
            key: 0,
            class: u(s(l).e("tooltip"))
          }, z(L.value), 3)) : N("", !0),
          f("div", {
            class: u(s(l).e("button"))
          }, null, 2)
        ], 38)
      ], 34)
    ], 6));
  }
}), Ht = ["src"], Ot = {
  key: 0,
  class: "status-uploading"
}, Nt = { class: "progress-circle" }, Kt = { class: "progress-text" }, Xt = {
  key: 1,
  class: "status-error"
}, Ut = {
  key: 2,
  class: "status-success"
}, Wt = {
  key: 0,
  class: "action-preview"
}, Gt = ["onClick"], qt = ["disabled"], jt = { class: "progress-text" }, Zt = ["onClick"], Qt = ["src"], Jt = {
  key: 0,
  class: "action-success"
}, _t = ["onClick"], el = ["multiple", "accept", "disabled"], kl = /* @__PURE__ */ Z({
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
  setup(n, { expose: p, emit: e }) {
    const t = n, l = e, a = Q("upload");
    Ae();
    const g = E(), v = E([...t.fileList]), w = E(!1);
    let k = 1;
    const L = () => Date.now() + k++, D = ($) => {
      var o;
      const R = (o = $.name.split(".").pop()) == null ? void 0 : o.toLowerCase(), y = {
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
      return y[R || ""] || y.default;
    }, x = h(() => t.limit ? v.value.length < t.limit : !0), C = h(() => [
      a.b(),
      a.is("disabled", t.disabled),
      a.is("drag", t.drag),
      a.m(t.listType)
    ]), I = ($) => {
      const R = $.target.files;
      !R || R.length === 0 || (d(Array.from(R)), g.value && (g.value.value = ""));
    }, d = async ($) => {
      var R, y;
      if (t.limit && v.value.length + $.length > t.limit) {
        l("exceed", $, v.value), (R = t.onExceed) == null || R.call(t, $, v.value);
        return;
      }
      for (const o of $) {
        if (t.beforeUpload && await t.beforeUpload(o, $) === !1)
          continue;
        const r = {
          name: o.name,
          size: o.size,
          status: "ready",
          percentage: 0,
          uid: L(),
          raw: o
        };
        o.type.startsWith("image/") && (r.thumbUrl = await V(o), r.url = r.thumbUrl), v.value.push(r), l("update:fileList", v.value), l("change", r, v.value), (y = t.onChange) == null || y.call(t, r, v.value), t.autoUpload && M(r);
      }
    }, V = ($) => new Promise((R) => {
      const y = new FileReader();
      y.onload = (o) => {
        var r;
        R((r = o.target) == null ? void 0 : r.result);
      }, y.readAsDataURL($);
    }), M = ($) => {
      if (!$.raw) return;
      $.status = "uploading", (t.httpRequest || S)({
        action: t.action,
        headers: t.headers,
        data: t.data,
        file: $.raw,
        name: t.name,
        withCredentials: t.withCredentials,
        onProgress: (y) => {
          var o;
          $.percentage = y.percent, l("progress", y, $, v.value), (o = t.onProgress) == null || o.call(t, y, $, v.value);
        },
        onSuccess: (y) => {
          var o;
          $.status = "success", $.response = y, l("success", y, $, v.value), (o = t.onSuccess) == null || o.call(t, y, $, v.value);
        },
        onError: (y) => {
          var o;
          $.status = "error", l("error", y, $, v.value), (o = t.onError) == null || o.call(t, y, $, v.value);
        }
      });
    }, S = ($) => new Promise((R, y) => {
      const o = new XMLHttpRequest();
      o.upload.addEventListener("progress", (m) => {
        m.lengthComputable && $.onProgress({ percent: m.loaded / m.total * 100 });
      }), o.addEventListener("load", () => {
        if (o.status < 200 || o.status >= 300) {
          $.onError(new Error("Upload failed")), y(new Error("Upload failed"));
          return;
        }
        try {
          const m = JSON.parse(o.responseText);
          $.onSuccess(m), R(m);
        } catch {
          $.onSuccess(o.responseText), R(o.responseText);
        }
      }), o.addEventListener("error", () => {
        $.onError(new Error("Upload error")), y(new Error("Upload error"));
      });
      const r = new FormData();
      r.append($.name, $.file), $.data && Object.keys($.data).forEach((m) => {
        r.append(m, $.data[m]);
      }), o.open("POST", $.action, !0), $.withCredentials && (o.withCredentials = !0), $.headers && Object.keys($.headers).forEach((m) => {
        o.setRequestHeader(m, $.headers[m]);
      }), o.send(r);
    }), P = async ($) => {
      var y;
      if (t.beforeRemove && await t.beforeRemove($, v.value) === !1)
        return;
      const R = v.value.findIndex((o) => o.uid === $.uid);
      R > -1 && (v.value.splice(R, 1), l("update:fileList", v.value), l("remove", $, v.value), (y = t.onRemove) == null || y.call(t, $, v.value));
    }, b = () => {
      v.value.filter(($) => $.status === "ready" && $.raw).forEach(($) => M($));
    }, T = () => {
      v.value = [], l("update:fileList", v.value);
    }, B = () => {
      var $;
      t.disabled || ($ = g.value) == null || $.click();
    }, K = ($) => {
      $.preventDefault(), !t.disabled && t.drag && (w.value = !0);
    }, X = () => {
      w.value = !1;
    }, q = ($) => {
      var y;
      if ($.preventDefault(), w.value = !1, t.disabled) return;
      const R = (y = $.dataTransfer) == null ? void 0 : y.files;
      R && R.length > 0 && d(Array.from(R));
    }, J = ($) => {
      if (!$) return "0 B";
      const R = ["B", "KB", "MB", "GB"];
      let y = 0, o = $;
      for (; o >= 1024 && y < R.length - 1; )
        o /= 1024, y++;
      return `${o.toFixed(2)} ${R[y]}`;
    };
    return p({
      submit: b,
      clearFiles: T,
      uploadFiles: v
    }), ($, R) => (i(), c("div", {
      class: u(C.value)
    }, [
      n.drag ? (i(), c("div", {
        key: 0,
        class: u([s(a).e("drag"), s(a).is("dragover", w.value)]),
        onClick: B,
        onDragover: K,
        onDragleave: X,
        onDrop: q
      }, [
        le($.$slots, "drag", {}, () => [
          f("span", {
            class: u(s(a).e("drag-icon"))
          }, "📁", 2),
          f("div", {
            class: u(s(a).e("drag-text"))
          }, [...R[0] || (R[0] = [
            fe(" 将文件拖到此处，或", -1),
            f("em", null, "点击上传", -1)
          ])], 2)
        ])
      ], 34)) : n.listType === "picture-card" ? (i(), c("ul", {
        key: 1,
        class: u([s(a).e("files"), s(a).e("upload-list")])
      }, [
        (i(!0), c(j, null, _(v.value, (y) => (i(), c("li", {
          key: y.uid,
          class: u([s(a).e("file"), s(a).is(`status-${y.status}`)])
        }, [
          y.thumbUrl && y.status !== "uploading" ? (i(), c("img", {
            key: 0,
            src: y.thumbUrl,
            class: u(s(a).e("file-image"))
          }, null, 10, Ht)) : (i(), c("div", {
            key: 1,
            class: u(s(a).e("file-status"))
          }, [
            y.status === "uploading" ? (i(), c("span", Ot, [
              f("span", Nt, [
                f("span", Kt, z(Math.round(y.percentage || 0)) + "%", 1)
              ])
            ])) : y.status === "error" ? (i(), c("span", Xt, "✕")) : y.status === "success" ? (i(), c("span", Ut, "✓")) : N("", !0)
          ], 2)),
          f("span", {
            class: u(s(a).e("file-actions"))
          }, [
            y.url ? (i(), c("span", Wt, "👁️")) : N("", !0),
            f("span", {
              class: "action-remove",
              onClick: (o) => P(y)
            }, "🗑️", 8, Gt)
          ], 2)
        ], 2))), 128)),
        x.value ? (i(), c("li", {
          key: 0,
          class: u(s(a).e("upload-card")),
          onClick: B
        }, [
          le($.$slots, "trigger", {}, () => [
            R[1] || (R[1] = f("span", { class: "upload-icon" }, "+", -1))
          ])
        ], 2)) : N("", !0)
      ], 2)) : (i(), c(j, { key: 2 }, [
        f("div", {
          class: u(s(a).e("trigger-wrapper")),
          onClick: B
        }, [
          le($.$slots, "trigger", {}, () => [
            x.value ? (i(), c("button", {
              key: 0,
              type: "button",
              class: u(s(a).e("trigger")),
              disabled: n.disabled
            }, [
              le($.$slots, "default", {}, () => [
                R[2] || (R[2] = fe("点击上传", -1))
              ])
            ], 10, qt)) : N("", !0)
          ])
        ], 2),
        n.showFileList && v.value.length > 0 ? (i(), c("ul", {
          key: 0,
          class: u(s(a).e("files"))
        }, [
          (i(!0), c(j, null, _(v.value, (y) => (i(), c("li", {
            key: y.uid,
            class: u([s(a).e("file"), s(a).is(`status-${y.status}`)])
          }, [
            n.listType === "text" ? (i(), c(j, { key: 0 }, [
              f("span", {
                class: u(s(a).e("file-icon"))
              }, z(D(y)), 3),
              f("span", {
                class: u(s(a).e("file-name"))
              }, z(y.name), 3),
              f("span", {
                class: u(s(a).e("file-size"))
              }, z(J(y.size)), 3),
              y.status === "uploading" ? (i(), c("span", {
                key: 0,
                class: u(s(a).e("file-progress"))
              }, [
                f("span", {
                  class: "progress-bar",
                  style: ae({ width: y.percentage + "%" })
                }, null, 4),
                f("span", jt, z(Math.round(y.percentage || 0)) + "%", 1)
              ], 2)) : N("", !0),
              y.status === "success" ? (i(), c("span", {
                key: 1,
                class: u(s(a).e("file-success"))
              }, "✓", 2)) : N("", !0),
              y.status === "error" ? (i(), c("span", {
                key: 2,
                class: u(s(a).e("file-error"))
              }, "✕", 2)) : N("", !0),
              f("span", {
                class: u(s(a).e("file-actions"))
              }, [
                f("span", {
                  class: "action-remove",
                  onClick: (o) => P(y)
                }, "✕", 8, Zt)
              ], 2)
            ], 64)) : n.listType === "picture" ? (i(), c(j, { key: 1 }, [
              y.thumbUrl ? (i(), c("img", {
                key: 0,
                src: y.thumbUrl,
                class: u(s(a).e("file-thumb"))
              }, null, 10, Qt)) : (i(), c("span", {
                key: 1,
                class: u(s(a).e("file-icon"))
              }, z(D(y)), 3)),
              f("div", {
                class: u(s(a).e("file-info"))
              }, [
                f("span", {
                  class: u(s(a).e("file-name"))
                }, z(y.name), 3),
                y.status === "uploading" ? (i(), c("span", {
                  key: 0,
                  class: u(s(a).e("file-progress"))
                }, [
                  f("span", {
                    class: "progress-bar",
                    style: ae({ width: y.percentage + "%" })
                  }, null, 4)
                ], 2)) : N("", !0)
              ], 2),
              f("span", {
                class: u(s(a).e("file-actions"))
              }, [
                y.status === "success" ? (i(), c("span", Jt, "✓")) : N("", !0),
                f("span", {
                  class: "action-remove",
                  onClick: (o) => P(y)
                }, "✕", 8, _t)
              ], 2)
            ], 64)) : N("", !0)
          ], 2))), 128))
        ], 2)) : N("", !0)
      ], 64)),
      f("input", {
        ref_key: "inputRef",
        ref: g,
        type: "file",
        class: u(s(a).e("input")),
        multiple: n.multiple,
        accept: n.accept,
        disabled: n.disabled,
        onChange: I
      }, null, 42, el),
      $.$slots.tip ? (i(), c("div", {
        key: 3,
        class: u(s(a).e("tip"))
      }, [
        le($.$slots, "tip")
      ], 2)) : N("", !0)
    ], 2));
  }
}), tl = ["onMousemove", "onClick"], xl = /* @__PURE__ */ Z({
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
  setup(n, { emit: p }) {
    const e = n, t = p, l = Q("rate"), a = E(-1), g = h(() => a.value > -1 ? a.value : e.modelValue), v = h(() => [
      l.b(),
      l.m(e.size),
      l.is("disabled", e.disabled),
      l.is("readonly", e.readonly)
    ]), w = (d) => e.disabled ? e.disabledVoidColor : d <= e.lowThreshold ? e.colors[0] : d <= e.highThreshold ? e.colors[1] || e.colors[0] : e.colors[2] || e.colors[1] || e.colors[0], k = (d) => {
      const V = g.value;
      return V >= d ? 100 : e.allowHalf && V >= d - 0.5 ? 50 : 0;
    }, L = (d) => k(d) > 0 ? w(g.value) : e.disabled ? e.disabledVoidColor : e.voidColor, D = h(() => {
      if (e.showScore)
        return e.scoreTemplate.replace("{value}", String(e.modelValue));
      if (e.showText) {
        const d = Math.min(Math.ceil(e.modelValue || 0), e.max) - 1;
        return e.texts[Math.max(0, d)] || "";
      }
      return "";
    }), x = (d, V) => {
      if (!(e.disabled || e.readonly))
        if (e.allowHalf) {
          const S = V.currentTarget.getBoundingClientRect(), P = V.clientX - S.left < S.width / 2;
          a.value = P ? d - 0.5 : d;
        } else
          a.value = d;
    }, C = () => {
      e.disabled || e.readonly || (a.value = -1);
    }, I = (d, V) => {
      if (e.disabled || e.readonly) return;
      let M;
      if (e.allowHalf) {
        const P = V.currentTarget.getBoundingClientRect();
        M = V.clientX - P.left < P.width / 2 ? d - 0.5 : d;
      } else
        M = d;
      t("update:modelValue", M), t("change", M);
    };
    return (d, V) => (i(), c("div", {
      class: u(v.value),
      onMouseleave: C
    }, [
      f("div", {
        class: u(s(l).e("items"))
      }, [
        (i(!0), c(j, null, _(n.max, (M) => (i(), c("span", {
          key: M,
          class: u(s(l).e("item")),
          onMousemove: (S) => x(M, S),
          onClick: (S) => I(M, S)
        }, [
          f("span", {
            class: u(s(l).e("void")),
            style: ae({ color: n.disabled ? n.disabledVoidColor : n.voidColor })
          }, z(n.disabled ? n.disabledVoidIcon : n.voidIcon), 7),
          f("span", {
            class: u([s(l).e("fill"), k(M) > 0 ? "is-active" : ""]),
            style: ae({
              color: L(M),
              clipPath: `inset(0 ${100 - k(M)}% 0 0)`
            })
          }, z(n.icon), 7)
        ], 42, tl))), 128))
      ], 2),
      n.showText || n.showScore ? (i(), c("div", {
        key: 0,
        class: u(s(l).e("text")),
        style: ae({ color: n.textColor })
      }, z(D.value), 7)) : N("", !0)
    ], 34));
  }
});
export {
  dl as Checkbox,
  vl as CheckboxGroup,
  pl as DatePicker,
  fl as Form,
  ml as FormItem,
  nl as Input,
  sl as InputNumber,
  rl as Radio,
  cl as RadioButton,
  il as RadioGroup,
  xl as Rate,
  gl as Select,
  yl as Slider,
  ol as Switch,
  ul as Textarea,
  hl as TimePicker,
  bl as Transfer,
  kl as Upload
};
