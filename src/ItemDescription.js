import React from 'react';

const ItemDescription = (props) => {
  let {item} = props;
  let stars = [];
  //makes stars for the review, couldn't find a good working way to
  //cover half stars.  just loops to 5 and checks if the rating is lower than
  //current iteration.
  const generateStars = () => {
    for(let i = 0; i < 5; i++){
      if(item.rating.rate > i){
        stars.push(<span class="fa fa-star checked"
        style={{color:"yellow"}}></span>)
      }
      else{
        stars.push(<span class="fa fa-star"></span>)
      }
    }
  }
  //only attempts to render if we have an item selected.
  if(item !== undefined){
    generateStars();
    return (
      <div className="item-description">
        <h1 className="description-text">
          Price: ${item.price}
        </h1>
        <p className="description-text">{item.description}</p>
        <div>{stars} <span>({item.rating.count})</span></div>
        <button className="add-item">Add To Cart</button>
      </div>
    )
  }
}

export default ItemDescription;
