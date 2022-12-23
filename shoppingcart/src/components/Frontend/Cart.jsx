import { Box, Image, Text ,Button,SimpleGrid} from "@chakra-ui/react";
import React from "react";
const Cart = ({ cartdata ,handleDecrement,handleIncrement,clearCart}) => {

    const totalPrice = cartdata.reduce((price,e) => +price + (e.quantity)* (e.SalePrice), 0 ) ;
    {console.log(totalPrice)}


  return (
    <>
      <Box>
        <Box className="cart">
          {cartdata.length === 0 && <Box align='center'><Text fontSize='2xl'>Your Cart is Empty</Text></Box>
          }
        </Box>
      </Box>
    
      <Box display={{base:"grid",sm:"grid",md:"flex",lg:"flex"}}  gap='10px'>
       
        {cartdata.length >=1 ? ( <Box overflowY='scroll'  w={{base:'99%',sm:"99%",md:"60%",lg:"80%"}} height='800px' mt='20px'>
         {cartdata.map((el) => (
          <SimpleGrid columns={{base:1,sm:1,md:1,lg:2}}  ml='1%' >
            <Box w='320px' className="selected_item"align='center'><Image  src={el.PicturePath}></Image></Box>  
             <Box key={el.id} className="cartitem" >
             
           <Box >  <Text fontSize='2xl'>{el.LabelText}</Text></Box>
           <Box>  <Text fontSize='large' fontStyle='oblique' fontWeight='200'>{el.Name}</Text></Box>
              <Box >Actual Price: $<Text as='s'>{el.CsSalesPrice}</Text></Box>
              <Box ><Text as='mark'>Discount: {el.Discount}%</Text></Box>
              <Box ><Text >After discount: ${el.SalePrice}</Text></Box>
           <Box>
              <Button colorScheme="red" variant="solid" onClick={()=>handleDecrement(el)}>-</Button>
              {"  "+el.quantity+"  "}
              <Button colorScheme="green" variant="solid"  onClick={()=>handleIncrement(el)}>+</Button>
              </Box>
              

               <Box><Text fontSize='2xl'>Price after discount: ${((el.quantity)*(el.SalePrice)).toFixed(2)}</Text></Box>
    </Box>
            </SimpleGrid>
          
     ))} 
  </Box>) : <Box align='center' w='100%' h='100%'><Image  w='600px' h='400px' align='center' src='https://cdni.iconscout.com/illustration/premium/thumb/empty-shopping-cart-6074324-5006800.png'></Image></Box> }
     
      {cartdata.length>=1 && <Box className="cartbox" align='center' w={{base:'99%',sm:"99%",md:"40%",lg:"20%"}}> 
       <Box className="totalprice" ><Text fontSize='2xl'> Total Price: ${totalPrice}</Text></Box>
       <Box className="clearcart">
           {cartdata.length>=1 &&  (<Button onClick={clearCart}>Proceed to checkout</Button> )}
       </Box>
     
       </Box>}
        
     
 </Box>
      
     </>
  );
};
export default Cart;
