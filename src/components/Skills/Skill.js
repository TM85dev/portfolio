import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

function Skill(props) {
    const [state, toggle] = useState(false)
    const {g, o, s} = useSpring({
        from: {g: 0, o: 0, s: 1},
        to: [{o: state ? 1 : 0, s: 0},
            {g: state ? 100 : 0, s: 1}],
            config: {duration: 160}
    })
    const [show] = useSpring(() => ({
        from: {opacity: 0},
        to: {opacity: 1},
        delay: 1600 + (200 * props.slow - (50 * props.slow)),
        config: {duration: 600}
    }))
    const hoverHandler = () => {
        toggle(true)
    }
    const unhoverHandler = () => {
        toggle(false)
    }
    return(
        <animated.div style={show}>
            <span 
                style={{
                    width: "50px", 
                    top: "50px",
                    height: "50px",
                    display: "block",
                    position: "relative",
                    zIndex: 1
                }} 
                onMouseOver={hoverHandler}
                onMouseLeave={unhoverHandler}>
            </span>
            <animated.img 
                style={{
                    filter: g.interpolate(g => `grayscale(${g}%)`),
                    transform: s.interpolate(s => `scaleX(${s})`)
                }}
                src={props.data.icon} 
                alt={props.data.name} 
            />
            <animated.p style={{opacity: o.interpolate(o => o)}}>
                {props.data.name}
            </animated.p>
        </animated.div>
    )
}

export default Skill