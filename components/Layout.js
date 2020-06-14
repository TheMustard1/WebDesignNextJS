import Head from 'next/head';
import NavBar from '../components/Navbar';
import { Container } from 'react-bootstrap';

function Layout({children}) {
    return (
        <div>
            <Head>
                <link rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
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