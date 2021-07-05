import React from 'react'

export const Typing = (value) => (dispatch)=>{
     dispatch({
        type: 'TYPE',
        payload: value
    })
}

export const refresh = ()=> (dispatch)=>{
    dispatch({
        type:'REFRESH'
    })
}
