import "/.home.css";

 import img "../props/img2.jpg";
 import { BsMouse } from "react-icons/bs";




 function Home () {
    return (
            <div id="home" className="container home-container">
                <div className="logo">
                    <div className="main-img">
                        <span className="circle"></span>
                        <span className="circle"></span>
                        <span className="circle"></span>
                        <span className="circle"></span>
                        <span className="circle"></span>
                        <span className="circle"></span>
                        <span className="circle"></span>
                        <span className="circle"></span>
                    </div>

                        <img src={ img } alt="" />
                </div>
                <a href="#footer" className="scroll-down">
                <hr />
                <h5>scroll down</h5>
                <BsMouse className="scroll" />
                <hr />

                    <h2><span>About Me</span></h2>
                    
                </a>
            </div>
    );
 }
 export default Home;