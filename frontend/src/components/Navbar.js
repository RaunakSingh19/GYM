// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Box, Stack, Button } from "@mui/material";
// import GymLogo from "../assets/images/logo/3-removebg-preview (1).png"; // Replace with your actual logo path
// import "../styles/Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [prevScrollY, setPrevScrollY] = useState(0); // Track previous scroll position
//   const [visible, setVisible] = useState(true); // Track visibility of navbar

//   const handleJoinNowClick = () => {
//     navigate('/Explore');
//   };

//   // Scroll event listener
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > prevScrollY) {
//         // Scrolling down
//         setVisible(false);
//       } else {
//         // Scrolling up
//         setVisible(true);
//       }
//       setPrevScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup the event listener
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [prevScrollY]);

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#fff",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 10,
//         padding: "0.8rem 2rem",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//         transition: "opacity 0.3s ease", // Smooth fade-in/out effect
//         opacity: visible ? 1 : 0, // Hide navbar when scrolling down
//       }}
//     >
//       {/* Logo */}
//       <Link to="/" className="nav-logo">
//         <img src={GymLogo} alt="Logo" className="logo" />
//       </Link>

//       {/* Navigation Links */}
//       <Stack direction="row" spacing={3} className="nav-links">
//         <Link to="/about" className="nav-link">ABOUT</Link>
//         <Link to="/facilities" className="nav-link">FACILITIES</Link>
//         <Link to="/membership" className="nav-link">MEMBERSHIP</Link>
//         <Link to="/feedbackform" className="nav-link">FEEDBACK</Link>
//         {/* <Link to="/exercisespage" className="nav-link">EXERCISE</Link> */}
//       </Stack>

//       {/* Icons and Button */}
//       <Stack direction="row" alignItems="center" spacing={2}>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "#d81b60",
//             color: "#fff",
//             textTransform: "uppercase",
//             fontWeight: "600",
//             padding: "1.0rem 1.9rem",
//             "&:hover": { backgroundColor: "#ad1457" },
//           }}
//           onClick={handleJoinNowClick}
//         >
//           Explore
//         </Button>
//       </Stack>
//     </Box>
//   );
// };
// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Stack,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GymLogo from "../assets/images/logo/3-removebg-preview (1).png";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleJoinNowClick = () => {
    navigate("/Explore");
  };

  const handleScroll = () => {
    if (window.scrollY > prevScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setPrevScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { label: "ABOUT", path: "/about" },
    { label: "FACILITIES", path: "/facilities" },
    { label: "MEMBERSHIP", path: "/membership" },
    { label: "FEEDBACK", path: "/feedbackform" },
    // { label: "EXERCISE", path: "/exercisespage" },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          padding: "0.8rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "opacity 0.3s ease",
          opacity: visible ? 1 : 0,
        }}
      >
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img src={GymLogo} alt="Logo" className="logo" />
        </Link>

        {/* Nav Links - Hidden on small screens */}
        <Stack
          direction="row"
          spacing={3}
          className="nav-links"
          sx={{
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          {navItems.map((item) => (
            <Link to={item.path} className="nav-link" key={item.label}>
              {item.label}
            </Link>
          ))}
        </Stack>

        {/* Explore Button + Hamburger */}
        <Stack direction="row" alignItems="center" spacing={2}>
          {/* Explore Button - Hidden on small screens if desired */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#d81b60",
              color: "#fff",
              textTransform: "uppercase",
              fontWeight: "600",
              padding: "1.0rem 1.9rem",
              "&:hover": { backgroundColor: "#ad1457" },
              display: { xs: "none", md: "inline-flex" },
            }}
            onClick={handleJoinNowClick}
          >
            Explore
          </Button>

          {/* Hamburger Menu - Only on small screens */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Stack>
      </Box>

      {/* Sidebar / Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            padding: "1rem",
            backgroundColor: "#fff",
            height: "100%",
          }}
          role="presentation"
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <img src={GymLogo} alt="Logo" style={{ height: "40px" }} />
            </Box>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.label}
                component={Link}
                to={item.path}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}

            <ListItem>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#d81b60",
                  color: "#fff",
                  mt: 2,
                  "&:hover": { backgroundColor: "#ad1457" },
                }}
                onClick={() => {
                  toggleDrawer(false)();
                  handleJoinNowClick();
                }}
              >
                Explore
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
