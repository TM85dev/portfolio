import React from 'react'
import  { useSpring, useSprings, animated } from 'react-spring'

function LinkItem(props) {
    const [iconAnim, setIconAnim] = useSpring(() => ({
        transform: "scale(1)", color: "white"
    }))
    const word = props.name.split("")
    const [letterAnim, setLetterAnim] = useSprings(word.length, index => ({
        transform: "translateX(20px)", 
        opacity: 0, 
        config: {duration: 120}
    }))
    const letterList = word.map((letter, index) => {
        return(
            <animated.span 
                key={index}
                style={letterAnim[index]}>{letter==="_" ? "\xA0" : letter}
            </animated.span>
        )
    })

    const hoverHandler = () => {
        setIconAnim(() => ({
            transform: "scale(1.4)", color: "red"
        }))
        setLetterAnim(index => ({
            from: {transform: "translateX(20px)", opacity: 0},
            transform: "translateX(0px)", opacity: 1,
            delay: 50 * index
        }))
    }
    const unhoverHandler = () => {
        setIconAnim(() => ({
            transform: "scale(1)", color: "white"
        }))
        setLetterAnim(index => ({
            from: {transform: "translateX(0px)", opacity: 1},
            transform: "translateX(-20px)", opacity: 0,
            delay: 50 * index,
            reset: true
        }))
    }
    return(
        <div>
            <a href="#">
                <animated.span 
                    className={props.icon} 
                    style={iconAnim} 
                    onMouseOver={hoverHandler} 
                    onMouseLeave={unhoverHandler}>
                </animated.span>
            </a>
            <span>{letterList}</span>
        </div>
    )
}

export default LinkItem