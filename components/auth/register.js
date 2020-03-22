import { Form, Field } from 'react-final-form'

const Register = () => {
  return (
    <div className={"register-dialog"}>
      <div className={"register-title"}>Anmelden</div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className={"register-item"}>
              <label className={"register-label"}>Vorname</label>
              <input
                name="callname"
                component="input"
                type="text"
                place
                holder="Vorname"
              />
            </div>
            <div className={"register-item"}>
              <label className={"register-label"}>Nachname</label>
              <input
                name="familyname"
                component="input"
                type="text"
                place
                holder="Nachname"
              />
            </div>
            <div className={"register-item"}>
              <label className={"register-label"}>E-Mail-Adresse</label>
              <input
                name="email"
                component="input"
                type="text"
                place
                holder="E-Mail-Adresse"
              />
            </div>
            <div className={"register-item"}>
              <label className={"register-label"}>Benutzername</label>
              <input
                name="username"
                component="input"
                type="text"
                place
                holder="Benutzername"
              />
            </div>
            <div>
              <label className={"register-label"}>Passwort</label>
              <input
                name="password"
                component="input"
                type="password"
                place
                holder="password"
              />
            </div>
          </form>
        )}>
      </Form>
    </div>
  )
}

export default Register;