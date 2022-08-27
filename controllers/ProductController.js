import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/index.js";
import Products from "../models/Products.js";

// @desc    Fetch all products
// @route   GET /api/v1/products
// @access  Public
const getProducts = async (req, res) => {
  const products = await Products.find({});
  res.status(StatusCodes.OK).json(products);
};

// @desc    Fetch single product
// @route   GET /api/v1/products/:id
// @access  Public
const getSingleProduct = async (req, res) => {
  // const { id: productId } = req.params;
  const product = await Products.findById(req.params.id);

  if (!product) {
    throw new NotFoundError(`No Product with id ${productId}`);
  }
  res.status(StatusCodes.OK).json(product);
};

export { getProducts, getSingleProduct };
