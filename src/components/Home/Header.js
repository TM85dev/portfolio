import React, { useEffect, useState } from 'react'
import { useSprings, useTransition, animated, config } from 'react-spring'
import {Keyframes} from 'react-spring/renderprops'

function Header() {
    const data = {
        one: "HI, I'M TOM,",
        two: "WEB DEVELOPER."
    }

    const [header1Anim, setHeader1Anim] = useSprings(data.one.length, index => ({
        from: {transform: "translate(20px, 20px) scale3d(1, 1, 1)", opacity: 0, color: "white"},
        to: {transform: "translate(0px, 0px) scale3d(1, 1, 1)", opacity: 1},
        delay: 100 * index,
        config: config.wobbly
    }))
    const [header2Anim, setHeader2Anim] = useSprings(data.two.length, index => ({
        from: {transform: "translate(20px, 20px) scale3d(1, 1, 1)", opacity: 0, color: "white"},
        to: {transform: "translate(0px, 0px) scale3d(1, 1, 1)", opacity: 1},
        delay: 1600 + (100 * index),
        config: config.wobbly
    }))

    const header1 = data.one.split("").map((letter, index) => {
        return(
            <animated.span 
                key={index} 
                style={header1Anim[index]}
                onMouseOver={(e) => hoverHandler1(e, index)}
                onMouseLeave={(e) => unhoverHandler1(e, index)}>
                {letter===" " ? "\xA0" : letter}
            </animated.span>
        )
    })
    const header2 = data.two.split("").map((letter, index) => {
        return(
            <animated.span 
                key={index} 
                style={header2Anim[index]}
                onMouseOver={(e) => hoverHandler2(e, index)}
                onMouseLeave={(e) => unhoverHandler2(e, index)}>
                {letter===" " ? "\xA0" : letter}
            </animated.span>
        )
    })
    const hoverHandler1 = (e,i) => {
        setHeader1Anim(index => ({
            to: index===i ? [
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
    const unhoverHandler1 = (e, i) => {
        setHeader1Anim(index => ({
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
    const hoverHandler2 = (e,i) => {
        setHeader2Anim(index => ({
            to: index===i ? [
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
    const unhoverHandler2 = (e, i) => {
        setHeader2Anim(index => ({
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
    }, [])
    return(
        <h1>
            {header1}
            <br/>
            {header2} 
            {/* {end} */}
        </h1>
    )
}

export default Header