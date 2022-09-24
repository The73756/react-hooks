import axios from 'axios';
import './App.scss';
import useRequest from './hooks/useRequest';

function App() {
  const [todos, isLoading, error] = useRequest(fetchTodos);

  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`);
  }

  if (isLoading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>Произошла ошибка при загрузке данных</h1>;
  }

  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <div key={todo.id} style={{ padding: 30, border: '2px solid black' }}>
            {todo.id}. {todo.title}
          </div>
        ))}
    </div>
  );
}

export default App;
