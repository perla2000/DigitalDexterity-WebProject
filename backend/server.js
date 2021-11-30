const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv:LeaHarrouz:36c4a0cf@cluster0.pwscc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const TestRouter = require("./routes/TestRoutes");
const usersRouter = require("./routes/UserRoutes");
const questionRouter = require("./routes/Question_Router");

app.use("/test", TestRouter);
app.use("/users", usersRouter);
app.use("/question", questionRouter);

app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
});
