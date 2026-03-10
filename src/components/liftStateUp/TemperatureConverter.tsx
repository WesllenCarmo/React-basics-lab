import { useState } from 'react';
import { TemperatureInput } from './TemperatureInput';
import { toC, toF, tryParseNumber } from './temperature-utils'

type Scale = "c" | "f";

export default function TemperatureConverter() {
  const [scale, setScale] = useState<Scale>("c");
  const [value, setValue] = useState<string>("");

  const handleCelsiusChange = (next: string) => {
    setScale("c");
    setValue(next);
  };
  const handleFahrenheitChange = (next: string) => {
    setScale("f");
    setValue(next);
  };

  const celsiusText =
    scale === "c"
      ? value
      : (() => {
        const n = tryParseNumber(value);
        return n === null ? "" : String(Math.round(toC(n)));
      })();
  const fahrenheitText =
      scale === "f"
        ? value 
        : (() => {
            const n = tryParseNumber(value);
            return n === null ? "" : String(Math.round(toF(n)));
        })();

  const cNum = tryParseNumber(celsiusText);
  const verdict =
        cNum === null ? "" : cNum >= 100 ? "Water would boil." : "Water would not boil.";

  return (
    <div>
      <h4>Temperature Converter</h4>
        <TemperatureInput scale="c" value={celsiusText} onChange={handleCelsiusChange} />
        <TemperatureInput scale="f" value={fahrenheitText} onChange={handleFahrenheitChange} />
        <p>{verdict}</p>
    </div>
  );
};