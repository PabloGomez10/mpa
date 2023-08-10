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
          <Card  className="mb-5 borderR">
            <Card.Body>
              <form>
                <div className=''> 
                  <img src={instagram} className='w-100' alt="Instragram" />
                  <p className='text-center textR w-100'> Regístrate para ver fotos y videos de tus amigos.</p>
                  <div className="form-group w-100 registroFB">
                    <button type="submit" href='' className="btn btn-primary ">Iniciar Sesion con Facebook</button>
                  </div>
                   <div className='reLC mt-4 w-100'>
                     <div className='lineR'></div>
                     <div className='circleR'></div>
                     <div className='lineR'></div>
                   </div>

                  <div className='mt-3'>
                    <label for="exampleInputEmail1" className='form-label'></label>
                    <input type="email" className="form-control d-block formularioR" placeholder="Numero de celular o correo electrónico" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div> 

                  <div className=''>
                    <label for="exampleInputEmail1" className='form-label'></label>
                    <input type="email" className="form-control d-block formularioR" placeholder="Nombre Completo" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div> 

                  <div className=''>
                    <label for="exampleInputEmail1" className='form-label'></label>
                    <input type="email" className="form-control d-block formularioR" placeholder="Nombre de usuario"id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div> 
                
                   <div className="password-toggle-container mt-4">
                      <input type={isPasswordVisible ? 'text' : 'password'} id="passwordInput"
                      className="form-control d-block formularioR" placeholder="Contraseña" />
                      <button className="toggle-button"type="button" onClick={togglePasswordVisibility}>
                        {isPasswordVisible ? 'Ocultar' : 'Mostrar'}
                      </button>
                   </div>
                    
                    
                    
                     <div>
                         <div className='registroFont mt-3 d-flex'>
                           <span>Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a Instagram. 
                             <a className='registroLinks'> Más información</a>
                           </span>
                          </div>
                          
                             <div className='mt-3 registroFont'>
                                <span className=''>Al registrarte, aceptas nuestras </span>
                                <a className='registroLinks' >Condiciones </a> 
                                <span>, la </span>
                                <a className='registroLinks' > Política de privacidad</a>
                                <span> y la  </span> 
                                <a className='registroLinks' > Política de cookies.</a>
                             </div>
                             <div className=' mt-3 mb-2 w-100'> 
                               <button type="submit" className="btn btn-primary buttonRegistro">Registrarte</button>
                             </div>
                     </div>
                </div>
                
              </form>
            </Card.Body>
          </Card>
          
          <Card  className="registroCard">
             <Card.Body className='text-center'>
                 <p>¿Tienes una cuenta? <a className='registroI' href='/'> Inicia sesión</a></p>
             </Card.Body>
          </Card>

          
              <h3 className='reDescargarAPP mt-3'> Descarga la app.</h3>
              <div className='d-flex justify-content-evenly'>
                <img src={playstore} className='imgReDescargas'/>
                <img src={microsoft} className='imgReDescargas'/> 
           </div>

        </Col>
      </Row>
      <div className='footer-container'>
                   <footer className='d-flex justify-content-evenly loginFooter'>
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
                   </footer>
                   
                   <div className=''>
                     <footer className='d-flex loginFooter2 justify-content-evenly' >
                        <p className='p-3'>Español</p>
                        <p className='p-3'>© 2023 Instagram from Meta</p>
                      </footer>
                   </div>
                </div>
    </div>
  );
}
export default Registro;


// codigo ordenado