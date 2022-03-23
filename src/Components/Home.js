import React from 'react'
import { Link } from "react-router-dom";
import all from "../mds/all"
import ArticleCard  from './Template/ArticleCard';
import "../style/Home.css"
// import { Get } from 'react-axios'

function Home() {
  let articles = []
  let link = ''
  let mdnum = Object.keys(all.articles).length
  for ( let md in all.articles){
    link = '/article/' + md
    articles.push(
      // <ArticleCard mdid={md} mdnum={mdnum} />
      <Link to={link}>
        <ArticleCard mdid={md} mdnum={mdnum} />
      </Link>
    )
    mdnum = mdnum - 1
  }
  return (
    <main className="Home">
      {articles}
    </main>
  );
}
export default Home;