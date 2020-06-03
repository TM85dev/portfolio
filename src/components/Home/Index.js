import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import logo from "../../logo.png"
import Header from './Header'
import Paragraph from './Paragraph'
import Button from './Button'

function HomePage() {
    const [show] = useSpring( () => ({
        from: {opacity: 0},
        to: {opacity: 1}
    }))
    const [logoAnim] = useSpring(() => ({
        from: {opacity: 0, marginTop: "50px"},
        to: [{opacity: 0.3}, {opacity: 0.8}, {opacity: 0.3}, {opacity: 0.8}, {opacity: 0.3}, {opacity: 0.5}, {opacity: 0.7}, {opacity: 0.9}, {opacity: 1}], delay: 600, config: {duration: 20}
    }))
    const [showHeader, setShowHeader] = useState(false)
    const [showbuttons, setShowButtons] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowHeader(true)
            setTimeout(() => {
                setShowButtons(true)
            }, 2000)
        }, 1000)
    }, [])
    return(
        <animated.main style={show}>
            <animated.img style={logoAnim} src={logo} alt="logo" />
            {showHeader && <Header />}
            {showHeader && <Paragraph />}
            <div className="buttons">
                {showbuttons && 
                <>
                    <NavLink exact to="/about-me">
                        <Button text="About Me" delay={1} />
                    </NavLink>
                    <NavLink exact to="/contact">
                        <Button text="Contact" delay={2} />
                    </NavLink>
                </>}
            </div>
        </animated.main>
    )
}

export default HomePage