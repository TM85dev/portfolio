import React, { useEffect, useContext } from 'react'
import { useSpring, useSprings, animated, config } from 'react-spring'
import LinkItem from './LinkItem'
import logo from '../logo.png'
import { LangContext } from '../store'

function MainMenu() {
    const [toggleLang, setToggleLang] = useContext(LangContext)
    const data = [
        {id:0, name: toggleLang ? "Główna" : "Home", icon: "flaticon-home", route: "/"},
        {id:1, name: toggleLang ? "Skille" : "Skills", icon: "flaticon-wrench", route: "/skills"},
        {id:2, name: toggleLang ? "Projekty" : "Projects", icon: "flaticon-monitor", route: "/projects"},
        {id:3, name: toggleLang ? "O_Mnie" : "About_Me", icon: "flaticon-person", route: "/about-me"},
        {id:4, name: toggleLang ? "Kontakt" : "Contact", icon: "flaticon-contact", route: "/contact"},
        {id:5, name: "Github", icon: "flaticon-github", route: "https://github.com/TM85dev"},
        {id:6, name: "LinkedIn", icon: "flaticon-linkedin", route: "/soon"}
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
    const [plAnim, setPLAnim] = useSpring(() => ({
        backgroundColor: "lightgray", color: "black"
    }))
    const [engAnim, setENGAnim] = useSpring(() => ({
        backgroundColor: "black", color: "lightgray"
    }))
    const clickHandler = () => {
        setToggleLang(!toggleLang)
        setPLAnim(() => ({
            backgroundColor: toggleLang ? "black" : "lightgray", 
            color: toggleLang ? "lightgray" : "black"
        }))
        setENGAnim(() => ({
            backgroundColor: !toggleLang ? "black" : "lightgray", 
            color: !toggleLang ? "lightgray" : "black"
        }))
    }

    const list = data.map(item => {
        return(
            <animated.li style={linkItemAnim[item.id]} key={item.id}>
                <LinkItem
                    name={item.name.toUpperCase()} 
                    icon={item.icon}
                    route={item.route}
                    id={item.id}
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
                <li>
                    <button onClick={clickHandler}>
                        <animated.span style={plAnim}>PL</animated.span>
                        <animated.span style={engAnim}>ENG</animated.span>
                    </button>
                </li>
            </ul>
        </animated.nav>
    )
}

export default MainMenu