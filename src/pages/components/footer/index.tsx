import { GitHubIcon } from "../../../assets/GitHubIcon";
import { InstagramIcon } from "../../../assets/InstagramIcon";
import { LikedinIcon } from "../../../assets/LinkedinIcon";
import "./index.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="social__media-links">
        <a target="_blank" href="https://github.com/ViniciusSBezerra">
          <GitHubIcon />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/viniciussbezerra/">
          <LikedinIcon />
        </a>
        <a target="_blank" href="https://www.instagram.com/vinicius_s25/">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};
