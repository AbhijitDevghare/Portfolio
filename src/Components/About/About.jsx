import AboutPara from "../AboutPara/AboutPara"
import "./About.css";
import AboutBox from "../AboutBox/AboutBox";

// Importing Images
import fav from "../../Images/fav.jpg"
import alone from "../../Images/alone.jpg"
import Sandeep from "../../Images/Sandeep.jpg"
import Arijit from "../../Images/arijit.jpg"
import ShrustiMam from '../../Images/ShrustiMam.webp';
import Sanket from "../../Images/Sanket.jpg"
import UrviMam from "../../Images/UrviMam.jpg"
import jennyMam from "../../Images/jennyMam.jpg"

function About()
{
    return (
        <>
        <div id="aboutPage">
            <div>
              <AboutPara/>
            </div>

            <div className="aboutFlex">

                <AboutBox src={alone} tag={"What I was ?"} para={<p>
                    I don't know .But , I think I was too afraid about &quot; What was ,what is and what will be ... &quot;
                </p>}/> 

                <AboutBox src={fav} tag={"What I am ?"} para={<p>
                   &quot;Better than yesterday...&quot;
                </p>}/> 

            </div>

            <h1 id="inspirationH1">My Inspiration</h1>

            <div className="aboutFlex">
                <AboutBox src={Sandeep} tag={"Sandeep Maheshwari"} para={<p>
                   &quot;In my school times , I was silent guy means too silent . I was always thinking about things , about me and was too serious about things from externally but not internally... I was afraid of so many things that's why I was stuck . But , when I started watching his motivational videos, i learnt so many things and still learning.&quot;
                </p>}/> 

                <AboutBox src={Arijit} tag={"Arijit Singh"} para={<p>
                   &quot;What I say , He is my biggest inspiration . One of the reason is that he helps me to heal when I am sad. I listen his songs and feel better . Another reason is that he is a good person . I don't like him only because he is the best singer , I like him because he lives simple life and helps needy people. He runs the Tatwamasi Foundation that helps needy ones. This Foundation makes hospital, schools so that the poor people have these facilities in a very very low cost &quot;
                </p>}/> 

                <AboutBox src={ShrustiMam} tag={"Shrushti Deshmukh"} para={<p>
                   &quot;When I had a first day in my junior college , my teacher showed Shrushti Deshmukh interview on screen. And from that day I became her fan . I want to be the IAS officer like her but I did'nt have that much ambitions.&quot;
                </p>}/> 

                <AboutBox src={Sanket} tag={"Sanket Singh"} para={<p>
                   &quot;Sanket Singh is a Software Engineer and what he teaches me is , we should do our work by own and try to figure out things always to solve any problem .&quot;
                </p>}/> 

                <AboutBox tag={"Urvi Mam and Jenny Mam"}  para={
                    <p>
                    <img src={UrviMam} alt="" width={"225px"}/> 
                    <img src={jennyMam} alt="" /> <br /> <br />
                   &quot;These teachers are always my Favourite. I easily understand hard concepts because of only them . I learned C language from the Jenny Mam and she made my base strong . And now the next I am learning DSA with C++ with Urvi Mam . She is my Favourite teacher.&quot;
                  
                </p>}/> 

                

            </div>
        
        </div>

        </>
    )
}

export default About