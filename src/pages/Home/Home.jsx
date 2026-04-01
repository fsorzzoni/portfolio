import Footer from "../../components/layout/Footer/Footer.jsx";
import Header from "../../components/layout/Header/Header.jsx";
import Main from "../../components/layout/Main/Main.jsx";

export default function Home() {
    return (
        <div className="layout-center my-16">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}