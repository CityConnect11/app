import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '@material-ui/core/Button'
import React, { useState, } from 'react';

import { Form, Field } from 'react-final-form'
import { MODE_PRIVATE } from '../../lib/constants'
import RegisterConsumer from './register-consumer';
import RegisterProvider from './register-provider';

const LoginDialog = ({ isPrivate, modeValue, setRegistration }) => {
  const loginTitle = isPrivate ? "Anmelden" : "Geschäftslogin";
  const registerTitle = isPrivate ? "Als Gast beitreten" : "Geschäft registrieren";
  return (
    <div>
      <Container>
        <Row>
          <Col xs={2} />
          <Col xs={8}>
            <div className={"loginDialog"}>
              <Container>
                <Row>
                  <div className={"loginTitle"}>{loginTitle}</div>
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
                        style: { backgroundColor: modeValue === 'business' ? "#def4ef" : "#ffcfc5" }
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
                                      <Button
                                        style={submitProps.style}
                                        href={'/consumer'}>
                                        {submitProps.value}
                                      </Button>
                                    </div>
                                  </Row>

                                  <Row>
                                    <div className={"loginItem"}>
                                      <a href={"#"}>Passwort vergessen?</a>
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
                {isPrivate && <Row><div className={"loginItem"}>
                  <a href={"#"} onClick={() => setRegistration(true)}>Noch kein Konto? Hier registrieren.</a>
                </div></Row>}
                <Row>
                  <div className={"loginItem"}>
                    <Button
                      style={{ backgroundColor: modeValue === 'business' ? "#def4ef" : "#ffcfc5" }}
                      href={isPrivate ? '/consumer' : "#"} onClick={() => setRegistration(true)}>
                      {registerTitle}
                    </Button>
                  </div>
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


const Login = ({ modeValue }) => {
  const isPrivate = modeValue === MODE_PRIVATE.key;
  const [inRegistration, setRegistration] = useState(false);
  if (inRegistration) {
    if (isPrivate) {
      return (
        <RegisterConsumer />
      );
    } else {
      return (
        <RegisterProvider />
      );
    }
  } else {
    return (
      <LoginDialog isPrivate={isPrivate} modeValue={modeValue}
        setRegistration={setRegistration} />
    )
  }
}

export default Login;