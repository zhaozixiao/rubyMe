import RelayEnvironment from './RelayEnvironment';
import { nanoid } from "nanoid";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import TodoList from "./components/TodoList";
import React, { useState } from "react";
import {
  RelayEnvironmentProvider,
  loadQuery,
  useQueryLoader,
} from 'react-relay';

const TodoListGetAllTodosQuery = require('./__generated__/TodoListGetAllTodosQuery.graphql');
const { Suspense } = React;
const FILTER_MAP = {
  All: () => true,
  Active: task => task.status === 'active',
  Completed: task => task.status === 'complete',
  Deleted: task => task.status === 'deleted'
};
const FILTER_NAMES = Object.keys(FILTER_MAP);
const initialQueryRef = loadQuery(RelayEnvironment, TodoListGetAllTodosQuery, {
  /* query variables */
});

function TodoTab(props) {
  // init
  const [
    todosQueryRef,
    loadTodosQuery,
  ] = useQueryLoader(
    TodoListGetAllTodosQuery,
    props.initialQueryRef
  );
  const [filter, setFilter] = useState('All');
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
  }
  function toggleTaskCompleted(id) {
    
  }
  function deleteTask(id) {
    
  }
  function editTask(id, newName) {
    loadTodosQuery({}, {fetchPolicy: 'network-only'});
  }
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <TodoList filter={filter}
      queryRef={todosQueryRef}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask} />
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function TodoTabRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <TodoTab initialQueryRef={initialQueryRef}/>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default TodoTabRoot;
