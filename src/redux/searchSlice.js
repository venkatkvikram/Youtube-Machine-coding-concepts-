import {
    createSlice
} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {

    },
    reducers: {
        cacheResults: (state, action) => {
            state = Object.assign(state, action.payload)
        },
        clearCache: (state) => {
            state = []
        }
    }
})

export const {
    cacheResults, clearCache
} = searchSlice.actions;

export default searchSlice.reducer;

//LRU cache- restrict cache size to 100 keys. As long as the object length exceeds than 100 Remove from top if new keys are added