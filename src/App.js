import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className='body'>
      <img src="bg.jpg" alt="альтернативный текст" />
      <div className='app'>
        <TodoWrapper />
      </div>
    </div>
    
  );
}

export default App;
