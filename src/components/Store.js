import StoreItem from "./StoreItems.jsx"
import Title from "./Title.jsx"

function Store({store, setStore, cart, setCart}) {
    return <header id="store">
    <Title>Greengrocers</Title>
    <ul className="item-list store--item-list">
      {store.map(function (item) {
      return <StoreItem key={item.id} item={item} cart={cart} setCart={setCart} />
})}
    </ul>
  </header>
}

export default Store