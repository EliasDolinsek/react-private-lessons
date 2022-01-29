import {Alert, Badge, Button, ButtonGroup, Card} from "react-bootstrap";
import {MdRoom} from "@react-icons/all-files/md/MdRoom";
import {BiTimeFive} from "@react-icons/all-files/bi/BiTimeFive";
import {MdDone} from "@react-icons/all-files/md/MdDone";

function LessonsList(props) {
    if (props.lessons === undefined || props.lessons.length === 0) return <Alert variant="info">
        There are no lessons under this category
    </Alert>

    return props.lessons.map(function (e, index) {
        return <Card key={index} className="mb-1">
            <Card.Body>
                <Card.Title>{e.subject} <span className="text-muted">{e.teacher}</span></Card.Title>
                <div style={{display: "flex", gap: "8px"}} className="mb-3">
                    <Badge bg="primary" pill><BiTimeFive /> {e.date} @ {e.time}</Badge>
                    <Badge bg="secondary" pill><MdRoom /> {e.room}</Badge>
                </div>
                <ButtonGroup>
                    <Button variant="outline-success"><MdDone /> MARK AS DONE</Button>
                    <Button variant="outline-secondary">EDIT</Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    })
}

export default LessonsList