import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //here, we can simply put a bunch of <Counter />
  //but instead we use map function to map every counter to a <Counter /> with an id
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm sm-2">
          Reset
        </button>
        {/*remember here we mapped counters and call each COUNTER*/}
        <div>Today's macros</div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement} //we bubble up the event to the parent to handle it
            counter={counter}
            onDecrement={onDecrement}
          >
            {/*<h4>Counter #{counter.id}</h4>*/}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
