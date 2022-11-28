const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 5000;
const dotenv = require('dotenv');
const authRoute = require('./routes/Auth');
const userRoute = require('./routes/Users');
const postRoute = require('./routes/Posts');
//DotENV path

dotenv.config();
app.use(express.json()); //Imp for testing of API

mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(console.log('Connected to Database Successfully'))
    .catch((err) => console.log(err));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

app.listen(port, () => {
    console.log(`Server is Running at port https://localhost:${port}`);
})