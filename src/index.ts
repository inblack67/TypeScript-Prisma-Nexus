import express from 'express';
import 'colors';

const main = async () => {
  const app = express();

  const PORT = process.env?.PORT || 5000;
  app.listen(+PORT, () => {
    console.log(`Server started on port ${PORT}`.green.bold);
  });
};

main().catch((err) => console.error(err));
