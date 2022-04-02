import React, { useEffect } from 'react';
import "../../style/Template/SideButtom.css"

const SideButtom = () => {
    useEffect(()=>{
        let sb = document.getElementById("sidebar")
        let EM = document.getElementById("ExitMenu")
        let SB = document.getElementById("SideButtom")
        let CB = document.getElementById("contentbox")
        if(document.body.clientWidth > 901){
            CB.style.left = "352px"
            sb.style.transform = "translateX(0px)"
            EM.style.width = "0"
            SB.style.transform = "rotateZ(0)"
        }else{
            CB.style.left = "16px"
            sb.style.transform = "translateX(0px)"
            EM.style.width = "100%"
            SB.style.transform = "rotateZ(0)"
        }
    })
    const SideHandle = () => {
        let sb = document.getElementById("sidebar")
        let EM = document.getElementById("ExitMenu")
        let SB = document.getElementById("SideButtom")
        let CB = document.getElementById("contentbox")
        if (JSON.stringify(getComputedStyle(sb)["transform"])[20] === '-'){
            if(document.body.clientWidth > 901){
                sb.style.transform = "translateX(0px)"
                SB.style.transform = "rotateZ(0)"
                CB.style.left = "352px"
            }else{
                EM.style.width = "100%"
                sb.style.transform = "translateX(0px)"
                SB.style.transform = "rotateZ(0)"
            }
        }else{
            if(document.body.clientWidth > 901){
                sb.style.transform = "translateX(-352px)"
                SB.style.transform = "rotateZ(180deg)"
                CB.style.left = "16px"
            }else{
                EM.style.width = "0"
                SB.style.transform = "rotateZ(180deg)"
                sb.style.transform = "translateX(-352px)"
            }
        }
        // alert(document.body.clientWidth)
    }
    // let inner = "<"
    let svg1 = <svg t="1648877137623" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="870" width="200" height="200"><path d="M723.626667 83.626667l60.330666 60.330666L415.914667 512l368.042666 368.042667-60.330666 60.330666L295.253333 512 723.626667 83.626667z" p-id="871"></path></svg>
    // let svg2 = <svg t="1648872577720" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1018" width="200" height="200"><path d="M300.373333 83.626667l-60.330666 60.330666L608.085333 512 240.042667 880.042667l60.330666 60.330666L728.746667 512 300.373333 83.626667z" p-id="1019"></path></svg>
    return (
        <div id="SideButtom" onClick={SideHandle}>
            {svg1}
            {/* <div>{}</div> */}
        </div>
        
    )
}

export default SideButtom