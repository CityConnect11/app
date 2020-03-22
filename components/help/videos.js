import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Videos = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={4} style={{ padding: "10px" }} />
          <Col xs={4} style={{ padding: "10px" }}>
            <img src={require("../../public/static/video1.png")} />
          </Col>
          <Col xs={4} style={{ padding: "10px" }}>
            <img src={require("../../public/static/video2.png")} />
          </Col>
        </Row>
        <Row>
          <Col xs={4} style={{ padding: "10px" }} />
          <Col xs={4} style={{ padding: "10px" }}>
            <img src={require("../../public/static/video3.png")} />
          </Col>
          <Col xs={4} style={{ padding: "10px" }}>
            <img src={require("../../public/static/video4.png")} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Videos;