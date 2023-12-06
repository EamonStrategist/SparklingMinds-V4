import Product from "../models/product.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";
import mongodb from 'mongodb';

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

  const remove = async (req, res, next) => {

    
    const product = new Product(req.body);
    
    try {
      await product.deleteOne();
      
      return res.status(200).json({
        message: "Successfully deleted product!",
      });

    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
      
    }
    
    next()
  };

  const productByID = async (req, res, next, id) => {
    console.log("productByID");
    try {
      let product = await Product.findById(id);
      if (!product)
        return res.status("400").json({
          error: "User not found",
        });
      req.profile = product;
      next();
    } catch (err) {
      return res.status("400").json({
        error: "Could not retrieve user",
      });
    }
  };

  const read = (req, res) => {
    console.log("read");
    return res.json(req.profile);
  };

  const read2 = (req, res) => {


  }

  export default {create, remove, productByID, read};