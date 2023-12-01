import React, {useState} from "react";
import {create} from "./api-adminproduct.js";

const ProductAdmin = () => {
  const[open,setOpen] = useState(false);

  const[values, setValues] = useState({
    name:"",
    file: "",
    description: "",
    price: 0,
    category: "",
    collection: "",
    quantity: 0,

  });

  const clickSubmit = () => {
    console.log("price:" + values.price);
    const product = {
      name: values.name || undefined,
      description: values.description || undefined,
      price: values.price || undefined,
      category: values.category || undefined,
      coll: values.collection || undefined,
      quantity: values.quantity || undefined,
      imageURL: values.file || undefined,
    };
      create(product).then((data) =>{
        if(data.error){
          setValues({...values, error: data.error});
        }
      }
         );
        };
      

    
  

  const handleChange = (name) => (event) =>{
    setValues({...values, [name]: event.target.value})
    console.log(name + " " + event.target.value)
  };





  return <div><h1>ProductAdmin</h1>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" value={values.name} onChange={handleChange("name")}></input>
          <br/>
          <label for="file" >Filename:</label>
          <input type="text" id="file" name="file"value={values.file} onChange={handleChange("file")}></input>
          <br/>
          <label for="description" >Description:</label>
          <textarea id="description" name="description" col="15" rows="5"value={values.description} onChange={handleChange("description")}>
          </textarea>
          <br/>
          <label for="price" >Price:</label>
          <input type="number" id="price" name="price" value={values.price} onChange={handleChange("price")}>
          </input>
          <br/>
          <label for="category" >Category:</label>
          <input type="text" id="category" name="category"value={values.category} onChange={handleChange("category")}>
          </input>
          <br/>
          <label for="collection">Collection:</label>
          <select id="collection" name="collection"  value={values.collection} onChange={handleChange("collection")}>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="unisex">Unisex</option>
          </select>
          <br/>
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" value={values.quantity} onChange={handleChange("quantity")}>
          </input>
          <br/>
          <input type="reset" name="cancel" value="Cancel">
          </input>
          <input type="submit" name="submit" value="Submit" onClick={clickSubmit}>

          </input>


        </form>


  </div>

  
  ;
};

export default ProductAdmin;
