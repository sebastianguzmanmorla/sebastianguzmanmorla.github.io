import Index from "./routes/index";
import Acerca from "./routes/acerca";
import Contactame from "./routes/contactame";
import ErrorPage from './routes/error-page';

import { Link, Routes, Route } from "react-router-dom";

import { Navbar, Container, Nav } from "react-bootstrap";

export default function App() {
    return (
        <div>
            <header>
                <Navbar className="bg-light-subtle text-light shadow" fixed="top" expand="lg">
                    <Container>
                        <Navbar.Brand>
                            <Link className="navbar-brand" to="/">Sebastián Guzmán Morla</Link>
                        </Navbar.Brand>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <Nav className="me-auto">
                                <Link className="nav-link" to="/acerca">Acerca de mi</Link>
                                <Link className="nav-link" to="/contactame">Contáctame</Link>
                            </Nav>
                            <Nav className="ms-auto">
                                <Nav.Link href="https://github.com/sebastianguzmanmorla">
                                    <img src="./assets/GitHub_Logo_White.png" alt="GitHub" height="28" />
                                </Nav.Link>
                                <Nav.Link href="https://www.linkedin.com/in/sebastián-guzmán-morla-083220a5/">
                                    <img src="./assets/LinkedIn_Logo_White.png" alt="LinkedIn" height="22" />
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Container>
                </Navbar>
            </header>
            <main className="position-fixed bottom-0 overflow-scroll w-100">
                <Routes>
                    <Route path='/' element={<Index />} />
                    <Route path='acerca' element={<Acerca />} />
                    <Route path='contactame' element={<Contactame />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </main>
        </div>
    );
}