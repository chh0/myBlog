import React from 'react'
// import { Routes, Route } from "react-router-dom";
import "./App.css"
import "./main.css"
import { Routes, Route, Link } from "react-router-dom";

import Home from './Components/Home'
import About from './Components/About'

import avatarjpg from './asset/avatar.jpg'
import boxsvg from './asset/box.svg'
import foldersvg from './asset/folder.svg'
import tagsvg from './asset/tag.svg'

function App() {
  return (
    <div className="App">
      <div id="main">
        <div id="background"></div>
        <div id="sidebar">
          <div id="blogname"><span>chh's blog</span></div>
          <div id="myself">
            <div id="avatar"><Link to="/"><img src={avatarjpg} alt=""/></Link></div>
            <div id="name"><Link to="/">chh</Link></div>
            <div id="keys">
                  <img src={boxsvg} alt=""/>
                  <img src={foldersvg} alt=""/>
                  <img src={tagsvg} alt=""/>
            </div>
          </div>
        </div>
        <div id="content">
          <h1>Welcome to React Router!</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
