import StoreItem from "./StoreItems"

function Store({store, setStore, cart, setCart}) {
    return <header id="store">
    <h1>Greengrocers</h1>
    <ul className="item-list store--item-list">
      {store.map(function (item) {
      return <StoreItem key={item.id} item={item} cart={cart} setCart={setCart} />
})}
    </ul>
  </header>
}

export default Store