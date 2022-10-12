import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { UserStateObject, UserObject } from "../types/interface"
import axios from "axios"


const initialState: UserStateObject = {
    data: null,
    loading: false,
    error: ""
}

//createAsyncThunk 2 parametresi var 
//1. action creater'a vereceğin isim
//2. action creater'ın işlemini yapacak olan fonk
export const fetchUser = createAsyncThunk("fetchUser", async () => {
    const response = await axios.get<UserObject>("https://randomuser.me/api/")
    return response.data;
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state, action) => {
            state.loading = true
            state.error = ""
        });

        builder.addCase(fetchUser.fulfilled, (state, action: PayloadAction<UserObject>) => {
            state.data = action.payload
            state.loading = false
        });

        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.error = "Error fetching user data"
        })

    }

})

export default userSlice.reducer