import SocialProfile from "../../ui/SocialProfile/SocialProfile.jsx";

export default function Footer() {
    return (
        <footer>
            <section>
                <h2>Contacto</h2>
                <p>ferminsorzzoni@gmail.com</p>
                <div>
                    <SocialProfile type="linkedin" />
                    <SocialProfile type="github" />
                </div>
            </section>

            <section>
                <p>Copyright Fermin Sorzzoni - 2026</p>
            </section>
        </footer>
    );
}