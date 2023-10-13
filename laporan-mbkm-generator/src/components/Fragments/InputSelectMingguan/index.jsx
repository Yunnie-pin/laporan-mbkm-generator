import Label from "../../Elements/Label";
import SelectInput from "../../Elements/SelectInput";

const InputSelectMingguan = (props) => {
    const { name, data } = props;
    return (
      <div className="mb-3">
        <Label text="Minggu ke-" name={name} />
        <SelectInput name={name} data={data} />
      </div>
    );
  };

export default InputSelectMingguan;