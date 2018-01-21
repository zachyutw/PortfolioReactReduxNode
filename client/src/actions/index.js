import axios from 'axios';
import portfolios_data from '../reducers/data/portfolioData';

export const FETCH_USER = 'fetch_user';
export const fetchUser = () => async (dispatch) => {        
      const res = await axios.get('/api/current_user');
      dispatch({type: FETCH_USER, payload:res.data});
};
//get a callback token
export const handleToken = (token) => async dispatch =>{
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const submitSurvey = (values,history) => async dispatch =>{ 
    const res = await axios.post('/api/surveys',values);
    //send user to survey page
    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
}
export const FETCH_SURVEYS = 'fetch_surveys';
export const fetchSurveys = () => async (dispatch) => {
    const res = await axios.get('/api/surveys');
    dispatch({type:FETCH_SURVEYS, payload: res.data});
}
export const SELECT_PORTFOLIO = 'select_portfolio';
export function selectPortfolio(portfolio){
    return { type: SELECT_PORTFOLIO, payload: portfolio}
}
export const FETCH_PORTFOLIOS = 'fetch_portfolios';
export function fetchPortfolios(){
    const portfolios = portfolios_data();
   // console.log('actions',portfolios);
   return {type:FETCH_PORTFOLIOS, payload: portfolios};
}