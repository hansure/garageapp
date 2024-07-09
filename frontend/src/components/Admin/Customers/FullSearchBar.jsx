import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const FullSearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchText(value);
    onSearch(value); // Pass the search text to the parent component or handle the search logic here
  };

  return (
    <div style={{
      backgroundColor:'white',
      borderRadius: '10px',
      marginTop:'8px',
      marginBottom:'8px'
    }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearch}
        InputProps={{
          endAdornment: (
            <SearchIcon style={{ color: 'grey' }} />
          ),
        }}
      />
    </div>
  );
};

export default FullSearchBar;
