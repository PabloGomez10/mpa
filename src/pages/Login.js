import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import ig from '../img/ig.jpg';
import instagram from '../img/instagram.png'
import microsoft from '../img/microsoft.png'
import playstore  from '../img/playstore.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Login() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  
  return (

    <div className="container">

      <Row className="justify-content-center">
        
        <Col md={4}>
          <img src={ig} alt="Foto de instagram"  className="login-photo" />
        </Col>

        <Col md={4}>

           <div className='mt-5'>
               <Card className='borderL'>
                   <Card.Body>
                       <form>
                           <div className='mt-5 p-4'> 
                               <img src={instagram} className='imgLogin' alt="Instragram"/>
        
                               <div className="mb-2 form-group mt-1">
                                 <label for="exampleInputEmail1" className="form-label"></label>
                                 <input type="email" className="form-control d-block formularioL" id="exampleInputEmail1"  placeholder="Teléfono, usuario o correo electrónico" aria-describedby="emailHelp"/>
                               </div> 
                               
                                 <div className="password-toggle-container">
                                    <input type={isPasswordVisible ? 'text' : 'password'} id="passwordInput"
                                    className="form-control d-block formularioL" placeholder="Contraseña" />
                                    <button className="toggle-button"type="button" onClick={togglePasswordVisibility}>
                                      {isPasswordVisible ? 'Ocultar' : 'Mostrar'}
                                    </button>
                                 </div>
                                 
                                 <div className="form-group text-center mt-3">
                                   <button type="submit" className="btn btn-primary loginIniciar">Iniciar Sesión</button>
                                 </div>

                                 <div className='loginLC mt-4'>
                                   <div className='line'></div>
                                   <div className='circle'></div>
                                   <div className='line'></div>
                                 </div>

                                 <div className='mt-4'>
                                     <div>
                                          <button className='buttonLoginFacebook'>
                                            <FontAwesomeIcon icon="fa-brands fa-facebook" className='loginFacebook' /> 
                                            <a   className='letraF' href='https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%252216t45wk9ms112mlffgc1jwgolgf11wxb1ks9nbm160a02hpw733c%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Des_LA%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dc30b3478-3485-4d68-8514-5c4889d7f272%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%252216t45wk9ms112mlffgc1jwgolgf11wxb1ks9nbm160a02hpw733c%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=es_LA&pl_dbl=0' target={'_blank'}>
                                            Iniciar Sesión con Facebook</a>
                                          </button>
                                     </div>
                                       <button className='buttonLoginFacebook d-flex'>
                                         <p className='letraO'>¿Olvidate tu contraseña?</p>
                                       </button>
                                 </div>
                           </div>
                       </form>
                   </Card.Body>
                </Card>
           </div>

             <Card className='custom-card borderL '>
                 <Card.Body className='text-center'>
                    <p className='loginNC' >¿No tienes una cuenta? <a className='loginRE' href='/registro' target={'_blank'}> Regístrate</a></p>
                 </Card.Body>
             </Card>

               <div>
                 <h3 className='loginDescargarAPP'> Descarga la app.</h3>
                 <div className='d-flex justify-content-center'> 
                   <img src={playstore} className='imgLoginDescargas p-1'/>
                   <img src={microsoft} className='imgLoginDescargas'/> 
                 </div>
               </div>

        </Col>
       </Row>
       <a className='letra' href='/feed'> feed </a>   {/* LUEGO BORRAR ESTA LINEA */}
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

export default Login;

// codigo ordenado