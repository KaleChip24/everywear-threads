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
            target="_blank">
            <img
              src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
              class="icons"
              alt="GitHub" />
          </a>
          <p>Zhao</p>
          <a
            className="gitHub"
            href="https://github.com/iamzhaozhong"
            target="_blank">
            <img
              src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
              class="icons"
              alt="GitHub" />
          </a>
          <small>&copy; GA SEI Velvet Worms 2022</small>
        </div>

      </div>

    </footer>
  )
}

export default Footer;
