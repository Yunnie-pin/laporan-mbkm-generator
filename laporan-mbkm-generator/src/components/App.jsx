import React from "react";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import CustomCard from "./../components/Elements/CustomCard";
import CustomAlert from "../components/Elements/CustomAlert/";
import FormCheckToken from "./Layouts/FormCheckToken";
import FormCreateDocument from "./Layouts/FormCreateDocument";
import ProfileUser from "./Layouts/ProfileUser";
import HintGetToken from "./Layouts/HintGetToken";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
    };
    this.onTokenHandler = this.onTokenHandler.bind(this);
  }

  onTokenHandler(token) {
    this.setState({ token: token });
  }

  render() {
    return (
      <div className="bg-dark min-vh-100 text-white">
        <Navbar />
        <div className="container">
          <CustomAlert
            status="warning"
            content={`Environment : ${import.meta.env.VITE_ENV}`}
          />
          <CustomAlert
            status="success"
            content="Website ini tidak menyimpan token yang anda masukkan, token yang anda
            masukkan hanya digunakan untuk membaca data dari website Kampus
            Merdeka"
          />
          <div className="row">
            <div className="col-lg-6 p-3">
              <div className="pb-2">
                <CustomCard
                  title="Cek Token"
                  content={<FormCheckToken onToken={this.onTokenHandler} />}
                />
              </div>
              <div>
                <CustomCard title="Dokumen" content={<FormCreateDocument />} />
              </div>
            </div>

            <div className="col-lg-6 p-3">
              <div className="pb-2">
                <CustomCard
                  title="Profile"
                  content={<ProfileUser token={this.state.token} />}
                />
              </div>
              <div className="pb-2">
                <CustomCard
                  title="Petunjuk Mendapatkan Token"
                  content={<HintGetToken />}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
