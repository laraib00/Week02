import './App.css';
import Counter from './Components/Counter';
import Parent from './Components/Parent';
import Proptypecheck from './Components/Proptypecheck';
import Defaultprops from './Components/Defaultprops';
import Usestate from './Components/Usestate';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Counter </h1>
    <Counter/>
    <Parent/>
      <Proptypecheck name='Laraib' age={21} />
    <Defaultprops/>
    <Usestate/>
      </header>
    </div>
  );
}
export default App;
