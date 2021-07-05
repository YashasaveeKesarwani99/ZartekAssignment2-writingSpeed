import React,{ useState,useEffect } from 'react'
//import { findAllInRenderedTree } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { useSelector,useDispatch } from 'react-redux';
import {Typing,refresh } from '../../Actions/Typing'
import './InputComponent.css'

const InputComponent = ()=>{

    useEffect(()=>{
        
    },[])

    const [error, setError] = useState(0);
    const [symbols,setSymbol] = useState(0);
    const [wpm, setWpm] = useState(0);
    const [sec,setSec] = useState(0);
    const [started,setStarted] = useState(false);
    const [finished,setFinished] = useState(false);
    const [readonly,setReadonly] = useState(false);

    const dispatch = useDispatch();

    const changeHandler = (e)=>{
        dispatch(Typing(e.target.value))
        CountCorrectSymbols();
        if(started===false)
            setStarted(true)
        speed();
        errorFunction();
        
    }

    useEffect(()=>{
        if(started===true&&finished===false&&sec!==60){
            setTimeout(()=>{
                setSec(sec=>sec+1)
            },1000)
        }
        
    },[sec, started, finished])

    const errorFunction =()=>{
        const text = prefilledText.replace(' ','')
        const count = InputText.replace(' ','').split('').filter((s,i)=>s!==text[i]).length;
        setError(count)
    }

    const InputText = useSelector((state)=>state.Input)
    const prefilledText = useSelector((state)=>state.Prefilled)
    console.log(InputText)

    const CountCorrectSymbols = ()=>{
        const text = prefilledText.replace(' ','')
        const count = InputText.replace(' ','').split('').filter((s,i)=>s===text[i]).length;
        setSymbol(count)
            
    }

    const speed = ()=>{
        const wpm = ((symbols/5))/(sec/60)
        const round = Math.floor(wpm)
        setWpm(round)
    }

    const restartHandler=()=>{
        setFinished(true)
        setError(0)
        setWpm(0)
        setSec(0)
        setSymbol(0)
        setStarted(false)
        setFinished(false)
        dispatch(refresh())
    }


    return(
        <div>
            <div className="input">
        <input
        placeholder="Start typing here..."
        onChange={e=>changeHandler(e)}
        readOnly={sec===60?true:false}
        value={InputText}
        />
        </div>
        <div className="stats">
        {(InputText.length>5?(<div>WPM : {wpm}</div>):null)
        }
        <div>Typed errors : {error}</div>
        <div>Time : {sec}</div>
        </div>
        <div className="button">
        <button onClick={restartHandler} >Restart</button>
        </div>
        </div>
    )
}

export default InputComponent;