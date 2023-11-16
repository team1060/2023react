import { useState } from 'react';
import './App.css';
import { vData, vData1 } from './data.js'
import { Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card, Offcanvas  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.scss";

function App() {
  const [viewData, setViewData] = useState(vData)
  const [viewData1, setViewData1] = useState(vData1)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />   */}
          <Button onClick={handleShow} className='d-block d-md-none'>
            <span class="navbar-toggler-icon"></span>
          </Button>

          <Navbar className='d-none d-md-block'>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">COMPANY</Nav.Link>
              <Nav.Link href="#link">PRODUCT</Nav.Link>
              <Nav.Link href="#link">BOARD</Nav.Link>
            </Nav>
          </Navbar>

          <Offcanvas show={show} onHide={handleClose} >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>

      
      <div className='visualWrap mb-3'>
        {/* bxSlider */}
        <Container className="py-4 text-white text-center">
          <h3 className=''>Lorem ipsum dolor sit amet.</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat cupiditate unde inventore dolore aut nam?</p>
        </Container>
      </div>
      <Container>
        <h3 className="text-center title  ">DDDDDDDDDDDDDDDDDDDD</h3>
        <Row>
          {
            viewData.map((item, i) => {
              return (
                <CardView product={viewData[i]} />
              )
            })
          }
        </Row>
      </Container>

      <div className="contentWrap01 py-2 py-md-5">
        <Container>
          <h3 className="text-center">GALLERY</h3>
          <Row>
            <Col xs={6} md={3} className='mb-2'>
              <Card>
                <Card.Img variant="top" src="./img/img1.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Lorem, ipsum dolor.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className='mb-2'>
              <Card>
                <Card.Img variant="top" src="./img/img2.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Lorem, ipsum dolor.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className='mb-2'>
              <Card>
                <Card.Img variant="top" src="./img/img3.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Lorem, ipsum dolor.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className='mb-2'>
              <Card>
                <Card.Img variant="top" src="./img/img5.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Lorem, ipsum dolor.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

function CardView({ product }) {
  return (
    <>
      <Col sm={6} md={3} className='mb-2'>
        <Card>
          <Card.Img variant="top" src={`./img/${product.img}`} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.content}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )


}

export default App;