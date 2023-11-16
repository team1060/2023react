import { Button, Container, Row, Col } from "react-bootstrap"
import { FaBacon, FaFacebook, FaGithub } from "react-icons/fa";
function Footer() {
    
    return (
        <div style={{background:"#ddd"}} className="py-5">
            <Container>
                <Row className="mb-5">
                    <Col md={6}>
                        <ul className="d-flex justify-content-md-start justify-content-center">
                            <li><a href="#!">Privacy</a></li>
                            <li className="px-3"></li>
                            <li><a href="#!">Team</a></li>
                            <li className="px-3"></li>
                            <li><a href="#!">Sitemap</a></li>
                        </ul>
                    </Col>
                    <Col md={6} className="d-flex justify-content-md-end justify-content-center">
                        <ul className="d-flex gap-3">
                            <li><a href="#!"><FaGithub /></a></li>
                            <li><a href="#!"><FaFacebook/></a></li>
                            <li><a href="#!"><FaGithub /></a></li>
                            <li><a href="#!"><FaFacebook/></a></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center text-md-start px-3">
                        <p className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, rerum.</p>
                        <p className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quae? Dignissimos quis ut magni exercitationem quaerat possimus vero impedit blanditiis obcaecati eaque, magnam fugit dolore id necessitatibus officiis ratione soluta.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;