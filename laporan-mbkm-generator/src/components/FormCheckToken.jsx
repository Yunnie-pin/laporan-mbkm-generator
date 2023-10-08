import React from "react";

function FormCheckToken(){
    return (
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

          <button type="submit" class="btn btn-dark border-top border-light">
            Cek
          </button>
        </form>
    )
}

export default FormCheckToken;