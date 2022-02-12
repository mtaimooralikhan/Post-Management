import React, { useState } from "react";
import "./assets/css/common.css";
// import { getWelcomeString } from "common/src/main";
import { connect } from "react-redux";
import { AppRouter } from "./routes/router";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import { fetchData } from "./redux/actions";
import { useEffect } from "react";

function App(props) {
  const [stage, seStage] = useState("");
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register(`${process.env.PUBLIC_URL}/sw.js`)
        .then(() => {
          console.log("SW Registered");
        });
  }

  const receiveStage = (stage) => {
    seStage(stage);
  };

  // useEffect(() => {
  //   props.fetchData();
  // }, []);

  // useEffect(() => {
  //   if (!props.loading && props.user) {
  //     console.log("USER:", props.user);
  //   }
  // }, [props.user]);

  return (
      <React.Fragment>
        {/* <Header changeStage={receiveStage} stage={stage} /> */}
        <AppRouter authToken={true}  />
        <Footer />
      </React.Fragment>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     authToken: state.authReducer.user.authToken,
//     loading: state.profileReducer.loading,
//     user: state.profileReducer.user,
//     error: state.profileReducer.error,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchData: (params) => {
//       dispatch(fetchData(params));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;