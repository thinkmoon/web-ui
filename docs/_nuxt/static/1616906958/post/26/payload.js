__NUXT_JSONP__("/post/26", {data:[{article:"\u003Ch2 id=\"1-安装chrome\"\u003E1. 安装chrome\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Esudo wget http:\u002F\u002Fwww.linuxidc.com\u002Ffiles\u002Frepo\u002Fgoogle-chrome.list -P \u002Fetc\u002Fapt\u002Fsources.list.d\u002F\nwget -q -O - https:\u002F\u002Fdl.google.com\u002Flinux\u002Flinux_signing_key.pub  | sudo apt-key add -\nsudo apt update\nsudo apt install google-chrome-stable\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E19年12月18日：现在觉得火狐也不错\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch2 id=\"2-安装shadowsocks\"\u003E2. 安装Shadowsocks\u003C\u002Fh2\u003E\n\u003Cp\u003E不然美化界面太慢了\u003C\u002Fp\u003E\n\u003Ch2 id=\"3-美化界面参考链接\"\u003E3. 美化界面\u003Ca href=\"https:\u002F\u002Fwww.cnblogs.com\u002Ffeipeng8848\u002Fp\u002F8970556.html\"\u003E参考链接\u003C\u002Fa\u003E\u003C\u002Fh2\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E安装工具\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Esudo apt-get update\nsudo apt-get install gnome-tweak-tool\nsudo apt-get install gnome-shell-extensions\nsudo apt-get install  gnome-shell-extension-dashtodock\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fwww.thinkmoon.cn\u002Fusr\u002Fuploads\u002F2018\u002F12\u002F3369720455.png\" alt=\"2018-12-24 14-21-29 的屏幕截图.png\"\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"3-安装搜狗输入法ubuntu-1804-lts-安装搜狗输入法\"\u003E3. 安装搜狗输入法\u003Ca href=\"https:\u002F\u002Fwww.jianshu.com\u002Fp\u002Fc936a8a2180e\"\u003Eubuntu 18.04 LTS 安装搜狗输入法\u003C\u002Fa\u003E\u003C\u002Fh2\u003E\n\u003Cp\u003E实在是不喜欢默认输入法\u003C\u002Fp\u003E\n\u003Ch2 id=\"4-换阿里源\"\u003E4. 换阿里源\u003C\u002Fh2\u003E\n\u003Ch3 id=\"1-先备份源\"\u003E1. 先备份源\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode\u003Esudo cp \u002Fetc\u002Fapt\u002Fsources.list \u002Fetc\u002Fapt\u002Fsources.list.bak\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3 id=\"2-删除原文件\"\u003E2. 删除原文件\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode\u003Esudo rm -f \u002Fetc\u002Fapt\u002Fsources.list\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3 id=\"3-新建源文件\"\u003E3. 新建源文件\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode\u003Esudo vi \u002Fetc\u002Fapt\u002Fsources.list\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3 id=\"4-添加内容\"\u003E4. 添加内容\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-vim\"\u003Edeb http:\u002F\u002Fmirrors.aliyun.com\u002Fubuntu\u002F bionic main restricted universe multiverse\ndeb-src http:\u002F\u002Fmirrors.aliyun.com\u002Fubuntu\u002F bionic main restricted universe multiverse\ndeb http:\u002F\u002Fmirrors.aliyun.com\u002Fubuntu\u002F bionic-security main restricted universe multiverse\ndeb-src http:\u002F\u002Fmirrors.aliyun.com\u002Fubuntu\u002F bionic-security main restricted universe multiverse\ndeb http:\u002F\u002Fmirrors.aliyun.com\u002Fubuntu\u002F bionic-updates main restricted universe multiverse\ndeb-src http:\u002F\u002Fmirrors.aliyun.com\u002Fubuntu\u002F bionic-updates main restricted universe multiverse\ndeb http:\u002F\u002Fmirrors.aliyun.com\u002Fubuntu\u002F bionic-backports main restricted universe multiverse\ndeb-src http:\u002F\u002Fmirrors.aliyun.com\u002Fubuntu\u002F bionic-backports main restricted universe multiverse\ndeb http:\u002F\u002Fmirrors.aliyun.com\u002Fubuntu\u002F bionic-proposed main restricted universe multiverse\ndeb-src http:\u002F\u002Fmirrors.aliyun.com\u002Fubuntu\u002F bionic-proposed main restricted universe multiverse\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fwww.thinkmoon.cn\u002Fusr\u002Fuploads\u002F2019\u002F03\u002F3073265614.png\" alt=\"2019-03-28T03:03:08.png\"\u003E\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E其中\u003Ccode\u003Ebionic\u003C\u002Fcode\u003E是系统版本代号，可使用\u003Ccode\u003Elsb_release -cs\u003C\u002Fcode\u003E查询，添加内容时需要更换为对应的版本代号\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-12-18T06:29:35.png\" alt=\"查看ubuntu系统版本代号\"\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"5-安装v2ray\"\u003E5. 安装V2ray\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Esudo bash &lt; &lt;( curl -L -s https:\u002F\u002Finstall.direct\u002Fgo.sh)\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3 id=\"配置\"\u003E配置\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Egedit \u002Fetc\u002Fv2ray\u002Fconfig.json\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E修改内容\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-json\"\u003E{\n  &quot;log&quot;: {\n    &quot;loglevel&quot;: &quot;info&quot;\n  },\n  &quot;inbounds&quot;: [\n    {\n      &quot;port&quot;: 1080,\n      &quot;protocol&quot;: &quot;socks&quot;,\n      &quot;sniffing&quot;: {\n        &quot;enabled&quot;: true,\n        &quot;destOverride&quot;: [\n          &quot;http&quot;,\n          &quot;tls&quot;\n        ]\n      },\n      &quot;settings&quot;: {\n        &quot;udp&quot;: true \u002F\u002F 开启 UDP 协议支持\n      }\n    },\n    {\n      &quot;port&quot;: 8080,\n      &quot;protocol&quot;: &quot;http&quot;,\n      &quot;sniffing&quot;: {\n        &quot;enabled&quot;: true,\n        &quot;destOverride&quot;: [\n          &quot;http&quot;,\n          &quot;tls&quot;\n        ]\n      }\n    }\n  ],\n  &quot;outbounds&quot;: [\n    {\n      &quot;tag&quot;: &quot;proxy-vmess&quot;,\n      &quot;protocol&quot;: &quot;vmess&quot;,\n      &quot;settings&quot;: {\n        &quot;vnext&quot;: [\n          {\n            &quot;address&quot;: &quot;8.8.8.8&quot;, \u002F\u002F 服务器的 IP\n            &quot;port&quot;: 443, \u002F\u002F 服务器的端口\n            &quot;users&quot;: [\n              {\n                \u002F\u002F id 就是 UUID，相当于用户密码\n                &quot;id&quot;: &quot;7d4c4078-e129-416b-a483-cf5713a96a66&quot;,\n                &quot;alterId&quot;: 4\n              }\n            ]\n          }\n        ]\n      }\n    },\n    {\n      &quot;tag&quot;: &quot;direct&quot;,\n      &quot;settings&quot;: {},\n      &quot;protocol&quot;: &quot;freedom&quot;\n    }\n  ],\n  &quot;dns&quot;: {\n    &quot;server&quot;: [\n      &quot;8.8.8.8&quot;,\n      &quot;1.1.1.1&quot;\n    ],\n    \u002F\u002F 你的 IP 地址，用于 DNS 解析离你最快的 CDN\n    &quot;clientIp&quot;: &quot;203.208.40.63&quot;\n  },\n  \u002F\u002F 配置路由功能，绕过局域网和中国大陆地址\n  &quot;routing&quot;: {\n    &quot;domainStrategy&quot;: &quot;IPOnDemand&quot;,\n    &quot;rules&quot;: [\n      {\n        &quot;type&quot;: &quot;field&quot;,\n        &quot;domain&quot;: [\n          \u002F\u002F 默认跳过国内网站，如果想要代理某个国内网站可以添加到下列列表中\n          &quot;cnblogs.com&quot;\n        ],\n        &quot;outboundTag&quot;: &quot;proxy-vmess&quot;\n      },\n      {\n        &quot;type&quot;: &quot;field&quot;,\n        &quot;domain&quot;: [\n          &quot;geosite:cn&quot;\n        ],\n        &quot;outboundTag&quot;: &quot;direct&quot;\n      },\n      {\n        &quot;type&quot;: &quot;field&quot;,\n        &quot;outboundTag&quot;: &quot;direct&quot;,\n        &quot;ip&quot;: [\n          &quot;geoip:cn&quot;,\n          &quot;geoip:private&quot;\n        ]\n      }\n    ]\n  }\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"运行\"\u003E运行\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-bash\"\u003Esystemctl start v2ray\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n"}],fetch:{},mutations:void 0});