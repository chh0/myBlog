import React from 'react'
import all from "../mds/all"
import "../style/Categories.css"
import CategoriesCard from './Template/CategoriesCard';

const Categories = () => {
    let List = []
    let cnt = 1
    for (let i of Object.keys(all.cateList)) {
        List.push(
            <CategoriesCard cate={i} cnt={cnt} />
        )
        cnt += 1
    }
    return (
        <div id="Categories">
            <h1>分类</h1>
            <div id="CategoriesContainer">
                {List}
            </div>
        </div>
    )
}

export default Categories;