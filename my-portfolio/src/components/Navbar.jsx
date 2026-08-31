function Navbar() {
  return (
    <header className="navbar">

      <a href="#home" className="brand">
        S<span>.</span>
      </a>

      <nav className="navigation">

        <a
          href="#home"
          className="nav-active"
        >
          Home
        </a>

        <a href="#about">
          About
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#skills">
          Skills
        </a>

        <a href="#contact">
          Contact
        </a>

      </nav>

      <a
        href="#contact"
        className="talk-button"
      >
        Let's Talk
      </a>

    </header>
  );
}

export default Navbar;