import React, { useState } from 'react';

type User = {
  name: string;
  age: number;
};

export default function UserProfile () {
  const [user, setUser] = useState<User>({name: "", age: 0});

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, name: e.target.value }));
  };

  const updateAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, age: Number(e.target.value) }));
  };

  return (
    <div>
      <input
      type="text" 
      value={user.name}
      onChange={updateName}
      placeholder="Enter your name"
      />
      <input
      type="number"
      value={user.age}
      onChange={updateAge}
      placeholder="Enter your age"
      />
      <p>{user.name ? `${user.name} is ${user.age} years old.` : "No user yet."}</p>
    </div>
  )
};