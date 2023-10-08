import React from "react";

function CustomCard({title, content}) {
  return (
    <div class="card bg-dark border border-light">
      <div class="card-header">{title}</div>
      <div class="card-body border-top border-light">
        {content}
      </div>
    </div>
  );
}

export default CustomCard;
