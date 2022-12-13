// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  const logoUrl = 'https://assets.ccbp.in/frontend/react-js/wave-logo-img.png'
  const logoAltText = 'wave'

  return (
    <div className="header-container">
      <img className="logo-size" src={logoUrl} alt={logoAltText} />

      <div className="nav-bar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Header
