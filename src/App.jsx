import ProductList from "./ProductList";
import CartProvider from "./context/CartContext";
import Header from './Header'

function App(){
  return (
    <CartProvider>
      <Header />
      <ProductList />
    </CartProvider>
  )
}

export default App;