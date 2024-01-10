import { Title } from "@solidjs/meta";
import { Container, Row, Col, Card, Accordion, ListGroup, Badge } from "solid-bootstrap";

export default function Home() {
	return (
		<Container class="my-5">
			<Title>Sebastián Guzmán Morla - Acerca</Title>
			<section>
				<h1 class="text-center">Acerca de mi</h1>
				<Row class="mt-5">
					<Col class="p-2">
						<Card class="shadow">
							<Card.Header>
								<h2>Resumen</h2>
							</Card.Header>
							<Card.Body class="bg-light-subtle text-light">
								<Row>
									<Col sm md="4">
										<h5>Habilidades Destacadas</h5>
									</Col>
									<Col sm md="8">
										<ListGroup class="shadow">
											<ListGroup.Item class="text-bg-secondary">Desarrollo de aplicaciones web en PHP, Java y .NET Core</ListGroup.Item>
											<ListGroup.Item class="text-bg-secondary">Administración y desarrollo back-end API en .NET Core</ListGroup.Item>
											<ListGroup.Item class="text-bg-secondary">Desarrollo de aplicaciones móviles en Xamarin y .NET MAUI</ListGroup.Item>
											<ListGroup.Item class="text-bg-secondary">Desarrollo DevOps y Continuous Integration</ListGroup.Item>
											<ListGroup.Item class="text-bg-secondary">Métodos ágiles y enfoques iterativos</ListGroup.Item>
										</ListGroup>
									</Col>
								</Row>
								<hr />
								<Row>
									<Col sm md="4">
										<h5>Idiomas</h5>
									</Col>
									<Col sm md="8">
										<ListGroup class="shadow">
											<ListGroup.Item class="text-bg-secondary">Inglés (Full Professional)</ListGroup.Item>
											<ListGroup.Item class="text-bg-secondary">Español (Native or Bilingual)</ListGroup.Item>
										</ListGroup>
									</Col>
								</Row>
								<hr />
								<Row>
									<Col sm md="4">
										<h5>Certificaciones</h5>
									</Col>
									<Col sm md="8">
										<ListGroup class="shadow">
											<ListGroup.Item class="text-bg-secondary">
												<a class="link-light" href="https://www.efset.org/cert/hwWvG2">EFSET English Certificate 75/100 (C2 Proficient)</a>
											</ListGroup.Item>
										</ListGroup>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
					<Col class="p-2">
						<Card class="shadow">
							<Card.Header>
								<h2>Experiencia Profesional</h2>
							</Card.Header>
							<Card.Body class="bg-light-subtle text-light">
								<Row>
									<Col sm md="4">
										<h5>Software Developer en VT Systems</h5>
										<Badge class="my-2 bg-secondary shadow w-100">
											mar. 2012 <br />
											oct. 2023 <br />
											11 años 8 meses
										</Badge>
									</Col>
									<Col sm md="8">
										<ListGroup class="shadow">
											<ListGroup.Item class="text-bg-secondary">Desarrollador de aplicaciones web en PHP, Java, .NET Core (MVC con Razor o Blazor), WCF (Windows Communication Foundation)</ListGroup.Item>
											<ListGroup.Item class="text-bg-secondary">Desarrollador de aplicaciones de escritorio en Windows Forms, WPF (Windows Presentation Foundation) y .NET MAUI</ListGroup.Item>
										</ListGroup>
									</Col>
								</Row>
								<hr />
								<Row>
									<Col sm md="4">
										<h5>Mobile Application Developer en VT Systems</h5>
										<Badge class="my-2 bg-secondary shadow w-100">
											mar. 2020 <br />
											oct. 2023 <br />
											3 años 8 meses
										</Badge>
									</Col>
									<Col sm md="8">
										<ListGroup class="shadow">
											<ListGroup.Item class="text-bg-secondary">Diseñador Líder de arquitectura de software para back-end API y aplicaciones móviles.</ListGroup.Item>
											<ListGroup.Item class="text-bg-secondary">Administrador y desarrollador back-end API en .NET Core.</ListGroup.Item>
											<ListGroup.Item class="text-bg-secondary">Administrador y desarrollador de aplicaciones móviles híbridas (Android e iOS) en Xamarin y .NET MAUI.</ListGroup.Item>
										</ListGroup>
									</Col>
								</Row>
								<hr />
								<Row>
									<Col sm md="4">
										<h5>DevOps Developer en VT Systems</h5>
										<Badge class="my-2 bg-secondary shadow w-100">
											ene. 2021 <br />
											oct. 2023 <br />
											2 años 10 meses
										</Badge>
									</Col>
									<Col sm md="8">
										<ListGroup class="shadow">
											<ListGroup.Item class="text-bg-secondary">Líder implementador y administrador del servidor de automatización para integración continua Jenkins</ListGroup.Item>
											<ListGroup.Item class="text-bg-secondary">Configuración de Webhooks en Bitbucket y GitHub para ejecución de tareas en Jenkins</ListGroup.Item>
											<ListGroup.Item class="text-bg-secondary">Desarrollador de archivos Jenkinsfile para implementación de pipeline y compilación de proyectos</ListGroup.Item>
											<ListGroup.Item class="text-bg-secondary">Implementador de Máquinas Virtuales o físicas con Windows Server o Linux para hospedar aplicaciones</ListGroup.Item>
										</ListGroup>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</section>
		</Container>
	);
}
