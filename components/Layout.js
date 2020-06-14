import Head from 'next/head';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';

function Layout({children}) {
    return (
        <div>
            <Head>
               
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway&display=swap" rel="stylesheet" />
           <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link rel="stylesheet" href="style.css" />
            <link rel="stylesheet" herf="all.min.css" />
            </Head>

            <main>
                <NavBar />
                <Container id="content">{children}</Container>
                <Footer />
            </main>
            
        </div>

    )
}

export default Layout