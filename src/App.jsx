import "./styles/index.css";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Reference from "./components/Reference";
import { useState } from "react"
import storeItems from "./InitialItems"
/* 
Your store item should have the following structure

{
  id: "001-beetroot", <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 <- You can come up with your own prices
}

*/

export default function App() {
  const [store, setStore] = useState(storeItems)
  const [cart, setCart] = useState([])

  return <div className="App">
    <Store store={store} setStore={setStore} cart={cart} setCart={setCart} />
    <Cart store={store} setStore={setStore} cart={cart} setCart={setCart} />
    <Reference />
  </div>;
}
