const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 5000;
const dotenv = require('dotenv');
const authRoute = require('./routes/Auth');
const userRoute = require('./routes/Users');
const postRoute = require('./routes/Posts');
const categoriesRoute = require('./routes/Categories');
const multer = require('multer');

dotenv.config();
app.use(express.json()); //Imp for testing of API

mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(console.log('Connected to Database Successfully'))
    .catch((err) => console.log(err));

    //Upload file restAPI
    const storage = multer.diskStorage({
        destination:(req,file,cb) => {
            cb(null, "uploads")
        }, filename:(req,file,cb) => {
            cb(null, req.body.name);
        },
    });

    const upload = multer({ storage: storage });
    app.post('/api/upload', upload.single("file"), (req,res) => {
        res.status(200).json("File has been uploaded");
    })

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoriesRoute);

app.listen(port, () => {
    console.log(`Server is Running at port https://localhost:${port}`);
})