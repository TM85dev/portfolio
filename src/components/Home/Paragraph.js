import React from 'react'
import { useSprings, animated } from 'react-spring'

function Paragraph() {
    const paragraph = "JAVA SCRIPT / REACT / VUE"
    const [show] = useSprings(paragraph.split("").length, index => ({
        from: {transform: "translate(120px, 120px) rotate(90deg) scale(4, 4)", opacity: 0},
        to: {transform: "translate(0px, 0px) rotate(0deg) scale(1, 1)", opacity: 1},
        delay: 4000 + (100 * index)
    }))
    const word = paragraph.split("").map((letter, index) => {
        return (
            <animated.span style={show[index]} key={index}>
                {letter===" " ? "\xA0" : letter}
            </animated.span>
        )
    })
    return(
        <div>
            <p>{word}</p>
        </div>
    )
}

export default Paragraph