import React, { useEffect, useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import logo from "../../logo.png"
import Header from './Header'
import Paragraph from './Paragraph'
import Button from './Button'

function HomePage() {
    const [show] = useSpring( () => ({
        from: {transform: "translateX(-100px)", opacity: 0},
        to: {transform: "translateX(0px)", opacity: 1}, 
        delay: 600,
        config: config.wobbly
    }))
    const [logoAnim, setLogoAnim] = useSpring(() => ({
        from: {opacity: 0},
        to: [{opacity: 0.3}, {opacity: 0.8}, {opacity: 0.3}, {opacity: 0.8}, {opacity: 0.3}, {opacity: 0.5}, {opacity: 0.7}, {opacity: 0.9}, {opacity: 1}], delay: 1600, config: {duration: 20}
    }))
    const [showHeader, setShowHeader] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowHeader(true)
        }, 2000)
    }, [])
    return(
        <animated.main style={show}>
            <animated.img style={logoAnim} src={logo} alt="logo" />
            {showHeader && <Header />}
            {showHeader && <Paragraph />}
            <div className="buttons">
                {showHeader && <Button text="About Me" />}
                {showHeader && <Button text="Contact" />}
            </div>
        </animated.main>
    )
}

export default HomePage