import Stack from '@mui/material/Stack';
import { Typography, TextField } from '@mui/material';
import { textAreaComponentStyles } from '../../styles/componentStyles';

function TextArea({ inputs, name, onInputsChange }) {
  return (
    <Stack useFlexGap gap={'17px'}>
        <Typography>
            Detail
        </Typography>

        <TextField
            multiline
            maxRows={4}
            name={name}
            value={inputs[name]}
            sx={textAreaComponentStyles.textField}
            onChange={onInputsChange}
        />
    </Stack>
  )
}

export default TextArea;