import React, { useEffect, useState, useContext } from 'react'
import { useSpring, animated, config } from 'react-spring'
import Skill from './Skill'
import { LangContext }  from '../../store'

function Skills() {
    const [toggleLang] = useContext(LangContext)
    const data = [
        {name: "HTML5", icon: require('../../icons/html.png')},
        {name: "CSS", icon: require('../../icons/css.png')},
        {name: "SASS", icon: require('../../icons/scss.png')},
        {name: "JS (ES6)", icon: require('../../icons/js.png')},
        {name: "React", icon: require('../../icons/react.png')},
        {name: "Vue", icon: require('../../icons/vue.png')},
        {name: "Git", icon: require('../../icons/git.png')},
        {name: "Github", icon: require('../../icons/github.png')},
        {name: "Redux", icon: require('../../icons/redux.png')},
        {name: "NPM", icon: require('../../icons/npm.png')},
        {name: "Corel", icon: require('../../icons/corel.png')},
        {name: "Linux\n(basics)", icon: require('../../icons/linux.png')},
        {name: "JQuery", icon: require('../../icons/jquery.png')},
        {name: "Bootstrap", icon: require('../../icons/bootstrap.png')},
        {name: "express\n(basics)", icon: require('../../icons/express.png')},
        {name: "mongodb\n(basics)", icon: require('../../icons/mongodb.png')},
        {name: "Animejs", icon: require('../../icons/animejs.png')},
        {name: "PHP\n(basics)", icon: require('../../icons/php.png')},
        {name: "Laravel\n(basics)", icon: require('../../icons/laravel.png')},
        {name: "Mariadb\n(basics)", icon: require('../../icons/mariadb.png')},
        {name: "wordpress", icon: require('../../icons/wordpress.png')},
    ]
    const [h1Status, seth1Status] = useState(false)
    const [showTitle] = useSpring(() => ({
        from: {width: "calc(0px + 0vw)"},
        width: "calc(260px + 10vw)", config: config.wobbly
    }))
    const [showh1Anim] = useSpring(() => ({
        from: {opacity: 0},
        to: {opacity: 1}, delay: 1000
    }))
    const {t1, o1} = useSpring({
        from: {t1: -50, o1: 0},
        to: {t1: 0, o1: 1},
        config: config.stiff,
        delay: 1000
    })
    const {t2, o2} = useSpring({
        from: {t2: -50, o2: 0},
        to: {t2: 0, o2: 1},
        config: config.stiff,
        delay: 1600
    })

    const list = data.map((item, index) => {
        return(
            <Skill key={index} data={item} slow={index} />
        )
    })
    useEffect(() => {
        setTimeout(() => {
            seth1Status(true)
        }, 1000)
    }, [])
    return(
        <main>
            <animated.div style={showTitle} className="skills">
                {h1Status ? <animated.h1 style={showh1Anim}>{toggleLang ? "Moje Skille" : "My Skills"}</animated.h1> : <h1>&nbsp;</h1>}
            </animated.div>
            <animated.h2 style={{transform: t1.interpolate(t1 => `translateY(${t1}px)`),
                                opacity: o1.interpolate(o1 => o1)}}>{toggleLang ? "Główne" : "Main Stack"}</animated.h2>
            <animated.hr style={{transform: t1.interpolate(t1 => `translateX(${t1}px)`),
                                opacity: o1.interpolate(o1 => o1)}}/>
            <div className="skills-list">
                {list.slice(0, 8)}
            </div>
            <animated.h2 style={{transform: t2.interpolate(t2 => `translateY(${t2}px)`),
                                opacity: o2.interpolate(o2 => o2)}}>{toggleLang ? "Pozostałe" : "Other Skills"}</animated.h2>
            <animated.hr style={{transform: t2.interpolate(t2 => `translateX(${t2}px)`),
                                opacity: o2.interpolate(o2 => o2)}} />
            <div className="skills-list other-skills">
                {list.slice(8)}
            </div>
        </main>
    )
}

export default Skills