const Input = (props) => {
    const { name, type } = props;
    return (
      <>
        <input
          className="form-control"
          name={name}
          type={type}
        />
      </>
    );
  }

export default Input;