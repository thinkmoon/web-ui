import axios from 'axios';

export default async (req, res) => {
  if (req.url === '/sitemap.xml') {
    const sitemap = await axios.get('http://127.0.0.1:9447/api/sitemap.xml');
    res.end(sitemap.data);
  }
}
