import { Typography,Button,Box } from '@mui/material'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeItem} from '../redux/productSlice'
const Cart = () => {
    const dispatch=useDispatch()
    const productData=useSelector((state)=>state.product)
  
    const RemoveFromCart=(index)=>{
                dispatch(removeItem(index))
    }
  return (
    <>
    <Typography>Cart</Typography>
      {productData.map((item,index)=>{
            return <Box key={item.id}>
              <Typography>{item.title}</Typography>
                <Typography>{item.price}</Typography>  
                <Button variant='contained' onClick={(index)=>RemoveFromCart(index)}>Remove</Button>
            </Box>
      })}
    </>
  )
}

export default Cart
