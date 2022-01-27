import { configureStore } from '@reduxjs/toolkit'
import lessonsReducer  from "./lessons/lessonsSlice";

export default configureStore({
    reducer: {
        lessons: lessonsReducer
    }
})