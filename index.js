const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/user');
const url = "mongodb+srv://omgupta:omgupta1995@clusterone.t7acaoj.mongodb.net/?retryWrites=true&w=majority";
// const url = "mongodb://localhost/CRUD";
const app = express();
app.use(express.json());
const routes = express.Router();
app.use(routes)

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const con = mongoose.connection;

con.on('open', () => {
    console.log("DB connection established");
})

routes.use('/user', user);


app.listen(9000, function () {
    console.log("Server listening on 9000");
}) 