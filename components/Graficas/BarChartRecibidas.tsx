import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: " rgb(231, 233, 237)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#5db73c",
  },
}));

// Inspired by the former Facebook spinners.


export default function CustomizedProgressBars() {
  return (
    <Box sx={{ flexGrow: 1 }}>
   
      <br />
      <BorderLinearProgress variant="determinate" value={70} />
    </Box>
  );
}
