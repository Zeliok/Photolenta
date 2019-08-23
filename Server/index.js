let express = require("express");
let app = express();

app.use(express.static("../Client"));

app.listen(80);