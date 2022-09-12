import React from 'react';

const ItemDescription = (props) => {
  let currItem = props.item;
  let stars = [];
  const generateStars = () => {
    for(let i = 0; i < 5; i++){
      if(currItem.rating.rate > i){
        stars.push(<span class="fa fa-star checked" style={{color:"yellow"}}></span>)
      }
      else if(i - currItem >= .3 && i - currItem <= .7){
        stars.push(<span class="fa-solid fa-star-half" style={{color:"yellow"}}></span>)
      }
      else{
        stars.push(<span class="fa fa-star"></span>)
      }
    }
  }
  //only attempts to render if we have an item selected.
  if(currItem !== undefined){
    generateStars();
    return (
      <div className="item-description">
        <h1 className="description-text">
          Price: ${currItem.price}
        </h1>
        <p className="description-text">{currItem.description}</p>
        <div>{stars} <span>({currItem.rating.count})</span></div>
        <button className="add-item">Add To Cart</button>
      </div>
    )
  }
}

export default ItemDescription;
