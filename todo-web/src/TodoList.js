import RelayEnvironment from './RelayEnvironment';
import { nanoid } from "nanoid";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import React, { useState, useEffect } from "react";
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
const { Suspense } = React;

const FILTER_MAP = {
  All: () => true,
  Active: task => task.status === 'active',
  Completed: task => task.status === 'complete',
  Deleted: task => task.status === 'complete'
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

const TodoQuery = graphql`
  query TodoListGetAllTodosQuery {
    allTodos {
      id
      reference
      description
      status
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, TodoQuery, {
  /* query variables */
});

function TodoList(props) {
  const { allTodos: tasks } = usePreloadedQuery(TodoQuery, props.preloadedQuery);
  console.log(tasks);
  const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';
  const headingText = `${tasks.length} ${tasksNoun} remaining`;
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
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    // setTasks(updatedTasks);
    console.log(updatedTasks);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    // setTasks(remainingTasks);
    console.log(remainingTasks);
  }
  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
    // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return {...task, name: newName}
      }
      return task;
    });
    // setTasks(editedTaskList);
    console.log(editedTaskList);
  }
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tasks
        .filter(FILTER_MAP[filter])
        .map(task => (
        <Todo
          id={task.id}
          name={task.description}
          completed={task.status === 'complete' || false}
          key={task.id}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
      </ul>
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function TodoListRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <TodoList preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default TodoListRoot;
