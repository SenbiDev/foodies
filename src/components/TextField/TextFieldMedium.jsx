import { useState, useRef } from "react";
import { Stack, TextField, IconButton, InputAdornment, Button } from "@mui/material";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { textFieldMediumComponentStyles } from '../../styles/componentStyles';

function TextFieldMedium({ onKeywordChange, onSearch }) {
    const [text, setText] = useState('')
    const buttonComponent = useRef();

    const onChange = (e) => {
        setText(e.target.value);
        onKeywordChange(e.target.value);
    }

    const onClear = () => {
        setText('');
        onKeywordChange('');
        setTimeout(() => buttonComponent.current.click(), 700);
    }

    const onEnterClicked = (e) => {
        if (e.code === 'Enter') {
            onSearch()
        }
    };

    return (
        <Stack direction={{ xs: 'column', md: 'row' }} useFlexGap gap={{ xs: '20px' }}>
            <TextField
                size='small'
                value={text}
                InputProps={{
                    endAdornment:
                        text.length === 0
                            ?
                            <></>
                            :
                            <InputAdornment position="end">
                                <IconButton onClick={onClear}>
                                    <ClearRoundedIcon sx={textFieldMediumComponentStyles.icon} />
                                </IconButton>
                            </InputAdornment>
                }}
                sx={textFieldMediumComponentStyles.textField}
                onChange={onChange}
                onKeyDown={onEnterClicked}
            />

            <Button
                ref={buttonComponent}
                variant='contained'
                sx={textFieldMediumComponentStyles.button}
                onClick={onSearch}
            >
                Cari
            </Button>
        </Stack>
    );
}

export default TextFieldMedium;