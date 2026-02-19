import React, { useEffect, useState } from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import axios from 'axios';

function Courses() {

  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/Colleges");
        setColleges(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load colleges");
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  return (
    <div className='courses-page'>

      {/* HEADER */}
      <header className='height-75 bg-dark'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>
            Mumbai University Engineering Colleges
          </h1>
          <p className='text-center w-75 mb-5'>
            Explore top engineering colleges affiliated with Mumbai University 
            for CET CAP admissions. Compare institutions and make informed preference choices.
          </p>
        </div>
      </header>

      {/* COLLEGE CARDS */}
      <div className='container py-5'>
        {loading && <h4 className="text-center">Loading colleges...</h4>}
        {error && <h4 className="text-center text-danger">{error}</h4>}

        <div className='row g-4'>
          {colleges.map((college) => (
            <div key={college._id} className='col-lg-6'>
              <Card className='shadow scale-hover-effect h-100'>
                <Card.Body className='p-4'>
                  <Card.Title className='fs-4 text-danger'>
                    {college.title}
                  </Card.Title>
                  <Card.Text>
                    {college.description}
                  </Card.Text>
                  <button 
                    type='button' 
                    className='btn btn-outline-danger fw-semibold'>
                    View Cutoffs
                  </button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className='bg-dark text-light py-5'>
        <FaqAccordion />
      </div>

    </div>
  )
}

export default Courses;
