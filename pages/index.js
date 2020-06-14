import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import header from '../public/images/L9.jpg';

function HomePage() {
    return <Layout>

        <Container id="content_home">
            <h1>home page</h1>
    
            <img src={header} alt='header image' class='headerImg'/>

            <div class="container" id="cols">
                <div class="row">
                    <div class="col-sm" id="article">
                        <h6>webová prezentace</h6>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse sagittis ultrices augue. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Cras elementum. Etiam commodo dui eget wisi. Duis risus. Integer imperdiet lectus quis justo.</p>
                    </div>
                    <div class="col-sm" id="article">
                        <h6>webový eshop</h6>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse sagittis ultrices augue. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Cras elementum. Etiam commodo dui eget wisi. Duis risus. Integer imperdiet lectus quis justo.</p>
                    </div>
                    <div class="col-sm" id="article">
                        <h6>úprava webových aplikací</h6>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse sagittis ultrices augue. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Cras elementum. Etiam commodo dui eget wisi. Duis risus. Integer imperdiet lectus quis justo.</p>
                    </div>
                </div>
            </div>
        </Container>

    </Layout>

}

export default HomePage