import{_ as n}from"./plugin-vueexport-helper.2444895f.js";import{o as s,c as a,d as p}from"./app.2ef8b1a5.js";const t={},e=p(`<h1 id="\u5B9E\u73B0\u5927\u6570\u76F8\u52A0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u5927\u6570\u76F8\u52A0" aria-hidden="true">#</a> \u5B9E\u73B0\u5927\u6570\u76F8\u52A0</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">addStrings</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> num1<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> num2<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">||</span> flag <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> flag <span class="token operator">+=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>num1<span class="token punctuation">[</span>i<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> flag <span class="token operator">+=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>num2<span class="token punctuation">[</span>j<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u53D6\u4F59</span>
    res <span class="token operator">=</span> <span class="token punctuation">(</span>flag <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">+</span> res<span class="token punctuation">;</span>
    flag <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>flag <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","\u5B9E\u73B0\u5927\u6570\u76F8\u52A0.html.vue"]]);export{k as default};
