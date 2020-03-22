import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Form, Field } from 'react-final-form'
import { MODE_PRIVATE } from '../../lib/constants'

const Login = ({ modeValue }) => {
  const isPrivate = modeValue === MODE_PRIVATE.key;
  const loginTitle = isPrivate ? "Anmelden" : "Geschäftslogin";
  const registerTitle = isPrivate ? "Als Gast beitreten" : "Geschäft registrieren";
  return (
    <div className={"loginDialog"}>
      <Container>
        <Row>
          <Col xs={3} />
          <Col xs={8}>
            <Container>
              <Row>
                <div className={"loginTitle"}>{loginTitle} - {modeValue}</div>
              </Row>
              <Row>
                <Form
                  onSubmit={() => { }}
                  render={({ handleSubmit, form, submitting, pristine, values }) => {
                    const submitProps = {
                      disabled: pristine,
                      type: "button",
                      role: "submit",
                      value: "Anmelden"
                    };
                    return (
                    <form onSubmit={handleSubmit}>
                      <Container>
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
                                  <input {...submitProps} />
                                </div>  
                              </Row>

                              <Row>
                                <div className={"loginItem"}>
                                  <a href="">Passwort vergessen?</a>
                                </div>  
                              </Row>
                            </Container>
                          </div>
                        </Row>
                      </Container>
                    </form>
                  )}}>
                </Form>
              </Row>
              {isPrivate && <Row><div className={"loginItem"}>
                <a href="">Noch kein Konto? Hier registrieren.</a>
              </div></Row>}
              <Row>
                <div className={"loginItem"}>
                  <input type="button" value={registerTitle} />
                </div>
              </Row>
            </Container>
          </Col>
          <Col xs={2} />
        </Row>
      </Container>
    </div>
  )
}

export default Login;