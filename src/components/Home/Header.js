import React, { useEffect, useState } from 'react'
import { useSprings, useTransition, animated, config } from 'react-spring'

function Header() {
    const data = "HI, I'M TOM, WEB DEVELOPER."
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
            ] : setTimeout({transform: "translate(0px, 0px) scale3d(1, 1, 1)", color: "white"}, 1600),
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
            ] : setTimeout({transform: "translate(0px, 0px) scale3d(1, 1, 1)"},1600)
        }))
    }


    // const [toggle, set] = useState(false)
    // const transition = useTransition(toggle, null, {
    //     from: {position: 'absolute', opacity: 0},
    //     enter: {opacity: 1},
    //     leave: {opacity: 0},
    //     duration: 600
    // })
    // const end = transition.map(({item, key, props}) => 
    // item && <animated.span key={key} style={props}>|</animated.span>)

    useEffect(() => {
        // setTimeout(() => {
        //     setInterval(() => {
        //         set(state => (!state))
        //     }, 600)
        // },3000)
        setTimeout(() => {
            setLoad2ndPart(true)
        }, 1000)
    }, [])
    return(
        <h1>
            {header.slice(0,12)}
            {/* {end} */}
            <br/>
            {load2ndPart ? header.slice(12) : <span></span>}
        </h1>
    )
}

export default Header