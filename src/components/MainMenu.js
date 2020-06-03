import React, { useEffect } from 'react'
import { useSpring, useSprings, animated, config } from 'react-spring'
import LinkItem from './LinkItem'
import logo from '../logo.png'

function MainMenu() {
    const data = [
        {id:0, name: "Home", icon: "flaticon-home", route: "/"},
        {id:1, name: "Skills", icon: "flaticon-wrench", route: "/skills"},
        {id:2, name: "Projects", icon: "flaticon-monitor", route: "/projects"},
        {id:3, name: "About_Me", icon: "flaticon-person", route: "/about-me"},
        {id:4, name: "Contact", icon: "flaticon-contact", route: "contact"}
    ]

    const [linkItemAnim, setLinkItemAnim] = useSprings(data.length, index => ({
        transform: "translateX(-50px)", opacity: 0,
        config: config.wobbly
    }))
    const [bgMenu] = useSpring(() => ({
        from: {width: "0px"},
        to: {width: "80px"},
        config: config.wobbly
    }))

    const list = data.map(item => {
        return(
            <animated.li style={linkItemAnim[item.id]} key={item.id}>
                <LinkItem
                    name={item.name.toUpperCase()} 
                    icon={item.icon}
                    route={item.route}
                />
            </animated.li>
        )
    })

    useEffect(() => {
        setTimeout(() => {
            setLinkItemAnim(index => ({
                transform: "translateX(0px)", opacity: 1,
                delay: 300 + (200 * index) 
            }))
        }, 600)
    })
    return(
        <animated.nav style={bgMenu}>
            <div className="menu-bg"></div>
            <ul>
                <li>
                    <img src={logo} alt="text" />
                </li>
                {list}
            </ul>
        </animated.nav>
    )
}

export default MainMenu