import { createSlice } from '@reduxjs/toolkit'

const initialState={
    data:[],
    loading:false
}

export const AddToCart = createSlice({
  name: 'AddToCart',
  initialState,
  reducers: {
    updateCart: (state,acton) => {
      
     
      state.loading = true
      state.data={...state.data,...acton.payload}
    },
    setLoading: (state,action) => {
      state.loading = action.payload
    },
    
  },
})

export const { updateCart,setLoading} = AddToCart.actions

export default AddToCart.reducer