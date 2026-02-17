import { useEffect, useState } from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faSquareInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from './pages/Home/Home';
import Predictor from './pages/Courses/Courses';   // rename later if needed
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Simulation from './pages/Simulation/Simulation';

function App() {
  const [newDate, setNewDate] = useState('');

  useEffect(() => {
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    setNewDate(todayYear);
  }, []);

  return (
    <div>
      {/* NAVBAR */}
      <Navbar expand="lg" bg="dark" variant="dark" className='w-100'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand d-flex align-items-center text-danger'>
              <FontAwesomeIcon icon={faGraduationCap} size='xl' />
              <span className='mx-2 lh-1 fw-semibold text-light'>
                CET Smart
                <br />
                CAP Guide
              </span>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Link to='/' className='nav-link text-uppercase'>Home</Link>
              <Link to='/predictor' className='nav-link text-uppercase'>Predictor</Link>
              {/* <Link to='/about' className='nav-link text-uppercase'>About</Link> */}
              <Link to='/blog' className='nav-link text-uppercase'>Insights</Link>
              <Link to='/contact' className='nav-link text-uppercase'>Contact</Link>
              <Link to='/simulation' className='nav-link text-uppercase'>CAP Simulation</Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ROUTES */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/predictor' element={<Predictor />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/simulation' element={<Simulation />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      {/* FOOTER */}
      <footer className='bg-dark text-light mt-5'>
        <div className='container py-5'>
          <div className='row justify-content-between'>

            <div className='col-md-6'>
              <h5>CET Smart CAP Guide</h5>
              <p>
                A smart platform that helps CET aspirants simulate CAP rounds,
                predict colleges based on merit, and make confident admission decisions.
              </p>
            </div>

            <div className='col-md-4'>
              <ul className='list-unstyled'>
                <li>Smart College Prediction</li>
                <li>CAP Round Simulation</li>
                <li>Cutoff Analysis</li>
                <li>Merit-based Exploration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-secondary text-center p-3'>
          &copy; {newDate} CET Smart CAP Guide | Designed for Smarter Admissions
        </div>
      </footer>
    </div>
  );
}

export default App;
