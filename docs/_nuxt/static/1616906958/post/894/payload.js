__NUXT_JSONP__("/post/894", {data:[{article:"\u003Ch1 id=\"vue环境变量和模式\"\u003EVue环境变量和模式\u003C\u002Fh1\u003E\n\u003Cp\u003E\u003Cimg src=\"http:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002Fimage-20200710134543169.png\" alt=\"Vue环境变量和模式\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E我最开始使用vue的判断环境的方法是\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003Elet BASE_URL = process.env.NODE_ENV == &quot;development&quot; ? &quot;http:\u002Flocalhost&quot; : &quot;xxx&quot;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E在这种情况下，需要先判断它的编译环境，进而根据环境适用对应的值。如果只有一个地方的变量跟环境有关，情况还好。但是若有多个，则需要复制多个判断或者封装成一个方法。但也只能使用于两个环境，如果存在多个环境，诸如开发，测试，预发布，正式等环境，这个方法就捉襟见肘了。所以，我们需要设置Vue环境变量和模式，好像webpack也可以实现？（好吧，这不是重点）\u003C\u002Fp\u003E\n\u003Ch2 id=\"实现方式\"\u003E实现方式\u003C\u002Fh2\u003E\n\u003Cp\u003Evue允许你在项目根目录下添加.env.[mode]的文件来指定环境变量。\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003E.env                # 在所有的环境中被载入\n.env.local          # 在所有的环境中被载入，但会被 git 忽略\n.env.[mode]         # 只在指定的模式中被载入\n.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E比如我，我添加了\u003Ccode\u003E.env.local\u003C\u002Fcode\u003E,\u003Ccode\u003E.env.development\u003C\u002Fcode\u003E,\u003Ccode\u003E.env.test\u003C\u002Fcode\u003E,\u003Ccode\u003E.env.production\u003C\u002Fcode\u003E等文件，.env.local文件内容如下。\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E.env.local\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003EVUE_APP_BUILD_MODE = &#39;development&#39;\nVUE_APP_BASE_URL = &#39;http:\u002F\u002F172.16.6.132:8002\u002Fthreemiju\u002F&#39;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E对应\u003Ccode\u003Epackage.json\u003C\u002Fcode\u003E的script如下:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-json\"\u003E&quot;scripts&quot;: {\n    &quot;serve&quot;: &quot;vue-cli-service serve --mode&quot;,\n    &quot;serve:test&quot;: &quot;vue-cli-service serve --mode test&quot;,\n    &quot;build:test&quot;: &quot;vue-cli-service build --mode test&quot;,\n    &quot;build:production&quot;: &quot;vue-cli-service build --mode production&quot;,\n    &quot;deploy:test&quot;: &quot;git push &amp;&amp; git push gitlab dev &amp;&amp; vue-cli-service build --mode test&quot;\n  },\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E请注意，此处有一个坑。当你使用\u003Ccode\u003Eyarn run build:test\u003C\u002Fcode\u003E的时候，你会发现，假如你使用了异步组件，却会神奇的发现，它并没有把把代码切割，只编译成了一个app.js文件，这是由于你使用了\u003Ccode\u003E--mode test\u003C\u002Fcode\u003E, 导致它认为你并不是prodution环境。所以，你需要对\u003Ccode\u003E.env.test\u003C\u002Fcode\u003E做以下修改\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cul\u003E\n\u003Cli\u003E.env.test\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003ENODE_ENV = &#39;production&#39;\nVUE_APP_BUILD_MODE = &#39;test&#39;\nVUE_APP_BASE_URL = &#39;https:\u002F\u002Fm.gileey.cn\u002Fthreemiju\u002F&#39;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E主动设置NODE_ENV即可。\u003C\u002Fp\u003E\n\u003Ch2 id=\"环境变量的使用场景\"\u003E环境变量的使用场景\u003C\u002Fh2\u003E\n\u003Col\u003E\n\u003Cli\u003EBASE_URL\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003Eexport const baseURL = process.env.VUE_APP_BASE_URL;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Col start=\"2\"\u003E\n\u003Cli\u003EBUILD_MODE\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003E在显示版本号时同时显示编译环境\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-jsx\"\u003E&lt;span :title=&quot;mode&quot;&gt;{{ version }}&lt;\u002Fspan&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-javascript\"\u003Edata(){\nreturn {mode: process.env.VUE_APP_BUILD_MODE}\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"本地变量local的一些应用场景\"\u003E本地变量(*.local)的一些应用场景\u003C\u002Fh2\u003E\n\u003Col\u003E\n\u003Cli\u003EBASE_URL: 在不同的开发机器下，请求不同内网地址\u003C\u002Fli\u003E\n\u003Cli\u003EAPP_SECRET: 该字段不宜出现在共有仓库\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n"}],fetch:{},mutations:void 0});