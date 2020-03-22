import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import Login from './auth/login'
import Main from './start/main'
import Header from './header/header'
import { MODE_PRIVATE } from '../lib/constants'

const Start = () => {
  const initialModeKey = useSelector(state => state.mode ? state.mode : MODE_PRIVATE.key)
  const [modeValue, setModeValue] = useState(initialModeKey)
  return (
    <div>
      <Header modeValue={modeValue} setModeValue={setModeValue} />
      <Container className="frame">
        <Row>
          <Col xs={4}>
            <Login modeValue={modeValue} />
          </Col>
          <Col xs={8} className={"main"}>
            <Main modeValue={modeValue} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default connect()(Start)