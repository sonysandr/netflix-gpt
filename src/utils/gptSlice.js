import {createSlice} from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState : {
        showGptSearch : false,
    },
    reducers :{
        toggleGptSearchfView : (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
    }
})

export const  {toggleGptSearchfView} = gptSlice.actions;
export default gptSlice.reducer;