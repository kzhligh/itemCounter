import React, { Component } from "react";

//const listOf = [{ title: "stuff" }, { title: "stuff2" }];

class Counter extends Component {
  state = {
    id1: "Protein",
    id2: "Carbs",
    id3: "Fat",
    id4: "Etc"
  };

  aList = [{ title: "stuff" }, { title: "stuff2" }];

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  //this is called when an object counter is created

  // {this.state.tags.length === 0 && "Please create a new tag"}, in js, boolean and string gives second operand if it is not empty, etc how many operand you want
  render() {
    console.log(this.props);

    return (
      <div>
        {/*{this.props.children}*/}
        {/* doing this allows for children element of <Counter/> to be rendered*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>cal
        <button
          //here, handleIncrement is a function reference, not a function()
          onClick={() => this.props.onIncrement(this.props.counter)} //see how this is not a "method per say", since its an arrow function
          //doesnt not allow me to pass product atm
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <span>...</span>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
        <button
          //modifying the array should be done in the component its (state) in
          onClick={() => this.props.onDelete(this.props.counter.id)} //to delete counter, we need to delete it in array of counters in counters.jsx
          //notice how props.onDelete is a props that we made in counters
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/*{this.renderTags()}*/}
      </div>
    );
  }

  //can use this to bind, or just use an arrow function instead
  //constructor() {
  //  super();
  //  this.handleIncrement = this.handleIncrement.bind(this);
  //}

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; //notice how here we're not using const, coz we want to mod it
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
}

export default Counter;
