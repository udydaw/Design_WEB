import React from "react";
import "./footer.css"
export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer bg-dark">
                <div className="container">
                    <div className="header">
                        <h2 className="text-center">Join the adventure newsletter to receive our best vacation deal</h2>
                        <p className="text-center">You can unsubscribe at any time.</p>
                        <div className="email row justify-content-center">
                            <div className="col-3">
                                <input type="text" className="form-control form" placeholder="Your Email"/>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-md btn-subscribe">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>About Us</h3>
                            <p>How it works</p>
                            <p>Testimonials</p>
                            <p>Careers</p>
                            <p>Investor</p>
                            <p>Terms of service</p>
                        </div>
                        <div className="col">
                            <h3>Contact Us</h3>
                            <p>Contact</p>
                            <p>Support</p>
                            <p>Destinations</p>
                            <p>Sponsorship</p>
                        </div>
                        <div className="col">
                            <h3>Videos</h3>
                            <p>Submit video</p>
                            <p>Ambasadors</p>
                            <p>Agency</p>
                            <p>Influencer</p>
                        </div>
                        <div className="col">
                            <h3>Social Media</h3>
                            <p>Instagram</p>
                            <p>Facebook</p>
                            <p>Youtube</p>
                            <p>Twitter</p>
                        </div>
                    </div>
                    <p className="text-center copyright">All Right Reserved © 2022</p>
                </div>
            </div>
        )
    }
}