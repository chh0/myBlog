import React from 'react'
import all from "../mds/all"
import "../style/Archives.css"
import DateList from './Template/DateList';

const Archives = () => {
    let years = Object.keys(all.dateList)
    let List = []
    let nums = 0
    let list = Object.keys(all.articles)
    nums = list.length
    for (let i of years) {
        List.push(
            <DateList year={i} />
        )
    }
    return (
        <div id="Archives">
            <h1 id="ArchivesTitle">归档</h1>
            <h3 id="ArchivesTitleNum">共计{nums}篇</h3>
            {List}
        </div>
    )
}

export default Archives;