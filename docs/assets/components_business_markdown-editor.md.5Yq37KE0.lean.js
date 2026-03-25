import{B as p,o as r,c as E,j as s,a as k,E as e,aq as l,p as n}from"./chunks/framework.YkPYWosk.js";const c={class:"demo-block"},g={class:"demo-preview"},u={class:"demo-block"},y={class:"demo-preview"},m={class:"demo-block"},F={class:"demo-preview"},b={class:"demo-block"},v={class:"demo-preview"},_={class:"demo-block"},C={class:"demo-preview"},T=JSON.parse('{"title":"MarkdownEditor Markdown 编辑器","description":"","frontmatter":{},"headers":[],"relativePath":"components/business/markdown-editor.md","filePath":"components/business/markdown-editor.md"}'),q={name:"components/business/markdown-editor.md"},x=Object.assign(q,{setup(w){const h=n(`# 标题一

这是一段普通文本。

## 标题二

### 标题三

**粗体文本** 和 *斜体文本* 以及 ~~删除线~~

#### 列表

- 无序列表项 1
- 无序列表项 2
- 无序列表项 3

1. 有序列表项 1
2. 有序列表项 2
3. 有序列表项 3

#### 代码

行内代码 \`const a = 1\`

\`\`\`javascript
function hello() {
  console.log('Hello World!')
}
\`\`\`

#### 引用

> 这是一段引用文本
> 可以多行显示

#### 链接

[链接文本](https://example.com)

#### 表格

| 列1 | 列2 | 列3 |
|-----|-----|-----|
| A1  | B1  | C1  |
| A2  | B2  | C2  |

---

水平分割线
`),a=n(`# 快速开始

输入 **Markdown** 内容，使用工具栏快捷操作。

## 功能特点

- 支持常用 Markdown 语法
- 工具栏快捷操作
- 纯文字编辑
`),o=n(`# 禁用状态

此编辑器已被禁用，无法编辑。`);return(B,t)=>{const d=p("x-markdown-editor");return r(),E("div",null,[t[5]||(t[5]=s("h1",{id:"markdowneditor-markdown-编辑器",tabindex:"-1"},[k("MarkdownEditor Markdown 编辑器 "),s("a",{class:"header-anchor",href:"#markdowneditor-markdown-编辑器","aria-label":'Permalink to "MarkdownEditor Markdown 编辑器"'},"​")],-1)),t[6]||(t[6]=s("p",null,"Markdown 编辑器组件，支持编辑和预览两种模式，通过工具栏图标快捷插入格式。",-1)),t[7]||(t[7]=s("blockquote",null,[s("p",null,"注意：编辑器仅支持文字编辑，不支持插入图片。")],-1)),t[8]||(t[8]=s("h2",{id:"基础用法",tabindex:"-1"},[k("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),t[9]||(t[9]=s("p",null,"支持编辑和预览两种模式，通过工具栏切换。",-1)),s("div",c,[s("div",g,[e(d,{modelValue:h.value,"onUpdate:modelValue":t[0]||(t[0]=i=>h.value=i),height:400},null,8,["modelValue"])])]),t[10]||(t[10]=l("",3)),s("div",u,[s("div",y,[e(d,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=i=>a.value=i),mode:"edit",height:300},null,8,["modelValue"])])]),t[11]||(t[11]=l("",3)),s("div",m,[s("div",F,[e(d,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=i=>a.value=i),mode:"preview",height:300},null,8,["modelValue"])])]),t[12]||(t[12]=l("",2)),s("div",b,[s("div",v,[e(d,{modelValue:o.value,"onUpdate:modelValue":t[3]||(t[3]=i=>o.value=i),disabled:"",height:200},null,8,["modelValue"])])]),t[13]||(t[13]=l("",3)),s("div",_,[s("div",C,[e(d,{modelValue:a.value,"onUpdate:modelValue":t[4]||(t[4]=i=>a.value=i),"show-toolbar":!1,height:200},null,8,["modelValue"])])]),t[14]||(t[14]=l("",11))])}}});export{T as __pageData,x as default};
