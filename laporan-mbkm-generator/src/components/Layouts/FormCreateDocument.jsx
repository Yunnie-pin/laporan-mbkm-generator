import React from "react";
import Button from "../Elements/Button";
import InputSelectMingguan from "../Fragments/InputSelectMingguan";
import InputSelectBulanan from "../Fragments/InputSelectBulanan";
import InputImageParaf from "../Fragments/InputImageParaf";

function FormCreateDocument(props) {
  const { data } = props;

  const test = [
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
    // console.log(e.target.bulanan.value);
    window.location.href = `/documentbulanan?type=bulanan&filter=${e.target.bulanan.value}`;
  }

  if(data == null) {
    return <p>Menunggu Token...</p>  
  }

  return (
    <form onSubmit={handleDocument}>
      {/* <InputSelectMingguan name="mingguan" data={data} /> */}
      <InputSelectBulanan name="bulanan" data={data} />
      {/* <InputSelectMingguan name="bulanan" data={data} /> */}
      {/* <InputImageParaf text="Paraf Mahasiswa :" name="parafMahasiswa" />
      <InputImageParaf text="Paraf Pembimbing :" name="parafPembimbing" />
      <InputImageParaf text="Paraf Dosen :" name="parafDosen" /> */}
      <Button text="Buat Dokumen" />
    </form>
  );
}

export default FormCreateDocument;
