import React from "react";
import {
    graphql,
    usePreloadedQuery,
} from 'react-relay';
import Todo from './Todo';

const FILTER_MAP = {
    All: () => true,
    Active: task => task.status === 'active',
    Completed: task => task.status === 'complete',
    Deleted: task => task.status === 'deleted'
};

const TodoQuery = require('../__generated__/TodoTabGetAllTodosQuery.graphql');

export default function TodoList(props) {
    const {filter, queryRef, toggleTaskCompleted, deleteTask, editTask } = props;
    const { allTodos: tasks } = usePreloadedQuery(
        TodoQuery,
        queryRef
    );
    const tasksNoun = tasks.filter(FILTER_MAP[filter]).length !== 1 ? 'tasks' : 'task';
    const headingText = `${tasks.filter(FILTER_MAP[filter]).length} ${tasksNoun}`;
    return (
        <div>
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
                status={task.status}
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