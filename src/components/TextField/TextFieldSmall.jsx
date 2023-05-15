import { Stack, Typography, TextField } from "@mui/material";
import { textFieldSmallComponentStyles } from '../../styles/componentStyles';

function TextFieldSmall({ inputs, name, label, type = 'text', onInputsChange }) {
    return (
        <Stack useFlexGap gap={'17px'}>
        <Typography sx={textFieldSmallComponentStyles.label}>
            {label}
        </Typography>

        <TextField
            name={name}
            type={type}
            value={inputs[name]}
            sx={textFieldSmallComponentStyles.textField}
            onChange={onInputsChange}
        />
    </Stack>
    );
}

export default TextFieldSmall;