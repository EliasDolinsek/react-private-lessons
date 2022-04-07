import {Container} from "react-bootstrap"
import AddLessonInput from "./AddLessonInput";
import {useDispatch, useSelector} from "react-redux";
import LessonsList from "./LessonsList";
import { useEffect } from "react";
import { fetchFromDataSource } from "../lessons/lessonsSlice";

function LessonsOverview(){
    const lessons = useSelector((state) => state.lessons)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFromDataSource())
    }, [])

    return <Container>
        <AddLessonInput />
        <h5 className="mt-4">Upcoming - {lessons.upcomingLessons.length}</h5>
        <div className="mt-3">
            <LessonsList lessons={lessons.upcomingLessons}/>
        </div>
        <h5 className="mt-4">Done - {lessons.doneLessons.length}</h5>
        <div className="mt-3">
            <LessonsList lessons={lessons.doneLessons} done/>
        </div>
    </Container>
}

export default LessonsOverview