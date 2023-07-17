import React, { useState } from "react";
import Login from "./Login/Login";
import Register from "./Login/Register";
const ParentComponent = () => {
  const [activeForm, setActiveForm] = useState("login");

  const handleFormSwitch = (form) => {
    setActiveForm(form);
  };

  return (
    <div>
      {activeForm === "login" ? (
        <Login onFormSwitch={handleFormSwitch} />
      ) : (
        <Register onFormSwitch={handleFormSwitch} />
      )}
    </div>
  );
};

export default ParentComponent;
