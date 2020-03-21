import { Form, Field } from 'react-final-form'

const Login = () => {
  return (
    <div className={"login-dialog"}>
      <div className={"login-title"}>Anmelden</div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className={"login-item"}>
              <label className={"login-label"}>Benutzername</label>
              <Field
                name="username"
                component="input"
                type="text"
                place
                holder="Benutzername"
              />
            </div>
            <div>
              <label className={"login-label"}>Passwort</label>
              <Field
                name="password"
                component="input"
                type="password"
                place
                holder="password"
              />
            </div>
            <div>
              <a href="">Passwort vergessen?</a>
            </div>
          </form>
        )}>
      </Form>
      <div>
        <a href="">Noch kein Konto? Hier registrieren.</a>
      </div>
      <input type="button">Als Gast beitreten</input>
    </div>
  )
}

export default Login;