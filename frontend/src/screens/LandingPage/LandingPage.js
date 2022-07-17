import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Captian America Fan Page</h1>
              <p className="subtitle">Page For All the Fans</p>
              <div>
                <div className="buttonContainer">
                  <a href="/login">
                    <Button size="lg" className="landingbutton">
                      Signin
                    </Button>
                  </a>
                  <a href="/register">
                    <Button
                      size="lg"
                      className="landingbutton"
                      variant="outline-primary"
                    >
                      SignUp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
