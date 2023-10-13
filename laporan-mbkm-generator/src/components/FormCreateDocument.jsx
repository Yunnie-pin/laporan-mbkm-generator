import React from "react";
import Button from "../components/Elements/Button";
import InputSelectMingguan from "../components/Fragments/InputSelectMingguan";
import InputImageParaf from "../components/Fragments/InputImageParaf";

function FormCreateDocument() {
  const data = [
    {
      "value": "1",
      "text": "1"
    },
    {
      "value": "2",
      "text": "2"
    }
  ];

  return (
    <form>
      <InputSelectMingguan name="minggu" data={data} />
      <InputImageParaf text="Paraf Mahasiswa :" name="parafMahasiswa" />
      <InputImageParaf text="Paraf Pembimbing :" name="parafPembimbing" />
      <InputImageParaf text="Paraf Dosen :" name="parafDosen" />

      <Button text="Buat Dokumen" />
    </form>
  );
}

export default FormCreateDocument;
