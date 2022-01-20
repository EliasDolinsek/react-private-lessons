let nextLessonId = 0
export const addLesson = (lesson, teacher, room, date) => ({
    type: "lessons/ADD_LESSON",

})
const example = {
    id: nextLessonId,
    lesson: "lesson",
    teacher: "teacher",
    room: "room",
    date: Date()
}