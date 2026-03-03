import './App.css'
import LabelButton from './components/LabelButton'
import NameList from './components/NameList';
import Popup from './components/Popup';
import Status from './components/Status';

function App() {
  const handleClick = () => {
    alert("Button clicked from App!");
  }
  const userExist = 'Mario';
  const messages = 10;
  return (
    <>
      <LabelButton onClick={handleClick} label="Click Me" />
      <p>The component uses onClick function and receive the prop label's value.</p>
      <h2>Conditions</h2>
      <h3>Ternary</h3>
      {userExist ? <p>Exist!</p> : <p>Doesn't exist!</p>}
      <h3>Local AND (&&) for Simple Conditions</h3>
      {messages && <p>you have messages!</p>}
      <h3>Avoiding Rendering with Null</h3>
      <Popup show='yes' />
      <h3>Multiple Conditions or Content Blocks</h3>
      <Status status='success' />
      <h3>Using .map to get values from an object list</h3>
      <NameList />
    </>
  )
}

export default App