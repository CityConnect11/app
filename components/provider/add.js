import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MapObject from '../map/map'
import RegisterBusiness from './register-business'
import Header from '../header/header'

const ProviderMap = () => {
  return (
    <div>
      <Header />
      <Container className="frame">
        <Row>
          <Col xs={4}>
            <RegisterBusiness />
          </Col>
          <Col xs={8} className={"main"} 
            style={{ backgroundColor: "#ecb3b5" }}>
            <MapObject />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProviderMap;