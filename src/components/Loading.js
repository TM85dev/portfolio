import React, { useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'
import logo from '../logo.png'

function Loading() {
    const loadingAnim = useSpring({
        from: {width: "0%", backgroundColor: "orange"},
        to: {width: "100%", backgroundColor: "red"},
        delay: 500,
        config: {duration: 1500}
    })
    const [show, setShow] = useSpring( () => ({
        from: {transform: "translateX(-100px)", opacity: 0},
        to: {transform: "translateX(0px)", opacity: 1}, 
        config: config.wobbly
    }))
    useEffect(() => {
        setTimeout(() => {
            setShow(() => ({
                transform: "translateX(100px)", opacity: 0
            }))

        }, 2000)
    })
    return(
        <animated.div style={show} className="loading">
            <div><img src={logo} alt="logo" /></div>
            <div><animated.span style={loadingAnim}></animated.span></div>
            <div>loading...</div>
        </animated.div>
    )
}

export default Loading