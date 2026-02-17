import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-4'>
                Frequently Asked Questions – CET CAP Admission
            </h2>

            <p className='text-center mb-5'>
                Find answers to common doubts regarding CAP rounds, cutoff trends,
                college selection strategy, and admission planning.
            </p>

            <Accordion defaultActiveKey="" flush>

                <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                        What is the CAP round process?
                    </Accordion.Header>
                    <Accordion.Body>
                        CAP (Centralized Admission Process) is a centralized system
                        used for engineering admissions based on CET percentile.
                        Students fill preference forms, and seats are allotted
                        according to merit, category, and availability.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='1'>
                    <Accordion.Header>
                        How are college cutoffs decided?
                    </Accordion.Header>
                    <Accordion.Body>
                        Cutoffs depend on factors like number of applicants,
                        difficulty level of CET exam, seat availability, and
                        reservation categories. They vary every year.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='2'>
                    <Accordion.Header>
                        How can I fill my preference form strategically?
                    </Accordion.Header>
                    <Accordion.Body>
                        Students should categorize colleges as Dream, Target,
                        and Safe options based on previous year cutoffs and
                        their percentile. Smart ordering increases chances
                        of better allotment.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='3'>
                    <Accordion.Header>
                        How does this platform help in CAP planning?
                    </Accordion.Header>
                    <Accordion.Body>
                        Our smart system predicts possible colleges based on
                        percentile and category, simulates CAP rounds, and
                        analyzes previous cutoff trends to reduce admission
                        uncertainty and stress.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='4'>
                    <Accordion.Header>
                        Are cutoff trends the same every year?
                    </Accordion.Header>
                    <Accordion.Body>
                        No. Cutoffs change every year depending on competition
                        and seat demand. That’s why analyzing previous data
                        and simulating outcomes is important.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;
