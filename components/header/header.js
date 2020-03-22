import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from './navbar'

export default ({modeValue, setModeValue}) => (
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
        <Col xs={8} className={"main"}
          style={{ backgroundColor: modeValue === 'business' ? "#ecb3b5" : "#b7d0cd" }}>
          <Container>
            <Row>
              <Col xs={"3"}/>
              <Col xs={"9"}>
                <Navbar modeValue={modeValue} setModeValue={setModeValue} />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  </div>
);