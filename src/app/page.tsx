
import {NavBar} from "../../components/NavBar"
import {FeaturedProyect} from "../../components/FeaturedProyect"
import {Hero} from "../../components/Hero"
import {BoxSection} from "../../components/BoxSection"
import {Footer} from "../../components/Footer"
export default function Home() {
  return (
    <div className="">
      <NavBar/>
      <Hero/>
      <FeaturedProyect/>
      <BoxSection/>
      <Footer/>
    </div>
  );
}
