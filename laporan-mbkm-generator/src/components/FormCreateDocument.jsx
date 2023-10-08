import React from "react";

function FormCreateDocument() {
  return (
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

      <button type="submit" class="btn btn-dark border border-light">
        Buat Dokumen
      </button>
    </form>
  );
}

export default FormCreateDocument;