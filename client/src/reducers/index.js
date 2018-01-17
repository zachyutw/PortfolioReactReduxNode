import { combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer'
import portfoliosReducer from './portfoliosReducers';
import portfolio_active_Reducer from './portfolio_active_Reducer';



export default combineReducers({
    auth: authReducer,
    //form is a special key for reduxForm
    form: reduxForm,
    surveys: surveysReducer,   
    portfolios: portfoliosReducer,
    select_portfolio: portfolio_active_Reducer,
});