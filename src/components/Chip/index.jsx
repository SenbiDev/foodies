import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Chip as MuiChip, Skeleton } from "@mui/material";
import { selectTags } from "../../redux/reducers/tagsSlice";
import { chipComponentStyles } from '../../styles/componentStyles';

function Chip({ label, onChipSelected }) {
    const { tagsQueryParam } = useSelector(selectTags); // for reset chip state when category change
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState(false);
    const borderColor = selected ? 'unset' : 'orange';
    const color = selected ? 'white' : 'orange';
    const backgroundColor = selected ? 'orange' : 'white';
    const hover = selected ? 'orange' : 'unset';

    useEffect(() => {
      setTimeout(() => setLoading(false), 1000);
    },[tagsQueryParam]);
  
    const onSelected = () => {
      setSelected(!selected);
      onChipSelected(`&tags[]=${label}`)
    }
  
    return (
      loading
      ?
      <Skeleton animation='wave' width={'76px'} height={'32px'} sx={{ borderRadius: '10px' }} />
      :
      <MuiChip label={label} sx={chipComponentStyles.chip(borderColor, color, backgroundColor, hover)} onClick={onSelected} />
    )
}

export default Chip;