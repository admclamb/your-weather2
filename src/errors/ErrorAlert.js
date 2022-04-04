import React from "react";

function ErrorAlert({ error }) {
  return (
    (error && (
      <div className="alert alert-danger mt-2 mb-2">Error: {error.message}</div>
    )) ||
    null
  );
}

export default ErrorAlert;
