const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

async function startServer() {
  try {
    const { getCollections } = require('./utils/database/collections');
    const collections = await getCollections();
    app.locals.collections = collections;

    const productRoutes = require('./routes/productRoute');
    app.use('/api/products', productRoutes);

    const courseRoutes = require('./routes/courseRoute');
    app.use('/api/courses', courseRoutes);

    const programRoutes = require('./routes/programRoute');
    app.use('/api/programs', programRoutes);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    }).on('error', (error) => {
      console.error('Error starting server:', error);
      process.exit(1);
    });
  } catch (error) {
    console.error('Error initializing server:', error);
    process.exit(1);
  }
}

startServer();