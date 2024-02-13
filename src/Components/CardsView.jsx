function CardsView ({ cards }) {

  return (
    <div className="cards-module">
      {cards.map((props, index) =>
        <div key={index} className="card-module">
          <img className="card-image" src={props.img}/>
          <div className="card-title-module">
            <a className="card-name">{props.name}</a>
            <a className="card-color">{props.color}</a>
          </div>
          <div className="purchase-info-module">
            <div className="price">${props.price}</div>
            <button className="btnAddToCart">ADD TO CART</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CardsView;
