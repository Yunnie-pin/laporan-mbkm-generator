

const Button = (props) => {
    const {text} = props;
    return (
      <button type="submit" className="btn btn-dark border-top border-light">
        {text}
      </button>
    )
  }

export default Button;