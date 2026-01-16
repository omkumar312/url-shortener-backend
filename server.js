import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve your built frontend
app.use(express.static("dist"));

// 🔴 Redirect handler (REPLACES .htaccess)
app.get("/:code", async (req, res, next) => {
  const { code } = req.params;

  try {
    const { data, error } = await supabase
      .from("urls")
      .select("original_url")
      .or(`short_url.eq.${code},custom_url.eq.${code}`)
      .single();

    if (!data || error) {
      return next(); // go to SPA / 404
    }

    return res.redirect(302, data.original_url);
  } catch (err) {
    return next();
  }
});

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
