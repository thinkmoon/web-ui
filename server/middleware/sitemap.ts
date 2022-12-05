import axios from 'axios';

export default defineEventHandler(async (event) => {
  if (event.node.req.url === '/sitemap.xml') {
    const sitemap = await axios.get('http://127.0.0.1:9447/api/sitemap.xml');
    event.node.res.end(sitemap.data);
  }
});
