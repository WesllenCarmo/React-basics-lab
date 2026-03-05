import React, { useState } from 'react'
export default function NameForm() {
  // useState will only accept a string, so we can specify the type as <strings>
  const [name, setName] = useState<string>("");
  // informs to TypeScript that the event is a change event that comes from a HTML input element; therefore, e.target.value exists and is a string
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  // informs to TypeScript that the event is a form submission event that comes from a HTML form element; therefore, e.preventDefault() exists
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Hello, ${name || "Guest"}!`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  )
}