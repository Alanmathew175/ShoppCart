import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import { Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import {addProductToCart} from '../redux/productSlice'
const Cards = () => {
    const productData=useSelector((state)=>state.product)
    console.log(productData);
     const dispatch=useDispatch()
    const [products,setProducts]=useState([])
    const getProducts=async()=>{
            const response=await axios.get('https://dummyjson.com/products')
          
             setProducts(response.data.products)
    }
      const addToCart=(item)=>{
      
          dispatch(addProductToCart(item))
      }
    useEffect(()=>{
       getProducts()
    },[])
  return (
    <>
    <Container sx={{display:'flex',justifyContent:'space-around'}}>
    <Grid >

          <Button href='/cart'>Cart</Button>
   {products.map((item)=>{

            return  <Grid  key={item.id} sx={{maxWidth:150}}>
                <Typography>{item.title}</Typography>
                <Typography>{item.price}</Typography>
           
                <Button variant='contained' onClick={(item)=>addToCart(item.title)}>Add to cart</Button>
            </Grid>
           
   })}
    </Grid>
      </Container>
    </>
  )
}

export default Cards
