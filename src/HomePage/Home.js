import React from "react";
import './Home.css'

function Home(){
    return(
        <div>
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
                    Im your next
                </h2>
                <h1>Web developer</h1>
                </div>
                <img src="" alt="Alon Shraibman"/>
            </div>
        </div>
    )
}
export default Home;