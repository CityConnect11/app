import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Slider from 'rc-slider';

const ModeSelection = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={3}>
            <div>privat</div>
          </Col>
          <Col xs={6}>
          <Slider min={0} included={false} defaultValue={0} step={1} />
          </Col>
          <Col xs={3}>
            <div>geschäftlich</div>
          </Col>
        </Row>
      </Container>
      <div>
      </div>
    </div>
  )
}

export default ModeSelection