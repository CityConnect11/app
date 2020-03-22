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
              <a href={"./index"} className="title" style={{ color: "#000000"}}>
                CityConnect
              </a>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="description" style={{textAlign: "center"}}>
                   Socializing in Zeiten von #physicaldistancing
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={8} className={"main"}
          style={{ backgroundColor: modeValue === 'business' ? "#def4ef" : "#ffcfc5" }}>
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