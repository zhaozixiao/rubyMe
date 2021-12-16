import RelayEnvironment from './RelayEnvironment';
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import TodoList from "./components/TodoList";
import React, { useState } from "react";
import {
  RelayEnvironmentProvider,
  loadQuery,
  useQueryLoader,
  graphql,
  commitMutation,
} from 'react-relay';

const TodoTabGetAllTodosQuery = graphql`
query TodoTabGetAllTodosQuery {
    allTodos {
    id
    reference
    description
    status
    }
}
`;

const { Suspense } = React;
const FILTER_MAP = {
  All: () => true,
  Active: task => task.status === 'active',
  Completed: task => task.status === 'complete',
  Deleted: task => task.status === 'deleted'
};
const FILTER_NAMES = Object.keys(FILTER_MAP);
const initialQueryRef = loadQuery(RelayEnvironment, TodoTabGetAllTodosQuery, {
  /* query variables */
});

function TodoTab(props) {
  // init
  const [
    todosQueryRef,
    loadTodosQuery,
  ] = useQueryLoader(
    TodoTabGetAllTodosQuery,
    props.initialQueryRef
  );
  function commitCreateTodoMutation(
    input,
  ) {
    return commitMutation(RelayEnvironment, {
      mutation: graphql`
      mutation TodoTabCreateTodoMutation($input: CreateTodoInput!) {
        createTodo(input: $input) {
          id
          description
          reference
        }
      }
      `,
      variables: {input},
      onCompleted: response => { loadTodosQuery({}, {fetchPolicy: 'network-only'}); } /* Mutation completed */,
      onError: error => {} /* Mutation errored */,
    });
  };
  function commitEditTodoMutation(
    input,
  ) {
    return commitMutation(RelayEnvironment, {
      mutation: graphql`
      mutation TodoTabEditTodoMutation($input: UpdateTodoInput!) {
        updateTodo(input: $input) {
          id
          description
          reference
          status
        }
      }
      `,
      variables: {input},
      onCompleted: response => { loadTodosQuery({}, {fetchPolicy: 'network-only'}); } /* Mutation completed */,
      onError: error => {} /* Mutation errored */,
    });
  };
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
    commitCreateTodoMutation({
      description: name,
      reference: 'web',
    });
  }
  function toggleTaskCompleted(id, curstatus) {
    commitEditTodoMutation({
      id,
      user: 'admin',
      status: (curstatus === 'complete')? 'active': 'complete',
    });
  }
  function deleteTask(id) {
    commitEditTodoMutation({
      id,
      user: 'admin',
      status: 'deleted',
    });
  }
  function editTask(id, newName) {
    commitEditTodoMutation({
      id,
      user: 'admin',
      description: newName,
    });
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
