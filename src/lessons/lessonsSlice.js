import { createSlice } from "@reduxjs/toolkit"
import {getDoneLessons, getUpcomingLessons} from "../data/localDataSource";

let nextId = 0
const initialState = { upcomingLessons: getUpcomingLessons() ?? [], doneLessons: getDoneLessons() ?? [] }

export const lessonsSlice = createSlice({
    name: 'lessons',
    initialState,
    reducers: {
        addLesson: (state, action) => {
            state.upcomingLessons.push({id: nextId++, ...action.payload})
        },
        markLessonAsDone: (state, action) => {
            const lessonIndex = state.upcomingLessons.indexOf(value => value.id === action.payload)
            state.doneLessons.push(state.upcomingLessons.at(lessonIndex))
            state.upcomingLessons.splice(lessonIndex, 1)
        },
        markLessonAsUpcoming: (state, action) => {
            const lessonIndex = state.doneLessons.indexOf(value => value.id === action.payload)
            state.upcomingLessons.push(state.doneLessons.at(lessonIndex))
            state.doneLessons.splice(lessonIndex, 1)
        },
        deleteLesson: (state, action) => {
            const id = action.payload
            const upcomingLessonsIndex = state.upcomingLessons.indexOf(value => value.id === id)
            const doneLessonsIndex = state.doneLessons.indexOf(value => value.id === id)

            state.upcomingLessons.splice(upcomingLessonsIndex, 1)
            state.doneLessons.splice(doneLessonsIndex, 1)
        },
        updateLesson: (state, action) => {
            state.upcomingLessons = state.upcomingLessons.map(function (e) {
                const lessonUpdate = action.payload
                if(e.id === lessonUpdate.id){
                    return lessonUpdate
                } else {
                    return e
                }
            })

            const doneLessonsId = state.doneLessons.findIndex(value => value.id === action.payload.id)
            if(doneLessonsId !== -1){
                state.doneLessons[doneLessonsId] = state.payload
            }
        }
    }
})

export const { addLesson, markLessonAsDone, markLessonAsUpcoming, deleteLesson, updateLesson } = lessonsSlice.actions
export default lessonsSlice.reducer