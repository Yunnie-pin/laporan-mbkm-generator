import Label from "../../Elements/Label";
import SelectInput from "../../Elements/SelectInput";

const InputSelectBulanan = (props) => {
    const { name, data } = props;
    return (
      <div className="mb-3">
        <Label text="Pilih Bulan" name={name} />
        <SelectInput name={name} data={data} />
      </div>
    );
  };

export default InputSelectBulanan;