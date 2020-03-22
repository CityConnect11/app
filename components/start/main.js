import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Help from "./help"
import Sofa from "../icons/sofa"

const Main = ({ modeValue, setModeValue }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={8} />
          <Col xs={4}>
            <Sofa />
          </Col>
        </Row>
        <Row>
          <div style={{height: "50px"}}></div>
        </Row>
        <Row>
          <Col xs={8} />
          <Col xs={4}>
            <Help />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Main;