export default function ExternalLink({ href, label, text, icon: Icon, iconClassName = "", ...props }) {
    return (
        <a href={href} className="transition-all duration-300 ease-in-out hover:bg-background-700 hover:shadow-md shadow-background-900 rounded-full p-2 border border-background-800" {...(label && { "aria-label": label })} target="_blank" rel="noopener noreferrer" {...props}>
            {Icon && <Icon className={iconClassName} />}
            {text && <span>{text}</span>}
        </a>
    );
}