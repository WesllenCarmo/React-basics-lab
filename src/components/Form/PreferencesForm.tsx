import React, { useState } from 'react';

type Preferences = {
  subscribed: boolean;
  role: "student" | "instructor";
  theme: "light" | "dark";
};

export default function PreferencesForm() {
  const [prefs, setPrefs ] = useState<Preferences>({
    subscribed: false,
    role: "student",
    theme: "light"
  });

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrefs((prev) => ({ ...prev, subscribed: e.target.checked}))
  }
  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrefs((prev) => ({ ...prev, role: e.target.value as Preferences["role"]}))
  }
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrefs((prev) => ({ ...prev, theme: e.target.value as Preferences["theme"]}))
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Preferences:" , prefs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="checkbox"
          checked={prefs.subscribed}
          onChange={handleCheckBox}
        />
        Subscribe to newsletter
      </label>
      <label>
        <input
          type="radio"
          value="student"
          checked={prefs.role === "student"}
          onChange={handleRadio}
        />
        Student
      </label>
      <label>
        <input
          type="radio"
          value="instructor"
          checked={prefs.role === "instructor"}
          onChange={handleRadio}
        />
        Instructor
      </label>
      <select value={prefs.theme} onChange={handleSelect}>
        <option value="light">Light Theme</option>
        <option value="dark">Dark Theme</option>
      </select>
      <button type="submit">Save</button>
    </form>
  )
}