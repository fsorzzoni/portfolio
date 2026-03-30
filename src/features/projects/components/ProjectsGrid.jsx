import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsGrid() {
    return (
        <div className="grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    );
}