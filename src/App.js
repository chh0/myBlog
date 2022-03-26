import React from 'react'
// import { Routes, Route } from "react-router-dom";
import "./App.css"
import "./style/main.css"
import { Routes, Route, Link } from "react-router-dom";

import Home from './Components/Home'
import About from './Components/About'
import Article from './Components/Article'
import Archives from './Components/Archives'
import Categories from './Components/Categories'
import Tags from './Components/Tags'
import CategoryPage from './Components/CategoryPage';
import TagPage from './Components/TagPage';

import avatarjpg from './asset/avatar.jpg'
import bilibilisvg from './asset/bilibili.svg'
import githubsvg from './asset/github.svg'
import neteasecloudsvg from './asset/netease-cloud.svg'
import booksvg from './asset/book.svg'
import playsvg from './asset/play.svg'
// import all from "./mds/all"


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
      <div id="background"></div>
      <div id="main">
        <div id="sidebarposition"></div>
        <div id="sidebar">
          <div id="blogname"><a href="/">chh's blog</a></div>
          <div id="myself">
            <div id="avatar"><a href="/"><img src={avatarjpg} alt={"avatar"} /></a></div>
            <div id="name"><a href="/">chh</a></div>
          </div>
          <div id="keys">
            <div>
              <Link to="/archives"><span>归档</span></Link>
              <Link to="/archives"><span>10</span></Link>
            </div>
            <div>|</div>
            <div>
              <Link to="/categories"><span>分类</span></Link>
              <Link to="/categories"><span>7</span></Link>
            </div>
            <div>|</div>
            <div>
              <Link to="/tags"><span>标签</span></Link>
              <Link to="/tags"><span>8</span></Link>
            </div>
          </div>
          <hr class="line" />
          <div id="cards">
            <div>
              <a href="/books"><img src={booksvg} class="textimg" alt="" /></a>
              <a href="/books">读书记录</a>
            </div>
            <div>
              <a href="/animes"><img src={playsvg} class="textimg" alt="" /></a>
              <a href="/animes">追番列表</a>
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
              <Route path="category/:cate" element={<CategoryPage />} />
              <Route path="tag/:tag" element={<TagPage />} />
              <Route
                path="*"
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