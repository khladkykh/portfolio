import "./features.css"
import data from "./data";
import { Feature } from "../../components";

function Features (){

    return(
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>

            <div className="gpt3__gpt3__features-container">
                {data.map(item => (
                    <Feature key={item.id} title={item.title} text={item.text}/>
                ))}
            </div>
        </div>
    )
}

export default Features;