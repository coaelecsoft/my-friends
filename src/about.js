import Navbar from './components/navbar'
import Footer from './components/footer'
//import Hero from './components/hero'
//import Api from './api'
import Pets from './pets'

function About() {
    return (
        <>
            <Navbar />
            <main>
                
                <Pets />
               </main>
            <Footer/>
        </>
        )
}
export default About
/*  
    <Hero bgimg={require('./components/misasneza.jpg')}
                    title='Example website from React'
                    description='This website represent my skills with using React js Lybrary' />

 */