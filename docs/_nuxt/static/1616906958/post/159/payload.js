__NUXT_JSONP__("/post/159", {data:[{article:"\u003Chr\u003E\n\u003Cp\u003Etitle: codeigniter | codeigniter的一些笔记\ntags: codeigniter\ncategories: 笔记\nabbrlink: 15d8\ndate: 2018-04-02 13:15:42\nthumbnail:\u003C\u002Fp\u003E\n\u003Chr\u003E\n\u003Ch2 id=\"codeigniter-部署坑\"\u003Ecodeigniter 部署坑\u003C\u002Fh2\u003E\n\u003C!-- more --\u003E\n\u003Ch2 id=\"session-文件路径问题\"\u003Esession 文件路径问题\u003C\u002Fh2\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F\u002F2018-04-03-11-25-11.png\" alt=\"\"\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch3 id=\"解决方法\"\u003E解决方法\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E在application\u002Fconfig\u002Fconfig.php 中最后一行, 加入\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-php\"\u003E$config[&#39;sess_save_path&#39;] =BASEPATH.&#39;..\u002F&#39;.&#39;session_file&#39;;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F\u002F2018-04-03-11-36-47.png\" alt=\"\"\u003E\u003C\u002Fp\u003E\n\u003Ch3 id=\"原因\"\u003E原因\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E未设置ssesion文件路径,会默认使用php.ini的文件路径,可能会出现无路径访问权限的问题\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch2 id=\"baseurl-修改\"\u003Ebaseurl 修改\u003C\u002Fh2\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E要记得修改baseurl的值,以免出现访问不成功的情况\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-php\"\u003E$config[&#39;base_url&#39;] = &#39;https:\u002F\u002Fwww.farminbackyard.com&#39;;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003Epasue;\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n"}],fetch:{},mutations:void 0});