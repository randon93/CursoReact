import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [
        {
            text: "Tarea de ejemplo",
            id: Date.now(),
        },
    ], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Tareas pendientes</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">¿Qué se necesita hacer?</label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Añadir #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }  
}

class TodoList extends React.Component {

    elminar(id) {
        const items = this.props.items;
        items.map( item => {
            if (item.id === id) {
                items.splice(items.indexOf(item), 1);
                return 1;
            }
            return 1;
        });
    } 

  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
        <>
          <li key={item.id}>{item.text}</li>
          <button onDoubleClick={this.elminar(item.id)}>Eliminar</button>
        </>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
