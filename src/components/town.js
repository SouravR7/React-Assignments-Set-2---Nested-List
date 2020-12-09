import React from "react";

export default function Town({ town }) {
  return (
    <>
      {town.towns.map((item, index) => (
        <li id={`town${index + 1}`} key={index}>
          {item.name}
        </li>
      ))}
    </>
  );
}
