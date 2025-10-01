// src/router.js
import { createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importing Bootstrap styles
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx/';
import Programs from './pages/Programs.jsx';
import Contact from './pages/Contact.jsx';
import './index.css'
import ProgramDetail from './pages/ProgramDetails.jsx';
import ImageSlider from './pages/ImageSlider.jsx';
import EmployeeSkills from './pages/EmployeeSkills.jsx';
import CollegeToCorporate from './pages/CollegetoCorporate.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'programs', element: <Programs /> },
      { path: 'contact', element: <Contact /> },
      {path: 'program/:id', element: <ProgramDetail />},
      {path: 'gallery', element: <ImageSlider />},
      {path: 'EmployeeSkills', element: <EmployeeSkills />},
      {path: 'college-to-corporate', element: <CollegeToCorporate />}
    ],
  },
]);

export default router;
