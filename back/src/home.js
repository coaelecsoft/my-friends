import Navbar from './components/navbar.js'
import Hero from './components/hero'
import Footer from './components/footer.js'

function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero bgimg={require('./components/arsabela1.jpg')}
                    title='My Best friends in React components'
                    description='Example website with React components' />
            </main>
            <Footer/>
        </>
        )
}
export default Home