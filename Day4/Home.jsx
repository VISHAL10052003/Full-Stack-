import Project from '../auth/Project';
import About from '../auth/About';
import Hero from '../auth/Hero';
// import Navbar from '../auth/Navbar';
import Service from '../auth/Service';
import Footer from '../auth/Footer';
import Head from '../auth/Head';

const Home=()=>{
    return(
        <>
            {/* <Navbar/> */}
            <Hero/>
            <Head/>
            <Service/> 
            <About/> 
            <Project/>
            <Footer/>
            
        </>
    )
}
export default Home;