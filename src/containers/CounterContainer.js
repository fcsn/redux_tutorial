import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),//actions.increment()는 action creator
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps         //mapStateToProps나 mapDispatchToProps가 없을 시에는 컴포넌트에서 this.props.store로 접근 가능
)(Counter);


export default CounterContainer;
