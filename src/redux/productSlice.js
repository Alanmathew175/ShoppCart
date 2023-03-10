import {createSlice} from '@reduxjs/toolkit'
const initialState={
    product:[]
}
const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        addProductToCart:(state,action)=>{
            
            state.product.push(action)
        },
        removeItem:(state,action)=>{
            
            state.product.splic(action,0)
        },
    }
})
export const {addProductToCart,removeItem}= productSlice.actions
export default productSlice.reducer