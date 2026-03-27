import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LinkedinProfile from "./LinkedinProfile.jsx";

describe("El componente LinkedinProfile", () => {
    it("renderiza correctamente el link al perfil de LinkedIn", () => {
        render(<LinkedinProfile />)

        const link = screen.getByRole("link", {
            name: /perfil de linkedin/i,
        });

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute(
            "href",
            "https://www.linkedin.com/in/fermin-sorzzoni-2792112b3/"
        );
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("renderiza correctamente el SVG de LinkedIn sin propiedades (medium)", () => {
        render(<LinkedinProfile />)

        const link = screen.getByRole("link", {
            name: /perfil de linkedin/i,
        });

        const svg = link.querySelector("svg");

        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass("w-8", "h-8", "block");
        expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    it("renderiza correctamente el SVG de LinkedIn con propiedades (large)", () => {
        render(<LinkedinProfile size="large" />)

        const link = screen.getByRole("link", {
            name: /perfil de linkedin/i,
        });

        const svg = link.querySelector("svg");

        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass("w-12", "h-12", "block");
        expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    it("renderiza correctamente el SVG de LinkedIn con propiedades invalidas (medium)", () => {
        render(<LinkedinProfile size="invalido" />)

        const link = screen.getByRole("link", {
            name: /perfil de linkedin/i,
        });

        const svg = link.querySelector("svg");

        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass("w-8", "h-8", "block");
        expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    it("puede focusear el link", () => {
        render(<LinkedinProfile />);

        const link = screen.getByRole("link", {
            name: /perfil de linkedin/i,
        });

        link.focus();

        expect(link).toHaveFocus();
    });
});