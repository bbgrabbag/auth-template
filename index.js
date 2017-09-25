const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const config = require("./config");
const dolphinRoute = require("./routes/dolphin");
const authRoute = require("./routes/auth");
const profileRoute = require("./routes/profile");

const PORT = config.PORT;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/dolphin", dolphinRoute);
app.use("/auth", authRoute);
app.use("/profile", profileRoute);

mongoose.connect(config.db, () => {
    console.log("CONNECTED ON " + config.db);
    app.listen(PORT, () => {
        console.log("CONNECTED ON PORT " + PORT);
    });
});

