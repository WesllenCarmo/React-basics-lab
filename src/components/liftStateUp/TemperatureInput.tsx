import React from 'react';

type Scale = "c" | "f";
const scaleLabels: Record<Scale, string> = { c: "Celsius", f: "Fahrenheit" };

type TemperatureInputProps = {
  scale: Scale;
  value: string; 
  onChange: (next: string) => void;
};

export function TemperatureInput({ scale, value, onChange }: TemperatureInputProps) {
  return (
    <div>
      <label>
        {scaleLabels[scale]}:
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`Enter ${scaleLabels[scale]}`}
        />
      </label>
    </div>
  );
};