import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '@material-ui/core/Button'
import { Form, Field } from 'react-final-form'

const RegisterConsumer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={2} />
          <Col xs={8}>
            <div className={"loginDialog"}>
              <Container>
                <Row>
                  <div className={"loginTitle"}>{"Registrieren"}</div>
                </Row>
                <Row>
                  <Form
                    onSubmit={() => { }}
                    render={({ handleSubmit, form, submitting, pristine, values }) => {
                      const submitProps = {
                        disabled: pristine,
                        type: "button",
                        role: "submit",
                        value: "Jetzt Konto erstellen",
                        style: { backgroundColor: "#b7d0cd" }
                      };
                      return (
                        <form onSubmit={handleSubmit}>
                          <Container>
                            <Row>
                              <div className={"loginItem"}>

                                <Container>
                                  <Row>
                                    <label className={"login-label"}>Vorname</label>
                                  </Row>
                                  <Row>
                                    <Field
                                      name="callname"
                                      component="input"
                                      type="text"
                                      holder="Vorname"
                                    />
                                  </Row>
                                </Container>
                              </div>
                            </Row>
                            <Row>
                              <div className={"loginItem"}>

                                <Container>
                                  <Row>
                                    <label className={"login-label"}>Nachname</label>
                                  </Row>
                                  <Row>
                                    <Field
                                      name="familyname"
                                      component="input"
                                      type="text"
                                      holder="Nachname"
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
                                    <label className={"login-label"}>Wohnort</label>
                                  </Row>
                                  <Row>
                                    <Field
                                      name="homebase"
                                      component="input"
                                      type="text"
                                      holder="Wohnort"
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
                                        href={'/consumer'}>
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

export default RegisterConsumer;