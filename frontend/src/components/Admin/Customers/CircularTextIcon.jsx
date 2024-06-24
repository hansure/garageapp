// CircularTextIcon.js
import React from 'react';
import Avatar from '@mui/material/Avatar';

const CircularTextIcon = ({ text }) => {
  const iconStyle = {
    width: '120px', // Adjust the size of the icon
    height: '120px',
    backgroundColor: '#f01d43', // Change the background color as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    color: '#ffffff', // Change the text color as needed
    fontSize: '36px', // Adjust the font size of the text
  };

  return (
    <Avatar style={iconStyle}>
      {text}
    </Avatar>
  );
};

export default CircularTextIcon;
