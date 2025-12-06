import { Component } from "react";
import "./App.css";
import todosData from "./data/todo.json";
import { Container } from "./Components/Container/Container";
import { TodosList } from "./Components/TodoList/TodoList";
import { ToDoEditor } from "./Components/TodoList/TodoEditor";
import { Filter } from "./Components/Filter/Filter";
import { Modal } from "./Components/Modal/Modal";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    todos: todosData,
    filter: "",
    showModal: false,
  };

  deleteToDO = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  addToDO = (text) => {
    const todo = {
      id: nanoid(),
      text: text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  toggleCompleted = (todoId) => {
    console.log(todoId);
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  changeFilter = (event) => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase()

    return todos.filter(({text}) => text.toLowerCase().includes(normalizedFilter))
  }

  componentDidMount() {
    const todos = localStorage.getItem("todos")
    const parsedTodos = JSON.parse(todos)
    if (parsedTodos) {
      this.setState({ todos: parsedTodos})
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDidUpdate")
    const prevTodos = prevState.todos
    const nextTodos = this.state.todos
    if (nextTodos !== prevTodos) {
      localStorage.setItem("todos", JSON.stringify(nextTodos))
    }
  }
  toggleModal = () => {
    this.setState(({showModal}) => ({
    showModal: !showModal,
  }))
}
  

  render() {
    const { todos, filter,showModal } = this.state;
    const completedToDoCount = this.calculateCompletedTodos();
    const totalToDoCount = todos.length;

    return (
      <Container>
        {/* <div>
          <p>Total tasks: {totalToDoCount}</p>
          <p>Completed tasks: {completedToDoCount}</p>
        </div>
        <ToDoEditor onSubmit={this.addToDO} />
        <Filter value={filter} onChange={this.changeFilter} />
        <TodosList
          todos={this.getVisibleTodos()}
          onDeleteToDo={this.deleteToDO}
          onToggleCompleted={this.toggleCompleted}

        /> */}
        <button type="button" onClick={this.toggleModal}>Open</button>

        {showModal && (
          <Modal onClose = {this.toggleModal}>
            <h2>h1</h2>
            <p>hi2</p>
            <button type="button" onClick={this.toggleModal}>Close</button>
          </Modal>
      )}
      </Container>
    );
  }
}
