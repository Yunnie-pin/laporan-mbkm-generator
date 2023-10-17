import React from "react";
import Button from "../Elements/Button";
import InputSelectMingguan from "../Fragments/InputSelectMingguan";
import InputImageParaf from "../Fragments/InputImageParaf";

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

  const handleDocument = (e) => {
    e.preventDefault();
    console.log('ini work coy');
    console.log(e.target.minggu.value);
  }

  return (
    <form onSubmit={handleDocument}>
      <InputSelectMingguan name="minggu" data={data} />
      {/* <InputImageParaf text="Paraf Mahasiswa :" name="parafMahasiswa" />
      <InputImageParaf text="Paraf Pembimbing :" name="parafPembimbing" />
      <InputImageParaf text="Paraf Dosen :" name="parafDosen" /> */}
      <Button text="Buat Dokumen" />
    </form>
  );
}

export default FormCreateDocument;
