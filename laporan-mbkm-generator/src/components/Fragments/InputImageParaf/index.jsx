import Label from "../../Elements/Label";
import Input from "../../Elements/Input";

const InputImageParaf = (props) => {
    const { text, name } = props;
    return (
      <div className="mb-3">
        <Label text={text} name={name} />
        <Input name={name} type="file" />
      </div>
    );
  };

export default InputImageParaf;