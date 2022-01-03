import "./Footer.css";

const Footer = () => {

  return (
    <footer>

      <div className="team_links">
        <div className="kale-link">
          <p>Kale</p>
          <a
            className="gitHub"
            href="https://github.com/KaleChip24"
            target="_blank"
            rel="noreferrer">
            <img
              src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
              className="icons"
              alt="GitHub" />
          </a>
          <a className="linkdIn"
            href="https://www.linkedin.com/in/oharakale/"
            target="_blank"
            rel="noreferrer">
            <img
              src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
              className="icons"
              alt="linkedin" />
          </a>
          <p>Zhao</p>
          <a
            className="gitHub"
            href="https://github.com/iamzhaozhong"
            target="_blank"
            rel="noreferrer">
            <img
              src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
              className="icons"
              alt="GitHub" />
          </a>
          <a className="linkdIn"
            href="https://www.linkedin.com/in/junzhaozhongliu/"
            target="_blank"
            rel="noreferrer">
            <img
              src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
              className="icons"
              alt="linkedin" />
          </a>
          <p>Lavell</p>
          <a
            className="gitHub"
            href="https://github.com/lavell25"
            target="_blank"
            rel="noreferrer">
            <img
              src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
              class="icons"
              alt="GitHub" />
          </a>
          <a className="linkdIn"
            href="https://www.linkedin.com/in/lavellHCollins/"
            target="_blank"
            rel="noreferrer">
            <img
              src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
              className="icons"
              alt="linkedin" />
          </a>
          <small>&copy; GA SEI Velvet Worms 2022</small>
        </div>

      </div>

    </footer>
  )
}

export default Footer;
