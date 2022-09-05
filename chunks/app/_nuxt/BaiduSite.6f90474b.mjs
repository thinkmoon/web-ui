import Ad from 'axios';

const u = (o) => {
  {
    const t = "https://www.thinkmoon.cn";
    Ad.post(`http://data.zz.baidu.com/urls?site=${t}&token=CKLtHWl6TKYOJw39`, `${t}/url`).then(() => {
      console.log("[info] \u63A8\u9001\u6210\u529F:", o);
    }).catch(() => {
      console.error("[error] \u63A8\u9001\u5931\u8D25:", o);
    });
  }
};

export { u };
//# sourceMappingURL=BaiduSite.6f90474b.mjs.map
