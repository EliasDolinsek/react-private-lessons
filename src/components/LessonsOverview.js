import { Container } from "react-bootstrap"
import AddLessonInput from "./AddLessonInput";
import SignedOutContent from "./auth/SingedOutConent";
import { useSelector } from "react-redux";
import LessonsList from "./LessonsList";
import { AUTH_SIGNED_IN_STATE, AUTH_SIGNED_OUT_STATE } from "../auth/authSlice";

function LessonsOverview() {
    const authState = useSelector((state) => state.auth)
    const lessons = useSelector((state) => state.lessons)

    switch(authState.authState){
        case AUTH_SIGNED_IN_STATE: return <SignedInContent lessons={lessons}/>
        case AUTH_SIGNED_OUT_STATE: return <SignedOutContent />
        default: return <LoadingContent />
    }
}

function LoadingContent(){
    return <p>Loading Content</p>
}

function SignedInContent(props) {
    return <Container>
        <AddLessonInput />
        <h5 className="mt-4">Upcoming - {props.lessons.upcomingLessons.length}</h5>
        <div className="mt-3">
            <LessonsList lessons={props.lessons.upcomingLessons} />
        </div>
        <h5 className="mt-4">Done - {props.lessons.doneLessons.length}</h5>
        <div className="mt-3">
            <LessonsList lessons={props.lessons.doneLessons} done />
        </div>
    </Container>
}

export default LessonsOverview