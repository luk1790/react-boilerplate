import {connect} from 'react-redux';
import {
    changeText
} from './actions';

const mapStateToProps = (state) => {
    return {
        text: state.changeText.text
    }
}

const mapDispatchToProps = { changeText }

export function connectRedux(app){
    debugger;
    return connect(mapStateToProps, mapDispatchToProps)(app)
}