import {combineReducers} from 'redux';

function changeText(state =[],action){
    return {
        text: action.text
    }
}

const reducers = combineReducers({
    changeText
});

export default reducers;