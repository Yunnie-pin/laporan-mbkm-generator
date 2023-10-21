import { Link } from "react-router-dom";

const Button = (props) => {
  const { text, type, to, onClick = () => {}, modal, modal_target } = props;
  return type === "link" ? (
    <Link to={to} className="btn btn-dark border-top border-light">
      {text}
    </Link>
  ) : (
    <button
      data-bs-toggle={modal ? "modal" : ""}
      data-bs-target={modal_target ? modal_target : ""}
      type="submit"
      className="btn btn-dark border-top border-light"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
