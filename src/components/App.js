import React, { Component } from "react";
import "./App.css";
import Header from "./components/myheader";
import TodoInput from "./components/newinput";
import TodoItem from "./components/newitem";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      itemId: 3
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(todoText) {
    let todos = this.state.todos.slice();
    todos.push({ id: this.state.itemId, text: todoText });
    this.setState({
      todos: todos,
      nextId: ++this.state.itemId
    });
  }
  removeItem(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput addItem={this.addItem} />
          <ul>
            {this.state.todos.map(todo => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  id={todo.id}
                  removeItem={this.removeItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
