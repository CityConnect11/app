import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from '../menu/button'
import ModeSelection from './mode'

const Navbar = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={3}>
            <Button label={"Über"} link={"./about"} />
          </Col>
          <Col xs={3}>
            <Button label={"Hilfe"} link={"./help"} />
          </Col>
          <Col xs={6}>
            <ModeSelection />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Navbar;