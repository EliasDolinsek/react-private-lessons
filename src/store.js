import { configureStore } from '@reduxjs/toolkit'
import lessonsReducer  from "./lessons/lessonsSlice";

export const store = configureStore({
    reducer: {
        lessons: lessonsReducer
    }
})