import axios from "axios"

const UPCOMING_LESSONS = "upcoming_lessons"
const DONE_LESSONS = "done_lessons"
const SERVER_URL = "pc139.el.htl.local:5000"

export function setUpcomingLessons(data){
    axios.post(`${SERVER_URL}/api/lessons/${UPCOMING_LESSONS}`, {
        data: data
    })
}

export function setDoneLessons(data){
    axios.post(`http://${SERVER_URL}/done_lessons`, {
        data: data
    })

    localStorage.setItem(DONE_LESSONS, JSON.stringify(data))
}

export async function getUpcomingLessons(){
    const upcomingLessons = await axios.get(`http://${SERVER_URL}/get/upcoming`)
    return JSON.parse(upcomingLessons.data ?? "[]")
}

export async function getDoneLessons(){
    const doneLessons = await axios.get(`http://${SERVER_URL}/get/done`)
    return JSON.parse(doneLessons.data ?? "[]")
}