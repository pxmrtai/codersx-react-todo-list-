import React, { Component } from "react";

const todos = ["Go to market", "Buy food", "Make dinner"];

class TodoItem extends Component {
  render() {
    return (
      <div className="TodoItem">
        <ul>
         <li>Go to market</li>
         <li>Buy food</li>
         <li>Make dinner</li>
        </ul>
      </div>
    );
  }
}
export default TodoItem;
