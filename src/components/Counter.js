import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector( state => state.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment());
   };
  const incrementby5Handler = () => {
    dispatch(counterActions.increase(5)); // =>> {type:'increase', payload:5};
   };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
   };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{ counter }</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={incrementby5Handler}>Increment by 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
