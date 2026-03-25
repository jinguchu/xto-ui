const g = {
  mode: "light",
  primary: "#409eff",
  success: "#67c23a",
  warning: "#e6a23c",
  danger: "#f56c6c",
  info: "#909399",
  size: "default"
}, u = {
  large: 40,
  default: 32,
  small: 24
};
function h(r, e = 10) {
  const o = [], n = r.startsWith("#"), f = r.startsWith("rgb");
  let s, a, c;
  if (n) {
    const t = r.slice(1);
    s = parseInt(t.slice(0, 2), 16), a = parseInt(t.slice(2, 4), 16), c = parseInt(t.slice(4, 6), 16);
  } else if (f) {
    const t = r.match(/\d+/g);
    if (t)
      s = Number(t[0]), a = Number(t[1]), c = Number(t[2]);
    else
      return o;
  } else
    return o;
  const i = 100 / (e + 1);
  for (let t = 1; t <= e; t++) {
    const l = 1 - i * t / 100, $ = Math.round(s + (255 - s) * l), d = Math.round(a + (255 - a) * l), p = Math.round(c + (255 - c) * l);
    o.push(`rgb(${$}, ${d}, ${p})`);
  }
  return o;
}
const b = "--xto";
function m(r) {
  const e = b;
  return {
    [`${e}-color-primary`]: r.primary,
    [`${e}-color-success`]: r.success,
    [`${e}-color-warning`]: r.warning,
    [`${e}-color-danger`]: r.danger,
    [`${e}-color-info`]: r.info,
    [`${e}-color-text`]: "#303133",
    [`${e}-color-text-placeholder`]: "#a8abb2",
    [`${e}-color-text-disabled`]: "#c0c4cc",
    [`${e}-border-color`]: "#dcdfe6",
    [`${e}-border-color-light`]: "#e4e7ed",
    [`${e}-border-color-lighter`]: "#ebeef5",
    [`${e}-fill-color`]: "#f5f7fa",
    [`${e}-fill-color-light`]: "#fafafa",
    [`${e}-bg-color`]: "#ffffff",
    [`${e}-bg-color-page`]: "#f2f3f5",
    [`${e}-bg-color-overlay`]: "#ffffff",
    [`${e}-font-size`]: r.size === "large" ? "15px" : r.size === "small" ? "13px" : "14px",
    [`${e}-component-size`]: `${u[r.size]}px`
  };
}
export {
  b as cssVarPrefix,
  g as defaultThemeConfig,
  m as generateCSSVars,
  h as generateColorPalette,
  u as sizeMap
};
