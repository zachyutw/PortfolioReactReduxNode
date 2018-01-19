import {FETCH_USER} from '../actions';

export default function(state=null, action)
{
    //console.log(action);
    switch(action.type) {
        case FETCH_USER:
        //cconsole.log('select_port reducer',action);
            return action.payload || false;
        default: 
            return state;
    }
}