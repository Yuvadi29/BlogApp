const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 5000;
const dotenv = require('dotenv');
//DotENV path

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(console.log('Connected to Database Successfully'))
    .catch((err) => console.log(err));

app.use('/', (req, res) => {
    console.log("Main URL")
});

app.listen(port, () => {
    console.log(`Server is Running at port https://localhost:${port}`);
})