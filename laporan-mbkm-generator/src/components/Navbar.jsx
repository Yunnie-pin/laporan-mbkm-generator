import React from "react";

function Navbar() {
  let item = [
    {
      name: "Home",
      link: "#",
      status: "active",
    },
    {
      name: "Disclaimer",
      link: "#",
      status: "",
    },
  ];

  return (
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
      <div class="container">
        <a class="navbar-brand mb-0 h1" href="#">
          MBKM toolkits
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          {item.map((item) => (
            <li class="nav-item">
              <a
                class={`nav-link ${item.status}`}
                aria-current="page"
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
