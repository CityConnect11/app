import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '@material-ui/core/Button'
import { Form } from 'react-final-form'

const Help = ({ modeValue }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={2} />
          <Col xs={8}>
            <div className={"loginDialog"}>
              <Container>
                <Row>
                  <div className={"loginTitle"}>{"Hilfe"}</div>
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
                        style: { backgroundColor: modeValue === 'business' ? "#def4ef" : "#ffcfc5" }
                      };
                      return (
                        <form onSubmit={handleSubmit}>
                          <Container>
                            <Row>
                              <div className={"loginItem"}>
                                <span>
                                  Auf dieser Seite werden in einfachen Erklärvideos 
                                  und kurzen Texten die Funktionen, die Anmeldung
                                  und alles Wichtige gezeigt.
                                </span>
                                <span>
                                  Suchen Sie in der Liste auf der rechten Seite
                                  ein bestimmtes Video aus oder drücken Sie auf
                                  "Anleitung starten", um alle Videos in der 
                                  Reihenfolge anzusehen.
                                </span>
                              </div>
                            </Row>
                            <Row>
                              <div className={"loginItem"}>
                                <Button
                                  style={submitProps.style}
                                  href={"#"}>
                                  {submitProps.value}
                                </Button>
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

export default Help;