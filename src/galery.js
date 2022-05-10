import Articles from "./components/articles"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import Pets from "./pets"


function Galery() {

    return(
        <>
            <Navbar />
            <main>
                <Pets />
                <Articles />
            </main>
            <Footer/>
        </>
    )
}
export default Galery