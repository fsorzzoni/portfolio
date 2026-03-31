import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import RedirectIcon from "./RedirectIcon.jsx";

describe("El componente RedirectIcon", () => {
    it("renderiza correctamente el SVG de redirección", () => {
        const { container } = render(<RedirectIcon className="w-8 h-8 block" />)

        const svg = container.querySelector("svg");

        expect(svg).toBeInTheDocument();
        expect(svg).toHaveClass("w-8", "h-8", "block");
        expect(svg).toHaveAttribute("aria-hidden", "true");
    });
});