import React from 'react'
import "../../style/Template/ArticleCard.css"
import all from "../../mds/all"

const ArticleCard = (props) => {
    let mdid = props.mdid
    let picid = ' https://raw.githubusercontent.com/chh0/pics/main/' + props.mdnum + '.jpg'
    let digest = all.articles[mdid].con.split("<p>")[1]
    digest = digest.split("</p>")[0]
    let ImgStyle = {}
    let CardStyle = {}
    let ConStyle = {}
    if(document.body.clientWidth > 901){
        ImgStyle = {
            "float": "left",
            "width": "30%",
            "height": "200px",
            "background": `url(${picid}), url('https://tva1.sinaimg.cn/large/0072Vf1pgy1foxlnkwh9ij31hc0u0tqu.jpg') no-repeat center center`,
            "background-size": "cover",
            "border-top-left-radius": "50px",
            "border-bottom-left-radius": "50px",
        }
    }else{
        ImgStyle = {
            "position": "fixed",
            "width": "0"
        }
        CardStyle = {
            "background": `url(${picid}) no-repeat center center`,
            "background-size": "cover",
        }
        ConStyle = {
            "width": "100%",
            "background-color": "rgba(255, 255, 255, 0.6)",
            "border-radius": "50px",
        }
    }
    
    return (
        <div className="ArticleCard" style={CardStyle}>
            <div className="ArticleCardImg" style={ImgStyle}></div>
            <div className="ArticleCardCon" style={ConStyle}>
                <h1 className="ArticleCardTitle">{all.articles[mdid].title}</h1>
                <p className="ArticleCardText">{digest}</p>
            </div>
        </div>
    )
}

export default ArticleCard;
