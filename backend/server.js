// backend/server.js
import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Development mode — proxy to Vite
if (NODE_ENV === 'development') {
  const viteProxy = createProxyMiddleware({
    target: 'http://localhost:8080',
    changeOrigin: true,
    ws: true,
    logLevel: 'debug',
  });

  // Proxy everything except API to Vite dev server
  app.use((req, res, next) => {
    if (!req.path.startsWith('/api')) {
      viteProxy(req, res, next);
    } else {
      next();
    }
  });
}

// Production mode — serve static files
if (NODE_ENV === 'production') {
  const distPath = join(__dirname, '../dist');
  app.use(express.static(distPath));

  // Handle SPA routing (anything not /api/* goes to index.html)
  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(join(distPath, 'index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT} in ${NODE_ENV} mode`);
});
