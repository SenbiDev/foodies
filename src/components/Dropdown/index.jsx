import React, { useState, useEffect } from 'react'
import { Stack, TextField, Typography, Autocomplete, CircularProgress } from '@mui/material';
import { dropdownComponentStyles } from '../../styles/componentStyles';

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

function Dropdown({ label, initialValue, data = [], onUpdate = () => { } }) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [valueSelected, setValueSelected] = useState(initialValue);
    const loading = open && options.length === 0;

    const onSelected = (event, newInputValue) => {
        setValueSelected(newInputValue);
        onUpdate(newInputValue.id, newInputValue.name);
    };

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            await sleep(1e3);

            if (active) {
                setOptions(data);
                setValueSelected({ id: data[0]?.id, name: data[0]?.name });
            }
        })();

        return () => {
            active = false;
        };
    }, [loading, data]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Stack useFlexGap gap={'17px'}>
            <Typography>
                {label}
            </Typography>

            <Autocomplete
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                value={valueSelected}
                onChange={onSelected}
                isOptionEqualToValue={(option, value) => option.name === value.name}
                getOptionLabel={(option) => option.name}
                options={options}
                loading={loading}
                sx={dropdownComponentStyles.autoComplete}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress size={20} sx={dropdownComponentStyles.loading} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                        sx={dropdownComponentStyles.textField}
                    />
                )}
            />
        </Stack>
    );
}

export default Dropdown;