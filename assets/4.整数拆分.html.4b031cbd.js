import{_ as n}from"./plugin-vueexport-helper.2444895f.js";import{o as s,c as a,d as p}from"./app.2ef8b1a5.js";const t={},o=p(`<h1 id="_4-\u6574\u6570\u62C6\u5206" tabindex="-1"><a class="header-anchor" href="#_4-\u6574\u6570\u62C6\u5206" aria-hidden="true">#</a> 4.\u6574\u6570\u62C6\u5206</h1><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">integerBreak</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD9\u91CC\u5FC5\u987Bn + 1\uFF0C\u56E0\u4E3A\u7D22\u5F15\u662F\u6570\u503C</span>
  <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 0 \u548C 1 \u65E0\u6CD5\u62C6\u5206</span>
  dp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token comment">// \u4ECE3\u5F00\u59CB</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// j * (i - j)  \u62C6\u5206\u4E3A\u4E24\u4E2A\u6574\u6570\u7684\u4E58\u79EF</span>
      <span class="token comment">// dp[i - j] * dp[j]  \u62C6\u5206\u4E3A\u591A\u4EFD\u7684\u4E58\u79EF</span>
      dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> j <span class="token operator">*</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> j<span class="token punctuation">)</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> j<span class="token punctuation">]</span> <span class="token operator">*</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> j <span class="token operator">*</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> j<span class="token punctuation">)</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> j<span class="token punctuation">]</span> <span class="token operator">*</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>dp<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> dp<span class="token punctuation">[</span>dp<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h2><p><strong>1.\u786E\u5B9Adp\u6570\u7EC4\u4EE5\u53CA\u4E0B\u6807\u7684\u542B\u4E49</strong></p><p>dp[i]: \u6B63\u6574\u6570i\uFF0C\u5B83\u62C6\u5206\u540E\u7684\u6574\u6570\u4E58\u79EF\u6700\u5927\u503C\u3002</p><p>i: \u6B63\u6574\u6570i</p><p><strong>2.\u786E\u5B9A\u9012\u63A8\u516C\u5F0F</strong> dp[i] = Math.max(dp[i - j] * dp[j], (i - j) * j, dp[i])</p><p>\u4E00\u4E2A\u662Fj * (i - j) \u76F4\u63A5\u76F8\u4E58\u3002</p><p>\u4E00\u4E2A\u662Fj * dp[i - j]\uFF0C\u76F8\u5F53\u4E8E\u662F\u62C6\u5206(i - j)</p><p>j * (i - j) \u662F\u5355\u7EAF\u7684\u628A\u6574\u6570\u62C6\u5206\u4E3A\u4E24\u4E2A\u6570\u76F8\u4E58\uFF0C\u800Cj * dp[i - j]\u662F\u62C6\u5206\u6210\u4E24\u4E2A\u4EE5\u53CA\u4E24\u4E2A\u4EE5\u4E0A\u7684\u4E2A\u6570\u76F8\u4E58\u3002</p><p>\u4E4B\u6240\u4EE5\u8FD8\u8DDFdp[i]\u6BD4\u8F83\uFF0C\u662F\u56E0\u4E3A\u8981\u6C42dp[i - (1...9)]\u8FD9\u4E4B\u95F4\u7684\u6700\u5927\u503C\uFF0C\u8FD8\u8981\u8DDF\u81EA\u5DF1\u6BD4</p><p><strong>3.dp\u521D\u59CB\u5316</strong></p><p>\u53EA\u521D\u59CB\u5316dp[2] = 1\uFF0C\u4ECEdp[i]\u7684\u5B9A\u4E49\u6765\u8BF4\uFF0C\u62C6\u5206\u6570\u5B572\uFF0C\u5F97\u5230\u7684\u6700\u5927\u4E58\u79EF\u662F1\uFF0C\u8FD9\u4E2A\u6CA1\u6709\u4EFB\u4F55\u5F02\u8BAE</p><p><strong>4.\u786E\u5B9A\u904D\u5386\u987A\u5E8F</strong> dp[i] \u662F\u4F9D\u9760 dp[i - j]\u7684\u72B6\u6001\uFF0C\u6240\u4EE5\u904D\u5386i\u4E00\u5B9A\u662F\u4ECE\u524D\u5411\u540E\u904D\u5386\uFF0C\u5148\u6709dp[i - j]\u518D\u6709dp[i]\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// j * (i - j)  \u62C6\u5206\u4E3A\u4E24\u4E2A\u6574\u6570\u7684\u4E58\u79EF</span>
    <span class="token comment">// dp[i - j] * dp[j]  \u62C6\u5206\u4E3A\u591A\u4EFD\u7684\u4E58\u79EF</span>
    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> j <span class="token operator">*</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> j<span class="token punctuation">)</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> j<span class="token punctuation">]</span> <span class="token operator">*</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> j <span class="token operator">*</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> j<span class="token punctuation">)</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> j<span class="token punctuation">]</span> <span class="token operator">*</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),e=[o];function c(i,l){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","4.\u6574\u6570\u62C6\u5206.html.vue"]]);export{r as default};
