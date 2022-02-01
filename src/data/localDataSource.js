const UPCOMING_LESSONS = "upcoming_lessons"
const DONE_LESSONS = "done_lessons"

export function setUpcomingLessons(data){
    localStorage.setItem(UPCOMING_LESSONS, JSON.stringify(data))
}

export function setDoneLessons(data){
    localStorage.setItem(DONE_LESSONS, JSON.stringify(data))
}

export function getUpcomingLessons(){
    return JSON.parse(localStorage.getItem(UPCOMING_LESSONS))
}

export function getDoneLessons(){
    return JSON.parse(localStorage.getItem(DONE_LESSONS))
}