import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 2,
    backgroundColor: "#3db2ff",
  },
}));

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt:2 }}>
        <Box display="inline" sx={{ mr:2, pr:2}}>
        <Typography variant="body2" color="text.secondary" sx={{fontFamily: 'Roboto Mono'}}>Global Iteration:{props.epoch}</Typography>
      </Box>
      <Box sx={{ width: "100%", mr: 1 }}>
        <BorderLinearProgress variant="determinate" value={props.value} />
      </Box>
      <Box sx={{ minWidth: 35, mr: 2 }}>
        <Typography variant="body2" color="text.secondary">{`${props.value}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CollaborativeLinearProgress(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={props.progress} eta={props.eta} epoch={props.epoch}/>
    </Box>
  );
}
