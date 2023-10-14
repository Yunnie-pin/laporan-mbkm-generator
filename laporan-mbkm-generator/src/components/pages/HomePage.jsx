import React from "react";
import CustomCard from "../Elements/CustomCard";
import FormCheckToken from "../Layouts/FormCheckToken";
import FormCreateDocument from "../Layouts/FormCreateDocument";
import ProfileUser from "../Layouts/ProfileUser";
import HintGetToken from "../Layouts/HintGetToken";
import AccordionReport from "../Layouts/AccordionReport";
import { getReport } from "../../utils/api";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      report: null,
      idkegiatan: null,
    };
    this.onTokenHandler = this.onTokenHandler.bind(this);
    this.onIdKegiatanHandler = this.onIdKegiatanHandler.bind(this);
  }

  onTokenHandler(token) {
    this.setState({ token: token });
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

export default HomePage;
