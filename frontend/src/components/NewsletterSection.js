import React from "react";
import { Box, Typography, Button } from "@mui/material";

// A reusable Newsletter component 
const NewsletterSection = ({ onSubscribeClick }) => {
  return (
    <Box
      sx={{
        mt: 8,
        p: 4,
        borderRadius: 3,
        backgroundColor: "rgba(216, 27, 96, 0.05)",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: "#d81b60",
        }}
      >
        Get Fitness Tips Directly to Your Inbox
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 3,
          maxWidth: 600,
          mx: "auto",
        }}
      >
        Subscribe to our newsletter for weekly workout routines, nutrition advice, and exclusive member offers.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="contained"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: "8px",
            backgroundColor: "#d81b60",
            color: "white",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#b91451",
            },
          }}
          onClick={onSubscribeClick}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default NewsletterSection;
