import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Login from './auth/login'
import Main from './start/main'

export default () => (
  <Container>
    <Row>
      <Col>
        <Login />
      </Col>
      <Col>
        <Main />
      </Col>
    </Row>
  </Container>
)