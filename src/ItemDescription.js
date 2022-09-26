import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import axios from 'axios';

const ItemDescription = (props) => {
  let {item} = props;
  let stars = [];
  //makes stars for the review, couldn't find a good working way to
  //cover half stars.  just loops to 5 and checks if the rating is lower than
  //current iteration.
  async function handleToken(token, addresses) {
    const response = await axios.post(
      "localhost:3000/checkout",
      { token, item }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
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

        <StripeCheckout
          stripeKey="pk_test_51Lm03dDJSI1yH15ALov7mvZWOwaV7jpc1PqLujJrPqHoMQagnY1gUHQKIqwhPf9TIWgkSXZoXmihx79rbTBCFfP6008YCmQY4Z"
          label="Buy Now"
          token={handleToken}
          amount={item.price * 100}
          current="USD"
          name={item.title}
          billingAddress
          shippingAddress
        />
      </div>
    )
  }
}

export default ItemDescription;
