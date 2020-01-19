import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {
    return <Layout>

        <Container id="content_home">
            <h1>home page</h1>
            <Row>
                <Col id="story1">
                    <h5>story #1</h5>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Nullam eget nisl. Nam sed tellus id magna elementum tincidunt. Ut tempus purus at lorem. Aliquam ante. In dapibus augue non sapien. Vivamus porttitor turpis ac leo. Fusce wisi. Fusce tellus. Vivamus porttitor turpis ac leo. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Aenean vel massa quis mauris vehicula lacinia. Mauris dictum facilisis augue. Fusce aliquam vestibulum ipsum. Suspendisse sagittis ultrices augue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero.</p>
                </Col>
            </Row>
        </Container>

    </Layout>

}

export default HomePage