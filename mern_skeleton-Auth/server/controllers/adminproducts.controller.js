import Product from "../models/product.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

const create = async (req, res) =>{

    console.log(req.body);
    const product = new Product(req.body);
    try {
      await product.save();
      return res.status(200).json({
        message: "Successfully signed up!",
      });
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  };

  export default {create};