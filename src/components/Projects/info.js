import React from 'react'
import { useSpring, animated } from 'react-spring'

const Info = (props) => {
    const [showHide] = useSpring(() => ({
        from: {opacity: 0},
        to: {opacity: 1}
    }))
    return(
        <animated.div style={showHide}>
            <h3>{props.project.name}</h3>
            <ul>
                Used in this project:
                {props.project.tech.map((item, index) => (
                    <li key={index}>{item.toUpperCase()}</li>
                ))}
                <li>SCSS</li>
            </ul>
        </animated.div>
    )
}

export default Info