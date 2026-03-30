// GitHub and LinkedIn SVG by lawnchairlauncher - Collection: Lawnicons Line Brand Icons - License: Apache License

import { iconSizesMap } from "../../../constants/sizes.js";
import { socialMap } from "../../../constants/socials.js";

export default function SocialProfile({ type = "github", size = "medium", link = null, ...props }) {
    const sizeClass = iconSizesMap[size] ?? iconSizesMap.medium;
    const { link: mapLink, label, icon: Icon } = socialMap[type] ?? socialMap.github;
    const realLink = link ?? mapLink;

    return (
        <a href={realLink} aria-label={label} target="_blank" rel="noopener noreferrer" {...props}>
            <Icon className={sizeClass + " block"} />
        </a>
    );
}