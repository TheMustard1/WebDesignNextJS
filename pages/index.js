import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import header from '../public/images/L9.jpg';

function HomePage() {
    return <Layout>

        <Container id="content_home">
            <div class="headingText">
                <h1 class="mainTitle">home page</h1>
            </div>

            <div class="hero">
                <img src={header} alt='header image' class='headerImg' />

                <div class="freelance">
                    <h3>Jan Horák</h3>
                    <p>Freelance developer.</p>
                    <i class="material-icons">code</i>
                        <div class="socMedia">
                            <i class="material-icons">phone</i>
                            <p>842 381 312</p>
                        </div>
                        <div class="socMedia">
                            <i class="material-icons">email</i>
                            <p>example@gmail.com</p>
                        </div>
                </div>
            </div>

            <div class="container" id="articles">
                <div class="row">
                    <div class="col-sm" id="article">
                        <div class="flexy">
                        <h4>webová prezentace</h4>
                    <i class="material-icons">web</i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse sagittis ultrices augue. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Cras elementum. Etiam commodo dui eget wisi. Duis risus. Integer imperdiet lectus quis justo.</p>
                    </div>
                    <div class="col-sm" id="article">
                        <div class="flexy">
                        <h4>webový eshop</h4>
                         <i class="material-icons">shopping_cart</i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse sagittis ultrices augue. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Cras elementum. Etiam commodo dui eget wisi. Duis risus. Integer imperdiet lectus quis justo.</p>
                    </div>
                    <div class="col-sm" id="article">
                        <div class="flexy">
                        <h4>úprava webových aplikací</h4>
                         <i class="material-icons">app_settings_alt</i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse sagittis ultrices augue. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Cras elementum. Etiam commodo dui eget wisi. Duis risus. Integer imperdiet lectus quis justo.</p>
                    </div>
                    <div class="col-sm" id="article">
                        <div class="flexy">
                        <h4>responzivita</h4>
                         <i class="material-icons">dashboard</i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse sagittis ultrices augue. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Cras elementum. Etiam commodo dui eget wisi. Duis risus. Integer imperdiet lectus quis justo.</p>
                    </div>
                    <div class="col-sm" id="article">
                        <div class="flexy">
                        <h4>kvalitní kontent</h4>
                         <i class="material-icons">description</i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse sagittis ultrices augue. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Cras elementum. Etiam commodo dui eget wisi. Duis risus. Integer imperdiet lectus quis justo.</p>
                    </div>
                    <div class="col-sm" id="article">
                        <div class="flexy">
                        <h4>přehledný kód</h4>
                         <i class="material-icons">developer_mode</i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse sagittis ultrices augue. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Cras elementum. Etiam commodo dui eget wisi. Duis risus. Integer imperdiet lectus quis justo.</p>
                    </div>
                </div>
                
            </div>
        </Container>

    </Layout>

}

export default HomePage