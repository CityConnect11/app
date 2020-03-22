import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Videos = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} style={{ padding: "10px" }}>
            <img src={require("../../public/static/video1.jpg")} />
          </Col>
          <Col xs={6} style={{ padding: "10px" }}>
            <img src={require("../../public/static/video2.jpg")} />
          </Col>
        </Row>
        <Row>
          <Col xs={6} style={{ padding: "10px" }}>
            <img src={require("../../public/static/video3.jpg")} />
          </Col>
          <Col xs={6} style={{ padding: "10px" }}>
            <img src={require("../../public/static/video4.jpg")} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Videos;