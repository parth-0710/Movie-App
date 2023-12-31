
const express = require("express");
const app = express();
const port = 5000;
const cookieParser = require("cookie-parser");




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


const config = require("./config/key");


const mongoose = require("mongoose");

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));





app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());


app.use("/api/users", require("./routes/users"));
app.use("/api/favorite", require("./routes/favorite"));
