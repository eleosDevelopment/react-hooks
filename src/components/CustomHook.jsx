import { useState } from "react";
import { useInput } from "../useInput";

export function CtrlComp() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle("");
    resetColor("#000000");
  };

  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="Sound..." />
      <input {...colorProps} type="color" />
      <button>Add</button>
    </form>
  );
}
