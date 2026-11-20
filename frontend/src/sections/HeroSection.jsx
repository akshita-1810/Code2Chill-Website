
import code2chillLogo from '../assets/code2chill-logo.png'

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-main">
      <div className="hero-content">

        <p className="hero-label">
          THE TECHNICAL CLUB AT CHITKARA
        </p>

        <h1>
          Write Code.
          <br />
          Solve the Problems.
          <br />
          <span>Build the Future.</span>
        </h1>

        <p className="hero-description">
          Learn Together. Code Together. Grow Together.
        </p>

        <div className="hero-buttons">
          <a href="#events" className="hero-btn-primary">
            Explore Events →
          </a>

          <a href="#about" className="hero-btn-secondary">
            Discover Our Club
          </a>
        </div>

        <p className="hero-tagline">
          Code. Learn. Chill. Repeat.
        </p>

      </div>

      <div className="hero-visual">
        <img
          src={code2chillLogo}
          alt="Code2Chill Club Logo"
        />
      </div>
      </div>

<div className="hero-stats">
  <div className="stat-item">
    <h2>500+</h2>
    <p>Members</p>
  </div>

  <div className="stat-item">
    <h2>50+</h2>
    <p>Events</p>
  </div>

  <div className="stat-item">
    <h2>20+</h2>
    <p>Hackathon Wins</p>
  </div>

  <div className="stat-item">
    <h2>100+</h2>
    <p>Projects</p>
  </div>
</div>

    </section>
  )
}

export default HeroSection
