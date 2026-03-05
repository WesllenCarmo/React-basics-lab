import React, { useState } from 'react';

type RegisterData = {
  email: string;
  password: string;
};

type Errors = Partial<Record<keyof RegisterData, string>>;

export default function RegisterForm() {
  const [data, setData] = useState<RegisterData>({ email: "", password: ""});
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const validate = (): Errors => {
    const errs: Errors = {};
    if (!data.email.includes("@")) errs.email = "Invalid email";
    if (data.password.length < 6) errs.password = "At least 6 characters required";
    return errs;

  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      console.log("Registered:", data);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <p style={{ color: "red"}}>{errors.email}</p>}
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="Password"
      />
      {errors.password && <p style={{ color: "red"}}>{errors.password}</p>}
      <button type="submit">Register</button>
    </form>
  )
}