import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '@material-ui/core/Button'
import { Form } from 'react-final-form'

const About = ({ modeValue }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={2} />
          <Col xs={8}>
            <div className={"loginDialog"}>
              <Container>
                <Row>
                  <div className={"loginTitle"}>{"Über"}</div>
                </Row>
                <Row>
                  <Form
                    onSubmit={() => { }}
                    render={({ handleSubmit, form, submitting, pristine, values }) => {
                      const submitProps = {
                        disabled: pristine,
                        type: "button",
                        role: "submit",
                        value: "Anleitung starten",
                        style: { backgroundColor: modeValue === 'business' ? "#ecb3b5" : "#b7d0cd" }
                      };
                      return (
                        <form onSubmit={handleSubmit}>
                          <Container>
                            <Row>
                              <div className={"loginItem"}>
                                <ul>
                                  <li>
                                    <a href={"https://devpost.com/software/1_025_e-kulturangebote_virtuelles_pizzaessen/joins/efgYrpDPat9KtdTGlhq6Ow"}>DevPost</a>
                                  </li>
                                  <li>
                                    <a href={"https://www.youtube.com/watch?v=tL5KLSRlEfc"}>Video</a>
                                  </li>
                                </ul>
                              </div>
                            </Row>
                          </Container>
                        </form>
                      )
                    }}>
                  </Form>
                </Row>
              </Container>
            </div>
          </Col>
          <Col xs={2} />
        </Row>
      </Container>
    </div>
  );
}

export default About;