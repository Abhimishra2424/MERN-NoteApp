import {useEffect} from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {

    // agar user ne login kiya to uska info sabkuch 
  // localstorage main save ho jayega 
  // and wo back login page par nahin ja payega
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");

  //   if (userInfo) {
  //     history.push("/mynotes");
  //   }
  // }, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">welcome to Note App</h1>
              <p className="subtitle">One Safe place For All your notes..</p>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
