import { useContext } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {

  const contrasenaRef = useRef(null);
  const emailRef = useRef(null);
  const [contrasenaValida, setContrasenaValida] = useState(true);
  const [emailValido, setEmailValido] = useState(true);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEnviar = (e) => {

    e.preventDefault();
    const contrasenaValue = contrasenaRef.current.value;
    const emailValue = emailRef.current.value;

    if (!contrasenaValue) {
      setContrasenaValida(false);
    } else {
      setContrasenaValida(true);
    }

    if (!emailValue || !validarEmail(emailValue)) {
      setEmailValido(false);
    } else {
      setEmailValido(true);
    }

    if (contrasenaValue && emailValue && validarEmail(emailValue)) {
      login('Gambito');
      navigate('/', { replace: true });
    }
  }

  const handleContrasenaChange = () => {
    setContrasenaValida(true); // Restablecer la validación al cambiar el valor
  }

  const handleEmailChange = () => {
    setEmailValido(true); // Restablecer la validación al cambiar el valor
  }

  const validarEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }

  return (
    <>
      <div className="container d-flex flex-column justify-content-center" style={{ height: '100vh' }}>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form className={`border p-4 rounded bg-dark text-light ${(!contrasenaValida || !emailValido) ? 'was-validated' : ''}`}>
              <h2 className="text-center">Iniciar sesión</h2>
              <div className={`mb-3 ${!contrasenaValida ? 'was-validated' : ''}`}>
                <label htmlFor="email" className="form-label text-light">Correo Electrónico</label>
                <input
                  type="email"
                  className={`form-control ${!emailValido ? 'is-invalid' : ''}`}
                  id="email"
                  ref={emailRef}
                  onChange={handleEmailChange}
                  required
                />
                {!emailValido && (
                  <div className="invalid-feedback">El correo electrónico no es válido.</div>
                )}
              </div>
              <div className={`mb-3 ${!contrasenaValida ? 'was-validated' : ''}`}>
                <label htmlFor="contrasena" className="form-label text-light">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="contrasena"
                  ref={contrasenaRef}
                  onChange={handleContrasenaChange}
                  required
                />
                {!contrasenaValida && (
                  <div className="invalid-feedback">La contraseña es requerida.</div>
                )}
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleEnviar}>
                Iniciar sesión
              </button>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};
