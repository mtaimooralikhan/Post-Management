import React, { useState } from "react";
import "./assets/css/common.css";
// import { getWelcomeString } from "common/src/main";
import { connect } from "react-redux";
import { AppRouter } from "./routes/router";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import { fetchData } from "./redux/actions";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Col, Row, Button } from "antd";
import history from "./routes/history";

function App() {
  

  // const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const [auth, setAuth] = useState(false);
  

  const loginHandler = () => {
    // loginWithRedirect();
    setAuth(true);
  };

  const logoutHandler=()=>{
    // logout()
    setAuth(false)
  }
  useEffect(() => {
    if (auth) {
      history.push("/postlist");
    }
  }, [auth]);

  return (
    <React.Fragment>
      <Row style={{ display: "flex", justifyContent: "end" }}>
        <Col>
          {!auth ? (
            <Button onClick={() => loginHandler()}>Sign In</Button>
          ) : null}
        </Col>
        <Col>
        {
          auth?
          <Button onClick={() => logoutHandler()}>
            Sign Out
          </Button>
          :
          null
        }
          
        </Col>
      </Row>

      <AppRouter authToken={auth} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
