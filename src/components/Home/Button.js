import React from 'react'
import { useSpring, useSprings, animated, config } from 'react-spring'

function Button(props) {
    const leftArrows = ["<", "<", "<"]
    const rightArrows = [">", ">", ">"]
    const [leftSideAnim, setLeftSideAnim] = useSprings(leftArrows.length, index => ({
        transform: "translateX(-20px)", opacity: 0, config: {mass:1, tension: 300, friction: 20}
    }))
    const [rightSideAnim, setRightSideAnim] = useSprings(rightArrows.length, index => ({
        transform: "translateX(20px)", opacity: 0, config: {mass:1, tension: 300, friction: 20}
    }))
    const leftSide = rightArrows.map((item, index) => <animated.span style={leftSideAnim[index]}>{item}</animated.span>)
    const rightSide = leftArrows.map((item, index) => <animated.span style={rightSideAnim[index]}>{item}</animated.span>)
    const [buttonAnim, setButtonAnim] = useSpring(() => ({
        backgroundColor: "rgba(250, 0, 0, 0)"
    }))
    const hoverHandler = () => {
        setButtonAnim(() => ({
            backgroundColor: "rgba(250, 50, 50, 0.8)"
        }))
        setLeftSideAnim(index => ({
            transform: "translateX(0px)", opacity: 1,
            delay: 100 * index
        }))
        setRightSideAnim(index => ({
            transform: "translateX(0px)", opacity: 1,
            delay: 100 * index
        }))
    }
    const unhoverHandler = () => {
        setButtonAnim(() => ({
            backgroundColor: "rgba(250, 0, 0, 0)"
        }))
        setLeftSideAnim(index => ({
            transform: "translateX(-20px)", opacity: 0,
            delay: 100 * index
        }))
        setRightSideAnim(index => ({
            transform: "translateX(20px)", opacity: 0,
            delay: 100 * index
        }))
    }
    const clickHandler = () => {
        setButtonAnim(() => ({
            color: "black", config: {duration: 100}
        }))
        setLeftSideAnim(index => ({
            transform: "translateX(20px)", opacity: 0,
            delay: 100 * index
        }))
        setRightSideAnim(index => ({
            transform: "translateX(-20px)", opacity: 0,
            delay: 100 * index
        }))
    }
    return(
        <div className="button">
            <animated.button 
                style={buttonAnim}
                onMouseOver={hoverHandler}
                onMouseLeave={unhoverHandler}
                onClick={clickHandler}>
                    {leftSide} {props.text} {rightSide}
            </animated.button>
        </div>
    )
}

export default Button