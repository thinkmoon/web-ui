__NUXT_JSONP__("/post/129", (function(a,b){return {data:[{article:{cid:129,title:"毕业设计思路篇(三)之预加载车辆路线",slug:"129",created:1548250920,modified:1549709271,text:"\u003C!--markdown--\u003E## 1. 从文件(route.txt)中读取路径\r\n\r\n形如以下格式\r\n\r\n```\r\n0 1 \r\n0 1 2 \r\n0 1 2 3 \r\n0 1 2 3 4 \r\n0 1 2 3 4 5 \r\n0 1 2 3 4 5 6 \r\n0 1 2 3 4 5 6 7 \r\n```\r\n\r\n其中，一行表示一条可完全畅通的道路编号序列。将所有道路存入v_Route\r\n\r\n```c++\r\nvector\u003Cqueue\u003Cint\u003E\u003E v_Route;\r\n\r\n\u002F**\r\n * load route from route file\r\n * @param Map_graph\r\n *\u002F\r\nvoid loadRoute(Graph &Map_graph) {\r\n    string str_Path;\r\n    ifstream fin_Route(DIR_RES\"route.txt\");\r\n    while (getline(fin_Route, str_Path)) {\r\n        stringstream ss_Temp(str_Path);\r\n        queue\u003Cint\u003E q_Path_Temp;\r\n        int n_Temp;\r\n        while (ss_Temp \u003E\u003E n_Temp) {\r\n            q_Path_Temp.push(n_Temp);\r\n        }\r\n        v_Route.push_back(q_Path_Temp);\r\n    }\r\n}\r\n```\r\n\r\n",order:a,authorId:1,type:"post",status:"publish",commentsNum:a,allowComment:b,allowPing:b,allowFeed:b,parent:a,views:722,likes:a}}],fetch:{},mutations:void 0}}(0,"1")));