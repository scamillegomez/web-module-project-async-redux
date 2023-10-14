import axios from 'axios';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';
export const GET_JOKE = 'GET_JOKE';
export const GET_JOKE_SUCCESS = 'GET_JOKE_SUCCESS';
export const GET_JOKE_ERROR = 'GET_JOKE_ERROR';

export const setIsFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, payload: isFetching}
}

export const getJoke = () => async dispatch => {
    dispatch(setIsFetching(true));
    try {
        const joke = await axios.get('https://official-joke-api.appspot.com/random_joke');
        await new Promise(resolve => setTimeout(resolve,800));
        dispatch(getJokeSuccess(joke.data));
    }
    catch (error) {
        dispatch(getJokeError(error));
    }
}

export const getJokeError = (error) => {
    return {type: GET_JOKE_ERROR, paylod: error}
}

export const getJokeSuccess = (joke) => {
    return {type: GET_JOKE_SUCCESS, payload: joke}
}