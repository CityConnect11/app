import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Slider from 'rc-slider';
import { connect, useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setMode } from '../../lib/actions'
import { MODE_PRIVATE, resolveModeByKey } from '../../lib/constants'

const ModeSelection = () => {
  const initialModeValue = useSelector(state => state.mode ? resolveModeByKey(state.mode).value : MODE_PRIVATE.value)
  const [modeValue, setModeValue] = useState(initialModeValue)

  const dispatch = useDispatch();  
  return (
    <div className="modeSlider">
    <Container>
        <Row>
          <Col xs={4}>
            <div>privat</div>
          </Col>
          <Col xs={3}>
          <div style={{ paddingTop: "5px", paddingRight: "0px"}}>
            <Slider 
              min={0} max={1} 
              included={false} 
              value={modeValue}
              defaultValue={0} 
              step={1} 
              onChange={event => {
                setModeValue(event)
                dispatch(setMode(event))
              }}
            />
            </div>
          </Col>
          <Col xs={5}>
            <div  style={{ paddingRight: "20px"}}>geschäftlich</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default connect()(ModeSelection)