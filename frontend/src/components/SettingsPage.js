import React from 'react';
import { Typography, Switch, FormControlLabel } from '@mui/material';

const Settings = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleThemeChange = (event) => {
    setDarkMode(event.target.checked);
    // Add logic to change the theme
  };

  return (
    <div>
      <Typography variant="h4">Settings</Typography>
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={handleThemeChange} />}
        label="Dark Mode"
      />
    </div>
  );
};

export default Settings;