import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const colleges = [
    {
        id: 1,
        title: 'Veermata Jijabai Technological Institute (VJTI)',
        description: 'One of the top engineering colleges in Mumbai known for excellent placements and strong academic performance.'
    },
    {
        id: 2,
        title: 'Sardar Patel Institute of Technology (SPIT)',
        description: 'Highly reputed autonomous institute offering Computer, IT and EXTC programs with strong industry exposure.'
    },
    {
        id: 3,
        title: 'Dwarkadas J. Sanghvi College of Engineering (DJSCE)',
        description: 'Popular engineering college with strong placements and competitive cutoff trends.'
    },
    {
        id: 4,
        title: 'Thadomal Shahani Engineering College (TSEC)',
        description: 'Well-known institute affiliated to Mumbai University with good academic infrastructure.'
    },
    {
        id: 5,
        title: 'KJ Somaiya College of Engineering',
        description: 'Renowned private engineering college offering various technical branches with strong campus placements.'
    },
    {
        id: 6,
        title: 'Fr. Conceicao Rodrigues College of Engineering',
        description: 'One of the reputed engineering colleges known for quality education and discipline.'
    },
    {
        id: 7,
        title: 'Vivekanand Education Society Institute of Technology (VESIT)',
        description: 'Autonomous institute offering Computer, IT and AI programs with high cutoff scores.'
    },
    {
        id: 8,
        title: 'Shah & Anchor Kutchhi Engineering College',
        description: 'Well-established engineering college affiliated with Mumbai University.'
    }
];

function Courses() {
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
            <div className='row g-4'>
                {colleges.map((college) => (
                    <div key={college.id} className='col-lg-6'>
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
