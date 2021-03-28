__NUXT_JSONP__("/post/876", {data:[{article:"\u003Cp\u003E\u003Cimg src=\"http:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2018-12-25-ts.jpeg\" alt=\"typescript\"\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"本文环境\"\u003E本文环境\u003C\u002Fh2\u003E\n\u003Col\u003E\n\u003Cli\u003E@vue\u002Fcli 4.3.1\u003C\u002Fli\u003E\n\u003Cli\u003Etypescript 3.9.5\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch2 id=\"相关配置文件\"\u003E相关配置文件\u003C\u002Fh2\u003E\n\u003Col\u003E\n\u003Cli\u003Evue.config.js\u003C\u002Fli\u003E\n\u003Cli\u003Etsconfig.json\u003C\u002Fli\u003E\n\u003Cli\u003Eshims-vue.d.ts\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch2 id=\"问题汇总\"\u003E问题汇总\u003C\u002Fh2\u003E\n\u003Ch3 id=\"导入-vue-文件报错\"\u003E导入 vue 文件报错\u003C\u002Fh3\u003E\n\u003Cp\u003E错误信息：Cannot find module &#39;.\u002FApp.vue&#39; or its corresponding type declarations\n解决方案：修改\u003Ccode\u003Eshims-vue.d.ts\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-typescript\"\u003Edeclare module &quot;*.vue&quot; {\n  import Vue from &quot;vue&quot;;\n  export default Vue;\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3 id=\"vscode-报错，编译不报错\"\u003EVscode 报错，编译不报错\u003C\u002Fh3\u003E\n\u003Cp\u003E解决方案：重启 Vscode\u003C\u002Fp\u003E\n\u003Ch3 id=\"挂载原型api-报错\"\u003E挂载原型$api 报错\u003C\u002Fh3\u003E\n\u003Cp\u003E解决方案：在src目录下新增\u003Ccode\u003Evue-property.d.ts\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-typescript\"\u003Eimport Vue from &#39;vue&#39;\ndeclare module &quot;vue\u002Ftypes\u002Fvue&quot; {\n  interface Vue {\n    $api: any;\n  }\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3 id=\"无法使用components别名-alias-路径\"\u003E无法使用@components别名 alias 路径\u003C\u002Fh3\u003E\n\u003Cp\u003E解决方案: 修改\u003Ccode\u003Etsconfig.json\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-json\"\u003E{\n  &quot;compilerOptions&quot;: {\n    &quot;target&quot;: &quot;esnext&quot;,\n    &quot;module&quot;: &quot;esnext&quot;,\n    &quot;strict&quot;: true,\n    &quot;jsx&quot;: &quot;preserve&quot;,\n    &quot;importHelpers&quot;: true,\n    &quot;moduleResolution&quot;: &quot;node&quot;,\n    &quot;experimentalDecorators&quot;: true,\n    &quot;esModuleInterop&quot;: true,\n    &quot;allowSyntheticDefaultImports&quot;: true,\n    &quot;sourceMap&quot;: true,\n    &quot;baseUrl&quot;: &quot;.&quot;,\n    &quot;types&quot;: [&quot;webpack-env&quot;, &quot;vuex&quot;],\n    &quot;paths&quot;: {\n      &quot;@\u002F*&quot;: [&quot;src\u002F*&quot;],\n      &quot;@\u002Fcomponents&quot;: [&quot;src\u002Fcomponents&quot;] \u002F\u002F 添加这一行\n    },\n    &quot;lib&quot;: [&quot;esnext&quot;, &quot;dom&quot;, &quot;dom.iterable&quot;, &quot;scripthost&quot;]\n  },\n  &quot;include&quot;: [&quot;src\u002F**\u002F*.ts&quot;, &quot;src\u002F**\u002F*.tsx&quot;, &quot;src\u002F**\u002F*.vue&quot;, &quot;tests\u002F**\u002F*.ts&quot;, &quot;tests\u002F**\u002F*.tsx&quot;],\n  &quot;exclude&quot;: [&quot;node_modules&quot;]\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n"}],fetch:{},mutations:void 0});