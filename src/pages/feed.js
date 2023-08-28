import React, { useEffect, useState } from 'react';
import instagram from '../img/instagram.png';
// import fondo from '../img/fondo.jpg';
import { Row, Col, Card} from 'react-bootstrap';
import perfil from '../img/perfil.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Post() {

  const [posts, setPosts] = useState([]) // investigar como funciona

  const getPosts = async () => {
    const data = await (
      await fetch(
        "http://localhost:3000/api/posts"
      )
    ).json();

    setPosts(data); 
  };

  useEffect(() => { // investigar como funciona
    if(posts.length === 0) {
      getPosts();
    }
  },[posts]);

  return (
    <div>
       <Row>
           <Col lg={2} md={1} sm={4} xs={4}>
              <nav className="nav flex-column mt-4">
                <img src={instagram} alt="Foto de instagram"  className="w-75" />

                 <div className='d-flex flex-row mt-4'> 
                   <button className='icoNot'><FontAwesomeIcon icon="fa-solid fa-house-user" style={{color: "#000000",}} /></button>
                   <a className="nav-link active letra " aria-current="page" href="/feed">Inicio </a> 
                  </div>

                   <div className='d-flex flex-row mt-4'> 
                      <button  className='icoNot'> <FontAwesomeIcon icon="fa-regular fa-heart" style={{color: "#000000"}} /></button>
                      <p className="nav-link letra">Notificaciones</p>
                   </div>

                    <div className='d-flex mt-4'>
                      <img src={perfil} className="imgC mt-1" alt="icono de perfil"/>
                      <a className="nav-link letraP" href="/perfil">Perfil</a>
                     </div>

                <a className="nav-link letra mt-5" href="/" >Login</a> {/*Luego borrar esta linea*/}
             </nav>
           </Col>

          <Col lg={7} md={10} sm={4} xs={4}> 
            { posts.length > 0 && posts.map((item,i) =>   // investigar como funciona
                 
                <div className="card postIG w-10">
                  <div className='d-flex flex-row'> 
                    <img src={perfil} className="card-img-top fotoResolution" alt="foto perfil"/>
                    <a className="card-text LetraPost"> {item.autor} </a> 
                    <p className='time'> • {item.fecha}</p>
                    <button className='icons'><FontAwesomeIcon className='ellipsis' icon="ellipsis-h" /></button>
                  </div>
                  <img src={item.imagen} className="card-img-top" alt="foto del post"/>

                  <div  className='d-flex justify-content-between'>
                    <div>
                      <button  className='iconsA like colorLike'> <FontAwesomeIcon icon="fa-regular fa-heart like" style={{color: "#000000",}} /></button>
                      <button  className='iconsA'> <FontAwesomeIcon icon="fa-regular fa-comment"  className='instagram-btn comment-btn'flip="horizontal" /></button>
                      <button  className='iconsA'><FontAwesomeIcon icon="fa-regular fa-paper-plane" style={{color: "#000000",}} /></button>
                    </div>
                    <button  className='icons iconSave'><FontAwesomeIcon icon="fa-regular fa-bookmark" style={{color: "#000000",}} /></button>
                  </div>
                  <button className='actionsFeed'> <p className="card-text">{item.like}</p></button>
                  <p> {item.comentario}</p>
                  <button className='actionsFeed'> <p className="card-text"></p></button>
                  <p className="card-text  addComment">Agregar un comentario...</p>

                  <div className='loginLC'>
                    <div className='line w-100 mt-5'></div>
                  </div>

                </div>
                
            )}
             
          </Col>

           <Col lg={2} md={0} sm={0} xs={0}>
            <nav className="nav flex-column w-100">
              <div className='d-flex flex-row feedPerfil'>
                <img src={perfil} className="card-img-top imgC" alt="foto del post"/>
                <a className="nav-link letra" href="/perfil">Cosmefulanito.ok</a>
              </div>
              
                   <div className='d-flex  justify-content-evenly feedFooter'>
                      <p>Información</p>
                      <p>Ayuda</p>
                      <p>Prensa</p>
                      <p>API</p>
                      <p>Empleo</p>
                      <p>Privacidad</p>
                   </div>

                     <div className='d-flex  justify-content-evenly feedFooter' >
                        <p>Condiciones</p>
                        <p>Ubicaciones</p>
                        <p>Idioma</p>
                        <p>Meta verified</p>
                     </div>
                     
                     <div className='d-flex  justify-content-evenly feedFooter'>
                       <p>© 2023 INSTAGRAM FROM META</p>
                     </div>
             </nav> 
           </Col>

        </Row>
    </div>

  );
}

export default Post;
