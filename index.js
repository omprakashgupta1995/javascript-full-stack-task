const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/user');
const path = require('path');
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

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"index.html"))
});
routes.get('/update/:id', (req, res) => {
    res.sendFile(path.join(__dirname,"index.html"))
});
routes.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname,"admin.html"))
});
app.use(express.static(path.join(__dirname,"public")));

app.listen(9000, function () {
    console.log("Server listening on 9000");
}) 