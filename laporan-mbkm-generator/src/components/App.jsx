import React from "react";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="bg-dark min-vh-100 text-white">
      <Navbar />
      <div className="container">
        <div class="d-flex justify-content-center">
          <div class="card bg-dark border border-light">
            <div class="card-header">Isi</div>
            <div class="card-body border border-light">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-dark border border-light">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card bg-dark border border-light">
            <div class="card-header">Isi</div>
            <div class="card-body border border-light">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-dark border border-light">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
