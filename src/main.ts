import express from 'express';
import rg from 'rg-express';
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(rg.routes({
  baseDir: __dirname,
  autoSetup: true
}));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
