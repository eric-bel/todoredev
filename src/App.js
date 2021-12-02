import React from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import Tasks from "./components/Tasks";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { id: 0, title: "Купить молоко", done: false },
        { id: 1, title: "Купить хлеб", done: true },
        { id: 2, title: "Купить яйца", done: false },
      ],
    };
  }

  addTask = (task) => {
    this.setState((state) => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        title: task,
        done: false,
      });
      return tasks;
    });
  };

  doneTask = (id) => {
    const index = this.state.tasks.map((task) => task.id).indexOf(id);
    this.setState((state) => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
  };

  deleteTask = (id) => {
    const index = this.state.tasks.map((task) => task.id).indexOf(id);
    this.setState((state) => {
      let { tasks } = state;
      delete tasks[index];
      return tasks;
    });
  };

  render() {
    const { tasks } = this.state;
    const ActiveTasks = tasks.filter((task) => !task.done);
    const DoneTasks = tasks.filter((task) => task.done);

    return (
      <>
        <div className="App">
          <h1 className="top">What's the plan for today?</h1>
          {[...ActiveTasks, ...DoneTasks].map((task) => (
            <Tasks
              doneTask={() => this.doneTask(task.id)}
              deleteTask={() => this.deleteTask(task.id)}
              task={task}
              key={task.id}
            />
          ))}
          <TaskInput addTask={this.addTask} />
          <div className="editable">
            <b>Подсказка:</b> наведите курсор на текст в задаче, и он будет доступен для
            редактирвоания
          </div>
        </div>
      </>
    );
  }
}

export default App;
