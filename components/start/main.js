import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from "../header/navbar"
import Help from "./help"
import Sofa from "../icons/sofa"

const Main = () => {
  return (
    <div className={"main"}>
      <Container>
        <Row>
          <Col xs={12}>
            <Navbar />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Sofa />
          </Col>
        </Row>
        <Row>
          <Col xs={9} />
          <Col xs={3}>
            <Help />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Main;