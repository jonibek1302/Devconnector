import { createSlice } from "@reduxjs/toolkit";



//  company:"",
//    website:"",
//    location:"",
//    status:"",
//    skills:"",
//    githubusername:"",
//    bio:"",
//    twitter:"",
//    facebook:"",
//    linkedin:"",
//    youtube:"",
//    instagram:"",






const userSlice = createSlice({
  name: "user",
  initialState: {
    name: null,
    email: null,
  },
  reducer: {
    updateUserName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { updateUserName } = userSlice.actions;

export default userSlice.reducer
