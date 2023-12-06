import React, {useState,useEffect} from "react";
import {create} from "./api-adminproduct.js";

const ProductAdmin = ({props}) => {


  const[values, setValues] = useState({

    name: '',
    description: '',
    price: 0,
    category: '',
    coll: '',
    quantity: 0,
    



  });

  //const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

   /* let requestOptions =  {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(token)
    };

    fetch(window.location.href, requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            console.log(data);
            setUser({ token: data.token, typeUser: data.typeUser})
        })
        .catch(error => {
            setUser({ errorMessage: error.toString() });
            console.error('There was an error!', user.errorMessage);
        } )
      
    let auth = new AuthManager();
    if (auth.isAuthenticated(user)) {
      setMessage("You are authenticated" + user.typeUser);
    } else {
      setMessage("You are not authenticated");
    }*/
    /*
    fetch(window.location.href, {method: "GET"})
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
          console.log("Give me data" + data._id);

          setValues({
            name: data.name,
            file: data.imageURL,
            description: data.description,
            price: data.price,
            category: data.category,
            collection: data.coll,
            quantity: data.quantity,
            

          } )
            
        })
        .catch((error) => {
            setError(error.message);
        }).finally(() =>{
          setLoading(false);
        }
        );
     */


    const abortController = new AbortController()
    const signal = abortController.signal

    read({
      productId: this.props.match.params.productId
    }, signal).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, name: data.name, description: data.description, price: data.price, category: data.category, coll: data.coll, quantity: data.quantity, imageURL: data.imageURL})
      }
    })
    return function cleanup(){
      abortController.abort()
    }

  }, [this.props.match.params.productId]);









  const[open,setOpen] = useState(false);
  const[productId, setProductId] = useState("");

 

  /*useEffect = (() => {
    fetch



  }, []);*/

  const clickSubmit = () => {
    console.log("price:" + values.price);
    const product = {
      name: values.name || undefined,
      description: values.description || undefined,
      price: values.price || undefined,
      category: values.category || undefined,
      coll: values.coll || undefined,
      quantity: values.quantity || undefined,
      imageURL: values.imageURL || undefined,
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
          <input type="text" id="file" name="file"value={values.imageURL} onChange={handleChange("imageURL")}></input>
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
          <select id="collection" name="collection"  value={values.coll} onChange={handleChange("coll")}>
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
