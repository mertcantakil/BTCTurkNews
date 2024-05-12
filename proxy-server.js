const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Firebase Hosting'e yönlendirilecek isteklerin ana endpoint'i
const API_ENDPOINT = 'https://btcturkpro-c3eb7.web.app/';

// Proxy middleware'i oluşturun
const apiProxy = createProxyMiddleware({
  target: API_ENDPOINT,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Firebase Hosting'e gelen isteklerde '/api' prefix'i kaldırılıyor
  },
});

// '/api' endpoint'i için proxy kullan
app.use('/api', apiProxy);

// Express sunucusunu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
