import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default () => (
  <div>
    <Container className="frame">
      <Row>
        <div className="title">City Connect</div>
      </Row>
      <Row>
        <Col>
          <div className="description">
            Treffen wir uns auf eine Pizza - Socializing in Zeiten von Corona
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);