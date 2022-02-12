import React from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import history from "./history";
import PostListing from "../pages/PostListing/PostListing";
import PostDetails from "../pages/PostDetails/PostDetails";
import CreatePost from "../pages/CreatePost/CreatePost";

export const AppRouter = (props) => {
  const { authToken } = props;
  // console.log("TOKEN IN ROUTER:", authToken);

  return (
    <div style={{ marginTop: "4rem" }}>
      <Router history={history}>
        {/*<Header changeStage={props.shareStage} stage={props.stage} />*/}
        <Switch>
          {authToken && (
            <React.Fragment>
              <Route exact path="/postList">
                <PostListing />
              </Route>
              <Route exact path="/postdetails">
                <PostDetails />
              </Route>
              <Route exact path="/post">
                <CreatePost />
              </Route>
            </React.Fragment>
          )}
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};
