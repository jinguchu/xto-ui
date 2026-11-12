import{B as p,o as r,c as E,j as t,a as k,E as d,as as l,p as n}from"./chunks/framework.B8NLttm5.js";const c={class:"demo-block"},g={class:"demo-preview vp-raw"},u={class:"demo-block"},y={class:"demo-preview vp-raw"},m={class:"demo-block"},F={class:"demo-preview vp-raw"},b={class:"demo-block"},v={class:"demo-preview vp-raw"},_={class:"demo-block"},C={class:"demo-preview vp-raw"},x=JSON.parse('{"title":"MarkdownEditor Markdown 编辑器","description":"","frontmatter":{},"headers":[],"relativePath":"components/business/markdown-editor.md","filePath":"components/business/markdown-editor.md"}'),w={name:"components/business/markdown-editor.md"},T=Object.assign(w,{setup(q){const h=n(`# 标题一

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

此编辑器已被禁用，无法编辑。`);return(B,s)=>{const e=p("x-markdown-editor");return r(),E("div",null,[s[5]||(s[5]=t("h1",{id:"markdowneditor-markdown-编辑器",tabindex:"-1"},[k("MarkdownEditor Markdown 编辑器 "),t("a",{class:"header-anchor",href:"#markdowneditor-markdown-编辑器","aria-label":'Permalink to "MarkdownEditor Markdown 编辑器"'},"​")],-1)),s[6]||(s[6]=t("p",null,"Markdown 编辑器组件，支持编辑和预览两种模式，通过工具栏图标快捷插入格式。",-1)),s[7]||(s[7]=t("blockquote",null,[t("p",null,"注意：编辑器仅支持文字编辑，不支持插入图片。")],-1)),s[8]||(s[8]=t("h2",{id:"基础用法",tabindex:"-1"},[k("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),s[9]||(s[9]=t("p",null,"支持编辑和预览两种模式，通过工具栏切换。",-1)),t("div",c,[t("div",g,[d(e,{modelValue:h.value,"onUpdate:modelValue":s[0]||(s[0]=i=>h.value=i),height:400},null,8,["modelValue"])])]),s[10]||(s[10]=l("",3)),t("div",u,[t("div",y,[d(e,{modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=i=>a.value=i),mode:"edit",height:300},null,8,["modelValue"])])]),s[11]||(s[11]=l("",3)),t("div",m,[t("div",F,[d(e,{modelValue:a.value,"onUpdate:modelValue":s[2]||(s[2]=i=>a.value=i),mode:"preview",height:300},null,8,["modelValue"])])]),s[12]||(s[12]=l("",2)),t("div",b,[t("div",v,[d(e,{modelValue:o.value,"onUpdate:modelValue":s[3]||(s[3]=i=>o.value=i),disabled:"",height:200},null,8,["modelValue"])])]),s[13]||(s[13]=l("",3)),t("div",_,[t("div",C,[d(e,{modelValue:a.value,"onUpdate:modelValue":s[4]||(s[4]=i=>a.value=i),"show-toolbar":!1,height:200},null,8,["modelValue"])])]),s[14]||(s[14]=l("",15))])}}});export{x as __pageData,T as default};
