import { Children, Component } from "react";
import "./Modal.css"

export class Modal extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log("componentDidUnMount");
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackDropKeyDown = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="backdrop" onClick={this.handleBackDropKeyDown}>
        <div className="modal">{this.props.children}</div>
      </div>
    );
  }
}