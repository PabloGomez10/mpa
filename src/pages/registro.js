import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import instagram from '../img/instagram.png';
import microsoft from '../img/microsoft.png'
import playstore  from '../img/playstore.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Registro () {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (

    <div className="container">
      <Row className='justify-content-center'>
        <Col md={4}>
          <Card  className="mb-5 borderL borderR customCardRe">
            <Card.Body>
              <form>
                <div className='mt-5'> 
                  <img src={instagram} className='imgLogin imgR ' alt="Instragram" />
                  <p className='text-center textR'> Regístrate para ver fotos y videos de tus amigos.</p>
                  <div className="form-group">
                    <button type="submit" href='' className="btn btn-primary fbR ">Iniciar Sesion con Facebook</button>
                  </div>
                   <div className='loginLC mt-4'>
                     <div className='line'></div>
                     <div className='circle'></div>
                     <div className='line'></div>
                   </div>

                  <div className='mt-2 registroButton'>
                    <label for="exampleInputEmail1" className='form-label'></label>
                    <input type="email" className="form-control d-block formularioL" placeholder="Numero de celular o correo electrónico" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div> 

                  <div className='registroButton'>
                    <label for="exampleInputEmail1" className='form-label'></label>
                    <input type="email" className="form-control d-block formularioL" placeholder="Nombre Completo" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div> 

                  <div className='mb-3 registroButton'>
                    <label for="exampleInputEmail1" className='form-label'></label>
                    <input type="email" className="form-control d-block formularioL" placeholder="Nombre de usuario"id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div> 
                
                   <div className="password-toggle-container registroButton">
                      <input type={isPasswordVisible ? 'text' : 'password'} id="passwordInput"
                      className="form-control d-block formularioL" placeholder="Contraseña" />
                      <button className="toggle-button"type="button" onClick={togglePasswordVisibility}>
                        {isPasswordVisible ? 'Ocultar' : 'Mostrar'}
                      </button>
                   </div>
                    
                    
                    
                     <div>
                         <div className='registroFont mt-3'>
                           <span>Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a Instagram. 
                           <a className='registroLinks'> Más información</a>
                           </span>
                          </div>
                          
                             <div className='mt-3 registroFont'>
                                <span>Al registrarte, aceptas nuestras </span>
                                <a className='registroLinks' >Condiciones </a> 
                                <span>, la </span>
                                <a className='registroLinks' > Política de privacidad</a>
                                <span>y la  </span> 
                                <a className='registroLinks' > Política de cookies.</a>
                             </div>
                          <button type="submit" className="btn btn-primary buttonRegistro mt-3 mb-3">Registrarte</button>

                          {/* <h3 className='m-3' ></h3> */}
                     </div>
                </div>
                
              </form>
            </Card.Body>
          </Card>
          
          <Card  className="borderL registroCard customCardRe">
             <Card.Body className='text-center'>
                 <p className='registroT'>¿Tienes una cuenta? <a className='registroI' href='/'> Inicia sesión</a></p>
             </Card.Body>
          </Card>

           <div className=''>
              <h3 className='loginDescargarAPP mt-3'> Descarga la app.</h3>
              <img src={playstore} className='imgLoginDescargas mt-2'/>
              <img src={microsoft} className='imgLoginDescargas imgML mt-2'/> 
           </div>

        </Col>
      </Row>
             <div className='d-flex justify-content-around loginFooter mt-5'>
                <p>Meta</p>
                <p>Información</p>
                <p>Blog</p>
                <p>Empleo</p>
                <p>Ayuda</p>
                <p>API</p>
                <p>Privacidad</p>
                <p>Condiciones</p>
                <p>Cuentas destacadas</p>
                <p>Ubicaciones</p>
                <p>Instagram Lite</p>
                <p>Subir contactos y no usuarios</p>
                <p>Meta verified</p>
             </div>
                   
               <div className='d-flex justify-content-evenly loginFooter2'>
                   <p>Español</p>
                   <p className='footer3'>© 2023 Instagram from Meta</p>
               </div>
               <div className='mt-5'></div>
    </div>
  );
}
export default Registro;


// codigo ordenado