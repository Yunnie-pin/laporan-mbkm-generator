import { Link } from "react-router-dom";

const Button = (props) => {
  const { text, type, to, onClick = () => {} } = props;
  return type === "link" ? (
    <Link to={to} className="btn btn-dark border-top border-light">
      {text}
    </Link>
  ) : (
    <button
      type="submit"
      className="btn btn-dark border-top border-light"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
