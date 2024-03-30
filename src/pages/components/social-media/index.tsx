import { GitHubIcon } from "../../../assets/GitHubIcon";
import { InstagramIcon } from "../../../assets/InstagramIcon";

import { LikedinIcon } from "../../../assets/LinkedinIcon";

export const SocialMedia = () => {
    return (
        <div className="social__media-links">
            <a target="_blank" aria-label="link github" rel="noopener" href="https://github.com/ViniciusSBezerra">
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
            <a target="_blank" aria-label="link instagram" rel="noopener" href="https://www.instagram.com/viniciussbtech/">
                <InstagramIcon />
            </a>
        </div>
    )
}
