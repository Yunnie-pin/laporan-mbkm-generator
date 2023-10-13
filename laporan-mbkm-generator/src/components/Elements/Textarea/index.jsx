const Textarea = (props) => {
    const { placeholder, value, onChange } = props;
    return (
      <>
        <textarea
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </>
    );
  };

export default Textarea;