import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-400 p-1 m-3 rounded-md">{name}</button>
    </div>
  );
};

export default Button;
