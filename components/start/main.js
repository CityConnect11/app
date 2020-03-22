import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { bounce, wobble } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Help from "./help"

const styles = {
  wobble: {
    animation: 'x 1s',
    animationName: Radium.keyframes(wobble, 'wobble')
  },
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }  
}

const Main = ({ modeValue }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={4} />
          <Col xs={8}>
            {modeValue === 'business' &&
              <StyleRoot >
                <div style={styles.wobble} >
                  <img src={require("../../public/static/sofa.png")} />
                </div>
              </StyleRoot>
            }
            {modeValue === 'private' &&
              <StyleRoot >
                <div style={styles.bounce} >
                <img src={require("../../public/static/city.png")} />
                </div>
              </StyleRoot>
            }
          </Col>
        </Row>
        <Row>
          <div style={{ height: "50px" }}></div>
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