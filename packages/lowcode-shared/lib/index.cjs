"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("zod"),j={id:"",name:"",version:"1.0.0",layout:{type:"grid",columns:12,gap:16},components:[]},T={id:"",name:"",version:"1.0.0",fields:[],layout:{labelWidth:"100px",labelPosition:"right",inline:!1,size:"default"}},v={id:"",name:"",version:"1.0.0",nodes:[],edges:[],variables:[]},F={start:{params:[]},llm:{model:"gpt-4",prompt:"",temperature:.7},end:{outputs:[]},condition:{conditions:[]},loop:{loopType:"array",arrayVar:"",count:0},tool:{toolName:"",params:{}},http:{url:"",method:"GET",headers:{}},script:{code:""}},z=t.z.object({x:t.z.number(),y:t.z.number()}),C=t.z.object({width:t.z.number(),height:t.z.number()}),w=z.merge(C),P=t.z.object({type:t.z.enum(["grid","flex","absolute"]),columns:t.z.number().optional(),gap:t.z.number().optional(),direction:t.z.enum(["row","column"]).optional()}),d=t.z.object({type:t.z.enum(["field","expression"]),field:t.z.string().optional(),operator:t.z.enum(["eq","ne","gt","lt","gte","lte","contains","empty"]).optional(),value:t.z.any().optional(),expression:t.z.string().optional()}),N=t.z.object({field:t.z.string(),source:t.z.enum(["api","state","props"]),path:t.z.string().optional()}),X=t.z.object({event:t.z.string(),action:t.z.enum(["emit","call","navigate"]),handler:t.z.string().optional(),params:t.z.record(t.z.any()).optional()}),f=t.z.object({id:t.z.string(),type:t.z.string(),props:t.z.record(t.z.any()),children:t.z.lazy(()=>t.z.array(f)).optional(),position:w,bindings:t.z.array(N).optional(),events:t.z.array(X).optional()}),b=t.z.object({id:t.z.string(),name:t.z.string().min(1,"页面名称不能为空"),description:t.z.string().optional(),version:t.z.string(),layout:P,components:t.z.array(f),globalStyles:t.z.record(t.z.any()).optional(),state:t.z.record(t.z.any()).optional(),lifecycle:t.z.object({onLoad:t.z.string().optional(),onReady:t.z.string().optional(),onUnload:t.z.string().optional()}).optional()}),k=t.z.enum(["input","select","date","number","textarea","checkbox","radio","switch","upload","time","slider","rate","transfer"]),D=t.z.object({type:t.z.enum(["required","min","max","pattern","custom"]),value:t.z.any().optional(),message:t.z.string().optional(),trigger:t.z.enum(["blur","change"]).optional()}),E=t.z.object({name:t.z.string().min(1,"字段名称不能为空"),label:t.z.string().min(1,"字段标签不能为空"),type:k,props:t.z.record(t.z.any()).optional(),rules:t.z.array(D).optional(),defaultValue:t.z.any().optional(),visible:d.optional(),disabled:d.optional(),placeholder:t.z.string().optional(),tooltip:t.z.string().optional(),span:t.z.number().optional(),order:t.z.number().optional()}),h=t.z.object({id:t.z.string(),name:t.z.string().min(1,"表单名称不能为空"),description:t.z.string().optional(),version:t.z.string(),fields:t.z.array(E).min(1,"表单必须至少有一个字段"),layout:t.z.object({labelWidth:t.z.union([t.z.string(),t.z.number()]).optional(),labelPosition:t.z.enum(["left","right","top"]).optional(),inline:t.z.boolean().optional(),size:t.z.enum(["small","default","large"]).optional()}).optional(),actions:t.z.array(t.z.object({type:t.z.enum(["submit","reset","cancel","custom"]),label:t.z.string().optional(),handler:t.z.string().optional(),position:t.z.enum(["left","center","right"]).optional(),props:t.z.record(t.z.any()).optional()})).optional()}),O=t.z.enum(["start","llm","end","condition","loop","tool","http","script"]),g=t.z.object({name:t.z.string(),dataType:t.z.string().optional(),required:t.z.boolean().optional()}),W=t.z.object({label:t.z.string(),description:t.z.string().optional(),config:t.z.record(t.z.any()),inputs:t.z.array(g).optional(),outputs:t.z.array(g).optional()}),V=t.z.object({id:t.z.string(),type:O,position:z,data:W}),H=t.z.object({id:t.z.string(),source:t.z.string(),target:t.z.string(),sourceHandle:t.z.string().optional(),targetHandle:t.z.string().optional(),label:t.z.string().optional(),animated:t.z.boolean().optional()}),I=t.z.object({name:t.z.string(),type:t.z.enum(["string","number","boolean","object","array"]),defaultValue:t.z.any().optional(),description:t.z.string().optional(),scope:t.z.enum(["global","local"])}),y=t.z.object({id:t.z.string(),name:t.z.string().min(1,"流程名称不能为空"),description:t.z.string().optional(),version:t.z.string(),nodes:t.z.array(V).min(1,"流程必须至少有一个节点"),edges:t.z.array(H),variables:t.z.array(I),triggers:t.z.array(t.z.object({type:t.z.enum(["manual","api","schedule","event"]),config:t.z.record(t.z.any()).optional()})).optional()});function Z(e){return b.safeParse(e)}function q(e){return h.safeParse(e)}function B(e){return y.safeParse(e)}const J={input:"xto-input",select:"xto-select",date:"xto-date-picker",number:"xto-input-number",textarea:"xto-textarea",checkbox:"xto-checkbox",radio:"xto-radio-group",switch:"xto-switch",upload:"xto-upload",time:"xto-time-picker",slider:"xto-slider",rate:"xto-rate",transfer:"xto-transfer"},x={"xto-form":"XtoForm","xto-form-item":"XtoFormItem","xto-input":"XtoInput","xto-select":"XtoSelect","xto-table":"XtoTable","xto-table-column":"XtoTableColumn","xto-pagination":"XtoPagination","xto-card":"XtoCard","xto-button":"XtoButton","xto-container":"XtoContainer"};function m(e,a,n=""){return`<template>
${e}
</template>

<script setup lang="ts">
${a}
<\/script>

${n?`<style scoped>
${n}
</style>`:""}`}function L(e){const a=R(e),n=A(e),o=U(e);return m(a,n,o)}function R(e){const a=e.components.map(n=>$(n,2)).join(`
`);return`  <div class="page-${e.name}">
${a}
  </div>`}function $(e,a){const n="  ".repeat(a),o=x[e.type]||e.type,i=u(e.props);if(e.children&&e.children.length>0){const r=e.children.map(s=>$(s,a+1)).join(`
`);return`${n}<${o}${i}>
${r}
${n}</${o}>`}return`${n}<${o}${i} />`}function u(e){if(!e||Object.keys(e).length===0)return"";const a=Object.entries(e).map(([n,o])=>typeof o=="string"?`${n}="${o}"`:typeof o=="boolean"?o?n:"":`:${n}="${JSON.stringify(o)}"`).filter(Boolean);return a.length>0?" "+a.join(" "):""}function A(e){const a=G(e),n=e.state?`const state = reactive(${JSON.stringify(e.state,null,2)})`:"";return`${a}

${n||"const formData = reactive({})"}
`}function G(e){const a=new Set;function n(l){l.forEach(p=>{a.add(p.type),p.children&&n(p.children)})}n(e.components);const o=[],i=[],r=[],s=[];a.forEach(l=>{const p=x[l];l.startsWith("xto-form")||l.startsWith("xto-input")||l.startsWith("xto-select")?o.push(p):l.startsWith("xto-table")||l.startsWith("xto-pagination")?i.push(p):l.startsWith("xto-card")||l.startsWith("xto-container")?r.push(p):s.push(p)});const c=[];return o.length>0&&c.push(`import { ${o.join(", ")} } from '@xto/form'`),i.length>0&&c.push(`import { ${i.join(", ")} } from '@xto/data'`),r.length>0&&c.push(`import { ${r.join(", ")} } from '@xto/layout'`),s.length>0&&c.push(`import { ${s.join(", ")} } from '@xto/base'`),c.push("import { reactive } from 'vue'"),c.join(`
`)}function U(e){return e.globalStyles?`.page-${e.name} {
${Object.entries(e.globalStyles).map(([a,n])=>`  ${a}: ${n};`).join(`
`)}
}`:""}function M(e){const a=K(e),n=Y(e);return m(a,n)}function K(e){var o,i;const a=e.fields.sort((r,s)=>(r.order||0)-(s.order||0)).map(r=>{const s=J[r.type],c=Q(r);return`    <xto-form-item label="${r.label}" prop="${r.name}">
      <${s}${c} v-model="formData.${r.name}" />
    </xto-form-item>`}).join(`
`),n=((o=e.actions)==null?void 0:o.map(r=>`    <xto-button${r.props?u(r.props):""} @click="${r.handler||`handle${r.type}`}">${r.label||r.type}</xto-button>`).join(`
`))||"";return`  <xto-form :model="formData" :rules="rules"${(i=e.layout)!=null&&i.inline?" inline":""}>
${a}
${n?`    <xto-form-item>
${n}
    </xto-form-item>`:""}
  </xto-form>`}function Q(e){const a={...e.props};return e.placeholder&&(a.placeholder=e.placeholder),e.disabled&&(a.disabled=!0),u(a)}function Y(e){const a=e.fields.map(o=>`  ${o.name}: ${o.defaultValue!==void 0?JSON.stringify(o.defaultValue):"null"}`).join(`,
`),n=_(e);return`import { reactive } from 'vue'
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
`}function _(e){const a={};return e.fields.forEach(n=>{n.rules&&n.rules.length>0&&(a[n.name]=n.rules.map(o=>{const i={};return o.type==="required"?(i.required=!0,i.message=o.message||`${n.label}不能为空`):o.type==="min"||o.type==="max"?(i[o.type]=o.value,i.message=o.message||`${n.label}${o.type==="min"?"最小":"最大"}值为${o.value}`):o.type==="pattern"&&(i.pattern=o.value,i.message=o.message||`${n.label}格式不正确`),o.trigger&&(i.trigger=o.trigger),i}))}),Object.entries(a).map(([n,o])=>`  ${n}: ${JSON.stringify(o,null,4).split(`
`).join(`
  `)},`).join(`
`)}function tt(e){const a=et(),n=ot(e);return m(a,n)}function et(e){return`  <FlowEditor
    :nodes="nodes"
    :edges="edges"
    @node-click="handleNodeClick"
    @connect="handleConnect"
  />`}function ot(e){const a=e.nodes.map(o=>`    { id: '${o.id}', type: '${o.type}', position: { x: ${o.position.x}, y: ${o.position.y} }, data: ${JSON.stringify(o.data)} }`).join(`,
`),n=e.edges.map(o=>`    { id: '${o.id}', source: '${o.source}', target: '${o.target}'${o.sourceHandle?`, sourceHandle: '${o.sourceHandle}'`:""}${o.targetHandle?`, targetHandle: '${o.targetHandle}'`:""} }`).join(`,
`);return`import { ref } from 'vue'
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
`}const nt=`
<template>
{{template}}
</template>

<script setup lang="ts">
{{script}}
<\/script>

<style scoped>
{{style}}
</style>
`,at="import { {{components}} } from '{{package}}'",rt=`
<xto-form :model="formData" :rules="rules">
  <xto-form-item label="{{label}}" prop="{{name}}">
    <{{component}} v-model="formData.{{name}}" {{props}} />
  </xto-form-item>
</xto-form>
`,it=`
<xto-table :data="tableData">
  <xto-table-column prop="{{prop}}" label="{{label}}" {{props}} />
</xto-table>
<xto-pagination :total="total" :page-size="pageSize" />
`,st=`{
  id: '{{id}}',
  type: '{{type}}',
  position: { x: {{x}}, y: {{y}} },
  data: {{data}}
}`,lt=`{
  id: '{{id}}',
  source: '{{source}}',
  target: '{{target}}'
}`,ct=`const {{name}} = reactive({
{{fields}}
})`,pt=`{{name}}: [
  { {{rule}}, message: '{{message}}', trigger: '{{trigger}}' }
]`,mt=`function {{name}}({{params}}) {
  {{body}}
}`;function S(e,a){return e.replace(/\{\{(\w+)\}\}/g,(n,o)=>a[o]||n)}function ut(e,a){return a.reduce((n,o)=>S(n,o),e)}exports.FlowSchemaZod=y;exports.FormSchemaZod=h;exports.PageSchemaZod=b;exports.defaultFlowSchema=v;exports.defaultFormSchema=T;exports.defaultPageSchema=j;exports.flowEdgeTemplate=lt;exports.flowNodeTemplate=st;exports.formTemplate=rt;exports.functionTemplate=mt;exports.generateFlowCode=tt;exports.generateFormCode=M;exports.generatePageCode=L;exports.generateVueFile=m;exports.importTemplate=at;exports.nodeDefaultConfigs=F;exports.reactiveTemplate=ct;exports.replaceTemplate=S;exports.replaceTemplateBatch=ut;exports.ruleTemplate=pt;exports.tableTemplate=it;exports.validateFlowSchema=B;exports.validateFormSchema=q;exports.validatePageSchema=Z;exports.vueFileTemplate=nt;
