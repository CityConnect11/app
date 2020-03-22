import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '@material-ui/core/Button'

import { Form, Field } from 'react-final-form'

const RegisterProvider = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={2} />
          <Col xs={8}>
            <div className={"loginDialog"}>
              <Container>
                <Row>
                  <div className={"loginTitle"}>{"Geschäft registrieren"}</div>
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
                                    <label className={"login-label"}>E-Mail-Adresse</label>
                                  </Row>
                                  <Row>
                                    <Field
                                      name="email"
                                      component="input"
                                      type="text"
                                      holder="E-Mail Adresse"
                                    />
                                  </Row>
                                </Container>
                              </div>
                            </Row>

                            <Row>
                              <div className={"loginItem"}>

                                <Container>
                                  <Row>
                                    <label className={"login-label"}>Benutzername</label>
                                  </Row>
                                  <Row>
                                    <Field
                                      name="username"
                                      component="input"
                                      type="text"
                                      holder="Benutzername"
                                    />
                                  </Row>
                                </Container>
                              </div>
                            </Row>
                            <Row>
                              <div className={"loginItem"}>
                                <Container>
                                  <Row>
                                    <label className={"login-label"}>Passwort</label>
                                  </Row>
                                  <Row>
                                    <Field
                                      name="password"
                                      component="input"
                                      type="password"
                                      holder="password"
                                    />
                                  </Row>
                                  <Row>
                                    <div className={"loginItem"}>
                                      <Button
                                        style={submitProps.style}
                                        href={'/provider'}>
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

export default RegisterProvider;