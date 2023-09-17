import React from 'react';
import instagram from '../img/instagram.png';
import { Row, Col, Card} from 'react-bootstrap';
import perfil from '../img/perfil.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cosme   from '../img/cosme.png';
import cosme1   from '../img/cosme1.png';
import cosme2   from '../img/cosme2.png';
import cosme3   from '../img/cosme3.png';
import cosme4   from '../img/cosme4.png';
import cosme5   from '../img/cosme5.png';


function Perfil() {
   return (
       <div>
           <Row>
               <Col  xl={2} lg={1} md={1} sm={1}>
                   <nav className="nav flex-column mt-4 menuIG">
                        <div className='menuIG container-fluid'>
                           <div className='linea'>
                               <img src={instagram} alt="Foto de instagram" className="w-75 mb-5 imgIG"/>
                               <FontAwesomeIcon className='icoNot iconIG mb-5' icon="fa-brands fa-instagram" style={{color: "#000000",}} />
                            </div>

                            <div className='d-flex flex-row mt-4'> 
                              <button className='icoNot'><FontAwesomeIcon icon="fa-solid fa-house-user" style={{color: "#000000",}} /></button>
                              <a className="nav-link active letra " aria-current="page" href="/feed">Inicio </a> 
                            </div>

                            <div className='d-flex flex-row mt-4'> 
                              <button  className='icoNot' > <FontAwesomeIcon icon="fa-regular fa-heart" style={{color: "#000000"}} /></button>
                              <p className="nav-link letra">Notificaciones</p>
                            </div>

                            <div className='d-flex flex-row mt-4'>
                              <img src={perfil} className="card-img-top imgC" alt="foto del post"/>
                              <a className="nav-link letra letraP" href="/perfil">Perfil</a>
                            </div>

                            <a className="nav-link letra mt-5" href="/" >Feed</a>
                        </div>
                   </nav>
               </Col>

               <Col  xl={10} lg={10} md={10}> 
                   <div className="container-fluid">
                         <div className="profile-container d-flex justify-content-center aling-item-center cardPerfil"> 
                             <div className="profile-header mt-5">
                                   <div>
                                         <div className="d-flex justify-content-center align-items-center">
                                             <img src={perfil} alt="foto del perfil" className="perfilFoto w-10" />
                                             <div>
                                                   <div className="d-flex align-items-center justify-content-around">
                                                       <h2 className="profile-username userName">Cosmefulatino.ok</h2>
                                                       <button className="btn btn-outline-secondary editPerfil">Editar Perfil</button>
                                                       <button className="btn btn-outline-secondary editPerfil">Ver archivo</button>
                                                       <button className="btn">
                                                         <i className="fas fa-cog"></i>
                                                       </button>
                                                   </div>
                                                    <div className="d-flex mt-3">
                                                       <span className="pubPerfil"><b>6</b> Publicaciones</span>
                                                       <span className="pubPerfil2"><b>5420</b> Seguidores</span>
                                                       <span className="pubPerfil3"><b>1000</b> Seguidos</span>
                                                    </div>
                                                   <div className="profile-name mt-3">
                                                       <h4 className='nombrePerfil'>Cosme Fulatino</h4>
                                                   </div>
                                                   
                                             </div>
                                         </div>
                                   </div>
                             </div>
                         </div>
 
                         <div className='loginLC mt-5'>
                            <div className='lineP w-75'></div>
                         </div>
                         <div className="card containerPosts w-50">
                             <img src={cosme} className="card-img-top" alt="foto del post"/>
                             <img src={cosme1} className="card-img-top" alt="foto del post"/>
                             <img src={cosme2} className="card-img-top" alt="foto del post"/>
                             <img src={cosme3} className="card-img-top" alt="foto del post"/>
                             <img src={cosme4} className="card-img-top" alt="foto del post"/>
                             <img src={cosme5} className="card-img-top" alt="foto del post"/>
                         </div>

                         <div className='mt-5 footerP'>
                           <footer className='d-flex justify-content-evenly loginFooter gap-2'>
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
                   
                            <div>
                              <footer className='d-flex  justify-content-center loginFooter' >
                                 <p className='p-3'>Español</p>
                                 <p className='p-3'>© 2023 Instagram from Meta</p>
                               </footer>
                            </div>
                        </div>
                   </div>
               </Col>
           </Row>
       </div>
  
   );
}

export default Perfil;


// codigo ordenado 