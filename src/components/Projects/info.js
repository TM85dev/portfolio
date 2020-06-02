import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

const Info = (props) => {
    const [showHide, setShowHide] = useSpring(() => ({
        from: {opacity: 0},
        to: {opacity: 1}
    }))
    return(
        <animated.div style={showHide}>
            <h3>{props.project.name}</h3>
            <ul>
                In this project I used :
                {props.project.tech.map((item, index) => (
                    <li key={index}>{item.toUpperCase()}</li>
                ))}
                <li>SCSS</li>
            </ul>
        </animated.div>
    )
}

export default Info