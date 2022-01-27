import {Card, Button, Row} from "react-bootstrap"

function AddLessonButton(props) {
    return <div onClick={() => console.log("CLICk")}>
        <Card>
            <Card.Body>
                <Button>+</Button>
                <span>Add Private Lesson</span>
            </Card.Body>
        </Card>
    </div>
}

export default AddLessonButton