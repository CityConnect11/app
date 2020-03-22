import Head from '../components/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default ({ children }) => (
  <div>
    <Head title="City Connect" />
    <Container className="frame">
      <Row>
        {children}
      </Row>
    </Container>
  </div>
);