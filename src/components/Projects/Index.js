import React, { useState } from 'react'
import Project from './Project'
import Info from './info'
import { useSpring, animated, config } from 'react-spring'

function Projects() {
    const data = [
        {id: 0, name: "Agency Site", link: require("../../pics/agency_site.jpg"), tech: ["Vue", "Vue Router", "Vue-Animejs", "Vue-Lazyload"]},
        {id: 1, name: "Dogs Site", link: require("../../pics/dogs_site.jpg"), tech: ["React", "React-Router", "React-Spring"]},
        {id: 2, name: "Pairs Game", link: require("../../pics/pairs_game.jpg"), tech: ["JQuery", "Bootstrap"]},
        {id: 3, name: "Rock-Paper-Sicisors", link: require("../../pics/rock_paper_sicisors.jpg"), tech: ["JQuery", "JQuery-Transit", "Bootstrap"]},
        {id: 4, name: "Todos Project", link: require("../../pics/todos.jpg"), tech: ["Vue","JQuery", "Bootstrap", "Laravel", "Axios"]},
    ]
    const [isVisible, setVisible] = useState([false, false, false, false, false, true])
    const [showTitle] = useSpring(() => ({
        from: {width: "calc(0px + 0vw)"},
        width: "calc(260px + 10vw)", config: config.wobbly
    }))
    const [showh1Anim] = useSpring(() => ({
        from: {opacity: 0},
        to: {opacity: 1}, delay: 1000
    }))
    const [defaultInfo] = useSpring(() => ({
        from: {opacity: 0},
        to: {opacity: 1}, delay: 1600
    }))
    
    const projectsList = data.map((project, index) => {
        return(
            <Project project={project} setVisible={setVisible} delay={index} key={index} />
        )
    })
    const infoList = data.map((item, index) => {
        return(
            <span key={index}>
            {isVisible[index] ? <Info visible={isVisible[index]} project={item} /> :
            isVisible[5] ? <animated.div style={defaultInfo} className="default-info"><h3>Select one project</h3></animated.div> : ""}
            </span>
        )
    })
    return(
        <main>
            <animated.div style={showTitle} className="projects">
                <animated.h1 style={showh1Anim}>Projects</animated.h1>
            </animated.div>
            <div className="projects-list">
                <div>
                    {projectsList}
                </div>
                <div>
                    {infoList}
                </div>
            </div>
        </main>
    )
}

export default Projects