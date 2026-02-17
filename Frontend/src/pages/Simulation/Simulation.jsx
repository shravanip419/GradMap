import React, { useState } from "react";
import "./Simulation.css";
import { Form, Button, Card, ProgressBar } from "react-bootstrap";
import Joyride from "react-joyride";

function Simulation() {
  const [step, setStep] = useState(1);
  const [percentile, setPercentile] = useState("");
  const [category, setCategory] = useState("");
  const [preferences, setPreferences] = useState([]);
  const [result, setResult] = useState("");
  const [runTour, setRunTour] = useState(true);

  const colleges = [
    "VJTI - Computer Engineering",
    "SPIT - IT",
    "DJSCE - EXTC",
    "TSEC - Computer Engineering",
    "VESIT - IT"
  ];

  const steps = [
    {
        target: ".percentile-input",
        content: "Enter your CET percentile here."
    },
    {
        target: ".category-select",
        content: "Select your reservation category."
    },
    {
        target: ".document-upload",
        content: "Upload required documents here."
    },
    {
        target: ".preference-section",
        content: "Add colleges to your preference list."
    }
    ];


  const addPreference = (college) => {
    if (!preferences.includes(college)) {
      setPreferences([...preferences, college]);
    }
  };

  const simulateAllotment = () => {
    let allotted = "No Seat Allotted";

    if (percentile >= 96) allotted = preferences[0] || colleges[0];
    else if (percentile >= 92) allotted = preferences[1] || colleges[1];
    else allotted = colleges[2];

    setResult(allotted);
    setStep(5);
  };

  const progressValue = (step / 5) * 100;

return (
  <>
    <Joyride
      steps={steps}
      run={runTour}
      continuous
      showSkipButton
      styles={{
        options: {
          primaryColor: "#dc3545"
        }
      }}
    />

    <div className="simulation-page container py-5">
      <h2 className="text-center mb-4">
        CAP Round Complete Simulation
      </h2>

      <ProgressBar now={progressValue} className="mb-4 custom-progress" />

      {/* STEP 1 */}
      {step === 1 && (
        <Card className="simulation-card">
          <h4>Step 1 – Candidate Registration</h4>

          <Form.Group className="mb-3">
            <Form.Label>CET Percentile</Form.Label>
            <Form.Control
              type="number"
              className="percentile-input"
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              className="category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Select Category</option>
              <option>OPEN</option>
              <option>OBC</option>
              <option>SC</option>
              <option>ST</option>
            </Form.Select>
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button variant="danger" onClick={() => setStep(2)}>
              Next
            </Button>
          </div>
        </Card>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <Card className="simulation-card document-upload">
          <h4>Step 2 – Document Upload</h4>

          <Form.Group className="mb-3">
            <Form.Label>Upload CET Scorecard</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload Caste Certificate</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Button variant="secondary" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button variant="danger" onClick={() => setStep(3)}>
              Submit Documents
            </Button>
          </div>
        </Card>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <Card className="simulation-card">
          <h4>Step 3 – Document Verification</h4>
          <p className="verified-text">
            Documents Verified Successfully ✅
          </p>

          <h5 className="mt-4">Next Steps in CAP Process:</h5>

          <div className="flowchart">
            <div className="flow-box">Registration Completed</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-box">Document Verification</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-box">Option Form Filling</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-box">CAP Round 1 Allotment</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-box">Freeze / Float / Slide</div>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <Button variant="secondary" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button variant="danger" onClick={() => setStep(4)}>
              Proceed to Option Form
            </Button>
          </div>
        </Card>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <Card className="simulation-card preference-section">
          <h4>Step 4 – Option Form Filling</h4>

          {colleges.map((college, index) => (
            <Button
              key={index}
              variant="outline-danger"
              className="m-2"
              onClick={() => addPreference(college)}
            >
              Add {college}
            </Button>
          ))}

          <hr />

          <h5>Your Preferences:</h5>
          <ul>
            {preferences.map((pref, index) => (
              <li key={index}>{index + 1}. {pref}</li>
            ))}
          </ul>

          <div className="d-flex justify-content-between">
            <Button variant="secondary" onClick={() => setStep(3)}>
              Back
            </Button>
            <Button variant="success" onClick={simulateAllotment}>
              Submit Option Form
            </Button>
          </div>
        </Card>
      )}

      {/* STEP 5 */}
      {step === 5 && (
        <Card className="simulation-card text-center">
          <h4>🎉 CAP Round 1 Allotment Result</h4>
          <h5 className="result-text">{result}</h5>

          <div className="mt-4">
            <Button className="m-2" variant="success">Freeze</Button>
            <Button className="m-2" variant="warning">Float</Button>
            <Button className="m-2" variant="secondary">Slide</Button>
          </div>
        </Card>
      )}

    </div>
  </>
);
}

export default Simulation;
