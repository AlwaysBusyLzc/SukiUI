import{_ as s,c as a,o as i,a1 as e}from"./chunks/framework.CGqBFb6Z.js";const E=JSON.parse('{"title":"明暗主题切换","description":"","frontmatter":{},"headers":[],"relativePath":"zh/documentation/theming/theme.md","filePath":"zh/documentation/theming/theme.md"}'),t={name:"zh/documentation/theming/theme.md"},h=e(`<h1 id="明暗主题切换" tabindex="-1">明暗主题切换 <a class="header-anchor" href="#明暗主题切换" aria-label="Permalink to &quot;明暗主题切换&quot;">​</a></h1><p>SukiUI 借助由 <code>AvaloniaUI</code> 提供的 <a href="https://docs.avaloniaui.net/zh-Hans/docs/guides/styles-and-resources/how-to-use-theme-variants" target="_blank" rel="noreferrer">主题变体</a> 轻松实现主题切换</p><img src="https://i.ibb.co/XzzfB9r/theming-theme.gif" alt="theming-theme"><h2 id="切换至暗色" tabindex="-1">切换至暗色 <a class="header-anchor" href="#切换至暗色" aria-label="Permalink to &quot;切换至暗色&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ChangeBaseTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ThemeVariant.Dark);</span></span></code></pre></div><h2 id="切换至亮色" tabindex="-1">切换至亮色 <a class="header-anchor" href="#切换至亮色" aria-label="Permalink to &quot;切换至亮色&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ChangeBaseTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ThemeVariant.Light);</span></span></code></pre></div><h2 id="明暗切换" tabindex="-1">明暗切换 <a class="header-anchor" href="#明暗切换" aria-label="Permalink to &quot;明暗切换&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SwitchBaseTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="themechanged-事件" tabindex="-1">ThemeChanged 事件 <a class="header-anchor" href="#themechanged-事件" aria-label="Permalink to &quot;ThemeChanged 事件&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().OnBaseThemeChanged </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> variant</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WriteLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Theme changed triggered !&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,11),n=[h];function l(p,r,k,d,o,c){return i(),a("div",null,n)}const m=s(t,[["render",l]]);export{E as __pageData,m as default};
