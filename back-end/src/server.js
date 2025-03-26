import app from './app';

const mongoose = require('mongoose');

mongoose.connect(process.env.url_db)
  .then(() => {
    console.log('Conectei a base de dados');
  });

// const port = 3001;
// app.listen(port, () => {
//   console.log();
//   console.log(`Escutando na porta ${port}`);
//   console.log(`CTRL + Clique em http://localhost:${port}`);
// });
app.listen(process.env.APP_PORT);
