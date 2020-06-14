import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function NavBar() {
    return <Nav>
        <Nav.Item>
            <Nav.Link href="/index"><Button class="btn" size="" block>home</Button></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/about"><Button class="btn" size="md">about</Button></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/contact"><Button class="btn" size="md">contact</Button></Nav.Link>
        </Nav.Item>
    </Nav>
}

export default NavBar