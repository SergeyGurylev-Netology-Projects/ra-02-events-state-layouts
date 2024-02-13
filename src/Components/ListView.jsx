function ListView ({ items }) {

  return (
    <div className="cards-list">
      {items.map((props, index) =>
        <div key={index} className="card-list">
          <div className="card-image-list">
            <img className="card-image" src={props.img}/>
          </div>
          <a className="card-name">{props.name}</a>
          <a className="card-color">{props.color}</a>
          <a className="price">${props.price}</a>
          <button className="btnAddToCart">ADD TO CART</button>
        </div>
      )}
    </div>
  )
}

export default ListView;
