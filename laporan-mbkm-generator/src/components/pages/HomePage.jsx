import React from "react";
import CustomCard from "../Elements/CustomCard";
import FormCheckToken from "../Layouts/FormCheckToken";
import FormCreateDocument from "../Layouts/FormCreateDocument";
import ProfileUser from "../Layouts/ProfileUser";
import HintGetToken from "../Layouts/HintGetToken";
import AccordionReport from "../Layouts/AccordionReport";
import { withCookies } from "react-cookie";
import { checkToken, getReport } from "../../utils/api";

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
                <AccordionReport data={this.state.report} />
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
              <CustomCard title="Dokumen" content={<FormCreateDocument />} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withCookies(HomePage);
