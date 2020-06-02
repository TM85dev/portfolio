import React, { useState } from 'react'
import  { useSpring, useSprings, animated } from 'react-spring'

function Project(props) {
    const [show] = useSpring(() => ({
        from: {opacity: 0},
        to: {opacity: 1},
        delay: 1000 + (400 * props.delay)
    }))
    const [toggle, setToggle] = useState(false) 
    const {s,o} = useSpring({
        from: {s: 1, o: 0},
        to: {s: toggle ? 0.9 : 1, o: toggle ? 0.8 : 0}
    })
    const [button, setButton] = useSprings(2, index => ({
        backgroundColor: "rgba(250,0,0,0)"
    }))
    const hoverHandler = (i) => {
        setButton(index => ({
            backgroundColor: index===i ? "rgba(250,0,0,1)" : "rgba(250,0,0,0)"
        }))
    }
    const unhoverHandler = () => {
        setButton(index => ({
            backgroundColor: "rgba(0,0,0,0)"
        }))
    }
    const clickHandler = () => {
        props.setVisible(prevState => (
            prevState.map((item, index) => (
                item = props.project.id===index ? true : false
            ))
        ))
    }
    return(
        <animated.div style={show}>
            <animated.span style={{opacity: o.interpolate(o => o), 
                                   transform: s.interpolate(s => `scale(${s})`)}}
                            onMouseOver={() => setToggle(true)}
                            onMouseLeave={() => setToggle(false)}
            >
            <animated.button 
                style={button[0]} 
                onMouseOver={() => hoverHandler(0)}
                onMouseLeave={unhoverHandler}
                onClick={clickHandler}
            >More</animated.button>
            <animated.button 
                style={button[1]} 
                onMouseOver={() => hoverHandler(1)}
                onMouseLeave={unhoverHandler}
            >Life</animated.button>
            </animated.span>
            <animated.img 
                style={{transform: s.interpolate(s => `scale(${s})`)}} 
                src={props.project.link} 
                alt={props.name} />
            <p>{props.project.name}</p>
        </animated.div>
    )
}

export default Project