import React, { useEffect, useState } from "react";
import Card from "../products/Card";
import ProductContainer from "../products/ProductContainer";
import Title from "../products/Title";
//import { list } from './api-products.js';
import Dropdown from "../products/Dropdown"; // Import the Dropdown component
import "./ProductsList.css";
import { remove } from './api-adminproduct.js';
//import { useNavigate } from "react-router";
//import {useSearchParams}  from "react-router-dom";
import { generatePath, useNavigate } from "react-router-dom";

const ProductsList = () => {
    /* constructor(){
          super();
          const [values, setValues] = useState([]);
      }*/

    /*
       name: '',
          description: '',
          price: '',
          category: '',
          coll: '',
          quantity: '',
          imageURL: ''
      */

    /*onComponentMount(){
                  fetch('http://localhost:3000/api/products/')
                  .then(response => response.json())
                  .then(data => setValues(data)) 
               };
          
  
          const getProduct = () =>{
              fetch('http://localhost:3000/api/products/')
              .then(response => response.json())
              .then(data => setValues(data))
          };
  */

    const navigate = useNavigate();
    //const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [values, setValues] = useState({});

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:3000/api/products/")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
                const uniqueCategories = Array.from(
                    new Set(data.map((product) => product.category))
                );
                setCategories(uniqueCategories);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);



    const onEdit = (event) => {


        navigate(`/admin/products/${event.target.value}`);

    };


    const handleCategoryChange = (selectedCategory) => {
        if (selectedCategory === "") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(
                (product) => product.category === selectedCategory
            );
            setFilteredProducts(filtered);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="products-page">
            <div className="navbar">
                <Title text="Products Page" />
                <Dropdown
                    categories={categories}
                    onCategoryChange={handleCategoryChange}
                />
                <div className="cart-summary">
                    Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
                </div>
            </div>
            <ProductContainer>
                {filteredProducts.map((product) => (
                    <div key={product._id} className="product-wrapper">
                        <Card productInfo={product} />
                        <div className="product-actions">
                            <button className="edit" id="edit" onClick={onEdit} value={product._id}>
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </ProductContainer>
        </div>
    );
};

export default ProductsList;