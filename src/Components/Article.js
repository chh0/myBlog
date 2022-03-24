import React from 'react'
import { useParams } from "react-router-dom";
import mds from "../mds/all"
import "../style/Article.css"

const Article = () => {
    let params = useParams();
    if(mds.articles[params.num]){
        return (
            <div className="Article">
                <div className="ArticleHead">
                    <h1>{mds.articles[params.num].title}</h1>
                    <h4>{mds.articles[params.num].date[0]}-{mds.articles[params.num].date[1]}-{mds.articles[params.num].date[2]}</h4>
                </div>
                <div className="md">
                    <div dangerouslySetInnerHTML = {{__html:mds.articles[params.num].con}} ></div>
                </div>
            </div>
        )
    }else{
        return (
            <div>这里什么都没有哦</div>
        )
    }
}

export default Article;
