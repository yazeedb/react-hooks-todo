import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import './styles.css';

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
