import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
	return (
		<Navbar className="bg-light-subtle text-light shadow" fixed="top" expand="lg">
			<Container>
				<Navbar.Brand href="/">Sebastián Guzmán Morla</Navbar.Brand>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<Nav className="me-auto">
						<Nav.Link href="/acerca">Acerca de mi</Nav.Link>
						<Nav.Link href="/contactame">Contáctame</Nav.Link>
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
	);
}