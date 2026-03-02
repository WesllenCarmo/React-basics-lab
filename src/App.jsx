import './App.css'
import LabelButton from './components/LabelButton'

function App() {
  const handleClick = () => {
    alert("Button clicked from App!");
  }
  return (
    <>
      <LabelButton onClick={handleClick} label="Click Me" />
      <p>The component uses onClick function and receive the prop label's value.</p>
    </>
  )
}

export default App