import { defineComponent as le, computed as M, openBlock as o, createElementBlock as d, normalizeStyle as te, normalizeClass as u, createElementVNode as r, renderSlot as ue, createTextVNode as de, toDisplayString as N, ref as A, useSlots as Le, watch as oe, unref as n, createCommentVNode as U, withDirectives as ie, vModelDynamic as je, createVNode as Q, vModelText as Ve, withKeys as Ne, withModifiers as se, inject as xe, provide as $e, toRef as Ge, onMounted as ge, onUnmounted as De, Fragment as J, renderList as _, createBlock as fe, Teleport as Ie, Transition as Pe, withCtx as He, vModelSelect as Ce, vShow as be, nextTick as Se, defineAsyncComponent as Ue, shallowRef as Je, onBeforeUnmount as Ze } from "vue";
import { useNamespace as ae, useZIndex as Ee } from "@xto/core";
const Xe = {
  // 箭头类
  "arrow-up": "M12 19V5m0 0l-7 7m7-7l7 7",
  "arrow-down": "M12 5v14m0 0l7-7m-7 7l-7-7",
  "arrow-left": "M19 12H5m0 0l7 7m-7-7l7-7",
  "arrow-right": "M5 12h14m0 0l-7-7m7 7l-7 7",
  "arrow-up-bold": "M12 5l-7 7h4v7h6v-7h4l-7-7z",
  "arrow-down-bold": "M12 19l7-7h-4V5H9v7H5l7 7z",
  "arrow-left-bold": "M5 12l7-7v4h7v6h-7v4l-7-7z",
  "arrow-right-bold": "M19 12l-7 7v-4H5v-6h7V5l7 7z",
  // 树形结构类
  "caret-down": "M6 9l6 6 6-6",
  "caret-right": "M9 18l6-6-6-6",
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
  "sidebar-left": "M11 19l-7-7 7-7m8 14l-7-7 7-7",
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
  skin: "M7 4h2v1c0 1.66 1.34 3 3 3s3-1.34 3-3V4h2l3 3v6h-4l1 3v5H7v-5l1-3H4V7l3-3z",
  // Markdown 编辑器类
  heading: "M4 6h16M4 12h8m-8 6h16",
  // 标题
  bold: "M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z",
  // 粗体
  italic: "M10 4h4m-2 0v16m-4 0h8",
  // 斜体
  strikethrough: "M16 4H8a4 4 0 00-4 4v4h16V8a4 4 0 00-4-4zM4 12h16m-4 4H8a4 4 0 00-4 4v0a4 4 0 004 4h8a4 4 0 004-4v0a4 4 0 00-4-4z",
  // 删除线
  "list-bullet": "M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12",
  // 无序列表
  "list-number": "M4 6h2M4 12h2M4 18h2M8 6h12M8 12h12M8 18h12",
  // 有序列表
  "link-text": "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  // 链接
  "image-insert": "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  // 图片
  "code-inline": "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  // 代码
  "divider-h": "M4 12h16",
  // 分割线
  quote: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
  // 引用
  "code-block": "M4 4h16v16H4z M8 8h8M8 12h8M8 16h4",
  // 代码块
  // 排序和展开类
  "sort-up": "M12 5v14m-7-7l7-7 7 7",
  // 向上排序
  "sort-down": "M12 19V5m7 7l-7 7-7-7",
  // 向下排序
  "chevron-down": "M6 9l6 6 6-6",
  // 向下展开
  "chevron-right": "M9 18l6-6-6-6",
  // 向右展开
  "chevron-up": "M18 15l-6-6-6 6",
  // 向上收起
  "chevron-left": "M15 18l-6-6 6-6",
  // 向左收起
  // 移动类
  "move-up": "M5 15l7-7 7 7",
  // 上移
  "move-down": "M19 9l-7 7-7-7",
  // 下移
  "back-top": "M12 19V5m-7 7l7-7 7 7",
  // 回到顶部
  // 下拉箭头
  "dropdown-arrow": "M6 9l6 6 6-6",
  // 关闭/错误类
  "close-circle": "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
  // 圆形关闭
  "close-bold": "M6 18L18 6M6 6l12 12",
  // 加粗关闭
  // 圆形状态类
  "check-circle": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  // 圆形勾选
  "info-circle": "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  // 圆形信息
  "warning-circle": "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  // 圆形警告
  // 返回类
  "back-arrow": "M19 12H5m0 0l7 7m-7-7l7-7",
  // 返回箭头
  // 日历导航类
  "d-arrow-left": "M11 17l-5-5 5-5M18 17l-5-5 5-5",
  // 双左箭头
  "d-arrow-right": "M6 7l5 5-5 5M13 7l5 5-5 5",
  // 双右箭头
  // 方向箭头类
  left: "M15 19l-7-7 7-7",
  // 左箭头
  right: "M9 5l7 7-7 7",
  // 右箭头
  down: "M19 9l-7 7-7-7",
  // 下箭头
  up: "M5 15l7-7 7 7"
  // 上箭头
};
function Qe(s) {
  return s in Xe;
}
const _e = ["aria-hidden", "aria-label"], el = ["stroke-width"], ll = ["d"], ee = /* @__PURE__ */ le({
  name: "XIcon",
  __name: "index",
  props: {
    name: {},
    size: { default: 24 },
    color: {},
    spin: { type: Boolean, default: !1 },
    strokeWidth: { default: 2 }
  },
  setup(s, { expose: k }) {
    const a = s, e = ae("icon"), t = M(() => typeof a.size == "number" ? `${a.size}px` : a.size), l = M(() => ({
      width: t.value,
      height: t.value,
      color: a.color
    })), c = M(() => ({
      strokeWidth: a.strokeWidth
    })), m = M(() => [
      e.b(),
      e.is("spin", a.spin)
    ]), b = M(() => a.name && Qe(a.name) ? Xe[a.name] : "");
    return k({
      iconSize: t,
      iconStyle: l,
      iconPath: b
    }), (T, S) => (o(), d("span", {
      class: u(m.value),
      style: te(l.value),
      "aria-hidden": !s.name,
      "aria-label": s.name,
      role: "img"
    }, [
      b.value ? (o(), d("svg", {
        key: 0,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": s.strokeWidth,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        style: te(c.value),
        "aria-hidden": "true"
      }, [
        r("path", { d: b.value }, null, 8, ll)
      ], 12, el)) : ue(T.$slots, "default", { key: 1 }, () => [
        de(N(s.name), 1)
      ])
    ], 14, _e));
  }
}), al = ["type", "placeholder", "disabled", "readonly", "maxlength", "minlength"], _a = /* @__PURE__ */ le({
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
  setup(s, { expose: k, emit: a }) {
    const e = s, t = a, l = ae("input"), c = A(), m = A(!1), b = A(!1), T = Le(), S = M(
      () => e.type === "password" && e.showPassword && !e.disabled
    ), C = M(() => S.value ? b.value ? "text" : "password" : e.type);
    M(() => e.modelValue !== void 0), M(() => e.value !== void 0);
    const D = A("");
    oe(
      [() => e.modelValue, () => e.value],
      ([H, R]) => {
        const Y = H ?? R ?? "";
        Y !== D.value && (D.value = Y);
      },
      { immediate: !0 }
    );
    const z = (H) => {
      D.value = H, t("update:modelValue", H), t("update:value", H), t("input", H);
    }, O = M(() => String(D.value).length), y = M(() => [
      l.b(),
      e.size !== "default" ? l.m(e.size) : "",
      l.is("disabled", e.disabled),
      l.is("focus", m.value),
      l.is("has-prefix", !!(e.prefixIcon || T.prefix)),
      l.is("has-suffix", !!(e.suffixIcon || T.suffix || e.clearable || S.value || e.showWordLimit))
    ]), B = (H) => {
      const R = H.target.value;
      t("change", R);
    }, P = (H) => {
      m.value = !0, t("focus", H);
    }, F = (H) => {
      m.value = !1, t("blur", H);
    }, V = () => {
      D.value = "", t("update:modelValue", ""), t("update:value", ""), t("clear");
    }, h = () => {
      b.value = !b.value;
    };
    return k({
      focus: () => {
        var H;
        (H = c.value) == null || H.focus();
      },
      blur: () => {
        var H;
        (H = c.value) == null || H.blur();
      },
      inputRef: c
    }), (H, R) => (o(), d("div", {
      class: u(y.value)
    }, [
      H.$slots.prefix || s.prefixIcon ? (o(), d("span", {
        key: 0,
        class: u(n(l).e("prefix"))
      }, [
        ue(H.$slots, "prefix", {}, () => [
          r("span", {
            class: u(n(l).e("icon"))
          }, N(s.prefixIcon), 3)
        ])
      ], 2)) : U("", !0),
      ie(r("input", {
        ref_key: "inputRef",
        ref: c,
        "onUpdate:modelValue": R[0] || (R[0] = (Y) => D.value = Y),
        type: C.value,
        placeholder: s.placeholder,
        disabled: s.disabled,
        readonly: s.readonly,
        maxlength: s.maxlength,
        minlength: s.minlength,
        class: u(n(l).e("inner")),
        onInput: R[1] || (R[1] = (Y) => z(Y.target.value)),
        onChange: B,
        onFocus: P,
        onBlur: F
      }, null, 42, al), [
        [je, D.value]
      ]),
      H.$slots.suffix || s.suffixIcon || s.clearable || S.value || s.showWordLimit ? (o(), d("span", {
        key: 1,
        class: u(n(l).e("suffix"))
      }, [
        ue(H.$slots, "suffix", {}, () => [
          s.clearable && s.value && !s.disabled ? (o(), d("span", {
            key: 0,
            class: u([n(l).e("icon"), n(l).e("clear")]),
            onClick: V
          }, [
            Q(n(ee), {
              name: "close",
              size: 14
            })
          ], 2)) : U("", !0),
          S.value ? (o(), d("span", {
            key: 1,
            class: u([n(l).e("icon"), n(l).e("password")]),
            onClick: h
          }, [
            Q(n(ee), {
              name: b.value ? "eye-off" : "eye",
              size: 14
            }, null, 8, ["name"])
          ], 2)) : U("", !0),
          s.showWordLimit && s.maxlength ? (o(), d("span", {
            key: 2,
            class: u(n(l).e("count"))
          }, N(O.value) + "/" + N(s.maxlength), 3)) : U("", !0)
        ])
      ], 2)) : U("", !0)
    ], 2));
  }
}), tl = ["disabled"], nl = ["value", "placeholder", "disabled"], sl = ["disabled"], et = /* @__PURE__ */ le({
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
  setup(s, { expose: k, emit: a }) {
    const e = s, t = a, l = ae("input-number"), c = A(), m = A(!1), b = A(null), T = A(e.modelValue), S = M(() => {
      if (e.precision !== void 0)
        return e.precision;
      const i = C(e.step), f = e.modelValue !== void 0 && e.modelValue !== null ? C(e.modelValue) : 0;
      return Math.max(i, f);
    });
    function C(i) {
      if (i == null) return 0;
      const f = i.toString(), g = f.indexOf(".");
      return g === -1 ? 0 : f.length - g - 1;
    }
    function D(i, f = S.value) {
      if (f === 0) return Math.round(i);
      let g = i.toFixed(f);
      return Number(g);
    }
    function z(i) {
      return i > e.max ? e.max : i < e.min ? e.min : i;
    }
    const O = M(() => e.modelValue ?? e.value ?? void 0), y = M(() => b.value !== null ? b.value : O.value === void 0 || O.value === null ? "" : D(O.value)), B = M(() => e.disabled ? !0 : O.value === void 0 ? e.min !== -1 / 0 : O.value <= e.min), P = M(() => e.disabled ? !0 : O.value === void 0 ? e.max !== 1 / 0 : O.value >= e.max), F = M(() => [
      l.b(),
      e.size !== "default" ? l.m(e.size) : "",
      l.is("disabled", e.disabled),
      l.is("focus", m.value),
      e.controlsPosition ? l.m(e.controlsPosition) : ""
    ]);
    function V() {
      if (e.disabled || P.value) return;
      const i = O.value ?? (e.min === -1 / 0 ? 0 : e.min), f = D(i + e.step), g = z(f);
      v(g);
    }
    function h() {
      if (e.disabled || B.value) return;
      const i = O.value ?? (e.min === -1 / 0 ? 0 : e.min), f = D(i - e.step), g = z(f);
      v(g);
    }
    function v(i) {
      const f = T.value;
      if (i === void 0)
        e.modelValue !== void 0 && t("update:modelValue", void 0), e.value !== void 0 && t("update:value", void 0), e.modelValue === void 0 && e.value === void 0 && t("update:modelValue", void 0), t("change", void 0, f);
      else {
        const g = D(i), K = z(g);
        if (e.stepStrictly) {
          const ne = Math.round((K - e.min) / e.step), X = D(e.min + ne * e.step);
          e.modelValue !== void 0 && t("update:modelValue", X), e.value !== void 0 && t("update:value", X), e.modelValue === void 0 && e.value === void 0 && t("update:modelValue", X), t("change", X, f);
        } else
          e.modelValue !== void 0 && t("update:modelValue", K), e.value !== void 0 && t("update:value", K), e.modelValue === void 0 && e.value === void 0 && t("update:modelValue", K), t("change", K, f);
      }
      T.value = e.modelValue ?? e.value, b.value = null;
    }
    function $(i) {
      if (i === "" || i === "-")
        return;
      let f = i.replace(/[^\d.-]/g, "");
      const g = f.split(".");
      g.length > 2 && (f = g[0] + "." + g.slice(1).join("")), f.indexOf("-") > 0 && (f = f.replace(/-/g, "")), f.lastIndexOf("-") > 0 && (f = "-" + f.replace(/-/g, ""));
      const K = Number(f);
      if (!isNaN(K))
        return K;
    }
    function H(i) {
      const f = i.target.value;
      b.value = f;
    }
    function R(i) {
      if (m.value = !1, b.value !== null) {
        const f = $(b.value);
        f === void 0 ? e.valueOnClear !== null ? v(e.valueOnClear) : b.value = null : v(f);
      }
      t("blur", i);
    }
    function Y(i) {
      m.value = !0, T.value = e.modelValue, t("focus", i);
    }
    function j(i) {
      var f;
      if (!e.disabled)
        switch (i.key) {
          case "ArrowUp":
            i.preventDefault(), V();
            break;
          case "ArrowDown":
            i.preventDefault(), h();
            break;
          case "Enter":
            (f = c.value) == null || f.blur();
            break;
        }
    }
    function p() {
      b.value = null, e.valueOnClear !== null && e.valueOnClear !== void 0 ? v(e.valueOnClear) : (e.modelValue !== void 0 && t("update:modelValue", void 0), e.value !== void 0 && t("update:value", void 0), e.modelValue === void 0 && e.value === void 0 && t("update:modelValue", void 0), t("change", void 0, T.value), T.value = void 0);
    }
    function x() {
      var i;
      (i = c.value) == null || i.focus();
    }
    function w() {
      var i;
      (i = c.value) == null || i.blur();
    }
    return oe([() => e.modelValue, () => e.value], ([i, f]) => {
      T.value = i ?? f, b.value = null;
    }, { immediate: !0 }), k({
      focus: x,
      blur: w,
      clear: p,
      increase: V,
      decrease: h
    }), (i, f) => (o(), d("div", {
      class: u(F.value)
    }, [
      s.controls ? (o(), d("button", {
        key: 0,
        type: "button",
        class: u([n(l).e("decrease"), n(l).is("disabled", B.value)]),
        disabled: B.value,
        onClick: h
      }, " − ", 10, tl)) : U("", !0),
      r("div", {
        class: u(n(l).e("wrapper"))
      }, [
        r("input", {
          ref_key: "inputRef",
          ref: c,
          value: y.value,
          placeholder: s.placeholder,
          disabled: s.disabled,
          class: u(n(l).e("inner")),
          type: "text",
          autocomplete: "off",
          onInput: H,
          onFocus: Y,
          onBlur: R,
          onKeydown: j
        }, null, 42, nl)
      ], 2),
      s.controls ? (o(), d("button", {
        key: 1,
        type: "button",
        class: u([n(l).e("increase"), n(l).is("disabled", P.value)]),
        disabled: P.value,
        onClick: V
      }, " + ", 10, sl)) : U("", !0)
    ], 2));
  }
}), ul = ["placeholder", "disabled", "readonly", "maxlength", "minlength", "rows"], lt = /* @__PURE__ */ le({
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
  setup(s, { expose: k, emit: a }) {
    const e = s, t = a, l = ae("textarea"), c = A(), m = A(!1), b = A("");
    oe(
      [() => e.modelValue, () => e.value],
      ([V, h]) => {
        const v = V ?? h ?? "";
        v !== b.value && (b.value = v);
      },
      { immediate: !0 }
    );
    const T = (V) => {
      b.value = V, t("update:modelValue", V), t("update:value", V), t("input", V);
    }, S = M(() => String(b.value).length), C = M(() => {
      const V = {};
      if (e.resize && (V.resize = e.resize), e.autosize && (V.minHeight = "auto", typeof e.autosize == "object")) {
        const h = e.autosize.minRows || 1, v = e.autosize.maxRows;
        V.minHeight = `${h * 22 + 12}px`, v && (V.maxHeight = `${v * 22 + 12}px`);
      }
      return V;
    }), D = M(() => [
      l.b(),
      l.is("disabled", e.disabled),
      l.is("focus", m.value),
      l.is("exceed", !!e.maxlength && S.value > e.maxlength)
    ]), z = (V) => {
      const h = V.target.value;
      T(h), e.autosize && c.value && (c.value.style.height = "auto", c.value.style.height = `${c.value.scrollHeight}px`);
    }, O = (V) => {
      const h = V.target.value;
      t("change", h);
    }, y = (V) => {
      m.value = !0, t("focus", V);
    }, B = (V) => {
      m.value = !1, t("blur", V);
    };
    return k({
      focus: () => {
        var V;
        (V = c.value) == null || V.focus();
      },
      blur: () => {
        var V;
        (V = c.value) == null || V.blur();
      },
      textareaRef: c
    }), (V, h) => (o(), d("div", {
      class: u(D.value),
      style: te(s.disabled ? void 0 : { cursor: "text" })
    }, [
      ie(r("textarea", {
        ref_key: "textareaRef",
        ref: c,
        "onUpdate:modelValue": h[0] || (h[0] = (v) => b.value = v),
        placeholder: s.placeholder,
        disabled: s.disabled,
        readonly: s.readonly,
        maxlength: s.maxlength,
        minlength: s.minlength,
        rows: s.rows,
        style: te(C.value),
        class: u(n(l).e("inner")),
        onInput: z,
        onChange: O,
        onFocus: y,
        onBlur: B
      }, null, 46, ul), [
        [Ve, b.value]
      ]),
      s.showWordLimit && s.maxlength ? (o(), d("span", {
        key: 0,
        class: u(n(l).e("count"))
      }, N(S.value) + "/" + N(s.maxlength), 3)) : U("", !0)
    ], 6));
  }
}), ol = ["tabindex", "aria-checked", "aria-disabled", "onKeydown"], at = /* @__PURE__ */ le({
  name: "XSwitch",
  __name: "index",
  props: {
    modelValue: { type: [Boolean, Number, String], default: void 0 },
    checked: { type: [Boolean, Number, String], default: void 0 },
    disabled: { type: Boolean, default: !1 },
    width: { default: 40 },
    activeColor: { default: "#4F46E5" },
    inactiveColor: { default: "" },
    activeValue: { type: [Boolean, Number, String], default: !0 },
    inactiveValue: { type: [Boolean, Number, String], default: !1 }
  },
  emits: ["update:modelValue", "update:checked", "change"],
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("switch"), l = M(() => a.modelValue !== void 0 ? a.modelValue : a.checked !== void 0 ? a.checked : !1), c = M(() => l.value === a.activeValue), m = M(() => [
      t.b(),
      t.is("disabled", a.disabled),
      t.is("checked", c.value)
    ]), b = M(() => {
      const C = { width: typeof a.width == "number" ? `${a.width}px` : a.width, height: "20px" };
      return c.value ? a.activeColor && (C.backgroundColor = a.activeColor) : a.inactiveColor && (C.backgroundColor = a.inactiveColor), C;
    }), T = () => {
      if (a.disabled) return;
      const S = c.value ? a.inactiveValue : a.activeValue;
      a.modelValue !== void 0 && e("update:modelValue", S), a.checked !== void 0 && e("update:checked", S), a.modelValue === void 0 && a.checked === void 0 && e("update:modelValue", S), e("change", S);
    };
    return (S, C) => (o(), d("span", {
      class: u(m.value),
      role: "switch",
      tabindex: s.disabled ? -1 : 0,
      "aria-checked": c.value,
      "aria-disabled": s.disabled,
      onClick: T,
      onKeydown: [
        Ne(se(T, ["prevent"]), ["enter"]),
        Ne(se(T, ["prevent"]), ["space"])
      ]
    }, [
      r("span", {
        class: u(n(t).e("core")),
        style: te(b.value)
      }, null, 6),
      S.$slots.default ? (o(), d("span", {
        key: 0,
        class: u(n(t).e("text"))
      }, [
        ue(S.$slots, "default")
      ], 2)) : U("", !0)
    ], 42, ol));
  }
}), il = ["checked", "disabled", "name", "value"], tt = /* @__PURE__ */ le({
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
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("radio"), l = xe("radioGroup", null), c = M(() => !!l), m = M(() => c.value ? l.modelValue.value : a.modelValue), b = M(() => a.value ?? a.label), T = M(() => m.value === b.value), S = M(() => a.disabled || c.value && l.disabled), C = M(() => a.name || (c.value ? l.name : void 0)), D = M(() => [
      t.b(),
      t.is("checked", T.value),
      t.is("disabled", S.value)
    ]), z = () => {
      S.value || b.value === void 0 || (c.value ? l.changeValue(b.value) : (e("update:modelValue", b.value), e("change", b.value)));
    };
    return (O, y) => (o(), d("label", {
      class: u(D.value),
      onClick: se(z, ["prevent"])
    }, [
      r("span", {
        class: u(n(t).e("input"))
      }, [
        r("input", {
          type: "radio",
          checked: T.value,
          disabled: S.value,
          name: C.value,
          value: b.value
        }, null, 8, il)
      ], 2),
      O.$slots.default || s.label ? (o(), d("span", {
        key: 0,
        class: u(n(t).e("label"))
      }, [
        ue(O.$slots, "default", {}, () => [
          de(N(s.label), 1)
        ])
      ], 2)) : U("", !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ le({
  name: "XRadioGroup",
  __name: "group",
  props: {
    modelValue: { type: [String, Number, Boolean], default: void 0 },
    value: { type: [String, Number, Boolean], default: void 0 },
    disabled: { type: Boolean, default: !1 },
    name: {}
  },
  emits: ["update:modelValue", "update:value", "change"],
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("radio-group"), l = (c) => {
      a.modelValue !== void 0 && e("update:modelValue", c), a.value !== void 0 && e("update:value", c), a.modelValue === void 0 && a.value === void 0 && e("update:modelValue", c), e("change", c);
    };
    return $e("radioGroup", {
      modelValue: M(() => a.modelValue ?? a.value),
      name: a.name || `radio-group-${Date.now()}`,
      disabled: a.disabled,
      changeValue: l
    }), (c, m) => (o(), d("div", {
      class: u(n(t).b()),
      role: "radiogroup"
    }, [
      ue(c.$slots, "default")
    ], 2));
  }
}), rl = ["checked", "disabled", "value"], st = /* @__PURE__ */ le({
  name: "XRadioButton",
  __name: "button",
  props: {
    value: { type: [String, Number, Boolean] },
    label: {},
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: k }) {
    const a = s, e = ae("radio-button"), t = xe("radioGroup", null), l = M(() => !!t), c = M(() => l.value ? t.modelValue.value : null), m = M(() => a.value ?? a.label), b = M(() => c.value === m.value), T = M(() => a.disabled || l.value && t.disabled), S = M(() => [
      e.b(),
      e.is("active", b.value),
      e.is("disabled", T.value)
    ]), C = () => {
      T.value || l.value && t.changeValue(m.value);
    };
    return (D, z) => (o(), d("label", {
      class: u(S.value),
      onClick: se(C, ["prevent"])
    }, [
      r("input", {
        type: "radio",
        checked: b.value,
        disabled: T.value,
        value: m.value,
        class: u(n(e).e("input"))
      }, null, 10, rl),
      r("span", {
        class: u(n(e).e("inner"))
      }, [
        ue(D.$slots, "default", {}, () => [
          de(N(s.label), 1)
        ])
      ], 2)
    ], 2));
  }
}), dl = ["checked", "disabled", "name", "value"], ut = /* @__PURE__ */ le({
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
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("checkbox"), l = xe("checkboxGroup", null), c = M(() => !!l), m = M(() => a.value ?? a.label), b = M(() => c.value ? l.modelValue.value.includes(m.value) : Array.isArray(a.modelValue) ? a.modelValue.includes(m.value) : !!a.modelValue), T = M(() => {
      if (a.disabled) return !0;
      if (c.value) {
        const D = l.disabled, z = l.min > 0 && l.modelValue.value.length <= l.min, O = l.max > 0 && l.modelValue.value.length >= l.max;
        return b.value && z || !b.value && O ? !0 : D;
      }
      return !1;
    }), S = M(() => [
      t.b(),
      t.is("checked", b.value),
      t.is("disabled", T.value),
      t.is("indeterminate", a.indeterminate && !b.value)
    ]), C = () => {
      if (!T.value)
        if (c.value)
          l.changeValue(m.value);
        else {
          let D;
          if (Array.isArray(a.modelValue)) {
            const z = a.modelValue.indexOf(m.value);
            z > -1 ? D = [...a.modelValue.slice(0, z), ...a.modelValue.slice(z + 1)] : D = [...a.modelValue, m.value];
          } else
            D = !a.modelValue;
          e("update:modelValue", D), e("change", D);
        }
    };
    return (D, z) => (o(), d("label", {
      class: u(S.value),
      onClick: se(C, ["prevent"])
    }, [
      r("span", {
        class: u(n(t).e("input"))
      }, [
        r("input", {
          type: "checkbox",
          checked: b.value,
          disabled: T.value,
          name: s.name,
          value: m.value
        }, null, 8, dl)
      ], 2),
      D.$slots.default || s.label !== void 0 ? (o(), d("span", {
        key: 0,
        class: u(n(t).e("label"))
      }, [
        ue(D.$slots, "default", {}, () => [
          de(N(s.label), 1)
        ])
      ], 2)) : U("", !0)
    ], 2));
  }
}), ot = /* @__PURE__ */ le({
  name: "XCheckboxGroup",
  __name: "group",
  props: {
    modelValue: { default: () => [] },
    disabled: { type: Boolean, default: !1 },
    min: { default: 0 },
    max: { default: 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("checkbox-group"), l = (c) => {
      const m = [...a.modelValue], b = m.indexOf(c);
      b > -1 ? m.splice(b, 1) : m.push(c), e("update:modelValue", m), e("change", m);
    };
    return $e("checkboxGroup", {
      modelValue: M(() => a.modelValue),
      disabled: a.disabled,
      min: a.min,
      max: a.max,
      changeValue: l
    }), (c, m) => (o(), d("div", {
      class: u(n(t).b()),
      role: "group"
    }, [
      ue(c.$slots, "default")
    ], 2));
  }
}), it = /* @__PURE__ */ le({
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
  setup(s, { expose: k, emit: a }) {
    const e = s, t = a, l = ae("form"), c = A([]), m = M(() => e.layout === "inline" || e.inline), b = M(() => e.layout === "vertical" || e.labelPosition === "top"), T = M(() => [
      l.b(),
      l.m(`label-${b.value ? "top" : e.labelPosition}`),
      l.is("inline", m.value),
      l.is("vertical", b.value)
    ]), S = M(() => ({ width: typeof e.labelWidth == "number" ? `${e.labelWidth}px` : e.labelWidth })), C = (h) => {
      c.value.push(h);
    }, D = (h) => {
      const v = c.value.indexOf(h);
      v > -1 && c.value.splice(v, 1);
    }, z = async () => {
      let h = !0;
      for (const v of c.value)
        await v.validate() || (h = !1);
      return h;
    }, O = async (h) => {
      const v = Array.isArray(h) ? h : [h];
      let $ = !0;
      for (const H of c.value)
        v.includes(H.prop) && (await H.validate() || ($ = !1));
      return $;
    }, y = () => {
      c.value.forEach((h) => {
        h.resetField();
      });
    }, B = (h) => {
      if (h) {
        const v = Array.isArray(h) ? h : [h];
        c.value.forEach(($) => {
          v.includes($.prop) && $.clearValidate();
        });
      } else
        c.value.forEach((v) => {
          v.clearValidate();
        });
    }, P = (h) => {
      console.log("[XForm] handleSubmit triggered", h), h.preventDefault(), t("submit");
    }, F = (h) => {
      console.log("[XForm] handleReset triggered", h), h.preventDefault(), y(), t("reset");
    }, V = Ge(e, "model");
    return $e("form", {
      model: V,
      rules: e.rules,
      labelWidth: e.labelWidth,
      labelPosition: b.value ? "top" : e.labelPosition,
      isInline: m,
      disabled: e.disabled,
      size: e.size,
      labelStyle: S,
      addField: C,
      removeField: D,
      emit: t
    }), k({
      validate: z,
      validateField: O,
      resetFields: y,
      clearValidate: B
    }), (h, v) => (o(), d("form", {
      class: u(T.value),
      onSubmit: P,
      onReset: F
    }, [
      ue(h.$slots, "default")
    ], 34));
  }
}), rt = /* @__PURE__ */ le({
  name: "XFormItem",
  __name: "item",
  props: {
    prop: {},
    label: {},
    labelWidth: {},
    required: { type: Boolean },
    rules: {},
    showMessage: { type: Boolean, default: !0 }
  },
  setup(s, { expose: k }) {
    const a = s, e = Le(), t = ae("form-item"), l = xe("form", null), c = A(""), m = A(""), b = M(() => a.required ? !0 : T().some((V) => V.required)), T = () => {
      const F = [];
      return a.rules && F.push(...a.rules), l && a.prop && l.rules[a.prop] && F.push(...l.rules[a.prop]), F;
    }, S = () => {
      var F;
      if (!(!l || !a.prop))
        return (F = l.model.value) == null ? void 0 : F[a.prop];
    }, C = (F) => {
      !l || !a.prop || l.model.value && (l.model.value[a.prop] = F);
    }, D = async (F) => {
      const V = T();
      if (V.length === 0)
        return c.value = "valid", !0;
      const h = S();
      let v = !0, $ = "";
      for (const H of V)
        if (!(F && H.trigger && H.trigger !== F)) {
          if (H.required && (h == null || h === "" || Array.isArray(h) && h.length === 0)) {
            v = !1, $ = H.message || "该字段为必填项";
            break;
          }
          if (H.min !== void 0 || H.max !== void 0) {
            const R = typeof h == "string" ? h.length : 0;
            if (H.min !== void 0 && R < H.min) {
              v = !1, $ = H.message || `长度不能小于 ${H.min} 个字符`;
              break;
            }
            if (H.max !== void 0 && R > H.max) {
              v = !1, $ = H.message || `长度不能大于 ${H.max} 个字符`;
              break;
            }
          }
          if (H.pattern && h && !H.pattern.test(h)) {
            v = !1, $ = H.message || "格式不正确";
            break;
          }
          if (H.validator)
            try {
              await new Promise((R, Y) => {
                H.validator(H, h, (j) => {
                  j ? Y(j) : R();
                });
              });
            } catch (R) {
              v = !1, $ = R.message || H.message || "验证失败";
              break;
            }
        }
      return c.value = v ? "valid" : "invalid", m.value = $, l && a.prop && l.emit("validate", a.prop, v, $), v;
    }, z = () => {
      C(void 0), O();
    }, O = () => {
      c.value = "", m.value = "";
    }, y = M(() => [
      t.b(),
      t.is("required", b.value),
      t.is("error", c.value === "invalid"),
      t.is("success", c.value === "valid")
    ]), B = M(() => {
      const F = a.labelWidth ?? (l != null && l.isInline ? "auto" : (l == null ? void 0 : l.labelWidth) ?? "100px");
      return { width: typeof F == "number" ? `${F}px` : F };
    });
    oe(() => S(), () => {
      c.value === "invalid" && D("change");
    });
    const P = {
      prop: a.prop || "",
      validate: D,
      resetField: z,
      clearValidate: O
    };
    return ge(() => {
      l && a.prop && l.addField(P);
    }), De(() => {
      l && a.prop && l.removeField(P);
    }), k({
      validate: D,
      resetField: z,
      clearValidate: O
    }), (F, V) => (o(), d("div", {
      class: u(y.value)
    }, [
      s.label || n(e).label ? (o(), d("label", {
        key: 0,
        class: u(n(t).e("label")),
        style: te(B.value)
      }, [
        ue(F.$slots, "label", {}, () => [
          de(N(s.label), 1)
        ])
      ], 6)) : U("", !0),
      r("div", {
        class: u(n(t).e("content"))
      }, [
        ue(F.$slots, "default"),
        s.showMessage !== !1 && c.value === "invalid" ? (o(), d("div", {
          key: 0,
          class: u(n(t).e("error"))
        }, N(m.value), 3)) : U("", !0)
      ], 2)
    ], 2));
  }
});
function cl(s, k) {
  return new Date(s, k + 1, 0).getDate();
}
function vl(s, k) {
  return new Date(s, k, 1).getDay();
}
function pe(s, k) {
  return !s || !k ? !1 : s.getFullYear() === k.getFullYear() && s.getMonth() === k.getMonth() && s.getDate() === k.getDate();
}
function fl(s, k) {
  return !s || !k ? !1 : s.getFullYear() === k.getFullYear() && s.getMonth() === k.getMonth();
}
function Ke(s, k, a) {
  if (!k || !a) return !1;
  const e = s.getTime();
  return e >= k.getTime() && e <= a.getTime();
}
function ml(s, k, a = 0) {
  const e = [], t = cl(s, k), l = vl(s, k), c = new Date(s, k, 1), m = (l - a + 7) % 7;
  c.setDate(1 - m);
  let b = [];
  const T = new Date(c);
  for (; (T.getMonth() <= k || T.getMonth() === k && T.getDate() <= t) && (b.push(new Date(T)), !(b.length === 7 && (e.push(b), b = [], T.getMonth() > k) || (T.setDate(T.getDate() + 1), e.length > 7))); )
    ;
  return b.length > 0 && e.push(b), e;
}
function ce(s, k = "YYYY-MM-DD") {
  if (!s) return "";
  const a = s.getFullYear(), e = s.getMonth() + 1, t = s.getDate(), l = s.getHours(), c = s.getMinutes(), m = s.getSeconds();
  return k.replace(/YYYY/g, String(a)).replace(/YY/g, String(a).slice(-2)).replace(/MM/g, String(e).padStart(2, "0")).replace(/M/g, String(e)).replace(/DD/g, String(t).padStart(2, "0")).replace(/D/g, String(t)).replace(/HH/g, String(l).padStart(2, "0")).replace(/H/g, String(l)).replace(/mm/g, String(c).padStart(2, "0")).replace(/m/g, String(c)).replace(/ss/g, String(m).padStart(2, "0")).replace(/s/g, String(m));
}
function ve(s) {
  if (!s || Array.isArray(s)) return null;
  if (s instanceof Date)
    return isNaN(s.getTime()) ? null : s;
  if (typeof s == "number")
    return new Date(s);
  if (typeof s != "string") return null;
  const k = new Date(s);
  if (isNaN(k.getTime())) {
    const a = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
    return a ? new Date(parseInt(a[1]), parseInt(a[2]) - 1, parseInt(a[3])) : null;
  }
  return k;
}
function hl(s) {
  const k = new Date(s);
  return k.setMonth(k.getMonth() - 1), k;
}
function pl(s) {
  const k = new Date(s);
  return k.setMonth(k.getMonth() + 1), k;
}
function gl(s) {
  const k = new Date(s);
  return k.setFullYear(k.getFullYear() - 1), k;
}
function bl(s) {
  const k = new Date(s);
  return k.setFullYear(k.getFullYear() + 1), k;
}
function We(s) {
  const k = Math.floor(s / 10) * 10;
  return [k, k + 9];
}
function Be(s) {
  const k = new Date(s);
  return k.setHours(0, 0, 0, 0), k;
}
function yl(s, k, a, e) {
  if (k && k(s))
    return !0;
  const t = Be(s).getTime();
  return !!(a && t < Be(a).getTime() || e && t > Be(e).getTime());
}
const kl = [
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
], Ml = ["日", "一", "二", "三", "四", "五", "六"], Vl = ["onClick", "onMouseenter"], xl = /* @__PURE__ */ le({
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
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("date-table"), l = A(null), c = M(() => a.viewedMonth.getFullYear()), m = M(() => a.viewedMonth.getMonth()), b = M(() => ml(c.value, m.value, 0)), T = (h) => a.modelValue ? pe(h, a.modelValue) : !1, S = (h) => pe(h, /* @__PURE__ */ new Date()), C = (h) => fl(h, a.viewedMonth), D = (h) => {
      if (a.selectionMode !== "range") return !1;
      const { startDate: v, endDate: $, selecting: H } = a.rangeState || {};
      if (H && v) {
        const R = l.value;
        if (R) {
          const Y = v < R ? v : R, j = v < R ? R : v;
          return Ke(h, Y, j);
        }
        return pe(h, v);
      }
      return v && $ ? Ke(h, v, $) : !1;
    }, z = (h) => {
      if (a.selectionMode !== "range") return !1;
      const { startDate: v, selecting: $ } = a.rangeState || {};
      return $ && v && l.value ? pe(h, v < l.value ? v : l.value) : v ? pe(h, v) : !1;
    }, O = (h) => {
      var H;
      if (a.selectionMode !== "range") return !1;
      const { endDate: v, selecting: $ } = a.rangeState || {};
      if ($ && l.value && ((H = a.rangeState) != null && H.startDate)) {
        const { startDate: R } = a.rangeState;
        return pe(h, R < l.value ? l.value : R);
      }
      return v ? pe(h, v) : !1;
    }, y = (h) => yl(h, a.disabledDate, a.minDate, a.maxDate), B = (h) => [
      t.e("cell"),
      t.is("selected", T(h)),
      t.is("today", S(h)),
      t.is("disabled", y(h)),
      t.is("in-range", D(h)),
      t.is("range-start", z(h)),
      t.is("range-end", O(h)),
      t.is("prev-month", !C(h) && h.getMonth() < m.value),
      t.is("next-month", !C(h) && h.getMonth() > m.value)
    ], P = (h) => {
      y(h) || (a.selectionMode === "range" ? e("range-select", h) : e("pick", h));
    }, F = (h) => {
      l.value = h;
    }, V = () => {
      l.value = null;
    };
    return (h, v) => (o(), d("table", {
      class: u(n(t).b()),
      cellspacing: "0",
      cellpadding: "0"
    }, [
      r("thead", null, [
        r("tr", null, [
          (o(!0), d(J, null, _(n(Ml), ($) => (o(), d("th", {
            key: $,
            class: u(n(t).e("header-cell"))
          }, N($), 3))), 128))
        ])
      ]),
      r("tbody", null, [
        (o(!0), d(J, null, _(b.value, ($, H) => (o(), d("tr", { key: H }, [
          (o(!0), d(J, null, _($, (R, Y) => (o(), d("td", {
            key: Y,
            class: u(B(R)),
            onClick: (j) => P(R),
            onMouseenter: (j) => F(R),
            onMouseleave: V
          }, [
            r("span", {
              class: u(n(t).e("cell-text"))
            }, N(R.getDate()), 3)
          ], 42, Vl))), 128))
        ]))), 128))
      ])
    ], 2));
  }
}), wl = ["onClick"], Cl = /* @__PURE__ */ le({
  name: "XMonthTable",
  __name: "MonthTable",
  props: {
    modelValue: { default: null },
    viewedYear: { default: () => (/* @__PURE__ */ new Date()).getFullYear() },
    disabledDate: {}
  },
  emits: ["pick"],
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("month-table");
    M(() => a.modelValue ? a.modelValue.getMonth() : -1);
    const l = (C) => a.modelValue ? a.modelValue.getFullYear() === a.viewedYear && a.modelValue.getMonth() === C : !1, c = (C) => {
      const D = /* @__PURE__ */ new Date();
      return D.getFullYear() === a.viewedYear && D.getMonth() === C;
    }, m = (C) => {
      if (!a.disabledDate) return !1;
      const D = new Date(a.viewedYear, C, 1), z = new Date(a.viewedYear, C + 1, 0);
      return a.disabledDate(D) && a.disabledDate(z);
    }, b = (C) => [
      t.e("cell"),
      t.is("selected", l(C)),
      t.is("current", c(C)),
      t.is("disabled", m(C))
    ], T = (C) => {
      m(C) || e("pick", C);
    }, S = M(() => {
      const C = [];
      for (let D = 0; D < 12; D += 3)
        C.push([D, D + 1, D + 2]);
      return C;
    });
    return (C, D) => (o(), d("table", {
      class: u(n(t).b()),
      cellspacing: "0",
      cellpadding: "0"
    }, [
      r("tbody", null, [
        (o(!0), d(J, null, _(S.value, (z, O) => (o(), d("tr", { key: O }, [
          (o(!0), d(J, null, _(z, (y) => (o(), d("td", {
            key: y,
            class: u(b(y)),
            onClick: (B) => T(y)
          }, [
            r("span", {
              class: u(n(t).e("cell-text"))
            }, N(n(kl)[y]), 3)
          ], 10, wl))), 128))
        ]))), 128))
      ])
    ], 2));
  }
}), $l = ["onClick"], Dl = /* @__PURE__ */ le({
  name: "XYearTable",
  __name: "YearTable",
  props: {
    modelValue: { default: null },
    viewedYear: { default: () => (/* @__PURE__ */ new Date()).getFullYear() },
    disabledDate: {}
  },
  emits: ["pick"],
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("year-table"), l = M(() => (/* @__PURE__ */ new Date()).getFullYear()), c = M(() => We(a.viewedYear)), m = M(() => {
      const [y] = c.value, B = [];
      B.push(y - 1);
      for (let P = 0; P < 10; P++)
        B.push(y + P);
      return B.push(y + 10), B;
    }), b = M(() => {
      const y = [];
      for (let B = 0; B < m.value.length; B += 3)
        y.push(m.value.slice(B, B + 3));
      return y;
    }), T = (y) => a.modelValue ? a.modelValue.getFullYear() === y : !1, S = (y) => y === l.value, C = (y) => {
      const [B, P] = c.value;
      return y >= B && y <= P;
    }, D = (y) => {
      if (!a.disabledDate) return !1;
      const B = new Date(y, 0, 1), P = new Date(y, 11, 31);
      return a.disabledDate(B) && a.disabledDate(P);
    }, z = (y) => [
      t.e("cell"),
      t.is("selected", T(y)),
      t.is("current", S(y)),
      t.is("disabled", D(y)),
      t.is("in-decade", C(y))
    ], O = (y) => {
      D(y) || e("pick", y);
    };
    return (y, B) => (o(), d("table", {
      class: u(n(t).b()),
      cellspacing: "0",
      cellpadding: "0"
    }, [
      r("tbody", null, [
        (o(!0), d(J, null, _(b.value, (P, F) => (o(), d("tr", { key: F }, [
          (o(!0), d(J, null, _(P, (V) => (o(), d("td", {
            key: V,
            class: u(z(V)),
            onClick: (h) => O(V)
          }, [
            r("span", {
              class: u(n(t).e("cell-text"))
            }, N(V), 3)
          ], 10, $l))), 128))
        ]))), 128))
      ])
    ], 2));
  }
}), Sl = ["placeholder", "disabled", "value"], zl = ["placeholder", "disabled", "value"], Tl = ["placeholder", "disabled", "value"], Hl = ["value"], Ll = ["value"], Rl = ["value"], dt = /* @__PURE__ */ le({
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
  setup(s, { expose: k, emit: a }) {
    const e = s, t = a, l = ae("date-picker"), c = A(!1), m = A(2e3), b = A(), T = () => e.modelValue !== void 0 && e.modelValue !== null ? e.modelValue : e.value !== void 0 && e.value !== null ? e.value : null, S = (L) => {
      e.modelValue !== void 0 && t("update:modelValue", L), e.value !== void 0 && t("update:value", L), e.modelValue === void 0 && e.value === void 0 && t("update:modelValue", L), t("change", L);
    }, C = A(), D = A(), z = A({
      top: "0px",
      left: "0px"
    }), O = () => Ee().next(), y = A("date"), B = A(/* @__PURE__ */ new Date()), P = A({
      hours: (/* @__PURE__ */ new Date()).getHours(),
      minutes: (/* @__PURE__ */ new Date()).getMinutes(),
      seconds: (/* @__PURE__ */ new Date()).getSeconds()
    }), F = A({
      selecting: !1,
      startDate: null,
      endDate: null
    }), V = M(() => {
      const L = T();
      if (!L) return null;
      if (e.type === "daterange") {
        if (!Array.isArray(L)) return null;
        const [I, W] = L;
        return [
          I instanceof Date ? I : ve(I),
          W instanceof Date ? W : ve(W)
        ];
      }
      return L instanceof Date ? L : ve(L);
    }), h = M(() => {
      if (e.type === "daterange") return "";
      const L = T();
      if (!L) return "";
      const I = L instanceof Date ? L : ve(L);
      if (!I) return "";
      const W = e.showTime ? "YYYY-MM-DD HH:mm:ss" : e.format;
      return ce(I, W);
    }), v = M(() => {
      const L = T();
      if (!L || !Array.isArray(L)) return "";
      const [I] = L;
      if (!I) return "";
      const W = I instanceof Date ? I : ve(I);
      return W ? ce(W, e.format) : "";
    }), $ = M(() => {
      const L = T();
      if (!L || !Array.isArray(L)) return "";
      const [, I] = L;
      if (!I) return "";
      const W = I instanceof Date ? I : ve(I);
      return W ? ce(W, e.format) : "";
    }), H = M(() => {
      const L = T();
      return !L || Array.isArray(L) ? null : L instanceof Date ? L : ve(L);
    }), R = M(() => B.value.getFullYear()), Y = M(() => B.value.getMonth()), j = M(() => We(R.value)), p = M(() => y.value === "year" ? `${j.value[0]} 年 - ${j.value[1]} 年` : y.value === "month" ? `${R.value} 年` : `${R.value} 年 ${Y.value + 1} 月`), x = M(() => [
      l.b(),
      l.m(e.size),
      l.is("disabled", e.disabled),
      l.is("range", e.type === "daterange")
    ]), w = M(() => [
      l.e("input"),
      l.is("focus", c.value),
      l.is("has-value", !!h.value || !!(v.value || $.value))
    ]), i = () => {
      e.disabled || e.readonly || (c.value ? g() : f());
    }, f = () => {
      c.value = !0, m.value = O(), Se(() => {
        if (b.value && C.value) {
          const L = b.value.getBoundingClientRect(), I = C.value.getBoundingClientRect();
          let W = L.bottom + 8, he = L.left;
          he + I.width > window.innerWidth && (he = window.innerWidth - I.width - 8), W + I.height > window.innerHeight && (W = L.top - I.height - 8), z.value = {
            top: `${W}px`,
            left: `${he}px`
          };
        }
      }), t("focus", {});
    }, g = () => {
      c.value = !1, y.value = "date", t("blur", {});
    }, K = (L) => {
      if (e.type === "date") {
        e.showTime && (L.setHours(P.value.hours), L.setMinutes(P.value.minutes), L.setSeconds(P.value.seconds));
        const I = e.showTime ? "YYYY-MM-DD HH:mm:ss" : e.valueFormat, W = I ? ce(L, I) : L;
        S(W), e.showTime || g();
      }
    }, ne = () => {
      const L = T();
      if (L) {
        const I = L instanceof Date ? L : ve(L);
        if (I) {
          I.setHours(P.value.hours), I.setMinutes(P.value.minutes), I.setSeconds(P.value.seconds);
          const W = e.valueFormat ? ce(I, e.valueFormat) : I;
          S(W);
        }
      } else {
        const I = /* @__PURE__ */ new Date();
        I.setHours(P.value.hours), I.setMinutes(P.value.minutes), I.setSeconds(P.value.seconds);
        const W = e.valueFormat ? ce(I, e.valueFormat) : I;
        S(W);
      }
      g();
    }, X = (L) => {
      if (!F.value.selecting)
        F.value.selecting = !0, F.value.startDate = L, F.value.endDate = null;
      else {
        F.value.selecting = !1, F.value.startDate && L < F.value.startDate ? [F.value.startDate, F.value.endDate] = [L, F.value.startDate] : F.value.endDate = L;
        const I = e.valueFormat ? ce(F.value.startDate, e.valueFormat) : F.value.startDate, W = e.valueFormat ? ce(F.value.endDate, e.valueFormat) : F.value.endDate;
        S([I, W]), g();
      }
    }, re = (L) => {
      if (B.value = new Date(R.value, L, 1), e.type === "month") {
        const I = new Date(R.value, L, 1), W = e.valueFormat ? ce(I, e.valueFormat) : I;
        S(W), g();
      } else
        y.value = "date";
    }, G = (L) => {
      if (B.value = new Date(L, Y.value, 1), e.type === "year") {
        const I = new Date(L, 0, 1), W = e.valueFormat ? ce(I, e.valueFormat) : I;
        S(W), g();
      } else
        y.value = "month";
    }, me = () => {
      B.value = hl(B.value);
    }, ye = () => {
      B.value = pl(B.value);
    }, ze = () => {
      y.value === "year" ? B.value = new Date(R.value - 10, Y.value, 1) : B.value = gl(B.value);
    }, we = () => {
      y.value === "year" ? B.value = new Date(R.value + 10, Y.value, 1) : B.value = bl(B.value);
    }, Te = () => {
      y.value = "month";
    }, Re = () => {
      y.value = "year";
    }, E = () => {
      S(null), t("clear"), F.value = {
        selecting: !1,
        startDate: null,
        endDate: null
      };
    }, q = (L) => {
      if (!b.value) return;
      const I = L.target;
      b.value.contains(I) || C.value && C.value.contains(I) || g();
    };
    oe(
      T,
      (L) => {
        if (L)
          if (Array.isArray(V.value)) {
            const [I] = V.value;
            I && (B.value = new Date(I));
          } else V.value && (B.value = new Date(V.value));
      },
      { immediate: !0 }
    ), oe(c, (L) => {
      L && (y.value = "date", e.type === "daterange" && (F.value = {
        selecting: !1,
        startDate: Array.isArray(V.value) ? V.value[0] : null,
        endDate: Array.isArray(V.value) ? V.value[1] : null
      }));
    });
    const Z = (L) => {
      L.key === "Escape" && g();
    };
    return ge(() => {
      document.addEventListener("click", q), document.addEventListener("keydown", Z);
    }), De(() => {
      document.removeEventListener("click", q), document.removeEventListener("keydown", Z);
    }), k({
      focus: () => {
        var L;
        return (L = D.value) == null ? void 0 : L.focus();
      },
      blur: () => {
        var L;
        return (L = D.value) == null ? void 0 : L.blur();
      }
    }), (L, I) => (o(), d("div", {
      ref_key: "pickerRef",
      ref: b,
      class: u(x.value)
    }, [
      s.type !== "daterange" ? (o(), d("div", {
        key: 0,
        class: u(w.value),
        onClick: i
      }, [
        r("input", {
          ref_key: "inputRef",
          ref: D,
          type: "text",
          placeholder: s.placeholder,
          disabled: s.disabled,
          readonly: !0,
          value: h.value,
          class: u(n(l).e("input-inner"))
        }, null, 10, Sl),
        r("span", {
          class: u(n(l).e("suffix"))
        }, [
          s.clearable && h.value && !s.disabled ? (o(), d("span", {
            key: 0,
            class: u(n(l).e("clear")),
            onClick: se(E, ["stop"])
          }, [
            Q(n(ee), {
              name: "close",
              size: 14
            })
          ], 2)) : (o(), d("span", {
            key: 1,
            class: u(n(l).e("icon"))
          }, [
            Q(n(ee), {
              name: "calendar",
              size: 14
            })
          ], 2))
        ], 2)
      ], 2)) : (o(), d("div", {
        key: 1,
        class: u(w.value),
        onClick: i
      }, [
        r("input", {
          type: "text",
          placeholder: s.startPlaceholder,
          disabled: s.disabled,
          readonly: !0,
          value: v.value,
          class: u(n(l).e("input-inner"))
        }, null, 10, zl),
        r("span", {
          class: u(n(l).e("separator"))
        }, "至", 2),
        r("input", {
          type: "text",
          placeholder: s.endPlaceholder,
          disabled: s.disabled,
          readonly: !0,
          value: $.value,
          class: u(n(l).e("input-inner"))
        }, null, 10, Tl),
        r("span", {
          class: u(n(l).e("suffix"))
        }, [
          s.clearable && (v.value || $.value) && !s.disabled ? (o(), d("span", {
            key: 0,
            class: u(n(l).e("clear")),
            onClick: se(E, ["stop"])
          }, [
            Q(n(ee), {
              name: "close",
              size: 14
            })
          ], 2)) : (o(), d("span", {
            key: 1,
            class: u(n(l).e("icon"))
          }, [
            Q(n(ee), {
              name: "calendar",
              size: 14
            })
          ], 2))
        ], 2)
      ], 2)),
      (o(), fe(Ie, { to: "body" }, [
        Q(Pe, { name: "fade" }, {
          default: He(() => [
            ie(r("div", {
              ref_key: "popperRef",
              ref: C,
              class: u(n(l).e("popper")),
              style: te({ zIndex: m.value, ...z.value })
            }, [
              r("div", {
                class: u(n(l).e("header"))
              }, [
                r("button", {
                  type: "button",
                  class: u(n(l).e("prev-btn")),
                  onClick: I[0] || (I[0] = (W) => y.value === "date" ? me() : ze())
                }, " ‹ ", 2),
                r("div", {
                  class: u(n(l).e("header-title"))
                }, [
                  y.value === "year" ? (o(), d("span", {
                    key: 0,
                    onClick: I[1] || (I[1] = (W) => y.value = "month")
                  }, N(p.value), 1)) : (o(), d(J, { key: 1 }, [
                    r("span", { onClick: Re }, N(R.value) + " 年", 1),
                    y.value === "date" ? (o(), d("span", {
                      key: 0,
                      onClick: Te
                    }, N(Y.value + 1) + " 月", 1)) : U("", !0)
                  ], 64))
                ], 2),
                r("button", {
                  type: "button",
                  class: u(n(l).e("next-btn")),
                  onClick: I[2] || (I[2] = (W) => y.value === "date" ? ye() : we())
                }, " › ", 2)
              ], 2),
              r("div", {
                class: u(n(l).e("content"))
              }, [
                y.value === "date" ? (o(), fe(xl, {
                  key: 0,
                  "model-value": H.value,
                  "viewed-month": B.value,
                  "disabled-date": s.disabledDate,
                  "min-date": s.minDate ? n(ve)(s.minDate) : null,
                  "max-date": s.maxDate ? n(ve)(s.maxDate) : null,
                  "selection-mode": s.type === "daterange" ? "range" : "single",
                  "range-state": F.value,
                  onPick: K,
                  onRangeSelect: X
                }, null, 8, ["model-value", "viewed-month", "disabled-date", "min-date", "max-date", "selection-mode", "range-state"])) : y.value === "month" ? (o(), fe(Cl, {
                  key: 1,
                  "model-value": H.value,
                  "viewed-year": R.value,
                  "disabled-date": s.disabledDate,
                  onPick: re
                }, null, 8, ["model-value", "viewed-year", "disabled-date"])) : y.value === "year" ? (o(), fe(Dl, {
                  key: 2,
                  "model-value": H.value,
                  "viewed-year": R.value,
                  "disabled-date": s.disabledDate,
                  onPick: G
                }, null, 8, ["model-value", "viewed-year", "disabled-date"])) : U("", !0)
              ], 2),
              s.showTime && s.type !== "daterange" ? (o(), d("div", {
                key: 0,
                class: u(n(l).e("time"))
              }, [
                r("div", {
                  class: u(n(l).e("time-item"))
                }, [
                  ie(r("select", {
                    "onUpdate:modelValue": I[3] || (I[3] = (W) => P.value.hours = W),
                    class: u(n(l).e("time-select"))
                  }, [
                    (o(), d(J, null, _(24, (W) => r("option", {
                      key: W,
                      value: W - 1
                    }, N(String(W - 1).padStart(2, "0")), 9, Hl)), 64))
                  ], 2), [
                    [
                      Ce,
                      P.value.hours,
                      void 0,
                      { number: !0 }
                    ]
                  ]),
                  I[6] || (I[6] = r("span", null, "时", -1))
                ], 2),
                r("div", {
                  class: u(n(l).e("time-item"))
                }, [
                  ie(r("select", {
                    "onUpdate:modelValue": I[4] || (I[4] = (W) => P.value.minutes = W),
                    class: u(n(l).e("time-select"))
                  }, [
                    (o(), d(J, null, _(60, (W) => r("option", {
                      key: W,
                      value: W - 1
                    }, N(String(W - 1).padStart(2, "0")), 9, Ll)), 64))
                  ], 2), [
                    [
                      Ce,
                      P.value.minutes,
                      void 0,
                      { number: !0 }
                    ]
                  ]),
                  I[7] || (I[7] = r("span", null, "分", -1))
                ], 2),
                r("div", {
                  class: u(n(l).e("time-item"))
                }, [
                  ie(r("select", {
                    "onUpdate:modelValue": I[5] || (I[5] = (W) => P.value.seconds = W),
                    class: u(n(l).e("time-select"))
                  }, [
                    (o(), d(J, null, _(60, (W) => r("option", {
                      key: W,
                      value: W - 1
                    }, N(String(W - 1).padStart(2, "0")), 9, Rl)), 64))
                  ], 2), [
                    [
                      Ce,
                      P.value.seconds,
                      void 0,
                      { number: !0 }
                    ]
                  ]),
                  I[8] || (I[8] = r("span", null, "秒", -1))
                ], 2)
              ], 2)) : U("", !0),
              s.showTime && s.type !== "daterange" ? (o(), d("div", {
                key: 1,
                class: u(n(l).e("footer"))
              }, [
                r("button", {
                  type: "button",
                  class: u(n(l).e("confirm-btn")),
                  onClick: ne
                }, "确定", 2)
              ], 2)) : U("", !0)
            ], 6), [
              [be, c.value]
            ])
          ]),
          _: 1
        })
      ]))
    ], 2));
  }
});
function ke(s, k = "HH:mm:ss") {
  if (!s) return "";
  const a = s.getHours(), e = s.getMinutes(), t = s.getSeconds();
  return k.replace(/HH/g, String(a).padStart(2, "0")).replace(/H/g, String(a)).replace(/mm/g, String(e).padStart(2, "0")).replace(/m/g, String(e)).replace(/ss/g, String(t).padStart(2, "0")).replace(/s/g, String(t));
}
function Ae(s) {
  if (!s) return null;
  if (s instanceof Date)
    return isNaN(s.getTime()) ? null : s;
  if (typeof s == "number") {
    const e = /* @__PURE__ */ new Date();
    return e.setTime(s), e;
  }
  const k = s.match(/^(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?/);
  if (k) {
    const e = /* @__PURE__ */ new Date();
    return e.setHours(parseInt(k[1]), parseInt(k[2]), k[3] ? parseInt(k[3]) : 0, 0), e;
  }
  const a = new Date(s);
  return isNaN(a.getTime()) ? null : a;
}
function Me(s) {
  return String(s).padStart(2, "0");
}
const Bl = ["onClick"], Al = ["onClick"], Fl = ["onClick"], Il = /* @__PURE__ */ le({
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
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("time-panel"), l = A(0), c = A(0), m = A(0), b = A(), T = A(), S = A(), C = M(() => a.format.includes("ss") || a.format.includes("s")), D = M(() => {
      const X = [], re = Math.max(1, a.hourStep);
      for (let G = 0; G < 24; G += re)
        X.push(G);
      return X;
    }), z = M(() => {
      const X = [], re = Math.max(1, a.minuteStep);
      for (let G = 0; G < 60; G += re)
        X.push(G);
      return X;
    }), O = M(() => {
      const X = [], re = Math.max(1, a.secondStep);
      for (let G = 0; G < 60; G += re)
        X.push(G);
      return X;
    }), y = M(() => a.disabledHours ? new Set(a.disabledHours()) : /* @__PURE__ */ new Set()), B = M(() => a.disabledMinutes ? new Set(a.disabledMinutes(l.value)) : /* @__PURE__ */ new Set()), P = M(() => a.disabledSeconds ? new Set(a.disabledSeconds(l.value, c.value)) : /* @__PURE__ */ new Set()), F = M(() => `${Me(l.value)}:${Me(c.value)}${C.value ? ":" + Me(m.value) : ""}`), V = (X) => y.value.has(X), h = (X) => B.value.has(X), v = (X) => P.value.has(X), $ = (X) => {
      V(X) || (l.value = X, x(b.value, Y(X)));
    }, H = (X) => {
      h(X) || (c.value = X, x(T.value, j(X)));
    }, R = (X) => {
      v(X) || (m.value = X, x(S.value, p(X)));
    }, Y = (X) => D.value.indexOf(X), j = (X) => z.value.indexOf(X), p = (X) => O.value.indexOf(X), x = (X, re) => {
      if (!X) return;
      const G = 32, ye = re * G + 84 - 200 / 2 + G / 2;
      X.scrollTop = Math.max(0, ye);
    }, w = () => {
      if (!b.value) return;
      const X = b.value.scrollTop, re = Math.round((X - 84 + 100) / 32), G = D.value[Math.max(0, Math.min(re, D.value.length - 1))];
      G !== void 0 && !V(G) && (l.value = G);
    }, i = () => {
      if (!T.value) return;
      const X = T.value.scrollTop, re = Math.round((X - 84 + 100) / 32), G = z.value[Math.max(0, Math.min(re, z.value.length - 1))];
      G !== void 0 && !h(G) && (c.value = G);
    }, f = () => {
      if (!S.value) return;
      const X = S.value.scrollTop, re = Math.round((X - 84 + 100) / 32), G = O.value[Math.max(0, Math.min(re, O.value.length - 1))];
      G !== void 0 && !v(G) && (m.value = G);
    }, g = () => {
      const X = a.modelValue ? new Date(a.modelValue) : /* @__PURE__ */ new Date();
      X.setHours(l.value, c.value, m.value, 0), e("confirm", X);
    }, K = () => {
      e("cancel");
    }, ne = () => {
      if (a.modelValue)
        l.value = a.modelValue.getHours(), c.value = a.modelValue.getMinutes(), m.value = a.modelValue.getSeconds();
      else {
        const X = /* @__PURE__ */ new Date();
        l.value = X.getHours(), c.value = X.getMinutes(), m.value = X.getSeconds();
      }
      Se(() => {
        x(b.value, Y(l.value)), x(T.value, j(c.value)), C.value && x(S.value, p(m.value));
      });
    };
    return oe(
      () => a.modelValue,
      () => {
        ne();
      },
      { immediate: !0 }
    ), ge(() => {
      ne();
    }), (X, re) => (o(), d("div", {
      class: u(n(t).b())
    }, [
      r("div", {
        class: u(n(t).e("content"))
      }, [
        r("div", {
          class: u(n(t).e("indicator"))
        }, null, 2),
        r("div", {
          ref_key: "hourListRef",
          ref: b,
          class: u(n(t).e("list")),
          onScroll: w
        }, [
          r("div", {
            class: u(n(t).e("padding"))
          }, null, 2),
          (o(!0), d(J, null, _(D.value, (G) => (o(), d("div", {
            key: G,
            class: u([n(t).e("item"), n(t).is("selected", l.value === G), n(t).is("disabled", V(G))]),
            onClick: (me) => $(G)
          }, N(n(Me)(G)), 11, Bl))), 128)),
          r("div", {
            class: u(n(t).e("padding"))
          }, null, 2)
        ], 34),
        r("div", {
          ref_key: "minuteListRef",
          ref: T,
          class: u(n(t).e("list")),
          onScroll: i
        }, [
          r("div", {
            class: u(n(t).e("padding"))
          }, null, 2),
          (o(!0), d(J, null, _(z.value, (G) => (o(), d("div", {
            key: G,
            class: u([n(t).e("item"), n(t).is("selected", c.value === G), n(t).is("disabled", h(G))]),
            onClick: (me) => H(G)
          }, N(n(Me)(G)), 11, Al))), 128)),
          r("div", {
            class: u(n(t).e("padding"))
          }, null, 2)
        ], 34),
        C.value ? (o(), d("div", {
          key: 0,
          ref_key: "secondListRef",
          ref: S,
          class: u(n(t).e("list")),
          onScroll: f
        }, [
          r("div", {
            class: u(n(t).e("padding"))
          }, null, 2),
          (o(!0), d(J, null, _(O.value, (G) => (o(), d("div", {
            key: G,
            class: u([n(t).e("item"), n(t).is("selected", m.value === G), n(t).is("disabled", v(G))]),
            onClick: (me) => R(G)
          }, N(n(Me)(G)), 11, Fl))), 128)),
          r("div", {
            class: u(n(t).e("padding"))
          }, null, 2)
        ], 34)) : U("", !0)
      ], 2),
      r("div", {
        class: u(n(t).e("footer"))
      }, [
        r("span", {
          class: u(n(t).e("current-time"))
        }, N(F.value), 3),
        r("div", {
          class: u(n(t).e("actions"))
        }, [
          r("button", {
            class: u(n(t).e("btn-cancel")),
            onClick: K
          }, "取消", 2),
          r("button", {
            class: u(n(t).e("btn-confirm")),
            onClick: g
          }, "确定", 2)
        ], 2)
      ], 2)
    ], 2));
  }
}), Pl = ["placeholder", "disabled", "value"], El = ["placeholder", "disabled", "value"], Ol = ["placeholder", "disabled", "value"], ct = /* @__PURE__ */ le({
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
  setup(s, { expose: k, emit: a }) {
    const e = s, t = a, l = ae("time-picker"), c = () => Ee().next(), m = A(!1), b = A(2e3), T = A(), S = A(), C = A(), D = A({
      top: "0px",
      left: "0px"
    }), z = A({
      startTime: null,
      endTime: null
    }), O = A("start"), y = M(() => {
      if (!e.modelValue) return null;
      if (e.type === "timerange") {
        const [f, g] = e.modelValue;
        return [Ae(f), Ae(g)];
      }
      return Ae(e.modelValue);
    }), B = M(() => !y.value || Array.isArray(y.value) ? "" : ke(y.value, e.format)), P = M(() => {
      if (!Array.isArray(y.value)) return "";
      const [f] = y.value;
      return f ? ke(f, e.format) : "";
    }), F = M(() => {
      if (!Array.isArray(y.value)) return "";
      const [, f] = y.value;
      return f ? ke(f, e.format) : "";
    }), V = M(() => e.type === "timerange" ? O.value === "start" ? z.value.startTime : z.value.endTime || z.value.startTime : y.value), h = M(() => [
      l.b(),
      l.m(e.size),
      l.is("disabled", e.disabled),
      l.is("range", e.type === "timerange")
    ]), v = M(() => [
      l.e("input"),
      l.is("focus", m.value)
    ]), $ = () => {
      e.disabled || e.readonly || (m.value ? Y() : R());
    }, H = (f) => {
      e.disabled || e.readonly || (O.value = f, m.value || R());
    }, R = () => {
      m.value = !0, b.value = c(), Se(() => {
        if (T.value && S.value) {
          const f = T.value.getBoundingClientRect(), g = S.value.getBoundingClientRect();
          let K = f.bottom + 8, ne = f.left;
          ne + g.width > window.innerWidth && (ne = window.innerWidth - g.width - 8), K + g.height > window.innerHeight && (K = f.top - g.height - 8), D.value = {
            top: `${K}px`,
            left: `${ne}px`
          };
        }
      }), t("focus", {});
    }, Y = () => {
      m.value = !1, t("blur", {});
    }, j = (f) => {
      if (e.type === "timerange")
        if (O.value === "start")
          z.value.startTime = f, O.value = "end", z.value.endTime && z.value.endTime < f && (z.value.endTime = null);
        else {
          z.value.startTime && f < z.value.startTime ? (z.value.endTime = z.value.startTime, z.value.startTime = f) : z.value.endTime = f;
          const g = e.valueFormat ? ke(z.value.startTime, e.valueFormat) : z.value.startTime, K = e.valueFormat ? ke(z.value.endTime, e.valueFormat) : z.value.endTime;
          t("update:modelValue", [g, K]), t("change", [g, K]), Y();
        }
      else {
        const g = e.valueFormat ? ke(f, e.valueFormat) : f;
        t("update:modelValue", g), t("change", g), Y();
      }
    }, p = () => {
      Y();
    }, x = () => {
      t("update:modelValue", null), t("change", null), t("clear"), z.value = {
        startTime: null,
        endTime: null
      };
    }, w = (f) => {
      if (!T.value) return;
      const g = f.target;
      T.value.contains(g) || S.value && S.value.contains(g) || Y();
    };
    oe(
      () => e.modelValue,
      (f) => {
        if (f && e.type === "timerange") {
          const [g, K] = y.value;
          z.value = {
            startTime: g,
            endTime: K
          };
        }
      },
      { immediate: !0 }
    ), oe(m, (f) => {
      f && e.type === "timerange" && (z.value = {
        startTime: Array.isArray(y.value) ? y.value[0] : null,
        endTime: Array.isArray(y.value) ? y.value[1] : null
      }, O.value = "start");
    });
    const i = (f) => {
      f.key === "Escape" && Y();
    };
    return ge(() => {
      document.addEventListener("click", w), document.addEventListener("keydown", i);
    }), De(() => {
      document.removeEventListener("click", w), document.removeEventListener("keydown", i);
    }), k({
      focus: () => {
        var f;
        return (f = C.value) == null ? void 0 : f.focus();
      },
      blur: () => {
        var f;
        return (f = C.value) == null ? void 0 : f.blur();
      }
    }), (f, g) => (o(), d("div", {
      ref_key: "pickerRef",
      ref: T,
      class: u(h.value)
    }, [
      s.type !== "timerange" ? (o(), d("div", {
        key: 0,
        class: u(v.value),
        onClick: $
      }, [
        r("input", {
          ref_key: "inputRef",
          ref: C,
          type: "text",
          placeholder: s.placeholder,
          disabled: s.disabled,
          readonly: !0,
          value: B.value,
          class: u(n(l).e("input-inner"))
        }, null, 10, Pl),
        r("span", {
          class: u(n(l).e("suffix"))
        }, [
          s.clearable && B.value && !s.disabled ? (o(), d("span", {
            key: 0,
            class: u(n(l).e("clear")),
            onClick: se(x, ["stop"])
          }, [
            Q(n(ee), {
              name: "close",
              size: 14
            })
          ], 2)) : (o(), d("span", {
            key: 1,
            class: u(n(l).e("icon"))
          }, [
            Q(n(ee), {
              name: "clock",
              size: 14
            })
          ], 2))
        ], 2)
      ], 2)) : (o(), d("div", {
        key: 1,
        class: u(v.value),
        onClick: $
      }, [
        r("input", {
          type: "text",
          placeholder: s.startPlaceholder,
          disabled: s.disabled,
          readonly: !0,
          value: P.value,
          class: u([n(l).e("input-inner"), n(l).is("active", O.value === "start")]),
          onClick: g[0] || (g[0] = se((K) => H("start"), ["stop"]))
        }, null, 10, El),
        r("span", {
          class: u(n(l).e("separator"))
        }, "至", 2),
        r("input", {
          type: "text",
          placeholder: s.endPlaceholder,
          disabled: s.disabled,
          readonly: !0,
          value: F.value,
          class: u([n(l).e("input-inner"), n(l).is("active", O.value === "end")]),
          onClick: g[1] || (g[1] = se((K) => H("end"), ["stop"]))
        }, null, 10, Ol),
        r("span", {
          class: u(n(l).e("suffix"))
        }, [
          s.clearable && (P.value || F.value) && !s.disabled ? (o(), d("span", {
            key: 0,
            class: u(n(l).e("clear")),
            onClick: se(x, ["stop"])
          }, [
            Q(n(ee), {
              name: "close",
              size: 14
            })
          ], 2)) : (o(), d("span", {
            key: 1,
            class: u(n(l).e("icon"))
          }, [
            Q(n(ee), {
              name: "clock",
              size: 14
            })
          ], 2))
        ], 2)
      ], 2)),
      (o(), fe(Ie, { to: "body" }, [
        Q(Pe, { name: "fade" }, {
          default: He(() => [
            ie(r("div", {
              ref_key: "popperRef",
              ref: S,
              class: u(n(l).e("popper")),
              style: te({ zIndex: b.value, ...D.value })
            }, [
              s.type === "timerange" ? (o(), d("div", {
                key: 0,
                class: u(n(l).e("popper-header"))
              }, N(O.value === "start" ? "请选择开始时间" : "请选择结束时间"), 3)) : U("", !0),
              Q(Il, {
                "model-value": Array.isArray(V.value) ? V.value[O.value === "start" ? 0 : 1] : V.value,
                format: s.format,
                "disabled-hours": s.disabledHours,
                "disabled-minutes": s.disabledMinutes,
                "disabled-seconds": s.disabledSeconds,
                "hour-step": s.hourStep,
                "minute-step": s.minuteStep,
                "second-step": s.secondStep,
                onConfirm: j,
                onCancel: p
              }, null, 8, ["model-value", "format", "disabled-hours", "disabled-minutes", "disabled-seconds", "hour-step", "minute-step", "second-step"])
            ], 6), [
              [be, m.value]
            ])
          ]),
          _: 1
        })
      ]))
    ], 2));
  }
});
function Yl(s, k, a) {
  return a ? a(k, s) : s.toLowerCase().includes(k.toLowerCase());
}
function qe(s, k, a = "value", e = "children") {
  for (const t of s) {
    if (t[a] === k)
      return t;
    if (t[e] && t[e].length > 0) {
      const l = qe(t[e], k, a, e);
      if (l) return l;
    }
  }
  return null;
}
function Fe(s, k, a = "value", e = "children") {
  const t = [];
  function l(c) {
    for (const m of c) {
      if (m[a] === k)
        return t.push(m), !0;
      if (m[e] && m[e].length > 0) {
        if (t.push(m), l(m[e]))
          return !0;
        t.pop();
      }
    }
    return !1;
  }
  return l(s), t;
}
function Nl(s, k = "children") {
  const a = [];
  function e(t, l = 0, c = null) {
    for (const m of t)
      a.push({ ...m, level: l, parent: c }), m[k] && m[k].length > 0 && e(m[k], l + 1, m);
  }
  return e(s), a;
}
const Ul = ["onClick"], Kl = ["placeholder", "disabled", "readonly", "value"], Xl = ["onClick"], Wl = ["onClick"], vt = /* @__PURE__ */ le({
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
    noMatchText: { default: "无匹配数据" },
    mode: { default: "single" }
  },
  emits: ["update:modelValue", "update:value", "change", "clear", "focus", "blur", "visible-change", "remove-tag"],
  setup(s, { emit: k }) {
    const a = le({
      name: "XSelectPopperContent",
      setup(E, { slots: q }) {
        const Z = xe("select");
        return Z && $e("select", Z), () => {
          var L;
          return (L = q.default) == null ? void 0 : L.call(q);
        };
      }
    }), e = s, t = k, l = ae("select"), c = Le(), m = () => {
      const E = Ee();
      let q = E.current;
      document.querySelectorAll(
        ".x-drawer__overlay, .x-modal__overlay, .x-select__popper, .x-dropdown__popper, .x-popover__popper"
      ).forEach((I) => {
        const W = parseInt(getComputedStyle(I).zIndex, 10);
        !isNaN(W) && W > q && (q = W);
      });
      const L = q + 1;
      return E.set(L), L;
    }, b = A(), T = A(), S = A(), C = A(!1), D = A(2e3), z = A(""), O = A(-1), y = A({ top: "0px", left: "0px" }), B = A([]), P = (E) => {
      B.value.find((q) => q.value === E.value) || B.value.push(E);
    }, F = M(() => e.type === "multiple" || e.mode === "multiple"), V = M(() => e.type === "cascader"), h = A([]), v = M(() => {
      const E = e.options && e.options.length > 0 ? e.options : [], q = B.value;
      if (q.length === 0) return E;
      if (E.length === 0) return q;
      const Z = new Set(q.map((I) => I.value)), L = [...q];
      for (const I of E)
        Z.has(I.value) || L.push(I);
      return L;
    }), $ = (E) => {
      t("update:modelValue", E), t("update:value", E), t("change", E);
    }, H = M(() => {
      const E = e.modelValue ?? e.value;
      return F.value ? Array.isArray(E) ? E : [] : V.value ? Array.isArray(E) ? E : E != null && E !== "" ? [E] : [] : E != null && E !== "" ? [E] : [];
    }), R = M(() => {
      const E = v.value;
      return V.value ? Nl(E, e.childrenKey) : E.map((q) => ({ ...q, level: 0 }));
    }), Y = M(() => !e.filterable || !z.value ? R.value : R.value.filter((E) => {
      const q = E[e.labelKey] || "";
      return Yl(q, z.value, e.filterMethod);
    })), j = M(() => {
      const E = [];
      for (const q of H.value) {
        const Z = qe(v.value, q, e.valueKey, e.childrenKey);
        Z && E.push(Z);
      }
      return E;
    }), p = M(() => {
      if (F.value)
        return "";
      if (V.value)
        return Fe(v.value, H.value[H.value.length - 1], e.valueKey, e.childrenKey).map((Z) => Z[e.labelKey]).join(e.separator);
      const E = j.value[0];
      return E ? E[e.labelKey] : "";
    }), x = M(() => F.value ? j.value : []), w = M(() => e.collapseTags ? x.value.slice(0, e.maxCollapseTags) : x.value), i = M(() => e.collapseTags ? Math.max(0, x.value.length - e.maxCollapseTags) : 0), f = M(() => [
      l.b(),
      l.m(e.size),
      l.is("disabled", e.disabled),
      l.is("multiple", F.value),
      l.is("cascader", V.value),
      l.is("filterable", e.filterable),
      l.is("focus", C.value)
    ]), g = () => {
      if (!b.value || !S.value || !C.value) return;
      const E = b.value.getBoundingClientRect(), q = S.value;
      q.offsetHeight;
      const Z = q.getBoundingClientRect();
      let L = E.bottom + 4, I = E.left;
      I + Z.width > window.innerWidth && (I = window.innerWidth - Z.width - 8);
      let W = 274;
      if (L + Z.height > window.innerHeight) {
        const he = E.top - Z.height - 4;
        if (he >= 8)
          L = he;
        else {
          const Oe = window.innerHeight - E.bottom - 8, Ye = E.top - 8;
          Ye > Oe ? (L = 8, W = Math.max(120, Ye)) : W = Math.max(120, Oe);
        }
      }
      y.value = {
        top: `${L}px`,
        left: `${I}px`,
        maxHeight: `${W}px`
      };
    }, K = () => {
      e.disabled || (C.value = !0, D.value = m(), z.value = "", Se(() => {
        requestAnimationFrame(() => {
          g();
        });
      }), t("visible-change", !0), t("focus", {}));
    }, ne = () => {
      C.value = !1, z.value = "", h.value = [], t("visible-change", !1), t("blur", {});
    }, X = (E) => {
      if (!E.disabled)
        if (F.value) {
          const q = [...H.value], Z = E[e.valueKey], L = q.indexOf(Z);
          if (L > -1)
            q.splice(L, 1), t("remove-tag", Z);
          else {
            if (e.multipleLimit > 0 && q.length >= e.multipleLimit)
              return;
            q.push(Z);
          }
          $(q);
        } else if (V.value)
          if (E.children && E.children.length > 0) {
            const q = Fe(v.value, E[e.valueKey], e.valueKey, e.childrenKey);
            h.value = q;
          } else {
            const Z = Fe(v.value, E[e.valueKey], e.valueKey, e.childrenKey).map((L) => L[e.valueKey]);
            $(Z), ne();
          }
        else
          $(E[e.valueKey]), ne();
    }, re = (E) => {
      const q = H.value.filter((Z) => Z !== E[e.valueKey]);
      $(q), t("remove-tag", E[e.valueKey]);
    }, G = () => {
      const E = F.value ? [] : "";
      $(E), t("clear");
    }, me = (E) => {
      z.value = E.target.value;
    }, ye = (E) => {
      if (!b.value) return;
      const q = E.target, Z = S.value && S.value.contains(q);
      b.value.contains(q) || Z || ne();
    }, ze = (E) => {
      if (E.key === "Escape")
        ne();
      else if (E.key === "Enter" && C.value) {
        const q = Y.value[O.value];
        q && X(q);
      } else E.key === "ArrowDown" && C.value ? (E.preventDefault(), O.value = Math.min(O.value + 1, Y.value.length - 1)) : E.key === "ArrowUp" && C.value && (E.preventDefault(), O.value = Math.max(O.value - 1, 0));
    }, we = (E) => H.value.includes(E[e.valueKey]), Te = (E, q) => [
      l.e("option"),
      l.is("selected", we(E)),
      l.is("disabled", E.disabled === !0),
      l.is("hover", O.value === q),
      l.is("group", !!(E.children && E.children.length > 0))
    ], Re = M(() => {
      if (!V.value) return [];
      const E = [v.value];
      for (const q of h.value)
        q.children && q.children.length > 0 && E.push(q.children);
      return E;
    });
    return ge(() => {
      document.addEventListener("mousedown", ye), document.addEventListener("keydown", ze);
    }), De(() => {
      document.removeEventListener("mousedown", ye), document.removeEventListener("keydown", ze), document.removeEventListener("scroll", g, !0);
    }), oe(C, (E) => {
      E ? document.addEventListener("scroll", g, !0) : document.removeEventListener("scroll", g, !0);
    }), $e("select", {
      selectedValues: H,
      handleSelect: X,
      isSelected: we,
      registerOption: P
    }), (E, q) => (o(), d("div", {
      ref_key: "selectRef",
      ref: b,
      class: u(f.value)
    }, [
      r("div", {
        class: u(n(l).e("wrapper")),
        onClick: q[0] || (q[0] = (Z) => C.value ? ne() : K())
      }, [
        F.value && x.value.length > 0 ? (o(), d("div", {
          key: 0,
          class: u(n(l).e("tags"))
        }, [
          (o(!0), d(J, null, _(w.value, (Z) => (o(), d("span", {
            key: Z[s.valueKey],
            class: u(n(l).e("tag"))
          }, [
            r("span", {
              class: u(n(l).e("tag-text"))
            }, N(Z[s.labelKey]), 3),
            r("span", {
              class: u(n(l).e("tag-close")),
              onClick: se((L) => re(Z), ["stop"])
            }, "×", 10, Ul)
          ], 2))), 128)),
          i.value > 0 ? (o(), d("span", {
            key: 0,
            class: u(n(l).e("tag-count"))
          }, " +" + N(i.value), 3)) : U("", !0)
        ], 2)) : U("", !0),
        r("input", {
          ref_key: "inputRef",
          ref: T,
          class: u(n(l).e("input")),
          placeholder: F.value && x.value.length > 0 ? "" : s.placeholder,
          disabled: s.disabled,
          readonly: !s.filterable || !C.value,
          value: s.filterable && C.value ? z.value : p.value,
          onInput: me
        }, null, 42, Kl),
        r("span", {
          class: u(n(l).e("suffix"))
        }, [
          s.clearable && H.value.length > 0 && !s.disabled ? (o(), d("span", {
            key: 0,
            class: u(n(l).e("clear")),
            onClick: se(G, ["stop"])
          }, "×", 2)) : (o(), d("span", {
            key: 1,
            class: u([n(l).e("arrow"), n(l).is("reverse", C.value)])
          }, [
            Q(n(ee), {
              name: "chevron-down",
              size: 14
            })
          ], 2))
        ], 2)
      ], 2),
      (o(), fe(Ie, { to: "body" }, [
        Q(Pe, { name: "fade" }, {
          default: He(() => [
            ie(r("div", {
              ref_key: "popperRef",
              ref: S,
              class: u([n(l).e("popper"), n(l).is("cascader", V.value)]),
              style: te({ zIndex: D.value, ...y.value })
            }, [
              V.value ? (o(), d("div", {
                key: 0,
                class: u(n(l).e("cascader-panels"))
              }, [
                (o(!0), d(J, null, _(Re.value, (Z, L) => (o(), d("div", {
                  key: L,
                  class: u(n(l).e("cascader-panel"))
                }, [
                  (o(!0), d(J, null, _(Z, (I, W) => (o(), d("div", {
                    key: I[s.valueKey],
                    class: u(Te(I, W)),
                    onClick: se((he) => X(I), ["stop", "prevent"])
                  }, [
                    r("span", {
                      class: u(n(l).e("option-label"))
                    }, N(I[s.labelKey]), 3),
                    I.children && I.children.length > 0 ? (o(), d("span", {
                      key: 0,
                      class: u(n(l).e("option-arrow"))
                    }, "›", 2)) : U("", !0)
                  ], 10, Xl))), 128))
                ], 2))), 128))
              ], 2)) : (o(), d(J, { key: 1 }, [
                Y.value.length === 0 && !n(c).default ? (o(), d("div", {
                  key: 0,
                  class: u(n(l).e("empty"))
                }, N(z.value ? s.noMatchText : s.noDataText), 3)) : (o(), d(J, { key: 1 }, [
                  E.$slots.default ? (o(), d("div", {
                    key: 0,
                    class: u(n(l).e("options"))
                  }, [
                    Q(n(a), null, {
                      default: He(() => [
                        ue(E.$slots, "default")
                      ]),
                      _: 3
                    })
                  ], 2)) : (o(), d("div", {
                    key: 1,
                    class: u(n(l).e("options"))
                  }, [
                    (o(!0), d(J, null, _(Y.value, (Z, L) => (o(), d("div", {
                      key: Z[s.valueKey],
                      class: u(Te(Z, L)),
                      onClick: se((I) => X(Z), ["stop", "prevent"])
                    }, [
                      r("span", {
                        class: u(n(l).e("option-label"))
                      }, N(Z[s.labelKey]), 3),
                      we(Z) ? (o(), d("span", {
                        key: 0,
                        class: u(n(l).e("option-check"))
                      }, "✓", 2)) : U("", !0)
                    ], 10, Wl))), 128))
                  ], 2))
                ], 64))
              ], 64))
            ], 6), [
              [be, C.value]
            ])
          ]),
          _: 3
        })
      ]))
    ], 2));
  }
}), ql = /* @__PURE__ */ le({
  name: "XSelectOption",
  __name: "Option",
  props: {
    value: {},
    label: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(s) {
    const k = s, a = ae("select"), e = xe("select");
    ge(() => {
      e && e.registerOption && e.registerOption({
        value: k.value,
        label: k.label,
        disabled: k.disabled
      });
    });
    const t = M(() => !e || !e.selectedValues ? !1 : e.selectedValues.value.includes(k.value)), l = (c) => {
      c.stopPropagation(), c.preventDefault(), !k.disabled && e && e.handleSelect && e.handleSelect({
        value: k.value,
        label: k.label,
        disabled: k.disabled
      });
    };
    return (c, m) => (o(), d("div", {
      class: u([
        n(a).e("option"),
        n(a).is("selected", t.value),
        n(a).is("disabled", s.disabled)
      ]),
      onClick: l
    }, [
      r("span", {
        class: u(n(a).e("option-label"))
      }, N(s.label), 3),
      t.value ? (o(), d("span", {
        key: 0,
        class: u(n(a).e("option-check"))
      }, "✓", 2)) : U("", !0)
    ], 2));
  }
}), ft = ql, jl = ["checked", "indeterminate"], Gl = ["placeholder"], Jl = ["onClick"], Zl = ["checked", "disabled", "onChange"], Ql = ["disabled"], _l = ["disabled"], ea = ["checked", "indeterminate"], la = ["placeholder"], aa = ["onClick"], ta = ["checked", "disabled", "onChange"], mt = /* @__PURE__ */ le({
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
  setup(s, { expose: k, emit: a }) {
    const e = s, t = a, l = ae("transfer"), c = M(() => {
      var i;
      return ((i = e.props) == null ? void 0 : i.key) || "key";
    }), m = M(() => {
      var i;
      return ((i = e.props) == null ? void 0 : i.label) || "label";
    }), b = M(() => {
      var i;
      return ((i = e.props) == null ? void 0 : i.disabled) || "disabled";
    }), T = A(""), S = A(""), C = A([]), D = A([]), z = (i) => i[c.value], O = (i) => i[m.value], y = (i) => i[b.value] || !1, B = M(() => e.data.filter((i) => {
      const f = z(i);
      return e.modelValue.includes(f) ? !1 : e.filterable && T.value ? e.filterMethod ? e.filterMethod(T.value, i) : O(i).toLowerCase().includes(T.value.toLowerCase()) : !0;
    })), P = M(() => {
      const i = e.modelValue;
      let f = e.data.filter((g) => {
        const K = z(g);
        return i.includes(K);
      });
      return e.filterable && S.value && (f = f.filter((g) => e.filterMethod ? e.filterMethod(S.value, g) : O(g).toLowerCase().includes(S.value.toLowerCase()))), e.targetOrder === "push" ? f.sort((g, K) => i.indexOf(z(g)) - i.indexOf(z(K))) : e.targetOrder === "unshift" ? f.sort((g, K) => i.indexOf(z(K)) - i.indexOf(z(g))) : f;
    }), F = M(() => B.value.filter((i) => C.value.includes(z(i))).every((i) => y(i))), V = M(() => P.value.filter((i) => D.value.includes(z(i))).every((i) => y(i))), h = M(() => C.value.length === 0 || F.value), v = M(() => D.value.length === 0 || V.value), $ = () => {
      const i = C.value.filter((g) => {
        const K = e.data.find((ne) => z(ne) === g);
        return K && !y(K);
      });
      let f;
      e.targetOrder === "unshift" ? f = [...i, ...e.modelValue] : f = [...e.modelValue, ...i], t("update:modelValue", f), t("change", f, "right", i), C.value = [];
    }, H = () => {
      const i = D.value.filter((g) => {
        const K = e.data.find((ne) => z(ne) === g);
        return K && !y(K);
      }), f = e.modelValue.filter((g) => !i.includes(g));
      t("update:modelValue", f), t("change", f, "left", i), D.value = [];
    }, R = (i) => {
      const f = C.value.indexOf(i);
      f > -1 ? C.value.splice(f, 1) : C.value.push(i), t("left-check-change", [...C.value]);
    }, Y = (i) => {
      const f = D.value.indexOf(i);
      f > -1 ? D.value.splice(f, 1) : D.value.push(i), t("right-check-change", [...D.value]);
    }, j = () => {
      C.value.length === B.value.filter((i) => !y(i)).length ? C.value = [] : C.value = B.value.filter((i) => !y(i)).map((i) => z(i)), t("left-check-change", [...C.value]);
    }, p = () => {
      D.value.length === P.value.filter((i) => !y(i)).length ? D.value = [] : D.value = P.value.filter((i) => !y(i)).map((i) => z(i)), t("right-check-change", [...D.value]);
    }, x = (i) => {
      i === "left" ? T.value = "" : S.value = "";
    }, w = M(() => [l.b()]);
    return k({
      clearQuery: x
    }), (i, f) => (o(), d("div", {
      class: u(w.value)
    }, [
      r("div", {
        class: u(n(l).e("panel"))
      }, [
        r("div", {
          class: u(n(l).e("header"))
        }, [
          r("label", {
            class: u(n(l).e("checkbox"))
          }, [
            r("input", {
              type: "checkbox",
              checked: C.value.length > 0 && C.value.length === B.value.filter((g) => !y(g)).length,
              indeterminate: C.value.length > 0 && C.value.length < B.value.filter((g) => !y(g)).length,
              onChange: j
            }, null, 40, jl),
            r("span", null, N(s.titles[0]), 1)
          ], 2),
          r("span", {
            class: u(n(l).e("count"))
          }, N(C.value.length) + " / " + N(B.value.length), 3)
        ], 2),
        s.filterable ? (o(), d("div", {
          key: 0,
          class: u(n(l).e("filter"))
        }, [
          ie(r("input", {
            "onUpdate:modelValue": f[0] || (f[0] = (g) => T.value = g),
            placeholder: s.filterPlaceholder,
            class: u(n(l).e("filter-input"))
          }, null, 10, Gl), [
            [Ve, T.value]
          ]),
          T.value ? (o(), d("span", {
            key: 0,
            class: u(n(l).e("filter-clear")),
            onClick: f[1] || (f[1] = (g) => x("left"))
          }, "×", 2)) : U("", !0)
        ], 2)) : U("", !0),
        r("div", {
          class: u(n(l).e("body"))
        }, [
          (o(!0), d(J, null, _(B.value, (g) => (o(), d("div", {
            key: z(g),
            class: u([
              n(l).e("item"),
              n(l).is("disabled", y(g)),
              n(l).is("checked", C.value.includes(z(g)))
            ]),
            onClick: (K) => !y(g) && R(z(g))
          }, [
            r("label", {
              class: u(n(l).e("checkbox"))
            }, [
              r("input", {
                type: "checkbox",
                checked: C.value.includes(z(g)),
                disabled: y(g),
                onClick: f[2] || (f[2] = se(() => {
                }, ["stop"])),
                onChange: (K) => R(z(g))
              }, null, 40, Zl),
              r("span", null, N(O(g)), 1)
            ], 2)
          ], 10, Jl))), 128)),
          B.value.length === 0 ? (o(), d("div", {
            key: 0,
            class: u(n(l).e("empty"))
          }, [
            ue(i.$slots, "left-empty", {}, () => [
              f[6] || (f[6] = de("暂无数据", -1))
            ])
          ], 2)) : U("", !0)
        ], 2)
      ], 2),
      r("div", {
        class: u(n(l).e("buttons"))
      }, [
        r("button", {
          class: u([n(l).e("button"), n(l).is("disabled", h.value)]),
          disabled: h.value,
          onClick: $
        }, N(s.buttonTexts[0] || ">"), 11, Ql),
        r("button", {
          class: u([n(l).e("button"), n(l).is("disabled", v.value)]),
          disabled: v.value,
          onClick: H
        }, N(s.buttonTexts[1] || "<"), 11, _l)
      ], 2),
      r("div", {
        class: u(n(l).e("panel"))
      }, [
        r("div", {
          class: u(n(l).e("header"))
        }, [
          r("label", {
            class: u(n(l).e("checkbox"))
          }, [
            r("input", {
              type: "checkbox",
              checked: D.value.length > 0 && D.value.length === P.value.filter((g) => !y(g)).length,
              indeterminate: D.value.length > 0 && D.value.length < P.value.filter((g) => !y(g)).length,
              onChange: p
            }, null, 40, ea),
            r("span", null, N(s.titles[1]), 1)
          ], 2),
          r("span", {
            class: u(n(l).e("count"))
          }, N(D.value.length) + " / " + N(P.value.length), 3)
        ], 2),
        s.filterable ? (o(), d("div", {
          key: 0,
          class: u(n(l).e("filter"))
        }, [
          ie(r("input", {
            "onUpdate:modelValue": f[3] || (f[3] = (g) => S.value = g),
            placeholder: s.filterPlaceholder,
            class: u(n(l).e("filter-input"))
          }, null, 10, la), [
            [Ve, S.value]
          ]),
          S.value ? (o(), d("span", {
            key: 0,
            class: u(n(l).e("filter-clear")),
            onClick: f[4] || (f[4] = (g) => x("right"))
          }, "×", 2)) : U("", !0)
        ], 2)) : U("", !0),
        r("div", {
          class: u(n(l).e("body"))
        }, [
          (o(!0), d(J, null, _(P.value, (g) => (o(), d("div", {
            key: z(g),
            class: u([
              n(l).e("item"),
              n(l).is("disabled", y(g)),
              n(l).is("checked", D.value.includes(z(g)))
            ]),
            onClick: (K) => !y(g) && Y(z(g))
          }, [
            r("label", {
              class: u(n(l).e("checkbox"))
            }, [
              r("input", {
                type: "checkbox",
                checked: D.value.includes(z(g)),
                disabled: y(g),
                onClick: f[5] || (f[5] = se(() => {
                }, ["stop"])),
                onChange: (K) => Y(z(g))
              }, null, 40, ta),
              r("span", null, N(O(g)), 1)
            ], 2)
          ], 10, aa))), 128)),
          P.value.length === 0 ? (o(), d("div", {
            key: 0,
            class: u(n(l).e("empty"))
          }, [
            ue(i.$slots, "right-empty", {}, () => [
              f[7] || (f[7] = de("暂无数据", -1))
            ])
          ], 2)) : U("", !0)
        ], 2)
      ], 2)
    ], 2));
  }
}), na = { key: 0 }, sa = { key: 1 }, ht = /* @__PURE__ */ le({
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
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("slider"), l = A(), c = A(), m = A(!1), b = A(!1), T = M(() => {
      const x = a.max - a.min;
      return (a.modelValue - a.min) / x * 100;
    }), S = M(() => a.formatTooltip ? a.formatTooltip(a.modelValue) : a.modelValue), C = M(() => {
      if (!a.showStops || a.min >= a.max) return [];
      const x = [], w = (a.max - a.min) / a.step;
      for (let i = 0; i <= w; i++) {
        const f = a.min + i * a.step;
        f > a.min && f < a.max && x.push((f - a.min) / (a.max - a.min) * 100);
      }
      return x;
    }), D = M(() => a.marks ? Object.keys(a.marks).map((x) => {
      const w = Number(x), i = a.marks[w], f = (w - a.min) / (a.max - a.min) * 100;
      let g, K = {};
      return typeof i == "string" ? g = i : (g = i.label || String(w), K = i.style || {}), { value: w, pos: f, label: g, style: K };
    }) : []), z = () => l.value ? a.vertical ? l.value.offsetHeight : l.value.offsetWidth : 0, O = (x, w) => {
      if (!l.value) return a.modelValue;
      const i = l.value.getBoundingClientRect(), f = z();
      let g;
      a.vertical ? g = (i.bottom - w) / f * 100 : g = (x - i.left) / f * 100, g = Math.max(0, Math.min(100, g));
      const K = a.min + g / 100 * (a.max - a.min), ne = Math.round(K / a.step) * a.step;
      return Math.max(a.min, Math.min(a.max, ne));
    }, y = (x) => {
      if (a.disabled) return;
      const w = Math.max(a.min, Math.min(a.max, x));
      w !== a.modelValue && (e("update:modelValue", w), e("input", w));
    }, B = (x) => {
      if (a.disabled) return;
      x.preventDefault(), b.value = !0, m.value = !0;
      const w = O(x.clientX, x.clientY);
      y(w), document.addEventListener("mousemove", P), document.addEventListener("mouseup", F);
    }, P = (x) => {
      if (!b.value) return;
      const w = O(x.clientX, x.clientY);
      y(w);
    }, F = () => {
      b.value = !1, e("change", a.modelValue), document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", F);
    }, V = (x) => {
      if (a.disabled) return;
      x.preventDefault(), b.value = !0, m.value = !0;
      const w = x.touches[0], i = O(w.clientX, w.clientY);
      y(i);
    }, h = (x) => {
      if (!b.value) return;
      const w = x.touches[0], i = O(w.clientX, w.clientY);
      y(i);
    }, v = () => {
      b.value = !1, e("change", a.modelValue);
    }, $ = () => {
      a.showTooltip && (m.value = !0);
    }, H = () => {
      b.value || (m.value = !1);
    };
    De(() => {
      document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", F);
    });
    const R = M(() => [
      t.b(),
      t.is("disabled", a.disabled),
      t.is("vertical", a.vertical)
    ]), Y = M(() => a.vertical && a.height ? { height: typeof a.height == "number" ? `${a.height}px` : a.height } : {}), j = M(() => a.vertical ? { height: `${T.value}%` } : { width: `${T.value}%` }), p = M(() => a.vertical ? { bottom: `${T.value}%` } : { left: `${T.value}%` });
    return (x, w) => (o(), d("div", {
      class: u(R.value),
      style: te(Y.value)
    }, [
      r("div", {
        ref_key: "sliderRef",
        ref: l,
        class: u(n(t).e("runway")),
        onMousedown: B,
        onTouchstart: V
      }, [
        r("div", {
          class: u(n(t).e("bar")),
          style: te(j.value)
        }, null, 6),
        s.showStops ? (o(), d("div", na, [
          (o(!0), d(J, null, _(C.value, (i, f) => (o(), d("div", {
            key: f,
            class: u(n(t).e("stop")),
            style: te(s.vertical ? { bottom: `${i}%` } : { left: `${i}%` })
          }, null, 6))), 128))
        ])) : U("", !0),
        D.value.length > 0 ? (o(), d("div", sa, [
          (o(!0), d(J, null, _(D.value, (i) => (o(), d("div", {
            key: i.value,
            class: u(n(t).e("mark")),
            style: te(s.vertical ? { bottom: `${i.pos}%` } : { left: `${i.pos}%`, ...i.style })
          }, [
            r("span", {
              class: u(n(t).e("mark-text"))
            }, N(i.label), 3)
          ], 6))), 128))
        ])) : U("", !0),
        r("div", {
          ref_key: "buttonRef",
          ref: c,
          class: u(n(t).e("button-wrapper")),
          style: te(p.value),
          onMouseenter: $,
          onMouseleave: H,
          onTouchmove: h,
          onTouchend: v
        }, [
          s.showTooltip && m.value ? (o(), d("div", {
            key: 0,
            class: u(n(t).e("tooltip"))
          }, N(S.value), 3)) : U("", !0),
          r("div", {
            class: u(n(t).e("button"))
          }, null, 2)
        ], 38)
      ], 34)
    ], 6));
  }
}), ua = ["src"], oa = {
  key: 0,
  class: "status-uploading"
}, ia = { class: "progress-circle" }, ra = { class: "progress-text" }, da = {
  key: 1,
  class: "status-error"
}, ca = {
  key: 2,
  class: "status-success"
}, va = {
  key: 0,
  class: "action-preview"
}, fa = ["onClick"], ma = ["disabled"], ha = { class: "progress-text" }, pa = ["onClick"], ga = ["src"], ba = {
  key: 0,
  class: "action-success"
}, ya = ["onClick"], ka = ["multiple", "accept", "disabled"], pt = /* @__PURE__ */ le({
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
  setup(s, { expose: k, emit: a }) {
    const e = s, t = a, l = ae("upload");
    Le();
    const c = A(), m = A([...e.fileList]);
    oe(() => e.fileList, (p) => {
      m.value = [...p];
    }, { deep: !0 });
    const b = A(!1);
    let T = 1;
    const S = () => Date.now() + T++, C = (p) => {
      var i;
      const x = (i = p.name.split(".").pop()) == null ? void 0 : i.toLowerCase(), w = {
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
      return w[x || ""] || w.default;
    }, D = M(() => e.limit ? m.value.length < e.limit : !0), z = M(() => [
      l.b(),
      l.is("disabled", e.disabled),
      l.is("drag", e.drag),
      l.m(e.listType)
    ]), O = (p) => {
      const x = p.target.files;
      !x || x.length === 0 || (y(Array.from(x)), c.value && (c.value.value = ""));
    }, y = async (p) => {
      if (e.limit && m.value.length + p.length > e.limit) {
        t("exceed", p, m.value);
        return;
      }
      for (const x of p) {
        if (e.beforeUpload && await e.beforeUpload(x, p) === !1)
          continue;
        const w = {
          name: x.name,
          size: x.size,
          status: "ready",
          percentage: 0,
          uid: S(),
          raw: x
        };
        x.type.startsWith("image/") && (w.thumbUrl = await B(x), w.url = w.thumbUrl), m.value.push(w), t("update:fileList", m.value), t("change", w, m.value), e.autoUpload && P(w);
      }
    }, B = (p) => new Promise((x) => {
      const w = new FileReader();
      w.onload = (i) => {
        var f;
        x((f = i.target) == null ? void 0 : f.result);
      }, w.readAsDataURL(p);
    }), P = (p) => {
      if (!p.raw) return;
      p.status = "uploading", (e.httpRequest || F)({
        action: e.action,
        headers: e.headers,
        data: e.data,
        file: p.raw,
        name: e.name,
        withCredentials: e.withCredentials,
        onProgress: (w) => {
          p.percentage = w.percent, t("progress", w, p, m.value);
        },
        onSuccess: (w) => {
          p.status = "success", p.response = w, t("success", w, p, m.value);
        },
        onError: (w) => {
          p.status = "error", t("error", w, p, m.value);
        }
      });
    }, F = (p) => new Promise((x, w) => {
      const i = new XMLHttpRequest();
      i.upload.addEventListener("progress", (g) => {
        g.lengthComputable && p.onProgress({ percent: g.loaded / g.total * 100 });
      }), i.addEventListener("load", () => {
        if (i.status < 200 || i.status >= 300) {
          p.onError(new Error("Upload failed")), w(new Error("Upload failed"));
          return;
        }
        try {
          const g = JSON.parse(i.responseText);
          p.onSuccess(g), x(g);
        } catch {
          p.onSuccess(i.responseText), x(i.responseText);
        }
      }), i.addEventListener("error", () => {
        p.onError(new Error("Upload error")), w(new Error("Upload error"));
      });
      const f = new FormData();
      f.append(p.name, p.file), p.data && Object.keys(p.data).forEach((g) => {
        f.append(g, p.data[g]);
      }), i.open("POST", p.action, !0), p.withCredentials && (i.withCredentials = !0), p.headers && Object.keys(p.headers).forEach((g) => {
        i.setRequestHeader(g, p.headers[g]);
      }), i.send(f);
    }), V = async (p) => {
      if (e.beforeRemove && await e.beforeRemove(p, m.value) === !1)
        return;
      const x = m.value.findIndex((w) => w.uid === p.uid);
      x > -1 && (m.value.splice(x, 1), t("update:fileList", m.value), t("remove", p, m.value));
    }, h = () => {
      m.value.filter((p) => p.status === "ready" && p.raw).forEach((p) => P(p));
    }, v = () => {
      m.value = [], t("update:fileList", m.value);
    }, $ = () => {
      var p;
      e.disabled || (p = c.value) == null || p.click();
    }, H = (p) => {
      p.preventDefault(), !e.disabled && e.drag && (b.value = !0);
    }, R = () => {
      b.value = !1;
    }, Y = (p) => {
      var w;
      if (p.preventDefault(), b.value = !1, e.disabled) return;
      const x = (w = p.dataTransfer) == null ? void 0 : w.files;
      x && x.length > 0 && y(Array.from(x));
    }, j = (p) => {
      if (!p) return "0 B";
      const x = ["B", "KB", "MB", "GB"];
      let w = 0, i = p;
      for (; i >= 1024 && w < x.length - 1; )
        i /= 1024, w++;
      return `${i.toFixed(2)} ${x[w]}`;
    };
    return k({
      submit: h,
      clearFiles: v,
      uploadFiles: m
    }), (p, x) => (o(), d("div", {
      class: u(z.value)
    }, [
      s.drag ? (o(), d("div", {
        key: 0,
        class: u([n(l).e("drag"), n(l).is("dragover", b.value)]),
        onClick: $,
        onDragover: H,
        onDragleave: R,
        onDrop: Y
      }, [
        ue(p.$slots, "drag", {}, () => [
          r("span", {
            class: u(n(l).e("drag-icon"))
          }, "📁", 2),
          r("div", {
            class: u(n(l).e("drag-text"))
          }, [...x[0] || (x[0] = [
            de(" 将文件拖到此处，或", -1),
            r("em", null, "点击上传", -1)
          ])], 2)
        ])
      ], 34)) : s.listType === "picture-card" ? (o(), d("ul", {
        key: 1,
        class: u([n(l).e("files"), n(l).e("upload-list")])
      }, [
        (o(!0), d(J, null, _(m.value, (w) => (o(), d("li", {
          key: w.uid,
          class: u([n(l).e("file"), n(l).is(`status-${w.status}`)])
        }, [
          w.thumbUrl && w.status !== "uploading" ? (o(), d("img", {
            key: 0,
            src: w.thumbUrl,
            class: u(n(l).e("file-image"))
          }, null, 10, ua)) : (o(), d("div", {
            key: 1,
            class: u(n(l).e("file-status"))
          }, [
            w.status === "uploading" ? (o(), d("span", oa, [
              r("span", ia, [
                r("span", ra, N(Math.round(w.percentage || 0)) + "%", 1)
              ])
            ])) : w.status === "error" ? (o(), d("span", da, [
              Q(n(ee), {
                name: "close",
                size: 16
              })
            ])) : w.status === "success" ? (o(), d("span", ca, [
              Q(n(ee), {
                name: "check",
                size: 16
              })
            ])) : U("", !0)
          ], 2)),
          r("span", {
            class: u(n(l).e("file-actions"))
          }, [
            w.url ? (o(), d("span", va, [
              Q(n(ee), {
                name: "eye",
                size: 14
              })
            ])) : U("", !0),
            r("span", {
              class: "action-remove",
              onClick: (i) => V(w)
            }, [
              Q(n(ee), {
                name: "delete",
                size: 14
              })
            ], 8, fa)
          ], 2)
        ], 2))), 128)),
        D.value ? (o(), d("li", {
          key: 0,
          class: u(n(l).e("upload-card")),
          onClick: $
        }, [
          ue(p.$slots, "trigger", {}, () => [
            x[1] || (x[1] = r("span", { class: "upload-icon" }, "+", -1))
          ])
        ], 2)) : U("", !0)
      ], 2)) : (o(), d(J, { key: 2 }, [
        r("div", {
          class: u(n(l).e("trigger-wrapper")),
          onClick: $
        }, [
          ue(p.$slots, "trigger", {}, () => [
            D.value ? (o(), d("button", {
              key: 0,
              type: "button",
              class: u(n(l).e("trigger")),
              disabled: s.disabled
            }, [
              ue(p.$slots, "default", {}, () => [
                x[2] || (x[2] = de("点击上传", -1))
              ])
            ], 10, ma)) : U("", !0)
          ])
        ], 2),
        s.showFileList && m.value.length > 0 ? (o(), d("ul", {
          key: 0,
          class: u(n(l).e("files"))
        }, [
          (o(!0), d(J, null, _(m.value, (w) => (o(), d("li", {
            key: w.uid,
            class: u([n(l).e("file"), n(l).is(`status-${w.status}`)])
          }, [
            s.listType === "text" ? (o(), d(J, { key: 0 }, [
              r("span", {
                class: u(n(l).e("file-icon"))
              }, N(C(w)), 3),
              r("span", {
                class: u(n(l).e("file-name"))
              }, N(w.name), 3),
              r("span", {
                class: u(n(l).e("file-size"))
              }, N(j(w.size)), 3),
              w.status === "uploading" ? (o(), d("span", {
                key: 0,
                class: u(n(l).e("file-progress"))
              }, [
                r("span", {
                  class: "progress-bar",
                  style: te({ width: w.percentage + "%" })
                }, null, 4),
                r("span", ha, N(Math.round(w.percentage || 0)) + "%", 1)
              ], 2)) : U("", !0),
              w.status === "success" ? (o(), d("span", {
                key: 1,
                class: u(n(l).e("file-success"))
              }, [
                Q(n(ee), {
                  name: "check",
                  size: 14
                })
              ], 2)) : U("", !0),
              w.status === "error" ? (o(), d("span", {
                key: 2,
                class: u(n(l).e("file-error"))
              }, [
                Q(n(ee), {
                  name: "close",
                  size: 14
                })
              ], 2)) : U("", !0),
              r("span", {
                class: u(n(l).e("file-actions"))
              }, [
                r("span", {
                  class: "action-remove",
                  onClick: (i) => V(w)
                }, [
                  Q(n(ee), {
                    name: "close",
                    size: 14
                  })
                ], 8, pa)
              ], 2)
            ], 64)) : s.listType === "picture" ? (o(), d(J, { key: 1 }, [
              w.thumbUrl ? (o(), d("img", {
                key: 0,
                src: w.thumbUrl,
                class: u(n(l).e("file-thumb"))
              }, null, 10, ga)) : (o(), d("span", {
                key: 1,
                class: u(n(l).e("file-icon"))
              }, N(C(w)), 3)),
              r("div", {
                class: u(n(l).e("file-info"))
              }, [
                r("span", {
                  class: u(n(l).e("file-name"))
                }, N(w.name), 3),
                w.status === "uploading" ? (o(), d("span", {
                  key: 0,
                  class: u(n(l).e("file-progress"))
                }, [
                  r("span", {
                    class: "progress-bar",
                    style: te({ width: w.percentage + "%" })
                  }, null, 4)
                ], 2)) : U("", !0)
              ], 2),
              r("span", {
                class: u(n(l).e("file-actions"))
              }, [
                w.status === "success" ? (o(), d("span", ba, [
                  Q(n(ee), {
                    name: "check",
                    size: 14
                  })
                ])) : U("", !0),
                r("span", {
                  class: "action-remove",
                  onClick: (i) => V(w)
                }, [
                  Q(n(ee), {
                    name: "close",
                    size: 14
                  })
                ], 8, ya)
              ], 2)
            ], 64)) : U("", !0)
          ], 2))), 128))
        ], 2)) : U("", !0)
      ], 64)),
      r("input", {
        ref_key: "inputRef",
        ref: c,
        type: "file",
        class: u(n(l).e("input")),
        multiple: s.multiple,
        accept: s.accept,
        disabled: s.disabled,
        onChange: O
      }, null, 42, ka),
      p.$slots.tip ? (o(), d("div", {
        key: 3,
        class: u(n(l).e("tip"))
      }, [
        ue(p.$slots, "tip")
      ], 2)) : U("", !0)
    ], 2));
  }
}), Ma = ["onMousemove", "onClick"], gt = /* @__PURE__ */ le({
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
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("rate"), l = A(-1), c = M(() => l.value > -1 ? l.value : a.modelValue), m = M(() => [
      t.b(),
      t.m(a.size),
      t.is("disabled", a.disabled),
      t.is("readonly", a.readonly)
    ]), b = (y) => a.disabled ? a.disabledVoidColor : y <= a.lowThreshold ? a.colors[0] : y <= a.highThreshold ? a.colors[1] || a.colors[0] : a.colors[2] || a.colors[1] || a.colors[0], T = (y) => {
      const B = c.value;
      return B >= y ? 100 : a.allowHalf && B >= y - 0.5 ? 50 : 0;
    }, S = (y) => T(y) > 0 ? b(c.value) : a.disabled ? a.disabledVoidColor : a.voidColor, C = M(() => {
      if (a.showScore)
        return a.scoreTemplate.replace("{value}", String(a.modelValue));
      if (a.showText) {
        const y = Math.min(Math.ceil(a.modelValue || 0), a.max) - 1;
        return a.texts[Math.max(0, y)] || "";
      }
      return "";
    }), D = (y, B) => {
      if (!(a.disabled || a.readonly))
        if (a.allowHalf) {
          const F = B.currentTarget.getBoundingClientRect(), V = B.clientX - F.left < F.width / 2;
          l.value = V ? y - 0.5 : y;
        } else
          l.value = y;
    }, z = () => {
      a.disabled || a.readonly || (l.value = -1);
    }, O = (y, B) => {
      if (a.disabled || a.readonly) return;
      let P;
      if (a.allowHalf) {
        const V = B.currentTarget.getBoundingClientRect();
        P = B.clientX - V.left < V.width / 2 ? y - 0.5 : y;
      } else
        P = y;
      e("update:modelValue", P), e("change", P);
    };
    return (y, B) => (o(), d("div", {
      class: u(m.value),
      onMouseleave: z
    }, [
      r("div", {
        class: u(n(t).e("items"))
      }, [
        (o(!0), d(J, null, _(s.max, (P) => (o(), d("span", {
          key: P,
          class: u(n(t).e("item")),
          onMousemove: (F) => D(P, F),
          onClick: (F) => O(P, F)
        }, [
          r("span", {
            class: u(n(t).e("void")),
            style: te({ color: s.disabled ? s.disabledVoidColor : s.voidColor })
          }, N(s.disabled ? s.disabledVoidIcon : s.voidIcon), 7),
          r("span", {
            class: u([n(t).e("fill"), T(P) > 0 ? "is-active" : ""]),
            style: te({
              color: S(P),
              clipPath: `inset(0 ${100 - T(P)}% 0 0)`
            })
          }, N(s.icon), 7)
        ], 42, Ma))), 128))
      ], 2),
      s.showText || s.showScore ? (o(), d("div", {
        key: 0,
        class: u(n(t).e("text")),
        style: te({ color: s.textColor })
      }, N(C.value), 7)) : U("", !0)
    ], 34));
  }
}), Va = ["value"], xa = { class: "field-type" }, wa = { class: "field-name" }, Ca = { class: "field-label" }, $a = {
  key: 0,
  class: "field-required"
}, Da = ["onClick"], Sa = ["onClick"], za = ["onClick"], Ta = ["onClick"], Ha = { class: "modal-content" }, La = { class: "modal-header" }, Ra = { class: "modal-body" }, Ba = { class: "edit-field" }, Aa = { class: "edit-field" }, Fa = { class: "edit-field" }, Ia = ["value"], Pa = { class: "edit-field" }, Ea = { class: "edit-field" }, bt = /* @__PURE__ */ le({
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
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("dynamic-fields"), l = A([]), c = A(null), m = A("input"), b = M(() => [
      t.b(),
      t.is("editable", a.editable)
    ]), T = M(() => l.value.length < a.maxFields);
    oe(() => a.fields, (h) => {
      l.value = [...h].sort((v, $) => (v.order || 0) - ($.order || 0));
    }, { immediate: !0, deep: !0 });
    const S = () => `field_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`, C = () => {
      if (!T.value) return;
      const h = {
        id: S(),
        name: `field_${l.value.length + 1}`,
        label: "新字段",
        type: m.value,
        required: !1,
        order: l.value.length
      };
      l.value.push(h), e("add", h), e("update:fields", l.value);
    }, D = (h) => {
      const v = l.value.findIndex(($) => $.id === h);
      v !== -1 && (l.value[v], l.value.splice(v, 1), e("remove", h), e("update:fields", l.value));
    }, z = (h) => {
      const v = l.value.findIndex(($) => $.id === h);
      if (v > 0) {
        const $ = l.value[v];
        l.value[v] = l.value[v - 1], l.value[v - 1] = $, y(), e("sort", l.value), e("update:fields", l.value);
      }
    }, O = (h) => {
      const v = l.value.findIndex(($) => $.id === h);
      if (v < l.value.length - 1) {
        const $ = l.value[v];
        l.value[v] = l.value[v + 1], l.value[v + 1] = $, y(), e("sort", l.value), e("update:fields", l.value);
      }
    }, y = () => {
      l.value.forEach((h, v) => {
        h.order = v;
      });
    }, B = (h) => {
      c.value = { ...h };
    }, P = () => {
      if (c.value) {
        const h = l.value.findIndex((v) => v.id === c.value.id);
        h !== -1 && (l.value[h] = c.value, e("update", c.value.id, c.value), e("update:fields", l.value)), c.value = null;
      }
    }, F = () => {
      c.value = null;
    }, V = (h) => {
      const v = a.availableTypes.find(($) => $.value === h);
      return (v == null ? void 0 : v.label) || h;
    };
    return (h, v) => (o(), d("div", {
      class: u(b.value)
    }, [
      s.editable && T.value ? (o(), d("div", {
        key: 0,
        class: u(n(t).e("add"))
      }, [
        ie(r("select", {
          "onUpdate:modelValue": v[0] || (v[0] = ($) => m.value = $),
          class: u(n(t).e("type-select"))
        }, [
          (o(!0), d(J, null, _(s.availableTypes, ($) => (o(), d("option", {
            key: $.value,
            value: $.value
          }, N($.label), 9, Va))), 128))
        ], 2), [
          [Ce, m.value]
        ]),
        r("button", {
          class: u(n(t).e("add-btn")),
          onClick: C
        }, " + 添加字段 ", 2)
      ], 2)) : U("", !0),
      r("div", {
        class: u(n(t).e("list"))
      }, [
        (o(!0), d(J, null, _(l.value, ($) => (o(), d("div", {
          key: $.id,
          class: u(n(t).e("item"))
        }, [
          r("div", {
            class: u(n(t).e("info"))
          }, [
            r("span", xa, N(V($.type)), 1),
            r("span", wa, N($.name), 1),
            r("span", Ca, N($.label), 1),
            $.required ? (o(), d("span", $a, "必填")) : U("", !0)
          ], 2),
          s.editable ? (o(), d("div", {
            key: 0,
            class: u(n(t).e("actions"))
          }, [
            s.showSort ? (o(), d("button", {
              key: 0,
              class: "action-btn",
              title: "上移",
              onClick: (H) => z($.id)
            }, [
              Q(n(ee), {
                name: "move-up",
                size: 14
              })
            ], 8, Da)) : U("", !0),
            s.showSort ? (o(), d("button", {
              key: 1,
              class: "action-btn",
              title: "下移",
              onClick: (H) => O($.id)
            }, [
              Q(n(ee), {
                name: "move-down",
                size: 14
              })
            ], 8, Sa)) : U("", !0),
            r("button", {
              class: "action-btn",
              title: "编辑",
              onClick: (H) => B($)
            }, [
              Q(n(ee), {
                name: "edit",
                size: 14
              })
            ], 8, za),
            r("button", {
              class: "action-btn action-btn--danger",
              title: "删除",
              onClick: (H) => D($.id)
            }, [
              Q(n(ee), {
                name: "close",
                size: 14
              })
            ], 8, Ta)
          ], 2)) : U("", !0)
        ], 2))), 128))
      ], 2),
      l.value.length === 0 ? (o(), d("div", {
        key: 1,
        class: u(n(t).e("empty"))
      }, [...v[6] || (v[6] = [
        r("span", null, "暂无字段配置", -1)
      ])], 2)) : U("", !0),
      c.value ? (o(), d("div", {
        key: 2,
        class: u(n(t).e("edit-modal"))
      }, [
        r("div", Ha, [
          r("div", La, [
            v[7] || (v[7] = r("span", null, "编辑字段", -1)),
            r("button", {
              class: "close-btn",
              onClick: F
            }, [
              Q(n(ee), {
                name: "close",
                size: 16
              })
            ])
          ]),
          r("div", Ra, [
            r("div", Ba, [
              v[8] || (v[8] = r("label", null, "字段名称", -1)),
              ie(r("input", {
                "onUpdate:modelValue": v[1] || (v[1] = ($) => c.value.name = $),
                type: "text",
                placeholder: "变量名称"
              }, null, 512), [
                [Ve, c.value.name]
              ])
            ]),
            r("div", Aa, [
              v[9] || (v[9] = r("label", null, "字段标签", -1)),
              ie(r("input", {
                "onUpdate:modelValue": v[2] || (v[2] = ($) => c.value.label = $),
                type: "text",
                placeholder: "显示标签"
              }, null, 512), [
                [Ve, c.value.label]
              ])
            ]),
            r("div", Fa, [
              v[10] || (v[10] = r("label", null, "字段类型", -1)),
              ie(r("select", {
                "onUpdate:modelValue": v[3] || (v[3] = ($) => c.value.type = $)
              }, [
                (o(!0), d(J, null, _(s.availableTypes, ($) => (o(), d("option", {
                  key: $.value,
                  value: $.value
                }, N($.label), 9, Ia))), 128))
              ], 512), [
                [Ce, c.value.type]
              ])
            ]),
            r("div", Pa, [
              v[11] || (v[11] = r("label", null, "是否必填", -1)),
              r("button", {
                class: u(["switch-btn", { "is-on": c.value.required }]),
                onClick: v[4] || (v[4] = ($) => c.value.required = !c.value.required)
              }, N(c.value.required ? "必填" : "可选"), 3)
            ]),
            r("div", Ea, [
              v[12] || (v[12] = r("label", null, "占位文本", -1)),
              ie(r("input", {
                "onUpdate:modelValue": v[5] || (v[5] = ($) => c.value.placeholder = $),
                type: "text",
                placeholder: "输入提示"
              }, null, 512), [
                [Ve, c.value.placeholder]
              ])
            ])
          ]),
          r("div", { class: "modal-footer" }, [
            r("button", {
              class: "cancel-btn",
              onClick: F
            }, "取消"),
            r("button", {
              class: "save-btn",
              onClick: P
            }, "保存")
          ])
        ])
      ], 2)) : U("", !0)
    ], 2));
  }
}), yt = /* @__PURE__ */ le({
  name: "XRichEditor",
  __name: "index",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "请输入内容..." },
    disabled: { type: Boolean, default: !1 },
    height: { default: 300 },
    toolbar: { type: [Array, Boolean], default: !0 },
    mode: { default: "default" },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(s, { expose: k, emit: a }) {
    const e = s, t = a, l = Ue(
      () => import("./index.esm-C9sEwyHF.mjs").then((v) => v.Editor)
    ), c = Ue(
      () => import("./index.esm-C9sEwyHF.mjs").then((v) => v.Toolbar)
    ), m = Je(), b = A(e.modelValue), T = A(!1);
    ge(() => {
      T.value = !0;
    }), oe(
      () => e.modelValue,
      (v) => {
        v !== b.value && (b.value = v);
      }
    );
    const S = M(() => ({ height: typeof e.height == "number" ? `${e.height}px` : e.height })), C = M(() => {
      const v = {
        excludeKeys: []
      };
      if (Array.isArray(e.toolbar)) {
        const $ = [
          "headerSelect",
          "header1",
          "header2",
          "header3",
          "header4",
          "header5",
          "blockquote",
          "bold",
          "underline",
          "italic",
          "through",
          "code",
          "sub",
          "sup",
          "clearStyle",
          "color",
          "bgColor",
          "fontSize",
          "fontFamily",
          "indent",
          "delIndent",
          "justifyLeft",
          "justifyRight",
          "justifyCenter",
          "justifyJustify",
          "lineHeight",
          "insertImage",
          "deleteImage",
          "editImage",
          "viewImageLink",
          "imageWidth30",
          "imageWidth50",
          "imageWidth100",
          "divider",
          "emotion",
          "insertLink",
          "editLink",
          "unLink",
          "viewLink",
          "insertVideo",
          "uploadVideo",
          "codeBlock",
          "insertTable",
          "deleteTable",
          "insertTableRow",
          "deleteTableRow",
          "insertTableCol",
          "deleteTableCol",
          "tableHeader",
          "tableFullWidth",
          "undo",
          "redo",
          "fullScreen"
        ], H = e.toolbar;
        v.excludeKeys = $.filter((R) => !H.includes(R));
      }
      return v;
    }), D = M(() => ({
      placeholder: e.placeholder,
      readOnly: e.disabled,
      autoFocus: e.autoFocus,
      MENU_CONF: {
        // 上传图片配置
        uploadImage: {
          // 自定义上传
          async customUpload(v, $) {
            const H = URL.createObjectURL(v);
            $(H, v.name, H);
          }
        },
        // 上传视频配置
        uploadVideo: {
          async customUpload(v, $) {
            const H = URL.createObjectURL(v);
            $(H, "");
          }
        }
      }
    })), z = (v) => {
      m.value = v;
    }, O = (v) => {
      const $ = v.getHtml();
      b.value = $, t("update:modelValue", $), t("change", $);
    }, y = (v) => {
      t("focus", v);
    }, B = (v) => {
      t("blur", v);
    };
    return k({
      getEditor: () => m.value,
      getText: () => {
        var v;
        return ((v = m.value) == null ? void 0 : v.getText()) || "";
      },
      setHtml: (v) => {
        b.value = v;
      },
      clear: () => {
        var v;
        b.value = "", (v = m.value) == null || v.clear();
      }
    }), Ze(() => {
      const v = m.value;
      v && v.destroy();
    }), (v, $) => (o(), d("div", {
      class: u(["x-rich-editor", { "is-disabled": s.disabled }])
    }, [
      T.value ? (o(), d(J, { key: 0 }, [
        s.toolbar !== !1 ? (o(), fe(n(c), {
          key: 0,
          editor: m.value,
          "default-config": C.value,
          mode: s.mode,
          class: "x-rich-editor__toolbar"
        }, null, 8, ["editor", "default-config", "mode"])) : U("", !0),
        Q(n(l), {
          modelValue: b.value,
          "onUpdate:modelValue": $[0] || ($[0] = (H) => b.value = H),
          "default-config": D.value,
          mode: s.mode,
          style: te(S.value),
          class: "x-rich-editor__content",
          onOnCreated: z,
          onOnChange: O,
          onOnFocus: y,
          onOnBlur: B
        }, null, 8, ["modelValue", "default-config", "mode", "style"])
      ], 64)) : (o(), d("div", {
        key: 1,
        style: te(S.value),
        class: "x-rich-editor__placeholder"
      }, N(s.placeholder), 5))
    ], 2));
  }
}), Oa = ["value", "placeholder"], Ya = ["onClick"], Na = ["onClick"], Ua = ["checked", "onChange"], kt = /* @__PURE__ */ le({
  name: "XCascader",
  __name: "index",
  props: {
    modelValue: { default: "" },
    options: { default: () => [] },
    placeholder: { default: "请选择" },
    disabled: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    showAllLevels: { type: Boolean, default: !0 },
    filterable: { type: Boolean, default: !1 },
    props: { default: () => ({}) },
    size: { default: "default" },
    separator: { default: " / " }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("cascader"), l = A(!1), c = A([]), m = A([]);
    A("");
    const b = A(""), T = A();
    M(() => ({
      value: a.props.value || "value",
      label: a.props.label || "label",
      children: a.props.children || "children",
      disabled: a.props.disabled || "disabled"
    }));
    const S = M(() => a.props.multiple), C = M(() => a.props.checkStrictly), D = M(() => {
      if (S.value)
        return m.value.length === 0 ? "" : m.value.map((x) => y(x)).join(", ");
      if (c.value.length === 0) return "";
      if (a.showAllLevels)
        return c.value.map((x) => B(x, c.value)).join(a.separator);
      const p = c.value[c.value.length - 1];
      return B(p, c.value);
    }), z = M(() => {
      var x;
      const p = [a.options];
      if (c.value.length > 0) {
        let w = a.options;
        for (const i of c.value) {
          const f = w.find((g) => g.value === i);
          if ((x = f == null ? void 0 : f.children) != null && x.length)
            p.push(f.children), w = f.children;
          else
            break;
        }
      }
      return p;
    }), O = M(() => {
      if (!a.filterable || !b.value) return null;
      const p = [], x = (w, i = []) => {
        var f;
        for (const g of w) {
          const K = [...i, g];
          g.label.toLowerCase().includes(b.value.toLowerCase()) && p.push({
            path: K,
            label: K.map((ne) => ne.label).join(a.separator)
          }), (f = g.children) != null && f.length && x(g.children, K);
        }
      };
      return x(a.options), p;
    }), y = (p) => p.map((x, w) => B(x, p.slice(0, w + 1))).join(a.separator), B = (p, x) => {
      let w = a.options;
      for (let f = 0; f < x.length - 1; f++) {
        const g = w.find((K) => K.value === x[f]);
        g != null && g.children && (w = g.children);
      }
      const i = w.find((f) => f.value === p);
      return (i == null ? void 0 : i.label) || String(p);
    }, P = (p, x) => {
      var i;
      if (p.disabled) return;
      const w = c.value.slice(0, x);
      w.push(p.value), c.value = w, (!((i = p.children) != null && i.length) || C.value) && (S.value || (l.value = !1, v(w)));
    }, F = (p, x, w) => {
      const i = [...c.value.slice(0, x), p.value];
      w ? m.value.some((f) => JSON.stringify(f) === JSON.stringify(i)) || m.value.push(i) : m.value = m.value.filter((f) => JSON.stringify(f) !== JSON.stringify(i)), $();
    }, V = (p, x) => {
      const w = [...c.value.slice(0, x), p.value];
      return m.value.some((i) => JSON.stringify(i) === JSON.stringify(w));
    }, h = (p, x) => c.value[x] === p.value, v = (p) => {
      const x = a.props.emitPath !== !1 ? p : p[p.length - 1];
      e("update:modelValue", x), e("change", x);
    }, $ = () => {
      const p = a.props.emitPath !== !1 ? m.value : m.value.map((x) => x[x.length - 1]);
      e("update:modelValue", p), e("change", p);
    }, H = () => {
      c.value = [], m.value = [], e("update:modelValue", S.value ? [] : ""), e("change", S.value ? [] : "");
    }, R = (p) => {
      b.value = p.target.value;
    }, Y = (p) => {
      c.value = p.map((x) => x.value), b.value = "", l.value = !1, v(c.value);
    }, j = (p) => {
      p.target.closest(`.${t.b()}`) || (l.value = !1);
    };
    return oe(l, (p) => {
      p ? document.addEventListener("click", j) : (document.removeEventListener("click", j), b.value = "");
    }), oe(() => a.modelValue, (p) => {
      S.value ? m.value = Array.isArray(p) ? p : [] : Array.isArray(p) ? c.value = p : p !== "" && p !== null && p !== void 0 ? c.value = [p] : c.value = [];
    }, { immediate: !0 }), (p, x) => (o(), d("div", {
      class: u([n(t).b(), n(t).m(s.size), n(t).is("disabled", s.disabled)]),
      onClick: x[2] || (x[2] = se(() => {
      }, ["stop"]))
    }, [
      r("div", {
        class: u([n(t).e("input"), n(t).is("focus", l.value)]),
        onClick: x[0] || (x[0] = (w) => !s.disabled && (l.value = !0))
      }, [
        s.filterable && l.value ? (o(), d("input", {
          key: 0,
          value: b.value,
          placeholder: D.value || s.placeholder,
          class: u(n(t).e("filter-input")),
          onInput: R
        }, null, 42, Oa)) : (o(), d("span", {
          key: 1,
          class: u(n(t).e("text"))
        }, [
          D.value ? (o(), d(J, { key: 0 }, [
            de(N(D.value), 1)
          ], 64)) : (o(), d("span", {
            key: 1,
            class: u(n(t).e("placeholder"))
          }, N(s.placeholder), 3))
        ], 2)),
        s.clearable && D.value ? (o(), d("span", {
          key: 2,
          class: u(n(t).e("clear")),
          onClick: se(H, ["stop"])
        }, [
          Q(n(ee), {
            name: "close-circle",
            size: 14
          })
        ], 2)) : U("", !0),
        r("span", {
          class: u(n(t).e("arrow"))
        }, [
          Q(n(ee), {
            name: "down",
            size: 12
          })
        ], 2)
      ], 2),
      ie(r("div", {
        class: u(n(t).e("dropdown"))
      }, [
        O.value ? (o(), d("div", {
          key: 0,
          class: u(n(t).e("filter-list"))
        }, [
          (o(!0), d(J, null, _(O.value, (w, i) => (o(), d("div", {
            key: i,
            class: u(n(t).e("filter-item")),
            onClick: (f) => Y(w.path)
          }, N(w.label), 11, Ya))), 128)),
          O.value.length === 0 ? (o(), d("div", {
            key: 0,
            class: u(n(t).e("empty"))
          }, " 无匹配数据 ", 2)) : U("", !0)
        ], 2)) : (o(), d("div", {
          key: 1,
          class: u(n(t).e("menu")),
          ref_key: "menuRef",
          ref: T
        }, [
          (o(!0), d(J, null, _(z.value, (w, i) => (o(), d("div", {
            key: i,
            class: u(n(t).e("column"))
          }, [
            (o(!0), d(J, null, _(w, (f) => {
              var g;
              return o(), d("div", {
                key: f.value,
                class: u([
                  n(t).e("option"),
                  n(t).is("active", h(f, i)),
                  n(t).is("disabled", f.disabled)
                ]),
                onClick: (K) => P(f, i)
              }, [
                S.value ? (o(), d("span", {
                  key: 0,
                  class: u(n(t).e("checkbox")),
                  onClick: x[1] || (x[1] = se(() => {
                  }, ["stop"]))
                }, [
                  r("input", {
                    type: "checkbox",
                    checked: V(f, i),
                    onChange: (K) => F(f, i, K.target.checked)
                  }, null, 40, Ua)
                ], 2)) : U("", !0),
                r("span", {
                  class: u(n(t).e("label"))
                }, N(f.label), 3),
                (g = f.children) != null && g.length ? (o(), d("span", {
                  key: 1,
                  class: u(n(t).e("option-arrow"))
                }, [
                  Q(n(ee), {
                    name: "right",
                    size: 12
                  })
                ], 2)) : U("", !0)
              ], 10, Na);
            }), 128))
          ], 2))), 128))
        ], 2))
      ], 2), [
        [be, l.value]
      ])
    ], 2));
  }
}), Ka = ["onClick"], Mt = /* @__PURE__ */ le({
  name: "XColorPicker",
  __name: "index",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 },
    showAlpha: { type: Boolean, default: !1 },
    predefine: { default: () => [] },
    size: { default: "default" }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("color-picker"), l = A(!1), c = A(0), m = A(100), b = A(100), T = A(100), S = A(), C = A(), D = M(() => y(c.value, m.value, b.value)), z = M(() => a.showAlpha ? `${D.value}${Math.round(T.value * 2.55).toString(16).padStart(2, "0")}` : D.value), O = M(() => a.modelValue || D.value), y = (R, Y, j) => {
      Y /= 100, j /= 100;
      const p = j * Y, x = p * (1 - Math.abs(R / 60 % 2 - 1)), w = j - p;
      let i = 0, f = 0, g = 0;
      R >= 0 && R < 60 ? (i = p, f = x, g = 0) : R >= 60 && R < 120 ? (i = x, f = p, g = 0) : R >= 120 && R < 180 ? (i = 0, f = p, g = x) : R >= 180 && R < 240 ? (i = 0, f = x, g = p) : R >= 240 && R < 300 ? (i = x, f = 0, g = p) : (i = p, f = 0, g = x);
      const K = (ne) => Math.round((ne + w) * 255).toString(16).padStart(2, "0");
      return `#${K(i)}${K(f)}${K(g)}`;
    }, B = (R) => {
      R = R.replace("#", "");
      const Y = parseInt(R.slice(0, 2), 16) / 255, j = parseInt(R.slice(2, 4), 16) / 255, p = parseInt(R.slice(4, 6), 16) / 255, x = Math.max(Y, j, p), w = Math.min(Y, j, p), i = x - w;
      let f = 0;
      const g = x === 0 ? 0 : i / x, K = x;
      if (i !== 0)
        switch (x) {
          case Y:
            f = ((j - p) / i + (j < p ? 6 : 0)) * 60;
            break;
          case j:
            f = ((p - Y) / i + 2) * 60;
            break;
          case p:
            f = ((Y - j) / i + 4) * 60;
            break;
        }
      return { h: f, s: g * 100, v: K * 100 };
    }, P = (R) => {
      if (!S.value) return;
      const Y = S.value.getBoundingClientRect(), j = Math.max(0, Math.min(1, (R.clientX - Y.left) / Y.width)), p = Math.max(0, Math.min(1, (R.clientY - Y.top) / Y.height));
      m.value = Math.round(j * 100), b.value = Math.round((1 - p) * 100);
    }, F = (R) => {
      if (!C.value) return;
      const Y = C.value.getBoundingClientRect(), j = Math.max(0, Math.min(1, (R.clientX - Y.left) / Y.width));
      c.value = Math.round(j * 360);
    }, V = (R) => {
      if (!C.value) return;
      const Y = C.value.getBoundingClientRect(), j = Math.max(0, Math.min(1, (R.clientX - Y.left) / Y.width));
      T.value = Math.round(j * 100);
    }, h = (R) => {
      const Y = B(R);
      c.value = Y.h, m.value = Y.s, b.value = Y.v, e("update:modelValue", R), e("change", R);
    }, v = () => {
      e("update:modelValue", z.value), e("change", z.value), l.value = !1;
    }, $ = () => {
      e("update:modelValue", ""), e("change", ""), l.value = !1;
    }, H = (R) => {
      R.target.closest(`.${t.b()}`) || (l.value = !1);
    };
    return oe(l, (R) => {
      if (R) {
        if (document.addEventListener("click", H), a.modelValue) {
          const Y = B(a.modelValue.slice(0, 7));
          c.value = Y.h, m.value = Y.s, b.value = Y.v, a.showAlpha && a.modelValue.length === 9 && (T.value = Math.round(parseInt(a.modelValue.slice(7, 9), 16) / 2.55));
        }
      } else
        document.removeEventListener("click", H);
    }), (R, Y) => (o(), d("div", {
      class: u([n(t).b(), n(t).m(s.size), n(t).is("disabled", s.disabled)]),
      onClick: Y[1] || (Y[1] = se(() => {
      }, ["stop"]))
    }, [
      r("div", {
        class: u(n(t).e("trigger")),
        onClick: Y[0] || (Y[0] = (j) => !s.disabled && (l.value = !l.value))
      }, [
        r("div", {
          class: u(n(t).e("color")),
          style: te({ backgroundColor: O.value })
        }, [
          O.value ? U("", !0) : (o(), fe(n(ee), {
            key: 0,
            name: "close",
            size: 12
          }))
        ], 6)
      ], 2),
      ie(r("div", {
        class: u(n(t).e("dropdown"))
      }, [
        r("div", {
          ref_key: "panelRef",
          ref: S,
          class: u(n(t).e("panel")),
          style: te({
            backgroundColor: `hsl(${c.value}, 100%, 50%)`
          }),
          onClick: P
        }, [
          r("div", {
            class: u(n(t).e("panel-white"))
          }, null, 2),
          r("div", {
            class: u(n(t).e("panel-black"))
          }, null, 2),
          r("div", {
            class: u(n(t).e("cursor")),
            style: te({
              left: `${m.value}%`,
              top: `${100 - b.value}%`
            })
          }, null, 6)
        ], 6),
        r("div", {
          class: u(n(t).e("hue"))
        }, [
          r("div", {
            ref_key: "sliderRef",
            ref: C,
            class: u(n(t).e("hue-bar")),
            onClick: F
          }, [
            r("div", {
              class: u(n(t).e("hue-thumb")),
              style: te({ left: `${c.value / 360 * 100}%` })
            }, null, 6)
          ], 2)
        ], 2),
        s.showAlpha ? (o(), d("div", {
          key: 0,
          class: u(n(t).e("alpha"))
        }, [
          r("div", {
            class: u(n(t).e("alpha-bar")),
            style: te({
              background: `linear-gradient(to right, transparent, ${D.value})`
            }),
            onClick: V
          }, [
            r("div", {
              class: u(n(t).e("alpha-thumb")),
              style: te({ left: `${T.value}%` })
            }, null, 6)
          ], 6)
        ], 2)) : U("", !0),
        s.predefine.length ? (o(), d("div", {
          key: 1,
          class: u(n(t).e("predefine"))
        }, [
          (o(!0), d(J, null, _(s.predefine, (j, p) => (o(), d("div", {
            key: p,
            class: u(n(t).e("predefine-item")),
            style: te({ backgroundColor: j }),
            onClick: (x) => h(j)
          }, null, 14, Ka))), 128))
        ], 2)) : U("", !0),
        r("div", {
          class: u(n(t).e("actions"))
        }, [
          r("span", {
            class: u(n(t).e("value"))
          }, N(z.value), 3),
          r("div", {
            class: u(n(t).e("btns"))
          }, [
            r("button", {
              class: u(n(t).e("btn")),
              onClick: $
            }, "清空", 2),
            r("button", {
              class: u([n(t).e("btn"), n(t).e("btn--primary")]),
              onClick: v
            }, "确定", 2)
          ], 2)
        ], 2)
      ], 2), [
        [be, l.value]
      ])
    ], 2));
  }
}), Xa = ["value", "placeholder", "disabled"], Wa = ["onClick"], Vt = /* @__PURE__ */ le({
  name: "XAutoComplete",
  __name: "index",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "请输入" },
    disabled: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    fetchSuggestions: {},
    suggestions: { default: () => [] },
    valueKey: { default: "value" },
    triggerOnFocus: { type: Boolean, default: !0 },
    debounce: { default: 300 },
    size: { default: "default" }
  },
  emits: ["update:modelValue", "select", "clear"],
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("auto-complete"), l = A(!1), c = A(a.modelValue), m = A([]), b = A(-1), T = A(), S = A(!1);
    let C = null;
    const D = (V) => {
      a.fetchSuggestions ? (S.value = !0, a.fetchSuggestions(V, (h) => {
        m.value = h, S.value = !1, l.value = h.length > 0;
      })) : a.suggestions.length && (m.value = a.suggestions.filter(
        (h) => h[a.valueKey].toLowerCase().includes(V.toLowerCase())
      ), l.value = m.value.length > 0);
    }, z = (V) => {
      const h = V.target.value;
      c.value = h, e("update:modelValue", h), b.value = -1, C && clearTimeout(C), C = setTimeout(() => {
        h || a.triggerOnFocus ? D(h) : l.value = !1;
      }, a.debounce);
    }, O = () => {
      a.triggerOnFocus && c.value === "" && D("");
    }, y = (V) => {
      c.value = V[a.valueKey], e("update:modelValue", c.value), e("select", V), l.value = !1;
    }, B = (V) => {
      if (l.value)
        switch (V.key) {
          case "ArrowDown":
            V.preventDefault(), b.value = Math.min(
              b.value + 1,
              m.value.length - 1
            );
            break;
          case "ArrowUp":
            V.preventDefault(), b.value = Math.max(b.value - 1, 0);
            break;
          case "Enter":
            V.preventDefault(), b.value >= 0 && y(m.value[b.value]);
            break;
          case "Escape":
            l.value = !1;
            break;
        }
    }, P = () => {
      var V;
      c.value = "", e("update:modelValue", ""), e("clear"), l.value = !1, (V = T.value) == null || V.focus();
    }, F = (V) => {
      V.target.closest(`.${t.b()}`) || (l.value = !1);
    };
    return oe(l, (V) => {
      V ? document.addEventListener("click", F) : (document.removeEventListener("click", F), b.value = -1);
    }), oe(() => a.modelValue, (V) => {
      c.value = V;
    }), (V, h) => (o(), d("div", {
      class: u([n(t).b(), n(t).m(s.size)]),
      onClick: h[0] || (h[0] = se(() => {
      }, ["stop"]))
    }, [
      r("div", {
        class: u([n(t).e("input"), n(t).is("focus", l.value)])
      }, [
        r("input", {
          ref_key: "inputRef",
          ref: T,
          value: c.value,
          placeholder: s.placeholder,
          disabled: s.disabled,
          class: u(n(t).e("inner")),
          onInput: z,
          onFocus: O,
          onKeydown: B
        }, null, 42, Xa),
        s.clearable && c.value ? (o(), d("span", {
          key: 0,
          class: u(n(t).e("clear")),
          onClick: P
        }, [
          Q(n(ee), {
            name: "close-circle",
            size: 14
          })
        ], 2)) : U("", !0),
        S.value ? (o(), d("span", {
          key: 1,
          class: u(n(t).e("loading"))
        }, [
          Q(n(ee), {
            name: "loading",
            size: 14
          })
        ], 2)) : U("", !0)
      ], 2),
      ie(r("div", {
        class: u(n(t).e("dropdown"))
      }, [
        r("ul", {
          class: u(n(t).e("list"))
        }, [
          (o(!0), d(J, null, _(m.value, (v, $) => (o(), d("li", {
            key: $,
            class: u([
              n(t).e("item"),
              n(t).is("highlighted", $ === b.value)
            ]),
            onClick: (H) => y(v)
          }, [
            ue(V.$slots, "default", { item: v }, () => [
              de(N(v[s.valueKey]), 1)
            ])
          ], 10, Wa))), 128))
        ], 2)
      ], 2), [
        [be, l.value && m.value.length]
      ])
    ], 2));
  }
}), qa = ["onClick"], xt = /* @__PURE__ */ le({
  name: "XSegmented",
  __name: "index",
  props: {
    modelValue: { default: "" },
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 },
    size: { default: "default" }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("segmented"), l = A(), c = M(() => a.options.map((S) => typeof S == "string" || typeof S == "number" ? { label: String(S), value: S } : S)), m = M(() => c.value.findIndex((S) => S.value === a.modelValue)), b = M(() => {
      if (!l.value || m.value < 0) return {};
      const C = l.value.querySelectorAll(`.${t.e("item")}`)[m.value];
      return C ? {
        width: `${C.offsetWidth}px`,
        transform: `translateX(${C.offsetLeft}px)`
      } : {};
    }), T = (S) => {
      a.disabled || S.disabled || (e("update:modelValue", S.value), e("change", S.value));
    };
    return (S, C) => (o(), d("div", {
      ref_key: "containerRef",
      ref: l,
      class: u([
        n(t).b(),
        n(t).m(s.size),
        n(t).is("disabled", s.disabled),
        n(t).is("block", s.block)
      ])
    }, [
      r("div", {
        class: u(n(t).e("thumb")),
        style: te(b.value)
      }, null, 6),
      (o(!0), d(J, null, _(c.value, (D, z) => (o(), d("div", {
        key: z,
        class: u([
          n(t).e("item"),
          n(t).is("selected", z === m.value),
          n(t).is("disabled", D.disabled)
        ]),
        onClick: (O) => T(D)
      }, [
        ue(S.$slots, "default", { option: D }, () => [
          de(N(D.label), 1)
        ])
      ], 10, qa))), 128))
    ], 2));
  }
}), ja = ["value", "placeholder", "disabled"], Ga = ["onClick"], Ja = ["src"], wt = /* @__PURE__ */ le({
  name: "XMention",
  __name: "index",
  props: {
    modelValue: { default: "" },
    options: { default: () => [] },
    prefix: { default: "@" },
    placeholder: { default: "请输入" },
    disabled: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    split: { default: " " },
    size: { default: "default" }
  },
  emits: ["update:modelValue", "select", "change"],
  setup(s, { emit: k }) {
    const a = s, e = k, t = ae("mention"), l = A(a.modelValue), c = A(!1), m = A([]), b = A(-1), T = A(), S = A(), C = A(0), D = A(-1), z = (V) => {
      m.value = a.options.filter((h) => h.disabled ? !1 : (h.label || h.value).toLowerCase().includes(V.toLowerCase())), c.value = m.value.length > 0, b.value = -1;
    }, O = (V) => {
      const h = V.target;
      l.value = h.value, C.value = h.selectionStart || 0;
      const v = l.value.slice(0, C.value), $ = v.lastIndexOf(a.prefix);
      if ($ >= 0) {
        const H = v.slice($ + a.prefix.length);
        D.value = $, z(H);
      } else
        c.value = !1;
      e("update:modelValue", l.value), e("change", l.value);
    }, y = (V) => {
      const h = l.value.slice(0, D.value), v = l.value.slice(C.value), $ = `${a.prefix}${V.value}${a.split}`;
      l.value = h + $ + v, e("update:modelValue", l.value), e("select", V, a.prefix), e("change", l.value), c.value = !1, Se(() => {
        const H = h.length + $.length;
        T.value && (T.value.setSelectionRange(H, H), T.value.focus()), S.value && (S.value.setSelectionRange(H, H), S.value.focus());
      });
    }, B = (V) => {
      if (c.value)
        switch (V.key) {
          case "ArrowDown":
            V.preventDefault(), b.value = Math.min(
              b.value + 1,
              m.value.length - 1
            );
            break;
          case "ArrowUp":
            V.preventDefault(), b.value = Math.max(b.value - 1, 0);
            break;
          case "Enter":
            V.preventDefault(), b.value >= 0 && y(m.value[b.value]);
            break;
          case "Escape":
            c.value = !1;
            break;
        }
    }, P = () => {
      l.value = "", e("update:modelValue", ""), e("change", "");
    }, F = (V) => {
      V.target.closest(`.${t.b()}`) || (c.value = !1);
    };
    return oe(c, (V) => {
      V ? document.addEventListener("click", F) : document.removeEventListener("click", F);
    }), oe(() => a.modelValue, (V) => {
      l.value = V;
    }), (V, h) => (o(), d("div", {
      class: u([n(t).b(), n(t).m(s.size)]),
      onClick: h[0] || (h[0] = se(() => {
      }, ["stop"]))
    }, [
      r("div", {
        class: u([n(t).e("input"), n(t).is("focus", c.value)])
      }, [
        r("input", {
          ref_key: "inputRef",
          ref: T,
          value: l.value,
          placeholder: s.placeholder,
          disabled: s.disabled,
          class: u(n(t).e("inner")),
          onInput: O,
          onKeydown: B
        }, null, 42, ja),
        s.clearable && l.value ? (o(), d("span", {
          key: 0,
          class: u(n(t).e("clear")),
          onClick: P
        }, [
          Q(n(ee), {
            name: "close-circle",
            size: 14
          })
        ], 2)) : U("", !0)
      ], 2),
      ie(r("div", {
        class: u(n(t).e("dropdown"))
      }, [
        r("ul", {
          class: u(n(t).e("list"))
        }, [
          (o(!0), d(J, null, _(m.value, (v, $) => (o(), d("li", {
            key: v.value,
            class: u([
              n(t).e("item"),
              n(t).is("highlighted", $ === b.value),
              n(t).is("disabled", v.disabled)
            ]),
            onClick: (H) => y(v)
          }, [
            v.avatar ? (o(), d("img", {
              key: 0,
              src: v.avatar,
              class: u(n(t).e("avatar"))
            }, null, 10, Ja)) : U("", !0),
            r("span", {
              class: u(n(t).e("label"))
            }, N(v.label || v.value), 3),
            r("span", {
              class: u(n(t).e("value"))
            }, N(v.value), 3)
          ], 10, Ga))), 128))
        ], 2)
      ], 2), [
        [be, c.value]
      ])
    ], 2));
  }
});
export {
  Vt as AutoComplete,
  kt as Cascader,
  ut as Checkbox,
  ot as CheckboxGroup,
  Mt as ColorPicker,
  dt as DatePicker,
  bt as DynamicFields,
  it as Form,
  rt as FormItem,
  _a as Input,
  et as InputNumber,
  wt as Mention,
  tt as Radio,
  st as RadioButton,
  nt as RadioGroup,
  gt as Rate,
  yt as RichEditor,
  xt as Segmented,
  vt as Select,
  ft as SelectOption,
  ht as Slider,
  at as Switch,
  lt as Textarea,
  ct as TimePicker,
  mt as Transfer,
  pt as Upload
};
