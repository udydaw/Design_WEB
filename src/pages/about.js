import React from "react";
import "./style/style.css";
export default class About extends React.Component{
    render(){
        return(
            <div className="about">
                <div className="container">
                    <h1>About Us</h1>
                    <p>
                        Travelkita is a website that provides updated news about various tourist destinations in Indonesia 
                        and abroad since 2022. In addition, we also provide recommendations for vacation packages 
                        that you can enjoy. 
                    </p>
                </div>
            </div>
        )
    }
}