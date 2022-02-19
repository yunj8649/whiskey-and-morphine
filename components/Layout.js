import NavBar from "./NavBar";
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <NavBar />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}