function Navbar() {
  return (
    <header className="navbar">

      {/* Logo */}
      <a href="#home" className="brand">
        S<span>.</span>
      </a>

      {/* Navigation */}
      <nav className="navigation">

        <a href="#home" className="nav-active">
          Home
        </a>

        <a href="#technology">
          Technology / Skills
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#certificates">
          Certificates
        </a>

        <a href="#achievements">
          Achievements
        </a>

        <a href="#contact">
          Contacts
        </a>

      </nav>

      {/* Let's Talk Button */}
      <a href="#contact" className="talk-button">
        Let's Talk
      </a>

    </header>
  );
}

export default Navbar;