import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const blogs = [
    {
        id: 1,
        title: 'Understanding CAP Round Process',
        description: 'A complete guide to how CAP rounds work, seat allocation logic, and how to avoid common mistakes.'
    },
    {
        id: 2,
        title: 'How to Fill Preference Form Smartly',
        description: 'Learn how to arrange college preferences strategically based on your percentile and category.'
    },
    {
        id: 3,
        title: 'Previous Year Cutoff Trends',
        description: 'Analyze past cutoff data to improve your admission planning and prediction accuracy.'
    }
];

function Home() {
  return (
    <div className='home-page'>

        {/* HERO SECTION */}
        <header className='min-vh-100 d-flex align-items-center bg-dark text-light'>
            <div className='container text-center'>
                <h1 className='fw-bold display-4'>
                    Confused About CET CAP Admissions?
                </h1>

                <p className='lead mt-4'>
                    Many CET aspirants struggle with complex CAP rules, unclear cutoffs, 
                    and lack of personalized guidance - leading to poor preference choices and stress.
                </p>

                <div className='mt-4'>
                    <Link to="/predictor">
                        <button className='btn btn-danger btn-lg mx-2'>
                            Try College Predictor
                        </button>
                    </Link>
                    <Link to="/simulation">
                        <button className='btn btn-danger btn-lg mx-2'>
                            Start CAP Simulation
                        </button>
                    </Link>
                </div>
            </div>
        </header>

        {/* PROBLEM SECTION */}
        <div className="py-5 bg-light">
            <div className="container text-center">
                <h2 className="mb-4">Why Students Face Admission Confusion?</h2>
                <p>
                    Current portals only provide basic information and outdated cutoff lists.
                    There is no predictive support system to simulate CAP rounds or analyze merit-based opportunities.
                </p>
                <p>
                    Students rely on unofficial sources, increasing uncertainty and inefficient planning.
                </p>
            </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="py-5">
            <div className="container">
                <div className="row text-center">

                    <div className="col-md-4 mb-4">
                        <h4>🎯 Smart College Predictor</h4>
                        <p>
                            Get personalized college suggestions based on your CET percentile,
                            category, and previous cutoff trends.
                        </p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h4>🔄 CAP Round Simulation</h4>
                        <p>
                            Simulate preference filling and understand your chances before the
                            actual CAP rounds begin.
                        </p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h4>📊 Cutoff Analysis</h4>
                        <p>
                            Explore previous year cutoffs and analyze trends to make
                            confident admission decisions.
                        </p>
                    </div>

                </div>
            </div>
        </div>

        {/* BLOG SECTION */}
        <div className='bg-dark text-light py-5'>
            <div className='container text-center'>
                <h2 className='mb-5'>Admission Insights & Guidance</h2>

                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow'>
                                    <Card.Body className='p-4'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>

                <Link to="/blog">
                    <button className='btn btn-danger btn-lg mt-5'>
                        Read More
                    </button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Home;
