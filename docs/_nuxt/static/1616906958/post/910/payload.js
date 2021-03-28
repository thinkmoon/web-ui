__NUXT_JSONP__("/post/910", {data:[{article:"\u003Ch2 id=\"介绍\"\u003E介绍\u003C\u002Fh2\u003E\n\u003Cp\u003EVue中的指令形如\u003Ccode\u003Ev-*\u003C\u002Fcode\u003E，如v-if，v-show，v-model等。同时，除了Vue自带的一些默认指令外，Vue同时运行用户自定义指令，来扩展指令功能。\u003C\u002Fp\u003E\n\u003Ch2 id=\"使用场景\"\u003E使用场景\u003C\u002Fh2\u003E\n\u003Cp\u003E究竟什么情况下使用组件？而什么情况下使用指令呢？官方对此，给出了以下建议：\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E注意，在 Vue2.0 中，代码复用和抽象的主要形式是组件。然而，有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E也就是说，当你关注问题的抽象层级在DOM元素的时候，你就应该考虑使用自定义指令来完成需求了。\u003C\u002Fp\u003E\n\u003Ch2 id=\"作用范围\"\u003E作用范围\u003C\u002Fh2\u003E\n\u003Cp\u003E自定义指令有两种作用范围，一种是申明在全局，全局内有效。另一种，则是局部指令。\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E钩子函数及相关参数见官网文档。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch2 id=\"举个例子\"\u003E举个例子\u003C\u002Fh2\u003E\n\u003Ch3 id=\"需求\"\u003E需求\u003C\u002Fh3\u003E\n\u003Cp\u003E我需要设计一个自定义指令\u003Ccode\u003Ev-bug\u003C\u002Fcode\u003E，该指令可将作用元素的所有内容都替换为\u003Ccode\u003E烫烫烫烫\u003C\u002Fcode\u003E，指令可以指定有几个烫，以及是否追加\u003Ccode\u003E锟斤拷\u003C\u002Fcode\u003E。\u003C\u002Fp\u003E\n\u003Ch3 id=\"1-先将内容替换为一个烫\"\u003E1. 先将内容替换为一个\u003Ccode\u003E烫\u003C\u002Fcode\u003E\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003Emain.js\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003Eimport Vue from &#39;vue&#39;\nimport App from &#39;.\u002FApp.vue&#39;\n\nVue.config.productionTip = false\n\nVue.directive(&#39;bug&#39;, {\n  inserted: function (el) {\n    el.innerHTML = &quot;烫&quot;\n  }\n})\n\nnew Vue({\n  render: h =&gt; h(App),\n}).$mount(&#39;#app&#39;)\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003EApp.vue\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-html\"\u003E&lt;template&gt;\n  &lt;div id=&quot;app&quot;&gt;\n    &lt;HelloWorld v-bug \u002F&gt;\n  &lt;\u002Fdiv&gt;\n&lt;\u002Ftemplate&gt;\n\n&lt;script&gt;\nimport HelloWorld from &#39;.\u002Fcomponents\u002FHelloWorld.vue&#39;\n\nexport default {\n  name: &#39;App&#39;,\n  components: {\n    HelloWorld\n  }\n}\n&lt;\u002Fscript&gt;\n\n&lt;style&gt;\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n&lt;\u002Fstyle&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E效果展示\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"http:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2020-09-20T05:28:47.png\" alt=\"2020-09-20T05:28:47.png\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"2-生成指定个数的烫\"\u003E2. 生成指定个数的\u003Ccode\u003E烫\u003C\u002Fcode\u003E\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003Emain.js\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003E...\nVue.directive(&#39;bug&#39;, {\n  inserted: function (el, binding) {\n    el.innerHTML = Array(binding.value).fill(&quot;烫&quot;).join(&quot;&quot;)\n  }\n})\n...\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003EApp.vue\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-html\"\u003E&lt;template&gt;\n  &lt;div id=&quot;app&quot;&gt;\n    &lt;HelloWorld v-bug=&quot;12&quot; \u002F&gt;\n  &lt;\u002Fdiv&gt;\n&lt;\u002Ftemplate&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Cimg src=\"http:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2020-09-20T05:29:25.png\" alt=\"2020-09-20T05:29:25.png\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"3-指定是否追加锟斤拷\"\u003E3. 指定是否追加\u003Ccode\u003E锟斤拷\u003C\u002Fcode\u003E\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003Emain.js\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003E...\nVue.directive(&#39;bug&#39;, {\n  inserted: function (el, binding) {\n    let html = Array(binding.value).fill(&quot;烫&quot;).join(&quot;&quot;)\n    if(binding.modifiers.suffix){\n      html += &quot;锟斤拷&quot;\n    }\n    el.innerHTML = html\n  }\n})\n...\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003EApp.vue\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-html\"\u003E&lt;template&gt;\n  &lt;div id=&quot;app&quot;&gt;\n    &lt;HelloWorld v-bug.suffix=&quot;12&quot; \u002F&gt;\n  &lt;\u002Fdiv&gt;\n&lt;\u002Ftemplate&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Cimg src=\"http:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2020-09-20T05:30:18.png\" alt=\"2020-09-20T05:30:18.png\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E但是此时的代码有个非常严重的问题，从上文代码中可看出，内容的改变只在inserted的时候执行。如果我们将指令后面设置为变量，变量值的改变却不会影响到\u003Ccode\u003E烫\u003C\u002Fcode\u003E个数（这一点都不Vue），所有我们应再监听一下指令的updated钩子函数。\u003C\u002Fp\u003E\n\u003Ch3 id=\"4-数据驱动（动态改变）\"\u003E4. 数据驱动（动态改变）\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003EApp.vue\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-html\"\u003E&lt;script&gt;\nimport HelloWorld from &quot;.\u002Fcomponents\u002FHelloWorld.vue&quot;;\n\nlet interval = null\nexport default {\n    name: &quot;App&quot;,\n    components: {\n        HelloWorld\n    },\n    data() {\n        return {\n            num: 12\n        };\n    },\n    created() {\n        interval = setInterval(() =&gt; {\n            this.num++;\n        }, 1000);\n    },\n    beforeDestroy(){\n      clearInterval(interval)\n    }\n};\n&lt;\u002Fscript&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003Emain.js\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003E...\nfunction generateHtml(binding){\n  let html = Array(binding.value).fill(&quot;烫&quot;).join(&quot;&quot;)\n  if (binding.modifiers.suffix) {\n    html += &quot;锟斤拷&quot;\n  }\n  return html\n}\nVue.directive(&#39;bug&#39;, {\n  inserted: function (el, binding) {\n    el.innerHTML = generateHtml(binding)\n  },\n  update: function (el, binding) {\n    if (binding.oldValue !== binding.value) {\n      el.innerHTML = generateHtml(binding)\n    }\n  },\n})\n...\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Cimg src=\"http:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2020-09-11T14:22:08.png\" alt=\"2020-09-11T14:22:08.png\"\u003E\n需求完成！\u003C\u002Fp\u003E\n"}],fetch:{},mutations:void 0});