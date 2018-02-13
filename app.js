require('dotenv').config()

let express = require('express');
let app = express();

app.use(express.json());
app.use(express.urlencoded());

var port = process.env.PORT || 3000;

app.use(require('./routes/routes.js'));

app.listen(port, (param) => {
    console.log("App started : http://localhost:"+port);
})