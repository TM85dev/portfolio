import React from 'react'
import  { useSpring, useSprings, animated, config } from 'react-spring'

function LinkItem(props) {
    const [iconAnim, setIconAnim] = useSpring(() => ({
        right: "20px", color: "white"
    }))
    const word = props.name.split("")
    const [letterAnim, setLetterAnim] = useSprings(word.length, index => ({
        transform: "translateX(-20px)", opacity: 0, config: {duration: 120}
    }))
    const letterList = word.map((letter, index) => {
        return(
            <animated.span 
                key={index}
                style={letterAnim[index]}>{letter}
            </animated.span>
        )
    })

    const hoverHandler = () => {
        setIconAnim(() => ({
            right: "0px", color: "red"
        }))
        setLetterAnim(index => ({
            transform: "translate(0px)", opacity: 1,
            delay: 50 * index
        }))
    }
    const unhoverHandler = () => {
        setIconAnim(() => ({
            right: "20px", color: "white"
        }))
        setLetterAnim(index => ({
            transform: "translate(-20px)", opacity: 0,
            delay: 50 * index
        }))
    }
    return(
        <a href="#" onMouseOver={hoverHandler} onMouseLeave={unhoverHandler}>
            <span>{letterList}</span>
            <animated.i className={props.icon} style={iconAnim}></animated.i>
        </a>
    )
}

export default LinkItem