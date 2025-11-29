import { Component } from "react";

export class ToDoEditor extends Component {
  state = {
    message: "",
  };

  handleChange = (event) => {
    this.setState({
      message: event.currentTarget.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({
      message: "",
    });
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <textarea
          name=""
          id=""
          onChange={this.handleChange}
          value={this.state.message}
        ></textarea>
        <button type="submit">Add</button>
      </form>
    );
  }
}
