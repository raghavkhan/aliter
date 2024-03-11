require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const port = process.env.PORT || 5000;
app.use(express.json());

//routes
const userRouter = require("./routes/userRoute.js");

app.use("cors");
app.use("/api/v1/users", userRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log(`db connected!`);
    app.listen(port, () => {
      console.log(`server is listening at port: ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
