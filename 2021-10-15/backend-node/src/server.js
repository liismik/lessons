const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const jwtAuth = require("./middleware/jwtAuth")
require("dotenv").config()

const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');

const app = express()

app.use(express.json());

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.use('/api/post', postRoutes);
app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
    res.send('Hello World test')
})

app.get("/secret", jwtAuth, (req, res) => {
  res.send('Secret Hello World!')
})

app.get("*", (req, res) => {
  res.send('This route does not exist')
})

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`test Server started on PORT ${PORT}`))
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })