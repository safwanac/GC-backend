const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://oopstechnologys:oops123@cluster0.qbufwm5.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlparser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Database connected");
  } catch (error) {
    console.log(`Error:${error}`);

    process.exit();
  }
};

module.exports = connectDB;
