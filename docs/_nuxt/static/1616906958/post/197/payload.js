__NUXT_JSONP__("/post/197", {data:[{article:"\u003Cp\u003E所有的路口标号用\u003Ccode\u003Eint road[8]\u003C\u002Fcode\u003E表示，\n用\u003Ccode\u003Ebool status[8][8]\u003C\u002Fcode\u003E表示道路可否通行。\u003C\u002Fp\u003E\n\u003Ch2 id=\"t字路口\"\u003ET字路口\u003C\u002Fh2\u003E\n\u003Chr\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fwww.thinkmoon.cn\u002Fusr\u002Fuploads\u002F2019\u002F02\u002F691429959.png\" alt=\"T路口.png\"\u003E\n对于T字路口，将道路分为（左，右，下）三个流量出入口，存在的状态有：\u003C\u002Fp\u003E\n\u003Ch3 id=\"0--全红特殊状态应对突发事故）\"\u003E0.  全红(特殊状态应对突发事故）\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-C++\"\u003E     for (int i = 0; i &lt; 8; i++) {\n        for (int j = 0; j &lt; 8; j++) {\n            status[i][j] = false;\n        }\n    }\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E×|0|1|2|3|4|5\n:--: | :--: | :--: | :--: | :--: | :--: |\n0|×|×|×|×|×|×\n1|×|×|×|×|×|×\n2|×|×|×|×|×|×\n3|×|×|×|×|×|×\n4|×|×|×|×|×|×\n5|×|×|×|×|×|×\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E正常状态下考虑红灯可右转，同向变道不受交通灯控制，即永远可通行\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-C++\"\u003Estatus[2][1] = status[4][3] = true;\nstatus[0][1] = status[2][3] = status[4][5] = true;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E×|0|1|2|3|4|5\n:--: | :--: | :--: | :--: | :--: | :--: |\n0||@||||\n1||||||\n2||@||@||\n3||||||\n4||||@||@\n5||||||\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E同时需要限制逆行，即永远不可通行\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-C++\"\u003E\u002F\u002F 出口不能自转和变道\nstatus[0][0] = status[0][2]  = status[0][4]  = false;\nstatus[4][4] = status[4][0]  = status[4][2]  = false;\nstatus[2][2] = status[2][0]  = status[2][4]  = false;\n\u002F\u002F 出口不能进去\nstatus[1][0] =status[1][4]  = status[1][2] = status[1][3]   = status[1][4] = status[1][5] = false;\nstatus[3][0] =status[3][5]  = status[3][2] = status[3][3]   = status[3][4] = status[3][5] = false;\nstatus[5][0] =status[5][6]  = status[5][2] = status[5][3]   = status[5][4] = status[5][5] = false;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E×|0|1|2|3|4|5\n:--: | :--: | :--: | :--: | :--: | :--: |\n0|×|@|×||×|\n1|×|×|×|×|×|×\n2|×|@|×|@|×|\n3|×|×|×|×|×|×\n4|×||×|@|×|@\n5|×|×|×|×|×|×\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E对以上情况封装，即init()。后续应禁止对上值做任何改变。\n即还有6*6-5-9-18=4个值\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-C++\"\u003Estatus[0][5],status[4][7],\nstatus[2][5],status[0][3],\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cimg src=\"https:\u002F\u002Fblog.thinkmoon.cn\u002Fimages\u002F1536936610096.png\" width = \"400\" height = \"400\" alt=\"道路方向\" align=center \u002F\u003E\n\n\u003Ch3 id=\"调控状态代码如下\"\u003E调控状态代码如下\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-C++\"\u003Ecase 3:\n            if (emStatus % 4 == 0) {\n                status[0][5]=status[4][1]=1;\n                status[2][5]=status[0][3]=0;\n            } else if (emStatus % 4 == 1) {\n                status[0][5]=status[0][3]=1;\n                status[4][1]=status[2][5]=0;\n            } else {\n                status[0][5]=status[2][5]=1;\n                status[4][1]=status[0][3]=0;\n            }\n            break;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E解析如下\u003C\u002Fp\u003E\n\u003Ch3 id=\"1-对边可通行（限制0左转，限制2左转）\"\u003E1. 对边可通行（限制0左转，限制2左转）\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-C++\"\u003Estatus[0][5]=status[4][1]=1;\nstatus[2][5]=status[0][3]=0;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3 id=\"2-疏通右侧\"\u003E2. 疏通右侧\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-C++\"\u003Estatus[0][5]=status[0][3]=true;\nstatus[4][9]=status[2][5]=false;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3 id=\"3-导向左侧\"\u003E3. 导向左侧\u003C\u002Fh3\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-C++\"\u003Estatus[0][5]=status[2][5]=1;\nstatus[4][1]=status[0][3]=0;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch2 id=\"字路口\"\u003E+字路口\u003C\u002Fh2\u003E\n\u003Chr\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fwww.thinkmoon.cn\u002Fusr\u002Fuploads\u002F2019\u002F02\u002F1273565838.png\" alt=\"+路口.png\"\u003E\n对于+字路口，将道路分为（左，右，上，下）四个流量出入口，存在的状态有：\u003C\u002Fp\u003E\n\u003Ch3 id=\"0--全红同上）\"\u003E0.  全红(同上）\u003C\u002Fh3\u003E\n\u003Cp\u003E×|0|1|2|3|4|5|6|7\n:--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |\n0|×|×|×|×|×|×|×|×\n1|×|×|×|×|×|×|×|×\n2|×|×|×|×|×|×|×|×\n3|×|×|×|×|×|×|×|×\n4|×|×|×|×|×|×|×|×\n5|×|×|×|×|×|×|×|×\n6|×|×|×|×|×|×|×|×\n7|×|×|×|×|×|×|×|×\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E同时需要限制逆行，即永远不可通行\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-c++\"\u003E\u002F\u002F 出口不能自转和变道\nstatus[0][0] = status[0][2]  = status[0][4]  = status[0][6] = false;\nstatus[2][2] = status[2][0]  = status[2][4]  = status[2][6] = false;\nstatus[4][4] = status[4][0]  = status[4][2]  = status[4][6] = false;\nstatus[6][6] = status[6][2]  = status[6][4]  = status[6][0] = false;\n\u002F\u002F 出口不能进去\nfor(int i = 0; i &lt; 8 ; i++){\n    status[1][i] = status[3][i] = status[5][i] = status[7][i] = false;\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n"}],fetch:{},mutations:void 0});