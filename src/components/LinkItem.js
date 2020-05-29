import React from 'react'
import  { useSpring, useSprings, animated } from 'react-spring'
import { NavLink } from 'react-router-dom'

function LinkItem(props) {
    const [iconAnim, setIconAnim] = useSpring(() => ({
        transform: "scale(1)"
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

    const hoverHandler = (e) => {
            setIconAnim(() => ({
                transform: "scale(1.4)"
            }))
        setLetterAnim(index => ({
            from: {transform: "translateX(20px)", opacity: 0},
            transform: "translateX(0px)", opacity: 1,
            delay: 50 * index
        }))
    }
    const unhoverHandler = (e) => {
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
    const clickHandler = () => {

    }
    return(
        <div>
            <animated.span style={iconAnim} >
                <NavLink exact to={props.route} activeClassName="selected">
                    <span 
                        className={props.icon} 
                        onMouseOver={hoverHandler} 
                        onMouseLeave={unhoverHandler}
                        onClick={clickHandler}>
                    </span>
                </NavLink>
            </animated.span>
            <span>{letterList}</span>
        </div>
    )
}

export default LinkItem