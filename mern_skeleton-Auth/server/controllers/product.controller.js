import Product from "../models/product.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

const create = async (req, res) => {
  console.log(req.body);
  const product = new Product(req.body);
  try {
    await product.save();
    return res.status(200).json({
      message: "Product successfully added",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const list = async (req, res) => {
  try {
    let products = await Product.find().select(
      "name description price category quantity imageURL coll"
    );
    res.json(products);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const productByID = async (req, res, next, id) => {
  try {
    let product = await Product.findById(id);
    if (!product)
      return res.status("400").json({
        error: "Product not found",
      });
    req.profile = product;
    next();
  } catch (err) {
    return res.status("400").json({
      error: "Could not retrieve product",
    });
  }
};

const update = async (req, res) => {
  try {
    let product = req.profile;
    product = extend(product, req.body);
    await product.save();
    res.json(product);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const remove = async (req, res) => {
  try {
    let product = req.profile;
    let deletedProduct = await product.deleteOne();
    res.json(deletedProduct);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const read = (req, res) => {
  return res.json(req.profile);
};


export default { create, productByID, read, list, remove, update };
