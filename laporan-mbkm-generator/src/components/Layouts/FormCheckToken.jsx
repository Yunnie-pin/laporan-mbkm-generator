import React from "react";
import Button from "../Elements/Button";
import Textarea from "../Elements/Textarea";
import Label from "../Elements/Label";

class FormCheckToken extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      statusToken: "",
    };
  }

  onTokenChange = (event) => {
    this.setState({ token: event.target.value });
  };

  onTokenSubmit = (event) => {
    event.preventDefault();

    this.props.onToken(this.state.token);
    // console.log(this.props.idKegiatan);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onTokenSubmit}>
          <div className="mb-3">
            <Label text="Token" star/>
            <Textarea
              placeholder="Masukkan token"
              value={this.state.token}
              onChange={this.onTokenChange}
            />
          
          </div>

          <div className="d-flex justify-content-start">
          <Button text="Cek Token" />
          {this.props.idKegiatan && <div className="mx-3"><span class="badge bg-success">Success</span></div>}
          
          </div>
        </form>
      </>
    );
  }
}


export default FormCheckToken;
