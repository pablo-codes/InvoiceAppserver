const express = require("express");
const app = express();
const path = require('path')
const mongoose = require("mongoose")
const cors = require('cors')
const dotenv = require('dotenv')
const { Create, Get } = require("./Controllers/SettingsControllers");
const { Createi } = require("./Controllers/InvoiceControllers");




dotenv.config({ path: path.join(__dirname, './config.env') })

mongoose.connect('mongodb://127.0.0.1:27017/myapp').then(() => {
    console.log("DB Connected Successfully")
}).catch((err) => {
    console.log("Mongo not enabled locally")
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("DB Connected Successfully")
    }).catch((err) => {
        console.log("No internet connection")
        console.log(err)
    })
})


var corsOptions = {
    origin: ['https://pablo-codes.github.io', 'http://localhost:3000', "http://localhost:3001"],
    credentials: true,
    optionSuccessStatus: 200
};

//  Middlewares

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('good')
})
app.post('/create-settings/:id', Create);
app.post('/create-invoice/:id', Createi)
app.get('/get-settings/:id',Get)

// app.post("/login-user", loginUser);
// app.get("/index/:id", index);
// app.get("/edit-user/:id", editUser);
// app.put("/update-user/:id", updateUser);









// Port
const port = 2500;
app.listen(port, () => {
    console.log("Server running on port " + port);
});