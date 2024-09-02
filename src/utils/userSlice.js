import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({

    name: "user",
    initialState : null,
    reducers : {
        addUser : (state,action) =>{
            return action.payload;
        },
        removeUser : (state,action) => {
           return null;
        //    return null to remove the user
        }
    }
});

export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;