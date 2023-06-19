import React, { useMemo } from 'react';

export default function EvenNumbersList() {
  let nums = [];
  const evenNumbers = useMemo(() => {
    for (let i = 1; i <= 100; i++) {
      if (i % 2 == 0) {
        nums.push(i);
      }
    }

    return nums;
  });
  return (
    <>
      <h1>Lista liczb parzystych</h1>
      <ul>
        {' '}
        {nums.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </>
  );
}
