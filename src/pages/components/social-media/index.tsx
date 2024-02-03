import { GitHubIcon } from "../../../assets/GitHubIcon";
import { InstagramIcon } from "../../../assets/InstagramIcon";

import { LikedinIcon } from "../../../assets/LinkedinIcon";

export const SocialMedia = () => {
    return (
        <div className="social__media-links">
            <a target="_blank" href="https://github.com/ViniciusSBezerra">
                <GitHubIcon />
            </a>
            <a
                target="_blank"
                href="https://www.linkedin.com/in/viniciussbezerra/"
            >
                <LikedinIcon />
            </a>
            <a target="_blank" href="https://www.instagram.com/viniciussbtech/">
                <InstagramIcon />
            </a>
        </div>
    )
}
