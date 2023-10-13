import React from "react";
import Button from "./Elements/Button";
import Textarea from "./Elements/Textarea";
import Label from "./Elements/Label";

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
    this.setState();
  };

  onTokenSubmit = async (event) => {
    event.preventDefault();

    this.props.onToken(this.state.token);
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
            <div className="form-text">
              Cara mendapatkan token{" "}
              <a href="#" className="text-decoration-none">
                disini
              </a>
            </div>
          </div>

          <Button text="Cek Token" />
        </form>
      </>
    );
  }
}


export default FormCheckToken;
