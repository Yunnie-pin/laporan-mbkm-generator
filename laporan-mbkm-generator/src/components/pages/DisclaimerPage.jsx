import React from "react";
import CustomCard from "../Elements/CustomCard";
import CustomAlert from "../Elements/CustomAlert";
import GithubContent from "../Layouts/GithubContent";
import RepositoryContent from "../Layouts/RepositoryContent";
import { getGithubProfile, getRepository } from "../../utils/api";

class DisclaimerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      github: null,
      repository: null,
    };
  }

  async componentDidMount() {
    const github = await getGithubProfile();
    const repository = await getRepository();
    this.setState({
      github: github,
      repository: repository,
    });
  }

  render() {
    return (
      <div>
        <h1>Disclaimer</h1>
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
          <div className="col-lg-6 pb-3">
            <CustomCard
              title="Github"
              content={<GithubContent data={this.state.github} />}
              style={{
                "min-height": "250px",
              }}
            ></CustomCard>
          </div>
          <div className="col-lg-6">
            <CustomCard
              title="Repository"
              content={<RepositoryContent data={this.state.repository} />}
              style={{
                "min-height": "250px",
              }}
            ></CustomCard>
          </div>
        </div>
      </div>
    );
  }
}

export default DisclaimerPage;
