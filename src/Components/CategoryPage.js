import React from 'react'
import { useParams, Link } from "react-router-dom";
import all from "../mds/all"
import "../style/CategoryPage.css"

const CategoryPage = () => {
    let params = useParams()
    let years = Object.keys(all.dateList).reverse()
    let List = []
    let month = []
    let flag = 0
    for (let i of years){
        List.push(
            <div className='CategoryPageYear'>
                <h1 className='CategoryPageYearTitle'>{i}</h1>
            </div>
        )
        flag = 0
        month = all.dateList[i]
        for (let j=12; j>0; j--){
            if(month[''+j] !== []){
                for(let k of month[""+j]){
                    if(all.cateList[params.cate].includes(k)){
                        flag = 1
                        List.push(
                            <div className='CategoryPageItem'>
                                <div className='CategoryPageItemDate'>{all.articles[k].date[1]}-{all.articles[k].date[2]}</div>
                                <div className='CategoryPageItemTitle'><Link to={"/article/" + k}>{all.articles[k].title}</Link></div>
                            </div>
                        )
                    }
                }
            }
        }
        if(flag === 0) List.pop()
    }
    if( Object.keys(all.cateList).includes(params.cate) ){
        return (
            <div className="CategoryPage">
                <h1 className="CategoryPageTitle">{params.cate}</h1>
                <div className="CategoryPageCards">
                    {List}
                    {/* {JSON.stringify(years)} */}
                </div>
            </div>
        )
    }else{
        return (
            <div>这里什么都没有哦</div>
        )
    }
}

export default CategoryPage;
