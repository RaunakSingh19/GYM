// import React, { useState } from 'react';
// import axios from 'axios';

// const ExerciseSearch = ({ onResults }) => {
//   const [search, setSearch] = useState('');

//   const handleSearch = async () => {
//     if (!search) return;
//     try {
//       const response = await axios.get('https://exercisedb.p.rapidapi.com/exercises', {
//         headers: {
//           'X-RapidAPI-Key': 'a669203c04msh1d870351595892bp191d24jsn7724cf1097cd',
//           'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//         },
//       });

//       const filtered = response.data.filter(
//         ex =>
//           ex.name.toLowerCase().includes(search.toLowerCase()) ||
//           ex.bodyPart.toLowerCase().includes(search.toLowerCase()) ||
//           ex.target.toLowerCase().includes(search.toLowerCase())
//       );

//       onResults(filtered);
//     } catch (error) {
//       console.error('Error fetching exercises:', error);
//     }
//   };

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         placeholder="Search exercises"
//         value={search}
//         onChange={e => setSearch(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default ExerciseSearch;
import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ExerciseSearch = ({ onResults }) => {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    if (!search) return;
    try {
      const response = await axios.get('https://exercisedb.p.rapidapi.com/exercises', {
        headers: {
          'X-RapidAPI-Key':  'a669203c04msh1d870351595892bp191d24jsn7724cf1097cd'   , // secure way
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      });

      const filtered = response.data.filter(
        ex =>
          ex.name.toLowerCase().includes(search.toLowerCase()) ||
          ex.bodyPart.toLowerCase().includes(search.toLowerCase()) ||
          ex.target.toLowerCase().includes(search.toLowerCase())
      );

      onResults(filtered);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  return (
    <Box
      sx={{
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        px: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Find Your Exercise
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search by name, body part, or target..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ maxWidth: 600 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Button
        variant="contained"
        size="large"
        onClick={handleSearch}
        sx={{
          bgcolor: '#1976d2',
          px: 4,
          py: 1.5,
          fontWeight: 'bold',
          borderRadius: 3,
          '&:hover': {
            bgcolor: '#115293',
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default ExerciseSearch;
