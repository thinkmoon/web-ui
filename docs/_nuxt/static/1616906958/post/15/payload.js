__NUXT_JSONP__("/post/15", {data:[{article:"\u003Cblockquote\u003E\n\u003Cp\u003E本文实践平台：腾讯云（qcloud.com)\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E首先我们来看看腾讯云官方的解决方案示意图\n\u003Cimg src=\"https:\u002F\u002Fwww.thinkmoon.cn\u002Fusr\u002Fuploads\u002F2018\u002F12\u002F2496184131.png\" alt=\"0.png\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E看懂了吗？看没看懂都没关系我们开始走一遍就好了。大致步骤如下：\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003E 购买腾讯云微信小程序解决方案\u003C\u002Fli\u003E\n\u003Cli\u003E 部署 mysql 实例到云数据库\u003C\u002Fli\u003E\n\u003Cli\u003E 部署网站到服务器，使网站外网可访问\u003C\u002Fli\u003E\n\u003Cli\u003E 将网站与数据库连接起来\u003C\u002Fli\u003E\n\u003Cli\u003E 配置 SSL 证书，使网站可 https 访问\u003C\u002Fli\u003E\n\u003Cli\u003E 构建负载均衡，使用户可以通过负载均衡的方式访问\u003C\u002Fli\u003E\n\u003Cli\u003E 制作服务器镜像，将可成功访问的服务器复制\u003C\u002Fli\u003E\n\u003Cli\u003E 新建 N（N&gt;0)台服务器，将服务器重装为自定义镜像\u003C\u002Fli\u003E\n\u003Cli\u003E test\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003E详细如下：\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cstrong\u003E购买腾讯云微信小程序解决方案\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Col\u003E\n\u003Cli\u003E 进入腾讯云官网（\u003Ca href=\"https:\u002F\u002Fwww.qcloud.com\"\u003Ehttps:\u002F\u002Fwww.qcloud.com\u003C\u002Fa\u003E)\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003E\u003Cimg src=\"http:\u002F\u002Fmmbiz.qpic.cn\u002Fmmbiz_png\u002FsnMia4gXEkc0qunE7hIzVaWicvcdDTdqT81w3Mv9yBTGgmSvKcBju1uadFd3HxkIsmC3JStepdwjwJ1Q8owjzybw\u002F0?wx_fmt=png\" alt=\"\"\u003E\u003C\u002Fp\u003E\n\u003Col start=\"2\"\u003E\n\u003Cli\u003E选择解决方案&gt;微信小程序解决方案\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003E\u003Cimg src=\"http:\u002F\u002Fmmbiz.qpic.cn\u002Fmmbiz_png\u002FsnMia4gXEkc0qunE7hIzVaWicvcdDTdqT8ViaAk15f8kAEyhAJuTfIr9vltggTKgXo39qmF5JBvnM8PFEhngfzODg\u002F0?wx_fmt=png\" alt=\"\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E就选择 3 元新购活动吧，我已经购买过了，就不再这儿演示怎么购买了。 \n3. 购买成功之后腾讯云会下发资源。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"http:\u002F\u002Fmmbiz.qpic.cn\u002Fmmbiz_png\u002FsnMia4gXEkc0qunE7hIzVaWicvcdDTdqT8Kb5lBHGuphzvRAX6CEqiayoPW51UTINIaDswGyfGqWRV9xF2oPWGO9w\u002F0?wx_fmt=png\" alt=\"\"\u003E\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003Esucceed：此过程成功标志为资源下发成功，以及收到如下站内信。\n\u003Cimg src=\"http:\u002F\u002Fmmbiz.qpic.cn\u002Fmmbiz_png\u002FsnMia4gXEkc0qunE7hIzVaWicvcdDTdqT8RVq3z8fPKpnGYa1qc0FBx5HpXxQVlNV0Uodz9kkibrEJfWl86GqgWRg\u002F0?wx_fmt=png\" alt=\"\"\u003E\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cstrong\u003E部署 mysql 实例到云数据库\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Chr\u003E\n\u003Cp\u003E\u003Cimg src=\"http:\u002F\u002Fmmbiz.qpic.cn\u002Fmmbiz_png\u002FsnMia4gXEkc0qunE7hIzVaWicvcdDTdqT8DyOIhBzvCORgORmgwG4fGAYTkaxHfQcQgkFpajkyXSNlNhQ2MSsRNA\u002F0?wx_fmt=png\" alt=\"\"\u003E\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003E 根据上图所提供的地址，使用数据库连接工具（如 Navicat）连接数据库进行数据传输。_\n\u003Cimg src=\"http:\u002F\u002Fmmbiz.qpic.cn\u002Fmmbiz_png\u002FsnMia4gXEkc0qunE7hIzVaWicvcdDTdqT8qbsBibSriaB8fI7XcO5URGINWEiceic9wFVDX10bQHzK2m1s0tcyBeIqww\u002F0?wx_fmt=png\" alt=\"\"\u003E \u003C\u002Fli\u003E\n\u003Cli\u003E数据传输_\n\u003Cimg src=\"http:\u002F\u002Fmmbiz.qpic.cn\u002Fmmbiz_png\u002FsnMia4gXEkc0qunE7hIzVaWicvcdDTdqT8gaORVyxXSoAibF5uR0nTCP6NtxdzBTUGcWVgjTaVpDOl4JInyyjm8PA\u002F0?wx_fmt=png\" alt=\"\"\u003E\u003Cblockquote\u003E\n\u003Cp\u003Esucceed：此过程的成功标志为，在远程数据库中可查看到相应的表和数据\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cstrong\u003E部署网站到服务器，使网站外网可访问\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Col\u003E\n\u003Cli\u003E 首先我们对腾讯云下发的 demo 服务器进行重装系统（精神洁癖，不重装不舒服）_\u003Cblockquote\u003E\n\u003Cp\u003E\u003Cem\u003E注:不重装的话，网站的根目录在\u002Fdata\u002Frelease\u002Fphp_weapp_demo\u003C\u002Fem\u003E &gt; _ &gt; * &gt; ** &gt; \u003Cimg src=\"http:\u002F\u002Fmmbiz.qpic.cn\u002Fmmbiz_png\u002FsnMia4gXEkc0qunE7hIzVaWicvcdDTdqT8XAaD0icW796pZ17iccHBr3UtfQ7xcWLRzLMbledO0iaxtKISV0eehT3Qw\u002F0?wx_fmt=png\" alt=\"\"\u003E &gt; **\n我这儿装的是 centOS 6.5。版本不同可能会对应的软件安装方式不同。 2.*为服务器安装 apache_ #安装 apache\nroot@localhost ~]# yum -y install httpd\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch1 id=\"开机自启动\"\u003E开机自启动\u003C\u002Fh1\u003E\n\u003Cp\u003E[root@localhost ~]# chkconfig httpd on\u003C\u002Fp\u003E\n\u003Ch1 id=\"启动-httpd-服务\"\u003E启动 httpd 服务\u003C\u002Fh1\u003E\n\u003Cp\u003E[root@localhost ~]# service httpd start\u003C\u002Fp\u003E\n\u003Ch3 id=\"安装-apache-一些扩展\"\u003E安装 apache 一些扩展\u003C\u002Fh3\u003E\n\u003Cp\u003Eroot@localhost ~]# yum -y install httpd-manual mod_ssl mod_perl mod_auth_mysql\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003Esucceed：此步骤成功标志为访问\u003Ca href=\"http:\u002F\u002Flocalhost\"\u003Ehttp:\u002F\u002Flocalhost\u003C\u002Fa\u003E  或 http:\u002F\u002F本机IP  ，应该会看到 Apache 的测试页面\u003C\u002Fp\u003E\n\u003Cp\u003E这里需要注意 iptables 的设置哦。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"http:\u002F\u002Fmmbiz.qpic.cn\u002Fmmbiz_png\u002FsnMia4gXEkc0qunE7hIzVaWicvcdDTdqT871Nw7tFgLxAUBJ7IB2hO0ekbdHa62nickEEHURhxPUHqpKMRR9UOnng\u002F0?wx_fmt=png\" alt=\"\"\u003E \u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch3 id=\"安装-phprootlocalhost--yum--y-install-php-php-mysql\"\u003E安装 php[root@localhost ~]# yum -y install php php-mysql\u003C\u002Fh3\u003E\n\u003Ch3 id=\"安装-php-常用扩展\"\u003E安装 php 常用扩展\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003E[root@localhost ~]# yum search php\n[root@localhost ~]# yum -y install gd php-gd gd-devel php-xml php-common php-mbstring php-ldap php-pear php-xmlrpc php-imap\n ### 重启 httpd 服务，这一步很重要\n[root@localhost ~]# service httpd restart\n然后，我们提供 php 页面，测试\n[root@localhost ~]# cd \u002Fvar\u002Fwww\u002Fhtml\u002F\n[root@localhost html]# vi index.php\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cpre\u003E\u003Ccode\u003E&lt;?php\n    phpinfo();\n&lt;php&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003Esucceed：此步骤成功标志为,出现传说中的 phpinfo()界面\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"http:\u002F\u002Fmmbiz.qpic.cn\u002Fmmbiz_png\u002FsnMia4gXEkc0qunE7hIzVaWicvcdDTdqT83PHV8PEhKTO5YqhMTKdLhQsKfv1WYelrev4eMPqwKkgZ6vbfImcjAA\u002F0?wx_fmt=png\" alt=\"\"\u003E\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E后记：不知不觉，已经写了有这么多了！本来想一篇写完的，看了一下可能篇幅实在是太长了。先这样吧。敬请期待下一篇吧！\u003C\u002Fp\u003E\n\u003Cp\u003E到了这步的时候，你只需要把网站源代码（例如博客，或者自己开发的网站）上传到目录\u002Fvar\u002Fwww\u002Fhtml\u002F就好了。windows 操作系统可以利用工具（如 winscp）上传。觉得有用的就点赞收藏一下吧。谢谢大家的支持。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n"}],fetch:{},mutations:void 0});