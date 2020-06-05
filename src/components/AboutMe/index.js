import React, { useContext } from 'react'
import { useSpring, animated, config } from 'react-spring'
import Info from './info'
import { LangContext } from '../../store'

function AboutMe() {
    const [toggleLang] = useContext(LangContext)
    const [showTitle] = useSpring(() => ({
        from: {width: "calc(0px + 0vw)"},
        width: "calc(260px + 10vw)", config: config.wobbly
    }))
    const [showh1Anim] = useSpring(() => ({
        from: {opacity: 0},
        to: {opacity: 1}, delay: 1000
    }))
    const [showInfoBlock] = useSpring(() => ({
        from: {transform: "translateY(50px)", opacity: 0},
        to: {transform: "translateY(0px)", opacity: 1}, 
        config: config.wobbly, delay: 1400
    }))
    const [showInfo] = useSpring(() => ({
        from: {opacity: 0},
        to: {opacity: 1},
        delay: 2000
    }))
    return(
        <main>
            <animated.div style={showTitle} className="about-me">
                <animated.h1 style={showh1Anim}>{toggleLang ? "O Mnie" : "About Me"}</animated.h1>
            </animated.div>
            <animated.div style={showInfoBlock} className="info-about-me">
                <animated.div style={showInfo}>
                    <Info />
                </animated.div>
            </animated.div>
        </main>
    )
}

export default AboutMe