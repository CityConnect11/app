import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Slider from 'rc-slider';
import { resolveModeByKey, resolveModeByValue } from '../../lib/constants'

const ModeSelection = ({modeValue, setModeValue}) => {

  return (
    <div className="modeSlider">
    <Container>
        <Row>
          <Col xs={4}>
            <div>Privat</div>
          </Col>
          <Col xs={3}>
          <div style={{ paddingTop: "5px", paddingRight: "0px"}}>
            <Slider 
              min={0} max={1} 
              included={false} 
              value={resolveModeByKey(modeValue).value}
              defaultValue={0} 
              step={1} 
              onChange={event => {
                setModeValue(resolveModeByValue(event).key)
              }}
            />
            </div>
          </Col>
          <Col xs={5}>
            <div  style={{ paddingRight: "20px"}}>Geschäft</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ModeSelection;