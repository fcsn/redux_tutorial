import * as types from '../actions/ActionTypes';

const initialState = {
    color: 'black'
};

const color = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_COLOR:
            return {
                color: action.color   //parameter의 action에서 가져옴, color는 action creator에서 return값
            };
        default:
            return state;
    }
}

export default color;
