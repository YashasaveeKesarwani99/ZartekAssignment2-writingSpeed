import React from 'react'
import { useSelector } from 'react-redux';
import './preffiledComponent.css'

const PrefilledComponent = ()=>{
 
    const prefilledText = useSelector((state)=>state.Prefilled)

    return(
        <div className="prefilled">
            {prefilledText}
        </div>
    )
    

}

export default PrefilledComponent;