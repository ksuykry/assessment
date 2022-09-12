import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Item from './Item.js';
import ItemDescription from './ItemDescription.js';
import Navbar from './Navbar.js';


const Store = () => {
  const [items, setItems] = useState([]);
  const [currItem, setCurrItem] = useState();

  const getItems = async() => {
    axios.get('https://fakestoreapi.com/products?limit=5')
    .then(response => setItems(response.data))
    .catch(error => {
      console.log(error);
    })
  }
  const openCurrItem = (id) => {
    //finds the item in the items array and sets the current item to it
    let foundItem = items.find(item => item.id === id);
    setCurrItem(foundItem);
  }
  const closeCurrItem = () => {
    //clears out description side and flips the arrow left
    setCurrItem();
  }
  useEffect(()=> {
    getItems();
  },[])
  //get items when loading the page, render each item into the items container
  //and fill item description when the corresponding button is clicked
  return(
    <div className="container">
      <div className="banner">
        <Navbar></Navbar>
        <h1 className="banner-text">Welcome to Amaze On!</h1>
        <p className="banner-text">We have the widest catalog of clothing, accessories and backpacks all with 2 day shipping free of charge!</p>
      </div>
      <div className="catalog">
        <div className="items-container">
        {items.length > 0 && items.map((item)=> (
          <Item key={item.id} id={item.id} title={item.title} image={item.image} openCurrItem={openCurrItem} currItem={currItem} closeCurrItem={closeCurrItem}></Item>
        ))}
        </div>
        <div className="description-container">
          <ItemDescription item={currItem}></ItemDescription>
        </div>
        </div>
    </div>
  )
}
export default Store;
