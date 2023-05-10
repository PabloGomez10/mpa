import Login from './pages/Login.js';
import Registro from './pages/registro.js';
import Perfil from './pages/perfil.js';
import Feed from './pages/feed.js';
// import Post from './pages/post.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 



function App() {
  return (
 
<BrowserRouter>
   <div>
       <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/feed" element={<Feed />} />
          {/* <Route path="/post" element={<Post />} /> */}
       </Routes>
   </div>
</BrowserRouter>
  
  );
}

export default App;
