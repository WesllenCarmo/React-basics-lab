import React, { useState } from 'react';

type ChildProps = {
  value: string;
  onChange: (next: string) => void;
};

function ChildInput({ value, onChange }: ChildProps) {
  return (
    <input 
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Type something"
    />
  );
};

export default function Parent() {
  const [text, setText] = useState<string>("");

  return (
    <div>
      <ChildInput value={text} onChange={setText} />
      <p>Mirror: {text}</p>
    </div>
  );
};