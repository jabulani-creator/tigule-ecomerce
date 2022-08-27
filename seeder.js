import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/User.js";
import Products from "./models/Products.js";
import Order from "./models/Order.js";
import connectDB from "./db/connect.js";
dotenv.config();
connectDB(process.env.MONGO_URL);

const importData = async () => {
  try {
    await Order.deleteMany();
    await Products.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Products.insertMany(sampleProducts);
    console.log("data inported");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Products.deleteMany();
    await User.deleteMany();

    console.log("data destroyed");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
