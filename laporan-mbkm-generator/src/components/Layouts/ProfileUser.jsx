import React from "react";
import CustomAlert from "../Elements/CustomAlert";
import { getProfile, getActiveKegiatan } from "../../utils/api";

class ProfileUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      kegiatan: null,
    };
  }

  async componentDidMount() {
    if (this.props.token !== "") {
      const profile = await getProfile(this.props.token);
      const kegiatan = await getActiveKegiatan(this.props.token);

      // console.log(profile);
      this.setState(() => {
        return {
          profile: profile,
          kegiatan: kegiatan,
        };
      });
      this.props.onIdKegiatan(kegiatan.id);
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.token !== this.props.token) {
      const profile = await getProfile(this.props.token);
      const kegiatan = await getActiveKegiatan(this.props.token);

      this.setState(() => {
        return {
          profile: profile,
          kegiatan: kegiatan,
        };
      });
      this.props.onIdKegiatan(kegiatan.id);
    }
  }

  render() {
    if (this.props.token == "") {
      return <CustomAlert status="warning" content="Masukkan token valid" />;
    }

    if (this.state.profile == null) {
      return <CustomAlert status="warning" content="Loading..." />;
    }

    if (this.state.profile.error) {
      return <CustomAlert status="danger" content={this.state.profile.error} />;
    } else {
      return (
        <>
          <h5 className="card-title">{this.state.profile.data.name}</h5>
          <p className="card-text">
            {this.state.profile.data.pt_name} |{" "}
            {this.state.profile.data.jenjang_name +
              " " +
              this.state.profile.data.prodi_name}
          </p>
          <hr
            className="p-0 "
            style={{
              height: "2px",
              "border-width": "0",
              color: "gray",
              "background-color": "white",
            }}
          />
          <p className="card-text">
            {this.state.kegiatan ? (
              <>
                {this.state.kegiatan.mitra_brand_name} |{" "}
                {this.state.kegiatan.nama_kegiatan} | {this.state.kegiatan.id}{" "}
              </>
            ) : (
              "Tidak ada kegiatan yang aktif"
            )}

            <p className="card-text">
              Jenis kegiatan : {this.state.kegiatan ? this.state.kegiatan.name_ref_kegiatan : "Tidak ada kegiatan yang aktif"}
            </p>
          </p>
        </>
      );
    }
  }
}

export default ProfileUser;
