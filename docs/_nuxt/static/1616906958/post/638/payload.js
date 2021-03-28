__NUXT_JSONP__("/post/638", {data:[{article:"\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-12-19T14:19:05.png\" alt=\"tensorflow\"\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"安装nvidia驱动\"\u003E安装NVIDIA驱动\u003C\u002Fh2\u003E\n\u003Col\u003E\n\u003Cli\u003E\u003Cp\u003E查看显卡信息\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Eubuntu-drivers devices\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E自动安装显卡驱动\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Esudo ubuntu-drivers autoinstall\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Col start=\"3\"\u003E\n\u003Cli\u003E确认是否安装成功\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Envidia-smi\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch2 id=\"安装docker\"\u003E安装docker\u003C\u002Fh2\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdocs.docker.com\u002Finstall\u002Flinux\u002Fdocker-ce\u002Fubuntu\u002F\"\u003E安装文档\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E使用阿里源安装\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003E# step 1: 安装必要的一些系统工具\nsudo apt-get update\nsudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common\n# step 2: 安装GPG证书\ncurl -fsSL http:\u002F\u002Fmirrors.aliyun.com\u002Fdocker-ce\u002Flinux\u002Fubuntu\u002Fgpg | sudo apt-key add -\n# Step 3: 写入软件源信息\nsudo add-apt-repository &quot;deb [arch=amd64] http:\u002F\u002Fmirrors.aliyun.com\u002Fdocker-ce\u002Flinux\u002Fubuntu $(lsb_release -cs) stable&quot;\n# Step 4: 更新并安装Docker-CE\nsudo apt-get -y update\nsudo apt-get -y install docker-ce\n\n# 安装指定版本的Docker-CE:\n# Step 1: 查找Docker-CE的版本:\n# apt-cache madison docker-ce\n#   docker-ce | 17.03.1~ce-0~ubuntu-xenial | http:\u002F\u002Fmirrors.aliyun.com\u002Fdocker-ce\u002Flinux\u002Fubuntu xenial\u002Fstable amd64 Packages\n#   docker-ce | 17.03.0~ce-0~ubuntu-xenial | http:\u002F\u002Fmirrors.aliyun.com\u002Fdocker-ce\u002Flinux\u002Fubuntu xenial\u002Fstable amd64 Packages\n# Step 2: 安装指定版本的Docker-CE: (VERSION例如上面的17.03.1~ce-0~ubuntu-xenial)\n# sudo apt-get -y install docker-ce=[VERSION]\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003Etips: 由于使用的是19.10版本，暂时没有对应的源，故手动将step 3切换至19.04 \u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-bash\"\u003Esudo add-apt-repository &quot;deb [arch=amd64] http:\u002F\u002Fmirrors.aliyun.com\u002Fdocker-ce\u002Flinux\u002Fubuntu disco stable&quot;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"安装nvidia-container-toolkit\"\u003E安装NVIDIA Container Toolkit\u003C\u002Fh2\u003E\n\u003Ch3 id=\"add-the-package-repositories\"\u003EAdd the package repositories\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-shell\"\u003Edistribution=$(. \u002Fetc\u002Fos-release;echo $ID$VERSION_ID)\ncurl -s -L https:\u002F\u002Fnvidia.github.io\u002Fnvidia-docker\u002Fgpgkey | sudo apt-key add -\ncurl -s -L https:\u002F\u002Fnvidia.github.io\u002Fnvidia-docker\u002F$distribution\u002Fnvidia-docker.list | sudo tee \u002Fetc\u002Fapt\u002Fsources.list.d\u002Fnvidia-docker.list\nsudo apt-get update &amp;&amp; sudo apt-get install -y nvidia-container-toolkit\nsudo systemctl restart docker\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"测试\"\u003E测试\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-bash\"\u003Esudo docker run --gpus all -it --rm tensorflow\u002Ftensorflow:latest-gpu-py3    python -c &quot;import tensorflow as tf; print(tf.reduce_sum(tf.random.normal([1000, 1000])))&quot;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"装载工作目录至容器\"\u003E装载工作目录至容器\u003C\u002Fh2\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-bash\"\u003Edocker run --gpus all -itd --name tf --rm -v $PWD:\u002Ftmp -w \u002Ftmp tensorflow\u002Ftensorflow:latest-gpu-py3\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E以上命令在后台创建了一个支持GPU的tensorflow:latest-gpu-py3容器，将其命名为tf（方便后面容器操作），并将工作目录切换至主机当前目录。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-12-20T13:55:02.png\" alt=\"装载工作目录至tensorflow容器\"\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"参考资料\"\u003E参考资料\u003C\u002Fh2\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fblog.csdn.net\u002Fyy2yy99\u002Farticle\u002Fdetails\u002F88569589\"\u003EUbuntu 18.04 安装NVIDIA驱动 实践\u003C\u002Fa\u003E\n\u003Ca href=\"https:\u002F\u002Fwww.tensorflow.org\u002F\"\u003Etensorflow官网\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n"}],fetch:{},mutations:void 0});