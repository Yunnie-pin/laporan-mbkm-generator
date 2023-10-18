const SelectInput = (props) => {
    const { name, data } = props;
    return (
      <>
        <select className="form-select" name={name}>
          {data.map((item) => (
            <option value={item.monthYear}>{item.monthYear}</option>
          ))}
        </select>
      </>
    );
  };

  
export default SelectInput;