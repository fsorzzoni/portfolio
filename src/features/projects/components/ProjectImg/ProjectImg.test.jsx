import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectImg from "./ProjectImg.jsx";

describe("El componente ProjectImg", () => {
    it("renderiza el elemento img", () => {
        render(<ProjectImg imgSrc="test.jpg" />);
        const img = screen.getByAltText("");
        expect(img).toBeInTheDocument();
    });

    it("usa bien el atributo imgSrc", () => {
        const src = "hola123.jpg";
        render(<ProjectImg imgSrc={src} />);
        const img = screen.getByAltText("");
        expect(img).toHaveAttribute("src", src);
    });

    it("el alt queda vacío", () => {
        render(<ProjectImg imgSrc="test.jpg" />);
        const img = screen.getByAltText("");
        expect(img).toHaveAttribute("alt", "");
    });
});