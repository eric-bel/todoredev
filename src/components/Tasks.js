import React from "react";

const Tasks = ({ task, ...props }) => {
  const ActiveBtn = () => (
    <div className="active-btn">
      {!task.done ? (
        <p onClick={props.doneTask}>✔</p>
      ) : (
        <p onClick={props.deleteTask}>❌</p>
      )}
    </div>
  );

  const className = "task " + (task.done ? "task-done" : "");

  return (
    <>
      <div className={className}>
        <p contentEditable="" key={props.key}>{task.title}</p>
        <ActiveBtn />
      </div>
    </>
  );
};

export default Tasks;
