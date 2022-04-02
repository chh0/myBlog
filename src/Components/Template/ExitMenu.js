import React, {/* useEffect */} from 'react';
import "../../style/Template/ExitMenu.css"

const ExitMenu = () => {
    const Exit = () => {
        let sb = document.getElementById("sidebar")
        let EM = document.getElementById("ExitMenu")
        let SB = document.getElementById("SideButtom")
        EM.style.width = "0"
        SB.style.transform = "rotateZ(180deg)"
        sb.style.transform = "translateX(-352px)"
    }

    return (
        <div id="ExitMenu" onClick={Exit}></div>
    )
}

export default ExitMenu