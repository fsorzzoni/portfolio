import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./Header.jsx";

describe("El componente Header", () => {
    it("renderiza correctamente", () => {
        const { container } = render(<Header />);

        const img = container.querySelector("img");

        const links = screen.getAllByRole("link");

        expect(screen.getByText(/fermin sorzzoni/i)).toBeInTheDocument();
        expect(img).toBeInTheDocument();
        expect(links).toHaveLength(2);
    });
});