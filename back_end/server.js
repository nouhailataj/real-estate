const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3001;

mongoose.connect('mongodb://127.0.0.1:27017/databaseAdmin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);


const articleRoutes = require('./routes/articleRoutes');
app.use('/articles', articleRoutes);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
