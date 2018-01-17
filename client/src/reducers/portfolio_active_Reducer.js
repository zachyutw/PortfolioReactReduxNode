import {SELECT_PORTFOLIO} from '../actions';
export default function(state=null,action)
{
    switch(action.type)
    {
        case SELECT_PORTFOLIO: 
       
        return action.payload||false;
        default: return state;
    }
}