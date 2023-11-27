import { useContext } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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

      const lastPath = localStorage.getItem('lastPath') || '/';

      login('Gambito');

      navigate(lastPath, { replace: true });
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
      <div className="container d-flex flex-column justify-content-center" style={{ height: '90vh' }}>
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
              <div className="text-center">
                <button type="submit" className="btn btn-primary" onClick={handleEnviar}>
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="alert alert-primary text-center">Ingresar con cualquier correo o contraseña. <br /> Validaciones solo por que no puedo validar el amor de ella.</div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <div className="footer text-center mt-auto" style={{ height: '10vh' }}>
        <a href="https://github.com/danamur" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="mx-2 text-secondary" />
          </a>
          <a href="https://cl.linkedin.com/in/daniel-alejandro-namur" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-2 text-secondary" />
          </a>
      </div>
    </>
  );
};
