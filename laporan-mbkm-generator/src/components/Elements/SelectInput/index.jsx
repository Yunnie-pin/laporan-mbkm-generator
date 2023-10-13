const SelectInput = (props) => {
    const { name, data } = props;
    return (
      <>
        <select className="form-select" name={name}>
          {data.map((item) => (
            <option value={item.value}>{item.text}</option>
          ))}
        </select>
      </>
    );
  };

  
export default SelectInput;