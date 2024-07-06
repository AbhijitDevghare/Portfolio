import Photo from "../../Images/ph.jpg"
import "./LeftHeroSection.css"
function LeftHeroSection()
{
    return (
        <>
            <div className="leftHeroSection"> 
                 <img src={Photo} alt="" />
            </div>
        </>
    )
}

export default  LeftHeroSection