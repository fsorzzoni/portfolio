import yo from "../../../assets/yo.jpeg";
import { iconSizesMap } from "../../../utils/sizes.js";

export default function ProfilePhoto({ size = "medium" }) {
    const sizeClass = iconSizesMap[size] ?? iconSizesMap.medium;

    return (
        <img 
            src={yo} 
            alt=""
            className={sizeClass + " rounded-full object-cover"}
        />
    );
}