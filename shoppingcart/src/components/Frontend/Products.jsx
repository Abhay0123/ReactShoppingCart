import React,{useState} from 'react'
import data from "../back/data";
import { Box, Image,SimpleGrid,Text,Button } from '@chakra-ui/react';
const Products = ({cartdata,handleCart,items}) => {
 // const {items} = data ;
  // const [cartdata,setCartData]  = useState([]);
  // const handleCart=(product)=>{
       
  //       const productExist = cartdata.find((el)=>el.id ===product.id) ;
  //       if(productExist){
  //           setCartData(cartdata.map((el)=> el.id === product.id ? {...productExist, quantity: productExist.quantity+1} : el))
           
  //         }
  //       else{
  //         setCartData([...cartdata , {...product,quantity :1}])
  //       }
  //       console.log(cartdata)
  // }
  return (
    <Box className='products'><SimpleGrid  columns={{base:1,sm:2,md:3,lg:4}}  gap='20px' p='10px'>  
        {items.map((el)=>(
         <Box key={el.id} className='each_product'>
           <Image w='160px' margin='auto'  src={el.PicturePath}></Image>
           <Box mt='20px'> <Text>{el.LabelText}</Text>
           <Text>Price: ${el.SalePrice}</Text>
           <Button onClick={()=>handleCart(el)} borderRadius='0px' colorScheme='purple' size='xs' className='addtocart'>Add to cart</Button></Box>
          
           </Box> 
         
        ))}
    </SimpleGrid></Box>
     
  )
}

export default Products;