import {Alert, Badge, Button, ButtonGroup, Card} from "react-bootstrap";
import {MdRoom} from "@react-icons/all-files/md/MdRoom";
import {BiTimeFive} from "@react-icons/all-files/bi/BiTimeFive";
import {useDispatch} from "react-redux";
import {deleteLesson, markLessonAsDone, markLessonAsUpcoming} from "../lessons/lessonsSlice";
import {useState} from "react";
import EditMenu from "./EditMenu";

function LessonsList(props) {
    const [showEditInput, setShowEditInput] = useState(false)

    if (props.lessons === undefined || props.lessons.length === 0) return <Alert variant="info">
        There are no lessons under this category
    </Alert>

    return props.lessons.map(function (e, index) {
        return <Card key={index} className="mb-1">
            <Card.Body>
                {props.done ? <DoneLessonTitle lesson={e}/> : <UpcomingLessonTitle lesson={e}/>}
                <div style={{display: "flex", gap: "8px"}} className="mb-3">
                    <Badge bg="primary" pill><BiTimeFive/> {e.date} @ {e.time}</Badge>
                    <Badge bg="secondary" pill><MdRoom/> {e.room}</Badge>
                </div>
                {showEditInput ? <EditMenu
                    lesson={e}
                    onDone={() => setShowEditInput(false)}
                /> : <ControlButtons
                    done={props.done}
                    lessonId={e.lessonId}
                    onEdit={() => setShowEditInput(true)}/>
                }
            </Card.Body>
        </Card>
    })
}

function ControlButtons(props) {
    if (props.done) {
        return <DoneButtonControls lessonId={props.lessonId}/>
    } else {
        return <UpcomingButtonControls lessonId={props.lessonId} onEdit={props.onEdit}/>
    }
}

function DoneLessonTitle(props) {
    return <Card.Title>
        <del>{props.lesson.subject} <span className="text-muted">{props.lesson.teacher}</span></del>
    </Card.Title>
}

function UpcomingLessonTitle(props) {
    return <Card.Title>{props.lesson.subject} <span className="text-muted">{props.lesson.teacher}</span></Card.Title>
}

function DoneButtonControls(props) {
    const dispatch = useDispatch()
    return <ButtonGroup>
        <Button variant="outline-warning" onClick={() => dispatch(markLessonAsUpcoming(props.lessonId))}>
            MARK AS UPCOMING
        </Button>
        <Button variant="outline-danger" onClick={() => dispatch(deleteLesson(props.lessonId))}>DELETE</Button>
    </ButtonGroup>
}

function UpcomingButtonControls(props) {
    const dispatch = useDispatch()

    return <ButtonGroup>
        <Button variant="outline-success" onClick={() => dispatch(markLessonAsDone(props.lessonId))}>
            MARK AS DONE
        </Button>
        <Button variant="outline-secondary" onClick={props.onEdit}>EDIT</Button>
        <Button variant="outline-danger" onClick={() => dispatch(deleteLesson(props.lessonId))}>DELETE</Button>
    </ButtonGroup>
}

export default LessonsList