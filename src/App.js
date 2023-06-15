import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        Hello world

        <button onClick={() => navigate("/secondPage")}>Second Page</button>

      </header>
    </div>
  );
}

export default App;
