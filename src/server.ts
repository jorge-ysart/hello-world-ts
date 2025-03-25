import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// 👉 Equivalente a __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

app.get("/app1", (req, res) => {
    res.setHeader("Content-Type", "text/html");
  
    let headersHtml = "<h1>HTTP Headers Received</h1><ul>";
  
    for (const [key, value] of Object.entries(req.headers)) {
      headersHtml += `<li><strong>${key}:</strong> ${value}</li>`;
    }
  
    headersHtml += "</ul>";
  
    res.send(headersHtml);
  });