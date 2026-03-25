import { onMounted as d, onUnmounted as i, watch as c, ref as l, computed as v } from "vue";
const f = (t) => typeof t == "number", m = (t) => typeof t == "string", h = (t) => typeof t == "boolean";
function w(t = !1) {
  const e = l(t);
  return {
    value: e,
    toggle: (o) => {
      h(o) ? e.value = o : e.value = !e.value;
    },
    setTrue: () => {
      e.value = !0;
    },
    setFalse: () => {
      e.value = !1;
    }
  };
}
function L(t, e, s = "modelValue", n) {
  return v({
    get() {
      const o = t[s];
      return f(o) || m(o) ? o : o ?? n;
    },
    set(o) {
      e(`update:${s}`, o);
    }
  });
}
function b(t = !1) {
  const e = l(t);
  return {
    visible: e,
    show: () => {
      e.value = !0;
    },
    hide: () => {
      e.value = !1;
    },
    toggle: () => {
      e.value = !e.value;
    }
  };
}
function p(t = !1) {
  const e = l(t);
  return {
    disabled: e,
    enable: () => {
      e.value = !1;
    },
    disable: () => {
      e.value = !0;
    }
  };
}
function E(t = !1) {
  const e = l(t);
  return {
    loading: e,
    setLoading: (n) => {
      e.value = n;
    },
    start: () => {
      e.value = !0;
    },
    end: () => {
      e.value = !1;
    }
  };
}
function y(t, e) {
  const s = (n) => {
    t.value && !t.value.contains(n.target) && e();
  };
  d(() => {
    document.addEventListener("click", s);
  }), i(() => {
    document.removeEventListener("click", s);
  });
}
function O(t) {
  const e = (s) => {
    s.key === "Escape" && t();
  };
  d(() => {
    document.addEventListener("keydown", e);
  }), i(() => {
    document.removeEventListener("keydown", e);
  });
}
function F(t, e) {
  let s = null;
  const n = () => {
    s && (s.disconnect(), s = null);
  };
  c(
    t,
    (u) => {
      n(), u && (s = new ResizeObserver((o) => {
        const { width: r, height: a } = o[0].contentRect;
        e(r, a);
      }), s.observe(u));
    },
    { immediate: !0 }
  ), i(n);
}
function I(t, e = {
  attributes: !0,
  childList: !0,
  subtree: !0
}, s) {
  let n = null;
  c(
    t,
    (u) => {
      n && n.disconnect(), u && (n = new MutationObserver(s), n.observe(u, e));
    },
    { immediate: !0 }
  ), i(() => {
    n == null || n.disconnect();
  });
}
function M(t, e) {
  const s = () => {
    const n = t.value;
    if (n && n !== window) {
      const { scrollTop: u, scrollLeft: o } = n;
      e(u, o);
    } else
      e(window.scrollY, window.scrollX);
  };
  d(() => {
    var n;
    (n = t.value) == null || n.addEventListener("scroll", s, { passive: !0 });
  }), i(() => {
    var n;
    (n = t.value) == null || n.removeEventListener("scroll", s);
  });
}
function T(t, e) {
  const s = l(!1), n = () => {
    s.value = !0, e == null || e(!0);
  }, u = () => {
    s.value = !1, e == null || e(!1);
  };
  return c(
    t,
    (o) => {
      o == null || o.addEventListener("focus", n), o == null || o.addEventListener("blur", u);
    },
    { immediate: !0 }
  ), i(() => {
    var o, r;
    (o = t.value) == null || o.removeEventListener("focus", n), (r = t.value) == null || r.removeEventListener("blur", u);
  }), {
    focused: s
  };
}
function R(t, e, s = {
  threshold: 0
}) {
  let n = null;
  c(
    t,
    (u) => {
      n && n.disconnect(), u && typeof IntersectionObserver < "u" && (n = new IntersectionObserver((o) => {
        const r = o[0];
        e(r.isIntersecting);
      }, s), n.observe(u));
    },
    { immediate: !0 }
  ), i(() => {
    n == null || n.disconnect();
  });
}
export {
  y as useClickOutside,
  I as useDOMObserver,
  p as useDisabled,
  O as useEscape,
  T as useFocus,
  R as useIntersectionObserver,
  E as useLoading,
  L as useModel,
  F as useResize,
  M as useScroll,
  w as useToggle,
  b as useVisible
};
