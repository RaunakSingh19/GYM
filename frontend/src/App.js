import { Route, Routes } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

import About from "./components/About";
import BMICalculator from './components/BMIcalculator';
import BlogPage from './components/Blog';
import CaloriesCalculator from "./components/CaloriesCalculator";
import Client from './components/Client';
import CoachesPage from './components/CoachesPage';
import DietPlanner from './components/DietPlanner';
import Explore from './components/Explore';
import Exersises from './components/Exersises';
import Facilities from './components/Facilities';
import FeedbackForm from './components/FeedbackForm';
import FitnessClubBlog from './components/FitnessClubBlog';
import Home from './components/Home';
import Membership from "./components/Membership";
import ProteinDashboard from './components/ProtineDashboard';
import TicTacToe from './components/TicTacToe';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FeedbackCards from './components/FeedbackCards';
import FeedbackList from './components/FeedbackList';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bmi" element={<BMICalculator />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/calories" element={<CaloriesCalculator />} />
        <Route path="/client" element={<Client />} />
        <Route path="/coaches" element={<CoachesPage />} />
        <Route path="/dietplanner" element={<DietPlanner />} />
        <Route path="/exercises" element={<Exersises />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/feedbackform" element={<FeedbackForm />} />
        <Route path="/fitnessclubBlog" element={<FitnessClubBlog />} />
        <Route path="/learnmore" element={<BlogPage />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/pdashboard" element={<ProteinDashboard />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />

        <Route path="/feedback" element={<FeedbackCards />} />
        <Route path="/fdl" element={<FeedbackList />} />

        
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
