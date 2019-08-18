import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./pages/Main";
import Post from "./pages/Post";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/post" exact component={Post} />
    </BrowserRouter>
  );
}
