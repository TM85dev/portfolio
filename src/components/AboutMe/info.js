import React, { useContext } from 'react'
import { LangContext } from '../../store'
import { infoDataPL, infoDataENG } from '../../data'

function Info() {
    const [toggleLang] = useContext(LangContext)
    const data = toggleLang ? infoDataPL : infoDataENG
    return(
        <>
        <span><strong>{data.line1.slice(0,1)}</strong>{data.line1.slice(1)}</span>
        <br/>
        {data.line2} 
        <ul>
            <li>{data.liA1}</li>
            <li>{data.liA2}</li>
            <li>{data.liA3}</li>
            <li>{data.liA4}</li>
            <li>{data.liA5}</li>
            <li>{data.liA6}</li>
            <li>{data.liA7}</li>
        </ul>
        <br/>
        {data.line3}
        <ul>
            <li>{data.liB1}</li>
            <li>{data.liB2}</li>
            <li>{data.liB3}</li>
        </ul>
        <br/>
        <span><strong>{data.line4.slice(0,1)}</strong>{data.line4.slice(1)}</span><br/>
        <span><strong>{data.line5.slice(0,1)}</strong>{data.line5.slice(1)}</span><br/>
        <hr/>
        <span><strong>{data.line6.slice(0,1)}</strong>{data.line6.slice(1)}</span><br/>
        </>
    )
}

export default Info