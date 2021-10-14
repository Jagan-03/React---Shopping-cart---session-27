import React from "react";

import Navbar from "./components/navbar";
import Header from "./components/header";
import MainSection from "./components/mainSection";
import Footer from "./components/footer";

function App() {
  
  const [cart, setCart] = React.useState([]);
  const [products, setProducts] = React.useState([
    {
      name: "Product 1",
      price: 18.0,
      rating: ["⭐", "⭐", "⭐", "⭐", "⭐"],
      cart: false,
    },
    {
      name: "Product 2",
      price: 5.0,
      rating: ["⭐", "⭐", "⭐", "⭐"],
      cart: false,
    },
    {
      name: "Product 3",
      price: 12.0,
      rating: ["⭐", "⭐", "⭐", "⭐"],
      cart: false,
    },
    {
      name: "Product 4",
      price: 10.0,
      rating: ["⭐", "⭐", "⭐"],
      cart: false,
    },
    {
      name: "Product 5",
      price: 25.0,
      rating: ["⭐", "⭐", "⭐", "⭐", "⭐"],
      cart: false,
    },
    {
      name: "Product 6",
      price: 20.0,
      rating: ["⭐", "⭐", "⭐", "⭐"],
      cart: false,
    },
    {
      name: "Product 7",
      price: 10.0,
      rating: ["⭐", "⭐", "⭐", "⭐", "⭐"],
      cart: false,
    },
    {
      name: "Product 8",
      price: 15.0,
      rating: ["⭐", "⭐", "⭐"],
      cart: false,
    },
  ]);
  const setCartItems = (data, product) => {
    if (data) setCart((prevValue) => [...prevValue, product]);
    else {
      setCart(cart.filter((item) => item.name !== product.name));
    }
  };

  React.useEffect(() => {
        setProducts(p => p.map((product) => {
          let inCart = false;
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].name === product.name) inCart = true;
          }
          if (inCart) product.cart = true;
          else product.cart = false;
          return product;
        }))
    }, [cart]);
    
    
  

  return (
    <div className="App">
      <Navbar products={cart} />
      <Header />
      <MainSection setCart={setCartItems} products={products} />
      <Footer />
    </div>
  );
}

export default App;
