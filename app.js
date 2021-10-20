const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes/crud.router");
require("dotenv").config();
const app = express();

app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

const port = process.env.PORT || 3001;

let connectionString = `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Run succesfully at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
