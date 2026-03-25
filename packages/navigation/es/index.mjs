import { defineComponent as V, useSlots as W, ref as w, watch as T, provide as A, computed as m, openBlock as u, createElementBlock as d, normalizeClass as o, createElementVNode as h, unref as r, Fragment as S, renderList as q, toDisplayString as H, renderSlot as f, inject as B, withDirectives as N, createCommentVNode as C, vShow as O, normalizeStyle as I, createTextVNode as $, createVNode as X, Transition as j, withCtx as G, onMounted as J } from "vue";
import { useNamespace as g } from "@xto/core";
const Q = ["onClick"], n0 = /* @__PURE__ */ V({
  name: "XTabs",
  __name: "index",
  props: {
    modelValue: { default: void 0 },
    activeKey: { default: void 0 },
    type: { default: "line" },
    tabPosition: { default: "top" },
    addable: { type: Boolean, default: !1 },
    closable: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:activeKey", "tabClick", "edit"],
  setup(s, { emit: n }) {
    const e = s, a = n, l = g("tabs"), t = W(), v = w(e.modelValue ?? e.activeKey ?? "");
    T([() => e.modelValue, () => e.activeKey], ([i, p]) => {
      const c = i ?? p;
      c !== void 0 && (v.value = c);
    });
    const z = (i, p) => {
      v.value = i, a("update:modelValue", i), a("update:activeKey", i);
    };
    A("tabs", {
      props: e,
      activeName: v,
      handleTabClick: z
    });
    const M = m(() => [
      l.b(),
      l.m(e.type),
      l.is(`position-${e.tabPosition}`)
    ]), b = m(() => {
      var p;
      return (((p = t.default) == null ? void 0 : p.call(t)) || []).filter((c) => c.type && c.type.name === "XTabPane").map((c) => {
        var k, y, L, D, P, E, K;
        return {
          name: ((k = c.props) == null ? void 0 : k.name) || ((y = c.props) == null ? void 0 : y.key) || ((L = c.props) == null ? void 0 : L.label) || ((D = c.props) == null ? void 0 : D.tab),
          label: ((P = c.props) == null ? void 0 : P.label) || ((E = c.props) == null ? void 0 : E.tab),
          disabled: ((K = c.props) == null ? void 0 : K.disabled) === !0
        };
      });
    });
    return (i, p) => (u(), d("div", {
      class: o(M.value)
    }, [
      h("div", {
        class: o(r(l).e("header"))
      }, [
        h("div", {
          class: o(r(l).e("nav"))
        }, [
          (u(!0), d(S, null, q(b.value, (c) => (u(), d("div", {
            key: c.name,
            class: o([
              r(l).e("item"),
              r(l).em("item", v.value === c.name ? "active" : ""),
              r(l).is("disabled", c.disabled)
            ]),
            onClick: (k) => c.disabled ? null : z(c.name)
          }, H(c.label), 11, Q))), 128))
        ], 2)
      ], 2),
      h("div", {
        class: o(r(l).e("content"))
      }, [
        f(i.$slots, "default")
      ], 2)
    ], 2));
  }
}), U = {
  class: "x-tab-pane",
  role: "tabpanel"
}, c0 = /* @__PURE__ */ V({
  name: "XTabPane",
  __name: "TabPane",
  props: {
    label: {},
    tab: {},
    name: {},
    key: {},
    disabled: { type: Boolean, default: !1 },
    closable: { type: Boolean, default: !1 },
    lazy: { type: Boolean, default: !1 }
  },
  setup(s) {
    const n = s, e = B("tabs"), a = w(!1), l = m(() => n.name || n.key || n.label || n.tab), t = m(() => (e == null ? void 0 : e.activeName.value) === l.value);
    return T(() => e == null ? void 0 : e.activeName.value, () => {
      t.value && n.lazy && !a.value && (a.value = !0);
    }, { immediate: !0 }), t.value && n.lazy && (a.value = !0), (v, z) => N((u(), d("div", U, [
      a.value || !s.lazy ? f(v.$slots, "default", { key: 0 }) : C("", !0)
    ], 512)), [
      [O, t.value]
    ]);
  }
}), i0 = /* @__PURE__ */ V({
  name: "XMenu",
  __name: "index",
  props: {
    modelValue: { default: "" },
    mode: { default: "vertical" },
    collapse: { type: Boolean, default: !1 },
    backgroundColor: { default: "#fff" },
    textColor: { default: "#303133" },
    activeTextColor: { default: "#409eff" },
    defaultOpeneds: { default: () => [] },
    router: { type: Boolean }
  },
  emits: ["update:modelValue", "select", "open", "close"],
  setup(s, { emit: n }) {
    const e = s, a = n, l = g("menu"), t = w(e.modelValue), v = w([...e.defaultOpeneds]);
    T(() => e.modelValue, (c) => {
      t.value = c;
    }), A("menu", {
      props: e,
      activeIndex: t,
      openedMenus: v,
      handleSelect: (c, k = []) => {
        t.value = c, a("update:modelValue", c), a("select", c, k);
      },
      handleOpen: (c, k = []) => {
        v.value.includes(c) || v.value.push(c), a("open", c, k);
      },
      handleClose: (c, k = []) => {
        const y = v.value.indexOf(c);
        y > -1 && v.value.splice(y, 1), a("close", c, k);
      }
    });
    const i = m(() => [
      l.b(),
      l.is("collapse", e.collapse),
      l.is(`mode-${e.mode}`)
    ]), p = m(() => ({
      backgroundColor: e.backgroundColor,
      color: e.textColor
    }));
    return (c, k) => (u(), d("ul", {
      class: o(i.value),
      style: I(p.value)
    }, [
      f(c.$slots, "default")
    ], 6));
  }
}), F = {
  // 箭头类
  "arrow-up": "M12 19V5m0 0l-7 7m7-7l7 7",
  "arrow-down": "M12 5v14m0 0l7-7m-7 7l-7-7",
  "arrow-left": "M19 12H5m0 0l7 7m-7-7l7-7",
  "arrow-right": "M5 12h14m0 0l-7-7m7 7l-7 7",
  "arrow-up-bold": "M12 5l-7 7h4v7h6v-7h4l-7-7z",
  "arrow-down-bold": "M12 19l7-7h-4V5H9v7H5l7 7z",
  "arrow-left-bold": "M5 12l7-7v4h7v6h-7v4l-7-7z",
  "arrow-right-bold": "M19 12l-7 7v-4H5v-6h7V5l7 7z",
  // 操作类
  plus: "M12 5v14m-7-7h14",
  minus: "M5 12h14",
  close: "M6 18L18 6M6 6l12 12",
  check: "M5 13l4 4L19 7",
  "check-bold": "M4 12l5 5L20 6",
  edit: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z",
  delete: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
  copy: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
  download: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
  upload: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
  refresh: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  filter: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
  more: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z",
  "more-h": "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z",
  setting: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  share: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z",
  // 状态类
  loading: "M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83",
  info: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  success: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  warning: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  error: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
  question: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  // 用户类
  user: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  "user-add": "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
  "user-group": "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  logout: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
  login: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1",
  // 文件类
  file: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  folder: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
  "folder-open": "M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z",
  document: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  // 媒体类
  image: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  video: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  music: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
  camera: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
  // 通信类
  mail: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  phone: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  chat: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  bell: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  message: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
  // 视图类
  eye: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  "eye-off": "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21",
  // 时间类
  calendar: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  history: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  timer: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  // 位置类
  location: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  map: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  globe: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  // 其他
  star: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  heart: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  "thumb-up": "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5",
  link: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  "external-link": "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
  lock: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  unlock: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z",
  key: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
  home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  menu: "M4 6h16M4 12h16M4 18h16",
  "menu-fold": "M4 6h16M4 12h10M4 18h16",
  "menu-unfold": "M4 6h16M10 12h10M4 18h16",
  "menu-collapse": "M4 6h16M4 12h10M4 18h16",
  "menu-expand": "M4 6h16M10 12h10M4 18h16",
  "sidebar-fold": "M11 19l-7-7 7-7m8 14l-7-7 7-7",
  "sidebar-expand": "M13 5l7 7-7 7M5 5l7 7-7 7",
  // 菜单导航类
  dashboard: "M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 12a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7z",
  chart: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  "chart-pie": "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
  "chart-line": "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v16",
  report: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  analytics: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  system: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M12 15a3 3 0 100-6 3 3 0 000 6z",
  permission: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  role: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  "user-manage": "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  log: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  notification: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  app: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
  list: "M4 6h16M4 10h16M4 14h16M4 18h16",
  grid: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
  fullscreen: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
  "fullscreen-exit": "M9 4V9H4m11-5v5h5M4 15h5v5m11-5h-5v5",
  "zoom-in": "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7",
  "zoom-out": "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7",
  print: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z",
  bookmark: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z",
  tag: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
  code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  terminal: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  database: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  server: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
  cloud: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  gift: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
  // 主题类
  moon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
  sun: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  theme: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  skin: "M7 4h2v1c0 1.66 1.34 3 3 3s3-1.34 3-3V4h2l3 3v6h-4l1 3v5H7v-5l1-3H4V7l3-3z"
};
function Y(s) {
  return s in F;
}
const Z = ["stroke-width"], e0 = ["d"], R = /* @__PURE__ */ V({
  name: "XIcon",
  __name: "index",
  props: {
    name: {},
    size: { default: 24 },
    color: {},
    spin: { type: Boolean, default: !1 },
    strokeWidth: { default: 2 }
  },
  setup(s) {
    const n = s, e = g("icon"), a = m(() => typeof n.size == "number" ? `${n.size}px` : n.size), l = m(() => ({
      width: a.value,
      height: a.value,
      color: n.color
    })), t = m(() => ({
      strokeWidth: n.strokeWidth
    })), v = m(() => [
      e.b(),
      e.is("spin", n.spin)
    ]), z = m(() => n.name && Y(n.name) ? F[n.name] : "");
    return (M, b) => (u(), d("span", {
      class: o(v.value),
      style: I(l.value)
    }, [
      z.value ? (u(), d("svg", {
        key: 0,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": s.strokeWidth,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        style: I(t.value)
      }, [
        h("path", { d: z.value }, null, 8, e0)
      ], 12, Z)) : f(M.$slots, "default", { key: 1 }, () => [
        $(H(s.name), 1)
      ])
    ], 6));
  }
}), x = "x-menu-item", r0 = /* @__PURE__ */ V({
  name: "XMenuItem",
  __name: "MenuItem",
  props: {
    index: { default: "" },
    disabled: { type: Boolean, default: !1 },
    icon: {}
  },
  setup(s) {
    const n = s, e = B("menu");
    W();
    const a = m(() => (e == null ? void 0 : e.activeIndex.value) === n.index), l = m(() => e == null ? void 0 : e.props.collapse), t = m(() => (e == null ? void 0 : e.props.mode) === "horizontal"), v = m(() => [
      x,
      {
        "is-active": a.value,
        "is-disabled": n.disabled,
        "is-horizontal": t.value,
        "is-collapse": l.value
      }
    ]), z = m(() => a.value && (e != null && e.props.activeTextColor) ? { color: e.props.activeTextColor } : {}), M = () => {
      n.disabled || n.index && (e == null || e.handleSelect(n.index, [n.index]));
    };
    return (b, i) => (u(), d("li", {
      class: o(v.value),
      style: I(z.value),
      onClick: M
    }, [
      h("div", {
        class: o(x + "__content")
      }, [
        s.icon ? (u(), d("span", {
          key: 0,
          class: o(x + "__icon")
        }, [
          X(r(R), {
            name: s.icon,
            size: 18
          }, null, 8, ["name"])
        ], 2)) : b.$slots.icon ? (u(), d("span", {
          key: 1,
          class: o(x + "__icon")
        }, [
          f(b.$slots, "icon")
        ], 2)) : C("", !0),
        h("span", {
          class: o(x + "__text")
        }, [
          f(b.$slots, "default")
        ], 2)
      ], 2)
    ], 6));
  }
}), a0 = { class: "x-menu-item-group" }, l0 = { class: "x-menu-item-group__title" }, u0 = /* @__PURE__ */ V({
  name: "XMenuItemGroup",
  __name: "MenuItemGroup",
  props: {
    title: {}
  },
  setup(s) {
    return (n, e) => (u(), d("li", a0, [
      h("div", l0, H(s.title), 1),
      h("ul", null, [
        f(n.$slots, "default")
      ])
    ]));
  }
}), _ = "x-sub-menu", d0 = /* @__PURE__ */ V({
  name: "XSubMenu",
  __name: "SubMenu",
  props: {
    index: { default: "" },
    title: { default: "" },
    disabled: { type: Boolean, default: !1 },
    icon: {}
  },
  setup(s) {
    const n = s, e = B("menu"), a = B("subMenu", null), l = w(!1), t = m(() => !!a), v = m(() => e == null ? void 0 : e.props.collapse), z = m(() => (e == null ? void 0 : e.activeIndex.value) === n.index), M = m(() => [
      _,
      _ + ((e == null ? void 0 : e.props.mode) === "horizontal" ? "--horizontal" : "--vertical"),
      {
        "is-active": z.value,
        "is-opened": l.value,
        "is-disabled": n.disabled,
        "is-nested": t.value,
        "is-collapse": v.value
      }
    ]), b = () => {
      n.disabled || v.value || (l.value = !l.value);
    }, i = () => {
      n.disabled || ((e == null ? void 0 : e.props.mode) === "horizontal" || v.value) && (l.value = !0);
    }, p = () => {
      ((e == null ? void 0 : e.props.mode) === "horizontal" || v.value) && (l.value = !1);
    };
    return A("subMenu", {
      isOpen: l,
      isNested: t
    }), (c, k) => {
      var y;
      return u(), d("li", {
        class: o(M.value),
        onMouseenter: i,
        onMouseleave: p
      }, [
        h("div", {
          class: o(_ + "__title"),
          onClick: b
        }, [
          h("div", {
            class: o(_ + "__content")
          }, [
            s.icon ? (u(), d("span", {
              key: 0,
              class: o(_ + "__icon")
            }, [
              X(r(R), {
                name: s.icon,
                size: 18
              }, null, 8, ["name"])
            ], 2)) : c.$slots.icon ? (u(), d("span", {
              key: 1,
              class: o(_ + "__icon")
            }, [
              f(c.$slots, "icon")
            ], 2)) : C("", !0),
            h("span", {
              class: o(_ + "__text")
            }, [
              f(c.$slots, "title", {}, () => [
                $(H(s.title), 1)
              ])
            ], 2),
            h("span", {
              class: o([_ + "__arrow", { "is-open": l.value }])
            }, [...k[0] || (k[0] = [
              h("svg", {
                viewBox: "0 0 1024 1024",
                width: "12",
                height: "12"
              }, [
                h("path", {
                  fill: "currentColor",
                  d: "M512 714.667c-17.067 0-32-6.4-44.8-19.2L147.2 375.467c-25.6-25.6-25.6-64 0-89.6s64-25.6 89.6 0L512 561.067l275.2-275.2c25.6-25.6 64-25.6 89.6 0s25.6 64 0 89.6L556.8 695.467c-12.8 12.8-27.733 19.2-44.8 19.2z"
                })
              ], -1)
            ])], 2)
          ], 2)
        ], 2),
        X(j, {
          name: ((y = r(e)) == null ? void 0 : y.props.mode) === "horizontal" ? "zoom-in-top" : "zoom-in-left"
        }, {
          default: G(() => {
            var L;
            return [
              N(h("ul", {
                class: o([_ + "__menu", { "is-horizontal": ((L = r(e)) == null ? void 0 : L.props.mode) === "horizontal", "is-collapse": v.value }])
              }, [
                f(c.$slots, "default")
              ], 2), [
                [O, l.value]
              ])
            ];
          }),
          _: 3
        }, 8, ["name"])
      ], 34);
    };
  }
}), v0 = /* @__PURE__ */ V({
  name: "XBreadcrumb",
  __name: "index",
  props: {
    separator: { default: "/" },
    separatorIcon: {}
  },
  setup(s) {
    const n = s, e = g("breadcrumb");
    A("breadcrumb", {
      separator: m(() => n.separator),
      separatorIcon: m(() => n.separatorIcon)
    });
    const a = m(() => [e.b()]);
    return (l, t) => (u(), d("nav", {
      class: o(a.value),
      "aria-label": "Breadcrumb"
    }, [
      h("ol", {
        class: o(r(e).e("list"))
      }, [
        f(l.$slots, "default")
      ], 2)
    ], 2));
  }
}), s0 = ["aria-current"], m0 = /* @__PURE__ */ V({
  name: "XBreadcrumbItem",
  __name: "BreadcrumbItem",
  props: {
    to: {},
    replace: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["click"],
  setup(s, { emit: n }) {
    const e = s, a = n, l = g("breadcrumb"), t = B("breadcrumb"), v = m(() => [
      l.e("item"),
      l.is("link", !!e.to && !e.disabled),
      l.is("disabled", e.disabled)
    ]), z = m(() => {
      var i;
      return ((i = t == null ? void 0 : t.separator) == null ? void 0 : i.value) || "/";
    }), M = m(() => {
      var i;
      return (i = t == null ? void 0 : t.separatorIcon) == null ? void 0 : i.value;
    }), b = (i) => {
      e.disabled || (a("click", i), e.to && typeof e.to == "string" && (e.replace ? window.location.replace(e.to) : window.location.href = e.to));
    };
    return (i, p) => (u(), d("li", {
      class: o(v.value)
    }, [
      s.to && !s.disabled ? (u(), d("span", {
        key: 0,
        class: o(r(l).e("link")),
        onClick: b
      }, [
        f(i.$slots, "default")
      ], 2)) : (u(), d("span", {
        key: 1,
        class: o(r(l).e("text")),
        "aria-current": s.disabled ? "page" : void 0
      }, [
        f(i.$slots, "default")
      ], 10, s0)),
      h("span", {
        class: o(r(l).e("separator")),
        "aria-hidden": "true"
      }, [
        M.value ? (u(), d("span", {
          key: 0,
          class: o(r(l).e("separator-icon"))
        }, H(M.value), 3)) : (u(), d(S, { key: 1 }, [
          $(H(z.value), 1)
        ], 64))
      ], 2)
    ], 2));
  }
}), h0 = /* @__PURE__ */ V({
  name: "XSteps",
  __name: "index",
  props: {
    active: { default: 0 },
    direction: { default: "horizontal" },
    simple: { type: Boolean, default: !1 },
    finishStatus: { default: "finish" },
    processStatus: { default: "process" },
    alignCenter: { type: Boolean, default: !1 },
    space: {}
  },
  emits: ["change", "update:active"],
  setup(s, { emit: n }) {
    const e = s, a = n, l = g("steps"), t = w(e.active), v = w(0);
    T(() => e.active, (p) => {
      t.value = p;
    }), A("steps", {
      props: e,
      currentActive: t,
      stepCount: v,
      setCurrentActive: (p) => {
        t.value = p, a("change", p), a("update:active", p);
      },
      setStepCount: (p) => {
        v.value = p;
      }
    });
    const b = m(() => [
      l.b(),
      l.m(e.direction),
      l.is("simple", e.simple),
      l.is("center", e.alignCenter)
    ]), i = m(() => e.space ? {
      "--steps-space": typeof e.space == "number" ? `${e.space}px` : e.space
    } : {});
    return (p, c) => (u(), d("div", {
      class: o(b.value),
      style: I(i.value)
    }, [
      f(p.$slots, "default")
    ], 6));
  }
}), p0 = /* @__PURE__ */ V({
  name: "XStep",
  __name: "Step",
  props: {
    title: { default: "" },
    description: { default: "" },
    icon: {},
    status: {}
  },
  setup(s) {
    const n = s, e = g("step"), a = B("steps"), l = w(-1);
    J(() => {
      a && (l.value = a.stepCount.value, a.setStepCount(a.stepCount.value + 1));
    });
    const t = m(() => {
      var p, c, k;
      if (n.status) return n.status;
      const i = ((p = a == null ? void 0 : a.currentActive) == null ? void 0 : p.value) ?? 0;
      return l.value < i ? ((c = a == null ? void 0 : a.props) == null ? void 0 : c.finishStatus) || "finish" : l.value === i ? ((k = a == null ? void 0 : a.props) == null ? void 0 : k.processStatus) || "process" : "wait";
    }), v = m(() => {
      var i;
      return l.value === (((i = a == null ? void 0 : a.stepCount) == null ? void 0 : i.value) || 0) - 1;
    }), z = m(() => l.value === 0);
    m(() => ({
      wait: "#c0c4cc",
      process: "#409eff",
      finish: "#67c23a",
      error: "#f56c6c",
      success: "#67c23a"
    })[t.value] || "#c0c4cc");
    const M = m(() => {
      var i;
      return [
        e.b(),
        e.is(t.value),
        e.is("last", v.value),
        e.m(((i = a == null ? void 0 : a.props) == null ? void 0 : i.direction) || "horizontal")
      ];
    }), b = () => {
      var i;
      l.value > -1 && ((i = a == null ? void 0 : a.setCurrentActive) == null || i.call(a, l.value));
    };
    return (i, p) => (u(), d("div", {
      class: o(M.value),
      onClick: b
    }, [
      h("div", {
        class: o(r(e).e("head"))
      }, [
        z.value ? C("", !0) : (u(), d("div", {
          key: 0,
          class: o([r(e).e("line"), r(e).em("line", "prev")])
        }, null, 2)),
        h("div", {
          class: o(r(e).e("icon"))
        }, [
          s.icon ? (u(), d("span", {
            key: 0,
            class: o(r(e).e("icon-inner"))
          }, H(s.icon), 3)) : (u(), d("span", {
            key: 1,
            class: o(r(e).e("icon-inner"))
          }, [
            t.value === "finish" || t.value === "success" ? (u(), d(S, { key: 0 }, [
              $("✓")
            ], 64)) : t.value === "error" ? (u(), d(S, { key: 1 }, [
              $("✕")
            ], 64)) : (u(), d(S, { key: 2 }, [
              $(H(l.value + 1), 1)
            ], 64))
          ], 2))
        ], 2),
        v.value ? C("", !0) : (u(), d("div", {
          key: 1,
          class: o(r(e).e("line"))
        }, null, 2))
      ], 2),
      h("div", {
        class: o(r(e).e("content"))
      }, [
        h("div", {
          class: o(r(e).e("title"))
        }, [
          f(i.$slots, "title", {}, () => [
            $(H(s.title), 1)
          ])
        ], 2),
        s.description || i.$slots.description ? (u(), d("div", {
          key: 0,
          class: o(r(e).e("description"))
        }, [
          f(i.$slots, "description", {}, () => [
            $(H(s.description), 1)
          ])
        ], 2)) : C("", !0)
      ], 2)
    ], 2));
  }
}), M0 = /* @__PURE__ */ V({
  name: "XPageHeader",
  __name: "index",
  props: {
    title: { default: "" },
    subtitle: { default: "" },
    backText: { default: "返回" },
    showBack: { type: Boolean, default: !1 }
  },
  emits: ["back"],
  setup(s, { emit: n }) {
    const e = n, a = g("page-header"), l = () => {
      e("back");
    };
    return (t, v) => (u(), d("div", {
      class: o(r(a).b())
    }, [
      h("div", {
        class: o(r(a).e("main"))
      }, [
        h("div", {
          class: o(r(a).e("left"))
        }, [
          s.showBack ? (u(), d("span", {
            key: 0,
            class: o(r(a).e("back")),
            onClick: l
          }, [
            h("span", {
              class: o(r(a).e("back-icon"))
            }, "←", 2),
            s.backText ? (u(), d("span", {
              key: 0,
              class: o(r(a).e("back-text"))
            }, H(s.backText), 3)) : C("", !0)
          ], 2)) : C("", !0),
          h("span", {
            class: o(r(a).e("title"))
          }, [
            f(t.$slots, "title", {}, () => [
              $(H(s.title), 1)
            ])
          ], 2),
          s.subtitle || t.$slots.subtitle ? (u(), d("span", {
            key: 1,
            class: o(r(a).e("subtitle"))
          }, [
            f(t.$slots, "subtitle", {}, () => [
              $(H(s.subtitle), 1)
            ])
          ], 2)) : C("", !0)
        ], 2),
        h("div", {
          class: o(r(a).e("extra"))
        }, [
          f(t.$slots, "extra")
        ], 2)
      ], 2),
      t.$slots.default ? (u(), d("div", {
        key: 0,
        class: o(r(a).e("content"))
      }, [
        f(t.$slots, "default")
      ], 2)) : C("", !0),
      t.$slots.footer ? (u(), d("div", {
        key: 1,
        class: o(r(a).e("footer"))
      }, [
        f(t.$slots, "footer")
      ], 2)) : C("", !0)
    ], 2));
  }
}), f0 = /* @__PURE__ */ V({
  name: "XDropdown",
  __name: "index",
  props: {
    trigger: { default: "hover" },
    placement: { default: "bottom" },
    disabled: { type: Boolean, default: !1 },
    visible: { type: Boolean },
    hideOnClick: { type: Boolean, default: !0 }
  },
  emits: ["visible-change", "click", "command"],
  setup(s, { emit: n }) {
    const e = s, a = n, l = g("dropdown"), t = w(e.visible || !1), v = w(), z = () => {
      e.disabled || (t.value = !0, a("visible-change", !0));
    }, M = () => {
      t.value = !1, a("visible-change", !1);
    }, b = () => {
      t.value ? M() : z();
    };
    A("x-dropdown", {
      visible: t,
      handleClick: (y) => {
        a("click", y), a("command", y), e.hideOnClick && M();
      },
      hide: M
    });
    const p = () => {
      e.trigger === "hover" && z();
    }, c = () => {
      e.trigger === "hover" && M();
    }, k = (y) => {
      v.value && !v.value.contains(y.target) && M();
    };
    return typeof window < "u" && document.addEventListener("click", k), (y, L) => (u(), d("div", {
      ref_key: "dropdownRef",
      ref: v,
      class: o([r(l).b(), r(l).is("disabled", s.disabled)]),
      onMouseenter: p,
      onMouseleave: c
    }, [
      h("div", {
        class: o(r(l).e("trigger")),
        onClick: L[0] || (L[0] = (D) => s.trigger === "click" && b())
      }, [
        f(y.$slots, "default")
      ], 2),
      X(j, { name: "x-dropdown-zoom" }, {
        default: G(() => [
          N(h("div", {
            class: o([r(l).e("menu"), r(l).m(s.placement)])
          }, [
            f(y.$slots, "dropdown")
          ], 2), [
            [O, t.value]
          ])
        ]),
        _: 3
      })
    ], 34));
  }
}), z0 = /* @__PURE__ */ V({
  name: "XDropdownMenu",
  __name: "DropdownMenu",
  setup(s) {
    const n = g("dropdown-menu");
    return (e, a) => (u(), d("ul", {
      class: o(r(n).b())
    }, [
      f(e.$slots, "default")
    ], 2));
  }
}), b0 = /* @__PURE__ */ V({
  name: "XDropdownItem",
  __name: "DropdownItem",
  props: {
    command: {},
    disabled: { type: Boolean },
    divided: { type: Boolean },
    icon: {}
  },
  emits: ["click"],
  setup(s, { emit: n }) {
    const e = s, a = n, l = g("dropdown-item"), t = B("x-dropdown"), v = (M) => {
      e.disabled || (a("click", M), t != null && t.handleClick && t.handleClick(e.command ?? M));
    }, z = m(() => [
      l.b(),
      l.is("disabled", e.disabled),
      l.is("divided", e.divided)
    ]);
    return (M, b) => (u(), d("li", {
      class: o(z.value),
      onClick: v
    }, [
      s.icon ? (u(), d("span", {
        key: 0,
        class: o(r(l).e("icon"))
      }, H(s.icon), 3)) : C("", !0),
      h("span", {
        class: o(r(l).e("content"))
      }, [
        f(M.$slots, "default")
      ], 2)
    ], 2));
  }
});
export {
  v0 as Breadcrumb,
  m0 as BreadcrumbItem,
  f0 as Dropdown,
  b0 as DropdownItem,
  z0 as DropdownMenu,
  i0 as Menu,
  r0 as MenuItem,
  u0 as MenuItemGroup,
  M0 as PageHeader,
  p0 as Step,
  h0 as Steps,
  d0 as SubMenu,
  c0 as TabPane,
  n0 as Tabs
};
