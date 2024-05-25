import React, { useEffect } from "react";
import profilePic from '../public/profile.jpg'
import { Image } from "react-bootstrap";
import './Home.css'

function Home(){
    return(
        <div className="home">
            <div className="ripple">
                <div className="circle small shade5"/>
                <div className="circle medium shade4"/>
                <div className="circle large shade3"/>
                <div className="circle xlarge shade2"/>
                <div className="circle xxlarge shade1"/>
            </div>
            <div className="homepage">
        
                <div className="headline">
                <h2>
                    I'm your next
                </h2>
                <h1>Web developer</h1>
                </div>
                <Image src={profilePic} roundedCircle  className="profile"/>
            </div>
        </div>
    )
}
export default Home;