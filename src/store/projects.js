// import features we need
import { createSlice } from "@reduxjs/toolkit";

// necessary variables
let lastId = 0

// create slice
const slice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        projectAdded: (projects, action) => {
            projects.push({
                id: ++lastId,
                name: action.payload.name
            })
        }
    }
})

export const { projectAdded } = slice.actions
export default slice.reducer