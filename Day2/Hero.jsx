// Home.js


import Navbar from "./Navbar";
import "/src/assets/css/Hero.css"; // Import your CSS file


const Hero = () => {
  console.log("He");
  return (
    <>
    <Navbar/>
      <div className="home-container">
        <div style={{ position: "relative" }}>
          <img
            src="/src/assets/images/Hero.png "
            alt="Smooth GIF"
            style={{ width: "145%", height: "100vh"}}
          />
          <div
            style={{
              position: "absolute",
              top: "45%",
              left: "10%",
              transform: "translate(-50%, -90%)",
              color: "white",
            }}
          >
            <p style={{ fontSize: "130px", fontWeight: "bold" }}>
              <br></br>
            </p>

          </div>
        </div>
      </div>
              
    </>
  );
}

export default Hero;
