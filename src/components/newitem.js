import React from "react";

export default class TodoItem extends React.Component {
  removeItem(id) {
    this.props.removeItem(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <button
          className="removeItem"
          onClick={e => {
            this.removeItem(this.props.id);
          }}
        >
          delete
        </button>
        {this.props.todo.text}
      </div>
    );
  }
}
