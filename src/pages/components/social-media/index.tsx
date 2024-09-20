import { GitHubIcon } from "../../../assets/GitHubIcon";
import { InstagramIcon } from "../../../assets/InstagramIcon";

import { LikedinIcon } from "../../../assets/LinkedinIcon";

interface SocialMediaProps {
  isFooter?: boolean;
}

export const SocialMedia = ({ isFooter }: SocialMediaProps) => {
  return (
    <div className={` flex gap-6 justify-between ${isFooter ? "mt0" : "mt6"}`}>
      <a
        target="_blank"
        aria-label="link github"
        rel="noopener"
        href="https://github.com/ViniciusSBezerra"
      >
        <GitHubIcon />
      </a>
      <a
        target="_blank"
        aria-label="link linkedin"
        href="https://www.linkedin.com/in/viniciussbezerra/"
        rel="noopener"
      >
        <LikedinIcon />
      </a>
      <a
        target="_blank"
        aria-label="link instagram"
        rel="noopener"
        href="https://www.instagram.com/viniciussbtech/"
      >
        <InstagramIcon />
      </a>
    </div>
  );
};
