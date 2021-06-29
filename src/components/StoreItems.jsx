import Button from "./Button"

function StoreItem({item, cart, setCart}) {
    function addToCart(e) {
      const newItem = {
        id: item.id,
        name: item.name,
        quantity: 1
      }
      const existingItem = cart.find(itemInCart=>item.id===itemInCart.id) 
      if (existingItem) {
        const updatedCart = cart.map(function(itemInCart){
          if (itemInCart.id===existingItem.id) {
            return {...itemInCart, quantity: itemInCart.quantity + 1}
          } else {
            return itemInCart
          }
        })
        setCart(updatedCart)
      } else {
        setCart([...cart, newItem])
      }
    }
      return <li>
      <div className="store--item-icon">
        <img src={`assets/icons/${item.id}.svg`} alt={item.name} />
      </div>
      <Button onClick={addToCart}>Add to cart</Button>
    </li>
}

export default StoreItem