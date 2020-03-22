import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../header/header";

const Login = () => {
  return (
    <div>
      <Header />
      <Container className={"login-dialog"}>
        <Row>
          <Col>
            <div className={"login-title"}>Anmelden</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <label className={"login-label"}>Benutzername</label>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              name="username"
              component="input"
              type="text"
              place
              holder="Benutzername"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <label className={"login-label"}>Passwort</label>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              name="password"
              component="input"
              type="password"
              place
              holder="password"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="">Passwort vergessen?</a>
          </Col>
        </Row>
        <Row>
          <Col>
            <input value="Anmelden" type="button" />
          </Col>
        </Row>
      </Container>
      <div>
        <a href="">Noch kein Konto? Hier registrieren.</a>
      </div>
      <input value="Als Gast beitreten" type="button" />
    </div>
  )
}

export default Login;