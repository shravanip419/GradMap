import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="logo">GradMap</h2>
        <nav>
          <a className="active">Dashboard</a>
          <a>CAP Simulator</a>
          <a>Predictions</a>
          <a>Preference List</a>
          <a>Analytics</a>
          <a>Settings</a>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* TOP BAR */}
        <div className="topbar">
          <h1>Dashboard</h1>
          <div className="user">
            <span>Shravani</span>
            <div className="avatar"></div>
          </div>
        </div>

        {/* STATS */}
        <section className="stats">
          <div className="stat-card">
            <p>CET Percentile</p>
            <h2>92.34</h2>
          </div>
          <div className="stat-card">
            <p>Best Prediction</p>
            <h2>VJTI - IT</h2>
          </div>
          <div className="stat-card">
            <p>Confidence</p>
            <h2>87%</h2>
          </div>
          <div className="stat-card">
            <p>CAP Round</p>
            <h2>Round 2</h2>
          </div>
        </section>

        {/* CAP FLOW */}
        <section className="cap-flow">
          <span className="done">Enter Details</span>
          <span className="done">Preferences</span>
          <span className="done">ML Prediction</span>
          <span className="pending">Result</span>
        </section>

        {/* PREDICTIONS */}
        <section className="predictions">
          <div className="college-card">
            <h3>🥇 VJTI - IT</h3>
            <p>Chance</p>
            <div className="bar">
              <div className="fill green" style={{ width: "87%" }}></div>
            </div>
            <span>87%</span>
          </div>

          <div className="college-card">
            <h3>🥈 COEP - CS</h3>
            <p>Chance</p>
            <div className="bar">
              <div className="fill yellow" style={{ width: "74%" }}></div>
            </div>
            <span>74%</span>
          </div>

          <div className="college-card">
            <h3>🥉 SPIT - IT</h3>
            <p>Chance</p>
            <div className="bar">
              <div className="fill red" style={{ width: "68%" }}></div>
            </div>
            <span>68%</span>
          </div>
        </section>

        {/* AI INSIGHT */}
        <section className="ai-card">
          <h3>🤖 AI Insight</h3>
          <p>
            Reordering your preference list can increase your Round 1
            allotment probability by <b>+12%</b>.
          </p>
        </section>

      </main>
    </div>
  );
};

export default Dashboard;
