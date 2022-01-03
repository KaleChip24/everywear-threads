import "./Footer.css";
import { FiLinkedin } from "react-icons/fi"
import { VscGithub } from "react-icons/vsc"

const Footer = () => {

  return (
    <footer>
      <div className="team_links">
        <div className="kale-links">
          <p>Kale</p>
          <a
            href="https://github.com/KaleChip24"
            target="_blank"
            rel="noreferrer">
            <VscGithub></VscGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/oharakale/"
            target="_blank"
            rel="noreferrer">
            <FiLinkedin></FiLinkedin>
          </a>
        </div>
        <div className="zhao-links">
          <p>Zhao</p>
          <a
            className="gitHub"
            href="https://github.com/iamzhaozhong"
            target="_blank"
            rel="noreferrer">
            <VscGithub></VscGithub>
          </a>
          <a className="linkdIn"
            href="https://www.linkedin.com/in/junzhaozhongliu/"
            target="_blank"
            rel="noreferrer">
            <FiLinkedin></FiLinkedin>
          </a>
        </div>
        <div className="lavell-links">
          <p>Lavell</p>
          <a
            className="gitHub"
            href="https://github.com/lavell25"
            target="_blank"
            rel="noreferrer">
            <VscGithub></VscGithub>
          </a>
          <a className="linkdIn"
            href="https://www.linkedin.com/in/lavellHCollins/"
            target="_blank"
            rel="noreferrer">
            <FiLinkedin></FiLinkedin>
          </a>
        </div>
        <div className="copyright-yr">
          <small>&copy; GA SEI Velvet Worms 2022</small>
        </div>

      </div>

    </footer>
  )
}

export default Footer;
