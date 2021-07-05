const text  = ""

const Input = (state = text, actions)=>{
    switch(actions.type) 
    {
        case 'TYPE':{
            state =  actions.payload;
            return state;
        }
        case 'REFRESH':{
            state = "";
            return state;
        }
        default : return state;
    }
    
}

export default Input;