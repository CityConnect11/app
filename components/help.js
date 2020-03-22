import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import Help from './help/help'
import Videos from './help/videos'
import Header from './header/header'
import { MODE_PRIVATE } from '../lib/constants'

const HelpIndex = () => {
  const initialModeKey = useSelector(state => state.mode ? state.mode : MODE_PRIVATE.key)
  const [modeValue, setModeValue] = useState(initialModeKey)
  return (
    <div>
      <Header modeValue={modeValue} setModeValue={setModeValue} />
      <Container className="frame">
        <Row>
          <Col xs={4}>
            <Help modeValue={modeValue} />
          </Col>
          <Col xs={8} className={"main"} 
            style={{ backgroundColor: modeValue === 'business' ? "#ecb3b5" : "#b7d0cd" }}>
            <Videos modeValue={modeValue} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default connect()(HelpIndex)