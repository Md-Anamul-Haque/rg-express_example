import express from 'express';
import { routes } from 'rg-express';
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(express.json());

app.use(routes({
  baseDir: __dirname,
  routeGenIfEmpty: true,
}));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
