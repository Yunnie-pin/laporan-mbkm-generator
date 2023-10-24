import React from "react";
import CustomCard from "../Elements/CustomCard";
import FormCheckToken from "../Layouts/FormCheckToken";
import FormCreateDocument from "../Layouts/FormCreateDocument";
import ProfileUser from "../Layouts/ProfileUser";
import HintGetToken from "../Layouts/HintGetToken";
import { withCookies } from "react-cookie";
import { checkToken, getReport } from "../../utils/api";
import Button from "../Elements/Button";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      login: null,
      token: cookies.get("token") || "",
      report: null,
      idkegiatan: null,
    };
    this.onTokenHandler = this.onTokenHandler.bind(this);
    this.onIdKegiatanHandler = this.onIdKegiatanHandler.bind(this);
  }

  async onTokenHandler(token) {
    const { cookies } = this.props;
    const login = await checkToken(token);

    if (login.error) {
      cookies.remove("token");
      this.setState({
        token: "",
        idkegiatan: null,
        report: null,
      });
      return;
    }

    this.setState({
      login: login,
      token: token,
    });

    cookies.set("token", token, { path: "/" });
  }

  async componentDidMount() {
    if (this.state.token !== "") {
      const { cookies } = this.props;
      const login = await checkToken(this.state.token);

      if (login.error) {
        cookies.remove("token");
        this.setState({
          login: login,
          token: null,
          report: null,
        });
        return;
      }

      const kegiatan = await getActiveKegiatan(this.state.token);
      this.setState({
        login: login,
        idkegiatan: kegiatan.id,
      });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.token !== this.state.token) {
      if (this.state.token !== "") {
        const login = await checkToken(this.state.token);

        if (login.error) {
          this.setState({
            login: login,
            token: null,
            report: null,
          });
          return;
        }

        const kegiatan = await getActiveKegiatan(this.state.token);
        const report = await getReport(kegiatan.id, this.state.token);
        this.setState({
          idkegiatan: kegiatan.id,
          report: report,
        });
      }
    }
  }

  async onIdKegiatanHandler(idkegiatan) {
    const report = await getReport(idkegiatan, this.state.token);

    this.setState({
      idkegiatan: idkegiatan,
      report: report,
    });
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-lg-6 p-3">
            <div className="pb-2">
              <CustomCard
                title="Profile"
                content={
                  <ProfileUser
                    token={this.state.token}
                    onIdKegiatan={this.onIdKegiatanHandler}
                  />
                }
              />
            </div>
            <div className="pb-2">
              {this.state.idkegiatan ? (
                // <AccordionReport data={this.state.report} />
                <ReportSection data={this.state.report} />
              ) : (
                <CustomCard title="Hint" content={<HintGetToken />} />
              )}
            </div>
          </div>

          <div className="col-lg-6 p-3">
            <div className="pb-2">
              <CustomCard
                title="Cek Token"
                content={
                  <FormCheckToken
                    onToken={this.onTokenHandler}
                    idkegiatan={this.state.idkegiatan}
                  />
                }
              />
            </div>
            <div>
              <CustomCard
                title="Dokumen"
                content={<FormCreateDocument data={this.state.report} />}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const ReportSection = (props) => {
  const { data } = props;
  return (
    <>
      <h5 className="card-title p-2">Laporan Kegiatan</h5>
      <div className="row">
        {data.map((item, index) => {
          return <ReportBulanan data={item} />;
        })}
      </div>
    </>
  );
};

const ReportBulanan = (props) => {
  const { data } = props;
  return (
    <div className="px-3 pt-3">
      <h6 className="text-center rounded bg-white text-black">
        {data.monthYear}
      </h6>
      <ReportMingguan data={data.data} />
    </div>
  );
};

const ReportMingguan = (props) => {
  const { data } = props;

  if (data == null) {
    return <CustomAlert status="warning" content="Loading..." />;
  }

  return (
    <>
      <div className="accordion" id="accordions">
        {data.map((item, index) => {
          return <AccordionItem item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

const AccordionItem = (props) => {
  const { item } = props;
  // console.log(item);

  const learnedWeekly = item.learned_weekly; // Mengakses learned_weekly dari objek pertama
  // Mengganti karakter "\n" dengan elemen <br> menggunakan dangerouslySetInnerHTML
  const learnedWeeklyWithLineBreaks = {
    __html: learnedWeekly.replace(/\n/g, "<br>"),
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${item.counter}`}
          aria-expanded="true"
          aria-controls={`collapse${item.counter}`}
        >
          Minggu Ke-{item.counter}
        </button>
      </h2>
      <div
        id={`collapse${item.counter}`}
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordions"
      >
        <div className="accordion-body">
          <strong>Laporan Mingguan</strong>
          <div>
            (
            {new Date(item.start_date).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            -{" "}
            {new Date(item.end_date).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            )
          </div>
          {item.learned_weekly ? (
            <div
              className="card my-2"
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
              <div className="card-body">
                <div
                  dangerouslySetInnerHTML={learnedWeeklyWithLineBreaks}
                  className="text-dark"
                ></div>
              </div>
            </div>
          ) : (
            <div className="card my-2">
              <div className="card-body">
                <div className="text-dark">Belum ada laporan mingguan</div>
              </div>
            </div>
          )}
          <strong>Laporan Harian</strong>
          {item.daily_report.length > 0 ? (
            <div className="d-flex justify-content-center my-2">
              {item.daily_report.map((item, index) => {
                return <ReportHarian item={item} key={item.id} />;
              })}
            </div>
          ) : (
            <div className="card my-2">
              <div className="card-body">
                <div className="text-dark">Belum mengisi laporan harian</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ReportHarian = (props) => {
  const { item, key } = props;

  const learnedDaily = item.report; // Mengakses learned_daily dari objek pertama

  // Mengganti karakter "\n" dengan elemen <br> menggunakan dangerouslySetInnerHTML
  const learnedDailyWithLineBreaks = {
    __html: learnedDaily.replace(/\n/g, "<br>"),
  };

  return (
    <div className="text-dark">
      <div className="p-2">
        <Button
          text={item.string_day}
          modal={true}
          modal_target={`#reportHarian${item.id}`}
        ></Button>
      </div>

      <div
        className="modal fade"
        id={`reportHarian${item.id}`}
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {new Date(item.report_date).toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                dangerouslySetInnerHTML={learnedDailyWithLineBreaks}
                className="text-dark"
              ></div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withCookies(HomePage);
