import { useState } from 'react';
import './App.css';
import { vData, vData1 } from './data.js'
import { Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card, Offcanvas  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.scss";
import NavBar from './components/NavBar.jsx'
import Visual from './components/home/Visual.jsx';
import Content from './components/home/Content.jsx';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';


function App() {
  const [viewData, setViewData] = useState(vData)
  const [viewData1, setViewData1] = useState(vData1)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <div className="App">
      <div className="boxWrap">testing
        <div className="box">box</div>
      </div>
      <NavBar />
      <Visual />
      

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
      <Content />
      <Banner />
      <Footer />
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