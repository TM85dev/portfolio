import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import logo from '../logo.png'

function Loading() {
    const loadingAnim = useSpring({
        from: {width: "0%", backgroundColor: "orange"},
        to: {width: "100%", backgroundColor: "red"},
        delay: 500,
        config: {duration: 1500}
    })
    const [show] = useSpring( () => ({
        from: {transform: "translateX(-100px)", opacity: 0},
        to: {transform: "translateX(0px)", opacity: 1}, 
        config: config.wobbly
    }))
    return(
        <animated.div style={show} className="loading">
            <div><img src={logo} alt="logo" /></div>
            <div>
                <animated.span style={loadingAnim} className="progress-bar"></animated.span>
            </div>
            <div>loading...</div>
        </animated.div>
    )
}

export default Loading