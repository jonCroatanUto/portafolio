import { LensTwoTone } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

import "./styles.css";

function Input({
  type,
  id,
  placeholder,
  value,
  handleChange,
  label,
}: {
  type: string;
  id: string;
  value: string;
  placeholder: string;
  handleChange: (e: any) => void;
  label: string;
}) {
  const [clasString, setClasString] = useState("input-field");
  useEffect(() => {
    console.log(type);
    if (type === "textarea") {
      setClasString("bigger-input-field");
    }
  }, []);

  return (
    <>
      {type === "textarea" ? (
        <div className="field">
          <textarea
            className="bigger-input-field"
            // type={type}
            id={id}
            name={id}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            cols={8}
          />
          <label className="input-label" htmlFor={id}>
            {label}
          </label>
        </div>
      ) : (
        <div className="field">
          <input
            className="input-field"
            type={type}
            id={id}
            name={id}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
          />
          <label className="input-label" htmlFor={id}>
            {label}
          </label>
        </div>
      )}
    </>
  );
}

export default Input;
