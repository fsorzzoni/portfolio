import SocialProfile from "../../ui/SocialProfile/SocialProfile.jsx";

export default function Footer() {
    return (
        <footer className="pt-8 border-t-2 border-background-900">
            <section>
                <h2 className="text-center text-xl mb-3">Contacto</h2>
                <p className="text-center text-primary mb-2">ferminsorzzoni@gmail.com</p>
                <div className="flex justify-center gap-4">
                    <SocialProfile type="linkedin" />
                    <SocialProfile type="github" />
                </div>
            </section>

            <section className="mt-8">
                <p className="text-center text-primary">Copyright Fermin Sorzzoni - 2026</p>
            </section>
        </footer>
    );
}