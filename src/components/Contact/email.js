import React from 'react'
import  { useSprings, animated } from 'react-spring'

function Email() {
    const email = "t.maczka85@wp.pl"
    const letters = email.split("")
    const [letterAnim, setLetterAnim] = useSprings(letters.length, index => ({
        color: "rgb(233, 70, 76)", transform: "scale(1,1)",
        config: {duration: 100}
    }))
    const hoverHandler = (i) => {
        setLetterAnim(index => ({
            color: (index<i+2 && index>i-2) ? (index<i || index>i) ? "rgb(255, 181, 183)" : "rgb(255, 223, 224)" : "rgb(233, 70, 76)",
            transform: (index<i+2 && index>i-2) ? "scale(1.1, 1.1)" : "scale(1,1)"
        }))
    }
    const unhoverHandler = () => {
        setLetterAnim(index => ({
            color: "rgb(233, 70, 76)", transform: "scale(1,1)"
        }))
    }
    return(
        <a href="mailto:t.maczka85@wp.pl">
            {letters.map((letter, index) => (
                <animated.span 
                    key={index}
                    style={letterAnim[index]}
                    onMouseOver={() => hoverHandler(index)}
                    onMouseLeave={unhoverHandler}>
                    {letter}
                </animated.span>
            ))}
        </a>
    )
}

export default Email