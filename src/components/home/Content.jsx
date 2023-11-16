import { Row, Container, Col } from 'react-bootstrap'
import { FaLightbulb } from "react-icons/fa";


function Content() {
    return (
        <Container>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <Row>

                <Col sx={12} md={6} className="order-2 order-md-2 d-flex align-items-end align-items-md-center justify-content-center justify-content-md-center">
                    <div className=" d-flex flex-column   w align-items-center align-items-md-start">
                        <div className="icon">
                            <FaLightbulb style={{ color: "red", fontSize: "2em" }} />
                        </div>
                        <div className="text-center text-md-start">
                            <h4>title</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Col>
                <Col sx={12} md={6} className="order-1 order-md-1 banner">
                <img src="./img/img2.png" alt="" />
                <img src="./img/img3.png" alt="" />

                </Col>
            </Row>
            <Row>

                <Col sx={12} md={6} className="order-2 order-md-1 d-flex align-items-end align-items-md-center justify-content-center justify-content-md-center">
                    <div className=" d-flex flex-column   w align-items-center align-items-md-start">
                        <div className="icon">
                            <FaLightbulb style={{ color: "red", fontSize: "2em" }} />
                        </div>
                        <div className="text-center text-md-start">
                            <h4>title</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Col>
                <Col sx={12} md={6} className="order-1 order-md-2 banner">
                    <img src="./img/img2.png" alt="" />
                    <img src="./img/img3.png" alt=""/>
                </Col>
            </Row>

        </Container>
      
    )
}

export default Content;