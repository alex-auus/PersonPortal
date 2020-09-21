import React from "react";

import PersonItem from "../person-item/person-item.components";

import MOCK_DATA from "./MOCK_DATA.json";

const PersonsPage: React.FC = () => {
  return (
    <div>
      Persons page
      {MOCK_DATA.map((md) => (
        <PersonItem {...md}></PersonItem>
      ))}
    </div>
  );
};
export default PersonsPage;
