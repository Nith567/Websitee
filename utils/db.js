import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    console.error("Connection to MongoDB failed:", error);
  }
};

export default connect;
