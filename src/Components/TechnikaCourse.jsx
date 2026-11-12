import React, { useState } from "react";
import "../App.css";

const technicalFields = [
  {
    id: 1,
    name: "AI & Machine Learning",
    icon: "🧠",
    description: "Build intelligent applications with AI.",
    color: "purple",
  },
  {
    id: 2,
    name: "Web Development",
    icon: "💻",
    description: "Create modern and responsive web apps.",
    color: "blue",
  },
  {
    id: 3,
    name: "Data Science",
    icon: "📊",
    description: "Analyze data and find real-world insights.",
    color: "green",
  },
  {
    id: 4,
    name: "Cloud Computing",
    icon: "☁️",
    description: "Learn to build and deploy on the cloud.",
    color: "orange",
  },
  {
    id: 5,
    name: "Cybersecurity",
    icon: "🛡️",
    description: "Protect systems and build secure apps.",
    color: "pink",
  },
];

const programmingLanguages = [
  {
    id: 6,
    name: "JavaScript",
    icon: "🟨",
    description: "Build interactive websites and applications.",
    color: "orange",
  },
  {
    id: 7,
    name: "Python",
    icon: "🐍",
    description: "Explore AI, automation and data science.",
    color: "green",
  },
  {
    id: 8,
    name: "Java",
    icon: "☕",
    description: "Develop powerful applications.",
    color: "orange",
  },
  {
    id: 9,
    name: "C++",
    icon: "⚙️",
    description: "Learn high-performance programming.",
    color: "blue",
  },
  {
    id: 10,
    name: "React",
    icon: "⚛️",
    description: "Create dynamic user interfaces.",
    color: "purple",
  },
];

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <span>◈</span> Technika
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
      </div>

      <a href="#courses" className="get-started">
        Get Started <span>→</span>
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">

        <span className="tag">
          ✦ YOUR FUTURE STARTS HERE
        </span>

        <h1>
          Build <span>Technika</span>
          <br />
          Course Central
        </h1>

        <p>
          Explore industry-relevant technical courses
          and build your career in technology.
          Start learning today and shape your future.
        </p>

        <div className="hero-actions">
          <a href="#courses" className="hero-btn">
            Explore Courses <span>→</span>
          </a>
        </div>

        <div className="hero-features">
          <span>✦ Industry Relevant</span>
          <span>✦ Skill Development</span>
        </div>

      </div>

      <div className="hero-visual">

        <div className="glow-circle"></div>

        <div className="floating-icon icon-one">🚀</div>
        <div className="floating-icon icon-two">📚</div>
        <div className="floating-icon icon-three">💡</div>

        <div className="laptop">

          <div className="laptop-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="laptop-screen">
            <div className="code-icon">&lt; / &gt;</div>
            <h3>CODE YOUR FUTURE</h3>
            <p>Learn. Build. Innovate.</p>
          </div>

          <div className="laptop-base"></div>

        </div>

      </div>
    </section>
  );
}

function CourseCard({ course }) {
  return (
    <div className={`course-card ${course.color}`}>

      <div className="course-icon">
        {course.icon}
      </div>

      <h3>{course.name}</h3>

      <p>{course.description}</p>

      <button
        className="explore-btn"
        onClick={() => alert(`Welcome to ${course.name}!`)}
      >
        Explore <span>→</span>
      </button>

    </div>
  );
}

function CourseList() {
  const [activeTab, setActiveTab] = useState("technical");

  const courses =
    activeTab === "technical"
      ? technicalFields
      : programmingLanguages;

  return (
    <section className="courses-section" id="courses">

      <div className="section-heading">

        <span className="tag">
          ✦ LEARN SOMETHING NEW
        </span>

        <h2>
          Discover Your <span>Learning Path</span>
        </h2>

        <p>
          Choose your area of interest and start your
          technology journey.
        </p>

      </div>

      <div className="tabs">

        <button
          className={activeTab === "technical" ? "active" : ""}
          onClick={() => setActiveTab("technical")}
        >
          ◈ Technical Fields
        </button>

        <button
          className={activeTab === "programming" ? "active" : ""}
          onClick={() => setActiveTab("programming")}
        >
          &lt;/&gt; Programming Languages
        </button>

      </div>

      <div className="course-grid">

        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}

      </div>

      <div className="course-count">
        Showing <span>{courses.length}</span> courses
      </div>

    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-content">

        <span className="tag">✦ ABOUT TECHNIKA</span>

        <h2>
          Learn Today. <span>Lead Tomorrow.</span>
        </h2>

        <p>
          Technika Course Central is a learning platform
          designed to help students explore technical
          fields and programming languages. Our goal is
          to make technology learning accessible,
          interesting and career-oriented.
        </p>

        <div className="stats">

          <div className="stat-card">
            <h3>10+</h3>
            <p>Total Courses</p>
          </div>

          <div className="stat-card">
            <h3>05</h3>
            <p>Technical Fields</p>
          </div>

          <div className="stat-card">
            <h3>05</h3>
            <p>Programming Languages</p>
          </div>

        </div>

      </div>

    </section>
  );
}

function TechnikaCourse() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <CourseList />
        <About />
      </main>

      <footer>
        <h3>◈ Technika</h3>
        <p>Building Skills. Creating Futures.</p>
        <span>© 2026 Technika. All Rights Reserved.</span>
      </footer>

    </div>
  );
}

export default TechnikaCourse;