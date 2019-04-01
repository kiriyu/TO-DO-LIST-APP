import React from "react";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  addItem(todo) {
    if (todo.length > 0) {
      this.props.addItem(todo);
      this.setState({ value: "" });
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            this.addItem(this.state.value);
          }}
        >
          add-todo
        </button>
      </div>
    );
  }
}
