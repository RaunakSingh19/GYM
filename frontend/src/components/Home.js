import { Box } from '@mui/material';
import HomePage from './Homepage';
import CoachesPage from './CoachesPage';
import Exersises from './Exersises';
import ToolsSection from './ToolsSection';
import Program from './program'
import NewsletterSection from './NewsletterSection';
import FeedbackCards from './FeedbackCards';
const Home = () => {
  return (
    <Box sx={{ marginTop: "80px" }}>
      <HomePage />
      <Exersises />
      <ToolsSection />
      < NewsletterSection/>
       <CoachesPage />
      <Program />
      <FeedbackCards/>
    </Box>
  );
};

export default Home;