import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Login from './auth/login'
import Main from './start/main'

export default () => (
  <Container className="frame">
    <Row>
      <Col xs={4}>
        <Login />
      </Col>
      <Col xs={8}>
        <Main />
      </Col>
    </Row>
  </Container>
)