import { styled, Tooltip, tooltipClasses } from "@mui/material";

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ main = 'false' }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'orange',
      color: 'white',
      borderRadius: '6px',
      padding: '8px',
      right: main === 'true' ? '90px' : 'unset'
    },
    [`& .${tooltipClasses.tooltipPlacementBottom}`]: {
      marginTop: '4px !important',
    },
    [`& .MuiTooltip-arrow::before`]: {
      backgroundColor: 'orange'
    },
}));

export default CustomTooltip;