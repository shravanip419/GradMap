import React from 'react';
import './Contact.css';

const colleges = [
  {
    name: "Veermata Jijabai Technological Institute (VJTI)",
    address: "H.R. Mahajani Marg, Matunga, Mumbai – 400019",
    phone: "022-24198101",
    email: "principal@vjti.ac.in"
  },
  {
    name: "Sardar Patel Institute of Technology (SPIT)",
    address: "Bhavans Campus, Munshi Nagar, Andheri West, Mumbai – 400058",
    phone: "022-26287250",
    email: "principal@spit.ac.in"
  },
  {
    name: "Dwarkadas J. Sanghvi College of Engineering (DJSCE)",
    address: "Vile Parle West, Mumbai – 400056",
    phone: "022-42335000",
    email: "principal@djsce.ac.in"
  },
  {
    name: "Thadomal Shahani Engineering College (TSEC)",
    address: "Bandra West, Mumbai – 400050",
    phone: "022-26401919",
    email: "principal@tsec.edu"
  },
  {
    name: "KJ Somaiya College of Engineering",
    address: "Vidyavihar East, Mumbai – 400077",
    phone: "022-66449191",
    email: "info@somaiya.edu"
  },
  {
    name: "Fr. Conceicao Rodrigues College of Engineering",
    address: "Bandra West, Mumbai – 400050",
    phone: "022-67114101",
    email: "principal@frcrce.ac.in"
  },
  {
    name: "Vivekanand Education Society Institute of Technology (VESIT)",
    address: "Chembur East, Mumbai – 400074",
    phone: "022-61532500",
    email: "principal@vesit.edu"
  },
  {
    name: "Shah & Anchor Kutchhi Engineering College",
    address: "Chembur, Mumbai – 400088",
    phone: "022-25580854",
    email: "info@sakec.ac.in"
  },
  {
    name: "Don Bosco Institute of Technology",
    address: "Kurla West, Mumbai – 400070",
    phone: "022-25042424",
    email: "principal@dbit.in"
  },
  {
    name: "Rajiv Gandhi Institute of Technology",
    address: "Andheri West, Mumbai – 400053",
    phone: "022-26707025",
    email: "principal@rgit.edu.in"
  },
  {
    name: "Atharva College of Engineering",
    address: "Malad West, Mumbai – 400095",
    phone: "022-40294949",
    email: "principal@atharvacoe.ac.in"
  },
  {
    name: "Vidyalankar Institute of Technology",
    address: "Wadala East, Mumbai – 400037",
    phone: "022-24161126",
    email: "info@vit.edu.in"
  },
  {
    name: "Universal College of Engineering",
    address: "Vasai East, Palghar – 401208",
    phone: "0250-6450333",
    email: "principal@universalcollege.edu.in"
  },
  {
    name: "Xavier Institute of Engineering",
    address: "Mahim West, Mumbai – 400016",
    phone: "022-24452142",
    email: "principal@xavier.ac.in"
  },
  {
    name: "Terna Engineering College",
    address: "Nerul, Navi Mumbai – 400706",
    phone: "022-27709561",
    email: "principal@ternaengg.ac.in"
  },
  {
    name: "Bharati Vidyapeeth College of Engineering",
    address: "CBD Belapur, Navi Mumbai – 400614",
    phone: "022-27572122",
    email: "principal@bvcoenm.edu.in"
  },
  {
    name: "Lokmanya Tilak College of Engineering",
    address: "Koparkhairane, Navi Mumbai – 400709",
    phone: "022-27541005",
    email: "principal@ltce.in"
  },
  {
    name: "Datta Meghe College of Engineering",
    address: "Airoli, Navi Mumbai – 400708",
    phone: "022-27791919",
    email: "principal@dmce.edu.in"
  },
  {
    name: "Pillai College of Engineering",
    address: "New Panvel, Navi Mumbai – 410206",
    phone: "022-27456100",
    email: "principal@mes.ac.in"
  },
  {
    name: "SIES Graduate School of Technology",
    address: "Nerul, Navi Mumbai – 400706",
    phone: "022-61082400",
    email: "principal@siesgst.ac.in"
  },
  {
    name: "Agnel Institute of Technology & Design",
    address: "Vashi, Navi Mumbai – 400703",
    phone: "022-27661924",
    email: "principal@aitdgoa.edu"
  },
  {
    name: "VPM’s Maharshi Parshuram College of Engineering",
    address: "Velneshwar, Ratnagiri",
    phone: "02350-224194",
    email: "principal@mpcoe.org"
  },
  {
    name: "St. Francis Institute of Technology",
    address: "Borivali West, Mumbai – 400103",
    phone: "022-28908585",
    email: "principal@sfit.ac.in"
  },
  {
    name: "St. John College of Engineering",
    address: "Palghar – 401404",
    phone: "02525-256002",
    email: "principal@sjcoe.in"
  },
  {
    name: "Yadavrao Tasgaonkar Institute of Engineering",
    address: "Karjat, Raigad – 410201",
    phone: "02148-203888",
    email: "principal@ytiet.edu.in"
  },
  {
    name: "Watumull Institute of Electronics Engineering",
    address: "Worli, Mumbai – 400018",
    phone: "022-24926010",
    email: "principal@watumull.edu"
  },
  {
    name: "KC College of Engineering",
    address: "Thane – 400601",
    phone: "022-25325208",
    email: "principal@kccemsr.edu.in"
  },
  {
    name: "Shivajirao S. Jondhale College of Engineering",
    address: "Dombivli East, Thane – 421201",
    phone: "0251-2430099",
    email: "principal@ssjcoe.edu.in"
  },
  {
    name: "A. C. Patil College of Engineering",
    address: "Kharghar, Navi Mumbai – 410210",
    phone: "022-27745734",
    email: "principal@acpce.org"
  }
];

function Contact() {
  return (
    <div className="contact-page container py-5">
      <h1 className="text-center mb-4">Mumbai Engineering Colleges Contact Directory</h1>
      <div className="row g-4">
        {colleges.map((college, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card shadow h-100 p-3">
              <h5 className="text-danger">{college.name}</h5>
              <p><strong>Address:</strong> {college.address}</p>
              <p><strong>Phone:</strong> {college.phone}</p>
              <p><strong>Email:</strong> {college.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
