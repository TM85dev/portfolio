import React, { useEffect, useContext, useState } from 'react'
import { useSpring, useSprings, animated, config } from 'react-spring'
import LinkItem from './LinkItem'
import logo from '../logo.png'
import { LangContext } from '../store'

function useResize() {
    const [windowWidth, setWidth] = useState(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return windowWidth
}

function MainMenu() {
    const resized = useResize()
    const [showMenu, setShowMenu] = useState(window.innerWidth<500 ? false : true)
    const [toggleLang, setToggleLang] = useContext(LangContext)
    const showHideData = showMenu ? 'hide' : 'show'
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
        display: 'list-item',
        config: config.wobbly
    }))
    const [logoAnim, setLogoAnim] = useSpring(() => ({
        opacity: 1, display: "list-item"
    }))
    const [bgMenu, setBgMenu] = useSpring(() => ({
        from: {width: "20px"},
        to: {width: "100px"},
        config: config.wobbly
    }))
    const [plAnim, setPLAnim] = useSpring(() => ({
        backgroundColor: "lightgray", color: "black"
    }))
    const [engAnim, setENGAnim] = useSpring(() => ({
        backgroundColor: "black", color: "lightgray"
    }))
    const [showHideAnim, setShowHideAnim] = useSpring(() => ({
        color: "lightgray"
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
    const showHideHandler = () => {
        setShowMenu(!showMenu)

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
    const toggleMenu = showHideData.split("").map((word, index) => (<span key={index}>{word}</span>))

    useEffect(() => {
        setTimeout(() => {
            setLinkItemAnim(index => ({
                transform: "translateX(0px)", opacity: 1,
                delay: 300 + (200 * index) 
            }))
        }, 600)
        if(resized<500) {
            setBgMenu(() => ({width: showMenu ? "100px" : '20px'}))
            setLinkItemAnim(() => ({display: showMenu ? "list-item" : 'none'}))
            setLogoAnim(() => ({display: showMenu ? "list-item" : "none"}))
        }
        else {
            setBgMenu(() => ({width: showMenu ? '100px' : "20px"}))
            setLinkItemAnim(() => ({display: showMenu ? 'list-item' : "none"}))
            setLogoAnim(() => ({display: showMenu ? "list-item" : "none"}))
        }
    })
    return(
        <animated.nav style={bgMenu}>
            <div className="menu-bg"></div>
            <ul>
                <animated.li style={logoAnim}>
                    <img src={logo} alt="logo" />
                </animated.li>
                {list}
                <animated.div 
                    style={showHideAnim}
                    className='toggle-menu' 
                    onClick={showHideHandler}
                    onMouseOver={() => setShowHideAnim(() => ({color: "red"}))}
                    onMouseLeave={() => setShowHideAnim(() => ({color: "lightgray"}))}>
                    {toggleMenu}
                </animated.div>
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