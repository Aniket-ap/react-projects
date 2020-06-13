import React from "react";

import { Route, Link } from "react-router-dom";

const HelpCustomer = () => {
  return <h4>I am a Customer</h4>;
};

const HelpHost = () => {
  return <h4>I am a Host</h4>;
};

function Help() {
  return (
    <div>
      <div>
        <Link to="/help/customer">Help Customer</Link> <br/>
        <Link to="/help/host">Help Host</Link>
      </div>
      <p>I am Goes Here</p>
      <Route path="/help/customer" component={HelpCustomer} />
      <Route path="/help/host" component={HelpHost} />
      <h4>Helo Footer</h4>
    </div>
  );
}

export default Help;
