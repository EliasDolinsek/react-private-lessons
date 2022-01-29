import {Card, Button, Row, Form, ButtonGroup} from "react-bootstrap"
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {addLesson} from "../lessons/lessonsSlice";

function AddLessonInput(props) {
    const [showInputs, setShowInputs] = useState(false);

    return <Card >
        <Card.Header>Add Lesson</Card.Header>
        <Card.Body>
            {showInputs ? <NewLessonInput onDone={() => setShowInputs(false)}/> : <AddLessonButton onClick={() => setShowInputs(true)}/>}
        </Card.Body>
    </Card>
}

function AddLessonButton(props) {
    return <div onClick={props.onClick}>
        <Card.Subtitle>Add a new lesson</Card.Subtitle>
        <Button className="mt-2" variant="outline-primary">Let's start</Button>
    </div>
}

function NewLessonInput(props) {
    const dispatch = useDispatch()
    const [validated, setValidated] = useState()

    const subjectRef = useRef()
    const teacherRef = useRef()
    const roomRef = useRef()
    const dateRef = useRef()
    const timeRef = useRef()

    function addNewLesson() {
        const payload = {
            subject: subjectRef.current.value,
            teacher: teacherRef.current.value,
            room: roomRef.current.value,
            date: dateRef.current.value,
            time: timeRef.current.value
        }

        dispatch(addLesson(payload))
    }

    function clearInputs() {
        subjectRef.current.value = ""
        teacherRef.current.value = ""
        roomRef.current.value = ""
        dateRef.current.value = ""
        timeRef.current.value = ""
    }

    function handleSubmit(event) {
        const form = event.currentTarget;
        const validity = form.checkValidity()

        event.preventDefault();
        if (!validity) {
            event.stopPropagation();
            setValidated(true);
        } else {
            addNewLesson()
            clearInputs()

            setValidated(false);
            props.onDone()
        }
    }

    return <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter subject" ref={subjectRef} required/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Teacher</Form.Label>
            <Form.Control type="text" placeholder="Enter name of teacher" ref={teacherRef} required/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Room</Form.Label>
            <Form.Control type="text" placeholder="Enter room number" ref={roomRef} required/>
        </Form.Group>
        <Row className="mb-3">
            <Form.Group className="col-6">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Enter subject" ref={dateRef} required/>
            </Form.Group>
            <Form.Group className="col-6">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" placeholder="Enter subject" ref={timeRef} required/>
            </Form.Group>
        </Row>
        <ButtonGroup>
            <Button type="submit" variant="primary">Add Lesson</Button>
            <Button onClick={props.onDone} variant="outline-secondary">Cancel</Button>
        </ButtonGroup>
    </Form>
}

export default AddLessonInput