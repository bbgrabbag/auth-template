const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const config = require("./config");
const dolphinRoute = require("./routes/dolphin");

const PORT = config.PORT;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/dolphin", dolphinRoute);
//profile and auth routes go here

mongoose.connect(config.db, () => {
    console.log("CONNECTED ON " + config.db);
    app.listen(PORT, () => {
        console.log("CONNECTED ON PORT " + PORT);
    });
})

