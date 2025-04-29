import React, { useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { Refresh, SportsEsports } from '@mui/icons-material';
import muscleBoyLeft from '../assets/images/horizantal-gym.png';
// import muscleBoyRight from '../assets/images/muscle-boy2.png';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const updatedBoard = [...board];
    updatedBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(updatedBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <Box sx={{
      // min height: 100vh,
      minHeight: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
      position: 'relative',
      overflow: 'hidden',
      '&::before, &::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        // height:'100%',
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 0,
        opacity: 0.6,
        '@media (max-width: 900px)': {
          display: 'none'
        }
      },
      '&::before': {
        // left: 0,
        backgroundImage: `url(${muscleBoyLeft})`,
      },
      '&::after': {
        right: 0,
        // backgroundImage: `url(${muscleBoyRight})`,
      }
    }}>
      <Box sx={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '500px',
        width: '100%',
        p: 4,
        textAlign: 'center'
      }}>
        <Typography variant="h3" sx={{ 
          mb: 4,
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          color: '#d81b60'
        }}>
          <SportsEsports fontSize="large" /> Tic Tac Toe
        </Typography>

        <Paper elevation={6} sx={{ 
          p: 3,
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)'
        }}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2,
            mb: 4
          }}>
            {board.map((value, index) => (
              <Button
                key={index}
                variant="outlined"
                sx={{
                  aspectRatio: '1/1',
                  minWidth: 0,
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: value === 'X' ? '#3a7bd5' : '#00d2ff',
                  borderColor: 'rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    borderColor: 'rgba(0, 0, 0, 0.3)'
                  },
                  '&.Mui-disabled': {
                    color: value === 'X' ? '#3a7bd5' : '#00d2ff',
                    borderColor: 'rgba(0, 0, 0, 0.2)'
                  }
                }}
                disabled={!!value || !!winner}
                onClick={() => handleClick(index)}
              >
                {value}
              </Button>
            ))}
          </Box>

          <Typography variant="h5" sx={{ 
            mb: 3,
            fontWeight: 600,
            color: winner ? '#4CAF50' : '#333'
          }}>
            {winner ? `🎉 ${winner} Wins!` : `Next: ${xIsNext ? 'X' : 'O'}`}
          </Typography>

          <Button
            variant="contained"
            startIcon={<Refresh />}
            onClick={resetGame}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              backgroundColor: '#d81b60',
              '&:hover': {
                backgroundColor: '#b91451'
              }
            }}
          >
            New Game
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;