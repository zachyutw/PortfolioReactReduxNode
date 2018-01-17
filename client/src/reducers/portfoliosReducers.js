import {FETCH_PORTFOLIOS} from '../actions';

export default function(state=[],action)
{
    
    switch(action.type){
        case FETCH_PORTFOLIOS: 
        //console.log('error default');
        return action.payload;
        default: 
           
        return state; 
    }
}