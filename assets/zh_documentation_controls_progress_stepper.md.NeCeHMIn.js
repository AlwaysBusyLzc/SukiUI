import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.3VZE_5ck.js";const e="/SukiUI/controls/progress/stepper.gif",u=JSON.parse('{"title":"Stepper","description":"","frontmatter":{},"headers":[],"relativePath":"zh/documentation/controls/progress/stepper.md","filePath":"zh/documentation/controls/progress/stepper.md"}'),p={name:"zh/documentation/controls/progress/stepper.md"},n=t('<h1 id="stepper" tabindex="-1">Stepper <a class="header-anchor" href="#stepper" aria-label="Permalink to &quot;Stepper&quot;">​</a></h1><p>指引用户分步骤完成一项任务的控件</p><h2 id="展示" tabindex="-1">展示 <a class="header-anchor" href="#展示" aria-label="Permalink to &quot;展示&quot;">​</a></h2><img src="'+e+`" height="300px" width="300px"><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:Stepper</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{Binding StepIndex}&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{Binding Steps}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ObservableProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _stepIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IEnumerable</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Steps { get; } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                           [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;First Step&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Second Step&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Third Step&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><h2 id="参阅" tabindex="-1">参阅 <a class="header-anchor" href="#参阅" aria-label="Permalink to &quot;参阅&quot;">​</a></h2><p><a href="https://github.com/kikipoulet/SukiUI/blob/main/SukiUI.Demo/Features/ControlsLibrary/ProgressView.axaml" target="_blank" rel="noreferrer">Demo: SukiUI.Demo/Features/ControlsLibrary/ProgressView.axaml</a></p><p><a href="https://github.com/kikipoulet/SukiUI/blob/main/SukiUI/Controls/Stepper.axaml.cs" target="_blank" rel="noreferrer">API: Controls/Stepper.axaml.cs</a></p>`,10),h=[n];function r(l,k,o,d,g,E){return a(),i("div",null,h)}const y=s(p,[["render",r]]);export{u as __pageData,y as default};
