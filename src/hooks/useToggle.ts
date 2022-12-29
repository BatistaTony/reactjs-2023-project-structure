import { useState } from "react";

export const useToggle = (defaultValue = false) => {
  const [active, setActive] = useState(defaultValue);

  const toggle = () => {
    setActive(!active);
  };

  return { active, toggle };
};
