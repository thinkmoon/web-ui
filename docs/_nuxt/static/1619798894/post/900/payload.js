__NUXT_JSONP__("/post/900", (function(a,b){return {data:[{article:{cid:900,title:"js使用装饰器实现操作前二次确认询问",slug:"900",created:1596441660,modified:1600579137,text:"\u003C!--markdown--\u003E## 引言\r\n\r\n相信大家平常在开发过程中，经常会遇到此类需求。危险操作（如删除，退出登录）往往需要弹框提示给用户二次确认一下。本文介绍的是，如何使用js方法装饰器，封装二次确认弹框操作，增加小伙伴的开发效率。\r\n\r\n## 装饰器介绍\r\n\r\n![2020-08-03T08:01:10.png][1]\r\n\r\n装饰器是对类、函数、属性之类的一种装饰，可以针对其添加一些额外的行为。详细使用，自行百度！\r\n\r\n## 常规手段\r\n\r\nview\r\n\r\n```html\r\n\u003Cdiv class=\"bg-white flex justify-center\"\u003E\r\n\t\u003Cdiv class=\"btn-primary\" @click=\"clickMe\"\u003E点我\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n```\r\n\r\njs\r\n\r\n```javascript\r\nclickMe() {\r\n    uni.showModal({\r\n      title: \"点击提示\",\r\n      content: \"你确定要点我？\",\r\n      success: (res) =\u003E {\r\n        if (res.confirm) {\r\n          console.log(\"点我干啥\");\r\n        }\r\n      },\r\n    });\r\n }\r\n```\r\n\r\n效果展示\r\n\r\n![装饰器点击效果](http:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F装饰器点击效果.gif)\r\n\r\n\r\n\r\n## 装饰器写法\r\n\r\nconfirm.js\r\n\r\n```javascript\r\nfunction confirm(message: string, title: string, cancelFn = function() {}) {\r\n  return function(target: any, name: string, descriptor: any) {\r\n    const originFn = descriptor.value;\r\n    descriptor.value = function(rest: any) {\r\n      uni.showModal({\r\n        title: title,\r\n        content: message,\r\n        success: (res) =\u003E {\r\n          if (res.confirm) {\r\n            originFn.apply(this, rest);\r\n          }\r\n        },\r\n      });\r\n    };\r\n  };\r\n}\r\n```\r\n\r\nmain.js\r\n\r\n```javascript\r\n@confirm(\"你确定要点我？\",\"点击提示\")\r\n  clickMe() {\r\n    \u002F\u002F uni.showModal({\r\n    \u002F\u002F   title: \"点击提示\",\r\n    \u002F\u002F   content: \"你确定要点我？\",\r\n    \u002F\u002F   success: (res) =\u003E {\r\n    \u002F\u002F     if (res.confirm) {\r\n    \u002F\u002F       console.log(\"点我干啥\");\r\n    \u002F\u002F     }\r\n    \u002F\u002F   },\r\n    \u002F\u002F });\r\n    console.log(\"点我干啥\");\r\n  }\r\n```\r\n\r\n效果展示\r\n\r\n![装饰器点击效果](http:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F装饰器点击效果.gif)\r\n\r\n\r\n\r\n  [1]: http:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2020-08-03T08:01:10.png",order:b,authorId:1,type:"post",status:"publish",commentsNum:4,allowComment:a,allowPing:a,allowFeed:a,parent:b,views:921,likes:10}}],fetch:{},mutations:void 0}}("1",0)));