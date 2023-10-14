import { Link } from "react-router-dom";

const Button = (props) => {
    const {text, type, to } = props;
    return (
      type === "link" ? (
        <Link to={to} className="btn btn-dark border-top border-light">
          {text}
        </Link>
      ) : (
        <button type="submit" className="btn btn-dark border-top border-light">
          {text}
        </button>
      )
    );
  }


export default Button;