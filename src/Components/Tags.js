import React from 'react'
import all from "../mds/all"
import "../style/Tags.css"
import { Link } from "react-router-dom"

const Tags = () => {
    let List = []
    let colorList = [
        "rgb(211, 34, 94)",
        "rgb(123, 23, 14)",
        "rgb(32, 13, 94)",
        "rgb(76, 193, 134)",
        "rgb(176, 223, 188)",
        "rgb(98, 123, 234)",
        "rgb(234, 133, 54)",
        "rgb(199, 12, 130)",
        "rgb(75, 74, 66)",
    ]
    let tagNameStyle = {}
    let cnt = 0
    for (let i of Object.keys(all.tagList)){
        tagNameStyle = {
            "font-size":"32px",
            "margin": "10px",
            "padding": "6px",
            "background-color": "rgba(255, 255, 255, 0.7)",
            "color": colorList[(cnt++) % colorList.length],
            "box-shadow": "3px 3px 3px rgba(0, 0, 0, 0.3)",
        }
        List.push(
            <Link to={'/tag/'+i}><span className='tagsName' style={tagNameStyle}>{i}</span></Link>
        )
    }
    return (
        <div id="Tags">
            <h1>Tags</h1>
            <div id='Tagsbox'>
                {List}
            </div>
        </div>
    )
}

export default Tags;