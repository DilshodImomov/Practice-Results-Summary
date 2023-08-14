import logo from './logo.svg';
import './App.css';
import Result from './Containers/Result/Result';
import Summary from './Containers/Summary/Summary';

function App() {
  return (
    <div className="block">
      <div className="container">
        <Result />
        <Summary />
      </div>
    </div>
  );
}

export default App;
