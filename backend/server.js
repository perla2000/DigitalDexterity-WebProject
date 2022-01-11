const express = require("express");
//const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://LeaHarrouz:36c4a0cf@cluster0.pwscc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
});
const cors= require("cors")
const TestRouter = require("./routes/TestRoutes");
const usersRouter = require("./routes/UserRoutes");
const questionRouter = require("./routes/Question_Router");
const answerRouter = require("./routes/AnswerRoutes");
const QanswerRouter = require("./routes/Answer_QuestionRouter");
const TestUserRouter = require("./routes/Test_User_Router");
const TestAnswerRouter = require("./routes/Test_AnswersRoutes");

app.use("/test", TestRouter);
app.use("/users", usersRouter);
app.use("/question", questionRouter);
app.use("/answers", answerRouter);
app.use("/questionAnswers", QanswerRouter);
app.use("/testUser", TestUserRouter);
app.use("/testAnswer", TestAnswerRouter);
app.use(cors());
module.exports = app;
