import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
  },
  {
    timestamps: true,
  }
);
const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: [true, "User required"],
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please provide name"],
    },
    image: {
      type: String,
      required: [true, "Please provide image"],
    },
    brand: {
      type: String,
      required: [true, "Please provide brand"],
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Product", productSchema);
