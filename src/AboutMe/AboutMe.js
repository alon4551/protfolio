import React from "react";
import './AboutMe.css'
import profilePic from '../public/profile.jpg'
import {Image} from "react-bootstrap";
import education from './education.json';
import personalInfo from './personalInfo.json'
function AboutMe (){
    return(<>
        <div className="aboutme">
            <div className="recruiter">

        <h3>
        Hello recruiter, you probably asking yourself why is Alon shraybman is your next employe, here is a cupple reasone why?
         </h3>
            </div>
            <div className="profileDiv">
                <Image src={profilePic} roundedCircle  className="profile"/>
                <div className="card">
                    {
                        personalInfo.map((tag)=>{
                            return(<div className="item">
                            <h3 className="field">{tag.field}</h3>
                            <h3 className="value">{tag.value}</h3>
                            </div>)
                        })
                    }
                </div>
            </div>
            <div className="school" >
                <h1>
                    Education
                </h1>
                {
                    education.map((item,index)=>{
                        console.log(index%2);
                       return <div className= {`subject " + ${index%2==0?'right':'left'}` }>
                            <span className="year">
                                {item.start} - {item.end}
                            </span>
                            <hr/>
                            {item.subject} <br/>At {item.school}
                        </div>
                    })
                }
          
                </div>
        </div>
    </>)
}
export default AboutMe;
