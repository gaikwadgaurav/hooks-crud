import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProfileForm from "../components/ProfileForm";
import Update from "../components/Update";

export default function Routing() {
    return (
        <Router>
            <Route exact path="/" exact component={ProfileForm}></Route>
            <Route exact path="/Update/:id" exact component={Update}></Route>

        </Router>
    )
}
