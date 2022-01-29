import { createSlice } from "@reduxjs/toolkit"

const initialState = { upcomingLessons: [], doneLessons: [] }

export const lessonsSlice = createSlice({
    name: 'lessons',
    initialState,
    reducers: {
        addLesson: (state, action) => {
            state.upcomingLessons.push(action.payload)
        }
    }
})

export const { addLesson } = lessonsSlice.actions
export default lessonsSlice.reducer