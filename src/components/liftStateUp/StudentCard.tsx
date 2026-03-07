import React, { useState } from 'react';

type StudentIdInputProps = {
  value: string;
  onChange: (next: string) => void;
};

function StudentIdInput({ value, onChange }: StudentIdInputProps) {
  return (
    <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Insert your student ID"
    />
  );
};

export default function StudentCard() {
  const [studentId, setStudentId] = useState<string>("");

  return (
    <div>
      <p>Type your student ID to customize your card</p>
      <StudentIdInput value={studentId} onChange={setStudentId} />
      <p><strong>Student Card</strong></p>
      <p>Student ID: {studentId || "No ID provided"}</p>
    </div>
  );
};