import React from "react";

function CustomAlert({ status, content }) {
  return (
    <div class={`alert alert-${status}`} role="alert">
      {content}
    </div>
  );
}

export default CustomAlert;