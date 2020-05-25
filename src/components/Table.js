import React, { Component } from "react";
import "./Table.css";

class Table extends Component {
  render() {
    const item = this.props.item;
    const index = this.props.index;
    let className = "";
    if(index%2 == 0) {
      className += 'Table-even';
    }
    return (
      <tr className={className}>
        <td>{index}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.age}</td>
      </tr>
    );
  }
}

export default Table;
