import { useState } from "react";
import { FaStar } from "react-icons/fa";

export function UseStateStars({totalStars = 5}) {
  function Star({ selected = false, onSelect }) {
    return <FaStar color={selected ? "blue" : "gray"} onClick={onSelect} />;
  }
  const createArray = (length) => [...Array(length)]
  const [selectedStars, setSelectedStars] = useState(0);
  
  return (
    <section>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </section>
  );
}
