import {Container} from "react-bootstrap"
import AddLessonInput from "./AddLessonInput";
import {useDispatch, useSelector} from "react-redux";
import {addLesson} from "../lessons/lessonsSlice";

function LessonsOverview(){
    const lessons = useSelector((state) => state)
    const dispatch = useDispatch()

    return <Container>
        <AddLessonInput onClick={() => dispatch(addLesson({title: "Test", field: "I don't know"}))}/>
        <h5>Upcoming - 5</h5>
        {JSON.stringify(lessons)}
        <h5>Done - 7</h5>
    </Container>
}

export default LessonsOverview