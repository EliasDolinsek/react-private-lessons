import {Container} from "react-bootstrap"
import AddLessonButton from "./AddLessonButton";

function LessonsOverview(props){
    return <Container>
        <h1>Private Lessons</h1>
        <AddLessonButton />
        <h5>Upcoming - 5</h5>
        <h5>Done - 7</h5>
    </Container>
}

export default LessonsOverview