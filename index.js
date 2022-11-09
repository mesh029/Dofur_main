const express = require('express');
const app = express();
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const dotenv = require("dotenv");
const createError = require('http-errors');


//routes
const authRoute = require("./routes/auth");




dotenv.config()
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL, {
    
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.use(cors());
app.use("/auth", authRoute)


const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})
// Error Handling
app.use((req, res, next) => {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
