import React, { useState, useEffect } from 'react'
import { useSpring, useSprings, animated, config  } from 'react-spring'
import LinkItem from './LinkItem'
import logo from '../logo.png'

function MainMenu() {
    const data = [
        {id:0, name: "Home", icon: "flaticon-home"},
        {id:1, name: "Skills", icon: "flaticon-wrench"},
        {id:2, name: "Projects", icon: "flaticon-monitor"},
        {id:3, name: "About Me", icon: "flaticon-person"},
        {id:4, name: "Contact", icon: "flaticon-contact"}
    ]

    const [linkItemAnim, setLinkItemAnim] = useSprings(data.length, index => ({
        transform: "translateX(-50px)", opacity: 0,
        config: config.wobbly
    }))
    const list = data.map(item => {
        return(
            <animated.li style={linkItemAnim[item.id]} key={item.id}>
                <LinkItem
                    name={item.name.toUpperCase()} 
                    icon={item.icon}
                />
            </animated.li>
        )
    })

    useEffect(() => {
        setLinkItemAnim(index => ({
            transform: "translateX(0px)", opacity: 1,
            delay: 300 + (200 * index) 
        }))

    })
    return(
        <nav>
            <ul>
                <li>
                    <img src={logo} alt="text" />
                </li>
                {list}
            </ul>
        </nav>
    )
}

export default MainMenu