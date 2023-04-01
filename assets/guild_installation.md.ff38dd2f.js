import{_ as s,c as n,o as a,a as l}from"./app.47c67824.js";const D=JSON.parse('{"title":"\u524D\u7AEF\u4E2A\u4EBA\u7B14\u8BB0","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u7528\u65B9\u6CD5","slug":"\u5E38\u7528\u65B9\u6CD5","link":"#\u5E38\u7528\u65B9\u6CD5","children":[]}],"relativePath":"guild/installation.md"}'),e={name:"guild/installation.md"},p=l(`<h1 id="\u524D\u7AEF\u4E2A\u4EBA\u7B14\u8BB0" tabindex="-1">\u524D\u7AEF\u4E2A\u4EBA\u7B14\u8BB0 <a class="header-anchor" href="#\u524D\u7AEF\u4E2A\u4EBA\u7B14\u8BB0" aria-hidden="true">#</a></h1><p><a href="./../interview/">\u9762\u8BD5\u9898</a></p><h2 id="\u5E38\u7528\u65B9\u6CD5" tabindex="-1">\u5E38\u7528\u65B9\u6CD5 <a class="header-anchor" href="#\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#A6ACCD;">import { reactive } from &#39;vue&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u8868\u5355\u6570\u636E hook</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param initValue \u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function (initValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const form = reactive({ ...initValue });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  const resetFields = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Object.keys(form).forEach((key) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      form[key] = initValue ? initValue[key] : void 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  const assignFields = (data) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Object.keys(form).forEach((key) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      form[key] = data[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    form,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u91CD\u7F6E\u4E3A\u521D\u59CB\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    resetFields,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8D4B\u503C\u4E0D\u6539\u53D8\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#A6ACCD;">    assignFields</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,4),o=[p];function t(c,i,r,C,A,d){return a(),n("div",null,o)}const _=s(e,[["render",t]]);export{D as __pageData,_ as default};
