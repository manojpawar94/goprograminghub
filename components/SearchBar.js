import { useState } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mb: 4 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search Topic..."
        value={searchQuery}
        onChange={handleSearch}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '28px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
              borderWidth: '1px',
            },
          },
          '& .MuiInputBase-input': {
            py: '12px',
            px: '16px',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ ml: 1 }}>
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}