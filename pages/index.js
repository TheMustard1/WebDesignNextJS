import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {
    return <Layout>

        <Container id="content">
            <h1>home page</h1>
            <Row>
                <Col>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Aliquam erat volutpat. Maecenas libero. Morbi scelerisque luctus velit. Pellentesque ipsum. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam eget nisl. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Fusce aliquam vestibulum ipsum. Praesent dapibus. Nulla non arcu lacinia neque faucibus fringilla. Mauris tincidunt sem sed arcu. Curabitur vitae diam non enim vestibulum interdum. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Mauris tincidunt sem sed arcu. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Curabitur vitae diam non enim vestibulum interdum.</Col>
            </Row>
        </Container>

    </Layout>

}

export default HomePage