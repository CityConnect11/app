import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '@material-ui/core/Button'

import { Form, Field } from 'react-final-form'

const RegisterBusiness = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={2} />
          <Col xs={8}>
            <div className={"loginDialog"}>
              <Container>
                <Row>
                  <div className={"loginTitle"}>{"Geschäft-Angebote registrieren"}</div>
                </Row>
                <Row>
                  <Form
                    onSubmit={() => { }}
                    render={({ handleSubmit, form, submitting, pristine, values }) => {
                      const submitProps = {
                        disabled: pristine,
                        type: "button",
                        role: "submit",
                        value: "Anmelden",
                        style: { backgroundColor: "#def4ef" }
                      };
                      return (
                        <form onSubmit={handleSubmit}>
                          <Container>
                            <Row>
                              <div className={"loginItem"}>

                                <Container>
                                  <Row>
                                    <label className={"login-label"}>Name des Geschäfts</label>
                                  </Row>
                                  <Row>
                                    <Field
                                      name="shopname"
                                      component="input"
                                      type="text"
                                      holder="Name des Geschäfts"
                                    />
                                  </Row>
                                </Container>
                              </div>
                            </Row>
                            <Row>
                              <div className={"loginItem"}>

                                <Container>
                                  <Row>
                                    <label className={"login-label"}>Branche</label>
                                  </Row>
                                  <Row>
                                    <Field
                                      name="domain"
                                      component="input"
                                      type="text"
                                      holder="Branche"
                                    />
                                  </Row>
                                </Container>
                              </div>
                            </Row>

                            <Row>
                              <div className={"loginItem"}>

                                <Container>
                                  <Row>
                                    <label className={"login-label"}>Art des Betriebs</label>
                                  </Row>
                                  <Row>
                                    <Field
                                      name="type"
                                      component="input"
                                      type="text"
                                      holder="Art des Betrieb"
                                    />
                                  </Row>
                                </Container>
                              </div>
                            </Row>

                            <Row>
                              <div className={"loginItem"}>

                                <Container>
                                  <Row>
                                    <label className={"login-label"}>Pop-up Box</label>
                                  </Row>
                                  <Row>
                                    <Field
                                      name="popupbox"
                                      component="input"
                                      type="text"
                                      holder="Pop-up Box"
                                    />
                                  </Row>
                                </Container>
                              </div>
                            </Row>

                            <Row>
                              <div className={"loginItem"}>

                                <Container>
                                  <Row>
                                    <label className={"login-label"}>Virtual Venue</label>
                                  </Row>
                                  <Row>
                                    <Field
                                      name="virtualvenue"
                                      component="input"
                                      type="text"
                                      holder="Virtual Venue"
                                    />
                                  </Row>
                                </Container>
                              </div>
                            </Row>

                            <Row>
                              <div className={"loginItem"}>

                                <Container>
                                  <Row>
                                    <label className={"login-label"}>Pop-up Box</label>
                                  </Row>
                                  <Row>
                                    <Field
                                      name="type"
                                      component="input"
                                      type="text"
                                      holder="Pop-up Box"
                                    />
                                  </Row>
                                </Container>
                              </div>
                            </Row>

                            <Row>
                              <div className={"loginItem"}>

                                <Container>
                                  <Row>
                                    <label className={"login-label"}>Inhaber:in</label>
                                  </Row>
                                  <Row>
                                    <Field
                                      name="owner"
                                      component="input"
                                      type="text"
                                      holder="Inhaber:in"
                                    />
                                  </Row>
                                </Container>
                              </div>
                            </Row>

                            <Row>
                              <div className={"loginItem"}>

                                <Container>
                                  <Row>
                                    <label className={"login-label"}>Webseite</label>
                                  </Row>
                                  <Row>
                                    <Field
                                      name="website"
                                      component="input"
                                      type="text"
                                      holder="Webseite"
                                    />
                                  </Row>
                                </Container>
                              </div>
                            </Row>
                            <Row>
                              <div className={"loginItem"}>
                                <Container>
                                  <Row>
                                    <label className={"login-label"}>Social Media</label>
                                  </Row>
                                  <Row>
                                    <Field
                                      name="socialmedia"
                                      component="input"
                                      type="text"
                                      holder="Social Media"
                                    />
                                  </Row>
                                  <Row>
                                    <div className={"loginItem"}>
                                      <Button
                                        style={submitProps.style}
                                        href={'#'}>
                                        {submitProps.value}
                                      </Button>
                                    </div>
                                  </Row>
                                </Container>
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
  )
}

export default RegisterBusiness;