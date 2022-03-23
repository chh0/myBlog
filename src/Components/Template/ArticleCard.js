import React from 'react'
import "../../style/Template/ArticleCard.css"
import all from "../../mds/all"

const ArticleCard = (props) => {
    let mdid = props.mdid
    let picid = 'https://cdn.jsdelivr.net/gh/chh0/pics/' + props.mdnum + '.jpg'
    let digest = all.articles[mdid].con.split("<p>")[1]
    digest = digest.split("</p>")[0]
    let ImgStyle = {
        "float": "left",
        "width": "30%",
        "height": "200px",
        "background": `url(${picid}) no-repeat center center`,
        "background-size": "cover",
        "border-top-left-radius": "50px",
        "border-bottom-left-radius": "50px",
    }
    return (
        <div className="ArticleCard">
            <div className="ArticleCardImg" style={ImgStyle}></div>
            <div className="ArticleCardCon">
                <h1 className="ArticleCardTitle">{all.articles[mdid].title}</h1>
                <p className="ArticleCardText">{digest}</p>
            </div>
        </div>
    )
}

export default ArticleCard;
