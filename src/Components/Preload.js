import React from 'react';
// import React, { useEffect } from 'react';
import "../style/Preload.css"
import pics from '../asset/pics'

const Preload = () => {
    let list = []
    for (let cnt = 1; cnt <= 10; cnt++ ){
        list.push(
            <img src={`${pics[cnt + '.jpg']}`} alt="" />
            // <img src={`https://cdn.jsdelivr.net/gh/chh0/pics/${cnt}.jpg`} alt="" />
        )
    }
    // setInterval(()=>{
    //     cnt = (cnt%10)+1
    //     // document.getElementById("background").style.background = `url('https://cdn.jsdelivr.net/gh/chh0/pics/${cnt}.jpg') no-repeat center center`
    //     document.getElementById("background").style.backgroundImage = `url('https://cdn.jsdelivr.net/gh/chh0/pics/${cnt}.jpg')`
    // }, 10000)
    return (
        <div id="preload">
            <img src={`${pics['bg.jpg']}`} alt="" />
            {list}
        </div> 
    )
}

export default Preload