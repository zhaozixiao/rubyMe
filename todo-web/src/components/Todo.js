import React, { useEffect, useRef, useState } from "react";

export default function Todo(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);
    useEffect(() => {
      if (isEditing) {
        editFieldRef.current.focus();
      } else {
        editButtonRef.current.focus();
      }
    }, [isEditing]);
    function handleChange(e) {
      setNewName(e.target.value);
    }
    function handleSubmit(e) {
      e.preventDefault();
      props.editTask(props.id, newName);
      setNewName("");
      setEditing(false);
    }
    const editingTemplate = (
      <form className="stack-small" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="todo-label" htmlFor={props.id}>
            New name for {props.name}
          </label>
          <input
            id={props.id}
            className="todo-text"
            type="text"
            value={newName}
            onChange={handleChange}
            ref={editFieldRef}
          />
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn todo-cancel"
            onClick={() => setEditing(false)}
          >
            Cancel
            <span className="visually-hidden">renaming {props.name}</span>
          </button>
          <button type="submit" className="btn btn__primary todo-edit">
            Save
            <span className="visually-hidden">new name for {props.name}</span>
          </button>
        </div>
      </form>
    );
    const viewTemplate = (
      <div className="stack-small" disabled={props.status === 'deleted'}>
        <div className="c-cb">
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id, props.status)}
            disabled={props.status === 'deleted'}
          />
          <label className="todo-label" htmlFor={props.id} style={props.status === 'deleted'?
          {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : {}}>
            {props.name}
          </label>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn"
            onClick={() => setEditing(true)}
            ref={editButtonRef}
            disabled={props.status === 'deleted'}
          >
            Edit <span className="visually-hidden">{props.name}</span>
          </button>
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => props.deleteTask(props.id)}
            disabled={props.status === 'deleted'}
          >
            Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
      </div>
    );    
    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}  