import Head from 'next/head';
import NavBar from '../components/Navbar';
import { Container } from 'react-bootstrap';

function Layout({children}) {
    return (
        <div>
            <Head>
               
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="style.css" />
            </Head>

            <main>
                <NavBar />
                <Container id="content">{children}</Container>
            </main>
        </div>

    )
}

export default Layout