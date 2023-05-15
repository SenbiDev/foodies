import TextFieldSmall from "./TextFieldSmall";
import TextFieldMedium from "./TextFieldMedium";

function TextField({ size = 'small', inputs, name, label, type, onInputsChange, onKeywordChange, onSearch }) {
    return(
        size === 'small'
        ?
        <TextFieldSmall inputs={inputs} name={name} label={label} type={type} onInputsChange={onInputsChange} />
        :
        <TextFieldMedium onKeywordChange={onKeywordChange} onSearch={onSearch} />
    );
}

export default TextField;