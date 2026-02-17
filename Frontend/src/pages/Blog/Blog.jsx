import React from 'react';
import './Blog.css';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
  LineChart, Line,
  ResponsiveContainer
} from 'recharts';

const cutoffData = [
  { year: '2021', cutoff: 92 },
  { year: '2022', cutoff: 94 },
  { year: '2023', cutoff: 96 },
  { year: '2024', cutoff: 95 }
];

const branchData = [
  { name: 'Computer', value: 35 },
  { name: 'IT', value: 25 },
  { name: 'EXTC', value: 20 },
  { name: 'Mechanical', value: 20 }
];

const categoryData = [
  { name: 'OPEN', value: 50 },
  { name: 'OBC', value: 27 },
  { name: 'SC', value: 15 },
  { name: 'ST', value: 8 }
];

const COLORS = ['#dc3545', '#0d6efd', '#198754', '#ffc107'];

function Blog() {
  return (
    <div className='blog-page'>

      {/* HEADER */}
      <header className='height-75 bg-dark'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='fw-bold'>Admission Insights Dashboard</h1>
          <p className='w-75 text-center'>
            Visual representation of CET CAP trends, cutoff analysis,
            and seat distribution to help students make informed decisions.
          </p>
        </div>
      </header>

      <div className='container py-5'>

        {/* BAR CHART */}
        <h3 className='text-center mb-4'>Previous Year Cutoff Trend (Computer Engineering)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={cutoffData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cutoff" fill="#dc3545" />
          </BarChart>
        </ResponsiveContainer>

        {/* PIE CHART */}
        <h3 className='text-center mt-5 mb-4'>Branch-wise Seat Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={branchData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {branchData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        {/* LINE CHART */}
        <h3 className='text-center mt-5 mb-4'>CAP Round Cutoff Variation</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={cutoffData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cutoff" stroke="#0d6efd" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>

        {/* DOUGHNUT STYLE PIE */}
        <h3 className='text-center mt-5 mb-4'>Category-wise Seat Allocation</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={100}
              label
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell2-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}

export default Blog;
