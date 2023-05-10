import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import instagram from '../img/instagram.png'

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (

    <div className="container">
      <Row className='justify-content-center'>
        <Col md={4}>
          <Card>
            <Card.Body>
              <form>
                <div className='Formulario'> 
                  <img src={instagram} alt="Instragram" />
                  <p className='text-center'> Regístrate para ver fotos y videos de tus amigos.</p>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary fB">Iniciar Sesion con Facebook</button>
                  </div>

                  <div class="mb-3 form-group w-10 ">
                    <label for="exampleInputEmail1" class="form-label"></label>
                    <input type="email" className="form-control d-block formularioL" placeholder="Numero de celular o correo electrónico" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div> 

                  <div class="mb-3 form-group w-10 ">
                    <label for="exampleInputEmail1" class="form-label"></label>
                    <input type="email" className="form-control d-block formularioL" placeholder="Nombre Completo" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div> 

                  <div class="mb-3 form-group w-10 ">
                    <label for="exampleInputEmail1" class="form-label"></label>
                    <input type="email" className="form-control d-block formularioL" placeholder="Nombre de usuario"id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div> 
                
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1 " className="form-label"></label>
                    <div className="input-group">
                       <input type={passwordVisible ? 'text' : 'password'} className="form-control" placeholder="Contraseña" id="exampleInputPassword1" />
                       <button type="button" className="btn btn-outline-secondary " onClick={handleTogglePasswordVisibility}>
                       {passwordVisible ? 'Ocultar' : 'Mostrar'}
                      </button>
                    </div>
                  </div>

                  <div className="form-group w-10">
                    <button type="submit" className="btn btn-primary fondoIS">Registrarte</button>
                  </div>

                    <p className='text-center'>Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a Instagram. Más información</p>
                    <p className='text-center' >Al registrarte, aceptas nuestras Condiciones, la Política de privacidad y la Política de cookies.</p>

                </div>
                
              </form>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body className='text-center'>
             <p>¿Tienes una cuenta? <a className='I-R' href='/'> Inicia sesión</a></p>
            </Card.Body>
          </Card>

        </Col>
      </Row>
      
    </div>
  );
}
export default Login;


// codigo ordenado de momento