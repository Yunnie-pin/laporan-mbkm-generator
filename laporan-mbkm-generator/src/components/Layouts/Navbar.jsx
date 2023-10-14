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
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container">
        <a className="navbar-brand mb-0 h1" href="#">
          MBKM toolkits
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          {item.map((item, index) => (
            <li className="nav-item" key={index}>
              <a
                className={`nav-link ${item.status}`}
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
