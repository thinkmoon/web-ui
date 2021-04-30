__NUXT_JSONP__("/post/650", (function(a,b){return {data:[{article:{cid:650,title:"Ubutnu使用问题记录贴",slug:"650",created:1576647780,modified:1576842733,text:"\u003C!--markdown--\u003E## 安装软件未满足依赖关系\r\n\r\n\u003E 安装软件curl时提示以下内容\r\n\r\n```shell\r\n下列软件包有未满足的依赖关系：\r\n curl : 依赖: libcurl4 (= 7.64.0-2ubuntu1.2) 但是 7.65.3-1ubuntu3 正要被安装\r\nE: 无法修正错误，因为您要求某些软件包保持现状，就是它们破坏了软件包间的依赖关系。\r\n```\r\n\r\n这是由于版本不符的导致的，可能是以前卸载的时候未卸载干净。所以我们需要使用`purge`选项来重新卸载一次。\r\n\r\n```shell\r\nsudo apt-get purge libcurl4\r\n```\r\n\r\n然后重新安装，解决问题！！\r\n\r\n![Ubutnu安装软件未满足依赖关系][1]\r\n\r\n\r\n## 执行bash命令提示`bash: \u002Fdev\u002Ffd\u002F63: 没有那个文件或目录`\r\n\r\n![bash: \u002Fdev\u002Ffd\u002F63: 没有那个文件或目录][2]\r\n\r\n原因：`\u003C（…）`运算符称为进程替换，是运行命令的一种方式，其输出进入匿名管道。这就是\u002Fdev\u002Ffd\u002F63。其思想是允许外部命令（这里是bash）将另一个命令输出视为一个文件。通常形式是使用\u003C将伪文件对象重定向到bash的输入流中。\r\n\r\n![解决方案，使用两个`\u003C`][3]\r\n\r\n\r\n解决方案，使用两个`\u003C`\r\n\r\n## 用户不在sudo列表\r\n\r\n\u003E 别问为什么出现这个问题，，，\r\n\r\n### 解决方法\r\n1. 重启进恢复模式\r\n2. 选择root用户\r\n3. 添加用户至sudo组\r\n```bash\r\nadduser username sudo\r\n```\r\n\r\n## 系统没有设置图标\r\n![ubuntu没有设置.png][4]\r\n\u003E 天哪，为啥我的电脑老是出现些奇怪的问题。\r\n\r\n### 解决方法\r\n1. -sudo apt update-\r\n2. sudo apt  install gnome-control-center\r\n![系统修复设置][5]\r\n\r\n\r\n  [1]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-12-18T05:46:47.png\r\n  [2]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-12-18T07:27:55.png\r\n  [3]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-12-18T07:28:44.png\r\n  [4]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002Fubuntu%E6%B2%A1%E6%9C%89%E8%AE%BE%E7%BD%AE.png\r\n  [5]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-12-20T11:51:33.png",order:a,authorId:1,type:"post",status:"publish",commentsNum:a,allowComment:b,allowPing:b,allowFeed:b,parent:a,views:717,likes:3}}],fetch:{},mutations:void 0}}(0,"1")));