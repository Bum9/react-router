import React from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1> the Welcome page</h1>
      <Route path="/welcome/newUser">
        <p>Welcome New User</p>
      </Route>
    </section>
  );
};

export default Welcome;
