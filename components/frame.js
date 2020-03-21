import Head from '../components/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../styles.css"

export default ({ children }) => (
  <div>
    <Head title="City Connect" />
    <Container className="frame">
      <Row>
        <div className="title">City Connect</div>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div className="description">
            Treffen wir uns auf eine Pizza - Socializing in Zeiten von Corona
          </div>
        </Col>
      </Row>
      <Row>
        {children}
      </Row>
    </Container>
  </div>
);