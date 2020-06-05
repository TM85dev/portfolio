import React, { useState, useContext } from 'react'
import { LangContext } from '../../store'

function Input(props) {
    const [toggleLang] = useContext(LangContext)
    const [err, setErr] = useState(null)
    const changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        props.setInputValue(value)
        if(name === "Name") {
            if(value.length <= 0) {
                setErr(toggleLang ? `Pole ${props.name} jest wymagane!` : `Input ${props.name} is required!`)
                props.setValidate(prevState => {
                    return prevState.map((item,index) => {
                        if(index===0) return item = false
                        return item
                    })
                })
            }
            else if(value.length <= 3) {
                setErr(toggleLang ? `Pole ${props.name} wymaga więcej niż 3 znaki` : `Input ${props.name} length should be more than 3`)
                props.setValidate(prevState => {
                    return prevState.map((item,index) => {
                        if(index===0) return item = false
                        return item
                    })
                })
            }
            else {
                setErr("OK!")
                props.setValidate(prevState => {
                    return prevState.map((item,index) => {
                        if(index===0) return item = true
                        return item
                    })
                })
            }
        }
        if(name === "Email") {
            // eslint-disable-next-line
            const text = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!text.test(value)) {
                setErr(toggleLang ? "Nieprawidłowy email!" : "Email is not valid!")
                props.setValidate(prevState => {
                    return prevState.map((item,index) => {
                        if(index===1) return item = false
                        return item
                    })
                })
            }
            else {
                setErr("OK!")
                props.setValidate(prevState => {
                    return prevState.map((item,index) => {
                        if(index===1) return item = true
                        return item
                    })
                })
            }
        }
        if(name === "Message") {
            if(value.length <= 0) {
                setErr(toggleLang ? `Pole ${props.name} jest wymagane!` : `Input ${props.name} is required!`)
                props.setValidate(prevState => {
                    return prevState.map((item,index) => {
                        if(index===2) return item = false
                        return item
                    })
                })
            }
            else if(value.length <= 10) {
                setErr(toggleLang ? `Pole ${props.name} wymaga więcej niż 10 znaków` : `Input ${props.name} length should be more than 10`)
                props.setValidate(prevState => {
                    return prevState.map((item,index) => {
                        if(index===2) return item = false
                        return item
                    })
                })
            }
            else {
                setErr("OK!")
                props.setValidate(prevState => {
                    return prevState.map((item,index) => {
                        if(index===2) return item = true
                        return item
                    })
                })
            }
        }
    }
    return(
        <div>
            <label>
                <span>{props.name}<i>*</i></span>
                {props.name === "Message" ?
                    <textarea
                        disabled={props.messageSend ? true : false}
                        name={props.name}
                        value={props.inputValue}
                        onChange={changeHandler}    
                    /> :
                    <input 
                        disabled={props.messageSend ? true : false}
                        name={props.name}
                        type={props.type}
                        value={props.inputValue}
                        onChange={changeHandler}
                    />
                }
                <span style={{color: err==="OK!" ? "lightgreen" : "rgb(233, 70, 76)"}}>{err}</span>
            </label>
        </div>
    )
}

export default Input