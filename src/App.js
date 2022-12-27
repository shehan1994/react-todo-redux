import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import InputField from './components/InputField';
import TodosList from './components/TodosList';
import { deleteAll } from './redux/action/addTodo.action';

const App = ({ deleteAll }) => {
  return (
    <div className="App">
      <h1 style={{ textDecoration: 'underline' }}>Todos App </h1>
      <InputField />
      <TodosList />
      <div>
        <button style={{ marginTop: '20px', cursor: 'pointer' }} onClick={() => deleteAll()}>Delete All</button>
      </div>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll())
});

export default connect(null, mapDispatchToProps)(App);
