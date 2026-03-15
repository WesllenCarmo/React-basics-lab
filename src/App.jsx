import './App.css'
import LabelButton from './components/misc/LabelButton'
import NameList from './components/misc/NameList';
import Popup from './components/misc/Popup';
import Status from './components/misc/Status';
import NameForm from './components//Form/NameForm';
import LoginForm from './components/Form/LoginForm';
import PreferencesForm from './components/Form/PreferencesForm';
import RegisterForm from './components/Form/RegisterForm';
import Counter from './components/useStateHook/Counter';
import NameFormState from './components/useStateHook/NameFormState';
import ToggleMessage from './components/useStateHook/ToggleMessage';
import UserProfile from './components/useStateHook/UserProfile';
import Parent from './components/liftStateUp/Parent';
import StudentCard from './components/liftStateUp/StudentCard';
import TemperatureConverter from './components/liftStateUp/TemperatureConverter';
import Catalog from './components/liftStateUp/Catalog';
import StatePropCounter from './components/useStateHook/StatePropCounter';
import UserForm from './components/useStateHook/UserForm';
import CounterReducer from './components/useReducer/CounterReducer';

function App() {
  const handleClick = () => {
    alert("Button clicked from App!");
  }
  const userExist = 'Mario';
  const messages = 10;

  const useStateHookSyntax = 'const [state, setState<type>(initialValue)';
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
      <h3>Simple Forms</h3>
      <NameForm />
      <h3>Multiple inputs form</h3>
      <LoginForm />
      <h3>Preferences Form</h3>
      <PreferencesForm />
      <h3>Register Form</h3>
      <RegisterForm />
      <h2>Using useState() Hook (with TypeScript)</h2>
      <p>Syntax: {useStateHookSyntax}</p>
      <h3>Counter</h3>
      <Counter />
      <h3>Name Form 2</h3>
      <NameFormState />
      <h3>Boolean State (toggling UI)</h3>
      <ToggleMessage />
      <h3>Complex States</h3>
      <UserProfile />
      <h2>Lifting States Up</h2>
      <h3>Mirror</h3>
      <Parent />
      <h3>Student Card</h3>
      <StudentCard />
      <h3>Temperature converter</h3>
      <TemperatureConverter />
      <h3>Catalog</h3>
      <Catalog />
      <h3>Counter with State & Props in TypeScript</h3>
      <StatePropCounter />
      <h3>UserForm</h3>
      <UserForm />
      <h3>Counter Reduce</h3>
      <CounterReducer />
    </>
  )
}

export default App