import React, { useEffect } from 'react';
import "../../style/Template/BackGround.css"

const BackGround = () => {
    let cnt = 0
    setInterval(()=>{
        cnt = (cnt%10)+1
        // document.getElementById("background").style.background = `url('https://cdn.jsdelivr.net/gh/chh0/pics/${cnt}.jpg') no-repeat center center`
        document.getElementById("background").style.backgroundImage = `url('https://cdn.jsdelivr.net/gh/chh0/pics/${cnt}.jpg')`
    }, 10000)
    // const [BGStyle, setBGStyle] = React.useState(0)
    // const [ cnt , setCnt] = React.useState(0);

    // setBGStyle((BGStyle) => ({"background": `url('https://cdn.jsdelivr.net/gh/chh0/pics/bg.jpg') no-repeat center center`}))
    
    // useEffect(()=>{
    //     setInterval(() => {
    //         setCnt((cnt) => (cnt)%10+1)
    //         setBGStyle((BGStyle)=>({"background": `url('https://cdn.jsdelivr.net/gh/chh0/pics/${cnt}.jpg') no-repeat center center`}))
    // //         // alert(JSON.stringify(BGStyle))
    //       }, 5000);
    // })
    return (
        <div id="background"></div> 
    )
}

export default BackGround