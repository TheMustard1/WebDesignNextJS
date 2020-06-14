import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function NavBar() {
    return <Nav class="nav">
        <Nav.Item>
            <Nav.Link href="/index"><Button class="btn">home</Button></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/about"><Button class="btn">about</Button></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/contact"><Button class="btn">contact</Button></Nav.Link>
        </Nav.Item>
    </Nav>
}

export default NavBar