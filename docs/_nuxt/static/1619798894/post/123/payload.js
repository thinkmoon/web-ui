__NUXT_JSONP__("/post/123", (function(a,b,c){return {data:[{article:{cid:123,title:"微信小程序svg转canvas",slug:"123",created:1529463840,modified:1548079672,text:"\u003C!--markdown--\u003E\u003E \u003E首先，为什么我们需要这个？\r\n\u003E \r\n\u003E 因为微信小程序虽然可以可以绘制svg图片，但是在真机调试的时候却渲染不出来。所以我们需要一个工具(可以将svg转成微信小程序支持的canvas并绘制出来)。\r\n\r\n我使用的是touch-wx + vs code 开发。\r\n\r\n\u003E 现已启用该开发模式.因为Ubuntu下经常编译不完整\r\n\r\n## Touch WX 是什么？\r\n\r\n![Touch WX](https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002FTIM%E6%88%AA%E5%9B%BE20180620111841.png)\r\n\r\nTouch WX是一套完全免费的微信小程序开发框架，包含丰富的UI控件用于官方组件的补充。与Touch UI开发方式很相似，也是通过VSCode编辑器+插件的方式开发，经过编译后输出小程序代码。\r\n与其他小程序框架最主要的区别在于：Touch UI完全是基于小程序官方的自定义组件机制实现，输出的是小程序原始代码，而不是输出开发者完全无法阅读的编译代码。这样当遇到问题时，开发者可以很方便的定位问题所在，还可以基于输出的原始代码继续开发。\r\n当你用Touch UI开发了H5应用，可以直接导入到Touch WX进行转换，稍作调整就能生成小程序。反之也同样，当你Touch WX开发了微信小程序，可以导出为Touch UI工程来生成H5应用。\r\n\r\n## Touch WX 的特点\r\n\r\n![Touch WX](https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002FTIM%E6%88%AA%E5%9B%BE20180620111451.png)\r\n\r\n### 我的理解\r\n\r\n\u003E Touch WX 就是一个可以将特定的nodejs项目编译成微信小程序项目的框架\r\n\r\n### Touch WX更多操作\r\n\r\n\u003E 更多操作见http:\u002F\u002Fwww.touchui.io\u002Ftouchui_doc_wx\u002F\r\n\r\n推荐大家看一下，或许会打开新世界的大门哦！\r\n\r\n\u003E 接下来，我默认你已经看了Touch WX的文档，并且拥有一定的nodejs基础\r\n\r\n## 开始流程\r\n\r\n### 安装parse-svg-path\r\n\r\n\u003E `npm install parse-svg-path --save`\r\n\r\n### 引入parse-svg-path\r\n\r\n\u003E `var parse = require('parse-svg-path')`\r\n\r\n### 使用parse-svg-path\r\n\r\n\u003E `parse(d)`\r\n\r\n`d`为svg中的path值\r\n\r\n\u003E \u003E不了解svg？\r\n\u003E \r\n\u003E 请转`http:\u002F\u002Fwww.w3school.com.cn\u002Fsvg\u002Fsvg_intro.asp`\r\n\r\n## 如何获得path值？\r\n```JavaScript\r\nvar options = {\r\n            url:\"svg的URL\",\r\n            success:function(res){\r\n              const ctx = wx.createCanvasContext('myCanvas')\r\n              ctx.setFillStyle('black')\r\n              var match = res.data.match(\u002Fd=\"(.*?)\"\u002F);\r\n              var d = match[1];\r\n              console.log(d);\r\n            }\r\n    }\r\n    wx.request(options); \r\n```\r\n\u003E 上图中d就是path值，我这里使用的是正则表达式查找，而且只有一个path，如不一样，请自行modify\r\n\r\n## 解析后的值\r\n```JavaScript\r\nconsole.log(parse(d));\r\n```\r\n![效果展示](https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002FTIM%E6%88%AA%E5%9B%BE20180620113452.png)\r\n\r\n\u003E 解析之后是一系列的操作序列数组\r\n\r\n## 绘制图形\r\n\r\n\u003E 根据一系列的操作，找到对应的微信小程序绘制API，进行绘制\r\n```JavaScript\r\nparse(d).forEach(function (element){\r\n                if(element[0] == \"M\"){\r\n                  ctx.moveTo(element[1], element[2])\r\n                }else if(element[0] == \"Q\"){\r\n                  ctx.quadraticCurveTo(element[1], element[2], element[3], element[4])\r\n                }\r\n              });\r\n```\r\n\r\n\u003E 因为我这里只有M，Q操作所以我只用了两个API，可根据实际情况自行拓展\r\n\r\n## 实例代码\r\n`display.wx`\r\n```JavaScript\r\n\u003Ctemplate\u003E\r\n  \u003Cview class='page'\u003E\r\n    \u003Ccanvas canvas-id=\"myCanvas\" style=\"border: 1px solid;\"\u002F\u003E\r\n    \u003C!-- \u003Cview class='content'\u003E\u003Ctext class=\"zhuan\" style=\"font-size:{{fontSize}}pt\"\u003E{{display}}\u003C\u002Ftext\u003E --\u003E\r\n  \u003C!-- \u003C\u002Fview\u003E --\u003E\r\n\u003C\u002Fview\u003E\r\n\u003C\u002Ftemplate\u003E\r\n\r\n\u003Cscript\u003E\r\nvar parse = require('parse-svg-path')\r\nexport default {\r\n  config: {\r\n    navigationBarTitleText: '效果展示'\r\n  },\r\n  data: {},\r\n  onLoad: function (options) {\r\n    var str = options.display;\r\n    if(str != null){\r\n      try {\r\n        str=decodeURI(str);\r\n        wx.setStorageSync('display', str)\r\n        console.log(\"接受到的str：\"+str);\r\n      } catch (e) {\r\n        console.log(\"设置diaplay值错误\")\r\n      }\r\n    }  \r\n  },\r\n\r\n  \u002F**\r\n   * 生命周期函数--监听页面初次渲染完成\r\n   *\u002F\r\n  onReady: function () {\r\n  \r\n  },\r\n  saveTemp(){\r\n    console.log(\"fdsaf\");\r\n    wx.canvasToTempFilePath({\r\n      canvasId: 'myCanvas',\r\n      fail: function(res) {\r\n        console.log(res);\r\n      },\r\n      success: function(res) {\r\n        console.log(res.tempFilePath)\r\n        setTimeout(function(){wx.saveImageToPhotosAlbum({\r\n          filePath:res.tempFilePath,\r\n          fail:function(res){\r\n            console.log(res);\r\n          }\r\n          \r\n          });},5000)\r\n        \r\n      },\r\n       \r\n    })\r\n  },\r\n  \u002F**\r\n   * 生命周期函数--监听页面显示\r\n   *\u002F\r\n  onShow: function () {\r\n    var that = this;\r\n    \r\n    var options = {\r\n            url:\"http:\u002F\u002Fmp.thinkmoon.cn:39999?str=我&site=0\",\r\n            success:function(res){\r\n              const ctx = wx.createCanvasContext('myCanvas')\r\n              ctx.setFillStyle('black')\r\n              var match = res.data.match(\u002Fd=\"(.*?)\"\u002F);\r\n              var d = match[1];\r\n              console.log(parse(d))\r\n              parse(d).forEach(function (element){\r\n                if(element[0] == \"M\"){\r\n                  ctx.moveTo(element[1], element[2])\r\n                }else if(element[0] == \"Q\"){\r\n                  ctx.quadraticCurveTo(element[1], element[2], element[3], element[4])\r\n                }\r\n              });\r\n              ctx.fill();\r\n              ctx.draw(false,()=\u003E{setTimeout(() =\u003E {that.saveTemp()},5000);});\r\n            }\r\n    }\r\n    wx.request(options); \r\n    \u002F\u002F wx.getStorage({\r\n    \u002F\u002F   key: 'display',\r\n    \u002F\u002F   success: function (res) {\r\n    \u002F\u002F     console.log(\"display的值为\" + res.data)\r\n    \u002F\u002F     that.setData({\r\n    \u002F\u002F       display: res.data,\r\n    \u002F\u002F       fontSize: wx.getStorageSync('pt')\r\n    \u002F\u002F     })\r\n    \u002F\u002F   }\r\n    \u002F\u002F })\r\n  },\r\n\r\n  \u002F**\r\n   * 生命周期函数--监听页面隐藏\r\n   *\u002F\r\n  onHide: function () {\r\n  \r\n  },\r\n\r\n  \u002F**\r\n   * 生命周期函数--监听页面卸载\r\n   *\u002F\r\n  onUnload: function () {\r\n  \r\n  },\r\n\r\n  \u002F**\r\n   * 页面相关事件处理函数--监听用户下拉动作\r\n   *\u002F\r\n  onPullDownRefresh: function () {\r\n  \r\n  },\r\n\r\n  \u002F**\r\n   * 页面上拉触底事件的处理函数\r\n   *\u002F\r\n  onReachBottom: function () {\r\n  \r\n  },\r\n\r\n  \u002F**\r\n   * 用户点击右上角分享\r\n   *\u002F\r\n  onShareAppMessage: function () {\r\n    var str = this.data.display;\r\n    var pages = getCurrentPages()    \u002F\u002F获取加载的页面\r\n    var currentPage = pages[pages.length - 1]    \u002F\u002F获取当前页面的对象\r\n    var url = currentPage.route\r\n    var inUrl = url + \"?display=\" + encodeURI(str);\r\n    console.log(\"分享的链接为\"+inUrl);\r\n    return {\r\n      title: '您的好友给您分享了一段篆文',\r\n      path: inUrl,\r\n      success: function (res) {\r\n        \u002F\u002F 转发成功\r\n      },\r\n      fail: function (res) {\r\n        \u002F\u002F 转发失败\r\n      }\r\n    }\r\n  }\r\n}\r\n\u003C\u002Fscript\u003E\r\n\r\n\u003Cstyle lang=\"less\"\u003E\r\n.content{\r\n  text-align: center;\r\n}\r\ncanvas{\r\n  width: 256px;\r\n  height: 256px;\r\n}\r\n\r\n\u003C\u002Fstyle\u003E\r\n\r\n```\r\n\r\n## 后记\r\n\u003E 我这个实例本来是将svg转canvas绘制出来，再转图片，下载到本地的。但是因为draw()函数是异步的所以需要等待。才可以下载成功，否则会出现一片黑的情况，总之感觉各种麻烦。再加上画布的大小难以设置。后我还是选择在服务端生成图片再转发过来。\r\n\r\n## 参考文献\r\n1. [SVG简介](http:\u002F\u002Fwww.w3school.com.cn\u002Fsvg\u002Fsvg_intro.asp)\r\n2. [Touch WX开发文档](http:\u002F\u002Fwww.touchui.io\u002Ftouchui_doc_wx\u002F)\r\n3. [微信开发文档Canvas](https:\u002F\u002Fdevelopers.weixin.qq.com\u002Fminiprogram\u002Fdev\u002Fapi\u002Fcanvas\u002Fintro.html)",order:a,authorId:c,type:"post",status:"publish",commentsNum:a,allowComment:b,allowPing:b,allowFeed:b,parent:a,views:2161,likes:c}}],fetch:{},mutations:void 0}}(0,"1",1)));