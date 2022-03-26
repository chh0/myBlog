import React from 'react'
import "../../style/Template/CategoriesCard.css"
import all from "../../mds/all"
import { Link } from "react-router-dom"

const CategoriesCard = (props) => {
    let CategoriesCardStyle = {
        "width": "300px",
        "height": "180px",
        "background": `url('https://cdn.jsdelivr.net/gh/chh0/pics/${props.cnt}.jpg') no-repeat center center`,
        "background-size": "cover",
        "margin": "20px"
    }
    return (
        <div className="CategoriesCard" style={CategoriesCardStyle}>
            <div className="CategoriesCardContainer">
                <div className="CategoriesCardInner">
                    <div className="CategoriesCardTitle">
                        <div>
                            <Link to="/">
                            <h1>{props.cate}</h1>
                            <h2>共计{all.cateList[props.cate].length}篇</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoriesCard