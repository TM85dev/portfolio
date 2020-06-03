import React from 'react'
import { useSpring, animated, config } from 'react-spring'

function AboutMe() {
    const [showTitle] = useSpring(() => ({
        from: {width: "calc(0px + 0vw)"},
        width: "calc(260px + 10vw)", config: config.wobbly
    }))
    const [showh1Anim] = useSpring(() => ({
        from: {opacity: 0},
        to: {opacity: 1}, delay: 1000
    }))
    const [showInfoBlock] = useSpring(() => ({
        from: {transform: "translateY(50px)", opacity: 0},
        to: {transform: "translateY(0px)", opacity: 1}, 
        config: config.wobbly, delay: 1400
    }))
    const [showInfo] = useSpring(() => ({
        from: {opacity: 0},
        to: {opacity: 1},
        delay: 2000
    }))
    return(
        <main>
            <animated.div style={showTitle} className="about-me">
                <animated.h1 style={showh1Anim}>About Me</animated.h1>
            </animated.div>
            <animated.div style={showInfoBlock} className="info-about-me">
                <animated.div style={showInfo}>
                    <span><strong>H</strong>ello, my name is Tomasz Mączka.</span>
                    I worked for an advertising agency for several years. I dealt with: 
                    <ul>
                        <li>creating graphic design for both computers and printing needs,</li>
                        <li>designing posters, business cards,</li>
                        <li>prints,</li>
                        <li>creating simple websites,</li>
                        <li>SEO for small and micro companies,</li>
                        <li>internet advertising campaigns,</li>
                        <li>uploading sites and keeping them on the server.</li>
                    </ul>
                    I also worked in hosting company. My duties included: 
                    <ul>
                        <li>customer service,</li>
                        <li>website migration,</li>
                        <li>help and management of client accounts from the server side (direct admin).</li>
                    </ul>
                    For over half a year I have been learning the latest technologies, in particular based on javascript. <br/>
                    My goal is to further develop, deepen and assimilate the latest trends in programming and javascript technologies. In particular, the MERN stack. <br/>
                    <hr/>
                    After hours, I like to relax doing sports (running, bike, squash, gym), traveling, learning something new about programming and the Japanese language.
                </animated.div>
            </animated.div>
        </main>
    )
}

export default AboutMe