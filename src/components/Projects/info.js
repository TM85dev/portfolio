import React, { useContext } from 'react'
import { useSpring, animated } from 'react-spring'
import { LangContext } from "../../store"

const Info = (props) => {
    const [toggleLang] = useContext(LangContext)
    const [showHide] = useSpring(() => ({
        from: {opacity: 0},
        to: {opacity: 1}
    }))
    return(
        <animated.div style={showHide}>
            <h3>{props.project.name}</h3>
            <ul>
                {toggleLang ? "Użyto w projekcie:" : "Used in this project:"}
                {props.project.tech.map((item, index) => (
                    <li key={index}>{item.toUpperCase()}</li>
                ))}
                <li>SCSS</li>
            </ul>
        </animated.div>
    )
}

export default Info