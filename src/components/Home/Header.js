import React, { useEffect, useState, useContext } from 'react'
import { useSprings, animated, config } from 'react-spring'
import { LangContext } from '../../store'

function Header() {
    const [toggleLang] = useContext(LangContext)
    const [preventClick, setPreventClick] = useState(true)
    const data = toggleLang ? "CZEŚĆ, JESTEM TOMASZ, WEB DEVELOPER." : "HI, MY NAME IS TOM, I'M WEB DEVELOPER."
    const [load1stPart, setLoad1stPart] = useState(false)
    const [load2ndPart, setLoad2ndPart] = useState(false)

    const [headerAnim, setHeaderAnim] = useSprings(data.length, index => ({
        from: {transform: "translate(20px, 20px) scale3d(1, 1, 1)", opacity: 0, color: "white"},
        to: {transform: "translate(0px, 0px) scale3d(1, 1, 1)", opacity: 1},
        delay: 100 * index,
        config: config.wobbly
    }))

    const header = data.split("").map((letter, index) => {
        return(
            <animated.span 
                key={index} 
                style={headerAnim[index]}
                onMouseOver={(e) => hoverHandler(e, index)}
                onMouseLeave={(e) => unhoverHandler(e, index)}>
                {letter===" " ? "\xA0" : letter}
            </animated.span>
        )
    })

    const hoverHandler = (e,i) => {
        setHeaderAnim(index => ({
            to: index===i && e.target.style.opacity==="1" ? [
                {transform: "translate(0px, 0px) scale3d(1, 1, 1)", color: "red"}, 
                {transform: "translate(0px, 0px) scale3d(1.25, 0.75, 1)"},
                {transform: "translate(0px, 0px) scale3d(0.75, 1.25, 1)"}, 
                {transform: "translate(0px, 0px) scale3d(1.15, 0.85, 1)"},
                {transform: "translate(0px, 0px) scale3d(0.95, 1.05, 1)"}, 
                {transform: "translate(0px, 0px) scale3d(1.05, 0.95, 1)"},
                {transform: "translate(0px, 0px) scale3d(1, 1, 1)"}
            ] : null,
            config: {duration: 160}
        }))
    }
    const unhoverHandler = (e, i) => {
        setHeaderAnim(index => ({
            to: index===i ? [
                {transform: "translate(0px, 0px) scale3d(1, 1, 1)", color: "white"}, 
                {transform: "translate(0px, 0px) scale3d(1.25, 0.75, 1)"},
                {transform: "translate(0px, 0px) scale3d(0.75, 1.25, 1)"}, 
                {transform: "translate(0px, 0px) scale3d(1.15, 0.85, 1)"},
                {transform: "translate(0px, 0px) scale3d(0.95, 1.05, 1)"}, 
                {transform: "translate(0px, 0px) scale3d(1.05, 0.95, 1)"},
                {transform: "translate(0px, 0px) scale3d(1, 1, 1)"}
            ] : null
        }))
    }

    useEffect(() => {
        if(toggleLang===true || toggleLang===false) {
            document.querySelectorAll("main h1 span").forEach(letter => letter.style.opacity=1)
        }
        setLoad1stPart(false)
        setLoad2ndPart(false)
        setPreventClick(true)
        setTimeout(() => {
            setLoad1stPart(true)
        }, 600)
        setTimeout(() => {
            setLoad2ndPart(true)
        }, 1200)
        setTimeout(() => {
            setPreventClick(false)
        }, 4000)
    }, [toggleLang])
    return(
        <h1>
            {toggleLang ? header.slice(0, 6) : header.slice(0, 3)}
            <br/>
            {load1stPart ? toggleLang ? header.slice(6, 20) : header.slice(3,19) : <span></span>}
            <br/>
            {load2ndPart ?toggleLang ? header.slice(21) : header.slice(19) : <span></span>}
            {preventClick ? <i></i> : ""}
        </h1>
    )
}

export default Header