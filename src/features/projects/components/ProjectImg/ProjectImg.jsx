export default function ProjectImg({ imgSrc }) {
    return (
        <img
            src={imgSrc}
            alt=""
            className="w-full aspect-video object-cover"
        />
    );
}