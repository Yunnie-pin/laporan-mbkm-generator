
const AccordionReport = (props) => {
  const { data } = props;
  const dataLength = data.data.length;

    if (data == null) {
      return <CustomAlert status="warning" content="Loading..." />;
    }

  return (
    <>
      <h5 className="card-title p-2">Laporan Kegiatan</h5>
      <div className="accordion" id="accordions">
        {data.data.map((item, index) => {
          return <AccordionItem item={item} index={index} dataLength={dataLength} key={item.id}/>;
        })}
      </div>
    </>
  );
};

const AccordionItem = (props) => {
  const { item, index, dataLength } = props;
  
  const learnedWeekly = item.learned_weekly; // Mengakses learned_weekly dari objek pertama
    // Mengganti karakter "\n" dengan elemen <br> menggunakan dangerouslySetInnerHTML
    const learnedWeeklyWithLineBreaks = { __html: learnedWeekly.replace(/\n/g, "<br>") };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${index}`}
          aria-expanded="true"
          aria-controls={`collapse${index}`}
        >
          Minggu Ke-{(dataLength) - (index)}
        </button>
      </h2>
      <div
        id={`collapse${index}`}
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordions"
      >
        <div className="accordion-body">
          <strong>Laporan Mingguan</strong> 
          <div  dangerouslySetInnerHTML={learnedWeeklyWithLineBreaks}></div>
        </div>
      </div>
    </div>
  );
};

export default AccordionReport;
