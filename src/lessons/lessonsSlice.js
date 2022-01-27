import { createSlice } from "@reduxjs/toolkit"

const initialState = { lessons: [] }

export const lessonsSlice = createSlice({
    name: 'lessons',
    initialState,
    reducers: {
        addLesson: (state, action) => {
            state.lessons.push(action.payload)
        }
    }
})

export const { addLesson } = lessonsSlice.actions
export default lessonsSlice.reducer