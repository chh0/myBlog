import React from 'react'
import { useParams } from "react-router-dom";
import mds from "../mds/all"
import "../style/article.css"

const Article = () => {
    let params = useParams();
    if(mds.articles[params.num]){
        return (
            <div className="md">
                <div dangerouslySetInnerHTML = {{__html:mds.articles[params.num].con}} ></div>
            </div>
        )
    }else{
        return (
            <div>这里什么都没有哦</div>
        )
    }
}

export default Article;
