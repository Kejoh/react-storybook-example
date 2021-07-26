import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header content="The Header was created with help of Storybook"></Header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

