import React from 'react'
import "../../style/Template/DateList.css"
import all from "../../mds/all"
import { Link } from "react-router-dom";

const DateList = (props) => {
    let List = []
    let count = 0
    let month = all.dateList[props.year]
    for (let i = 12 ; i >= 1; i-- ){
        if(month[''+i] !== []){
            for (let j of month[''+i]){
                List.push(
                    <div className="DateListItem">
                        <div className="DateListDate">{all.articles[j].date[1]}-{all.articles[j].date[2]}</div>
                        <div className="DateListTitle"><Link to={"/article/" + j}>{all.articles[j].title}</Link></div>
                    </div>
                )
            }
        }
    }
    return (
        // {JSON.stringify(props.year)}
        <div className="DateList">
            <div className="DateListYear">
                {/* <div className="DateListYearBall"></div> */}
                <h1>{props.year}</h1>
            </div>
            {List}
        </div>
    )
}

export default DateList