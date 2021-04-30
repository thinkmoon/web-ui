__NUXT_JSONP__("/post/692", (function(a,b){return {data:[{article:{cid:692,title:"Vscode无缝连接docker支持与主机文件同步",slug:"692",created:1576893480,modified:1577951168,text:"\u003C!--markdown--\u003E## 为什么需要？\r\n我们在上一篇[Ubuntu深度学习的相关配置](https:\u002F\u002Fwww.thinkmoon.cn\u002F20191213\u002Fcid=638.html)中最后讲到，将工作目录下的文件装载到了容器之下，这样我们在主机中编写一个文件，如`tf.py`。在容器中执行，需要输入以下命令。\r\n```bash\r\ndocker exec tf python '.\u002Ftf.py' \r\n```\r\n这样每改一下文件，想要看效果的话，就需要输入以上命令。而且，还不方便调试。然后，我就在想能不能做到像我平常写代码那样，在VScode中，点一下就运行，而且可以调试呢？于是便有了本文。\r\n\r\n## 准备工作\r\n- 安装好VScode并且保证互联网连接正常。然后将工作目录装载到容器的`\u002Froot\u002FProject`目录下，不然`\u002Ftmp`的文件实在是太乱七八糟了。\r\n```bash\r\ndocker run --gpus all -itd --name tf --rm -v ~\u002FProject:\u002Froot\u002FProject  tensorflow\u002Ftensorflow:latest-gpu-py3\r\n```\r\n\r\n## 操作流程\r\n首先安装两个插件`docker`和`Remote Development`\r\n\r\n![VScode的docker插件][1]\r\n\r\n上图中可以看到tensorflow的容器已经处于运行中了，然后再打开`Remote Development`\r\n\r\n![Remote Development][2]\r\n\r\n显示有一个容器待连接，然后选择它，打开容器中的`Project`文件夹\r\n\r\n![VScode in Container][3]\r\n\r\n然后安装Python插件和调试工具，修改tf.py文件\r\n\r\n```python\r\nimport tensorflow as tf\r\nprint(\"hello tensorflow\")\r\n```\r\n点击右边的运行图标，成功输出。\r\n\r\n![run tensorflow][4]\r\n\r\n打开主机文件\r\n\r\n![docker主机文件同步][5]\r\n\r\n发现修改也已经同步，Over，现在可以愉快的写代码了。\r\n\r\n\r\n  [1]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-12-21T01:29:10.png\r\n  [2]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-12-21T01:31:51.png\r\n  [3]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-12-21T01:33:55.png\r\n  [4]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-12-21T01:55:11.png\r\n  [5]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-12-21T01:55:50.png",order:b,authorId:1,type:"post",status:"publish",commentsNum:2,allowComment:a,allowPing:a,allowFeed:a,parent:b,views:1155,likes:4}}],fetch:{},mutations:void 0}}("1",0)));