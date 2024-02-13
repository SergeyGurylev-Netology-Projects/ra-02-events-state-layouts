import './Store.css'
import switch_icons from '../icons.js';
import products from '../products.js';
import { useState } from 'react'
import IconSwitch from './IconSwitch.jsx';
import CardsView from "./CardsView.jsx";
import ListView from "./ListView.jsx";

function Store() {
  const [icon, setIcon] = useState(0);

  const onSwitch = (event) => {
    setIcon((icon) => {
      icon++;
      if (icon > switch_icons.length-1) {
        icon = 0;
      }
      return icon;
    });
  }

  function getProducts(required_icon) {
    if (required_icon === icon) {
      return products;
    }

    return [];
  }

  return (
    <div className="cards-contaiter">
      <IconSwitch iconName={switch_icons[icon]} onSwitch={onSwitch}/>
      <CardsView cards={getProducts(0)}/>
      <ListView items={getProducts(1)}/>
    </div>
  )
}

export default Store;
