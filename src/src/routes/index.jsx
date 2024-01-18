import { Col, Container, Row } from "react-bootstrap";

export default function Index() {
	return (
		<Container className="my-5 text-center">
			<section>
				<Row>
					<Col md lg="9">
						<h1>¡Hola, soy Sebastián Guzmán Morla!<br />👋</h1>
						<p className="lead text-body-secondary mt-5">Soy un apasionado Desarrollador de Software con más de 11 años de experiencia en el campo, mi enfoque proactivo y autodidacta me ha permitido adaptarme a las distintas necesidades del mercado del desarrollo de software.</p>
					</Col>
					<Col md lg="3" className="p-3">
						<div className="rounded-circle profile shadow w-100" />
					</Col>
				</Row>
			</section>
		</Container>
	);
}