import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import { render } from "@testing-library/react";
import './components/Table';


class App extends Component {
  constructor() {
    super();
    this.list = [
      { firstName: "Jill", lastName: "Hun", age: 50 },
      { firstName: "Eve", lastName: "Lin", age: 20 },
      { firstName: "Jack", lastName: "Jill", age: 87 },
    ];
  }
  render() {
    return (
      <div className="App">
        <div className="Table">
          <table>
            <tr>
              <th>#</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
            {this.list.map((item, index) => (
              <Table key={index} item={item} index={index}/>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
