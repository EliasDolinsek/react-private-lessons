import {doc, setDoc, getDoc} from "firebase/firestore";
import {firebaseDb} from "./firebaseSetup";

const UPCOMING_LESSONS = "upcoming_lessons"
const DONE_LESSONS = "done_lessons"

export async function setUpcomingLessons(data) {
    await setDoc(doc(firebaseDb, "upcomingLessons", "uid"), {lessons: data})
}

export async function setDoneLessons(data){
    await setDoc(doc(firebaseDb, "doneLessons", "uid"), {lessons: data})
}

export async function getUpcomingLessons(userId){
    return getLessons(userId, UPCOMING_LESSONS)
}

export async function getDoneLessons(userId){
    return getLessons(userId, DONE_LESSONS)
}

async function getLessons(userId, path){
    const docRef = doc(firebaseDb, path, userId)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
        return docSnap.data()["lessons"] ?? []
    } else {
        return []
    }
}