import{_ as s,c as i,o as t,a4 as e,j as a,a as h}from"./chunks/framework.3VZE_5ck.js";const C=JSON.parse('{"title":"Light & Dark","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/theming/theme.md","filePath":"documentation/theming/theme.md"}'),n={name:"documentation/theming/theme.md"},l=e('<h1 id="light-dark" tabindex="-1">Light &amp; Dark <a class="header-anchor" href="#light-dark" aria-label="Permalink to &quot;Light &amp; Dark&quot;">​</a></h1><p>SukiUI use the <a href="https://docs.avaloniaui.net/docs/guides/styles-and-resources/how-to-use-theme-variants" target="_blank" rel="noreferrer">Theme Variant</a> system provided by <code>AvaloniaUI</code>.</p><p>However, the SukiTheme class provide a wrapper to change Light/Dark theme.</p><h4 id="dark" tabindex="-1">Dark <a class="header-anchor" href="#dark" aria-label="Permalink to &quot;Dark&quot;">​</a></h4>',4),r=a("p",{"CFF9284D-F8E2-48C5-A837-05BB4BEA0673":""},[a("img",{src:"https://github.com/user-attachments/assets/bdfeec4e-d0e7-4d7e-b075-b0616720acbd",alt:"{CFF9284D-F8E2-48C5-A837-05BB4BEA0673}"})],-1),p=a("h4",{id:"light",tabindex:"-1"},[h("Light "),a("a",{class:"header-anchor",href:"#light","aria-label":'Permalink to "Light"'},"​")],-1),d=a("p",{"4E906261-7E2A-472E-B21E-FC038B1CFDF5":""},[a("img",{src:"https://github.com/user-attachments/assets/84dd83b4-be4f-4a0f-8c86-4d0c0e01e3ea",alt:"{4E906261-7E2A-472E-B21E-FC038B1CFDF5}"})],-1),k=e(`<h2 id="switch-to-dark-theme" tabindex="-1">Switch to Dark Theme <a class="header-anchor" href="#switch-to-dark-theme" aria-label="Permalink to &quot;Switch to Dark Theme&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ChangeBaseTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ThemeVariant.Dark);</span></span></code></pre></div><h2 id="switch-to-light-theme" tabindex="-1">Switch to Light Theme <a class="header-anchor" href="#switch-to-light-theme" aria-label="Permalink to &quot;Switch to Light Theme&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ChangeBaseTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ThemeVariant.Light);</span></span></code></pre></div><h2 id="switch-between-light-dark-theme" tabindex="-1">Switch between Light/Dark Theme <a class="header-anchor" href="#switch-between-light-dark-theme" aria-label="Permalink to &quot;Switch between Light/Dark Theme&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SwitchBaseTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="themechanged-event" tabindex="-1">ThemeChanged Event <a class="header-anchor" href="#themechanged-event" aria-label="Permalink to &quot;ThemeChanged Event&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().OnBaseThemeChanged </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> variant</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WriteLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Theme changed triggered !&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,8),c=[l,r,p,d,k];function o(g,E,m,u,b,_){return t(),i("div",null,c)}const F=s(n,[["render",o]]);export{C as __pageData,F as default};
