import { Button, Container, Row, Col } from "react-bootstrap"
function Banner() {
    const bg = { height: "200px" }
    return (
        <div className="banWrap">
            <Container className="py-3 py-md-5">
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="text-center text-white">
                        <h3>Lorem ipsum dolor sit.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt incidunt eum commodi ullam qui repudiandae pariatur dolor velit. Aspernatur, nemo!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner;