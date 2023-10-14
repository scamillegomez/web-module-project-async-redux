import { GET_JOKE,GET_JOKE_ERROR, GET_JOKE_SUCCESS, SET_IS_FETCHING } from "../actions";

const initialState = {
    isFetching: false,
    error: '',
    joke: {
        type: '',
        setup: '',
        punchline: '',
        id: ''
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_FETCHING : 
        return {
            ...state,
            isFetching: action.payload
        }
        case GET_JOKE_SUCCESS : 
        return {
            ...state, 
            isFetching: false, 
            joke: action.payload
        }
        case GET_JOKE_ERROR : 
        return {
            ...state,
            isFetching: false,
            error: action.payload
        }
        default :
        return state;
    }
};