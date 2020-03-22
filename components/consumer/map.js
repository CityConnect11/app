import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MapObject from '../map/map'
import FacetSearch from './facet-search'
import Header from '../header/header'

const ConsumerMap = () => {
  return (
    <div>
      <Header />
      <Container className="frame">
        <Row>
          <Col xs={4}>
            <FacetSearch />
          </Col>
          <Col xs={8} className={"main"} 
            style={{ backgroundColor: "#ffcfc5" }}>
            <MapObject />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ConsumerMap;