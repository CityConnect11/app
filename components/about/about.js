import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form } from 'react-final-form'

const About = () => {
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
                      return (
                        <form onSubmit={handleSubmit}>
                          <Container>
                            <Row>
                              <div className={"loginItem"}>
                                <ul>
                                  <li>
                                    <a href={"https://devpost.com/software/1_025_e-kulturangebote_virtuelles_pizzaessen/"}>DevPost</a>
                                  </li>
                                  <li>
                                    <a href={"https://www.youtube.com/watch?v=Zy9uGH1eKzM"}>Video</a>
                                  </li>
                                  <li>
                                    <a href={"https://twitter.com/cityconnect11"}>Twitter</a>
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