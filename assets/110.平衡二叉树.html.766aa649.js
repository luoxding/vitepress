import{_ as e}from"./plugin-vueexport-helper.2444895f.js";import{o as t,c as p,a as n,b as s,e as o,d as c,r as l}from"./app.2ef8b1a5.js";const r={},i={id:"_110-\u5E73\u8861\u4E8C\u53C9\u6811",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#_110-\u5E73\u8861\u4E8C\u53C9\u6811","aria-hidden":"true"},"#",-1),k={href:"https://leetcode-cn.com/problems/balanced-binary-tree/",target:"_blank",rel:"noopener noreferrer"},d=c(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">getDepth</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token comment">// \u83B7\u53D6\u5DE6\u5B50\u6811\u6700\u5927\u6DF1\u5EA6</span>
  <span class="token keyword">let</span> leftDeep <span class="token operator">=</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>leftDeep <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token comment">// \u83B7\u53D6\u53F3\u5B50\u6811\u6700\u5927\u6DF1\u5EA6</span>
  <span class="token keyword">let</span> rightDeep <span class="token operator">=</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rightDeep <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5DE6\u53F3\u5B50\u6811\u6700\u5927\u6DF1\u5EA6\u7684\u7EDD\u5BF9\u503C \u5982\u679C\u5927\u4E8E 1  \u8FD4\u56DE-1 \u5426\u5219\u8FD4\u56DE\u6700\u5927\u6DF1\u5EA6 + 1</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>leftDeep <span class="token operator">-</span> rightDeep<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span>
    <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftDeep<span class="token punctuation">,</span> rightDeep<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">isBalanced</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(v,b){const a=l("ExternalLinkIcon");return t(),p("div",null,[n("h1",i,[u,s(),n("a",k,[s("110.\u5E73\u8861\u4E8C\u53C9\u6811"),o(a)])]),d])}const h=e(r,[["render",m],["__file","110.\u5E73\u8861\u4E8C\u53C9\u6811.html.vue"]]);export{h as default};
