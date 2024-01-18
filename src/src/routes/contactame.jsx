import { Container, ListGroup } from 'react-bootstrap';

export default function Contactame() {
	return (
		<Container className="my-5 text-center">
			<section>
				<h1>Contáctame</h1>
				<div className="mt-5">
					<p>Estoy entusiasmado para tener nuevos desafíos y oportunidades para seguir creciendo profesionalmente.</p>
					<p>Conéctate conmigo en:</p>
					<div className="d-flex justify-content-center">
						<ListGroup>
							<ListGroup.Item>
								<a className="link-light" style={{ textDecoration: 'none' }} href="https://github.com/sebastianguzmanmorla/">
									<img src="./assets/GitHub_Mark_White.png" alt="GitHub" height="28" />
									<span className="ms-2">GitHub</span>
								</a>
							</ListGroup.Item>
							<ListGroup.Item>
								<a className="link-light" style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/sebastián-guzmán-morla-083220a5/">
									<img src="./assets/LinkedIn_Mark_White.png" alt="LinkedIn" height="28" />
									<span className="ms-1">LinkedIn</span>
								</a>
							</ListGroup.Item>
						</ListGroup>
					</div>
				</div>
			</section>
		</Container>
	);
}