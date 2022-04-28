import React from "react";
import Main from "./main";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
export default class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}