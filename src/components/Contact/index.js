import React, { useState, useContext } from 'react'
import Input from './input'
import Email from './email'
import { useSpring, animated, config } from 'react-spring'
import Recaptcha from 'react-recaptcha'
import axios from 'axios'
import { LangContext } from '../../store'

function Contact() {
    const [toggleLang] = useContext(LangContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [validate, setValidate] = useState([false, false, false, false])
    const [messageSend, setMessageSend] = useState(false)
    const [showTitle] = useSpring(() => ({
        from: {width: "calc(0px + 0vw)"},
        width: "calc(260px + 10vw)", config: config.wobbly
    }))
    const [showh1Anim] = useSpring(() => ({
        from: {opacity: 0},
        to: {opacity: 1}, delay: 1000
    }))
    const [showFormBlock] = useSpring(() => ({
        from: {transform: "translateY(50px)", opacity: 0},
        to: {transform: "translateY(0px)", opacity: 1}, 
        config: config.wobbly, delay: 1400
    }))
    const [showForm] = useSpring(() => ({
        from: {opacity: 0},
        to: {opacity: 1},
        delay: 2000
    }))
    const [showMessage, setShowMessage] = useSpring(() => ({
        opacity: 0, transform: "translateX(-20px)",
        color: "lightgreen"
    }))
    const verifyCaptcha = (response) => {
        if(response) {
            setValidate(prevState => {
                return prevState.map((item,index) => {
                    if(index===3) return item = true
                    return item
                })
            })
        }
        else {
            setValidate(prevState => {
                return prevState.map((item,index) => {
                    if(index===3) return item = false
                    return item
                })
            })
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setShowMessage(() => ({
            from: {opacity: 0, transform: "translateX(-20px)"},
            opacity: 1, transform: "translateX(0px)",
            color: "rgb(233, 70, 76)"
        }))
        if(validate[0] && validate[1] && validate[2]) {
            if(validate[3]) {
                setShowMessage(() => ({
                    from: {opacity: 0, transform: "translateX(-20px)"},
                    opacity: 1, transform: "translateX(0px)",
                    color: "lightgreen"
                }))
                axios.post(
                    "/mail", 
                    {name: name, email: email, message: message}
                ).then(response => {
                    setMessageSend(true)
                })
                
            } else {
                setShowMessage(() => ({
                    from: {opacity: 0, transform: "translateX(-20px)"},
                    opacity: 1, transform: "translateX(0px)",
                    color: "rgb(233, 70, 76)"
                }))
            }
        }
    }
    return(
        <main>
            <animated.div style={showTitle} className="contact">
                <animated.h1 style={showh1Anim}>{toggleLang ? "Kontakt" : "Contact"}</animated.h1>
            </animated.div>
            <animated.div style={showFormBlock} className="contact-form">
                <animated.form style={showForm} onSubmit={submitHandler}>
                    <h3>
                        {toggleLang ? "Proszę wypełnij formularz, aby przesłać mi wiadomość." : "Please fill out this form to send me a message."}
                    </h3>
                    <h3>
                        {toggleLang ? "Lub napisz do mnie na adres: " : "Or send me an email at: "}
                        <Email />
                    </h3>
                    <Input 
                        inputValue={name} 
                        setInputValue={setName} 
                        name="Name" 
                        type="text" 
                        setValidate={setValidate} 
                        messageSend={messageSend} 
                    />
                    <Input 
                        inputValue={email} 
                        setInputValue={setEmail} 
                        name="Email" 
                        type="email" 
                        setValidate={setValidate} 
                        messageSend={messageSend} 
                    />
                    <Input 
                        inputValue={message} 
                        setInputValue={setMessage} 
                        name="Message" 
                        type="message" 
                        setValidate={setValidate} 
                        messageSend={messageSend} 
                    />
                    <animated.span style={showMessage}>
                        {toggleLang ? (messageSend ? "Wiadomość wysłano!" :
                        !validate[0] || !validate[1] || !validate[2] ? "Wypełnij wszystkie pola!" :
                        validate[3]===false ? "Captcha jest wymagana!" : "\xA0") : 
                        (messageSend ? "Message has been send!" :
                        !validate[0] || !validate[1] || !validate[2] ? "Please fill all fields!" :
                        validate[3]===false ? "Captcha is required!" : "\xA0")}
                    </animated.span>
                    <button style={{
                            pointerEvents: messageSend ? "none" : "auto", 
                            color: messageSend ?"lightgray" : "rgb(233, 70, 76)"
                    }}>
                            {toggleLang ? "Wyślij wiadomość" : "Send Message"}
                    </button>
                    <Recaptcha
                        sitekey="6Lc9CAAVAAAAAHfTgkTsNsv1AIX07nfXk105vBEt"
                        render="explicit"
                        theme="dark"
                        onloadCallback={() => console.log("captcha loaded")}
                        verifyCallback={verifyCaptcha}
                    />
                </animated.form>
            </animated.div>
        </main>
    )
}

export default Contact