import{_ as n}from"./plugin-vueexport-helper.2444895f.js";import{o as s,c as a,d as t}from"./app.2ef8b1a5.js";const e={},p=t(`<h1 id="_222-\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u8282\u70B9\u4E2A\u6570" tabindex="-1"><a class="header-anchor" href="#_222-\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u8282\u70B9\u4E2A\u6570" aria-hidden="true">#</a> 222.\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u8282\u70B9\u4E2A\u6570</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countNodes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
  <span class="token keyword">let</span> leftHeight <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> rightHeight <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    left <span class="token operator">=</span> left<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    leftHeight<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    right <span class="token operator">=</span> right<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    rightHeight<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5982\u679C\u662F\u4E2A\u6EE1\u4E8C\u53C9\u6811\uFF0C\u6700\u5DE6\u8FB9\u548C\u6700\u53F3\u8FB9\u7684\u8282\u70B9\u9AD8\u5EA6\u76F8\u540C</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>leftHeight <span class="token operator">===</span> rightHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6EE1\u4E8C\u53C9\u6811\u8282\u70B9\u4E2A\u6570  2^k - 1</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> rightHeight <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">countNodes</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">countNodes</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","222.\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u8282\u70B9\u4E2A\u6570.html.vue"]]);export{k as default};
