import React from "react";
import { getProfile } from "../utils/api";

class FormCheckToken extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      token: "",
    }
  }

  onTokenChange = (event) => {
    this.setState({token: event.target.value});
    this.setState()
  }

  onTokenSubmit = async (event) => {
    event.preventDefault();
    
    this.props.onToken(this.state.token);
  }

  render(){
    return (
      <>
      <form onSubmit={this.onTokenSubmit}>
          <div class="mb-3">
            <label class="form-label">
              Token
              <span className="text-danger">*</span>
            </label>
            <textarea 
            class="form-control" 
            placeholder="Token" 
            value={this.state.token}
            onChange={this.onTokenChange}
            />
            <div class="form-text">
              Cara mendapatkan token{" "}
              <a href="#" className="text-decoration-none">
                disini
              </a>
            </div>
          </div>

          <button type="submit" class="btn btn-dark border-top border-light">
            Cek
          </button>
        </form>
      </>
    )
  }
}

export default FormCheckToken;