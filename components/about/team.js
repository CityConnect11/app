import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { bounce, wobble } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

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

const Videos = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} style={{ padding: "10px" }}>
            <StyleRoot >
              <div style={styles.wobble} >
                <img src={require("../../public/static/team.png")} />
              </div>
            </StyleRoot>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Videos;