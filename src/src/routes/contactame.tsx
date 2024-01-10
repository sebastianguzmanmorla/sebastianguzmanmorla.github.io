import { Title } from "@solidjs/meta";
import { Container, ListGroup } from "solid-bootstrap";

export default function Home() {
	return (
		<Container class="my-5 text-center">
			<Title>Sebastián Guzmán Morla - Contáctame</Title>
			<section>
				<h1>Contáctame</h1>
				<div class="mt-5">
					<p>Estoy entusiasmado para tener nuevos desafíos y oportunidades para seguir creciendo profesionalmente.</p>
					<p>Conéctate conmigo en:</p>
					<div class="d-flex justify-content-center">
						<ListGroup>
							<ListGroup.Item>
								<a class="link-light" style="text-decoration: none" href="https://github.com/sebastianguzmanmorla/">
									<img src="/GitHub_Mark_White.png" alt="GitHub" height="28" />
									<span class="ms-2">GitHub</span>
								</a>
							</ListGroup.Item>
							<ListGroup.Item>
								<a class="link-light" style="text-decoration: none" href="https://www.linkedin.com/in/sebastián-guzmán-morla-083220a5/">
									<img src="/LinkedIn_Mark_White.png" alt="LinkedIn" height="28" />
									<span class="ms-1">LinkedIn</span>
								</a>
							</ListGroup.Item>
						</ListGroup>
					</div>
				</div>
			</section>
		</Container>
	);
}
