export default function ExternalLink({ href, label, text, icon: Icon, iconClassName = "", ...props }) {
    return (
        <a href={href} {...(label && { "aria-label": label })} target="_blank" rel="noopener noreferrer" {...props}>
            {Icon && <Icon className={iconClassName} />}
            {text && <span>{text}</span>}
        </a>
    );
}