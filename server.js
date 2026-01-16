import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve your built frontend
app.use(express.static("dist"));

// 🔴 THIS REPLACES .htaccess
app.get("/:code", (req, res, next) => {
  const { code } = req.params;

  // example redirect (replace with Supabase later)
  if (code === "gsh") {
    return res.redirect(302, "https://google.com");
  }

  next();
});

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
