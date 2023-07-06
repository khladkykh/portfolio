import "./about.css"
import { Feature } from "../../components";

function About (){

    return(
        <div className="gpt3__about section__margin" id="about">
            <div className="gpt3__about-feature">
                <div className="gpt3__about-feature-text">
                    <div className="gpt3__about-feature__title">
                        <div/>
                        <h1>What is GPT-3</h1>
                    </div>
                    <div className="gpt3__about-feature__text"> 
                        <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
                    </div>
                </div> 
            </div>
            <div className="gpt3__about-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__about-container">
                <Feature title="Chatbots" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b "/>
                <Feature title="Knowledgebase" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
                <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
            </div>
        </div>
    )
}

export default About;