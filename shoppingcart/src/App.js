import React, { useState } from "react";
import data from "./components/back/data";
import AllRoutes from "./components/Frontend/AllRoutes";
import Navbar from "./components/Frontend/Navbar";
import { useToast } from '@chakra-ui/react'
const App = () => {
  const { items } = data;
  const [cartdata, setCartData] = useState([]);
  const toast = useToast()
  const handleCart = (product) => {
  
    const productExist = cartdata.find((el) => el.id === product.id);
    if (productExist){
      setCartData(
        cartdata.map((el) =>
          el.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : el
        )
      );
    } else{
      setCartData([...cartdata, { ...product, quantity: 1 }]);
      toast({
        title: 'Hooray!',
        description: "Product added successfully.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
    console.log(cartdata);
  };

  const handleIncrement= (product) => {
   
      const productExist = cartdata.find((el) => el.id === product.id);
      if (productExist.quantity >= 1) {
       setCartData(
          cartdata.map((el) =>
            el.id === product.id
              ? { ...productExist, quantity: productExist.quantity + 1 }
              : el
          )
        );
      }
    };

  const handleDecrement = (product) => {
    const productExist = cartdata.find((el) => el.id === product.id);
    if (productExist.quantity === 1) {
      setCartData(cartdata.filter((el) => el.id !== product.id));
    } else {
      setCartData(
        cartdata.map((el) =>
          el.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : el
        )
      );
    }
  };
  const clearCart=()=>{
    setCartData([]);
    toast({
      title: 'Your Product is ready to shipped Successfully',
      description: "C.O.D is applied",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
 }
  return (
    <>
      <Navbar cartdata={cartdata}/>
      <AllRoutes
        cartdata={cartdata}
        items={items}
        handleCart={handleCart}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        clearCart={clearCart}
      />
    </>
  );
};

export default App;
