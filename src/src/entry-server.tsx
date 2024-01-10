import { createHandler, StartServer } from "@solidjs/start/server";
import { Container, Navbar, Nav } from "solid-bootstrap";
export default createHandler(() => (
    <StartServer
        document={({ assets, children, scripts }) => (
            <html lang="es" data-bs-theme="dark">
                <head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    {assets}
                </head>
                <body>
                    <header>
                        <Navbar fixed="top" class="bg-light-subtle text-light shadow" expand="lg">
                            <Container>
                                <Navbar.Brand href="/">Sebastián Guzmán Morla</Navbar.Brand>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <Nav class="me-auto">
                                        <Nav.Link href="/acerca">Acerca de mi</Nav.Link>
                                        <Nav.Link href="/contactame">Contáctame</Nav.Link>
                                    </Nav>
                                    <Nav class="ms-auto">
                                        <Nav.Link href="https://github.com/sebastianguzmanmorla">
                                            <img src="/GitHub_Logo_White.png" alt="GitHub" height="28" />
                                        </Nav.Link>
                                        <Nav.Link href="https://www.linkedin.com/in/sebastián-guzmán-morla-083220a5/">
                                            <img src="/LinkedIn_Logo_White.png" alt="LinkedIn" height="22" />
                                        </Nav.Link>
                                    </Nav>
                                </div>
                            </Container>
                        </Navbar>
                    </header>
                    <main class="position-fixed bottom-0 overflow-scroll w-100" style="height: calc(100vh - 60px);" id="app">{children}</main>
                    {scripts}
                </body>
            </html>
        )}
    />
));
