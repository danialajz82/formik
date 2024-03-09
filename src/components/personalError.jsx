import React from "react";

const personalError = ({ children }) => {
  return <small className="d-block text-center text-danger">{children}</small>;
};

export default personalError;
