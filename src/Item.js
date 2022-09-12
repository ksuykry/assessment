import React from 'react';
import './item.css';


const Item = (props) => {
  const {image, title, currItem, id, openCurrItem, closeCurrItem} = props;
  const openItem = () => {
    openCurrItem(props.id);
  }
  const closeItem = () => {
    closeCurrItem()
  }
  //zip file didn't have the icons, had to grab from fontawesome
  //unfortunately, do not have fontawesome pro so used what was available
  return(
    <div className="item-container">
      <img src={image} className="item-image" onClick={openItem}/>
      <p className="item-title" onClick={openItem}>{title} </p>
      {currItem && currItem.id === id ?
      <button className="icon" id={id} onClick={closeItem}>
        <i className="fa-solid fa-circle-chevron-right fa-2x"></i></button> :
        <button className="icon" id={id} onClick={openItem}>
          <i className="fa-solid fa-circle-chevron-left fa-2x"></i></button>}
    </div>
  )
}
export default Item;
