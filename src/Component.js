import React, { useState, useEffect } from "react";

function Component({ title, description }) {
  const [rating, setRating] = useState(1);

  useEffect(() => {
    if (rating > 5) {
      setRating(1);
    }
  }, [rating]);

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div>{"⭐".repeat(rating)}</div>
      <button onClick={() => setRating(rating + 1)}>Califica</button>
    </div>
  );
}

export default Component;
