import React from 'react'
import {Route, Routes, useParams, Switch} from 'react-router-dom'
import Home from './core/Home' 
import Users from './user/Users'
import Signin from './user/Signin'
import Signup from './user/Signup'
import Admin from './admin/Admin';
import ProductAdmin from './admin/ProductAdmin';
import About from './about/About';
import ProductsPage from './products/ProductsPage';
import Contact from './contact/Contact';
import TestPage from './user/TestPage';
import ProductsList from './admin/ProductsList';

function ProductId(){
    const{id} = useParams();
}

const MainRouter = () => {


return ( <div> 
<Switch>
<Route exact path="/" component={Home}/> 
<Route exact path="/signin" component={Signin}/>
<Route exact path="/signup" component={Signup}/>
<Route exact path="/users" component={Users}/>
<Route exact path="/admin" component={Admin}/>
<Route exact path="/admin/products/:ProductId" component={ProductAdmin}/>
<Route exact path="/about" component={About}/>
<Route exact path="/products" component={ProductsPage}/>
<Route exact path="/contact" component={Contact}/>
<Route exact path="/testpage" component={TestPage}/>
<Route exact path="/admin/productslist/" component={ProductsList}/>

</Switch>
</div> 
)
}
export default MainRouter