import { z as t } from "zod";
const U = {
  id: "",
  name: "",
  version: "1.0.0",
  layout: {
    type: "grid",
    columns: 12,
    gap: 16
  },
  components: []
}, K = {
  id: "",
  name: "",
  version: "1.0.0",
  fields: [],
  layout: {
    labelWidth: "100px",
    labelPosition: "right",
    inline: !1,
    size: "default"
  }
}, M = {
  id: "",
  name: "",
  version: "1.0.0",
  nodes: [],
  edges: [],
  variables: []
}, Q = {
  start: { params: [] },
  llm: { model: "gpt-4", prompt: "", temperature: 0.7 },
  end: { outputs: [] },
  condition: { conditions: [] },
  loop: { loopType: "array", arrayVar: "", count: 0 },
  tool: { toolName: "", params: {} },
  http: { url: "", method: "GET", headers: {} },
  script: { code: "" }
}, f = t.object({
  x: t.number(),
  y: t.number()
}), x = t.object({
  width: t.number(),
  height: t.number()
}), $ = f.merge(x), S = t.object({
  type: t.enum(["grid", "flex", "absolute"]),
  columns: t.number().optional(),
  gap: t.number().optional(),
  direction: t.enum(["row", "column"]).optional()
}), d = t.object({
  type: t.enum(["field", "expression"]),
  field: t.string().optional(),
  operator: t.enum(["eq", "ne", "gt", "lt", "gte", "lte", "contains", "empty"]).optional(),
  value: t.any().optional(),
  expression: t.string().optional()
}), j = t.object({
  field: t.string(),
  source: t.enum(["api", "state", "props"]),
  path: t.string().optional()
}), v = t.object({
  event: t.string(),
  action: t.enum(["emit", "call", "navigate"]),
  handler: t.string().optional(),
  params: t.record(t.any()).optional()
}), b = t.object({
  id: t.string(),
  type: t.string(),
  props: t.record(t.any()),
  children: t.lazy(() => t.array(b)).optional(),
  position: $,
  bindings: t.array(j).optional(),
  events: t.array(v).optional()
}), T = t.object({
  id: t.string(),
  name: t.string().min(1, "页面名称不能为空"),
  description: t.string().optional(),
  version: t.string(),
  layout: S,
  components: t.array(b),
  globalStyles: t.record(t.any()).optional(),
  state: t.record(t.any()).optional(),
  lifecycle: t.object({
    onLoad: t.string().optional(),
    onReady: t.string().optional(),
    onUnload: t.string().optional()
  }).optional()
}), C = t.enum([
  "input",
  "select",
  "date",
  "number",
  "textarea",
  "checkbox",
  "radio",
  "switch",
  "upload",
  "time",
  "slider",
  "rate",
  "transfer"
]), F = t.object({
  type: t.enum(["required", "min", "max", "pattern", "custom"]),
  value: t.any().optional(),
  message: t.string().optional(),
  trigger: t.enum(["blur", "change"]).optional()
}), N = t.object({
  name: t.string().min(1, "字段名称不能为空"),
  label: t.string().min(1, "字段标签不能为空"),
  type: C,
  props: t.record(t.any()).optional(),
  rules: t.array(F).optional(),
  defaultValue: t.any().optional(),
  visible: d.optional(),
  disabled: d.optional(),
  placeholder: t.string().optional(),
  tooltip: t.string().optional(),
  span: t.number().optional(),
  order: t.number().optional()
}), w = t.object({
  id: t.string(),
  name: t.string().min(1, "表单名称不能为空"),
  description: t.string().optional(),
  version: t.string(),
  fields: t.array(N).min(1, "表单必须至少有一个字段"),
  layout: t.object({
    labelWidth: t.union([t.string(), t.number()]).optional(),
    labelPosition: t.enum(["left", "right", "top"]).optional(),
    inline: t.boolean().optional(),
    size: t.enum(["small", "default", "large"]).optional()
  }).optional(),
  actions: t.array(t.object({
    type: t.enum(["submit", "reset", "cancel", "custom"]),
    label: t.string().optional(),
    handler: t.string().optional(),
    position: t.enum(["left", "center", "right"]).optional(),
    props: t.record(t.any()).optional()
  })).optional()
}), P = t.enum(["start", "llm", "end", "condition", "loop", "tool", "http", "script"]), g = t.object({
  name: t.string(),
  dataType: t.string().optional(),
  required: t.boolean().optional()
}), X = t.object({
  label: t.string(),
  description: t.string().optional(),
  config: t.record(t.any()),
  inputs: t.array(g).optional(),
  outputs: t.array(g).optional()
}), k = t.object({
  id: t.string(),
  type: P,
  position: f,
  data: X
}), D = t.object({
  id: t.string(),
  source: t.string(),
  target: t.string(),
  sourceHandle: t.string().optional(),
  targetHandle: t.string().optional(),
  label: t.string().optional(),
  animated: t.boolean().optional()
}), E = t.object({
  name: t.string(),
  type: t.enum(["string", "number", "boolean", "object", "array"]),
  defaultValue: t.any().optional(),
  description: t.string().optional(),
  scope: t.enum(["global", "local"])
}), O = t.object({
  id: t.string(),
  name: t.string().min(1, "流程名称不能为空"),
  description: t.string().optional(),
  version: t.string(),
  nodes: t.array(k).min(1, "流程必须至少有一个节点"),
  edges: t.array(D),
  variables: t.array(E),
  triggers: t.array(t.object({
    type: t.enum(["manual", "api", "schedule", "event"]),
    config: t.record(t.any()).optional()
  })).optional()
});
function Y(e) {
  return T.safeParse(e);
}
function _(e) {
  return w.safeParse(e);
}
function tt(e) {
  return O.safeParse(e);
}
const W = {
  input: "xto-input",
  select: "xto-select",
  date: "xto-date-picker",
  number: "xto-input-number",
  textarea: "xto-textarea",
  checkbox: "xto-checkbox",
  radio: "xto-radio-group",
  switch: "xto-switch",
  upload: "xto-upload",
  time: "xto-time-picker",
  slider: "xto-slider",
  rate: "xto-rate",
  transfer: "xto-transfer"
}, y = {
  "xto-form": "XtoForm",
  "xto-form-item": "XtoFormItem",
  "xto-input": "XtoInput",
  "xto-select": "XtoSelect",
  "xto-table": "XtoTable",
  "xto-table-column": "XtoTableColumn",
  "xto-pagination": "XtoPagination",
  "xto-card": "XtoCard",
  "xto-button": "XtoButton",
  "xto-container": "XtoContainer"
};
function m(e, a, n = "") {
  return `<template>
${e}
</template>

<script setup lang="ts">
${a}
<\/script>

${n ? `<style scoped>
${n}
</style>` : ""}`;
}
function et(e) {
  const a = z(e), n = H(e), o = I(e);
  return m(a, n, o);
}
function z(e) {
  const a = e.components.map((n) => h(n, 2)).join(`
`);
  return `  <div class="page-${e.name}">
${a}
  </div>`;
}
function h(e, a) {
  const n = "  ".repeat(a), o = y[e.type] || e.type, i = u(e.props);
  if (e.children && e.children.length > 0) {
    const r = e.children.map(
      (s) => h(s, a + 1)
    ).join(`
`);
    return `${n}<${o}${i}>
${r}
${n}</${o}>`;
  }
  return `${n}<${o}${i} />`;
}
function u(e) {
  if (!e || Object.keys(e).length === 0) return "";
  const a = Object.entries(e).map(([n, o]) => typeof o == "string" ? `${n}="${o}"` : typeof o == "boolean" ? o ? n : "" : `:${n}="${JSON.stringify(o)}"`).filter(Boolean);
  return a.length > 0 ? " " + a.join(" ") : "";
}
function H(e) {
  const a = V(e), n = e.state ? `const state = reactive(${JSON.stringify(e.state, null, 2)})` : "";
  return `${a}

${n || "const formData = reactive({})"}
`;
}
function V(e) {
  const a = /* @__PURE__ */ new Set();
  function n(l) {
    l.forEach((p) => {
      a.add(p.type), p.children && n(p.children);
    });
  }
  n(e.components);
  const o = [], i = [], r = [], s = [];
  a.forEach((l) => {
    const p = y[l];
    l.startsWith("xto-form") || l.startsWith("xto-input") || l.startsWith("xto-select") ? o.push(p) : l.startsWith("xto-table") || l.startsWith("xto-pagination") ? i.push(p) : l.startsWith("xto-card") || l.startsWith("xto-container") ? r.push(p) : s.push(p);
  });
  const c = [];
  return o.length > 0 && c.push(`import { ${o.join(", ")} } from '@xto/form'`), i.length > 0 && c.push(`import { ${i.join(", ")} } from '@xto/data'`), r.length > 0 && c.push(`import { ${r.join(", ")} } from '@xto/layout'`), s.length > 0 && c.push(`import { ${s.join(", ")} } from '@xto/base'`), c.push("import { reactive } from 'vue'"), c.join(`
`);
}
function I(e) {
  return e.globalStyles ? `.page-${e.name} {
${Object.entries(e.globalStyles).map(
    ([a, n]) => `  ${a}: ${n};`
  ).join(`
`)}
}` : "";
}
function ot(e) {
  const a = q(e), n = J(e);
  return m(a, n);
}
function q(e) {
  var o, i;
  const a = e.fields.sort((r, s) => (r.order || 0) - (s.order || 0)).map((r) => {
    const s = W[r.type], c = B(r);
    return `    <xto-form-item label="${r.label}" prop="${r.name}">
      <${s}${c} v-model="formData.${r.name}" />
    </xto-form-item>`;
  }).join(`
`), n = ((o = e.actions) == null ? void 0 : o.map((r) => `    <xto-button${r.props ? u(r.props) : ""} @click="${r.handler || `handle${r.type}`}">${r.label || r.type}</xto-button>`).join(`
`)) || "";
  return `  <xto-form :model="formData" :rules="rules"${(i = e.layout) != null && i.inline ? " inline" : ""}>
${a}
${n ? `    <xto-form-item>
${n}
    </xto-form-item>` : ""}
  </xto-form>`;
}
function B(e) {
  const a = { ...e.props };
  return e.placeholder && (a.placeholder = e.placeholder), e.disabled && (a.disabled = !0), u(a);
}
function J(e) {
  const a = e.fields.map(
    (o) => `  ${o.name}: ${o.defaultValue !== void 0 ? JSON.stringify(o.defaultValue) : "null"}`
  ).join(`,
`), n = L(e);
  return `import { reactive } from 'vue'
import { XtoForm, XtoFormItem, XtoInput, XtoSelect, XtoDatePicker, XtoInputNumber, XtoTextarea, XtoCheckbox, XtoRadioGroup, XtoSwitch, XtoUpload } from '@xto/form'

const formData = reactive({
${a}
})

const rules = {
${n}
}

function handleSubmit() {
  // 提交表单
}

function handleReset() {
  // 重置表单
}
`;
}
function L(e) {
  const a = {};
  return e.fields.forEach((n) => {
    n.rules && n.rules.length > 0 && (a[n.name] = n.rules.map((o) => {
      const i = {};
      return o.type === "required" ? (i.required = !0, i.message = o.message || `${n.label}不能为空`) : o.type === "min" || o.type === "max" ? (i[o.type] = o.value, i.message = o.message || `${n.label}${o.type === "min" ? "最小" : "最大"}值为${o.value}`) : o.type === "pattern" && (i.pattern = o.value, i.message = o.message || `${n.label}格式不正确`), o.trigger && (i.trigger = o.trigger), i;
    }));
  }), Object.entries(a).map(([n, o]) => `  ${n}: ${JSON.stringify(o, null, 4).split(`
`).join(`
  `)},`).join(`
`);
}
function nt(e) {
  const a = R(), n = Z(e);
  return m(a, n);
}
function R(e) {
  return `  <FlowEditor
    :nodes="nodes"
    :edges="edges"
    @node-click="handleNodeClick"
    @connect="handleConnect"
  />`;
}
function Z(e) {
  const a = e.nodes.map(
    (o) => `    { id: '${o.id}', type: '${o.type}', position: { x: ${o.position.x}, y: ${o.position.y} }, data: ${JSON.stringify(o.data)} }`
  ).join(`,
`), n = e.edges.map(
    (o) => `    { id: '${o.id}', source: '${o.source}', target: '${o.target}'${o.sourceHandle ? `, sourceHandle: '${o.sourceHandle}'` : ""}${o.targetHandle ? `, targetHandle: '${o.targetHandle}'` : ""} }`
  ).join(`,
`);
  return `import { ref } from 'vue'
import { FlowEditor, StartNode, AINode, EndNode } from '@xto/flow'
import { ConditionNode, LoopNode, ToolNode } from '@xto/flow-orchestrator'

const nodes = ref([
${a}
])

const edges = ref([
${n}
])

function handleNodeClick(node: any) {
  console.log('Node clicked:', node)
}

function handleConnect(connection: any) {
  edges.value.push({
    id: \`edge-\${connection.source}-\${connection.target}\`,
    source: connection.source,
    target: connection.target
  })
}
`;
}
const at = `
<template>
{{template}}
</template>

<script setup lang="ts">
{{script}}
<\/script>

<style scoped>
{{style}}
</style>
`, rt = "import { {{components}} } from '{{package}}'", it = `
<xto-form :model="formData" :rules="rules">
  <xto-form-item label="{{label}}" prop="{{name}}">
    <{{component}} v-model="formData.{{name}}" {{props}} />
  </xto-form-item>
</xto-form>
`, st = `
<xto-table :data="tableData">
  <xto-table-column prop="{{prop}}" label="{{label}}" {{props}} />
</xto-table>
<xto-pagination :total="total" :page-size="pageSize" />
`, lt = `{
  id: '{{id}}',
  type: '{{type}}',
  position: { x: {{x}}, y: {{y}} },
  data: {{data}}
}`, ct = `{
  id: '{{id}}',
  source: '{{source}}',
  target: '{{target}}'
}`, pt = `const {{name}} = reactive({
{{fields}}
})`, mt = `{{name}}: [
  { {{rule}}, message: '{{message}}', trigger: '{{trigger}}' }
]`, ut = `function {{name}}({{params}}) {
  {{body}}
}`;
function A(e, a) {
  return e.replace(/\{\{(\w+)\}\}/g, (n, o) => a[o] || n);
}
function dt(e, a) {
  return a.reduce((n, o) => A(n, o), e);
}
export {
  O as FlowSchemaZod,
  w as FormSchemaZod,
  T as PageSchemaZod,
  M as defaultFlowSchema,
  K as defaultFormSchema,
  U as defaultPageSchema,
  ct as flowEdgeTemplate,
  lt as flowNodeTemplate,
  it as formTemplate,
  ut as functionTemplate,
  nt as generateFlowCode,
  ot as generateFormCode,
  et as generatePageCode,
  m as generateVueFile,
  rt as importTemplate,
  Q as nodeDefaultConfigs,
  pt as reactiveTemplate,
  A as replaceTemplate,
  dt as replaceTemplateBatch,
  mt as ruleTemplate,
  st as tableTemplate,
  tt as validateFlowSchema,
  _ as validateFormSchema,
  Y as validatePageSchema,
  at as vueFileTemplate
};
