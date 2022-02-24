import { Container, Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { signInWithGoogle } from "../../auth/authSlice"

function SignedOutContent() {
    const dispatch = useDispatch()

    return <Container>
        <Card>
            <Card.Title>You are singed out</Card.Title>
            <button onClick={() => dispatch(signInWithGoogle({}))}>SIGN IN</button>
        </Card>
    </Container>
}

export default SignedOutContent