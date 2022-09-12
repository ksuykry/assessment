import React from 'react';
import './item.css';


const Item = (props) => {
  const openItem = () => {
    props.openCurrItem(props.id);
  }
  const closeItem = () => {
    props.closeCurrItem()
  }
  //zip file didn't have the icons, had to grab from fontawesome
  //unfortunately, do not have fontawesome pro so used what was available
  return(
    <div className="item-container">
      <img src={props.image} className="item-image"/>
      <p className="item-title">{props.title}</p>
      {props.currItem && props.currItem.id === props.id ?
      <button className="icon" id={props.id} onClick={closeItem}>
        <i className="fa-solid fa-circle-chevron-right fa-2xl"></i></button> :
        <button className="icon" id={props.id} onClick={openItem}>
          <i className="fa-solid fa-circle-chevron-left fa-2xl"></i></button>}
    </div>
  )
}
export default Item;
