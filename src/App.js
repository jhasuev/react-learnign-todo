import Todos from './components/Todos/Todos';
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <div className="app__title">TODOS</div>
      <div className="app__todos">
        <Todos />
      </div>
    </div>
  );
}

export default App;
