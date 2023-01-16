const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Connected to Database`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

mongoose.set("strictQuery", true);

module.exports = connectDB;
