import React from "react";
import Media from "../components/media";
import "./style/style.css";
export default class Gallery extends React.Component{
    render(){
        return(
            <div className="gallery">
                <div className="container">
                    <h1 className="text-center mb-4">Our gallery about holiday destinations in Indonesia</h1>
                    <div className="row mb-4">
                        <div className="col-4">
                            <Media value image="gallery-1.jpg" width="100%" height="238px"/>
                        </div>
                        <div className="col-4">
                            <Media value image="gallery-2.jpg" width="100%" height="238px"/>
                        </div>
                        <div className="col-4">
                            <Media value image="gallery-3.jpg" width="100%" height="238px"/>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-4">
                            <Media value image="gallery-4.jpg" width="100%" height="238px"/>
                        </div>
                        <div className="col-4">
                            <Media value image="gallery-5.jpg" width="100%" height="238px"/>
                        </div>
                        <div className="col-4">
                            <Media value image="gallery-6.jpg" width="100%" height="238px"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <Media value image="gallery-7.jpg" width="100%" height="238px"/>
                        </div>
                        <div className="col-4">
                            <Media value image="gallery-8.jpg" width="100%" height="238px"/>
                        </div>
                        <div className="col-4">
                            <Media value image="gallery-9.jpg" width="100%" height="238px"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}