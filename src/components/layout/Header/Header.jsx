import ProfilePhoto from "../../ui/ProfilePhoto/ProfilePhoto.jsx";

export default function Header() {
    return (
        <header className="flex-auto justify-between items-center">
            <div className="flex-auto items-center">
                <ProfilePhoto />
                <h1>Fermin Sorzzoni</h1>
            </div>

            <div>
                <SocialProfile type="github" />
                <SocialProfile type="linkedin" />
            </div>
        </header>
    );
}