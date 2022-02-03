import {Button, ButtonGroup, Form, Row} from "react-bootstrap";
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {updateLesson} from "../lessons/lessonsSlice";

function EditMenu(props) {
    const dispatch = useDispatch()
    const [validated, setValidated] = useState()

    const subjectRef = useRef()
    const teacherRef = useRef()
    const roomRef = useRef()
    const dateRef = useRef()
    const timeRef = useRef()

    function executeUpdateLesson(){
        const payload = {
            subject: subjectRef.current.value,
            teacher: teacherRef.current.value,
            room: roomRef.current.value,
            date: dateRef.current.value,
            time: timeRef.current.value
        }

        dispatch(updateLesson(payload))
    }

    function handleSubmit(event) {
        const form = event.currentTarget;
        const validity = form.checkValidity()

        event.preventDefault();
        if (!validity) {
            event.stopPropagation();
            setValidated(true);
        } else {
            executeUpdateLesson()

            setValidated(false);
            props.onDone()
        }
    }

    return <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control defaultValue={props.lesson.subject} type="text" placeholder="Enter subject" ref={subjectRef} required/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Teacher</Form.Label>
            <Form.Control defaultValue={props.lesson.teacher} type="text" placeholder="Enter name of teacher" ref={teacherRef} required/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Room</Form.Label>
            <Form.Control defaultValue={props.lesson.room} type="text" placeholder="Enter room number" ref={roomRef} required/>
        </Form.Group>
        <Row className="mb-3">
            <Form.Group className="col-6">
                <Form.Label>Date</Form.Label>
                <Form.Control defaultValue={props.lesson.date} type="date" placeholder="Enter date" ref={dateRef} required/>
            </Form.Group>
            <Form.Group className="col-6">
                <Form.Label>Time</Form.Label>
                <Form.Control defaultValue={props.lesson.time} type="time" placeholder="Enter time" ref={timeRef} required/>
            </Form.Group>
        </Row>
        <ButtonGroup>
            <Button type="submit" variant="primary">UPDATE</Button>
            <Button onClick={props.onDone} variant="outline-secondary">CANCEL</Button>
        </ButtonGroup>
    </Form>
}

export default EditMenu