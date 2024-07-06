import "./Projects.css"
import triFest from "../../Images/Picture1.png"
import imageStation from "../../Images/imageStation.png"

function Projects()
{
    return (
        <>
            <div id="projects">

                <div className="project">
                <a href={"https://image-station-photography.vercel.app/"}>
                    <h1>Photography website</h1>
                    <img src={imageStation} alt="" /> <br />
                </a>
            </div>   
            
            <div className="project">
                <a href={"https://college-registration-website.vercel.app/"}>
                    <h1>Tri-Fest Registration system</h1>
                    <img src={triFest} alt="" /> <br />
                </a>
            </div>

            </div> 
        </>
    )
}

export default Projects