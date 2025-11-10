# Create a folder: node-console-web
# npm init -y  (optional)
# --- console app ---
# console.js
// Usage: node console.js 5 7 8  -> prints sum of numbers
const nums = process.argv.slice(2).map(Number);
const sum = nums.reduce((a, b) => a + b, 0);
console.log("Sum:", sum);

# --- web app using Node's http module ---
# web.js
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url.startsWith("/sum")) {
    const url = new URL(req.url, "http://localhost");
    const a = Number(url.searchParams.get("a") || 0);
    const b = Number(url.searchParams.get("b") || 0);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ sum: a + b }));
  } else {
    res.end("Node HTTP server running");
  }
});
server.listen(3000, () => console.log("Web: http://localhost:3000  | Try /sum?a=2&b=3"));
