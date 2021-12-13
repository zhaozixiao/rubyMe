import React, { useState, useEffect } from "react";
import fetchGraphQL from './fetchGraphQL';
import { nanoid } from "nanoid";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

const FILTER_MAP = {
  All: () => true,
  Active: task => task.status === 'active',
  Completed: task => task.status === 'complete'
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(null);
  const [headingText, setHeadingText] = useState(null);
  const [filter, setFilter] = useState('All');
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query {
        allTodos {
          id
          reference
          description
          status
        }
      }
    `).then(response => {
      // Avoid updating state if the component unmounted before the fetch completes
      if (!isMounted) {
        return;
      }
      const result = response.data.allTodos
      setTasks(result);
      const tasksNoun = result.length !== 1 ? 'tasks' : 'task';
      setHeadingText(`${result.length} ${tasksNoun} remaining`);
      console.log(headingText);
    }).catch(error => {
      console.error(error);
    });

    return () => {
      isMounted = false;
    };
  }, [fetchGraphQL]);
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
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
    setTasks(updatedTasks);
    console.log(updatedTasks);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
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
    setTasks(editedTaskList);
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
        {headingText != null? headingText : "Loading"}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tasks != null? tasks
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
      )) : "Loading"}
      </ul>
    </div>
  );
}


export default App;
