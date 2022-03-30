const express = require("express");
const connect = require("./configs/db");
const todoController = require("./controllers/product.controllers");
const app = express();
app.use(express.json());

app.use("/todos", todoController);


app.listen(5000, () => {
    try {
        connect();
        console.log("Listening on port 5000");
    } catch (err) {
        console.log(err);
    }
});