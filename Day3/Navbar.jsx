// Navbar.js
import '../../assets/css/Navbar.css';
import logoImg from '../../assets/images/grow.png'; // Import your logo image

function Navbar() {
  return (
    <nav className="navbar" >
      <div className="navbar-container">
      <img src={logoImg} alt="Logo" className="navbar-logo-img" />
        {/* <h1 className="navbar-logo">Your Logo</h1> */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-links">About</a>
          </li>
          <li className="nav-item">
            <a href="/service" className="nav-links">Services</a>
          </li>
          <li className="nav-item">
            <a href="/project" className="nav-links">Project</a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-links">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
