import "./Projects.css"
import triFest from "../../Images/picture1.png"
import Project from "../Project/Project"
import imageStation from "../../Images/imageStation.png"

function Projects()
{
    return (
        <>
            <div id="projects">
                <Project src={triFest} url={"https://college-registration-website.vercel.app/"} tag={"College Tri-Fest Registration system"}/> 
                <Project src={imageStation} url={"https://image-station-photography.vercel.app/"} tag={"Photography website"}/>
 

            </div> 
        </>
    )
}

export default Projects