import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-dark min-vh-100 text-white">
      <Navbar />
      <div className="container">
        <div class="row">
          <div className="col-lg-6 p-3">
            <div className="pb-2">
              {" "}
              <div class="card bg-dark border border-light">
                <div class="card-header">Validasi Profile</div>
                <div class="card-body border-top border-light">
                  <form>
                    <div class="mb-3">
                      <label class="form-label">
                        Token
                        <span className="text-danger">*</span>
                      </label>
                      <textarea class="form-control" placeholder="Token" />
                      <div class="form-text">
                        Cara mendapatkan token{" "}
                        <a href="#" className="text-decoration-none">
                          disini
                        </a>
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="btn btn-dark border-top border-light"
                    >
                      Cek
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div>
              <div class="card bg-dark border border-light">
                <div class="card-header">Dokumen</div>
                <div class="card-body border-top border-light">
                  <form>
                    <div class="mb-3">
                      <label class="form-label">Minggu</label>
                      <select class="form-select">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="formFile" class="form-label">
                        Paraf Mahasiswa :
                      </label>
                      <input class="form-control" type="file" />
                    </div>
                    <div class="mb-3">
                      <label for="formFile" class="form-label">
                        Paraf Pembimbing :
                      </label>
                      <input class="form-control" type="file" />
                    </div>
                    <div class="mb-3">
                      <label for="formFile" class="form-label">
                        Paraf Dosen :
                      </label>
                      <input class="form-control" type="file" />
                    </div>

                    <button
                      type="submit"
                      class="btn btn-dark border border-light"
                    >
                      Buat Dokumen
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 p-3">
            <div className="pb-2">
              {" "}
              <div class="card bg-dark border border-light">
                <div class="card-header">Profile</div>
                <div class="card-body border-top border-light">
                  <h5 class="card-title">Arifin Yunianta</h5>
                  <p class="card-text">Posisi (Tempat Magang)</p>
                </div>
              </div>
            </div>
            <div className="pb-2">
              {" "}
              <div class="card bg-dark border border-light">
                <div class="card-header">Petunjuk Token</div>
                <div class="card-body border-top border-light">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-dark border border-light">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
