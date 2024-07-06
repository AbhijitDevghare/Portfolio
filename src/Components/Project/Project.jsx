import "./Project.css"
function Project(props)
{
    return (
        <>
            <div className="project">
                <a href={props.url}>
                    <h1>{props.tag}</h1>
                    <img src={props.src} alt="" /> <br />
                </a>
            </div>
        </>
    )
}

export default Project