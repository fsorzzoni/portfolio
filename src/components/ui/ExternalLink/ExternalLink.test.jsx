import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ExternalLink from "./ExternalLink.jsx";

describe("El componente ExternalLink", () => {
    it("permite focusear el link", () => {
        render(<ExternalLink href="#" />);

        const link = screen.getByRole("link");

        link.focus();

        expect(link).toHaveFocus();
    })

    it("no rompe si solo se proporciona href", () => {
        render(<ExternalLink href="#" />);

        const link = screen.getByRole("link");

        expect(link).toBeInTheDocument();
    });

    it("renderiza el href correctamente", () => {
        render(<ExternalLink href="https://ejemplo.com" />);

        const link = screen.getByRole("link");

        expect(link).toHaveAttribute("href", "https://ejemplo.com");
    });

    it("renderiza el texto si se proporciona", () => {
        render(<ExternalLink href="#" text="Hola" />);

        expect(screen.getByText("Hola")).toBeInTheDocument();
    });

    it("renderiza el icono si se proporciona", () => {
        const MockIcon = () => <svg data-testid="icon" />

        render(<ExternalLink href="#" icon={MockIcon} />);

        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    it("agrega aria-label si se proporciona", () => {
        render(<ExternalLink href="#" label="GitHub" />);

        const link = screen.getByRole("link");

        expect(link).toHaveAttribute("aria-label", "GitHub");
    });

    it("no agrega aria-label si no se proporciona", () => {
        render(<ExternalLink href="#" />);

        const link = screen.getByRole("link");
        
        expect(link).not.toHaveAttribute("aria-label");
    });

    it("abre en nueva pestaña de forma segura", () => {
        render(<ExternalLink href="#" />);

        const link = screen.getByRole("link");

        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
});