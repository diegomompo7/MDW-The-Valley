import './App.css';
import Results from './components/Results/Results';
import OrderedPost from './components/OrderedPost/OrderedPost';
import Counter from './components/Counter/Counter'
import ToDoList from './components/ToDoList/ToDoList';

const posts = [
  {
    title: "Este artículo es ya de invierno",
    date: "2022-12-01T00:00:00"
  },
  {
    title: "Este artículo es de principio de año",
    date: "2022-01-01T00:00:00"
  },
  {
    title: "Este artículo es de verano",
    date: "2022-07-01T00:00:00"
  },
];


function App() {
  return (
    <div className="App">
      <h2>MEDIA</h2>
      <Results></Results>
      <h2>LISTA DE ARTÍCULOS</h2>
      <OrderedPost posts={posts}></OrderedPost>
      <h2>CONTADOR</h2>
      <Counter></Counter>
      <h2>LISTA DE TAREAS</h2>
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
