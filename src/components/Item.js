import React,{useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false);

  const cartClass = cart ? "in-cart" : ""
  const buttonText = cart ? "Remove from Cart" : "Add to Cart";
  
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=> setCart(!cart)}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
