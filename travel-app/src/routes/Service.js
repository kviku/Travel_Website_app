import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/2.jpg"
import Footer from "../components/Footer";
function Service (){
    return(
        <>
        <Navbar />
         <Hero 
           cNmae ="hero-mid" 
           heroImg ={AboutImg}
           title="Service"
          />
          <Footer/>
        </>
    )
    }
    export default Service;