import React from 'react';
import Box from '@mui/material/Box';

const VerticalDivider = () => {
  const dividerStyle = {
    height: '100%', // Set the height of the vertical divider
    borderRight: '1px solid #ccc', // Set the color and style of the divider
    margin: '0', // Adjust the margin as needed
  };

  return <Box style={dividerStyle}/>;   
};

export default VerticalDivider;
