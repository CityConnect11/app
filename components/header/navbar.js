import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from '../menu/button'
import Entry from '../menu/entry'
import ModeSelection from './mode'

const Navbar = () => {
  return (
    <div className={"main"}>
      <Container>
        <Row>
          <Col xs={3}>
            <Button label={"Über"} link={"./about"} />
          </Col>
          <Col xs={3}>
            <Button label={"Hilfe"} link={"./help"} />
          </Col>
          <Col xs={6}>
            <Entry>
              <ModeSelection />
            </Entry>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Navbar;