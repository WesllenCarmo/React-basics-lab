import { useState } from 'react';

export default function ToggleMessage() {
  const [visible, setVisible] = useState<boolean>(false);

  const toggle = () => { setVisible((prev) => !prev)};

  return (
    <div>
      <button onClick={toggle}>
        {visible ? "Hide" : "Show"} Message
      </button>
      {visible && <p>This is a toggleable message!</p>}
    </div>
  )
};