import React from "react";
import Media from "../components/media";
import "./style/style.css"

export default class Home extends React.Component{
  render(){
    return(
      <div className="home">
        <div className="home-banner">
          <div className="content">
            <h1 className="text-center">ADVENTURE AWAIT</h1>
            <p className="text-center">What are you waiting for?</p>
            <div className="d-flex align-items-center justify-content-center">
              <button className="btn btn-md btn-1">Get Started</button>
              <button className="btn btn-md btn-2">Watch trailer</button>
            </div>
          </div>
        </div>
        <div className="container">
            <div className="destination mt-4">
                <h3 className="text-center mb-4">Check Our EPIC Destinations!</h3>
                <div className="row row-1">
                    <div className="col">
                        <Media value image="jungle-1.jpg" width="100%" height="100%"/>
                        <div className="card-body">
                            <p>Adventure exploring the jungle in Kalimantan</p>
                        </div>
                    </div>
                    <div className="col">
                        <Media value image="mountain-2.jpg" width="100%" height="100%"/>
                        <div className="card-body">
                            <p>Explore the beautiful mountains in East Java</p>
                        </div>
                    </div>
                </div>
                <div className="row row-2">
                    <div className="col">
                        <Media value image="beach-1.jpg" width="100%" height="100%"/>
                        <div className="card-body">
                            <p>The beauty of the beach waves at Klingking beach, Bali</p>
                        </div>
                    </div>
                    <div className="col">
                        <Media value image="waterfall-1.jpg" width="100%" height="100%"/>
                        <div className="card-body">
                            <p>The Coolness of Waterfalls in West Java</p>
                        </div>
                    </div>
                    <div className="col">
                        <Media value image="sawah-1.jpg" width="100%" height="100%"/>
                        <div className="card-body">
                            <p>The beauty of the terraced rice fields in Bali</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}