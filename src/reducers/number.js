import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0,
    dummy: 'dumbdumb',
};

const number = (state = initialState, action) => {
    switch(action.type) {
        case types.INCREMENT:
            return {
                ...state,     //spread 연산자 연습
                number: state.number + 1,    //paramenter의 state에서 가져옴, number는 initialState에서 시작됨
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }
}

export default number;
