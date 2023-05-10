import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import ig from '../img/ig.jpg';
import instagram from '../img/instagram.png'

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (

    <div className="container">
      <Row className="justify-content-center">
        
        <Col md={4}>
          <img src={ig} alt="Foto de instagram"  className="login-photo" />
        </Col>
        <Col md={4}>

           <div className=''>
             <Card>
               <Card.Body>
                 <form>
                   <div className='Formulario'> 
                       <img src={instagram} alt="Instragram"/>
        
                       <div className="mb-3 form-group furmularioL">
                         <label for="exampleInputEmail1" className="form-label"></label>
                         <input type="email" className="form-control d-block formularioL" id="exampleInputEmail1"  placeholder="Numero de celular o correo electrónico" aria-describedby="emailHelp"/>
                       </div> 
                
                       <div className="mb-3 formularioLA">
                          <label htmlFor="exampleInputPassword1 " className="form-label"></label>
                          <div className="input-group">
                            <input type={passwordVisible ? 'text' : 'password'} className="form-control" placeholder="Contraseña" id="exampleInputPassword1" />
                            <button type="button" className="btn btn-outline-secondary " onClick={handleTogglePasswordVisibility}>
                              {passwordVisible ? 'Ocultar' : 'Mostrar'}
                             </button>
                           </div>
                       </div>
                  
                      <div className="form-group text-center ">
                        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                      </div>

                       <p className='letraF'>Iniciar Sesión con Facebook</p>
                       <p>¿Olvidate tu contraseña?</p>

                    </div>
                
                  </form>
                </Card.Body>
              </Card>
           </div>

          <Card>
            <Card.Body className='text-center'>
               <p>¿No tienes una cuenta? <a className='I-R' href='/registro'> Registrate</a></p>
            </Card.Body>
          </Card>
          
        </Col>
       </Row>
      
                   <a className='post' href='/feed' > Inicio</a>   {/* LUEGO BORRAR ESTA LINEA */}
     

    </div>
  );
}

export default Login;

