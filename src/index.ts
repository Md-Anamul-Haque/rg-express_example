import express from 'express';
import rg from 'rg-express';
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(rg.routes(__dirname));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
