import mongoose from "mongoose";

let MONGODB_URI = process.env.PROD_MONGODB;

mongoose.set("returnOriginal", false);

mongoose
  .connect(MONGODB_URI)
  .catch((error) =>
    console.error("Error connecting to MongoDB:", error.message)
  );

mongoose.connection.on("disconnected", () =>
  console.log("Disconnected from MongoDB!")
);

mongoose.connection.on("error", (error) =>
  console.error(`MongoDB connection error: ${error}`)
);

export default mongoose.connection;
