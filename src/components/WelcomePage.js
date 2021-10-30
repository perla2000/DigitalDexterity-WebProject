import React from "react";
import { Link } from "react-router-dom";
import vid from "./videos/dark.mp4";
function Welcome() {
    return (
        <>

<video
autoPlay
loop
muted style={{
position: "absolute",
  width:"100%",
  height:"100%",
  objectFit:"cover",
  zIndex:"-1",

}}>

  <source src={vid} type="video/mp4"/>
  </video> 
  <div className="center" href="" style={{
fontSize:"60px", fontFamily:"arial" }}>
    
    <Link to="/login" style={{color:'white',
  width:"100%",
  height:"100vh",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  objectFit:"contain",
  zIndex:"-1",
  textDecoration: "none"}}>
                Digital Dexterity
              </Link>
        </div>
        
</>
      
  );
  

}
export default Welcome;