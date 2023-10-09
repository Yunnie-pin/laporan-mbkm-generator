import React from "react";
import CustomAlert from "./CustomAlert";
import { getProfile, getActiveKegiatan } from "../utils/api";

class ProfileUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        name: "",
        position: "",
        company: "",
      },
    };
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.token !== this.props.token) {
      const profile = await getProfile(this.props.token);
      const kegiatan = await getActiveKegiatan(this.props.token);

      this.setState(() => {
        return {
          profile: {
            name: profile.name,
            position: kegiatan.nama_kegiatan,
            company: kegiatan.mitra_brand_name,
          },
        };
      });
    }
  }
  render() {
    if (this.props.token == "") {
      return <CustomAlert status="warning" content="Masukkan token" />;
    } else if (this.props.token == "error"){
      return <CustomAlert status="danger" content="Token tidak valid" />;
    } else {
      return (
        <>
          <h5 class="card-title">{this.state.profile.name}</h5>
          <p class="card-text">
            {this.state.profile.position} ({this.state.profile.company})
          </p>
        </>
      );
    }
  }
}

export default ProfileUser;
