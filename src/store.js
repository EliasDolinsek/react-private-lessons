import { configureStore } from '@reduxjs/toolkit'
import lessonsReducer  from "./lessons/lessonsSlice";
import {setDoneLessons, setUpcomingLessons} from "./data/localDataSource";

export const store = configureStore({
    reducer: {
        lessons: lessonsReducer
    }
})

store.subscribe(() => {
    const lessons = store.getState().lessons
    setUpcomingLessons(lessons.upcomingLessons)
    setDoneLessons(lessons.doneLessons)
})