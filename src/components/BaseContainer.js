import {Container, Navbar} from "react-bootstrap"

function BaseContainer(props) {
    return <div>
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand >Private Lessons Planner</Navbar.Brand>
            </Container>
        </Navbar>
        {props.children}
    </div>
}

export default BaseContainer