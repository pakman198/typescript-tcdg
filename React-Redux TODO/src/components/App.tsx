import React from 'react';
import { connect } from 'react-redux';

import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  // since fetchTodos makes an async action, TS marks an error, that's why the 
  // annotation is set to be a function, otherwise there's an error on the connect
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<AppProps> {

  clickButtonHandler = (): void => {
    this.props.fetchTodos();
  }

  clickTodoHandler = (id: number): void => {
    this.props.deleteTodo(id);
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={ () => this.clickTodoHandler(todo.id) }>
          {todo.title}
        </div>
      );
    });
  }


  render() {
    return(
      <div>
        <button onClick={this.clickButtonHandler}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos
  }
}

export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo } 
)(_App);