import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import About from './about/about'
import Team from './about/team'
import Header from './header/header'
import { MODE_PRIVATE } from '../lib/constants'

const AboutIndex = () => {
  const initialModeKey = useSelector(state => state.mode ? state.mode : MODE_PRIVATE.key)
  const [modeValue, setModeValue] = useState(initialModeKey)
  return (
    <div>
      <Header modeValue={modeValue} setModeValue={setModeValue} />
      <Container className="frame">
        <Row>
          <Col xs={4}>
            <About modeValue={modeValue} />
          </Col>
          <Col xs={8} className={"main"} 
            style={{ backgroundColor: "#000000" }}>
            <Team />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default connect()(AboutIndex)