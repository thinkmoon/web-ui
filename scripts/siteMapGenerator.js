const fs = require('fs')
const axios = require('axios');

let sitemapArray = [];
let pageNum = 0;
let baseUrl = 'https://www.thinkmoon.cn';

async function run(current) {
  console.log('请求', current);
  let res = await axios({
    url: 'https://service.thinkmoon.cn/api/post/list',
    data: {
      current,
    },
  });
  if (sitemapArray.length === 0) {
    let total = res.data.data.total;
    pageNum = total / 10 + 1;
    for (let i = 0; i < pageNum; i++) {
      sitemapArray.push(`${baseUrl}/page/${i}`);
    }
  }
  let record = res.data.data.records;
  record.forEach(item => {
    sitemapArray.push(`${baseUrl}/post/${item.cid}`);
  });
  if (current < pageNum) {
    run(++current);
  } else {
		sitemapArray.push(`${baseUrl}/tag`)
		sitemapArray.push(`${baseUrl}/category`)
    fs.writeFile('../public/sitemap.txt', sitemapArray.join('\r\n'), err => {
      if (err) {
        console.error(err)
        return
      }
      //文件写入成功。
    })
  }
};
run(1);



