import React from 'react';
import instagram from '../img/instagram.png';
import fondo from '../img/fondo.jpg';
import { Row, Col, Card} from 'react-bootstrap';
import perfil from '../img/perfil.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Post() {
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
               <button  className='icoNot'> <FontAwesomeIcon icon="fa-regular fa-heart letra:hover" style={{color: "#000000",}} /></button>
               <b className="nav-link letra" >Notificaciones</b> 
              </div>

              <div className='d-flex flex-row'>
               <img src={perfil} className="card-img-top imgC" alt="foto del post"/>
               <a className="nav-link letra" href="/perfil">Perfil</a>
              </div>

               <a className="nav-link letra mt-5" href="/" >Login</a>
           </nav>
          </Col>

          <Col md={7} xs={8}> 
           <div className="card">
             <div className="card postIG">
              <div className='d-flex flex-row'> 
                <img src={perfil} className="card-img-top fotoResolution" alt="foto del post"/>
                <a className="card-text textResolution LetraPost"> Cosmefulanito.ok </a> 
                <p className='time'> • 1h</p>
              </div>
                <img src={fondo} className="card-img-top" alt="foto del post"/>
              <div  className=''>
                
                <button  className='icons'> <FontAwesomeIcon icon="fa-regular fa-heart" style={{color: "#000000",}} /></button>
                <button  className='icons'> <FontAwesomeIcon icon="fa-regular fa-comment"  className='instagram-btn comment-btn'flip="horizontal" /></button>
                <button  className='icons'><FontAwesomeIcon icon="fa-regular fa-paper-plane" style={{color: "#000000",}} /></button>
                <button  className='icons iconSave'><FontAwesomeIcon icon="fa-regular fa-bookmark" style={{color: "#000000",}} /></button>
              </div>
                <button className='mC'> <p className="card-text">1000 Me gusta</p></button>
                <p className='posteo'> La luna!</p>
                <button className='mC cM'> <p className="card-text">Ver los comentarios</p></button>
                <p className="card-text  addC">Agregar un comentario...</p>
              </div>
            </div>
           </Col>

           <Col md={2}>
            <nav className="nav flex-column">
              <div className='d-flex flex-row perfilC'>
                <img src={perfil} className="card-img-top imgC" alt="foto del post"/>
                <a className="nav-link letra" href="/perfil">Cosmefulanito.ok</a>
              </div>
             </nav> 
           </Col>

      </Row>
    </div>

  );
}

export default Post;


// Antes de terminar, ordenar lineas de codigo asi queda mas prolijo y legible.