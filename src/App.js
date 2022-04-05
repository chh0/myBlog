import React from 'react'
// import { Routes, Route } from "react-router-dom";
import "./App.css"
import "./style/main.css"
import { Routes, Route, Link } from "react-router-dom";
import all from "./mds/all"

import Home from './Components/Home'
import About from './Components/About'
import Article from './Components/Article'
import Archives from './Components/Archives'
import Categories from './Components/Categories'
import Tags from './Components/Tags'
import CategoryPage from './Components/CategoryPage';
import TagPage from './Components/TagPage';
import BackGround from './Components/Template/BackGround';
import ExitMenu from './Components/Template/ExitMenu';
import SideButtom from './Components/Template/SideButtom';
import Anime from './Components/Anime';
import Books from './Components/Books';

import avatarjpg from './asset/avatar.jpg'
import bilibilisvg from './asset/bilibili.svg'
import githubsvg from './asset/github.svg'
import neteasecloudsvg from './asset/netease-cloud.svg'
import booksvg from './asset/book.svg'
import playsvg from './asset/play.svg'


const SideHandle = () => {
  let sb = document.getElementById("sidebar")
  let EM = document.getElementById("ExitMenu")
  let SB = document.getElementById("SideButtom")
  if (JSON.stringify(getComputedStyle(sb)["transform"])[20] === '-'){
      if(document.body.clientWidth <= 901){
          EM.style.width = "100%"
          sb.style.transform = "translateX(0px)"
          SB.style.transform = "rotateZ(0)"
      }
  }else{
      if(document.body.clientWidth <= 901){
          EM.style.width = "0"
          SB.style.transform = "rotateZ(180deg)"
          sb.style.transform = "translateX(-352px)"
      }
  }
  // alert(document.body.clientWidth)
}

function App() {
  let D = new Date()
  let D0 = new Date()
  D0.setTime(1648016907659)
  let days = parseInt((D.getTime() - D0.getTime())/(1000*60*60*24))
  let year = Math.floor(days/365)
  let month = Math.floor((days - year*365)/30)
  let day = Math.floor(days - year*365 - month*30)
  return (
    <div className="App">
      <BackGround />
      <ExitMenu />
      <SideButtom />
      {/* <div id="background"></div>  */}
      <div id="main">
        <div id="sidebarposition"></div>
        <div id="sidebar" onClick={SideHandle}>
          <div id="blogname"><Link to="/">chh's blog</Link></div>
          <div id="myself">
            <div id="avatar"><Link to="about"><img src={avatarjpg} alt={"avatar"} /></Link></div>
            <div id="name"><Link to="/">chh</Link></div>
          </div>
          <div id="keys">
            <div>
              <Link to="/archives"><span>归档</span></Link>
              <Link to="/archives"><span>{Object.keys(all.articles).length}</span></Link>
            </div>
            <div>|</div>
            <div>
              <Link to="/categories"><span>分类</span></Link>
              <Link to="/categories"><span>{Object.keys(all.cateList).length}</span></Link>
            </div>
            <div>|</div>
            <div>
              <Link to="/tags"><span>标签</span></Link>
              <Link to="/tags"><span>{Object.keys(all.tagList).length}</span></Link>
            </div>
          </div>
          <hr class="line" />
          <div id="cards">
            <div>
              <Link to="/books"><img src={booksvg} class="textimg" alt="" /></Link>
              <Link to="/books">我的书架</Link>
            </div>
            <div>
              <Link to="/animes"><img src={playsvg} class="textimg" alt="" /></Link>
              <Link to="/animes">追番列表</Link>
            </div>
          </div>
          <hr class="line" />
          <div id="links">
            <a href="https://space.bilibili.com/39995854" target="_blank" rel="noreferrer"><img src={bilibilisvg} class="icon" alt="" /></a>
            <a href="https://github.com/chh0" target="_blank" rel="noreferrer"><img src={githubsvg} class="icon" alt="" /></a>
            <a href="https://music.163.com/#/user/home?id=4873561041" target="_blank" rel="noreferrer"><img src={neteasecloudsvg} class="icon" alt="" /></a>
          </div>
        </div>
        <div id="contentbox">
          <div id="contentplaceholder"></div>
          <div id="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="article/:num" element={<Article />} />
              <Route path="archives" element={<Archives />} />
              <Route path="categories" element={<Categories />} />
              <Route path="tags" element={<Tags />} />
              <Route path="animes" element={<Anime />} />
              <Route path="books" element={<Books />} />
              <Route path="category/:cate" element={<CategoryPage />} />
              <Route path="tag/:tag" element={<TagPage />} />
              <Route
                path="/:any"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
            <div id="tailposition"> </div>
            <div id="tail">本站已经运行了{year}年{month}月{day}日o(*￣▽￣*)ブ</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;