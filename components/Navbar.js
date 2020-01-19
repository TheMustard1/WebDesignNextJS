import Nav from 'react-bootstrap/Nav';


function NavBar() {
    return <Nav variant="tabs">
        <Nav.Item>
            <Nav.Link href="/index">home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/about">about</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/pricing">pricing</Nav.Link>
        </Nav.Item>
    </Nav>
}

export default NavBar