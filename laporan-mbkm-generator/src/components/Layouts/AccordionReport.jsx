
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
          return <AccordionItem item={item} dataLength={dataLength} key={index}/>;
        })}
      </div>
    </>
  );
};

const AccordionItem = (props) => {
  const { item, key, dataLength } = props;
  
  const learnedWeekly = item.learned_weekly; // Mengakses learned_weekly dari objek pertama
    // Mengganti karakter "\n" dengan elemen <br> menggunakan dangerouslySetInnerHTML
    const learnedWeeklyWithLineBreaks = { __html: learnedWeekly.replace(/\n/g, "<br>") };

  return (
    <div className="accordion-item" key={key}>
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${key}`}
          aria-expanded="true"
          aria-controls={`collapse${key}`}
        >
          Minggu Ke-{(dataLength) - (key)}
        </button>
      </h2>
      <div
        id={`collapse${key}`}
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
