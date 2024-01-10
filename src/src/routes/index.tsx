import { Title } from "@solidjs/meta";
import { Col, Container, Row } from "solid-bootstrap";

export default function Home() {
    return (
        <Container class="my-5 text-center">
            <Title>Sebastián Guzmán Morla</Title>
            <section>
                <Row>
                    <Col md lg="9">
                        <h1>¡Hola, soy Sebastián Guzmán Morla!<br />👋</h1>
                        <p class="lead text-body-secondary mt-5">Soy un apasionado Desarrollador de Software con más de 11 años de experiencia en el campo, mi enfoque proactivo y autodidacta me ha permitido adaptarme a las distintas necesidades del mercado del desarrollo de software.</p>
                    </Col>
                    <Col md lg="3" class="p-3">
                        <div class="rounded-circle profile shadow w-100"/>
                    </Col>
                </Row>
            </section>
        </Container>
    );
}
