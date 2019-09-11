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

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

    this.state = {
      fetching: false
    }
  }

  componentDidUpdate(prevProps: AppProps): void {
    console.log(this.state);
    if(!prevProps.todos.length && this.props.todos.length) {
      this.setState({
        fetching: false
      });
    }
  }

  clickButtonHandler = (): void => {
    this.props.fetchTodos();
    this.setState({
      fetching: true
    });
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
        { this.state.fetching ? <h1>LOADING</h1> : null }
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