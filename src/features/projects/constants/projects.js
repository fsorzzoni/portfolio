import unitrackerImg from "../../../assets/unitracker.png";
import portfolioImg from "../../../assets/portfolio.png";
import ssooImg from "../../../assets/ssoo.png";
import sejuImg from "../../../assets/seju.png";

export const PROJECTS = {
    unitracker: {
        title: "Unitracker",
        description: "Aplicación fullstack desarrollada íntegramente de forma autónoma para el seguimiento y análisis del progreso académico universitario.",
        techDescription: "Backend desarrollado como API REST con auth JWT implementada con Node.js, TypeScript, Express, Passport.js, Prisma ORM y PostgreSQL. Frontend desarrollado con React, TypeScript, Vite, TanStack Query, Zustand, Tailwind CSS, entre otras.",
        image: unitrackerImg,
        githubUrl: "https://github.com/ferminsorzzoni/unitracker",
        liveUrl: "https://unitracker.dev/",
    },
    portfolio: {
        title: "Portfolio",
        description: "La página que estás viendo.",
        techDescription: "Desarrollado utilizando React y TailwindCSS.",
        image: portfolioImg,
        githubUrl: "https://github.com/ferminsorzzoni/ferminsorzzoni.github.io",
        liveUrl: "https://ferminsorzzoni.github.io/",
    },
    ssoo: {
        title: "TP Sistemas Operativos",
        description: "Simulación de un sistema operativo, incluyendo el kernel, CPU, I/O y memoria.",
        techDescription: "Desarrollado con Go, aplicando conceptos de sistemas operativos y algoritmos.",
        image: ssooImg,
        githubUrl: "https://github.com/ferminsorzzoni/TP-UTNSO-1c2025",
    },
    seju: {
        title: "Inscripciones SeJu",
        description: "Software para gestionar inscripciones para la organización \"SeJu\"",
        techDescription: "Desarrollado en Go.",
        image: sejuImg,
        liveUrl: "https://sejuturdera.com.ar/",
    }
}
