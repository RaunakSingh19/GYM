import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Admin from './components/Admin';
import Client from './components/Client';
import LoginDetailsAdmin from './components/LoginDetailsAdmin';
import About from "./components/About";
import Services from "./components/Services";
import Membership from "./components/Membership";
import PaymentForm from './components/Payment';//payment form
import Form from './components/Form'
import AdminPanel from './components/AdminPanel';
import PaymentSuccess from './components/paymentSuccess';
// import Dashboard from './components/DashboardPage';
import Transactions from './components/TransactionsPage';
import Settings from './components/SettingsPage';
import Purchaseshow from './components/adminpurchaseshow';
import BMICalculator from './components/BMIcalculator';
import CaloriesCalculator from "./components/CaloriesCalculator";
import ServiceDetail from './components/ServiceDetail';
import ReportGenerationPage from './components/reportgeneration';
import Explore from './components/Explore';
import TicTacToe from './components/TicTacToe';
import DashboardCharts from './components/DashboardCharts';
import BlogPage from './components/Blog';
import AdminFeedback from './components/AdminFeedback';
import FeedbackForm from './components/FeedbackForm';
import ProteinDashboard from './components/ProtineDashboard';
// import ExerciseDetail from './pages/ExerciseDetail';
// import WgerExerciseSearch from './components/WgerExerciseSearch';
import ExercisePage from './components/ExercisePage';
import Facilities from './components/Facilities';
import MergedUserPurchaseData from './components/MergedUserPurchaseData';
import "./App.css";
import ProtectedRoute from './components/ProtectedRoute';
import DietPlanner from './components/DietPlanner';
import { AuthProvider } from './context/AuthContext';
import CoachesPage from './components/CoachesPage';
import Exersises from './components/Exersises';
import FitnessClubBlog from './components/FitnessClubBlog';
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
          <Route path="/admin/transaction" element={<Transactions />} />
          <Route path="/admin/setting" element={<Settings />} />
          <Route path="/admin/purchseshow" element={<Purchaseshow />} />
          <Route path="/client" element={<Client />} />
          <Route path="/bmi" element={<BMICalculator />} />
          <Route path="/report" element={<ReportGenerationPage />} />
          <Route path="/calories" element={<CaloriesCalculator />} />
          <Route path="/form" element={<Form />} />
          <Route path="/admin/logindetails" element={<LoginDetailsAdmin />} />
          <Route path="/about" element={<About />} />
          <Route path="/MergedData" element={<MergedUserPurchaseData />} />
          <Route path="/DashboardChart" element={<DashboardCharts />} />
          <Route path="/payment" element={<PaymentForm />} /> 
          <Route path="/payment-success" element={<PaymentSuccess />} /> 
          <Route path="/adminPanel" element={<AdminPanel />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/services" element={<Services />} />
          <Route path="/learnmore" element={<BlogPage />} />
          <Route path="/TicTacToe" element={<TicTacToe />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/dietplanner" element={<DietPlanner />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/exercisespage" element={<ExercisePage />} />
          <Route path="/admin/adminFeedback" element={<AdminFeedback />} />
          <Route path="/feedbackform" element={<FeedbackForm />} />
          <Route path="/fitnessclubBlog" element={<FitnessClubBlog />} />
          <Route path="/pdashboard" element={<ProteinDashboard />} />
          <Route element={<ProtectedRoute />}>
          
            <Route path="/coaches" element={<CoachesPage />} />
            <Route path="/exercises" element={<Exersises />} />
            
              <Route path="/facility" component={Facilities} />
             
            
          </Route>
        </Routes>
        {/* <Footer /> */}
      </div>
    </AuthProvider>
  );
};

export default App;