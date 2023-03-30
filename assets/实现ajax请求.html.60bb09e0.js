import{_ as n}from"./plugin-vueexport-helper.2444895f.js";import{o as a,c as s,d as t}from"./app.2ef8b1a5.js";const e={},p=t(`<h1 id="\u5B9E\u73B0ajax\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0ajax\u8BF7\u6C42" aria-hidden="true">#</a> \u5B9E\u73B0ajax\u8BF7\u6C42</h1><h2 id="_1-\u521B\u5EFA-ajax-\u6838\u5FC3\u5BF9\u8C61-xmlhttprequest" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA-ajax-\u6838\u5FC3\u5BF9\u8C61-xmlhttprequest" aria-hidden="true">#</a> 1. \u521B\u5EFA Ajax \u6838\u5FC3\u5BF9\u8C61 XMLHttpRequest</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_2-\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42" aria-hidden="true">#</a> 2. \u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/x-www-form-urlencoded&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;{ &quot;a&quot;: 1 }&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// post\u8BF7\u6C42\u624D\u5E26\u53C2\u6570</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u76D1\u542C\u54CD\u5E94\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_3-\u76D1\u542C\u54CD\u5E94\u72B6\u6001" aria-hidden="true">#</a> 3. \u76D1\u542C\u54CD\u5E94\u72B6\u6001</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> text <span class="token operator">=</span> xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u54CD\u5E94\u5185\u5BB9</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>readyState \u662F XMLHttpRequest \u5BF9\u8C61\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u7528\u6765\u6807\u8BC6\u5F53\u524D XMLHttpRequest \u5BF9\u8C61\u5904\u4E8E\u4EC0\u4E48\u72B6\u6001\u3002 readyState \u603B\u5171\u6709 5 \u4E2A\u72B6\u6001\u503C\uFF0C\u5206\u522B\u4E3A 0~4\uFF0C\u6BCF\u4E2A\u503C\u4EE3\u8868\u4E86\u4E0D\u540C\u7684\u542B\u4E49</p><ul><li>0\uFF1A\u672A\u521D\u59CB\u5316 -- \u5C1A\u672A\u8C03\u7528.open()\u65B9\u6CD5\uFF1B</li><li>1\uFF1A\u542F\u52A8 -- \u5DF2\u7ECF\u8C03\u7528.open()\u65B9\u6CD5\uFF0C\u4F46\u5C1A\u672A\u8C03\u7528.send()\u65B9\u6CD5\uFF1B</li><li>2\uFF1A\u53D1\u9001 -- \u5DF2\u7ECF\u8C03\u7528.send()\u65B9\u6CD5\uFF0C\u4F46\u5C1A\u672A\u63A5\u6536\u5230\u54CD\u5E94\uFF1B</li><li>3\uFF1A\u63A5\u6536 -- \u5DF2\u7ECF\u63A5\u6536\u5230\u90E8\u5206\u54CD\u5E94\u6570\u636E\uFF1B</li><li>4\uFF1A\u5B8C\u6210 -- \u5DF2\u7ECF\u63A5\u6536\u5230\u5168\u90E8\u54CD\u5E94\u6570\u636E\uFF0C\u800C\u4E14\u5DF2\u7ECF\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u4F7F\u7528\u4E86\uFF1B</li></ul>`,9),o=[p];function c(i,l){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","\u5B9E\u73B0ajax\u8BF7\u6C42.html.vue"]]);export{d as default};
