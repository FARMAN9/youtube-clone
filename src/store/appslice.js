import { configureStore, createSlice } from '@reduxjs/toolkit'




const appSlice= createSlice(
  {
    name: 'app',
    initialState: {
      toggle: true,
      video:[],
      category:"All",
      searchSuggestion:[],
    },
    reducers: {
      openclose: (state) => {
        state.toggle =!state.toggle
      },
      setHomeVideo:(state,action)=>{
        state.video = action.payload;
    },
    setCategory:(state,action)=>{
        state.category = action.payload;
    },
    setSearchSuggestion:(state,action)=>{
        state.searchSuggestion = action.payload;
    }

    },
  }
)


export const{openclose,setHomeVideo,setCategory,setSearchSuggestion} = appSlice.actions;
export default appSlice.reducer;