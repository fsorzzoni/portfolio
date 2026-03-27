import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import GithubProfile from "./GithubProfile.jsx";

describe("El componente GithubProfile", () => {
    beforeEach(() => {
        render(<GithubProfile />)
    });

    it("renderiza correctamente el link al perfil de GitHub", () => {
        const link = screen.getByRole("link", {
            name: /perfil de github/i,
        });

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute(
            "href",
            "https://github.com/fsorzzoni"
        );
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("renderiza correctamente el SVG de GitHub", () => {
        const link = screen.getByRole("link", {
            name: /perfil de github/i,
        });

        const svg = link.querySelector("svg");

        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute("width", "32");
        expect(svg).toHaveAttribute("height", "32");
    });
});