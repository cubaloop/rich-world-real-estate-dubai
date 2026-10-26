const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3088;
const PUBLIC_URL = process.env.RENDER_EXTERNAL_URL || `http://127.0.0.1:${PORT}`;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

const server = http.createServer((req, res) => {
  const urlPath = req.url.split("?")[0];

  // Mandatory Wake-Lock Endpoints (/healthz and /api/config — Rule 2.2)
  if (urlPath === "/healthz" || urlPath === "/api/config") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        status: "ok",
        service: "Rich World Real Estate Dubai",
        properties_sold_experience: "2000+",
        whatsapp: "+16479016999",
        advisor: "Akshay",
        jota_crm_compatible: true,
        timestamp: new Date().toISOString()
      })
    );
    return;
  }

  let filePath = path.join(__dirname, urlPath === "/" ? "index.html" : urlPath);
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      filePath = path.join(__dirname, "index.html");
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500);
        res.end("Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    });
  });
});

server.listen(PORT, () => {
  console.log(`[Rich World Real Estate Dubai] Live at http://127.0.0.1:${PORT}`);
});

// Mandatory 24/7 Wake-Lock Daemon (Rule 2.2: every 5 minutes)
setInterval(() => {
  http
    .get(`${PUBLIC_URL}/healthz`, res => {
      res.resume();
    })
    .on("error", () => {});
}, 5 * 60 * 1000);
