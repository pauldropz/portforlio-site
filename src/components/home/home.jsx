import "/.home.css";


 import Buttons from "../button/button";

 
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

                        {/* <img src={ img } alt="" /> */}
                </div>
                <a href="#footer" className="scroll-down">
                <hr />
                <h5>scroll down</h5>
                <BsMouse className="scroll" />
                <hr />

                </a>

                    <h2>
                    <span>About Me</span><br />                
                        <p>
                        lorem loremlorkm dfcbwncvhwfew cegwvcetwvfcew cewvtewcte3yfcv3 cv3yt3tc3tc
                        ctegfceycyece c3ycfgyc3fcyt34f 3fdytd6y4g34 fy4g3yfb43f34f34f
                        f43fg3yfgy3gf4ygf4yfg4y3 f43yfg4yfg43 fg3yfg3ygf4y3?
                        </p>
                              
                    </h2>

                    <Buttons />


            </div>
    );
 }
 const toggle = document.querySelector (".main-img");
 toggle.addEventListener ("click", () => {
     toggle.classList.toggle("active")
    })
export default Home;