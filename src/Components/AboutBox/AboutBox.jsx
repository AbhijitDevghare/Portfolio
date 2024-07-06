import "./AboutBox.css"

function AboutBox(props)
{
    return (
        <>
            <div className="abouBox">
                <div className="aboutImage">
                    <img src={props.src} alt="" />
                </div>
                <h1>{props.tag}</h1>
                <div>
                    
                        {props.para}
                    
                </div>
            </div>
        </>
    )
}

export default AboutBox