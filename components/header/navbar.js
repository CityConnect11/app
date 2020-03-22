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
          <Col>
            <Button label={"Über"} link={"./about"} />
          </Col>
          <Col>
            <Button label={"Hilfe"} link={"./help"} />
          </Col>
          <Col>
            <ModeSelection />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Navbar;