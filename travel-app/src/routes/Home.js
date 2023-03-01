import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import HomeImg from "../assets/12.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home (){
return(
    <>
    <Navbar />
    <Hero
    cNmae ="hero"
    heroImg ={HomeImg}
    title="Your journey your Story"
    text ="Choose Your Favourite Destination."
    buttonText = "Travel Plan"
    url ="/"
    btnClass ="show"

   />
   <Destination/>
   <Trip/>
   <Footer/>
    </>
)
}
export default Home;

// https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1421&q=80