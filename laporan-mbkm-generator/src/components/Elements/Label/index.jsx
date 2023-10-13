const Label = (props) => {
  const { text, name, star = false } = props;
  return (
    <label className="form-label" htmlFor={name}>
      {text}
      {star && <span className="text-danger">*</span>}
    </label>
  );
};

export default Label;
