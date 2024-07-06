import LeftHeroSection from "../LeftHeroSection/LeftHeroSection"
import RightHeroSection from "../RightHeroSection/RightHeroSection"
import "./Home.css";

function Home()
{
    return(
        <>
              <div className="heroSection">
                <RightHeroSection/>   
                <LeftHeroSection/>
            </div>
        </>
    )
}

export default Home