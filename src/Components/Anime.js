import React from 'react'
import anime from "../mds/anime"
import "../style/Anime.css"

const Anime = () => {
    let List = []
    // let colorList = [
    //     "rgb(211, 34, 94)",
    //     "rgb(123, 23, 14)",
    //     "rgb(32, 13, 94)",
    //     "rgb(76, 193, 134)",
    //     "rgb(176, 223, 188)",
    //     "rgb(98, 123, 234)",
    //     "rgb(234, 133, 54)",
    //     "rgb(199, 12, 130)",
    //     "rgb(75, 74, 66)",
    // ]
    for(let i of anime){
        List.push(
            <div class="AnimeCard">
                <a href={i.link} target="_blank" rel="noreferrer">
                    <h1>{i.name}</h1>
                    <p>{i.comment}</p>
                </a>
            </div>
        )
    }
    // let tagNameStyle = {}
    // let cnt = 0 
    return (
        <div id="Anime">
            <h1>chh的追番列表</h1>
            <div id='Animebox'>
                {List}
            </div>
        </div>
    )
}

export default Anime;