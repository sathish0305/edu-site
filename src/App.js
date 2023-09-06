import './App.css';
import NavigationBar from './components/NavigationBar';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
