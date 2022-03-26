import React from 'react'
import { useParams, Link } from "react-router-dom";
import all from "../mds/all"
import "../style/TagPage.css"

const TagPage = () => {
    let params = useParams()
    let years = Object.keys(all.dateList).reverse()
    let List = []
    let month = []
    let flag = 0
    for (let i of years){
        List.push(
            <div className='TagPageYear'>
                <h1 className='TagPageYearTitle'>{i}</h1>
            </div>
        )
        flag = 0
        month = all.dateList[i]
        for (let j=12; j>0; j--){
            if(month[''+j] !== []){
                for(let k of month[""+j]){
                    if(all.tagList[params.tag].includes(k)){
                        flag = 1
                        List.push(
                            <div className='TagPageItem'>
                                <div className='TagPageItemDate'>{all.articles[k].date[1]}-{all.articles[k].date[2]}</div>
                                <div className='TagPageItemTitle'><Link to={"/article/" + k}>{all.articles[k].title}</Link></div>
                            </div>
                        )
                    }
                }
            }
        }
        if(flag === 0) List.pop()
    }
    if( Object.keys(all.tagList).includes(params.tag) ){
        return (
            <div className="TagPage">
                <h1 className="TagPageTitle">{params.tag}</h1>
                <div className="TagPageCards">
                    {List}
                </div>
            </div>
        )
    }else{
        return (
            <div>这里什么都没有哦</div>
        )
    }
}


export default TagPage;
