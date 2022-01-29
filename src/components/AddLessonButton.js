import {Card, Button, Row} from "react-bootstrap"
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {addLesson} from "../lessons/lessonsSlice";

function AddLessonButton(props) {
    const [showInputs, setShowInputs] = useState(false);

    return <div onClick={() => console.log("CLICk")}>
        <Card onClick={() => setShowInputs(true)}>
            <Card.Body>
                <Button onClick={props.onClick}>+</Button>
                <span>Add Private Lesson</span>
            </Card.Body>
            <NewLessonInput />
        </Card>
    </div>
}

function NewLessonInput(){
    const dispatch = useDispatch()

    const classNameRef = useRef()
    const teacherRef = useRef()
    const roomRef = useRef()
    const dateTimeRef = useRef()

    function addNewLesson(){
        const payload = {
            className: classNameRef.current.value,
            teacher: teacherRef.current.value,
            room: roomRef.current.value,
            dateTime: dateTimeRef.current.value
        }

        dispatch(addLesson(payload))
    }

    return <div>
        <input type="text" ref={classNameRef} />
        <input type="text" ref={teacherRef} />
        <input type="text" ref={roomRef} />
        <input type="text" ref={dateTimeRef} />
        <button onClick={addNewLesson}>ADD</button>
    </div>
}

export default AddLessonButton