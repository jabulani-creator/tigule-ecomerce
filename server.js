import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";
import morgan from "morgan";
//Database
import connectDB from "./db/connect.js";
app.use(express.json());

//Routes
import ProductRoutes from "./routes/ProductRoutes.js";

//Middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/v1/products", ProductRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}....`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
