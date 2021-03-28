__NUXT_JSONP__("/post/475", {data:[{article:"\u003Ch2 id=\"what-is-machine-learning\"\u003EWhat is Machine Learning?\u003C\u002Fh2\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E\u003Cstrong\u003ETwo definitions of Machine Learning are offered.\u003C\u002Fstrong\u003E \u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Col\u003E\n\u003Cli\u003EArthur Samuel described it as: &quot;the field of study that gives computers the ability to learn without being explicitly programmed.&quot; This is an older, informal definition. \u003C\u002Fli\u003E\n\u003Cli\u003ETom Mitchell provides a more modern definition: &quot;A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E.&quot; \u003Cpre\u003E\u003Ccode\u003EExample: playing checkers.\nE = the experience of playing many games of checkers\nT = the task of playing checkers.\nP = the probability that the program will win the next game.\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\nIn general, any machine learning problem can be assigned to one of two broad classifications:\nSupervised learning and Unsupervised learning.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch2 id=\"什么是机器学习？\"\u003E什么是机器学习？\u003C\u002Fh2\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E\u003Cstrong\u003E机器学习的两个定义\u003C\u002Fstrong\u003E \u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Col\u003E\n\u003Cli\u003E\u003Ccode\u003EArthur Samuel\u003C\u002Fcode\u003E定义机器学习为: &quot;研究使计算机在无需特定明确的编程下自主学习的邻域.&quot; 这是一个很老的非正式定义 \u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003ETom Mitchell\u003C\u002Fcode\u003E提供了一个正式的定义: &quot;一个程序被认为能从经验E中学习，解决任务 T，达到 性能度量值P，当且仅当，有了经验E后，经过P评判， 程序在处理 T 时的性能有所提升。&quot; \u003Cpre\u003E\u003Ccode\u003E例如: 国际象棋.\nE = 下棋的经验\nT = 下棋的任务.\nP = 程序赢得下一场比赛的概率.\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n一般来说，任何机器学习问题都可以分为两大类:监督学习和非监督学习\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch2 id=\"有监督学习\"\u003E有监督学习\u003C\u002Fh2\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E有监督学习（Supervised learning），是一个机器学习中的方法，可以由训练资料中学到或建立一个模式（ learning model），并依此模式推测新的实例。训练资料是由输入物件（通常是向量）和预期输出所组成。函数的输出可以是一个连续的值（称为回归分析），或是预测一个分类标签（称作分类）。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch2 id=\"回归问题\"\u003E回归问题\u003C\u002Fh2\u003E\n\u003Cp\u003E这是收集到的房价与房子大小相关性的数据轴\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-11-23T13:11:57.png\" alt=\"2019-11-23T13:11:57.png\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E现在假设你有750平的房子，想要预测它能卖多少钱。那么机器学习该如何帮助你呢？它会使用这些数据试图用一条线来拟合，拟合的线可能是线性关系也可能是其他函数关系。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-11-23T13:15:53.png\" alt=\"2019-11-23T13:15:53.png\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-11-23T13:16:41.png\" alt=\"2019-11-23T13:16:41.png\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E拟合的越完美，学习算法预测的结果就越准确。而使用什么函数来拟合，就需要经验和技术。\u003C\u002Fp\u003E\n\u003Cp\u003E这就是一个简单的线性回归问题，通过已知的数据集来预测一个连续的输出值。\u003C\u002Fp\u003E\n\u003Ch2 id=\"分类问题\"\u003E分类问题\u003C\u002Fh2\u003E\n\u003Cp\u003E我们来看另一个例子，学习判断肿瘤是否为恶性的算法。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-11-23T13:23:24.png\" alt=\"2019-11-23T13:23:24.png\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E以上是肿块大小与是否为恶性肿瘤的数据图，假设一个人的肿块大小为以下位置。\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-11-23T13:25:58.png\" alt=\"2019-11-23T13:25:58.png\"\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E想知道自己的肿瘤是否为恶性肿瘤的话，学习算法会根据已知的数据对患者患恶性肿瘤的概率进行预测。我们再拓展一下，我们可以对恶性肿瘤的各种性质数据做采集，然后根据其值判断其患恶性肿瘤的概率，甚至是判断其患的是哪种类型的肿瘤。这就是有监督学习中的分类问题。\u003C\u002Fp\u003E\n\u003Ch2 id=\"supervised-learning\"\u003ESupervised Learning\u003C\u002Fh2\u003E\n\u003Cp\u003EIn supervised learning, we are given a data set and already know what our correct output should look like, having the idea that there is a relationship between the input and the output.\u003C\u002Fp\u003E\n\u003Cp\u003ESupervised learning problems are categorized into &quot;regression&quot; and &quot;classification&quot; problems. In a regression problem, we are trying to predict results within a continuous output, meaning that we are trying to map input variables to some continuous function. In a classification problem, we are instead trying to predict results in a discrete output. In other words, we are trying to map input variables into discrete categories.\u003C\u002Fp\u003E\n\u003Ch2 id=\"参考资料\"\u003E参考资料\u003C\u002Fh2\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwww.coursera.org\u002Flearn\u002Fmachine-learning\u002Flecture\u002F1VkCb\u002Fsupervised-learning\"\u003ESupervised Learning - 斯坦福大学 | Coursera\u003C\u002Fa\u003E\n\u003Ca href=\"https:\u002F\u002Fblog.csdn.net\u002Fu011067360\u002Farticle\u002Fdetails\u002F24735415\"\u003E机器学习中的有监督学习，无监督学习，半监督学习\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n"}],fetch:{},mutations:void 0});