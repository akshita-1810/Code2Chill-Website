
import code2chillLogo from '../assets/code2chill-logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="navbar-brand">
        <img
          src={code2chillLogo}
          alt="Code2Chill Logo"
          className="navbar-logo"
        />

        <span className="navbar-divider"></span>

        <span className="brand-text">
          <span className="brand-code">Code</span>
          <span className="brand-chill">2Chill</span>
        </span>
      </Link>

      <div className="navbar-links">
        <Link to="/about">About</Link>
        <Link to="/team">Team</Link>
        <Link to="/events">Events</Link>
        <Link to="/projects">Projects</Link>
      </div>

      <Link to="/join" className="navbar-cta">
  Join Club
</Link>

    </nav>
  )
}

export default Navbar
