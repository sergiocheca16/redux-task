import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "./redux/todosSlice";

function App() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.tasks);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className='container'>
      <h1>Lista de Tareas</h1>
      <input
        type='text'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder='Nueva tarea'
      />
      <button onClick={handleAddTask}>Agregar</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}{' '}
            <button onClick={() => dispatch(removeTask(index))}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
