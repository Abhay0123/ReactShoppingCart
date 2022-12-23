import React from 'react'
import {NavLink,Link } from 'react-router-dom';
import {Image,Box,Text} from '@chakra-ui/react';
import {TiShoppingCart} from 'react-icons/ti';
import './AllRoutes.jsx';
// const Navbar = ({cartdata}) => {
//    const links=[
//     {path:'/home',title:'Home'},
//     {path:'/products',title:'Products'},
//     {path:'/cart',title:'Signup'},
//     {path:'/signup',title:'Cart'}
//   ]
  
//     const activeStyle={
//         textDecoration:'none',
//         color:'white',
        
//     }
//     const defaultStyle={
//             textDecoration:'none',
//             color:'white',
//   }

//   return (
//     <Box display='flex' position='sticky' top='0'  zIndex='1'>
//     <Box className='navbar'>
//       <Box><Box className='logo'><Text>E/B</Text></Box></Box>
//       {links.map((el)=>( <>
//          <NavLink
        
//             style={({ isActive }) =>
//              {return isActive ? activeStyle : defaultStyle ;
//             }}
//             key={el.path}
//             to={el.title}
//           >
//            {el.title}
//           </NavLink>
//           </>
//       ))}
//     <Box w='40px' margin='left'>
  
//       <Text className='productcount' >{cartdata.length}</Text>  
//          </Box>
//        </Box>
//     </Box>
    
//   )
// }


///////===========================================================================================

const Navbar = ({cartdata}) => {
   const links=[
    {path:'/home',title:'Home'},
    {path:'/products',title:'Products'},
    {path:'/cart',title:'Signup'},
    {path:'/signup',title:'Cart'}
  ]
  
   

  return (
    <Box display='flex'  className='navbar' color='white' >
        <Box><Box className='logo'><Text  fontSize={{small:'small',lg:'large'}}>E/B</Text></Box></Box>
        <Box><Link to='/home'  fontSize={{base:'small',lg:'large'}}> <Text  fontSize={{base:'small',lg:'large'}}>Home</Text></Link></Box>
        <Box  ><Link to='/products'  fontSize={{base:'small',lg:'large'}}><Text fontSize={{base:'small',lg:'large'}}>Product</Text></Link> </Box>
        <Box >
           <Link to='/cart'><Box display='flex'><TiShoppingCart size='25'/>
           
           <Box ml='-8px' mt='-10px'><Text   className='productcount' >{cartdata.length}</Text></Box>
           <Box ml='-10px' mt='5px'><Text  fontSize={{base:'small',lg:'large'}}>Cart</Text></Box>
          </Box> </Link></Box>
          <Box><Link  to='/signup'><Text  fontSize={{base:'small',lg:'large'}}>Signup</Text> </Link> </Box>
    </Box>
    
  )
}
export default Navbar;