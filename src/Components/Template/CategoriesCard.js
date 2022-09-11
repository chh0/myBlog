import React from 'react'
import pics from '../../asset/pics'
import "../../style/Template/CategoriesCard.css"
import all from "../../mds/all"
import { Link } from "react-router-dom"

const CategoriesCard = (props) => {
    let CategoriesCardStyle = {
        "width": "300px",
        "height": "180px",
        "background": `url('${pics[props.cnt + '.jpg']}') no-repeat center center`,
        // "background": `url(' https://raw.githubusercontent.com/chh0/pics/main/${props.cnt}.jpg') no-repeat center center`,
        // "background": `url('https://cdn.jsdelivr.net/gh/chh0/pics/${props.cnt}.jpg') no-repeat center center`,
        "background-size": "cover",
        "margin": "20px"
    }
    return (
        <div className="CategoriesCard" style={CategoriesCardStyle}>
            <div className="CategoriesCardContainer">
                <div className="CategoriesCardInner">
                    <Link to={`/category/${props.cate}`}>
                        <div className="CategoriesCardTitle">
                            <div>
                                    <h1>{props.cate}</h1>
                                    <h2>共计{all.cateList[props.cate].length}篇</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default CategoriesCard