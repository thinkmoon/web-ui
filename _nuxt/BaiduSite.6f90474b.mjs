import axios from 'axios';

const pushUrl = (url) => {
  {
    const site = "https://www.thinkmoon.cn";
    axios.post(`http://data.zz.baidu.com/urls?site=${site}&token=CKLtHWl6TKYOJw39`, `${site}/url`).then(() => {
      console.log("[info] \u63A8\u9001\u6210\u529F:", url);
    }).catch(() => {
      console.error("[error] \u63A8\u9001\u5931\u8D25:", url);
    });
  }
};

export { pushUrl as p };
//# sourceMappingURL=BaiduSite.6f90474b.mjs.map
