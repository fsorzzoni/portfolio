import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("../ProjectCard/ProjectCard.jsx", () => ({
    default: () => <div data-testid="project-card" />,
}));

vi.mock("../../constants/projects.js", () => ({
    PROJECTS: {
        unitracker: {},
        portfolio: {},
        ssoo: {},
        seju: {},
    },
}));

import ProjectsGrid from "./ProjectsGrid.jsx";

describe("El componente ProjectsGrid", () => {
    it("renderiza todos los ProjectCard", () => {
        render(<ProjectsGrid />);
        
        const cards = screen.getAllByTestId("project-card");
        expect(cards).toHaveLength(4);
    });

    it("renderiza las clases", () => {
        const { container } = render(<ProjectsGrid />);
        expect(container.firstChild).toHaveClass("grid-cols-[repeat(auto-fit,minmax(200px,1fr))]", "gap-4")
    });
});