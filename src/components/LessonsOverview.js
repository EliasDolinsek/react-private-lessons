import {Container} from "react-bootstrap"
import AddLessonButton from "./AddLessonButton";
import {useDispatch, useSelector} from "react-redux";
import {addLesson} from "../lessons/lessonsSlice";

function LessonsOverview(){
    const lessons = useSelector((state) => state)
    const dispatch = useDispatch()

    return <Container>
        <h1>Private Lessons</h1>
        <AddLessonButton onClick={() => dispatch(addLesson({title: "Test", field: "I don't know"}))}/>
        <h5>Upcoming - 5</h5>
        {JSON.stringify(lessons)}
        <h5>Done - 7</h5>
    </Container>
}

export default LessonsOverview