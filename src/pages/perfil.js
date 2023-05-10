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
          <Col md={2} xs={4}>
             <nav className="nav flex-column mt-4">
                 <img src={instagram} alt="Foto de instagram"  className="fotoig " />

                 <div className='d-flex flex-row mt-4'> 
                   <button className='icoNot'><FontAwesomeIcon icon="fa-solid fa-house-user" style={{color: "#000000",}} /></button>
                   <a className="nav-link active letra " aria-current="page" href="/feed">Inicio </a> 
                 </div>

                 <div className='d-flex flex-row'> 
                   <button  className='icoNot'> <FontAwesomeIcon icon="fa-regular fa-heart" style={{color: "#000000",}} /></button>
                   <p className="nav-link letra">Notificaciones</p>
                  </div>

                  <div className='d-flex flex-row'>
                    <img src={perfil} className="card-img-top imgC" alt="foto del post"/>
                    <a className="nav-link letra" href="/perfil">Perfil</a>
                  </div>
          
                  <a className="nav-link letra mt-5" href="/" >Login</a>
              </nav>
           </Col>

             <Col md={10} xs={8}> 
                 <div className="card">
                     <div className="profile-container d-flex justify-content-center cardP"> 
                       <div className="profile-header">
                           <div className="profile-details">
                             <div className="d-flex align-items-center">
                                   <img src={perfil} alt="foto del perfil" className="imgCP" />
                                   <div className="d-flex flex-column ml-3">
                                         <div className="d-flex align-items-center justify-content-around">
                                             <h2 className="profile-username mr-5 userName">Cosmefulatino.ok</h2>
                                             <button className="btn btn-outline-secondary">Editar Perfil</button>
                                             <button className="btn ml-3">
                                               <i className="fas fa-cog"></i>
                                             </button>
                                         </div>
                                         <div className="d-flex  mt-3">
                                             <span className="pubSS "><b>6</b> Publicaciones</span>
                                             <span className="pubSS "><b>5420</b> Seguidores</span>
                                             <span className="pubSS "><b>1000</b> Seguidos</span>
                                         </div>
                                         <div className="profile-name mt-3">
                                           <h4 className='nombreU'>Cosme Fulatino</h4>
                                         </div>
                                    </div>
                              </div>
                          </div>
                        </div>
                   </div>
 
                     <div className="card postIG containerPosts">
                         <img src={cosme} className="card-img-top w-100" alt="foto del post"/>
                         <img src={cosme1} className="card-img-top w-100" alt="foto del post"/>
                         <img src={cosme2} className="card-img-top w-100" alt="foto del post"/>
                         <img src={cosme3} className="card-img-top w-100" alt="foto del post"/>
                         <img src={cosme4} className="card-img-top w-100" alt="foto del post"/>
                         <img src={cosme5} className="card-img-top w-100" alt="foto del post"/>
                     </div>
                 </div>
             </Col>
       </Row>
    </div>
  
  );
}

export default Perfil;


// codigo ordenado de momento