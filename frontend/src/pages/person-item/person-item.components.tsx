import React from "react";

interface Person {
  id: number;
}

const PersonItem: React.FC<Person> = ({ id }) => {
  return <div>{id}</div>;
};

export default PersonItem;
