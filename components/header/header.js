import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from './navbar'

export default () => (
  <div style={{width: "100%"}}>
    <Container className="frame">
      <Row>
        <Col xs={4}>
          <Container>
            <Row>
              <div className="title">CityConnect</div>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="description">
                   Socializing in Zeiten von #physicaldistancing
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={8}>
          <Navbar />
        </Col>
      </Row>
    </Container>
  </div>
);