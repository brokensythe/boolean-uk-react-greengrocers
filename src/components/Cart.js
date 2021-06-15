function Cart({store, setStore, cart, setCart}) {
  let totalSpend = 0
  for (const item of cart) {
    const itemInStore = store.find(storeItem=>storeItem.id===item.id)
    const itemTotal = itemInStore.price * item.quantity
    totalSpend += itemTotal
  }
    return <main id="cart">
    <h2>Your Cart</h2>
    <div className="cart--item-list-container">
      <ul className="item-list cart--item-list">{
        cart.map(function(item){
          return <li>
          <img
            className="cart--item-icon"
            src={`assets/icons/${item.id}.svg`}
            alt={item.name}
          />
          <p>{item.name}</p>
          <button className="quantity-btn remove-btn center">-</button>
          <span className="quantity-text center">{item.quantity}</span>
          <button className="quantity-btn add-btn center">+</button>
        </li>  
        })
      }</ul>
    </div>
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">{totalSpend.toFixed(2)}</span>
      </div>
    </div>
  </main>
}

export default Cart